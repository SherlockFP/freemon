import * as THREE from 'three';
import { Track } from './track.js';
import { Obstacles } from './obstacles.js';
import { Environment, biomeAt, trackPalette, musicStyleAt } from './biomes.js';
import { music } from './music.js';

// SONSUZ İNİŞ — endless Temple-Run-style downhill run (RUNNER.md).
// Core loop: the ball's SIZE is its health. Snow piles grow it; crashing knocks a layer off (and lets the Yeti
// close in); crashing at the smallest size makes it burst. Bigger = faster, higher multiplier, smashes more,
// but steers heavier and won't fit through narrow gaps.
// Physics live in track-local coordinates: s along the path, u sideways (+right), h above the surface.
export const RCFG = {
  startSpeed: 11,
  maxSpeed: 27,
  speedPerM: 0.005,
  sizeSpeed: 0.045,      // top speed +4.5% per size tier
  bpm0: 100,
  bpmMax: 150,
  bpmPerM: 0.012,
  accel: 7,
  gravity: 28,
  jumpV: 8.5,
  jumpPadV: 11,
  coyote: 0.12,
  laneW: 2.4,            // 3 lanes at u = -2.4, 0, +2.4 (Subway Surfers style)
  laneStiff: 320,        // lane-change spring: ~0.2 s per lane
  diveV: -20,            // swipe down while airborne: slam back onto the snow
  // Size tiers = health. Index 0 is "about to burst". Max fits a lane (diameter 2.1 < 2.4).
  tierR: [0.45, 0.6, 0.75, 0.9, 1.05],
  pilesPerTier: 4,       // snow piles needed to grow one tier
  smashMargin: 2,        // you must be this many sizes above an obstacle's toughness to plough through it
  crashSlow: 0.45,       // speed kept after a crash
  invulnAfterCrash: 1.1,
  // The Yeti.
  yetiStart: 30,         // metres behind at the start
  yetiMax: 55,
  yetiRecover: 1.4,      // m/s you pull away at full speed
  yetiCrash: 11,         // metres it gains per crash
  yetiStumbleSpeed: 0.8, // below this fraction of target speed you are not pulling away
  fallDeath: -24,
  // Power-up durations (seconds) when the meta module isn't there to supply upgraded values.
  dur: { magnet: 8, x2: 10, superjump: 9, rocket: 6, sled: 30 },
  superJumpK: 1.55,
  rocketH: 6,
  closeCall: 5,          // metres: the Yeti got this close and you got away → close call
};

export const speedAt = (s) => Math.min(RCFG.maxSpeed, RCFG.startSpeed + Math.max(0, s) * RCFG.speedPerM);
export const bpmAt = (s) => Math.min(RCFG.bpmMax, RCFG.bpm0 + Math.max(0, s) * RCFG.bpmPerM);

const TIERS = RCFG.tierR.length;
const _f = { pos: new THREE.Vector3(), tan: new THREE.Vector3(), right: new THREE.Vector3(), up: new THREE.Vector3() };
const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _look = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _x = new THREE.Vector3();

export class Runner {
  constructor(ctx) {
    this.ctx = ctx; // { scene, camera, lib, ball, fx, ui, audio, platform, save, input }
    this.events = [];
    this.camPos = new THREE.Vector3();
    this.camLook = new THREE.Vector3();
    this.camUp = new THREE.Vector3(0, 1, 0);
    this.state = 'idle';
  }

  start(seed = (Math.random() * 1e9) | 0) {
    const { scene } = this.ctx;
    this.dispose();
    this.seed = seed;
    this.track = new Track(scene, {
      seed,
      palette: trackPalette,
      speedAt,
      bpmAt,
      biomeIndexAt: (s) => biomeAt(s).index,
    });
    this.obstacles = new Obstacles(scene, this.track, { seed: seed ^ 0x9e3779b9, jumpPadV: RCFG.jumpPadV });
    this.track.onPiece = (piece) => this.obstacles.spawn(piece, piece.diff ?? Math.min(1, piece.s0 / 5000), piece.biome ?? biomeAt(piece.s0).index);
    this.track.ensure(320);
    this.env = new Environment(scene, this.track, { lib: this.ctx.lib });
    this.yeti = makeYeti(scene, this.ctx.lib);
    this.avalanche = makeAvalanche(scene);

    this.tier = 1;            // start one layer above "fragile" so the first crash is a lesson, not a game over
    this.grow = 0;            // progress to the next tier (0..1)
    const b = (this.b = { s: 2, u: 0, h: 0, r: RCFG.tierR[1], vs: RCFG.startSpeed * 0.6, vu: 0, ve: 0, vh: 0, size: 2 });
    this.rShown = b.r;
    this.grounded = true;
    this.coyoteT = 0;
    this.lane = 0;
    this.targetU = 0;
    this.lastSurf = 0;
    this.lastSlope = 0;
    this.gap = RCFG.yetiStart;
    this.score = 0;
    this.coins = 0;
    this.time = 0;
    this.deadT = 0;
    this.revived = false;
    this.invulnT = 1.2;
    this.helmet = false;
    this.magnetT = 0;
    this.rocketT = 0;
    this.x2T = 0;
    this.superT = 0;
    this.sledT = 0;
    this.boxes = 0;
    this.crystals = 0;
    this.revives = 0;
    this.jumps = 0;
    this.smashes = 0;
    this.maxTier = 1;
    this.closeArmed = false;
    this.timeScale = 1;
    this.slowUntil = -1;
    this.zip = null;
    this.grind = null;
    this.diveT = 0;
    this.gateChain = 0;
    this.ctx.meta?.track?.('run_start', { mode: 'endless' });
    this.obstacles.setNextLetter?.(this.ctx.meta?.letterHunt?.().nextLetter ?? null);
    this.iceT = 0;
    this.lastSafe = { s: 2, u: 0 };
    this.safeT = 0;
    this.shake = 0;
    this.rollS = 0;
    this.rollU = 0;
    this.roarT = 0;
    this.cause = '';
    this.crashes = 0;
    this.state = 'play';

    const ball = this.ctx.ball;
    ball.reset(b.r);
    this.ctx.fx.reset();
    this.ctx.input.consumeDx();
    this.ctx.input.consumeJump();

    music.init();
    music.start(musicStyleAt(0), bpmAt(0));
    music.setIntensity(0.3);
    this.ctx.ui.runnerHud(true, biomeAt(0).biome.name);
    this.updateHud();
    this.placeBall(true);
  }

