import * as THREE from 'three';
import { Track, LANES, flightDist } from './track.js';
import { Obstacles } from './obstacles.js';
import { Environment, biomeAt, trackPalette, musicStyleAt } from './biomes.js';
import * as Biomes from './biomes.js';
import { PERKS, rollPerks, UPGRADES, DESTRUCTION, destructionTier } from './perks.js';
import { music } from './music.js';
import { patchMaterial } from '../shaders.js';
import { scoreMult, chainBonus, dangerBonus, checkpointReward, rageScale, goalFor } from './goals.js';

// SONSUZ İNİŞ — endless Temple-Run-style downhill run (RUNNER.md).
// Core loop: the ball's SIZE is its health. Snow piles grow it; crashing knocks a layer off and starts a STUMBLE
// window (the Yeti is right behind you): crash again inside it and the Yeti catches you. Crashing at the smallest
// size bursts the ball; head-on hits with big solid things are lethal; junctions need a swipe toward the turn.
// Physics live in track-local coordinates: s along the path, u sideways (+right), h above the surface.
export const RCFG = {
  startSpeed: 14,
  maxSpeed: 48,          // asymptote of the late ramp
  refSpeed: 30,          // "fast" for visuals (FOV, speed lines)
  speedPerM: 0.0065,     // linear ramp up to speedKnee
  speedKnee: 2000,
  speedTau: 3230,        // (maxSpeed - v(knee)) / speedPerM: slope continuous at the knee
  layerLen: 600,         // a new difficulty layer every 600 m
  sizeSpeed: 0.025,      // top speed +2.5% per size tier
  bpm0: 100,
  bpmMax: 150,
  bpmPerM: 0.012,
  accel: 7,
  gravity: 28,
  jumpV: 8.5,
  jumpPadV: 11,
  coyote: 0.12,
  jumpBuf: 0.15,
  landTol: 0.45,
  laneW: 2.4,            // 3 lanes at u = -2.4, 0, +2.4 (Subway Surfers style)
  laneStiff: 400,        // lane-change spring: ~0.2 s per lane at every speed
  diveV: -20,            // swipe down while airborne: slam back onto the snow
  // Size tiers = health. Index 0 is "about to burst". Max fits a lane (diameter 2.1 < 2.4).
  tierR: [0.45, 0.6, 0.75, 0.9, 1.05],
  pilesPerTier: [4, 6, 8, 11],   // snow piles needed to grow one tier (by current tier)
  smashMargin: 2,        // you must be this many sizes above an obstacle's toughness to plough through it
  smashCost: 0.08,       // growth lost per toughness point when smashing (not with the rocket)
  crashSlow: 0.65,       // speed kept after a crash
  invulnAfterCrash: 1.0,
  // The Yeti: right behind you at the start and for a stumble window, otherwise it falls back off screen.
  yetiStart: 5,
  yetiHold: 2.5,         // seconds it stays right behind you at the start / after a revive
  yetiStumbleGap: 5,
  stumbleWin: 6.0,       // + 0.25 per layer (max 4)
  yetiMax: 16,
  yetiRecover: 2.0,      // m/s you pull away at full speed
  yetiSlowClose: 0.5,
  yetiStumbleSpeed: 0.8, // below this fraction of target speed you are not pulling away
  fallDeath: -24,
  helmetT: 20,
  sledCd: 45,
  // Power-up durations (seconds) when the meta module isn't there to supply upgraded values.
  dur: { magnet: 8, x2: 10, superjump: 9, rocket: 6, sled: 20 },
  superJumpK: 1.55,
  rocketH: 6,
  // Goals & pressure (endless only).
  cpCoins: 25,           // checkpoint (every layerLen) pays this × layer (layer capped at 8)
  recNear: 300,          // metres out: the goal strip switches to "REKORA n m"
  recCoins: 50,          // one-off payout for passing your record distance
  rageLen: 130,          // "YETİ ÖFKESİ": the Yeti throws boulders over the last N m of a layer (from layer 2 on) ...
  rageSecs: 7,           // ... or the last N seconds of running, whichever is longer (so fast runs still get 2+ boulders)
  rageEvery: [2.8, 3.6], // seconds between boulders (× 0.93 per layer, floor 0.7)
  multCap: 6,            // + layer, at most 12
  // Legacy keys still read by the older stumble/rage/surge code paths.
  yetiCrash: 11,
  closeCall: 4,
  rageBack: 4,
  surgeEvery: [25, 35],
  surgeTele: 0.8,
  surgeLunge: 1.5,
  surgePull: 6,
  surgeFloor: 4,
};

export const speedAt = (s) => {
  const x = Math.max(0, s), K = RCFG.speedKnee;
  if (x <= K) return RCFG.startSpeed + x * RCFG.speedPerM;
  const vK = RCFG.startSpeed + K * RCFG.speedPerM;
  return vK + (RCFG.maxSpeed - vK) * (1 - Math.exp(-(x - K) / RCFG.speedTau));
};
export const bpmAt = (s) => Math.min(RCFG.bpmMax, RCFG.bpm0 + Math.max(0, s) * RCFG.bpmPerM);
/** Turn window (seconds before the corner) the junction accepts a swipe in; shrinks with distance. */
export const juncWinAt = (s) => 0.8 + 0.3 * Math.min(1, Math.max(0, 1 - (s - 350) / 4650));

const WIDE = new Set(['fence', 'fallenLog', 'longLog', 'overhead', 'laser', 'slidewall']);
const LETHAL_BASE = new Set(['rock', 'cabin']);
const LETHAL_CAR = new Set(['snowcat', 'oncoming']);
const LETHAL_ROLL = new Set(['boulder']);
const LETHAL_WALL = new Set(['slidewall']);
const DEATH_TEXT = {
  explode: 'PATLADIN!', yeti: 'YETİ SENİ YAKALADI!', fall: 'UÇURUMA DÜŞTÜN!', turn: 'DUVARA ÇARPTIN!', turnFall: 'VİRAJDAN UÇTUN!',
  rock: 'KAYAYA ÇARPTIN!', boulder: 'YUVARLANAN KAYAYA ÇARPTIN!', cabin: 'KULÜBEYE ÇARPTIN!', snowcat: 'KAR ARACINA ÇARPTIN!',
  oncoming: 'TRENE ÇARPTIN!', slidewall: 'KAYAN DUVARA ÇARPTIN!',
};
const FLOAT_PRI = { '': 1, big: 2, bad: 3 };
const CARDS = {
  lane: { icon: '👆', title: '← KAYDIR →', text: 'Sandığa çarpmamak için sola ya da sağa kaydır' },
  jump: { icon: '⬆️', title: 'ZIPLA', text: 'Kütüğün üstünden atlamak için yukarı kaydır' },
  duck: { icon: '⬇️', title: 'EĞİL', text: 'Bariyerin altından geçmek için aşağı kaydır' },
  boulder: { icon: '🪨', title: 'YETİ KAYA ATIYOR!', text: 'Kırmızı gölgeyi görünce şerit değiştir' },
  slidewall: { icon: '🧱', title: 'KAYAN DUVAR', text: 'Boşluk yeşile dönünce yeri kesinleşir: oraya geç' },
  train: { icon: '🚂', title: 'TREN GELİYOR!', text: 'Farları gördüğün şeritten çık' },
  lip: { icon: '⬆️', title: 'ZIPLA!', text: 'Sarı-siyah rampanın ucunda yukarı kaydır' },
};
const TUT_ROWS = [{ s: 80, key: 'lane' }, { s: 160, key: 'jump' }, { s: 240, key: 'duck' }];

const TIERS = RCFG.tierR.length;
const _f = { pos: new THREE.Vector3(), tan: new THREE.Vector3(), right: new THREE.Vector3(), up: new THREE.Vector3() };
const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _look = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _x = new THREE.Vector3();
const WORLD_UP = new THREE.Vector3(0, 1, 0);
const _tp = new THREE.Vector3();
const _goal = { mode: 'cp', val: 0, frac: 0 };
const RAGE_SKIP = new Set(['zipline', 'rail', 'loop', 'corkscrew']); // sections where the Yeti keeps its boulders

export class Runner {
  constructor(ctx) {
    this.ctx = ctx; // { scene, camera, lib, ball, fx, ui, audio, platform, save, input }
    this.events = [];
    this.camPos = new THREE.Vector3();
    this.camLook = new THREE.Vector3();
    this.camUp = new THREE.Vector3(0, 1, 0);
    this.state = 'idle';
  }