  get mult() {
    const base = (this.ctx.meta?.multiplier?.() ?? 1) + this.tier;
    return base * (this.x2T > 0 ? 2 : 1);
  }

  dur(kind) { return this.ctx.meta?.duration?.(kind) || RCFG.dur[kind]; }

  // ---------- frame ----------
  update(rdt) {
    if (this.state === 'idle') return;
    // Ski-jump slow-mo: ease into the slowed window, ease back out after.
    const wantTs = this.state === 'play' && this.b.s < this.slowUntil && !this.grounded ? this.slowScale : 1;
    this.timeScale += (wantTs - this.timeScale) * Math.min(1, rdt * 8);
    const dt = rdt * this.timeScale;
    const beat = music.beat;
    this.time += dt;
    if (this.state === 'play') this.updatePlay(dt, beat);
    else if (this.state === 'dying') this.updateDying(dt);

    this.track.ensure(this.b.s + 320);
    this.track.trim(this.b.s - 70);
    this.obstacles.trim(this.b.s - 70);
    this.obstacles.update(dt, beat, this.b);
    this.env.update(dt, this.ctx.camera, this.b, beat);
    // Size changes animate quickly instead of popping (crash = visible shrink).
    this.rShown += (this.b.r - this.rShown) * Math.min(1, dt * 12);
    this.ctx.ball.setRadius(this.rShown);
    this.placeBall(false);
    this.updateYeti(dt);
    this.ctx.fx.update(dt, this.ctx.ball);
    this.updateCamera(rdt);
  }

  updatePlay(dt, beat) {
    const { input, ui } = this.ctx;
    const b = this.b;
    const tr = this.track;

    // ---- input ----
    const hw = Math.max(1, tr.halfWidth(b.s) || tr.pieceAt(b.s)?.halfWidth || 3.5);
    input.consumeDx(); // free drag isn't used here — lanes are
    const lane = input.consumeLane();
    if (lane) {
      ui.hint(false);
      this.lane = clamp(this.lane + lane, -1, 1);
      this.ctx.platform.haptic('select');
    }
    this.targetU = this.lane * RCFG.laneW;
    if (input.consumeJump() && (this.grounded || this.coyoteT > 0)) { ui.hint(false); this.jump(RCFG.jumpV, false); }
    if (input.consumeDive()) {
      this.diveT = 0.7;
      if (!this.grounded && !this.zip && b.vh > RCFG.diveV) b.vh = RCFG.diveV;
    }
    this.diveT -= dt;

    // ---- speed: downhill pace + size bonus; rocket overrides ----
    const top = speedAt(b.s) * (1 + this.tier * RCFG.sizeSpeed) * (this.rocketT > 0 ? 1.35 : 1);
    if (b.vs < top) b.vs = Math.min(top, b.vs + RCFG.accel * dt);
    else b.vs = Math.max(top, b.vs - RCFG.accel * 0.6 * dt);
    this.invulnT -= dt;
    this.coyoteT -= dt;
    this.iceT -= dt;
    if (this.magnetT > 0) this.magnetT -= dt;
    if (this.x2T > 0) this.x2T -= dt;
    if (this.superT > 0) this.superT -= dt;
    if (this.sledT > 0) { this.sledT -= dt; if (this.sledT <= 0) this.float('KIZAK BİTTİ', ''); }
    if (this.rocketT > 0) {
      this.rocketT -= dt;
      if (Math.random() < dt * 40) this.burst(1, 0xffa040, 2);
      if (this.rocketT <= 0) { this.invulnT = Math.max(this.invulnT, 1); this.float('İNİŞ!', ''); }
    }
    // Double-tap: ride a sled (Subway's hoverboard) — one free crash for its duration.
    if (input.consumeDoubleTap() && this.sledT <= 0 && this.ctx.meta?.useSled?.()) {
      this.sledT = this.dur('sled');
      this.ctx.audio.milestone(2);
      this.float('KIZAK!', 'big');
      this.ctx.meta?.track?.('powerup', { kind: 'sled' });
    }

    const steps = Math.max(1, Math.ceil(dt / (1 / 120)));
    const h = dt / steps;
    for (let i = 0; i < steps && this.state === 'play'; i++) this.step(h, hw);

    // ---- Yeti: pulls back while you're flying, closes in when you stumble ----
    if (b.vs >= top * RCFG.yetiStumbleSpeed) this.gap = Math.min(RCFG.yetiMax, this.gap + RCFG.yetiRecover * dt);
    else this.gap -= (top * RCFG.yetiStumbleSpeed - b.vs) * 0.35 * dt;
    if (this.gap <= 0) this.die('yeti');
    if (this.gap < RCFG.closeCall) this.closeArmed = true;
    else if (this.closeArmed && this.gap > 15) {
      this.closeArmed = false;
      this.score += 250 * this.mult;
      this.float('KIL PAYI!', 'big');
      this.ctx.meta?.track?.('close_call', {});
    }
    this.roarT -= dt;
    if (this.gap < 14 && this.roarT <= 0) {
      this.roarT = 3;
      this.roar();
    }

    // ---- scoring / music ----
    this.score += b.vs * dt * this.mult;
    music.setBpm(bpmAt(b.s));
    music.setIntensity(clamp(0.3 + b.s / 2500 + (this.gap < 15 ? 0.3 : 0), 0.3, 1));
    this.ctx.audio.setRoll(this.grounded ? clamp(b.vs / RCFG.maxSpeed, 0, 1) * 0.7 : 0, clamp(b.r / 1.5, 0, 1) * 0.5);
    this.updateHud();

    // Remember a safe spot for "DEVAM ET".
    this.safeT -= dt;
    if (this.safeT <= 0 && this.grounded && Math.abs(b.u) < hw - 0.8 && tr.surfaceAt(b.s, b.u) !== -Infinity) {
      this.safeT = 0.4;
      this.lastSafe.s = b.s;
      this.lastSafe.u = b.u;
    }
  }

  updateHud() {
    const bi = biomeAt(this.b.s);
    this.ctx.ui.runnerStats(this.score, this.coins, this.mult, bi.t, Math.round(this.b.s), bi.biome.name);
    this.ctx.ui.runnerVitals({
      tier: this.tier, tiers: TIERS, grow: this.grow, gap: this.gap, yetiMax: RCFG.yetiMax,
      helmet: this.helmet, magnet: this.magnetT > 0, rocket: this.rocketT > 0,
      x2: this.x2T > 0, superjump: this.superT > 0, sled: this.sledT > 0,
    });
  }

  step(dt, hw) {
    const b = this.b;
    this.stepDt = dt;
    const tr = this.track;
    // Lateral: player spring (heavier when big, slippery on ice) + external knocks / curve drift.
    // Lane spring: snappy when small, heavier when big, mushy on ice.
    const mass = 1 + this.tier * 0.18;
    const grip = this.iceT > 0 ? 0.3 : 1;
    const k = (RCFG.laneStiff * grip) / mass;
    b.vu += ((this.targetU - b.u) * k - b.vu * 2 * Math.sqrt(k) * 0.95) * dt;
    b.ve *= Math.exp(-2.5 * dt);
    b.ve -= tr.curvature(b.s) * b.vs * b.vs * 0.12 * dt;
    const du = (b.vu + b.ve) * dt;
    b.u += du;
    const ds = b.vs * dt;
    b.s += ds;

    // Snow banks keep you in; cliffs (edge 0) don't.
    const edge = tr.edgeAt(b.s);
    const lim = hw - b.r * 0.9;
    if (edge > 0 && this.grounded && b.h < edge + 0.05 && Math.abs(b.u) > lim) {
      b.u = Math.sign(b.u) * lim;
      this.ctx.platform.haptic('light');
      b.ve *= -0.35;
      // Bounced off the snow bank: snap back to the nearest lane that fits.
      while (Math.abs(this.lane * RCFG.laneW) > lim + 0.01 && this.lane !== 0) this.lane -= Math.sign(this.lane);
    }

    // Vertical.
    const surf = tr.surfaceAt(b.s, b.u);
    if (this.zip) {
      // Hanging from the rope: centre lane, fixed height, no gravity until the far end.
      this.grounded = false;
      b.vh = 0;
      this.lane = 0;
      b.h += (this.zip.h - b.h) * Math.min(1, dt * 10);
      if (b.s >= this.zip.s1) { this.zip = null; this.ctx.audio.whoosh(); }
    } else if (this.grind) {
      this.grounded = true;
      b.vh = 0;
      b.h = this.grind.h;
      this.lane = clamp(Math.round(this.grind.u / RCFG.laneW), -1, 1);
      b.vs = Math.min(RCFG.maxSpeed + 4, b.vs + 3 * dt);
      this.score += 30 * dt * this.mult;
      if (Math.random() < dt * 30) this.burst(1, 0xffd060, 2);
      if (b.s >= this.grind.s1) this.endGrind();
    } else if (this.rocketT > 0) {
      this.grounded = false;
      b.vh = 0;
      b.h += (RCFG.rocketH - b.h) * Math.min(1, dt * 4);
    } else if (this.grounded) {
      if (surf === -Infinity) {
        this.grounded = false;
        this.coyoteT = RCFG.coyote;
        b.vh = 0;
      } else if (surf < this.lastSurf - 0.2 && this.lastSlope > 0.08) {
        this.jump(Math.max(6, b.vs * this.lastSlope * 1.1), true); // left a ramp lip
      } else {
        this.lastSlope = (surf - this.lastSurf) / Math.max(1e-3, ds);
        b.h = surf;
      }
      if (surf !== -Infinity) this.lastSurf = surf;
    } else {
      b.vh -= RCFG.gravity * dt;
      b.h += b.vh * dt;
      if (surf !== -Infinity && b.vh <= 0 && b.h <= surf && b.h > surf - 1.2) this.land(surf);
      if (b.h < RCFG.fallDeath) this.die('fall');
    }

    // Collisions.
    b.size = this.tier + 1;
    b.magnet = this.magnetRadius();   // obstacles.collide may widen flake pickup radius by this
    const ev = this.events;
    ev.length = 0;
    this.obstacles.collide(b, ev);
    for (let i = 0; i < ev.length && this.state === 'play'; i++) this.handle(ev[i]);

    this.rollS += ds;
    this.rollU += du;
  }