  start(seed = (Math.random() * 1e9) | 0, level = null, opts = {}) {
    const { scene } = this.ctx;
    this.closeOut?.();
    this.dispose();
    const save = this.ctx.save;
    this.level = level;
    if (level) seed = level.seed >>> 0;
    this.seed = seed;
    this.tut = !level && !this.ctx.noTut && !(save.runnerTutDone?.() ?? true);
    Biomes.setBiomeOverride?.(level ? level.biome : null);
    this.track = new Track(scene, {
      seed,
      palette: trackPalette,
      speedAt,
      bpmAt,
      biomeIndexAt: (s) => biomeAt(s).index,
      vGen: (s) => 1.1 * speedAt(s),
      juncWinAt,
      junctionOk: (s) => Biomes.junctionOkAt?.(s) ?? true,
      tutorial: this.tut,
    });
    this.obstacles = new Obstacles(scene, this.track, { seed: seed ^ 0x9e3779b9, jumpPadV: RCFG.jumpPadV, vGen: (s) => 1.1 * speedAt(s), tutorial: this.tut, endless: !level });
    this.track.onPiece = (piece) => this.obstacles.spawn(piece, piece.diff ?? Math.min(1, piece.s0 / 5000), piece.biome ?? biomeAt(piece.s0).index, biomeAt(piece.s0).biome.id);
    if (level) {
      this.track.setLevel?.({ length: level.length, features: level.features, hardness: level.hardness, seed, boss: level.boss });
      this.obstacles.reset?.();
      this.obstacles.setHardness?.(level.hardness);
    }
    this.track.ensure(320);
    this.env = new Environment(scene, this.track, { lib: this.ctx.lib });
    this.yeti = makeYeti(scene, this.ctx.lib);
    this.avalanche = makeAvalanche(scene);

    this.tier = level ? Math.max(0, Math.min(4, level.startTier ?? 1)) : 2;
    this.grow = level ? 0 : 0.5;            // progress to the next tier (0..1)
    const b = (this.b = { s: 16, u: 0, h: 0, r: RCFG.tierR[this.tier], vs: RCFG.startSpeed * 0.6, vu: 0, ve: 0, vh: 0, size: 2 });
    if (!level) b.r = RCFG.tierR[this.tier] + (RCFG.tierR[this.tier + 1] - RCFG.tierR[this.tier]) * this.grow * 0.6;
    this.rShown = b.r;
    this.grounded = true;
    this.coyoteT = 0;
    this.lane = 0;
    this.targetU = 0;
    this.lastSurf = 0;
    this.lastSlope = 0;
    this.gap = RCFG.yetiStart;
    this.avLevel = 1;
    this.yetiHoldT = RCFG.yetiHold;
    this.stumbleT = 0;
    this.stumbleMax = RCFG.stumbleWin;
    this.stumbles = 0;
    this.minGap = Infinity;
    this.minGapArmed = false;
    this.score = 0;
    this.coins = 0;
    this.coinsBanked = 0;
    this.finalized = false;
    this.time = 0;
    this.deadT = 0;
    this.revived = false;
    this.invulnT = 1.2;
    this.helmet = false;
    this.helmetT = 0;
    this.magnetT = 0;
    this.rocketT = 0;
    this.x2T = 0;
    this.superT = 0;
    this.sledT = 0;
    this.sledCdT = 0;
    this.boxes = 0;
    this.crystals = 0;
    this.revives = 0;
    this.jumps = 0;
    this.smashes = 0;
    this.turns = 0;
    this.maxTier = this.tier;
    this.timeScale = 1;
    this.slowUntil = -1;
    this.slowScale = 1;
    this.zip = null;
    this.grind = null;
    this.diveT = 0;
    this.duckT = 0;
    this.fogK = 0;
    this.fogTarget = 0;
    this.gateChain = 0;
    this.ctx.meta?.track?.('run_start', { mode: 'endless' });
    this.obstacles.setNextLetter?.(this.ctx.meta?.letterHunt?.().nextLetter ?? null);
    this.iceT = 0;
    this.lastSafe = { s: 16, u: 0 };
    this.safeT = 0;
    this.shake = 0;
    this.trauma = 0;
    this.kick = 0;
    this.rollS = 0;
    this.rollU = 0;
    this.roarT = 0;
    this.cause = '';
    this.killKind = null;
    this.crashes = 0;
    this.state = 'play';
    this.countT = opts.retry ? 1.5 : 3;
    this.layer = 0;
    this.speedTier = 0;
    this.flow = 0;
    this.flowLvl = 0;
    this.flowT = 0;
    this.bestDist = save.runnerBestDist?.() ?? 0;
    this.bestScore = save.runnerBest?.() ?? 0;
    this.passedDist = this.bestDist < 50;
    this.passedScore = this.bestScore < 100;
    this.baseHard = level ? level.hardness : 1;
    this.perfects = 0;
    this.powerups = 0;
    this.layersLost = 0;
    // Addictive layer: perks, power-ups, risk, chains, destruction.
    this.perks = new Set();
    this.perm = save.perm?.() ?? {};
    this.nextPerkS = Infinity;   // set when a layer boundary makes a perk card due (see layerUp)
    this.perkLayer = level ? Infinity : 1; // boundary number at which the next card is due (every 2nd layer)
    this.perkDue = false;
    this.perkPause = false;
    this.resumeRamp = 0;
    this.bannerQ = [];        // queued banners [text, level, hold, ...]: the 600 m cluster must not stomp itself
    this.bannerT = 0;
    this.later = [];          // delayed callbacks that follow game time (and die with the run)
    this.rage = null;         // "YETİ ÖFKESİ" mini-boss { s0, B, t, n, crashes0 }
    this.rageCount = 0;
    this.newRecT = 0;
    this.nearChain = 0;
    this.nearT = 0;
    this.riskStack = 0;
    this.kabuk = 0;
    this.kabukUsed = false;
    this.warpT = 0;
    this.ghostT = 0;
    this.riskT = 0;
    this.cloneT = 0;
    this.clone = null;
    this.coinsF = 0;
    this.destTons = 0;
    this.destTier = 0;
    this.punch = 0;
    this.magnetPerm = false;
    this.zone = null;      // staged rule change { kind, from, until, name, announced }
    this.inZone = null;
    this.warned = null;
    this.closeK = 1;
    this.cornerK = 0;
    this.camYawOff = 0;
    this.camYawJ = null;
    this.flipK = 0;
    this.tilt = 0;
    this._progT = 0;
    this.camBack = 9;
    this.off = null;
    this.turnJ = null;
    this.deadSlowT = 0;
    this.lethalOn = !level ? { base: true, car: true, roll: true, wall: true } : {
      base: !!this.track.allows?.('lethal'), car: !!this.track.allows?.('lethalCar'), roll: !!this.track.allows?.('lethal'), wall: !!this.track.allows?.('lethalWall'),
    };
    this.jumpBufT = 0;
    this.duckOnLand = false;
    this.lipBoost = false;
    this.lipBoosted = false;
    this.rampAirT = 0;
    this.edgeHold = false;
    this.leanT = 0;
    this.leanDir = 0;
    this.floatT = 0;
    this.floatPri = 0;
    this.boulderNonLethal = 2;
    this.card = null;
    this.cardT = 0;
    this.tutDone = {};
    this.tutJ = null;
    this.tutSlow = 0.35;
    this.lipShown = -1;
    this.threatT = 0;
    this.juncCue = null;
    this.juncSeen = null;
    this.lastSmashStop = -9;
    this.obstacles.setHardness?.(this.baseHard);
    this.track.setHardness?.(this.baseHard);
    this.makeRecordFlag();
    this.makeShadow();
    this.patchedCount = -1;
    this.hitStop = 0;
    this.squash = 0;
    this.trailN = 0;
    this.obstacles.markSmashable?.(this.tier);

    const ball = this.ctx.ball;
    ball.reset(b.r);
    this.ctx.fx.reset();
    this.ctx.input.consumeDx();
    this.ctx.input.consumeJump();
    this.ctx.input.consumeDive?.();
    this.ctx.input.consumeLane();
    this.ctx.input.consumeDoubleTap?.();

    music.init();
    music.start(musicStyleAt(0), bpmAt(0));
    music.duck(false);
    music.setIntensity(0.55);
    const ui = this.ctx.ui;
    ui.runnerHud(true, biomeAt(0).biome.name);
    ui.runnerTurn?.(null);
    ui.runnerTutor?.(null);
    ui.hideRunnerRevive?.();
    if (level) ui.runnerGoal?.(null); // campaign has its own finish-line progress bar
    ui.banner(String(Math.ceil(this.countT)), 3);
    this.updateHud();
    this.placeBall(true);
  }

  // Score multiplier: size, flow, near-miss chain, Yeti closeness and risky power-ups/perks all ADD to 1 (capped at
  // RCFG.multCap); permanent progression (mission sets, upgrades) sits on top of the cap. No more compounding.
  get mult() {
    if (!this.perks) return 1;
    return scoreMult(this.tier, this.flowLvl, this.chainBonus(), this.dangerBonus(), this.riskBonus(),
      (this.ctx.meta?.multiplier?.() ?? 1) - 1 + 0.1 * (this.perm.speed || 0), RCFG.multCap);
  }

  dangerBonus() { return dangerBonus(this.gap, this.perks?.has('tehlike')); }

  chainBonus() { return chainBonus(this.nearChain || 0); }