  jump(vh, fromRamp) {
    const b = this.b;
    if (!fromRamp) {
      this.jumps++;
      this.ctx.meta?.track?.('jump', {});
      if (this.superT > 0) vh *= RCFG.superJumpK;
    }
    this.grounded = false;
    this.coyoteT = 0;
    b.vh = vh;
    this.lastSlope = 0;
    this.ctx.audio.whoosh();
    this.ctx.platform.haptic(fromRamp ? 'medium' : 'light');
  }

  land(surf) {
    const b = this.b;
    const impact = clamp(-b.vh / 14, 0, 1);
    this.grounded = true;
    b.h = surf;
    b.vh = 0;
    this.lastSurf = surf;
    this.lastSlope = 0;
    if (impact > 0.3) {
      this.ctx.audio.land(impact);
      this.ctx.platform.haptic('medium');
      this.shake += impact * 0.4;
      this.burst(12, 0xffffff, 3);
    }
  }

  // ---------- the core loop ----------
  addSnow(amount) {
    const b = this.b;
    if (this.tier >= TIERS - 1) {
      // Max size: extra snow is pure score.
      this.score += 60 * this.mult;
      this.grow = 1;
    } else {
      this.grow += amount;
      // Melting can eat into the layer below.
      if (this.grow < 0) {
        if (this.tier > 0) { this.tier--; this.grow += 1; } else this.grow = 0;
      }
      if (this.grow >= 1) {
        this.grow -= 1;
        this.tier++;
        this.maxTier = Math.max(this.maxTier, this.tier);
        this.ctx.meta?.track?.('tier_up', { tier: this.tier });
        this.ctx.audio.milestone(this.tier + 1);
        this.ctx.platform.haptic('success');
        this.float(`BÜYÜDÜN! x${this.mult}`, 'big');
        this.ctx.ui.banner(['', 'BÜYÜYOR!', 'KOCAMAN!', 'DEV TOP!', 'ÇIĞ!'][this.tier] || 'ÇIĞ!', Math.min(5, this.tier + 1));
      }
    }
    const t = this.tier, g = this.tier >= TIERS - 1 ? 0 : this.grow;
    b.r = RCFG.tierR[t] + (RCFG.tierR[Math.min(TIERS - 1, t + 1)] - RCFG.tierR[t]) * g * 0.6;
  }

  // Hit something solid. Bigger than its toughness → it shatters. Otherwise you lose a layer (or burst).
  hit(e) {
    const b = this.b;
    const { audio, platform } = this.ctx;
    const tough = e.toughness ?? 5;
    if (this.rocketT > 0 || this.tier + 1 >= tough + RCFG.smashMargin) {
      this.obstacles.resolve?.(e.id, true);
      this.smashes++;
      this.ctx.meta?.track?.('smash', { toughness: tough });
      this.score += 40 * tough * this.mult;
      audio.crash(clamp(tough / 5, 0.3, 1));
      platform.haptic('medium');
      this.shake += 0.25;
      b.vs *= this.rocketT > 0 ? 1 : 0.92;
      this.debris(e, 14);
      this.float(['', 'ÇİT!', 'KIRDIN!', 'PARAMPARÇA!', 'DEVİRDİN!', 'YIKTIN!'][Math.min(5, tough)], '');
      return;
    }
    this.obstacles.resolve?.(e.id, false);
    if (this.invulnT > 0) return;
    if (this.sledT > 0) {
      this.sledT = 0;
      this.invulnT = RCFG.invulnAfterCrash;
      audio.crash(0.5);
      platform.haptic('heavy');
      this.debris(e, 10);
      this.float('KIZAK KIRILDI!', 'big');
      return;
    }
    if (this.helmet) {
      this.helmet = false;
      this.invulnT = RCFG.invulnAfterCrash;
      audio.bump(0.6);
      platform.haptic('medium');
      this.debris(e, 8);
      this.float('KASK KURTARDI!', 'big');
      return;
    }
    this.crash(e);
  }

  crash(e) {
    const b = this.b;
    const { audio, platform } = this.ctx;
    this.crashes++;
    this.ctx.meta?.track?.('crash', {});
    this.debris(e, 10);
    if (this.tier === 0) {
      this.explode();
      return;
    }
    // Knock a layer off: the lost snow sprays out as chunks, the ball visibly shrinks and stumbles.
    const lostR = b.r - RCFG.tierR[this.tier - 1];
    this.tier--;
    this.grow = 0;
    b.r = RCFG.tierR[this.tier];
    b.vs *= RCFG.crashSlow;
    if (e.headOn !== false) b.s -= 0.6; // bounce back off the obstacle
    b.ve += (b.u >= (e.u ?? 0) ? 1 : -1) * 3;
    this.gap -= RCFG.yetiCrash;
    this.invulnT = RCFG.invulnAfterCrash;
    this.burst(18 + Math.round(lostR * 40), 0xffffff, 6);
    audio.crash(0.6);
    audio.bump(1);
    platform.haptic('heavy');
    this.shake += 0.9;
    this.float(this.tier === 0 ? 'SON KATMAN!' : 'KÜÇÜLDÜN!', 'bad');
    if (this.gap < 16) this.float('YETİ YAKLAŞIYOR!', 'bad');
  }

  explode() {
    const b = this.b;
    // The ball bursts into powder.
    this.burst(60, 0xffffff, 10);
    this.burst(20, 0xd6e8ff, 6);
    this.ctx.ball.group.visible = false;
    this.die('explode');
  }

  handle(e) {
    const b = this.b;
    const { audio, platform } = this.ctx;
    switch (e.type) {
      case 'hit':
        this.hit(e);
        break;
      case 'block': {
        // Older event shape: treat head-on blocks as a toughness-5 hit, glancing ones as a nudge.
        const headOn = Math.abs(e.ds) > Math.abs(e.du);
        if (headOn) this.hit({ toughness: 5, s: b.s, u: b.u, headOn: true });
        else b.ve += Math.sign(e.du || 1) * 2;
        break;
      }
      case 'knock':
        if (this.invulnT > 0 || this.rocketT > 0) break;
        b.ve += e.du * (e.strength ?? 1);
        if (e.dh > 0) { this.grounded = false; b.vh = Math.max(b.vh, e.dh); }
        audio.bump(0.5);
        platform.haptic('medium');
        this.shake += 0.35;
        break;
      case 'ice':
        this.iceT = 0.15;
        break;
      case 'push':
        b.u += (e.du || 0) * this.stepDt;
        break;
      case 'slowmo':
        if (this.slowUntil < e.s1) {
          this.slowUntil = e.s1;
          this.slowScale = e.scale || 0.4;
          this.float('ZAMAN RAMPASI!', 'big');
        }
        break;
      case 'zip':
        if (!this.zip) {
          this.zip = { s1: e.s1, h: (e.h ?? 3.4) - this.b.r * 2.2 };
          this.lane = 0;
          audio.whoosh();
          platform.haptic('medium');
          this.float('HALAT!', 'big');
          this.gap = Math.min(RCFG.yetiMax, this.gap + 6); // the Yeti can't follow on the rope
        }
        break;
      case 'loop':
        if (b.vs < (e.minSpeed || 0)) b.vs = e.minSpeed * 1.05; // the boost strips guarantee entry speed
        this.float('TAKLA!', 'big');
        this.score += 150 * this.mult;
        break;
      case 'grind':
        if (e.active && !this.grind) {
          this.grind = { s1: e.s1, u: e.u ?? b.u, h: e.h ?? 0.55 };
          audio.land(0.4);
          platform.haptic('medium');
          this.float('RAY!', 'big');
        } else if (!e.active || e.done) this.endGrind();
        break;
      case 'valley':
        if (e.ok && this.diveT > 0 && this.grounded) {
          b.vs = Math.min(RCFG.maxSpeed + 5, b.vs + 3.5);
          this.score += 80 * this.mult;
          this.gap = Math.min(RCFG.yetiMax, this.gap + 2);
          this.float('SÜPER DALIŞ!', 'big');
          platform.haptic('light');
        }
        break;
      case 'crack':
        audio.bump(0.15);
        break;
      case 'pickup':
        if (e.kind === 'gate') {
          this.gateChain = e.value || 1;
          this.score += 50 * this.gateChain * this.mult;
          audio.star(Math.min(2, this.gateChain - 1));
          this.float(`KAPI x${this.gateChain}`, '');
        } else if (e.kind === 'flake') {
          this.coins += e.value || 1;
          this.score += 10 * this.mult;
          music.note();
          platform.haptic('select');
        } else if (e.kind === 'snow') {
          this.addSnow(1 / RCFG.pilesPerTier);
          audio.pop(0.4, 3);
          this.burst(8, 0xffffff, 2);
        } else if (e.kind === 'star') {
          this.score += 500;
          audio.milestone(2);
          this.float('+500', 'big');
        } else if (e.kind === 'x2') {
          this.x2T = this.dur('x2');
          audio.milestone(3);
          this.float('2X SKOR!', 'big');
          this.ctx.meta?.track?.('powerup', { kind: 'x2' });
        } else if (e.kind === 'superjump') {
          this.superT = this.dur('superjump');
          audio.milestone(3);
          this.float('SÜPER ZIPLAMA!', 'big');
          this.ctx.meta?.track?.('powerup', { kind: 'superjump' });
        } else if (e.kind === 'crystal') {
          this.crystals++;
          this.ctx.meta?.addCrystals?.(1);
          audio.star(2);
          platform.haptic('success');
          this.float('💎 KRİSTAL!', 'big');
        } else if (e.kind === 'box') {
          this.boxes++;
          audio.star(1);
          platform.haptic('success');
          this.float('🎁 SÜRPRİZ KUTU!', 'big');
        } else if (e.kind === 'letter') {
          const res = this.ctx.meta?.collectLetter?.();
          audio.milestone(4);
          platform.haptic('success');
          this.float(`HARF: ${e.letter ?? '?'}`, 'big');
          this.obstacles.setNextLetter?.(this.ctx.meta?.letterHunt?.().nextLetter ?? null);
          if (res && res.complete) this.ctx.ui.banner('FREEMON TAMAM!', 4);
        } else if (e.kind === 'helmet') {
          this.ctx.meta?.track?.('powerup', { kind: 'helmet' });
          this.helmet = true;
          audio.milestone(3);
          platform.haptic('success');
          this.float('KASK!', 'big');
        } else if (e.kind === 'magnet') {
          this.magnetT = this.dur('magnet');
          this.ctx.meta?.track?.('powerup', { kind: 'magnet' });
          audio.milestone(3);
          this.float('MIKNATIS!', 'big');
        } else if (e.kind === 'rocket') {
          this.rocketT = this.dur('rocket');
          this.ctx.meta?.track?.('powerup', { kind: 'rocket' });
          // Sky lane of snowflakes for the flight (if the obstacles module supports it).
          this.obstacles.spawnSkyCoins?.(b.s + 12, b.s + 12 + this.rocketT * b.vs * 1.2);
          this.gap = Math.min(RCFG.yetiMax, this.gap + 12);
          audio.whoosh();
          platform.haptic('success');
          this.float('ROKET!', 'big');
        }
        break;
      case 'pad':
        if (e.kind === 'boost') {
          b.vs = Math.min(RCFG.maxSpeed + 6, b.vs + 7 * (e.power || 1));
          this.gap = Math.min(RCFG.yetiMax, this.gap + 4);
        } else this.jump(RCFG.jumpPadV * (e.onBeat ? 1.15 : 1) * (e.power || 1), true);
        if (e.onBeat) {
          this.ctx.meta?.track?.('perfect', {});
          this.score += 100 * this.mult;
          music.perfect();
          this.float('PERFECT!', 'big');
          platform.haptic('success');
        }
        break;
      case 'smash':
        // Obstacles module decided it broke (older shape).
        this.score += 50 * this.mult;
        audio.crash(0.5);
        this.shake += 0.3;
        break;
      case 'melt':
        this.addSnow(-(e.rate || 0.2) * this.stepDt); // rate is tiers per second
        break;
      case 'portal': {
        const bi = biomeAt(b.s + 5);
        this.score += 200 * this.mult;
        music.stinger('portal');
        music.setStyle(musicStyleAt(b.s + 5));
        this.ctx.ui.banner(bi.biome.name.toLocaleUpperCase('tr-TR'), 3);
        this.ctx.meta?.track?.('portal', { biome: bi.biome.id });
        audio.milestone(3);
        this.gap = Math.min(RCFG.yetiMax, this.gap + 8);
        break;
      }
      default:
        break;
    }
  }