  // Power-ups and risky perks: flat bonuses instead of multipliers.
  riskBonus() {
    if (!this.perks) return 0;
    let m = this.riskStack * 5;
    if (this.x2T > 0) m += 3;
    if (this.riskT > 0) m += 4;
    if (this.clone) m += 2;
    if (this.perks.has('cam')) m += 3;
    if (this.perks.has('asiri')) m += 1;
    return m;
  }

  dur(kind) { return this.ctx.meta?.duration?.(kind) || RCFG.dur[kind]; }

  // ---------- frame ----------
  update(rdt) {
    if (this.state === 'idle') return;
    // Ski-jump slow-mo: ease into the slowed window, ease back out after.
    const wantTs = this.state === 'play' && this.b.s < this.slowUntil && !this.grounded ? this.slowScale : 1;
    this.timeScale += (wantTs - this.timeScale) * Math.min(1, rdt * 8);
    // Hit-stop: a crash freezes the world for a heartbeat so it lands.
    let dt = rdt * this.timeScale;
    if (this.hitStop > 0) { this.hitStop -= rdt; dt *= 0.06; }
    if (this.perkPause) dt = 0;            // choosing a perk card
    if (this.warpT > 0) { this.warpT -= rdt; dt *= 0.5; if (this.warpT <= 0) this.float('ZAMAN NORMAL', ''); }
    // 3-2-1 countdown before the chase starts.
    if (this.countT > 0) {
      const before = Math.ceil(this.countT);
      this.countT -= rdt;
      const after = Math.ceil(this.countT);
      if (after !== before) {
        if (after > 0) { this.ctx.ui.banner(String(after), 3); this.ctx.audio.ui('select'); }
        else { this.ctx.ui.banner('KAÇ!', 5); this.roar(); }
      }
      dt = 0;
    }
    if (this.state === 'play' && this.countT <= 0) this.tickBanner(rdt);
    const beat = music.beat;
    this.time += dt;
    if (this.state === 'play') this.updatePlay(dt, beat);
    else if (this.state === 'dying') this.updateDying(dt);
    else if (this.state === 'finished') {
      this.finishT += dt;
      this.b.vs *= Math.exp(-1.2 * dt);
      this.b.s += this.b.vs * dt;
      this.gap = Math.min(RCFG.yetiMax, this.gap + 20 * dt);
      this.rollS += this.b.vs * dt;
    }

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
      this.lane = clamp(this.lane + (this.inZone === 'invert' ? -lane : lane), -1, 1);
      this.ctx.platform.haptic('select');
      this.mistBurst(4, 0xffffff, 2, 0.8);
    }
    this.targetU = this.lane * RCFG.laneW;
    if (input.consumeJump() && (this.grounded || this.coyoteT > 0)) { ui.hint(false); this.jump(RCFG.jumpV, false); }
    if (input.consumeDive()) {
      this.diveT = 0.7;
      if (!this.grounded && !this.zip && b.vh > RCFG.diveV) b.vh = RCFG.diveV;
      else if (this.grounded) {
        this.duckT = 0.65;
        this.ctx.audio.whoosh();
        this.mistBurst(5, 0xffffff, 2, 0.8);
      }
    }
    this.diveT -= dt;
    this.duckT -= dt;

    // ---- speed: downhill pace + size bonus; rocket overrides ----
    const top = speedAt(b.s) * (1 + this.tier * RCFG.sizeSpeed) * (this.rocketT > 0 ? 1.35 : 1)
      * (this.perks.has('asiri') ? 1.2 : 1) * (this.riskT > 0 ? 1.45 : 1) * (1 + 0.03 * (this.perm.speed || 0));
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
    if (this.ghostT > 0) { this.ghostT -= dt; if (this.ghostT <= 0) { this.setGhost(false); this.float('HAYALET BİTTİ', ''); } }
    if (this.riskT > 0) { this.riskT -= dt; if (this.riskT <= 0) this.float('RİSK BİTTİ', ''); }
    if (this.cloneT > 0) { this.cloneT -= dt; if (this.cloneT <= 0) this.endClone(false); }
    if (this.nearT > 0) { this.nearT -= dt; if (this.nearT <= 0) this.nearChain = 0; }
    this.punch = Math.max(0, this.punch - dt * 4);
    this.tickLater(dt);
    // Perk cards: every 2nd layer, never while banners are still showing or the Yeti is raging.
    if (this.perkDue && b.s >= this.nextPerkS && this.grounded && !this.zip && !this.grind && !this.rage && this.bannerQuiet()) this.offerPerks();

    // Double-tap: ride a sled (Subway's hoverboard) — one free crash for its duration.
    if (input.consumeDoubleTap() && this.sledT <= 0 && this.ctx.meta?.useSled?.()) {
      this.sledT = this.dur('sled');
      this.ctx.audio.milestone(2);
      this.float('KIZAK!', 'big');
      this.powerups = (this.powerups || 0) + 1; this.ctx.meta?.track?.('powerup', { kind: 'sled' });
    }

    const steps = Math.max(1, Math.ceil(dt / (1 / 120)));
    const h = dt / steps;
    for (let i = 0; i < steps && this.state === 'play'; i++) this.step(h, hw);

    // ---- Yeti: pulls back while you're flying, closes in when you stumble ----
    if (b.vs >= top * RCFG.yetiStumbleSpeed) this.gap = Math.min(RCFG.yetiMax, this.gap + RCFG.yetiRecover * Math.max(0.6, 1 - 0.05 * (this.avLevel - 1)) * dt);
    else this.gap -= (top * RCFG.yetiStumbleSpeed - b.vs) * 0.35 * dt;
    if (this.gap <= 0) this.die('yeti');
    this.minGap = Math.min(this.minGap ?? Infinity, this.gap);
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

    this.surgeTick(dt);
    this.rageTick(dt);
    this.progression(dt);
    this.zoneTick();
    this.fogK += (this.fogTarget - this.fogK) * Math.min(1, dt * 2.5);
    this.fogTarget = 0;
    const fog = this.ctx.scene.fog;
    if (fog) { fog.near = 60 * (1 - 0.85 * this.fogK) + 4; fog.far = 330 * (1 - 0.8 * this.fogK) + 20; }

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

  // Difficulty layers, speed steps, the skill-combo ("AKIŞ") and record moments.
  progression(dt) {
    const b = this.b;
    const { ui, audio, platform } = this.ctx;
    const layer = this.level ? 0 : Math.floor(b.s / RCFG.layerLen);
    if (layer > this.layer) this.layerUp(layer);
    const tier = Math.floor((speedAt(b.s) - RCFG.startSpeed) / 3.2);
    if (tier > this.speedTier) {
      this.speedTier = tier;
      this.float(`HIZ ${tier + 1}!`, 'big');
      this.ctx.ui.flash?.('white');
    }
    // Flow decays when you stop doing skilful things.
    this.flowT -= dt;
    if (this.flowT <= 0 && this.flow > 0) this.flow = Math.max(0, this.flow - 14 * (this.perks.has('akis') ? 0.5 : 1) * (1 - 0.06 * (this.perm.flow || 0)) * dt);
    const lvl = this.flow >= 90 ? 4 : this.flow >= 50 ? 3 : this.flow >= 25 ? 2 : this.flow >= 10 ? 1 : 0;
    if (lvl !== this.flowLvl) {
      if (lvl > this.flowLvl) {
        this.float(['', 'AKIŞ!', 'SÜPER AKIŞ!', 'EFSANE AKIŞ!', 'DURDURULAMAZ!'][lvl], 'big');
        audio.star(Math.min(2, lvl - 1));
        platform.haptic('success');
      }
      this.flowLvl = lvl;
    }
    ui.runnerFlow?.(this.flowLvl, this.flow / 100);
    // Records.
    if (!this.passedDist && b.s > this.bestDist) {
      this.passedDist = true;
      this.queueBanner('YENİ REKOR!', 5, 1.6, true);
      ui.flash?.('white');
      audio.win();
      platform.haptic('success');
      this.ctx.menus?.confetti?.(60);
      if (!this.level) {
        this.newRecT = 4;
        this.coins += RCFG.recCoins;
        this.after(0.5, () => this.float(`+${RCFG.recCoins} ❄️`, 'big'));
      }
    }
    if (this.newRecT > 0) this.newRecT -= dt;
    if (!this.passedScore && this.score > this.bestScore) {
      this.passedScore = true;
      this.float('REKOR SKOR!', 'big');
    }
    ui.runnerRecord?.(this.passedScore ? 0 : this.bestScore);
    this.placeRecordFlag();
    this.patchScene();
  }