  // Magnet: pull nearby flakes in by asking the obstacles module for pickups in range (if it supports it).
  // Falls back to a wider collision radius for flakes only.
  magnetRadius() { return this.magnetT > 0 ? 4.5 : 0; }

  die(cause) {
    if (this.state !== 'play') return;
    this.zip = null;
    this.grind = null;
    this.state = 'dying';
    this.cause = cause;
    this.deadT = 0;
    music.stinger('death');
    music.duck(true);
    this.ctx.audio.setRoll(0, 0);
    this.ctx.audio.lose();
    this.ctx.platform.haptic('warning');
    this.shake += 1;
  }

  updateDying(dt) {
    const b = this.b;
    this.deadT += dt;
    if (this.cause === 'fall') {
      b.vh -= RCFG.gravity * dt;
      b.h = Math.max(-70, b.h + b.vh * dt);
      b.s += b.vs * 0.5 * dt;
    } else if (this.cause === 'yeti') {
      // The Yeti catches up and scoops the ball.
      this.gap = Math.max(-1, this.gap - 25 * dt);
      b.vs *= Math.exp(-3 * dt);
      b.s += b.vs * dt;
      if (this.deadT > 0.5) this.ctx.ball.group.visible = false;
    } else {
      b.vs *= Math.exp(-4 * dt);
    }
    if (this.deadT > 1.4 && this.state === 'dying') {
      this.state = 'over';
      const { save, ui } = this.ctx;
      const best = save.runnerBest();
      const score = Math.round(this.score);
      save.recordRunner(score, Math.round(b.s));
      save.addCoins(this.coins);
      const meta = this.ctx.meta;
      meta?.track?.('endless_end', { distance: Math.round(b.s), score, coins: this.coins, crashes: this.crashes, cause: this.cause, maxTier: this.maxTier, jumps: this.jumps, smashes: this.smashes });
      if (this.boxes) { meta?.addBoxes?.(this.boxes); }
      const reviveCost = meta?.reviveCost?.(this.revives) ?? 0;
      this.reviveCost = reviveCost;
      ui.showRunnerResult({
        boxes: this.boxes,
        reviveCost,
        crystals: meta?.crystals ?? 0,
        title: this.cause === 'fall' ? 'UÇURUMA DÜŞTÜN!' : this.cause === 'yeti' ? 'YETİ SENİ YAKALADI!' : 'PATLADIN!',
        distance: Math.round(b.s),
        score,
        coins: this.coins,
        best: Math.max(best, score),
        isBest: score > best,
        canRevive: meta ? (meta.crystals ?? 0) >= reviveCost : !this.revived,
      });
      if (this.boxes && this.ctx.menus?.openBoxes) setTimeout(() => this.ctx.menus.openBoxes(this.boxes), 900);
    }
  }

  endGrind() {
    if (!this.grind) return;
    this.grind = null;
    this.jump(6, true);
    this.b.vs += 3;
    this.float('RAY BİTTİ! +HIZ', '');
  }

  revive() {
    if (this.state !== 'over') return;
    const meta = this.ctx.meta;
    if (meta) {
      if (!meta.spendCrystals?.(this.reviveCost ?? 1)) return;
    } else if (this.revived) return;
    this.revived = true;
    this.revives++;
    this.boxes = 0; // already banked at the result screen
    const b = this.b;
    b.s = this.lastSafe.s;
    this.lane = clamp(Math.round(this.lastSafe.u / RCFG.laneW), -1, 1);
    b.u = this.lane * RCFG.laneW;
    b.h = Math.max(0, this.track.surfaceAt(b.s, b.u));
    b.vh = 0; b.vu = 0; b.ve = 0;
    b.vs = speedAt(b.s) * 0.7;
    this.tier = Math.max(this.tier, 1);
    this.grow = 0;
    b.r = RCFG.tierR[this.tier];
    this.targetU = b.u;
    this.grounded = true;
    this.lastSurf = b.h;
    this.gap = RCFG.yetiStart;
    this.invulnT = 2.5;
    this.state = 'play';
    this.ctx.ball.group.visible = true;
    music.duck(false);
    music.stinger('revive');
    this.ctx.input.consumeDx();
    this.ctx.input.consumeJump();
  }

  // ---------- visuals ----------
  placeBall(snap) {
    const b = this.b;
    const tr = this.track;
    tr.frame(b.s, _f);
    tr.toWorld(b.s, b.u, b.h + this.rShown * 0.96, _v);
    const ball = this.ctx.ball;
    // Rolling: forward motion turns about -right, sideways motion about the tangent.
    ball.rollAxis(_f.right, -this.rollS / Math.max(0.2, this.rShown));
    ball.rollAxis(_f.tan, this.rollU / Math.max(0.2, this.rShown));
    this.rollS = this.rollU = 0;
    ball.group.position.copy(_v);
    ball.x = _v.x; ball.y = _v.y; ball.d = -_v.z; ball.r = this.rShown;
    ball.airborne = !this.grounded;
    if (this.state === 'play') {
      // Blink while invulnerable after a crash/revive.
      ball.group.visible = this.invulnT > 0 ? Math.floor(this.time * 14) % 2 === 0 : true;
    }
    if (snap) this.updateCamera(1, true);
  }

  burst(n, color, speed) {
    const p = this.ctx.ball.group.position;
    this.ctx.fx.burst(p.x, p.y - this.rShown * 0.3, -p.z, n, color, speed, 0.08 + this.rShown * 0.12, 4);
  }

  debris(e, n) {
    this.track.toWorld(e.s ?? this.b.s, e.u ?? this.b.u, (e.h ?? 0) + 1, _v);
    this.ctx.fx.burst(_v.x, _v.y, -_v.z, n, e.color ?? 0x8a6a4a, 7, 0.25, 6);
  }

  float(text, cls) {
    const p = this.ctx.ball.group.position;
    _v2.copy(p).project(this.ctx.camera);
    if (_v2.z > 1) return;
    this.ctx.ui.float(text, (_v2.x * 0.5 + 0.5) * window.innerWidth, (-_v2.y * 0.5 + 0.35) * window.innerHeight, cls);
  }

  roar() {
    const { audio, platform } = this.ctx;
    audio.bump(1);
    audio.crash(0.25);
    platform.haptic('heavy');
    this.shake += 0.5;
    this.float('GRRAAAH!', 'bad');
  }

  updateYeti(dt) {
    const y = this.yeti;
    const b = this.b;
    const show = this.gap < 45 || this.state !== 'play';
    y.group.visible = show;
    this.avalanche.group.visible = show;
    if (!show) return;
    y.t += dt;
    const gs = b.s - Math.max(-0.5, this.gap);
    const tr = this.track;
    tr.frame(Math.max(0, gs), _f);
    // The Yeti tracks your lane with a lag and bounds along.
    y.u += (b.u - y.u) * Math.min(1, dt * 2.5);
    const run = Math.abs(Math.sin(y.t * 7));
    tr.toWorld(Math.max(0, gs), y.u, Math.max(0, tr.surfaceAt(gs, y.u) === -Infinity ? 0 : tr.surfaceAt(gs, y.u)) + run * 0.8, _v);
    _x.copy(_f.right).negate();
    _m.makeBasis(_x, _f.up, _f.tan);
    _q.setFromRotationMatrix(_m);
    // Lean in and pump: tilt forward with the stride.
    _v2.copy(_f.right);
    const lean = 0.25 + Math.sin(y.t * 7) * 0.08;
    y.mesh.quaternion.copy(_q).multiply(_q.clone().setFromAxisAngle(_x.set(1, 0, 0), lean));
    y.mesh.position.copy(_v);
    const sc = y.scale * (1 + Math.sin(y.t * 14) * 0.03);
    y.mesh.scale.set(sc, sc * (1 - run * 0.06), sc);

    // A wall of powder rolls behind it.
    const av = this.avalanche;
    av.t += dt;
    const as = Math.max(0, gs - 6);
    tr.frame(as, _f);
    let k = 0;
    for (let i = 0; i < av.count; i++) {
      const row = i % 3;
      const col = Math.floor(i / 3);
      const u = (col / (av.count / 3 - 1) - 0.5) * 20;
      const bob = Math.sin(av.t * 3 + i * 1.7) * 0.6;
      const size = 2 + ((i * 37) % 11) / 11 * 1.6 - row * 0.4;
      _v.copy(_f.pos).addScaledVector(_f.right, u).addScaledVector(_f.up, 1 + row * 2.2 + bob).addScaledVector(_f.tan, -row * 1.8);
      _q.setFromAxisAngle(_f.right, av.t * 2 + i);
      _s.setScalar(size);
      _m.compose(_v, _q, _s);
      av.mesh.setMatrixAt(k++, _m);
    }
    av.mesh.count = k;
    av.mesh.instanceMatrix.needsUpdate = true;
  }