  // Hook the runner's meshes into the shared shader look (visual modes, snow sparkle). Cheap: only re-walks
  // the groups when their child count changes (new track pieces).
  patchScene() {
    const groups = [this.track?.group, this.obstacles?.group, this.env?.group].filter(Boolean);
    let n = 0;
    for (const g of groups) n += g.children.length;
    if (n === this.patchedCount) return;
    this.patchedCount = n;
    for (const g of groups) {
      g.traverse((o) => {
        if (!o.isMesh || o.isPoints) return;
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of mats) {
          if (m && (m.isMeshLambertMaterial || m.isMeshPhongMaterial) && !m.userData.noPatch && !m.onBeforeCompile.toString().includes('CIG')) {
            const snowy = g === this.track?.group;
            patchMaterial(m, { snow: snowy });
          }
        }
      });
    }
  }

  // Soft blob shadow on the track surface under the ball (grounds it visually; shrinks as it flies).
  makeShadow() {
    if (this.shadow) return;
    let tex = null;
    if (typeof document !== 'undefined') {
      const cv = document.createElement('canvas');
      cv.width = cv.height = 64;
      const c = cv.getContext('2d');
      const grd = c.createRadialGradient(32, 32, 3, 32, 32, 32);
      grd.addColorStop(0, 'rgba(20,40,80,0.6)');
      grd.addColorStop(1, 'rgba(20,40,80,0)');
      c.fillStyle = grd;
      c.fillRect(0, 0, 64, 64);
      tex = new THREE.CanvasTexture(cv);
    }
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: tex, color: tex ? 0xffffff : 0x203050, transparent: true, opacity: 0.8, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }));
    this.shadow.frustumCulled = false;
    this.shadow.renderOrder = 1;
    this.ctx.scene.add(this.shadow);
  }

  placeShadow() {
    const sh = this.shadow;
    if (!sh) return;
    const b = this.b;
    const surf = this.track.surfaceAt(b.s, b.u);
    sh.visible = surf !== -Infinity && this.state !== 'idle' && !this.zip;
    if (!sh.visible) return;
    this.track.frame(b.s, _f);
    this.track.toWorld(b.s, b.u, surf + 0.05, _v);
    sh.position.copy(_v);
    _x.crossVectors(_f.right, _f.up);
    _m.makeBasis(_f.right, _x.negate(), _f.up);
    sh.quaternion.setFromRotationMatrix(_m);
    const lift = Math.max(0, b.h - surf);
    const k = 1 / (1 + lift * 0.18);
    sh.scale.setScalar(this.rShown * 2.6 * (0.6 + 0.4 * k));
    sh.material.opacity = 0.8 * k;
  }

  // A layer boundary is also a checkpoint. Everything it fires is staggered (banner queue + delayed floats) and the
  // perk card waits until the banners are done and, from layer 2 on, until the Yeti's barrage was survived.
  layerUp(layer) {
    const { ui, audio, platform } = this.ctx;
    const rage = this.rageEnd(layer);   // 1 survived the barrage, -1 crashed in it, 0 no barrage
    this.layer = layer;
    const k = Math.min(1.9, this.baseHard * (1 + 0.1 * layer));
    this.obstacles.setHardness?.(k);
    this.track.setHardness?.(k);
    this.avLevel = layer + 1;
    if (this.perks.has('kabuk')) this.kabuk = 1;
    this.stageZone(layer);
    // Checkpoint: a few coins through the normal run-coin path (banked with the run, like flakes).
    const pay = checkpointReward(layer, RCFG.cpCoins);
    this.coins += pay;
    this.queueBanner(`✔ ${layer * RCFG.layerLen} m`, 3);
    this.after(rage > 0 ? 0.7 : 0, () => this.float(`+${pay} ❄️`, 'big'));
    if (rage <= 0) audio.star(2);
    platform.haptic('success');
    ui.runnerGoalPop?.();
    this.queueBanner(`KATMAN ${layer + 1}`, 4);
    this.after(1.1, () => audio.milestone(Math.min(5, 2 + (layer >> 1))));
    this.after(2.4, () => this.float(`ÇIĞ SEVİYESİ ${this.avLevel}`, 'bad'));
    if (layer >= this.perkLayer && rage >= 0) { this.perkDue = true; this.nextPerkS = this.b.s + 30; }
    this.ctx.meta?.track?.('layer', { layer: layer + 1 });
  }

  // ui.banner is a single slot: queue the 600 m cluster so the banners show one after another instead of stomping.
  queueBanner(text, level, hold = 1.05, urgent = false) {
    if (urgent || (this.bannerT <= 0 && !this.bannerQ.length)) { this.ctx.ui.banner(text, level); this.bannerT = hold; }
    else this.bannerQ.push(text, level, hold);
  }

  tickBanner(rdt) {
    if (this.bannerT > 0) this.bannerT -= rdt;
    const q = this.bannerQ;
    if (this.bannerT <= 0 && q.length) {
      this.ctx.ui.banner(q.shift(), q.shift());
      this.bannerT = q.shift();
    }
  }

  bannerQuiet() { return this.bannerT <= 0 && !this.bannerQ.length; }

  // Delayed callbacks that follow game time (setTimeout would outlive a restart and ignore pauses).
  after(sec, fn) { this.later.push({ t: sec, fn }); }

  tickLater(dt) {
    const q = this.later;
    for (let i = q.length - 1; i >= 0; i--) {
      const l = q[i];
      l.t -= dt;
      if (l.t <= 0) { q.splice(i, 1); l.fn(); }
    }
  }

  // "YETİ ÖFKESİ": over the last rageLen m of every layer (from layer 2 on) the Yeti throws boulders at your lane (the
  // same throwBoulder path the boss zone uses). Survive without a crash → it gives up: bonus, and it falls back.
  rageOk() {
    if (this.inZone === 'boss' || this.zip || this.grind || this.rocketT > 0) return false; // boss zone / rope / rail already own the moment
    return !RAGE_SKIP.has(this.track.pieceAt(this.b.s)?.kind);
  }

  rageTick(dt) {
    if (this.level || this.layer < 1) return;       // campaign has no layers (its boss levels throw their own boulders)
    const b = this.b, L = RCFG.layerLen;
    const B = (Math.floor(b.s / L) + 1) * L;
    let r = this.rage;
    if (!r) {
      if (b.s < B - Math.max(RCFG.rageLen, b.vs * RCFG.rageSecs) || b.s > B - 40 || !this.rageOk()) return;
      r = this.rage = { s0: b.s, B, t: 0.7, n: 0, crashes0: this.crashes, failed: false };
      this.roar(true);
      this.queueBanner('YETİ ÖFKESİ!', 4, 1.1, true);
      this.ctx.ui.flash?.('hit');
      return;
    }
    if (r.failed) return;
    if (this.crashes !== r.crashes0) {              // one crash ends it: no death spiral
      r.failed = true;
      this.float('ÖFKE SÜRÜYOR...', 'bad');
      return;
    }
    r.t -= dt;
    if (r.t > 0) return;
    if (!this.rageOk()) { r.t = 0.5; return; }
    const sLand = b.s + b.vs * 1.5 + 9;             // lands ~9 m ahead of where you will be
    if (sLand > B - 6) { r.t = 1; return; }          // the last boulder lands before the boundary
    const pl = this.lane + 1;
    const lane = Math.random() < 0.65 ? pl : (pl + 1 + ((Math.random() * 2) | 0)) % 3;
    if (this.obstacles.throwBoulder(lane, sLand) < 0) { r.t = 0.8; return; }
    r.n++;
    r.t = rand(RCFG.rageEvery[0], RCFG.rageEvery[1]) * rageScale(this.layer);
    this.float('⚠ KAYA!', 'bad');
    this.ctx.audio.bump(0.8);
    this.ctx.platform.haptic('warning');
  }

  // At the layer boundary: 1 survived (bonus, the Yeti falls back), -1 crashed during it, 0 it never got to throw.
  rageEnd(layer) {
    const r = this.rage;
    if (!r) return 0;
    this.rage = null;
    if (r.failed || this.crashes !== r.crashes0) return -1;
    if (!r.n) return 0;
    const bonus = Math.round(150 * layer * this.mult);
    this.score += bonus;
    this.gap = Math.min(RCFG.yetiMax, this.gap + RCFG.rageBack);
    this.ctx.audio.win();
    this.ctx.platform.haptic('success');
    this.float('YETİ PES ETTİ!', 'big');
    this.after(0.35, () => this.float(`+${bonus.toLocaleString('tr-TR')}`, 'big'));
    return 1;
  }

  // Yeti surge: every ~30 s it roars and lunges (gap -surgePull over surgeLunge s). A boost strip, a jump pad or two
  // near-misses while it winds up / lunges shake it off. It never gets closer than surgeFloor this way.
  surgeTick(dt) {
    if (this.level) return;
    const s = this.surge;
    if (!s) {
      this.surgeT -= dt;
      if (this.surgeT > 0) return;
      if (this.rage || this.rocketT > 0 || this.zip || this.grind || this.gap < 7) { this.surgeT = 3; return; } // not mid-something / already close
      this.surge = { t: 0, applied: 0, near: 0 };
      this.roar(true);
      this.float('YETİ ATILIYOR!', 'bad');
      this.ctx.ui.flash?.('surge');
      this.ctx.ui.runnerSurge?.(true);
      return;
    }
    s.t += dt;
    if (s.near >= 2) { this.surgeSave(); return; }
    if (s.t > RCFG.surgeTele) {
      const d = Math.min(Math.max(0, this.gap - RCFG.surgeFloor), (RCFG.surgePull / RCFG.surgeLunge) * dt);
      this.gap -= d;
      s.applied += d;
    }
    if (s.t >= RCFG.surgeTele + RCFG.surgeLunge) this.surgeEnd();
  }

  surgeEnd() {
    this.surge = null;
    this.surgeT = rand(RCFG.surgeEvery[0], RCFG.surgeEvery[1]);
    this.ctx.ui.runnerSurge?.(false);
  }

  surgeSave() {
    this.score += Math.round(150 * this.mult);
    this.addFlow(3);
    this.float('YETİ ISKALADI!', 'big');
    this.ctx.audio.star(1);
    this.ctx.platform.haptic('success');
    this.surgeEnd();
  }

  // Every layer the rules change (Jetpack Joyride-style zones) — announced ahead so you wonder what's next.
  stageZone(layer) {
    const ZONES = [
      { kind: 'movers', name: 'HAREKETLİ ENGELLER' },
      { kind: 'lasers', name: 'BUZ LAZERLERİ' },
      { kind: 'narrow', name: 'DAR KÖPRÜLER' },
      { kind: 'missiles', name: 'KAR FÜZELERİ' },
      { kind: 'invert', name: 'TERS KONTROL', runner: true },
      { kind: 'coinRain', name: 'KAR TANESİ YAĞMURU' },
      { kind: 'storm', name: 'FIRTINA' },
      { kind: 'lowgrav', name: 'DÜŞÜK YERÇEKİMİ', runner: true },
      { kind: 'boss', name: 'YETİ ÖFKESİ' },
    ];
    const z = layer <= ZONES.length ? ZONES[layer - 1] : ZONES[Math.floor(Math.random() * ZONES.length)];
    const from = Math.max(this.b.s + 320, (this.zone && this.zone.until > this.b.s ? this.zone.until + 60 : 0)), until = from + 420;
    if (!z.runner) this.obstacles.setZone?.(z.kind, { from, until });
    this.zone = { ...z, from, until, announced: false };
    this.after(3.4, () => this.float(`GELİYOR: ${z.name}`, 'big')); // after the checkpoint / layer / biome banners
  }

  zoneTick() {
    const z = this.zone;
    if (!z) return;
    const s = this.b.s;
    if (!z.announced && s >= z.from) {
      z.announced = true;
      this.ctx.ui.banner(z.name, 4);
      this.ctx.audio.milestone(4);
      this.ctx.platform.haptic('success');
    }
    this.inZone = s >= z.from && s < z.until ? z.kind : null;
    if (s >= z.until) { this.zone = null; this.inZone = null; this.float('BÖLGE BİTTİ', ''); }
  }

  addFlow(n) {
    this.flow = Math.min(100, this.flow + n);
    this.flowT = 2.5;
  }

  makeRecordFlag() {
    if (this.bestDist < 50) { this.recFlag = null; return; }
    const g = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 7, 6).translate(0, 3.5, 0), new THREE.MeshLambertMaterial({ color: 0xffffff }));
    g.add(pole);
    let mat;
    if (typeof document !== 'undefined') {
      const cv = document.createElement('canvas');
      cv.width = 256; cv.height = 128;
      const c = cv.getContext('2d');
      c.fillStyle = '#e8322a'; c.fillRect(0, 0, 256, 128);
      c.fillStyle = '#fff'; c.font = '900 56px system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.lineWidth = 8; c.strokeStyle = '#17345c'; c.strokeText('REKOR', 128, 66); c.fillText('REKOR', 128, 66);
      mat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), side: THREE.DoubleSide });
    } else mat = new THREE.MeshBasicMaterial({ color: 0xe8322a, side: THREE.DoubleSide });
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 1.8).translate(1.8, 5.8, 0), mat);
    g.add(banner);
    // A glowing line across the track marks the exact spot.
    const line = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.6), new THREE.MeshBasicMaterial({ color: 0xff4a3a, transparent: true, opacity: 0.75, depthWrite: false }));
    line.rotation.x = -Math.PI / 2;
    g.add(line);
    this.recLine = line;
    g.visible = false;
    this.ctx.scene.add(g);
    this.recFlag = g;
  }

  placeRecordFlag() {
    const f = this.recFlag;
    if (!f) return;
    const ds = this.bestDist - this.b.s;
    f.visible = ds > -20 && ds < 280;
    if (!f.visible) return;
    const tr = this.track;
    tr.frame(this.bestDist, _f);
    const hw = tr.halfWidth(this.bestDist) || 3.8;
    tr.toWorld(this.bestDist, -hw - 0.6, 0, _v);
    f.position.copy(_v);
    _x.copy(_f.right).negate();
    _m.makeBasis(_f.right, _f.up, _x.crossVectors(_f.right, _f.up));
    f.quaternion.setFromRotationMatrix(_m);
    this.recLine.scale.set(hw * 2 + 1.2, 1, 1);
    this.recLine.position.set(hw + 0.6, 0.06, 0);
  }

  // ---------- perks / power-ups ----------
  offerPerks() {
    this.perkDue = false;
    this.nextPerkS = Infinity;
    this.perkLayer = this.layer + 2;   // every 2nd layer
    const cards = rollPerks(this.perks);
    if (!cards.length || !this.ctx.ui.showPerks) return;
    this.perkPause = true;
    this.ctx.audio.milestone(4);
    this.ctx.ui.showPerks(cards, 'BİR GÜÇ SEÇ', (p) => {
      this.perkPause = false;
      this.applyPerk(p.id);
      this.ctx.audio.ui('confirm');
      this.ctx.platform.haptic('success');
      this.float(`${p.icon} ${p.name.toLocaleUpperCase('tr-TR')}!`, 'big');
      this.ctx.input.consumeDx();
      this.ctx.input.consumeLane();
    });
  }

  applyPerk(id) {
    this.perks.add(id);
    if (id === 'miknatis') this.magnetPerm = true;
    if (id === 'kabuk') this.kabuk = 1;
    if (id === 'akis') this.flow = Math.min(100, this.flow + 25);
    if (id === 'ikiz') this.startClone(20);
    this.ctx.meta?.track?.('perk', { id });
  }

  offerUpgrade() {
    if (this.state !== 'over' || !this.ctx.ui.showPerks) return;
    const pool = UPGRADES.slice();
    const cards = [];
    while (cards.length < 3 && pool.length) cards.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    const perm = this.ctx.save.perm?.() ?? {};
    const shown = cards.map((u) => ({ ...u, desc: `${u.desc} · Sv ${(perm[u.id] || 0) + 1}/10` }));
    this.ctx.ui.showPerks(shown, 'KALICI GELİŞTİRME', (u) => {
      const lv = this.ctx.save.addPerm?.(u.id);
      this.ctx.audio.ui('confirm');
      this.ctx.ui.toast?.(`${u.icon} ${u.name} Sv ${lv}`);
    });
  }

  setGhost(on) {
    const m = this.ctx.ball.snow.material;
    if (on) { this.ghostWas = { t: m.transparent, o: m.opacity }; m.transparent = true; m.opacity = 0.4; }
    else if (this.ghostWas) { m.transparent = this.ghostWas.t; m.opacity = this.ghostWas.o; this.ghostWas = null; }
    m.needsUpdate = true;
  }

  // İkiz Top: a twin rolls one lane over — it has to dodge too; while it lives, +2 on the multiplier.
  startClone(t) {
    this.cloneT = Math.max(this.cloneT, t);
    if (!this.clone) {
      const src = this.ctx.ball.snow;
      const mesh = new THREE.Mesh(src.geometry, src.material);
      mesh.frustumCulled = false;
      this.ctx.scene.add(mesh);
      this.clone = { mesh, u: this.b.u, vu: 0, events: [], ball: { id: 'clone', s: 0, u: 0, h: 0, r: 0, vs: 0, size: 1 } };
    }
    this.ctx.audio.milestone(3);
    this.float('İKİZ TOP! ÇARPAN +2', 'big');
  }

  endClone(popped) {
    const c = this.clone;
    if (!c) return;
    if (popped) {
      const p = c.mesh.position;
      this.ctx.fx.burst(p.x, p.y, -p.z, 24, 0xffffff, 6, 0.2, 5);
      this.float('İKİZ PATLADI!', 'bad');
      this.ctx.audio.crash(0.4);
    } else this.float('İKİZ GİTTİ', '');
    this.ctx.scene.remove(c.mesh);
    this.clone = null;
    this.cloneT = 0;
  }

  updateClone() {
    const c = this.clone;
    if (!c) return;
    const b = this.b;
    const lane = ((this.lane + 2) % 3) - 1; // always a different lane than you
    const dt = 1 / 60;
    c.vu += ((lane * RCFG.laneW - c.u) * 260 - c.vu * 2 * Math.sqrt(260) * 0.95) * dt;
    c.u += c.vu * dt;
    const cb = c.ball;
    cb.s = b.s; cb.u = c.u; cb.h = b.h; cb.r = b.r; cb.vs = b.vs; cb.size = b.size; cb.duck = b.duck;
    if (this.state === 'play' && this.countT <= 0) {
      c.events.length = 0;
      this.obstacles.collide(cb, c.events);
      for (const e of c.events) {
        if (e.type === 'hit' && !(this.tier + 1 >= (e.toughness ?? 5) + RCFG.smashMargin) && this.ghostT <= 0 && this.rocketT <= 0) { this.endClone(true); return; }
        if (e.type === 'pickup' && (e.kind === 'flake' || e.kind === 'snow')) this.handle(e);
      }
    }
    this.track.toWorld(b.s, c.u, b.h + b.r * 0.96, _tp);
    c.mesh.position.copy(_tp);
    c.mesh.quaternion.copy(this.ctx.ball.spin.quaternion);
    c.mesh.scale.setScalar(this.rShown);
  }

  addTons(t) {
    this.destTons += t;
    const tier = destructionTier(this.destTons);
    if (tier > this.destTier) {
      this.destTier = tier;
      this.ctx.ui.banner(`YIKIM: ${DESTRUCTION[tier].name}`, Math.min(5, 2 + tier));
      this.ctx.audio.milestone(Math.min(5, 1 + tier));
      this.ctx.platform.haptic('success');
    }
  }

  updateHud() {
    this.ctx.ui.runnerDanger?.(this.dangerBonus(), this.chainBonus(), this.riskT > 0 ? 4 : 0);
    this.updateGoal();
    const bi = biomeAt(this.b.s);
    const prog = this.level ? clamp(this.b.s / this.level.length, 0, 1) : bi.t;
    const label = this.level ? `${this.level.act}-${this.level.idx} · ${this.level.name}` : bi.biome.name;
    this.ctx.ui.runnerStats(this.score, this.coins, this.mult, prog, Math.round(this.b.s), label);
    if ((this._progT = (this._progT || 0) + 1) % 30 === 0) this.ctx.meta?.track?.('run_progress', { distance: Math.round(this.b.s), coins: this.coins });
    this.ctx.ui.runnerVitals({
      tier: this.tier, tiers: TIERS, grow: this.grow, gap: this.gap, yetiMax: RCFG.yetiMax,
      helmet: this.helmet, magnet: this.magnetT > 0, rocket: this.rocketT > 0,
      x2: this.x2T > 0, superjump: this.superT > 0, sled: this.sledT > 0,
    });
  }

  // Goal strip: the next checkpoint (every layer), "REKORA n m" when your record is near, the Yeti's barrage while it lasts.
  updateGoal() {
    if (this.level) return;
    const ui = this.ctx.ui, s = this.b.s, r = this.rage;
    if (r && !r.failed) { ui.runnerGoal?.('rage', 0, (s - r.s0) / Math.max(1, r.B - r.s0)); return; }
    if (this.newRecT > 0) { ui.runnerGoal?.('new', 0, 1); return; }
    const g = goalFor(s, RCFG.layerLen, this.bestDist, this.passedDist, RCFG.recNear, _goal);
    ui.runnerGoal?.(g.mode, g.val, g.frac);
  }

  step(dt, hw) {
    const b = this.b;
    this.stepDt = dt;
    const tr = this.track;
    // Lateral: player spring (heavier when big, slippery on ice) + external knocks / curve drift.
    // Lane spring: snappy when small, heavier when big, mushy on ice.
    const mass = 1 + this.tier * 0.18;
    const grip = this.iceT > 0 ? 0.3 : 1;
    const speedK = clamp((b.vs - RCFG.startSpeed) / (RCFG.refSpeed - RCFG.startSpeed), 0, 1);
    const k = (RCFG.laneStiff * grip * (1 - 0.32 * speedK)) / mass; // momentum: drift more at speed
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

    // Vertical. Rideable train roofs/ramps count as ground too.
    const ts = tr.surfaceAt(b.s, b.u);
    const ps = this.obstacles.platformAt ? this.obstacles.platformAt(b.s, b.u) : -Infinity;
    const surf = Math.max(ts, ps ?? -Infinity);
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
      this.addFlow(6 * dt);
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
      b.vh -= RCFG.gravity * (this.inZone === 'lowgrav' ? 0.5 : 1) * dt;
      b.h += b.vh * dt;
      if (surf !== -Infinity && b.vh <= 0 && b.h <= surf && b.h > surf - 1.2) this.land(surf);
      if (b.h < RCFG.fallDeath) this.die('fall');
    }

    // Collisions.
    b.size = this.tier + 1;
    b.duck = this.duckT > 0;
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
      if (this.perks?.has('yay')) vh *= 1.35;
    }
    this.grounded = false;
    this.coyoteT = 0;
    b.vh = vh;
    this.lastSlope = 0;
    this.squash = -0.6; // stretch up
    this.mistBurst(6, 0xffffff, 2.5, 1);
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
    this.squash = 0.4 + impact * 0.6;
    if (impact > 0.15) this.mistBurst(Math.round(6 + impact * 16), 0xffffff, 3 + impact * 5, 1.2 + impact);
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
      this.score += 40 * tough * this.mult * (1 + 0.1 * (this.perm.smash || 0));
      this.addTons([0, 3, 8, 20, 60, 180][Math.min(5, tough)] * (0.6 + b.r));
      audio.crash(clamp(tough / 5, 0.3, 1));
      platform.haptic('medium');
      this.shake += 0.25;
      b.vs *= this.rocketT > 0 ? 1 : 0.92;
      this.debris(e, 14);
      this.float(['', 'ÇİT!', 'KIRDIN!', 'PARAMPARÇA!', 'DEVİRDİN!', 'YIKTIN!'][Math.min(5, tough)], '');
      return;
    }
    this.obstacles.resolve?.(e.id, false);
    if (this.invulnT > 0 || this.ghostT > 0) return;
    if (this.kabuk > 0) {
      this.kabuk--;
      this.invulnT = RCFG.invulnAfterCrash;
      audio.bump(0.6);
      this.debris(e, 8);
      this.float('KABUK KIRILDI!', 'big');
      return;
    }
    if (this.perks.has('cam') && !this.sledT && !this.helmet) {
      this.crashes++;
      this.debris(e, 10);
      this.explode();
      return;
    }
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
    if (this.flowLvl > 0) this.float('AKIŞ KIRILDI', 'bad');
    this.flow = 0;
    this.flowLvl = 0;
    this.ctx.meta?.track?.('crash', {});
    this.layersLost++;
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
    this.gap -= RCFG.yetiCrash * (this.perks.has('yetikov') ? 0.6 : 1) * (1 - 0.04 * (this.perm.yeti || 0));
    if (this.nearChain >= 3) this.float('ZİNCİR KIRILDI', 'bad');
    this.nearChain = 0;
    this.invulnT = RCFG.invulnAfterCrash;
    this.burst(18 + Math.round(lostR * 40), 0xffffff, 6);
    this.mistBurst(14, 0xffffff, 5, 1.6);
    this.hitStop = 0.11;
    this.ctx.ui.flash?.('hit');
    audio.crash(0.6);
    audio.bump(1);
    platform.haptic('heavy');
    this.shake += 0.9;
    this.float(this.tier === 0 ? 'SON KATMAN!' : 'KÜÇÜLDÜN!', 'bad');
    if (this.gap < 16) this.float('YETİ YAKLAŞIYOR!', 'bad');
  }

  explode() {
    const b = this.b;
    this.mistBurst(40, 0xffffff, 9, 3);
    this.hitStop = 0.2;
    this.ctx.ui.flash?.('hit');
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
      case 'warn':
        if (!this.warned || this.warned !== e.kind + e.lane + Math.round(e.t * 10)) {
          this.warned = e.kind + e.lane + Math.round(e.t * 10);
          this.ctx.ui.laneWarn?.(e.lane, e.kind);
          if (e.kind === 'oncoming') audio.ui('back');
          platform.haptic('light');
        }
        break;
      case 'wind':
        b.u += (e.du || 0) * this.stepDt;
        if (Math.random() < this.stepDt * 20) {
          const p = this.ctx.ball.group.position;
          this.ctx.fx.puff(p.x - (e.du || 0) * 4, p.y + 1 + Math.random() * 2, p.z, (e.du || 0) * 6, 0, 0, 0.4, 0.6, 0xffffff, 0.5);
        }
        break;
      case 'fog':
        this.fogTarget = Math.max(this.fogTarget, e.density || 0);
        break;
      case 'finish':
        this.finish();
        break;
      case 'near': {
        this.nearChain = this.nearT > 0 ? this.nearChain + 1 : 1;
        this.nearT = 2.6;
        this.addFlow(4);
        const bonus = Math.round(50 * (this.perks.has('kilpayi') ? 3 : 1) * this.mult);
        this.score += bonus;
        if (this.perks.has('risk')) this.riskStack = Math.min(0.8, this.riskStack + 0.04);
        const cm = this.chainBonus();
        if (this.surge) this.surge.near++;
        this.float(cm > 0 ? `KIL PAYI +${bonus} · ZİNCİR +${cm}` : `KIL PAYI +${bonus}`, cm > 0 ? 'big' : '');
        this.punch = Math.min(1.5, this.punch + 0.6);
        this.mistBurst(6, 0xbfe6ff, 4, 0.9);
        audio.whoosh();
        if (cm > 0) audio.star(Math.min(2, cm - 1));
        platform.haptic('light');
        this.ctx.meta?.track?.('near', {});
        break;
      }
      case 'over':
        this.addFlow(3);
        this.score += 50 * this.mult;
        this.float('ÜSTÜNDEN!', '');
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
          this.addFlow(4);
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
          this.addFlow(0.8);
          this.coinsF += (e.value || 1) * (this.perks.has('altin') ? 2 : 1) * (1 + 0.08 * (this.perm.coin || 0));
          const whole = Math.floor(this.coinsF);
          this.coins += whole;
          this.coinsF -= whole;
          this.score += 10 * this.mult;
          music.note();
          platform.haptic('select');
        } else if (e.kind === 'snow') {
          this.addSnow((1 / RCFG.pilesPerTier[Math.min(3, this.tier)]) * (this.perks.has('kar') ? 2 : 1) * (1 + 0.06 * (this.perm.size || 0)));
          audio.pop(0.4, 3);
          this.burst(8, 0xffffff, 2);
        } else if (e.kind === 'star') {
          this.score += 500;
          audio.milestone(2);
          this.float('+500', 'big');
        } else if (e.kind === 'x2') {
          this.x2T = this.dur('x2');
          audio.milestone(3);
          this.float('ÇARPAN +3!', 'big');
          this.powerups = (this.powerups || 0) + 1; this.ctx.meta?.track?.('powerup', { kind: 'x2' });
        } else if (e.kind === 'superjump') {
          this.superT = this.dur('superjump');
          audio.milestone(3);
          this.float('SÜPER ZIPLAMA!', 'big');
          this.powerups = (this.powerups || 0) + 1; this.ctx.meta?.track?.('powerup', { kind: 'superjump' });
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
          if (res && res.complete) this.ctx.ui.banner('PATPAT TAMAM!', 4);
        } else if (e.kind === 'timewarp') {
          this.warpT = 3.5;
          audio.milestone(3);
          this.float('ZAMAN BÜKÜCÜ!', 'big');
          this.ctx.ui.flash?.('white');
          this.powerups = (this.powerups || 0) + 1; this.ctx.meta?.track?.('powerup', { kind: 'timewarp' });
        } else if (e.kind === 'ghost') {
          this.ghostT = 5;
          this.setGhost(true);
          audio.milestone(3);
          this.float('HAYALET!', 'big');
          this.powerups = (this.powerups || 0) + 1; this.ctx.meta?.track?.('powerup', { kind: 'ghost' });
        } else if (e.kind === 'risk') {
          this.riskT = 10;
          audio.milestone(5);
          this.float('RİSK MODU! HIZ ↑ ÇARPAN +4', 'big');
          this.ctx.ui.flash?.('hit');
          this.powerups = (this.powerups || 0) + 1; this.ctx.meta?.track?.('powerup', { kind: 'risk' });
        } else if (e.kind === 'clone') {
          this.startClone(12);
          this.powerups = (this.powerups || 0) + 1; this.ctx.meta?.track?.('powerup', { kind: 'clone' });
        } else if (e.kind === 'helmet') {
          this.powerups = (this.powerups || 0) + 1; this.ctx.meta?.track?.('powerup', { kind: 'helmet' });
          this.helmet = true;
          audio.milestone(3);
          platform.haptic('success');
          this.float('KASK!', 'big');
        } else if (e.kind === 'magnet') {
          this.magnetT = this.dur('magnet');
          this.powerups = (this.powerups || 0) + 1; this.ctx.meta?.track?.('powerup', { kind: 'magnet' });
          audio.milestone(3);
          this.float('MIKNATIS!', 'big');
        } else if (e.kind === 'rocket') {
          this.rocketT = this.dur('rocket');
          this.powerups = (this.powerups || 0) + 1; this.ctx.meta?.track?.('powerup', { kind: 'rocket' });
          // Sky lane of snowflakes for the flight (if the obstacles module supports it).
          this.obstacles.spawnSkyCoins?.(b.s + 12, b.s + 12 + this.rocketT * b.vs * 1.2);
          this.gap = Math.min(RCFG.yetiMax, this.gap + 12);
          audio.whoosh();
          platform.haptic('success');
          this.float('ROKET!', 'big');
        }
        break;
      case 'pad':
        if (this.surge) this.surgeSave();   // boost strip / jump pad: the lunge misses
        if (e.kind === 'boost') {
          b.vs = Math.min(RCFG.maxSpeed + 6, b.vs + 7 * (e.power || 1));
          this.gap = Math.min(RCFG.yetiMax, this.gap + 4);
        } else this.jump(RCFG.jumpPadV * (e.onBeat ? 1.15 : 1) * (e.power || 1), true);
        if (e.onBeat) {
          this.perfects++;
          this.addFlow(5);
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
        this.queueBanner(bi.biome.name.toLocaleUpperCase('tr-TR'), 3, 1);
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
  magnetRadius() { return this.magnetT > 0 || this.magnetPerm ? 4.5 : 0; }

  finish() {
    if (this.state !== 'play') return;
    this.state = 'finished';
    this.finishT = 0;
    this.surge = null;
    this.ctx.ui.runnerSurge?.(false);
    this.ctx.ui.banner('BİTİŞ!', 5);
    this.ctx.ui.flash?.('white');
    this.ctx.audio.win();
    this.ctx.platform.haptic('success');
    this.ctx.menus?.confetti?.(80);
    this.ctx.audio.setRoll(0, 0);
    music.duck(true);
    this.onFinish?.(this.levelStats());
  }

  levelStats() {
    const len = this.level ? this.level.length : this.b.s;
    return {
      finished: this.state === 'finished',
      distance: Math.round(this.b.s), score: Math.round(this.score), coins: this.coins,
      flakes: this.coins, flakesPct: clamp(this.coins / Math.max(1, len / 8), 0, 1),
      crashes: this.crashes, layersLost: this.layersLost, maxTier: this.maxTier,
      minYetiGap: this.minGap ?? this.gap, perfects: this.perfects, powerups: this.powerups, time: this.time,
    };
  }

  die(cause) {
    if (this.state !== 'play') return;
    this.zip = null;
    this.grind = null;
    this.rage = null;
    this.surge = null;
    this.bannerQ.length = 0;
    this.later.length = 0;
    this.ctx.ui.runnerSurge?.(false);
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
    if (this.deadT > 1.4 && this.state === 'dying' && this.level) {
      this.state = 'over';
      this.ctx.save.addCoins(this.coins);
      this.ctx.meta?.track?.('endless_end', { distance: Math.round(b.s), score: Math.round(this.score), coins: this.coins, crashes: this.crashes, cause: this.cause, maxTier: this.maxTier, campaign: true });
      this.onFail?.(this.cause, this.levelStats());
      return;
    }
    if (this.deadT > 1.4 && this.state === 'dying') {
      this.state = 'over';
      const { save, ui } = this.ctx;
      const best = save.runnerBest();
      const score = Math.round(this.score);
      const rank = save.recordRunner(score, Math.round(b.s)) || 0;
      const dailyBest = save.recordDailyRunner?.(score);
      save.addCoins(this.coins);
      const meta = this.ctx.meta;
      meta?.track?.('endless_end', { distance: Math.round(b.s), score, coins: this.coins, crashes: this.crashes, cause: this.cause, maxTier: this.maxTier, jumps: this.jumps, smashes: this.smashes });
      if (this.boxes) { meta?.addBoxes?.(this.boxes); }
      const reviveCost = meta?.reviveCost?.(this.revives) ?? 0;
      this.reviveCost = reviveCost;
      ui.showRunnerResult({
        dailyBest,
        destruction: DESTRUCTION[this.destTier].name,
        tons: Math.round(this.destTons),
        rank,
        toRecord: Math.max(0, Math.round(this.bestDist - b.s)),
        missions: meta?.missions?.() ?? [],
        layer: this.layer + 1,
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
      // Pick one permanent upgrade (the "come back stronger" hook).
      setTimeout(() => this.offerUpgrade(), this.boxes ? 2600 : 1100);
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
    this.avLevel = 1;
    this.surgeT = Math.max(this.surgeT, 10);
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
    tr.toWorld(b.s, b.u, b.h + this.rShown * (this.duckT > 0 ? 0.5 : 0.96), _v);
    const ball = this.ctx.ball;
    // Rolling: forward motion turns about -right, sideways motion about the tangent.
    ball.rollAxis(_f.right, -this.rollS / Math.max(0.2, this.rShown));
    ball.rollAxis(_f.tan, this.rollU / Math.max(0.2, this.rShown));
    this.rollS = this.rollU = 0;
    ball.group.position.copy(_v);
    ball.x = _v.x; ball.y = _v.y; ball.d = -_v.z; ball.r = this.rShown;
    // Squash & stretch (world-vertical), springing back.
    this.squash *= Math.exp(-10 * (1 / 60));
    const sq = this.squash;
    if (this.duckT > 0) ball.group.scale.set(1.35, 0.5, 1.35);
    else ball.group.scale.set(1 + sq * 0.25, 1 - sq * 0.3, 1 + sq * 0.25);
    this.juiceFrame(_f, _v);
    this.updateClone();
    ball.group.scale.multiplyScalar(1 + 0.03 * (this.perm.size || 0));
    this.placeShadow();
    ball.airborne = !this.grounded;
    if (this.state === 'play') {
      // Blink while invulnerable after a crash/revive.
      ball.group.visible = this.invulnT > 0 ? Math.floor(this.time * 14) % 2 === 0 : true;
    }
    if (snap) this.updateCamera(1, true);
  }

  // Powder spray, ribbon trail and speed lines — what makes speed *feel* like speed.
  juiceFrame(f, pos) {
    const b = this.b;
    const fx = this.ctx.fx;
    const playing = this.state === 'play' && this.countT <= 0;
    const speedK = clamp((b.vs - RCFG.startSpeed) / (RCFG.refSpeed - RCFG.startSpeed), 0, 1);
    if (playing && this.grounded && !this.grind) {
      const rate = 0.35 + speedK * 0.9;
      if (Math.random() < rate) {
        const side = Math.random() < 0.5 ? -1 : 1;
        _tp.copy(pos).addScaledVector(f.right, side * this.rShown * 0.8).addScaledVector(f.up, -this.rShown * 0.7);
        fx.puff(_tp.x, _tp.y, _tp.z,
          f.right.x * side * 2 - f.tan.x * b.vs * 0.15, 1.2, f.right.z * side * 2 - f.tan.z * b.vs * 0.15,
          0.35 + this.rShown * 0.5, 0.7, this.biomeMist ?? 0xffffff, 0.45);
      }
    }
    if (playing && this.rocketT > 0) {
      _tp.copy(pos).addScaledVector(f.tan, -this.rShown);
      fx.puff(_tp.x, _tp.y, _tp.z, (Math.random() - 0.5) * 2, -1, (Math.random() - 0.5) * 2, 0.8, 0.6, Math.random() < 0.5 ? 0xffb050 : 0xdddddd, 0.6);
    }
    // Ribbon trail pressed into the snow (uses the equipped trail's material).
    this.updateTrail(f, pos);
    this.ctx.ui.speedLines?.(playing ? Math.max(0, speedK - 0.35) / 0.65 + (this.rocketT > 0 ? 0.6 : 0) + (b.vs > RCFG.maxSpeed ? 0.4 : 0) : 0);
  }

  updateTrail(f, pos) {
    const TN = 18; // ~12 m: a long ribbon reaches under the chase camera and reads as a giant wedge
    if (!this.trail) {
      const g = new THREE.BufferGeometry();
      this.trailPos = new Float32Array(TN * 2 * 3);
      this.trailCol = new Float32Array(TN * 2 * 3).fill(1);
      g.setAttribute('position', new THREE.BufferAttribute(this.trailPos, 3).setUsage(THREE.DynamicDrawUsage));
      g.setAttribute('color', this.ctx.fx.trail.geometry.attributes.color ? new THREE.BufferAttribute(this.ctx.fx.trailCol.slice(0, TN * 6), 3) : new THREE.BufferAttribute(this.trailCol, 3));
      const idx = [];
      for (let i = 0; i < TN - 1; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
      g.setIndex(idx);
      this.trail = new THREE.Mesh(g, this.ctx.fx.trail.material);
      this.trail.frustumCulled = false;
      this.trail.renderOrder = 2;
      this.ctx.scene.add(this.trail);
      this.trailPts = [];
    }
    const pts = this.trailPts;
    const hw = this.rShown * 0.5;
    const off = this.grounded ? 0.04 - this.rShown * 0.96 : null;
    if (off === null) {
      if (pts.length && !pts[pts.length - 1].gap) pts.push({ gap: true });
    } else {
      const last = pts[pts.length - 1];
      _tp.copy(pos).addScaledVector(f.up, off);
      if (!last || last.gap || _tp.distanceToSquared(last.p) > 0.6) {
        pts.push({ p: _tp.clone(), r: f.right.clone(), w: hw });
      }
    }
    while (pts.length > TN) pts.shift();
    const arr = this.trailPos;
    let n = 0;
    for (let i = 0; i < pts.length; i++) {
      const q = pts[i];
      if (q.gap) continue;
      const fade = Math.min(1, n / 10);
      const w = q.w * fade;
      arr[n * 6] = q.p.x - q.r.x * w; arr[n * 6 + 1] = q.p.y - q.r.y * w; arr[n * 6 + 2] = q.p.z - q.r.z * w;
      arr[n * 6 + 3] = q.p.x + q.r.x * w; arr[n * 6 + 4] = q.p.y + q.r.y * w; arr[n * 6 + 5] = q.p.z + q.r.z * w;
      n++;
    }
    this.trail.geometry.attributes.position.needsUpdate = true;
    this.trail.geometry.setDrawRange(0, Math.max(0, (n - 1) * 6));
    this.trail.visible = this.state !== 'idle';
  }

  mistBurst(n, color, speed, size) {
    const p = this.ctx.ball.group.position;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      this.ctx.fx.puff(p.x + Math.cos(a) * this.rShown, p.y - this.rShown * 0.5, p.z + Math.sin(a) * this.rShown,
        Math.cos(a) * speed, Math.random() * speed * 0.5, Math.sin(a) * speed, size * (0.6 + Math.random() * 0.6), 0.9, color, 0.6);
    }
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

  roar(quiet = false) {
    const { audio, platform } = this.ctx;
    audio.bump(1);
    audio.crash(0.25);
    platform.haptic('heavy');
    this.shake += 0.5;
    if (!quiet) this.float('GRRAAAH!', 'bad');
  }

  updateYeti(dt) {
    const y = this.yeti;
    const b = this.b;
    // Only when it's really on the track (at the very start it would be clamped onto the start line, right in
    // front of the camera).
    const show = this.b.s - this.gap > 1;
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
    // Banked spirals: follow only part of the track's roll (full roll reads as a glitch and dips the camera into
    // the terrain). Loops/corkscrews genuinely turn upside down, so there we follow the frame completely.
    const pc = tr.pieceAt(b.s);
    const flip = pc && (pc.kind === 'loop' || pc.kind === 'corkscrew');
    this.flipK = (this.flipK ?? 0) + ((flip ? 1 : 0) - (this.flipK ?? 0)) * Math.min(1, dt * 3);
    const follow = 0.35 + 0.65 * this.flipK;
    _x.copy(_f.up).multiplyScalar(follow).addScaledVector(WORLD_UP, 1 - follow).normalize();
    tr.toWorld(camS, b.u * 0.45, 0, _v);
    _v.addScaledVector(_x, camH);
    tr.frame(b.s + 10, _f);
    tr.toWorld(b.s + 10, b.u * 0.6, 0, _look);
    _look.addScaledVector(_x, Math.max(b.h * 0.6, 0) + 0.4);
    if (dying) _look.copy(this.ctx.ball.group.position);
    const k = snap ? 1 : 1 - Math.exp(-dt * 7);
    this.camPos.lerp(_v, k);
    this.camLook.lerp(_look, snap ? 1 : 1 - Math.exp(-dt * 10));
    this.camUp.lerp(_x, k).normalize();
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
    // Lean into lane changes a touch.
    this.tilt = (this.tilt ?? 0) + ((-b.vu * 0.014) - (this.tilt ?? 0)) * Math.min(1, dt * 8);
    cam.rotateZ(this.tilt);
    const fovK = clamp((b.vs - RCFG.startSpeed) / (RCFG.refSpeed - RCFG.startSpeed), 0, 1);
    cam.userData.fovBoost = fovK * 8 + (this.rocketT > 0 ? 6 : 0) + this.punch * 7 + (this.riskT > 0 ? 4 : 0);
  }

  dispose() {
    this.track?.dispose();
    this.obstacles?.dispose();
    this.env?.dispose();
    if (this.clone) { this.ctx.scene.remove(this.clone.mesh); this.clone = null; }
    if (this.ghostWas) this.setGhost(false);
    if (this.trail) { this.ctx.scene.remove(this.trail); this.trail.geometry.dispose(); this.trail = null; }
    if (this.shadow) { this.ctx.scene.remove(this.shadow); this.shadow.geometry.dispose(); this.shadow.material.map?.dispose(); this.shadow.material.dispose(); this.shadow = null; }
    if (this.recFlag) {
      this.ctx.scene.remove(this.recFlag);
      this.recFlag.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); o.material.map?.dispose(); o.material.dispose(); } });
      this.recFlag = null;
    }
    this.ctx.ui.speedLines?.(0);
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
    Biomes.setBiomeOverride?.(null);
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
function rand(a, b) { return a + Math.random() * (b - a); }