  updateCamera(dt, snap = false) {
    const b = this.b;
    const tr = this.track;
    const r = this.rShown;
    // When the Yeti closes in, the camera climbs and looks down so it looms at the bottom of the screen
    // (Temple Run style) instead of blocking the view.
    const close = this.state === 'play' ? clamp((15 - this.gap) / 10, 0, 1) : 0;
    this.closeK = (this.closeK ?? 0) + (close - (this.closeK ?? 0)) * Math.min(1, dt * 4);
    const back = 8 + r * 3 - this.closeK * 1.5;
    const up = 4.4 + r * 1.6 + this.closeK * 5.5;
    const camS = Math.max(0, b.s - back);
    tr.frame(camS, _f);
    const dying = this.state === 'dying' || this.state === 'over';
    const camH = dying && this.cause === 'fall' ? Math.max(b.h + up, -6) + up * 0.5 : Math.max(b.h * 0.5, 0) + up;
    tr.toWorld(camS, b.u * 0.45, camH, _v);
    tr.toWorld(b.s + 10, b.u * 0.6, Math.max(b.h * 0.6, 0) + 0.4, _look);
    if (dying) _look.copy(this.ctx.ball.group.position);
    const k = snap ? 1 : 1 - Math.exp(-dt * 7);
    this.camPos.lerp(_v, k);
    this.camLook.lerp(_look, snap ? 1 : 1 - Math.exp(-dt * 10));
    this.camUp.lerp(_f.up, k).normalize();
    const cam = this.ctx.camera;
    cam.position.copy(this.camPos);
    if (this.shake > 0) {
      const s = Math.min(this.shake, 1.5) * 0.25;
      cam.position.x += (Math.random() - 0.5) * s;
      cam.position.y += (Math.random() - 0.5) * s;
      this.shake = Math.max(0, this.shake - dt * 3);
    }
    cam.up.copy(this.camUp);
    cam.lookAt(this.camLook);
    const fovK = clamp((b.vs - RCFG.startSpeed) / (RCFG.maxSpeed - RCFG.startSpeed), 0, 1);
    cam.userData.fovBoost = fovK * 8 + (this.rocketT > 0 ? 6 : 0);
  }

  dispose() {
    this.track?.dispose();
    this.obstacles?.dispose();
    this.env?.dispose();
    for (const o of [this.avalanche, this.yeti]) {
      if (!o) continue;
      this.ctx.scene.remove(o.group);
      o.dispose();
    }
    this.track = this.obstacles = this.env = this.avalanche = this.yeti = null;
    this.ctx.camera.up.set(0, 1, 0);
    this.ctx.camera.userData.fovBoost = 0;
    if (this.ctx.ball) this.ctx.ball.group.visible = true;
    music.stop();
    this.state = 'idle';
  }
}

function makeYeti(scene, lib) {
  const group = new THREE.Group();
  const def = lib.yeti;
  const geo = def ? def.geometry : new THREE.CapsuleGeometry(0.8, 1.6, 4, 8);
  const mat = new THREE.MeshLambertMaterial({ vertexColors: !!def, color: def ? 0xffffff : 0xdfe9f5, flatShading: true });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  group.add(mesh);
  group.visible = false;
  scene.add(group);
  // ~4.8 m tall: big next to the ball, but it must not wall off the chase camera.
  const scale = def ? 4.8 / Math.max(0.5, def.height) : 1.6;
  return { group, mesh, scale, t: 0, u: 0, dispose: () => { mat.dispose(); if (!def) geo.dispose(); } };
}

function makeAvalanche(scene) {
  const group = new THREE.Group();
  const geo = new THREE.IcosahedronGeometry(1, 1);
  const mat = new THREE.MeshLambertMaterial({ color: 0xf4f9ff, flatShading: true });
  const count = 36;
  const mesh = new THREE.InstancedMesh(geo, mat, count);
  mesh.frustumCulled = false;
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  group.add(mesh);
  group.visible = false;
  scene.add(group);
  return { group, mesh, count, t: 0, dispose: () => { geo.dispose(); mat.dispose(); mesh.dispose(); } };
}

function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
