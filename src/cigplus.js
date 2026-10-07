// cigplus.js — ÇIĞ SONSUZ: the rules (CigGame) and the extra fun on the slope (CigPlus).
//
// CigGame  : the endless-avalanche rules. Steering follower, speed (heavier = faster), VISIBLE SUCTION (edible props
//            fly into the ball over 0.15-0.35 s and then stick), size tiers (YENİ BÖLGE), hunger/melt, bumps that
//            scatter re-collectable snow, size gates, golden snowballs, the avalanche wave that punishes stalling,
//            the pinned-ball safety net and a scripted bot used by the debug hooks and the balance sims.
//            It never touches the DOM: everything visible goes through the `host` callbacks main.js provides.
// CigPlus  : on-slope pickups (magnet, giant, rocket, shield, freeze, rainbow + the golden snowball), bouncy mushrooms,
//            updraft towers, flip kickers (the world places the ramps) and the snowman army — planned INCREMENTALLY as
//            the world streams in. Draw calls: 1 dynamic solid mesh + 1 dynamic translucent mesh.
//            (Slides, portals and the invert gate are gone: they stole food and mirrored the controls.)
//
// Coordinates follow world.js: downhill distance `d` grows forward, world z = -d.
import * as THREE from 'three';
import { CFG, tierOf, bandAt, LABEL } from './config.js';
import { makeRng } from './rng.js';
import { patchMaterial } from './shaders.js';
import { MOVE_ARMY, MOVE_NONE, clamp } from './world.js';

const TAU = Math.PI * 2;
const sm01 = (t) => { t = t < 0 ? 0 : t > 1 ? 1 : t; return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

export const POWERS = {
  magnet: { name: 'MIKNATIS', icon: '🧲', color: 0xff4455, dur: 8 },
  giant: { name: 'DEV MANTAR', icon: '🍄', color: 0x45e06f, dur: 8 },
  rocket: { name: 'ROKET', icon: '🚀', color: 0xff9226, dur: 4 },
  shield: { name: 'KALKAN', icon: '🛡️', color: 0x44a6ff, dur: 25 },
  freeze: { name: 'SOĞUK DALGA', icon: '🧊', color: 0x8eeaff, dur: 8 },
  rainbow: { name: 'GÖKKUŞAĞI', icon: '🌈', color: 0xff5fd2, dur: 8 },
  wings: { name: 'KANAT', icon: '🕊️', color: 0xffffff, dur: 5 },
};
const KEYS = Object.keys(POWERS);
const PICK_STYLE = { ...POWERS, golden: { name: 'ALTIN KARTOPU', icon: '🌟', color: 0xffc928, dur: 0 } };

// Launch option objects (preallocated: hooks read them synchronously).
const OPT_FLIP = { flip: true };
const OPT_BOUNCE = { bounce: true };
const OPT_UPDRAFT = { updraft: true, glide: true };
const OPT_WINGS = { wings: true, glide: true };

const SLIDE_PAL = [0xff4d5e, 0xffc83a, 0x3ddc84, 0x3fa7ff, 0xb066ff];

// ---------------------------------------------------------------------------
// Build-time mesh helpers (allocation is fine here)
// ---------------------------------------------------------------------------
const colCache = new Map();
const _tc = new THREE.Color();
function C(hex, a = 1) {
  const key = hex + ':' + a;
  let c = colCache.get(key);
  if (!c) { _tc.setHex(hex); c = { r: _tc.r, g: _tc.g, b: _tc.b, a }; colCache.set(key, c); }
  return c;
}
const toC = (x) => (typeof x === 'number' ? C(x) : x);

class Mesher {
  constructor() {
    this.p = []; this.c = [];
    this.m = new THREE.Matrix4(); this.id = true;
    this._v = new THREE.Vector3(); this._t = new THREE.Vector3(); this._s = new THREE.Vector3();
    this._e = new THREE.Euler(0, 0, 0, 'YXZ'); this._q = new THREE.Quaternion();
  }
  at(x, y, z, o = {}) {
    this._e.set(o.rx || 0, o.ry || 0, o.rz || 0, 'YXZ');
    this._q.setFromEuler(this._e);
    this._s.set(o.sx ?? o.s ?? 1, o.sy ?? o.s ?? 1, o.sz ?? o.s ?? 1);
    this.m.compose(this._t.set(x, y, z), this._q, this._s);
    this.id = false;
    return this;
  }
  reset() { this.m.identity(); this.id = true; return this; }
  v(x, y, z, c) {
    this._v.set(x, y, z);
    if (!this.id) this._v.applyMatrix4(this.m);
    this.p.push(this._v.x, this._v.y, this._v.z);
    this.c.push(c.r, c.g, c.b, c.a);
  }
  tri(a, b, c, ca, cb = ca, cc = ca) {
    this.v(a[0], a[1], a[2], ca); this.v(b[0], b[1], b[2], cb); this.v(c[0], c[1], c[2], cc);
    return this;
  }
  quad(a, b, c, d, ca, cb = ca, cc = ca, cd = ca) {
    this.tri(a, b, c, ca, cb, cc); this.tri(a, c, d, ca, cc, cd);
    return this;
  }
  box(sx, sy, sz, col) {
    const c = toC(col), x = sx / 2, y = sy / 2, z = sz / 2;
    const P = [[-x, -y, -z], [x, -y, -z], [x, y, -z], [-x, y, -z], [-x, -y, z], [x, -y, z], [x, y, z], [-x, y, z]];
    const F = [[0, 1, 2, 3], [5, 4, 7, 6], [4, 0, 3, 7], [1, 5, 6, 2], [3, 2, 6, 7], [4, 5, 1, 0]];
    for (const f of F) this.quad(P[f[0]], P[f[1]], P[f[2]], P[f[3]], c);
    return this;
  }
  // Surface of revolution around Y. prof = [[r, y], ...]; cf(j, i) -> colour for profile segment j, slice i.
  lathe(prof, seg, cf) {
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * TAU, a1 = ((i + 1) / seg) * TAU;
      const c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
      for (let j = 0; j < prof.length - 1; j++) {
        const [r0, y0] = prof[j], [r1, y1] = prof[j + 1];
        const col = toC(typeof cf === 'function' ? cf(j, i) : cf);
        this.quad([r0 * c0, y0, r0 * s0], [r0 * c1, y0, r0 * s1], [r1 * c1, y1, r1 * s1], [r1 * c0, y1, r1 * s0], col);
      }
    }
    return this;
  }
  // Torus in the XY plane (axis = Z). cf(i) -> colour of segment i.
  torus(R, rr, segs, tube, cf, arc = TAU, a0 = 0) {
    const pt = (a, t) => [(R + rr * Math.cos(t)) * Math.cos(a), (R + rr * Math.cos(t)) * Math.sin(a), rr * Math.sin(t)];
    for (let i = 0; i < segs; i++) {
      const A0 = a0 + (i / segs) * arc, A1 = a0 + ((i + 1) / segs) * arc;
      const col = toC(typeof cf === 'function' ? cf(i) : cf);
      for (let k = 0; k < tube; k++) {
        const T0 = (k / tube) * TAU, T1 = ((k + 1) / tube) * TAU;
        this.quad(pt(A0, T0), pt(A1, T0), pt(A1, T1), pt(A0, T1), col);
      }
    }
    return this;
  }
  template() {
    return { pos: new Float32Array(this.p), col: new Float32Array(this.c), n: this.p.length / 3 };
  }
}

function profAt(prof, r) { // prof is ordered rim -> centre (r decreasing)
  for (let j = 0; j < prof.length - 1; j++) {
    const [r0, y0] = prof[j], [r1, y1] = prof[j + 1];
    if (r <= r0 && r >= r1) {
      const t = r0 === r1 ? 0 : (r0 - r) / (r0 - r1);
      return { y: y0 + (y1 - y0) * t, slope: (y1 - y0) / (r1 - r0) };
    }
  }
  return { y: prof[prof.length - 1][1], slope: 0 };
}
// Flat spot painted on a dome (oriented along the surface).
function domeSpot(m, prof, r, az, size, col, lift = 0.02) {
  const { y, slope } = profAt(prof, r);
  const tilt = Math.atan(-slope); // surface rises toward the centre, normal leans outward
  m.at(Math.cos(az) * r, y + lift, -Math.sin(az) * r, { ry: az, rz: -tilt });
  m.lathe([[0, 0], [size, 0]], 7, col);
  m.reset();
}

const PAD_PROF = []; // parabola dome, rim -> centre: y = 1 - r^2 (matches the physical lift exactly)
for (let i = 0; i <= 10; i++) { const r = 1 - i / 10; PAD_PROF.push([r, 1 - r * r]); }
const TOWER_PR = 3.4; // pad radius the tower template is built for

function buildTemplates() {
  const T = {};
  const mk = (fn) => { const m = new Mesher(); fn(m); return m.template(); };

  T.magnet = mk((m) => {
    m.at(0, 0.05, 0).torus(0.62, 0.2, 12, 5, (i) => (i < 6 ? 0xff3b4a : 0x3b82ff), Math.PI, 0).reset();
    for (const s of [-1, 1]) {
      m.at(s * 0.62, -0.28, 0).box(0.42, 0.62, 0.42, s < 0 ? 0x3b82ff : 0xff3b4a).reset();
      m.at(s * 0.62, -0.5, 0).box(0.44, 0.2, 0.44, 0xf4f7ff).reset();
    }
  });
  T.giant = mk((m) => {
    m.lathe([[0, -0.8], [0.28, -0.8], [0.24, 0.05], [0, 0.05]], 8, 0xfff0cf);
    const cap = [[0.92, 0.0], [0.82, 0.3], [0.6, 0.52], [0.32, 0.66], [0, 0.72]];
    m.at(0, 0.0, 0).lathe(cap, 10, (j, i) => (i % 2 ? 0x37d067 : 0x2cc05a)).reset();
    domeSpot(m, cap, 0.42, 0.5, 0.17, 0xffffff);
    domeSpot(m, cap, 0.62, 2.2, 0.15, 0xffffff);
    domeSpot(m, cap, 0.6, 4.0, 0.16, 0xffffff);
    domeSpot(m, cap, 0.2, 3.1, 0.12, 0xffffff);
  });
  T.rocket = mk((m) => {
    m.lathe([[0.0, -0.85], [0.3, -0.85], [0.36, -0.3], [0.32, 0.3], [0, 0.95]], 8, (j) => (j === 3 ? 0xff3b4a : j === 0 ? 0x4b5568 : 0xf4f7ff));
    for (let a = 0; a < 3; a++) {
      m.at(0, 0, 0, { ry: (a / 3) * TAU });
      m.tri([0.3, -0.25, 0], [0.78, -0.95, 0], [0.3, -0.85, 0], C(0xff3b4a));
      m.reset();
    }
    m.at(0, 0.12, 0.33).lathe([[0, 0], [0.13, 0]], 7, 0x3b82ff).reset();
    m.lathe([[0.24, -0.85], [0.0, -1.45]], 8, (j, i) => (i % 2 ? 0xffb02e : 0xff6a1f));
  });
  T.shield = mk((m) => {
    m.at(0, 0, 0, { rx: Math.PI / 2 }).lathe([[0, 0.1], [0.85, 0.1], [0.85, -0.1], [0, -0.1]], 6, (j) => (j === 0 ? 0x2f86ff : j === 1 ? 0xdfe8f7 : 0x1a4fa8)).reset();
    m.at(0, 0, 0, { rx: Math.PI / 2 }).lathe([[0, 0.17], [0.52, 0.17], [0.52, 0.1]], 6, (j) => (j === 0 ? 0xffd24a : 0xd8a21f)).reset();
  });
  T.freeze = mk((m) => {
    const cf = (j) => (j === 0 ? 0x7fe6ff : 0xeaffff);
    const bi = [[0, -1], [0.26, 0], [0, 1]];
    m.lathe(bi, 5, cf);
    m.at(0, 0, 0, { rz: Math.PI / 2 }).lathe(bi, 5, cf).reset();
    m.at(0, 0, 0, { rx: Math.PI / 2 }).lathe(bi, 5, cf).reset();
    m.at(0, 0, 0, { rz: Math.PI / 4, s: 0.75 }).lathe(bi, 4, cf).reset();
    m.at(0, 0, 0, { rz: -Math.PI / 4, s: 0.75 }).lathe(bi, 4, cf).reset();
  });
  T.rainbow = mk((m) => {
    const bands = [0xff3b3b, 0xff9a2a, 0xffe03a, 0x3ddc6a, 0x3b9bff, 0x9a5cff];
    bands.forEach((c, k) => m.at(0, -0.3, 0).torus(1 - k * 0.12, 0.075, 12, 4, c, Math.PI, 0).reset());
    const cloud = [[0, -1], [0.7, -0.7], [1, 0], [0.7, 0.7], [0, 1]];
    for (const s of [-1, 1]) m.at(s * 0.9, -0.3, 0, { sx: 0.28, sy: 0.2, sz: 0.28 }).lathe(cloud, 6, 0xffffff).reset();
  });
  // Golden snowball: a fat gold sphere with a lighter band and a little crown of sparkles.
  T.golden = mk((m) => {
    const sph = [[0, -1], [0.7, -0.7], [1, 0], [0.7, 0.7], [0, 1]];
    m.lathe(sph, 12, (j, i) => (i % 2 ? 0xffd54a : 0xffbf1f));
    m.at(0, 0, 0, { sx: 1.04, sy: 0.16, sz: 1.04 }).lathe(sph, 12, 0xfff3b0).reset();
    for (let a = 0; a < 5; a++) {
      const an = (a / 5) * TAU;
      m.at(Math.cos(an) * 0.5, 1.05, Math.sin(an) * 0.5, { s: 0.16 }).lathe([[0, -1], [0.5, 0], [0, 1]], 4, 0xffffff).reset();
    }
  });
  const wing = (s) => (m) => {
    const tips = [];
    for (let k = 0; k <= 4; k++) { const a = (12 + k * 15) * Math.PI / 180; tips.push([s * (0.14 + Math.cos(a) * 1.0), 0.02 + Math.sin(a) * 0.9, 0]); }
    for (let k = 0; k < 4; k++) m.tri([s * 0.14, 0, 0], tips[k], tips[k + 1], C(k % 2 ? 0xdff3ff : 0xffffff));
  };
  T.wingR = mk(wing(1));
  T.wingL = mk(wing(-1));
  T.wings = mk((m) => {
    wing(1)(m); wing(-1)(m);
    m.at(0, -0.05, 0, { s: 0.2 }).lathe([[0, -1], [0.7, -0.7], [1, 0], [0.7, 0.7], [0, 1]], 6, 0xffd24a).reset();
  });
  // Bouncy mushroom pad: unit dome, radius 1, height 1.
  T.pad = mk((m) => {
    m.lathe(PAD_PROF, 12, (j, i) => (i % 2 ? 0xe5283b : 0xcf1f33));
    m.at(0, 0, 0).lathe([[1.02, 0.0], [1.02, -0.18], [0.85, -0.3]], 12, 0xfff0d8).reset();
    const spots = [[0.36, 0.2, 0.2], [0.6, 1.5, 0.16], [0.7, 2.7, 0.19], [0.42, 3.8, 0.15], [0.8, 4.7, 0.17], [0.22, 5.5, 0.13], [0.62, 6.0, 0.14]];
    for (const [r, az, sz] of spots) domeSpot(m, PAD_PROF, r, az, sz, 0xffffff, 0.03);
  });
  // Updraft tower, built for a pad radius of TOWER_PR and scaled uniformly.
  T.tower = mk((m) => {
    const pr = TOWER_PR;
    m.at(0, 0, 0).lathe([[pr, -0.5], [pr, 0.35], [pr * 0.8, 0.45], [0.0, 0.45]], 14, (j, i) => (j === 2 ? 0xdff3ff : i % 2 ? 0x59c8ff : 0x2fa8e8)).reset();
    m.at(0, 0.45, 0).lathe([[0.45, 0], [0.3, 7], [0.0, 7.4]], 6, (j) => (j === 1 ? 0xffffff : 0xf0f6ff)).reset();
    for (let a = 0; a < 4; a++) { // kite flags on the pylon
      const ang = (a / 4) * TAU + 0.4;
      m.at(0, 3.2 + a * 1.1 + 0.45, 0, { ry: ang });
      m.tri([0.3, 0, 0], [pr * 0.45, 0.4, 0], [0.3, -1.0, 0], C([0xff4d5e, 0xffc83a, 0x3ddc84, 0xb066ff][a]));
      m.reset();
    }
    for (let a = 0; a < 6; a++) { // chevrons around the pad
      const ang = (a / 6) * TAU;
      m.at(Math.cos(ang) * pr * 0.62, 0.5, -Math.sin(ang) * pr * 0.62, { ry: -ang + Math.PI / 2 });
      m.tri([-0.7, 0, 0], [0.7, 0, 0], [0, 0, -1.4], C(0xffffff));
      m.reset();
    }
  });
  T.ringS = mk((m) => m.torus(1, 0.06, 20, 4, 0xffffff));
  // Translucent glow shapes (alpha baked into vertex colours).
  T.ring = mk((m) => m.torus(1, 0.075, 20, 3, C(0xffffff, 0.9)));
  T.beam = mk((m) => {
    const n = 6, cb = C(0xffffff, 0.6), ct = C(0xffffff, 0);
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * TAU, a1 = ((i + 1) / n) * TAU;
      m.quad([Math.cos(a0), 0, Math.sin(a0)], [Math.cos(a1), 0, Math.sin(a1)], [Math.cos(a1), 1, Math.sin(a1)], [Math.cos(a0), 1, Math.sin(a0)], cb, cb, ct, ct);
    }
  });
  T.ice = mk((m) => m.lathe([[0, -1], [0.9, 0], [0, 1]], 4, C(0xffffff, 0.55)));
  T.sphere = mk((m) => m.lathe([[0, -1], [0.7, -0.7], [1, 0], [0.7, 0.7], [0, 1]], 8, C(0xffffff, 0.22)));
  return T;
}

// ---------------------------------------------------------------------------
// Dynamic mesh: templates are transformed into preallocated buffers every frame.
// Transform order: p = T + Ry * Rx * Rz * S * v
// ---------------------------------------------------------------------------
class DynMesh {
  constructor(maxV, comps, material) {
    this.max = maxV; this.cs = comps; this.n = 0;
    this.pos = new Float32Array(maxV * 3);
    this.col = new Float32Array(maxV * comps);
    const g = new THREE.BufferGeometry();
    this.pa = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.ca = new THREE.BufferAttribute(this.col, comps).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.pa);
    g.setAttribute('color', this.ca);
    g.setDrawRange(0, 0);
    this.geo = g;
    this.mesh = new THREE.Mesh(g, material);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = comps === 4 ? 5 : 0;
  }
  begin() { this.n = 0; }
  emit(tpl, x, y, z, ry, sx, sy, sz, rx, rz, cr, cg, cb, ca) {
    const n = tpl.n;
    if (this.n + n > this.max) return;
    const cy = Math.cos(ry), sy_ = Math.sin(ry), cx = Math.cos(rx), sx_ = Math.sin(rx), cz = Math.cos(rz), sz_ = Math.sin(rz);
    const tp = tpl.pos, tc = tpl.col, pos = this.pos, col = this.col, cs = this.cs;
    let o = this.n * 3, q = this.n * cs;
    for (let i = 0, k = 0, h = 0; i < n; i++, k += 3, h += 4) {
      const px = tp[k] * sx, py = tp[k + 1] * sy, pz = tp[k + 2] * sz;
      const x1 = px * cz - py * sz_, y1 = px * sz_ + py * cz;
      const y2 = y1 * cx - pz * sx_, z2 = y1 * sx_ + pz * cx;
      pos[o] = x1 * cy + z2 * sy_ + x; pos[o + 1] = y2 + y; pos[o + 2] = -x1 * sy_ + z2 * cy + z;
      o += 3;
      col[q] = tc[h] * cr; col[q + 1] = tc[h + 1] * cg; col[q + 2] = tc[h + 2] * cb;
      if (cs === 4) col[q + 3] = tc[h + 3] * ca;
      q += cs;
    }
    this.n += n;
  }
  end() {
    this.geo.setDrawRange(0, this.n);
    const n = this.n;
    this.pa.clearUpdateRanges(); this.pa.addUpdateRange(0, Math.max(1, n) * 3); this.pa.needsUpdate = true;
    this.ca.clearUpdateRanges(); this.ca.addUpdateRange(0, Math.max(1, n) * this.cs); this.ca.needsUpdate = true;
  }
  dispose() { this.geo.dispose(); this.mesh.material.dispose(); }
}

const _fw = new THREE.Vector3(), _rt = new THREE.Vector3(), _u0 = new THREE.Vector3();
const _wup = new THREE.Vector3(0, 1, 0);
// Barrel-roll the camera 360° (angle in radians) around its own view axis, then the caller does lookAt.
// Sets camera.up only; call it right before camera.lookAt(target). angle 0 restores the normal up vector.
export function flipCamera(camera, target, angle) {
  if (Math.abs(angle) < 1e-4) { camera.up.set(0, 1, 0); return; }
  _fw.copy(target).sub(camera.position);
  if (_fw.lengthSq() < 1e-8) return;
  _fw.normalize();
  _rt.crossVectors(_fw, _wup);
  if (_rt.lengthSq() < 1e-8) _rt.set(1, 0, 0);
  _rt.normalize();
  _u0.crossVectors(_rt, _fw); // un-rolled up
  const c = Math.cos(angle), s = Math.sin(angle);
  camera.up.set(_u0.x * c + _rt.x * s, _u0.y * c + _rt.y * s, _u0.z * c + _rt.z * s);
}

const ICON_TILT = { rocket: 0.7, magnet: 0, giant: 0, shield: 0, freeze: 0, rainbow: 0, wings: 0, golden: 0 };

// ===========================================================================
// CigPlus — extras on the slope
// ===========================================================================
export class CigPlus {
  // opts: { seed, lib, ui (buffAdd/buffTick/buffRemove when present), hud (built-in buff chips, only without ui) }
  constructor(scene, world, { seed = 1, lib = null, ui = null, hud = true } = {}) {
    this.scene = scene;
    this.world = world;
    this.lib = lib || world.lib;
    this.ui = ui && typeof ui.buffAdd === 'function' ? ui : null;
    this.hooks = {};
    this.time = 0;
    this.disposed = false;
    this.near = [];
    this.rng = makeRng(((seed ^ 0x5bd1e995) >>> 0) + 17);

    this.T = {};
    for (const k of KEYS) this.T[k] = 0;
    this.mods = { speedMul: 1, accelMul: 1, steerMul: 1, eatMul: 1, gravityMul: 1, magnetR: 0, ghost: false, shield: false, tonMul: 1, flying: false, noMelt: false, plow: false, magnet: false };

    this.pickups = []; this.towers = []; this.mush = []; this.armies = [];
    this.fly = { on: false, t: 0, up: 0 };
    this.flip = { on: false, t: 0, dur: 1, landed: false, roll: 0 };
    this.sizeF = 1;
    this.rollNow = 0;
    this._fov = 0;
    this._cam = null;
    this._hudT = 0;
    this._rbT = 0;
    this._tickT = 0;
    this._tickList = [];
    this._tickObjs = {};
    this.ballR = CFG.startR;
    this.planD = 70;
    this.nextPick = 150; this.nextFeat = 300;
    this.bag = []; this.featBag = [];
    this.nPicked = 0;

    this.TPL = buildTemplates();
    const solidMat = patchMaterial(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide }));
    this.solid = new DynMesh(9000, 3, solidMat);
    this.glow = new DynMesh(9000, 4, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    this.group = new THREE.Group();
    this.group.add(this.solid.mesh, this.glow.mesh);
    scene.add(this.group);

    this._buildHud(hud && !this.ui);
    this._refreshMods(null);
  }

  // ------------------------------------------------------------------ incremental planning
  _expR() { return Math.max(CFG.startR, this.ballR) * 1.15; }

  // earliest start >= a whose [a - pad, a + len + pad] avoids every world feature (ramps, patches, events) and our own
  _fit(a, len, dMax, pad = 6) {
    const w = this.world;
    let guard = 0;
    while (a < dMax && guard++ < 40) {
      if (w.zoneFree(a - pad, a + len + pad)) return a;
      a += 22;
    }
    return -1;
  }

  // Plan pickups / mushrooms / towers / armies in [.., dTo]. Called every frame with a bit less than the world's frontier.
  planTo(dTo) {
    if (this.disposed) return;
    const w = this.world, R = this.rng;
    while (w.specialQueue.length) {
      const s = w.specialQueue.shift();
      const sc = clamp(0.9 + this._expR() * 0.36, 1.1, 5);
      this.pickups.push({ kind: s.kind, x: s.x, d: s.d, s: sc, gy: w.groundY(s.x, s.d), alive: true, ph: R.range(0, TAU) });
    }
    // power-ups: one roughly every 150 m, a bag so kinds don't repeat; harder kinds join as you go
    while (this.nextPick < dTo) {
      const at = this._fit(this.nextPick, 6, dTo, 10);
      if (at < 0) { this.nextPick = dTo; break; }
      const hw = w.halfWidth(at);
      const x = R.range(-1, 1) * Math.max(1, hw - 3) * 0.75;
      const s = clamp(0.85 + this._expR() * 0.33, 1, 4.6);
      this.pickups.push({ kind: this._drawKind(at), x, d: at, s, gy: w.groundY(x, at), alive: true, ph: R.range(0, TAU) });
      w.zones.push({ d0: at - 5, d1: at + 9, kind: 'plus' });
      this.nextPick = at + R.range(120, 170);
    }
    // features: mushroom pads, updraft towers, snowman armies (rotating bag)
    while (this.nextFeat < dTo) {
      if (!this.featBag.length) {
        this.featBag = ['mush', 'tower', 'mush', 'army'];
        for (let i = this.featBag.length - 1; i > 0; i--) { const j = (R.next() * (i + 1)) | 0; [this.featBag[i], this.featBag[j]] = [this.featBag[j], this.featBag[i]]; }
      }
      const kind = this.featBag.pop();
      const len = kind === 'mush' ? 70 : kind === 'tower' ? 30 : 34;
      const at = this._fit(this.nextFeat, len, dTo, 8);
      if (at < 0) { this.featBag.push(kind); this.nextFeat = dTo; break; }
      let used = len;
      if (kind === 'mush') used = this._addMush(at, R.chance(0.5) ? 3 : 2);
      else if (kind === 'tower') this._addTower(at + 8);
      else this._addArmy(at + 12);
      w.zones.push({ d0: at - 8, d1: at + used + 8, kind: 'plus' });
      this.nextFeat = at + used + R.range(130, 230);
    }
    this.planD = dTo;
  }

  _drawKind(d) {
    if (!this.bag.length) {
      const kinds = ['magnet', 'giant', 'shield'];
      if (d > 500) kinds.push('rocket', 'freeze');
      if (d > 1300) kinds.push('rainbow');
      this.bag = kinds.slice();
      for (let i = this.bag.length - 1; i > 0; i--) { const j = (this.rng.next() * (i + 1)) | 0; [this.bag[i], this.bag[j]] = [this.bag[j], this.bag[i]]; }
    }
    return this.bag.pop();
  }

  // Remove props from a rectangular footprint so features never sit on top of scenery.
  _clear(cx, d0, d1, halfW) {
    const w = this.world, out = this.near;
    for (let d = d0 - 2; d <= d1 + 2; d += 6) {
      w.query(cx, d, halfW + 6, out);
      for (let i = 0; i < out.length; i++) {
        const p = out[i];
        if (!p.alive) continue;
        if (Math.abs(p.x - cx) < halfW + p.r * 0.5 && p.d > d0 - 2 - p.r && p.d < d1 + 2 + p.r) w.kill(p);
      }
    }
  }

  _addTower(d) {
    const w = this.world, R = this.rng;
    const expR = this._expR(), hw = w.halfWidth(d);
    const pr = clamp(3.4 + expR * 0.8, 3.4, hw * 0.4);
    const x = R.range(-1, 1) * Math.max(0, hw - pr - 1) * 0.8;
    this.towers.push({ x, d, pr, gy: w.groundY(x, d), cd: 0 });
    this._clear(x, d - pr, d + pr, pr + 0.5);
  }

  _addMush(d0, n = 3) {
    const w = this.world, R = this.rng;
    const spacing = 26;
    const hw = w.halfWidth(d0);
    const expR = this._expR();
    const pr = clamp(2.4 + expR * 1.1, 3, hw * 0.3);
    let x = R.range(-1, 1) * Math.max(0, hw - pr - 1) * 0.6;
    for (let i = 0; i < n; i++) {
      const d = d0 + 6 + i * spacing;
      x = clamp(x + R.range(-4, 4), -(hw - pr - 1), hw - pr - 1);
      const slope = (w.groundY(x, d - 1) - w.groundY(x, d + 1)) / 2;
      this.mush.push({ x, d, pr, capH: pr * 0.55, gy: w.groundY(x, d), cd: 0, sq: 0, tilt: -Math.atan(slope) });
      this._clear(x, d - pr, d + pr, pr + 0.5);
    }
    return 6 + (n - 1) * spacing + pr + 2;
  }

  _addArmy(d) {
    const w = this.world, R = this.rng;
    const baseDef = this.lib.snowman || this.lib.k_snowman;
    if (!baseDef) return;
    const hw = w.halfWidth(d);
    const cx = R.range(-1, 1) * hw * 0.45;
    const n = R.int(5, 9);
    const boss = R.int(0, n - 1);
    const a = { d, cx, n, hw, members: [], woke: false, boss };
    const expR = this._expR();
    // clear the footprint FIRST: world.query also returns movers, so clearing after spawning killed the whole army
    this._clear(cx, d - 8, d + 8, 6);
    for (let i = 0; i < n; i++) {
      const isBoss = i === boss;
      const ratio = isBoss ? 1.6 : R.chance(0.68) ? R.range(0.45, 0.78) : R.range(1.15, 1.6);
      const tR = Math.max(0.45, expR * ratio);
      const s = tR / baseDef.radius;
      const ang = R.range(0, TAU), rad = R.range(0, 1) * (3 + expR * 1.2);
      const x = clamp(cx + Math.cos(ang) * rad, -hw + 1, hw - 1);
      const dd = d + Math.sin(ang) * rad * 1.5 + (isBoss ? 6 : 0);
      const p = w.add(baseDef.name, x, dd, { s, rot: Math.PI, move: MOVE_ARMY });
      if (!p) continue;
      p.cp = true; p.s0 = p.s; p.spd = R.range(5, 8.2); p.ox = x; p.od = dd;
      a.members.push(p);
    }
    this.armies.push(a);
  }

  _armyUpdate(dt, b, active) {
    const w = this.world;
    for (let i = 0; i < this.armies.length; i++) {
      const a = this.armies[i];
      if (!a.woke && active && b.d > a.d - 90) {
        a.woke = true;
        this._call('float', 'KARDAN ADAM ORDUSU!', 'big');
        this._call('sfx', 'rumble');
      }
      for (let j = 0; j < a.members.length; j++) {
        const p = a.members[j];
        if (!p.alive) continue;
        p.s = p.s0 * (1 + 0.07 * Math.sin(this.time * (a.woke ? 14 : 2) + p.phase)); // waddle
        if (!a.woke || p._fz) continue;
        if (b.d > p.d + 10) continue; // left behind
        // Interceptors: they slide sideways into the ball's line, never uphill into it (no shoving).
        const ddA = p.d - b.d;
        if (ddA < 0 || ddA > 60) continue;
        const hw = w.halfWidth(p.d) - 1;
        const step = clamp(b.x - p.x, -p.spd * dt, p.spd * dt);
        p.x = clamp(p.x + step, -hw, hw);
        p.ox = p.x;
        p.rot = Math.atan2(step, 0.0001);
      }
    }
  }

  _prune(b) {
    const cut = b.d - 70;
    const fresh = (a, f) => { let n = 0; for (let i = 0; i < a.length; i++) if (f(a[i])) a[n++] = a[i]; a.length = n; };
    fresh(this.pickups, (p) => p.alive && p.d > cut);
    fresh(this.mush, (m) => m.d > cut);
    fresh(this.towers, (t) => t.d > cut);
    fresh(this.armies, (a) => a.d > cut - 40);
  }

  // ------------------------------------------------------------------ HUD (only when the page has no ui.buff* API)
  _buildHud(on) {
    this.hud = null;
    if (!on || typeof document === 'undefined') return;
    const root = document.createElement('div');
    root.style.cssText = 'position:fixed;left:0;right:0;top:calc(env(safe-area-inset-top,0px) + 166px);display:none;justify-content:center;gap:6px;pointer-events:none;z-index:15;';
    this.chips = {};
    for (const k of KEYS) {
      const P = POWERS[k], hex = '#' + P.color.toString(16).padStart(6, '0');
      const el = document.createElement('div');
      el.style.cssText = `position:relative;width:44px;height:44px;border-radius:13px;background:rgba(10,20,40,.6);border:2px solid ${hex};display:none;align-items:center;justify-content:center;font-size:23px;line-height:1;`;
      el.textContent = P.icon;
      const bar = document.createElement('i');
      bar.style.cssText = `position:absolute;left:5px;right:5px;bottom:3px;height:4px;border-radius:2px;background:${hex};transform-origin:left center;`;
      el.appendChild(bar);
      root.appendChild(el);
      this.chips[k] = { el, bar, shown: false };
    }
    document.body.appendChild(root);
    this.hud = root;
    this.hudShown = false;
  }

  _hudUpdate(dt, active) {
    if (this.hud) {
      if (active !== this.hudShown) { this.hudShown = active; this.hud.style.display = active ? 'flex' : 'none'; }
      this._hudT -= dt;
      if (this._hudT <= 0) {
        this._hudT = 0.1;
        for (let i = 0; i < KEYS.length; i++) {
          const k = KEYS[i], ch = this.chips[k], v = this.T[k];
          const show = active && v > 0;
          if (show !== ch.shown) { ch.shown = show; ch.el.style.display = show ? 'flex' : 'none'; }
          if (show) {
            const f = clamp(v / POWERS[k].dur, 0, 1);
            ch.bar.style.transform = `scaleX(${f.toFixed(2)})`;
            ch.el.style.opacity = v < 1.2 && ((this.time * 6) | 0) % 2 ? '0.45' : '1';
          }
        }
      }
    }
    if (this.ui && active) {
      this._tickT -= dt;
      if (this._tickT <= 0) {
        this._tickT = 0.25;
        const list = this._tickList;
        list.length = 0;
        for (let i = 0; i < KEYS.length; i++) {
          const k = KEYS[i];
          if (this.T[k] > 0) {
            let o = this._tickObjs[k];
            if (!o) o = this._tickObjs[k] = { id: k, left: 0, total: POWERS[k].dur };
            o.left = this.T[k];
            list.push(o);
          }
        }
        if (this.ui.buffTick) this.ui.buffTick(list);
      }
    }
  }

  _buffOn(k) {
    if (this.ui) this.ui.buffAdd(k, POWERS[k].icon, POWERS[k].name, POWERS[k].dur);
  }
  _buffOff(k) {
    if (this.ui && this.ui.buffRemove) this.ui.buffRemove(k);
  }

  // ------------------------------------------------------------------ hooks
  _call(name, a, b, c, d, e, f, g, h) {
    const fn = this.hooks && this.hooks[name];
    if (fn) fn(a, b, c, d, e, f, g, h);
  }
  _burst(x, y, d, n, color, speed, size, up) { this._call('burst', x, y, d, n, color, speed, size, up); }

  // ------------------------------------------------------------------ queries main/game use each substep
  // Height of mushroom domes above the plain ground at (x, d). Add to the ramp height.
  lift(x, d) {
    const ms = this.mush;
    for (let i = 0; i < ms.length; i++) {
      const m = ms[i];
      if (d < m.d - m.pr || d > m.d + m.pr) continue;
      const dx = x - m.x, dd = d - m.d, q = (dx * dx + dd * dd) / (m.pr * m.pr);
      if (q < 1) return m.capH * (1 - q);
    }
    return 0;
  }

  // Edible threshold multiplier for one prop (frozen movers are free to eat).
  eatMulFor(p) { return this.mods.eatMul * (p._fz ? 1.5 : 1); }

  // Call from bump(): returns true (and pops the shield) if the hit should be free.
  consumeShield() {
    if (this.T.shield <= 0) return false;
    this.T.shield = 0;
    this._buffOff('shield');
    this._call('onPowerEnd', 'shield');
    this._call('float', 'KALKAN KIRILDI!', 'big');
    this._call('sfx', 'shield');
    this._call('haptic', 'heavy');
    const b = this._ball;
    if (b) this._burst(b.x, b.y, b.d, 18, 0x44a6ff, 9, 0.28, 6);
    return true;
  }

  modifiers(ball) { this._refreshMods(ball); return this.mods; }

  _refreshMods(b) {
    const m = this.mods, T = this.T;
    m.speedMul = 1; m.accelMul = 1; m.steerMul = 1; m.eatMul = T.giant > 0 ? 1.5 : 1; m.gravityMul = 1; m.magnetR = 0; m.ghost = false; m.tonMul = 1;
    m.noMelt = false; m.plow = T.rocket > 0; m.magnet = T.magnet > 0;
    m.shield = T.shield > 0; m.flying = this.fly.on;
    if (T.rocket > 0) { m.speedMul *= 1 + 0.8 * clamp(T.rocket / 0.6, 0, 1); m.accelMul = 4; }
    if (this.fly.on) { m.gravityMul = this.fly.t < this.fly.up ? -0.4 : 0.3; m.speedMul *= 1.12; m.steerMul *= 1.4; }
    if (T.magnet > 0 && b) m.magnetR = (7 + b.r * 3.2) * clamp(T.magnet / 0.8, 0.3, 1);
    if (T.rainbow > 0) m.tonMul = 3;
    if (b) m.noMelt = T.freeze > 0 || this.lift(b.x, b.d) > 0.15 || this._onKicker(b);
  }

  _onKicker(b) {
    const rs = this.world.ramps;
    for (let i = 0; i < rs.length; i++) {
      const k = rs[i];
      if (b.d > k.d - 1 && b.d < k.d + k.len + 1 && Math.abs(b.x - k.x) < k.w / 2 + 1) return true;
    }
    return false;
  }

  // ------------------------------------------------------------------ per-frame
  reset() {
    for (const k of KEYS) { if (this.T[k] > 0) this._buffOff(k); this.T[k] = 0; }
    this.fly.on = false; this.flip.on = false;
    this._unfreeze();
    this.sizeF = 1;
  }

  update(dt, ball, G) {
    if (this.disposed) return;
    const b = ball;
    this._ball = b;
    this.ballR = b.r;
    this.time += dt;
    const active = G.state === 'play';
    if (active) {
      this._pickups(b);
      this._kickers(dt, b);
      this._towers(dt, b);
      this._flight(dt, b);
      this._mushrooms(dt, b);
      this._timers(dt, b);
      this._freeze(dt, b);
      this._effects(dt, b);
    }
    this._armyUpdate(dt, b, active);
    this._rollUpdate(dt);
    this._draw(dt, b, active);
    this._hudUpdate(dt, active);
    this._refreshMods(b);
    this._pruneT = (this._pruneT || 0) - dt;
    if (this._pruneT <= 0) { this._pruneT = 1; this._prune(b); }
  }

  _gy(x, d) { return this.world.groundY(x, d) + this.world.rampAt(x, d); }

  _pickups(b) {
    const ps = this.pickups;
    for (let i = 0; i < ps.length; i++) {
      const p = ps[i];
      if (!p.alive || Math.abs(p.d - b.d) > b.r + p.s * 1.5 + 3) continue;
      const dx = b.x - p.x, dd = b.d - p.d, py = p.gy + p.s * 1.7;
      const dy = b.y - py;
      const reach = b.r + p.s * 1.5;
      if (dx * dx + dd * dd + dy * dy * 0.5 < reach * reach) {
        p.alive = false;
        this._activate(p.kind, b, p);
      }
    }
  }

  _activate(kind, b, p) {
    const P = PICK_STYLE[kind];
    if (kind === 'golden') {
      this._call('onGolden', p);
      if (p) this._burst(p.x, p.gy + p.s * 1.7, p.d, 26, P.color, 9, 0.26, 7);
      return;
    }
    const wasOn = this.T[kind] > 0;
    this.T[kind] = P.dur;
    if (!wasOn) this._buffOn(kind); else if (this.ui) this.ui.buffAdd(kind, P.icon, P.name, P.dur);
    this._call('onPower', kind);
    this._call('float', `${P.name}!`, 'big');
    this._call('sfx', 'power');
    this._call('haptic', 'success');
    if (p) this._burst(p.x, p.gy + p.s * 1.7, p.d, 20, P.color, 8, 0.24, 6);
    if (kind === 'rocket') b.speed *= 1.25;
    else if (kind === 'wings') this._startFlight(b, 9, 0.7, OPT_WINGS);
    else if (kind === 'freeze') { this._burst(b.x, b.y, b.d, 24, 0xbff4ff, 12, 0.3, 4); this._call('sfx', 'freeze'); }
  }

  // ---- flip kickers (the world places the ramps; flagged ones are the TAKLA kind)
  _kickers(dt, b) {
    const f = this.flip;
    if (f.on) {
      if (b.airborne || !f.landed) {
        if (!b.airborne) { // just landed
          f.landed = true;
          this._call('onFlip');
          this._call('float', 'TAKLA!', 'big');
          this._call('sfx', 'flip');
          this._call('haptic', 'heavy');
          this._burst(b.x, b.y - b.r * 0.5, b.d, 22, 0xff4fd8, 11, 0.3, 7);
        } else f.t += dt;
      }
      if (f.landed) f.t += dt * (f.dur / 0.25); // finish the spin quickly after touchdown
      const p = clamp(f.t / f.dur, 0, 1);
      f.roll = TAU * sm01(p);
      if (f.landed && p >= 1) { f.on = false; f.roll = 0; }
      return;
    }
    if (!b.airborne || b.airTime > 0.3) return;
    const rs = this.world.ramps;
    for (let i = 0; i < rs.length; i++) {
      const k = rs[i];
      if (!k.flip) continue;
      const lip = k.d + k.len;
      if (b.d > lip - 3 && b.d < lip + 9 && Math.abs(b.x - k.x) < k.w / 2 + b.r) {
        const vy = 14 + b.speed * 0.5 + (k.R || 1) * 0.6;
        f.on = true; f.landed = false; f.t = 0; f.dur = (2 * vy) / CFG.gravity; f.roll = 0;
        this._call('onLaunch', vy, OPT_FLIP);
        this._call('sfx', 'whoosh');
        this._call('haptic', 'heavy');
        this._call('float', 'TAKLA ZAMANI!', 'big');
        this._burst(b.x, b.y - b.r * 0.6, b.d, 14, 0xffe03a, 9, 0.25, 6);
        break;
      }
    }
  }

  // ---- updraft towers & flight
  _towers(dt, b) {
    for (let i = 0; i < this.towers.length; i++) {
      const t = this.towers[i];
      t.cd -= dt;
      if (t.cd > 0 || Math.abs(t.d - b.d) > t.pr + b.r) continue;
      const dx = b.x - t.x, dd = b.d - t.d;
      if (dx * dx + dd * dd < (t.pr + b.r * 0.4) * (t.pr + b.r * 0.4) && b.y - this._gy(b.x, b.d) < 25) {
        t.cd = 3;
        if (this.T.wings <= 0) this._buffOn('wings');
        this.T.wings = Math.max(this.T.wings, 5.5);
        this._call('float', 'RÜZGAR!', 'big');
        this._call('sfx', 'power');
        this._call('haptic', 'medium');
        this._burst(t.x, t.gy + 1, t.d, 22, 0xbfeaff, 10, 0.3, 9);
        this._startFlight(b, 10, 1.3, OPT_UPDRAFT);
      }
    }
  }

  _startFlight(b, vy, up, opt) {
    const f = this.fly;
    f.on = true; f.t = 0; f.up = up;
    this._call('onLaunch', vy, opt);
  }

  _endWings() {
    if (this.T.wings > 0) { this.T.wings = 0; this._buffOff('wings'); this._call('onPowerEnd', 'wings'); }
  }

  _flight(dt, b) {
    const f = this.fly;
    if (!f.on) return;
    f.t += dt;
    if (!b.airborne) { if (f.t > 0.15) { f.on = false; this._endWings(); } return; }
    if (this.T.wings <= 0 && f.t > f.up) { f.on = false; return; }
    if (b.vy > 11) b.vy = 11;
    if (f.t > f.up && b.vy < -4) b.vy = -4;
    const cap = this._gy(b.x, b.d) + 10 + 2.2 * b.r;
    if (b.y > cap) { b.y = cap; if (b.vy > 0) b.vy = 0; }
  }

  // ---- bouncy mushrooms
  _mushrooms(dt, b) {
    for (let i = 0; i < this.mush.length; i++) {
      const m = this.mush[i];
      m.cd -= dt;
      m.sq = Math.max(0, m.sq - dt * 3);
      if (m.cd > 0 || Math.abs(m.d - b.d) > m.pr + b.r) continue;
      const dx = b.x - m.x, dd = b.d - m.d, rad = m.pr * 0.8 + b.r * 0.3;
      if (dx * dx + dd * dd > rad * rad) continue;
      const surface = this.world.groundY(b.x, b.d) + this.lift(b.x, b.d);
      if (b.y - b.r * 0.92 > surface + 1.2 || (b.airborne && b.vy > 2)) continue;
      m.cd = 0.6; m.sq = 1;
      const vy = 13 + b.speed * 0.28 + this._expR() * 0.35;
      this._call('onLaunch', vy, OPT_BOUNCE);
      this._call('sfx', 'boing');
      this._call('haptic', 'medium');
      this._call('float', 'ZIP!', '');
      this._burst(m.x, m.gy + m.capH, m.d, 18, 0xffd7ec, 6, 0.22, 7);
      this._burst(m.x, m.gy + m.capH, m.d, 8, 0xff6fa8, 5, 0.2, 6);
    }
  }

  _rollUpdate() {
    this.rollNow = this.flip.on ? this.flip.roll : 0;
  }

  // ---- timers
  _timers(dt, b) {
    const T = this.T;
    for (let i = 0; i < KEYS.length; i++) {
      const k = KEYS[i];
      if (T[k] <= 0) continue;
      T[k] -= dt;
      if (T[k] <= 0) {
        T[k] = 0;
        this._buffOff(k);
        this._call('onPowerEnd', k);
        if (k === 'giant') this._call('float', 'KÜÇÜLÜYOR', '');
      }
    }
  }

  // ---- freeze
  _freeze(dt, b) {
    const mv = this.world.movers;
    if (this.T.freeze > 0) {
      const lo = b.d - 10, hi = b.d + 200;
      for (let i = 0; i < mv.length; i++) {
        const p = mv[i];
        if (!p.alive || p.kind === 'chunk' || p.move === 0 || p.d < lo || p.d > hi) continue;
        if (!p._fz) { p._fz = true; p._vd0 = p.vd; p._vx0 = p.vx; p.vd = 0; p.vx = 0; }
        if (p.move === 1) p.phase -= 0.9 * dt;
        else if (p.move === 2) p.phase -= 0.5 * dt;
      }
    } else if (this._frozenAny) this._unfreeze();
    this._frozenAny = this.T.freeze > 0;
  }
  _unfreeze() {
    const mv = this.world.movers;
    for (let i = 0; i < mv.length; i++) {
      const p = mv[i];
      if (p._fz) { p._fz = false; p.vd = p._vd0; p.vx = p._vx0; }
    }
    this._frozenAny = false;
  }

  // ---- ball trail effects for active powers
  _effects(dt, b) {
    const T = this.T;
    this._rbT -= dt;
    if (this._rbT <= 0) {
      this._rbT = 0.07;
      if (T.rainbow > 0) this._burst(b.x, b.y - b.r * 0.4, b.d - b.r * 0.8, 2, SLIDE_PAL[((this.time * 11) | 0) % SLIDE_PAL.length], 2.5, 0.16 + b.r * 0.04, 1.5);
      if (T.rocket > 0) this._burst(b.x, b.y - b.r * 0.2, b.d - b.r, 2, (this.time * 40) % 2 < 1 ? 0xffa21f : 0xff5a1f, 5, 0.2 + b.r * 0.05, 1);
    }
  }

  // ------------------------------------------------------------------ drawing
  _draw(dt, b, active) {
    const t = this.time, S = this.solid, Gl = this.glow, TP = this.TPL;
    S.begin(); Gl.begin();
    const lo = b.d - 40, hi = b.d + 300;

    for (let i = 0; i < this.pickups.length; i++) {
      const p = this.pickups[i];
      if (!p.alive || p.d < lo || p.d > hi) continue;
      const P = PICK_STYLE[p.kind], col = P.color;
      const cr = ((col >> 16) & 255) / 255, cg = ((col >> 8) & 255) / 255, cb = (col & 255) / 255;
      const bob = Math.sin(t * 2 + p.ph) * 0.18 * p.s, y = p.gy + p.s * 1.7 + bob;
      S.emit(TP[p.kind], p.x, y, -p.d, t * 2.2 + p.ph, p.s, p.s, p.s, 0, ICON_TILT[p.kind], 1, 1, 1, 1);
      const pulse = 1 + 0.12 * Math.sin(t * 4 + p.ph);
      Gl.emit(TP.ring, p.x, y, -p.d, 0, p.s * 1.35 * pulse, p.s * 1.35 * pulse, p.s * 1.35, 0, t, cr, cg, cb, 0.9);
      Gl.emit(TP.ring, p.x, p.gy + 0.2, -p.d, 0, p.s * 1.6, p.s * 1.6, p.s * 1.6, Math.PI / 2, 0, cr, cg, cb, 0.8);
      Gl.emit(TP.beam, p.x, p.gy, -p.d, 0, 0.45 * p.s, 16 * p.s, 0.45 * p.s, 0, 0, cr, cg, cb, 1);
    }

    for (let i = 0; i < this.mush.length; i++) {
      const m = this.mush[i];
      if (m.d < lo || m.d > hi) continue;
      const sq = m.sq; // 0..1 squash amount
      const wob = sq > 0 ? Math.cos(t * 30) * 0.5 + 0.5 : 0;
      S.emit(TP.pad, m.x, m.gy - 0.05, -m.d, 0, m.pr * (1 + 0.1 * sq * wob), m.capH * (1 - 0.35 * sq * wob), m.pr * (1 + 0.1 * sq * wob), m.tilt, 0, 1, 1, 1, 1);
    }

    // flip-kicker hoops: the arc you fly through
    const rs = this.world.ramps;
    for (let i = 0; i < rs.length; i++) {
      const k = rs[i];
      if (!k.flip || k.d > hi || k.d + k.len < lo) continue;
      const R0 = k.R || 1;
      const lipY = this.world.groundY(k.x, k.d + k.len) + k.h;
      const v = Math.min(CFG.maxSpeed, CFG.baseSpeed + CFG.sizeSpeed * Math.sqrt(R0)), vy = 14 + v * 0.5 + R0 * 0.6;
      const hoopR = Math.max(k.w * 0.4, R0 * 1.5 + 2.5);
      for (let h = 0; h < 3; h++) {
        const tau = (4 + h * 7) / v;
        const y = lipY + vy * tau - 0.5 * CFG.gravity * tau * tau;
        const glowK = 0.55 + 0.45 * Math.sin(t * 6 - h * 1.6);
        Gl.emit(TP.ring, k.x, y, -(k.d + k.len + 4 + h * 7), 0, hoopR, hoopR, hoopR, 0, 0, 1, 0.3 + 0.3 * glowK, 0.85, 0.85);
      }
    }

    for (let i = 0; i < this.towers.length; i++) {
      const tw = this.towers[i];
      if (tw.d < lo || tw.d > hi) continue;
      const k = tw.pr / TOWER_PR;
      S.emit(TP.tower, tw.x, tw.gy, -tw.d, 0, k, k, k, 0, 0, 1, 1, 1, 1);
      for (let r = 0; r < 5; r++) {
        const f = ((t * 0.35 + r * 0.2) % 1), y = tw.gy + 0.6 + f * 34, rad = tw.pr * (0.45 + 0.55 * (1 - f * 0.5));
        const a = Math.sin(f * Math.PI);
        Gl.emit(TP.ring, tw.x, y, -tw.d, 0, rad, rad, rad, Math.PI / 2, 0, 0.75, 0.95, 1, 0.9 * a);
      }
      Gl.emit(TP.beam, tw.x, tw.gy, -tw.d, 0, tw.pr * 0.9, 36, tw.pr * 0.9, 0, 0, 0.7, 0.92, 1, 0.5);
    }

    // frozen movers wear an ice shell
    if (this.T.freeze > 0) {
      const mv = this.world.movers;
      let n = 0;
      const fade = clamp(this.T.freeze / 0.8, 0.3, 1);
      for (let i = 0; i < mv.length && n < 36; i++) {
        const p = mv[i];
        if (!p._fz || !p.alive || p.d < lo || p.d > b.d + 120) continue;
        Gl.emit(TP.ice, p.x, p.y + p.h * 0.5, -p.d, p.phase, p.r * 1.15, p.h * 0.62, p.r * 1.15, 0, 0, 0.6, 0.9, 1, fade);
        n++;
      }
    }

    // ball auras
    if (active) {
      const T = this.T, bx = b.x, by = b.y, bz = -b.d;
      if (T.shield > 0) {
        const a = b.r * 1.3, bl = POWERS.shield.color;
        const cr = ((bl >> 16) & 255) / 255, cg = ((bl >> 8) & 255) / 255, cb = (bl & 255) / 255;
        S.emit(TP.ringS, bx, by, bz, 0, a, a, a, Math.PI / 2 + 0.3 * Math.sin(t * 2), 0, cr, cg, cb, 1);
        S.emit(TP.ringS, bx, by, bz, t * 1.3, a, a, a, 0, 0, cr, cg, cb, 1);
        S.emit(TP.ringS, bx, by, bz, t * 1.3 + Math.PI / 2, a, a, a, 0, 0, cr, cg, cb, 1);
        Gl.emit(TP.sphere, bx, by, bz, 0, a, a, a, 0, 0, 0.3, 0.65, 1, 1);
      }
      if (T.magnet > 0 && this.mods.magnetR > 0) {
        const f = (t * 1.3) % 1, R = this.mods.magnetR * (1 - f);
        Gl.emit(TP.ring, bx, this._gy(bx, b.d) + 0.25, bz, 0, R, R, R, Math.PI / 2, 0, 1, 0.3, 0.35, 0.9 * Math.sin(f * Math.PI));
      }
      if (T.freeze > 0) {
        const R = b.r * 2.2;
        Gl.emit(TP.ring, bx, this._gy(bx, b.d) + 0.25, bz, 0, R, R, R, Math.PI / 2, 0, 0.55, 0.9, 1, 0.8);
      }
      if (T.giant > 0) {
        const R = b.r * 1.15 * (b.visK || 1);
        S.emit(TP.ringS, bx, by, bz, t * 0.8, R, R, R, Math.PI / 2, 0, 0.27, 0.88, 0.43, 1);
      }
      if (this.fly.on) {
        const flap = Math.sin(t * 14) * 0.45 + 0.2, sc = b.r * 1.25;
        S.emit(TP.wingR, bx + b.r * 0.95, by + b.r * 0.25, bz, 0, sc, sc, sc, 0, flap, 1, 1, 1, 1);
        S.emit(TP.wingL, bx - b.r * 0.95, by + b.r * 0.25, bz, 0, sc, sc, sc, 0, -flap, 1, 1, 1, 1);
      }
    }
    S.end(); Gl.end();
  }

  // ------------------------------------------------------------------ camera helper
  // Use instead of camera.lookAt(target): applies the flip barrel-roll and a speed FOV kick.
  lookAt(camera, target) {
    this._cam = camera;
    flipCamera(camera, target, this.rollNow);
    camera.lookAt(target);
    const m = this.mods;
    const want = (this.T.rocket > 0 ? 14 : 0) + (m.flying ? 7 : 0);
    this._fov += (want - this._fov) * 0.08;
    if (Math.abs(this._fov) < 0.02 && want === 0) this._fov = 0;
    camera.userData.fovBoost = this._fov;
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    for (const k of KEYS) if (this.T[k] > 0) this._buffOff(k);
    if (this._frozenAny) this._unfreeze();
    if (this.fly.on) this.fly.on = false;
    for (const a of this.armies) for (const p of a.members) p.alive = false;
    this.scene.remove(this.group);
    this.solid.dispose();
    this.glow.dispose();
    if (this.hud && this.hud.parentNode) this.hud.parentNode.removeChild(this.hud);
    this.hud = null;
    if (this._cam) { this._cam.up.set(0, 1, 0); this._cam.userData.fovBoost = 0; }
  }
}

// ===========================================================================
// CigGame — the rules
// ===========================================================================
const _near = [];

export class CigGame {
  // host: optional callbacks (all may be missing):
  //   sfx(name, a, b)  haptic(kind)  burst(x,y,d,n,color,speed,size,up)  puff(x,y,z,vx,vy,vz,size,life,color,alpha)
  //   text(str, atObj, cls)  toast(str)  shake(v)  hitStop(sec)  flash(kind)  kick(zoom, fov)  track(ev, data)
  //   tier(name, tierIdx)  hud(info)  hunger(frac, warn)  combo(n)  tons(t)  end(cause)  stickPos(q) [unused]
  constructor({ world, ball, plus, G, host = {} }) {
    this.world = world; this.ball = ball; this.plus = plus; this.G = G; this.host = host;
    this.auto = false;
    this.bot = { mode: 'greedy', latency: 0.3, noise: 0.5, queue: [], tick: 0, rw: 0 };
    this.hudT = 0;
    this.progT = 0; this.progD = 0;
    this.lastPopT = -9; this.lastPopHapT = -9; this.lastTextT = -9;
    this.melting = 0;
    this.labelsShown = 0; this.labelT = 0; this._hungry = false;
    this.pullBudget = 0;
    this.wave = { on: false, d: 0, v: 0, t: 0, warned: false, mesh: null, calm: 0, n: 0 };
    this.stats = { eats: 0, bumps: 0, gates: 0, gatesBroken: 0, maxCombo: 0, goldens: 0, waves: 0, tierT: [], stalls: 0, chunksEaten: 0 };
    this.world.onArrive = (q) => this._arrive(q);
    this._wireHooks();
  }

  // ---- lifecycle
  reset() {
    const G = this.G, b = this.ball, w = this.world;
    Object.assign(G, {
      state: 'play', targetX: 0, combo: 0, comboT: 0, swallowed: 0, townTons: 0, destroyed: 0,
      bumpCd: 0, recoverT: 0, momentumT: 0, timeScale: 1, hitStop: 0, hitStopCd: 0, shake: 0,
      onRamp: false, lastRamp: 0, tier: 0, peakR: CFG.startR, slowT: 0, t: 0, endT: 0, cause: '', result: null,
      goldenTons: 0, bonusTons: 0, gatesBroken: 0, comboUiT: 0, sprayT: 0, finalized: false, avl: 0,
    });
    b.reset(CFG.startR);
    b.y = w.groundY(0, 0) + b.r * 0.92;
    b.speed = CFG.startSpeed;
    this.progT = 0; this.progD = 0;
    this.wave.on = false; this.wave.warned = false; this.wave.calm = 0; this.wave.n = 0;
    this.stats = { eats: 0, bumps: 0, gates: 0, gatesBroken: 0, maxCombo: 0, goldens: 0, waves: 0, tierT: [], stalls: 0, chunksEaten: 0 };
    this.bot.queue.length = 0; this.bot.tick = 0;
    this.melting = 0;
    this.hudT = 0;
    this.labelsShown = 0; this.labelT = 0; this._hungry = false; this._recNear = false; this._recHit = false;
  }

  snowTons() { return (4 / 3) * Math.PI * this.ball.r ** 3 * CFG.snowDensity; }
  totalTons() { return this.snowTons() + this.G.swallowed + this.G.townTons + this.G.bonusTons; }
  tier() { return tierOf(this.ball.r); }
  dieR() { return Math.max(CFG.minR, CFG.dieK * this.G.peakR); }
  hungerFrac() {
    const lo = this.dieR(), hi = Math.max(this.G.peakR, lo + 0.01);
    return clamp((this.ball.r - lo) / (hi - lo), 0, 1);
  }
  targetSpeed() {
    const M = this.plus.mods;
    return Math.min(CFG.maxSpeed, CFG.baseSpeed + CFG.sizeSpeed * Math.sqrt(this.ball.r)) * M.speedMul;
  }
  suctionR() {
    const b = this.ball, M = this.plus.mods;
    return (b.r * CFG.suctionK + CFG.suctionC) * (M.magnet ? 2 : 1) * (M.eatMul > 1 ? 1.25 : 1);
  }

  _h(name, a, b, c, d, e, f, g, h, i, j) {
    const fn = this.host[name];
    if (fn) fn.call(this.host, a, b, c, d, e, f, g, h, i, j);
  }

  // ---- main per-frame entry (dt already includes time scale); steerM = meters the target moved this frame
  update(dt, steerM = 0) {
    const G = this.G, b = this.ball, w = this.world, M = this.plus.mods;
    G.t += dt;
    G.bumpCd -= dt; G.recoverT -= dt; G.momentumT -= dt;
    G.comboT -= dt;
    w.tintR = b.r; w.tintEat = CFG.eatRatio * M.eatMul;
    this._events();
    this._labelAhead(dt);
    if (G.comboT <= 0 && G.combo) { G.combo = 0; this._comboUi(0); }

    // steering: first-order follower on the finger target (no lag spring)
    const hw = w.halfWidth(b.d);
    const lim = Math.max(0.5, hw - b.r * 0.55);
    if (this.auto) G.targetX = this._botTarget(dt, lim);
    else G.targetX += steerM;
    G.targetX = clamp(G.targetX, -lim, lim);
    const lam = (CFG.steerLam / (1 + b.r * CFG.steerMassK)) * M.steerMul;
    const maxV = 30 + 3 * b.r;
    const want = clamp((G.targetX - b.x) * lam, -maxV, maxV);
    b.vx += (want - b.vx) * (1 - Math.exp(-CFG.steerFilter * Math.max(1, M.steerMul) * dt));

    // speed: heavier = faster
    const target = this.targetSpeed();
    const acc = CFG.accel * M.accelMul * (G.recoverT > 0 ? CFG.recoverBoost : 1);
    b.speed += clamp(target - b.speed, -CFG.decel * dt, acc * dt);

    const steps = Math.max(1, Math.ceil((b.speed * dt) / Math.max(0.3, b.r * 0.45)));
    this.pullBudget = CFG.pullsPerStep * steps;
    for (let i = 0; i < steps; i++) this._step(dt / steps, lim);

    this._melt(dt);
    this._wave(dt, target);
    this._stallGuard(dt);
    this._ambient(dt);
    this._tierCheck();

    this.hudT -= dt;
    if (this.hudT <= 0) { this.hudT = 0.1; this._hud(); }
  }

  // ---- readable cues: events announce themselves, the first too-big things on your line wear a size tag
  _events() {
    const b = this.ball, ev = this.world.events;
    for (let i = 0; i < ev.length; i++) {
      const e = ev[i];
      if (e.seen) continue;
      if (b.d < e.d0 - (e.kind === 'town' ? 70 : 0)) continue;
      e.seen = true;
      let msg = '';
      if (e.kind === 'town') msg = '🏘️ KASABA ÖNÜNDE: hepsini yut!';
      else if (e.kind === 'golden') msg = '🌟 ALTIN KARTOPU ÖNÜNDE!';
      else if (e.kind === 'gate' && e.gate) {
        const g = e.gate, need = fmtD(g.minR * 2);
        msg = b.r >= g.minR * 0.97 ? `⛔ KAPI ÖNÜNDE (${need} m): yıkabilirsin!` : `⛔ KAPI ÖNÜNDE: ${need} m olmalısın, ye ve büyü!`;
      }
      if (!msg) continue;
      this._h('toast', msg);
      this._h('haptic', 'light');
    }
  }

  // "⛔ 6 m" = the ball's diameter you need to swallow it. Tagged BEFORE you reach it (a few per run, fewer once you know the rule).
  _labelAhead(dt) {
    this.labelT -= dt;
    if (this.labelT > 0) return;
    this.labelT = 0.3;
    const budget = this.host.labelBudget ? this.host.labelBudget() : 4;
    if (this.labelsShown >= budget) return;
    const b = this.ball, w = this.world;
    const look = 26 + b.speed * 1.2;
    w.query(b.x, b.d + look * 0.5, look * 0.5, _near);
    let best = null, bestD = 1e9;
    for (let i = 0; i < _near.length; i++) {
      const p = _near[i];
      if (!p.alive || p.tag || p.move !== MOVE_NONE || p.kind === 'chunk' || p.decor || this._edible(p)) continue;
      const dd = p.d - b.d;
      if (dd < 8 || dd > look) continue;
      if (Math.abs(p.x - b.x) > b.r + p.r * CFG.contactK + 4) continue;
      if (dd < bestD) { bestD = dd; best = p; }
    }
    if (best) { this.labelsShown++; w.tagObstacle(best, `⛔ ${fmtD(best.r / CFG.eatRatio * 2)} m`); }
  }

  // ---- one physics substep
  _step(dt, lim) {
    const G = this.G, b = this.ball, w = this.world, M = this.plus.mods;
    const px = b.x, pd = b.d;
    b.x += b.vx * dt;
    b.d += b.speed * dt;
    if (b.x < -lim || b.x > lim) { b.x = clamp(b.x, -lim, lim); b.vx *= -0.2; }

    const ramp = w.rampAt(b.x, b.d);
    const rest = w.groundY(b.x, b.d) + ramp + this.plus.lift(b.x, b.d) + b.r * 0.92;
    if (b.airborne) {
      b.vy -= CFG.gravity * M.gravityMul * dt;
      b.y += b.vy * dt;
      b.airTime += dt;
      if (b.y <= rest && b.vy < 0) this._land(rest);
    } else if (G.onRamp && ramp === 0 && G.lastRamp > 0.8) {
      this._launch();
    } else {
      b.y = rest;
    }
    G.lastRamp = ramp;
    G.onRamp = ramp > 0;
    b.roll(b.x - px, b.d - pd);

    this._gates(pd);
    this._collide();
  }

  _launch() {
    const b = this.ball, G = this.G;
    b.airborne = true; b.airTime = 0;
    b.vy = 5 + b.speed * 0.42;
    G.timeScale = Math.min(G.timeScale, 0.6);
    this._h('sfx', 'whoosh');
    this._h('haptic', 'medium');
    this._text('UÇUŞ!', b, 'big');
  }

  _land(rest) {
    const b = this.ball, G = this.G;
    b.airborne = false; b.y = rest; b.vy = 0;
    G.timeScale = 1;
    const k = clamp(b.airTime / 1.2, 0.2, 1);
    this._h('sfx', 'land', k);
    this._h('haptic', 'heavy');
    G.shake += 0.45 * k + 0.1 * b.r * k;
    b.squash(0.18 + 0.2 * k);
    this._h('burst', b.x, b.y - b.r * 0.8, b.d, 14, 0xffffff, 6 + b.r, 0.25 + b.r * 0.08, 5);
    // belly-flop: everything edible around the landing point is sucked in
    this.world.query(b.x, b.d, b.r * 1.9 + 1, _near);
    for (let i = 0; i < _near.length; i++) {
      const p = _near[i];
      if (!p.alive || !this._edible(p)) continue;
      if (Math.hypot(p.x - b.x, p.d - b.d) < b.r * 1.9) this.world.pull(p, b, CFG.pullMin);
    }
  }

  _edible(p) {
    return p.kind === 'chunk' || p.r <= this.ball.r * CFG.eatRatio * this.plus.eatMulFor(p);
  }

  // ---- collisions: suction first (edible), bumps for the rest
  _collide() {
    const b = this.ball, w = this.world, M = this.plus.mods;
    const Rs = this.suctionR();
    w.query(b.x, b.d, Rs + 1, _near);
    for (let i = 0; i < _near.length; i++) {
      const p = _near[i];
      if (!p.alive) continue;
      const dx = p.x - b.x, dd = p.d - b.d;
      const dist = Math.hypot(dx, dd);
      const above = (b.y - b.r) - (p.y + p.h);       // > 0: the ball's bottom is above the prop's top (flying over it)
      if (this._edible(p)) {
        if (dist - p.r * CFG.contactK > Rs) continue;
        if (b.airborne && above > Rs * 0.5) continue;
        if (this.pullBudget <= 0) continue;
        this._startPull(p, dist, Rs);
        continue;
      }
      if (b.airborne && above > 0) continue;
      const contact = b.r + p.r * CFG.contactK;
      if (dist > contact) continue;
      if (M.ghost) continue;
      if (M.plow) { this._smash(p); continue; }
      this._bump(p, dx, dd, dist, contact);
    }
  }

  _startPull(p, dist, Rs) {
    const b = this.ball;
    const u = clamp((dist - b.r) / Math.max(0.5, Rs - b.r), 0, 1);
    const dur = CFG.pullMin + (CFG.pullMax - CFG.pullMin) * u + 0.05 * Math.min(1, p.r / Math.max(0.2, b.r));
    if (this.world.pull(p, b, Math.min(CFG.pullMax, dur))) this.pullBudget--;
  }

  // The prop reached the ball: it sticks, the ball grows, points and a pop.
  _arrive(q) {
    const G = this.G, b = this.ball, M = this.plus.mods;
    if (G.state !== 'play' && G.state !== 'end') return;
    const chunk = q.kind === 'chunk';
    const gain = CFG.growK * q.r ** 3 * (chunk ? CFG.chunkGain : bandAt(b.r, b.d));
    const rb = b.r;
    b.setRadius(Math.cbrt(b.r ** 3 + gain));
    b.punch(Math.min(0.09, 0.45 * q.r / Math.max(0.2, rb)));
    if (!chunk) {
      _stickPos.set(q.x, q.y, -q.d);
      b.stick(q.def, _stickPos, q.s0, 0.6);
    } else this.stats.chunksEaten++;
    G.combo = G.comboT > 0 ? G.combo + 1 : 1;
    G.comboT = CFG.comboWindow;
    G.swallowed += q.mass * M.tonMul * (q.tonK || 1) * (1 + 0.02 * Math.min(G.combo, 50)); // a long chain is worth up to double
    if (G.combo > this.stats.maxCombo) this.stats.maxCombo = G.combo;
    this.stats.eats++;
    this._comboUi(G.combo);
    const nowT = G.t;
    if (nowT - this.lastPopT > 0.03) {
      this.lastPopT = nowT;
      this._h('sfx', 'pop', clamp(q.r / Math.max(0.3, b.r) * 0.9, 0, 1), G.combo);
      if (q.r > b.r * 0.35) this._h('puff', b.x, b.y + b.r * 0.55, -(b.d - b.r * 0.3), (Math.random() - 0.5) * 2, 1.6, 0, 0.4 + q.r * 0.5, 0.6, 0xf4f8ff, 0.5);
    }
    if (nowT - this.lastPopHapT > 0.09) {
      this.lastPopHapT = nowT;
      this._h('haptic', q.r > b.r * 0.5 ? 'medium' : 'light');
    }
    this._h('burst', q.x, q.y, q.d, 2 + Math.min(4, Math.round(q.r / Math.max(0.3, b.r) * 6)), 0xffffff, 1.5 + Math.min(4, q.r), 0.08 + Math.min(0.2, q.r * 0.06), 3);
    if (!chunk) this._h('track', 'swallow', { type: q.type });
    const label = LABEL[q.type];
    if (label && q.r > b.r * 0.5) this._text(`${label}!`, q, q.r > b.r * 0.75 ? 'big' : '');
    else if (G.combo > 0 && G.combo % 15 === 0) this._text(`x${G.combo}!`, b, 'big');
    this._tierCheck();
  }

  _comboUi(n) {
    const G = this.G;
    if (n === 0 || G.t - G.comboUiT > 0.06 || n % 5 === 0) { G.comboUiT = G.t; this._h('combo', n); }
  }

  // Floating callouts are rare on purpose (max ~1 per second); `imp` ones (power names, gates) may follow after 0.35 s.
  _text(str, at, cls = '', imp = false) {
    if (this.G.t - this.lastTextT < (imp ? 0.35 : 0.9)) return;
    this.lastTextT = this.G.t;
    this._h('text', str, at, cls);
  }

  // Shatter something on the way (rocket / plow). Free.
  _smash(p) {
    const w = this.world, b = this.ball, G = this.G;
    w.kill(p);
    G.destroyed++;
    G.townTons += p.mass * this.plus.mods.tonMul * 0.5;
    this._h('burst', p.x, p.y + p.h * 0.5, p.d, 10, w.colorOf(p.type), 7, 0.25 + p.r * 0.08, 6);
    this._h('puff', p.x, p.y + p.h * 0.4, -p.d, (Math.random() - 0.5) * 4, 2.2, -1.5, 0.9 + p.r * 0.8, 0.9, 0xe9eff7, 0.6);
    this._h('puff', p.x + (Math.random() - 0.5) * p.r, p.y + p.h * 0.15, -p.d, (Math.random() - 0.5) * 3, 1.4, -2.5, 0.7 + p.r * 0.6, 0.8, 0xf4f8ff, 0.5);
    this._h('sfx', 'crash', 0.35);
    this._h('haptic', 'medium');
    G.shake += 0.2;
    this._h('track', 'smash', {});
  }

  // Too big to eat: it costs snow, speed and a combo. The lost snow scatters ahead as chunks you can win back.
  _bump(p, dx, dd, dist, contact) {
    const G = this.G, b = this.ball, w = this.world;
    const nx = dist > 1e-4 ? dx / dist : 0, nd = dist > 1e-4 ? dd / dist : 1;
    const overlap = contact - dist;
    b.x -= nx * overlap;
    b.d -= Math.max(0, nd * overlap);
    // slide off the way you were already going (the side you hit), room-based only for dead-centre hits
    const lim = Math.max(0.5, w.halfWidth(b.d) - b.r * 0.55);
    const off = b.x - p.x;
    let side = Math.abs(off) > 0.15 * contact ? Math.sign(off) : (lim - (p.x + contact) >= (p.x - contact) + lim ? 1 : -1);
    if (Math.abs(p.x + side * (contact + 0.8)) > lim) side = -side;
    if (G.bumpCd > 0) return;
    G.bumpCd = CFG.bumpCd;
    G.targetX = clamp(p.x + side * (contact + 0.8), -lim, lim);
    b.vx += side * (3 + 0.15 * b.speed);
    if (this.plus.consumeShield()) { this._h('sfx', 'bump', 0.3); G.shake += 0.3; return; }
    // a marginal obstacle (a hair over the edible limit, often because you melted) costs little; a huge one costs the most
    const ratio = p.r / Math.max(0.2, b.r);
    const k = clamp((ratio - 0.9) / 3, 0, 1);
    this._loseSnow(lerp(CFG.bumpLoss[0], CFG.bumpLoss[1], k));
    b.speed *= lerp(0.75, CFG.bumpSpeed, clamp((ratio - 0.9) / 1.5, 0, 1));
    G.recoverT = 0.8;
    G.combo = 0; this._comboUi(0);
    this.stats.bumps++;
    this._h('sfx', 'bump', clamp(p.r / (6 + b.r), 0.3, 1));
    this._h('haptic', 'heavy');
    G.shake += 0.5;
    this._h('hitStop', 0.07);
    b.squash(0.22);
    this._h('burst', b.x + nx * b.r, b.y, b.d + nd * b.r, 10, 0xffffff, 6, 0.2 + b.r * 0.08, 5);
    this._text('ÇARPTIN!', b, 'bad');
    // the first few too-big things are tagged "⛔ X m" so the size rule is readable
    if (this.labelsShown < 6 && !p.tag) { this.labelsShown++; w.tagObstacle(p, `⛔ ${fmtD(p.r / CFG.eatRatio * 2)} m`); }
    this._h('track', 'crash', {});
  }

  _loseSnow(frac) {
    const b = this.ball, w = this.world;
    const r0 = b.r;
    const r1 = Math.max(CFG.minR * 0.9, Math.cbrt(r0 ** 3 * (1 - frac)));
    b.setRadius(r1);
    const lostV = r0 ** 3 - r1 ** 3;
    if (lostV <= 1e-4) return;
    const n = 3 + Math.min(4, Math.floor(r1));
    const cr = Math.cbrt((CFG.chunkRecover * lostV) / (n * CFG.growK * CFG.chunkGain));
    for (let i = 0; i < n; i++) w.spawnChunk(b.x + (Math.random() - 0.5) * 2 * (b.r * 3.2 + 3), b.d + b.r + 2 + Math.random() * (10 + 3 * b.r), Math.max(0.12, cr));
    const rd = this.dieR();
    if (b.r < rd) this.end('melt');
  }

  // ---- size gates
  _gates(pd) {
    const b = this.ball, w = this.world;
    const gs = w.gates;
    for (let i = 0; i < gs.length; i++) {
      const g = gs[i];
      if (g.broken || g.hit) continue;
      const front = b.d + b.r * 0.8;
      if (front >= g.d - g.T * 0.5 && b.d < g.d + g.T) this._hitGate(g);
    }
  }

  _hitGate(g) {
    const G = this.G, b = this.ball, w = this.world, M = this.plus.mods;
    g.hit = true;
    this.stats.gates++;
    if (b.r >= g.minR * 0.97 || M.plow) {
      // smash through: slow-mo + bonus
      w.breakGate(g, b.x, 1);
      this.stats.gatesBroken++; G.gatesBroken++;
      const bonus = Math.max(8, 0.4 * this.snowTons());
      G.bonusTons += bonus;
      G.timeScale = Math.min(G.timeScale, 0.38);
      b.speed *= 0.92;
      this._h('hitStop', 0.07);
      G.shake += 0.9;
      this._h('sfx', 'crash', 0.8);
      this._h('sfx', 'milestone', 2);
      this._h('haptic', 'success');
      b.squash(0.14);
      for (let k = 0; k < 6; k++) this._h('burst', b.x + (k - 2.5) * g.hw * 0.25, b.y, g.d, 6, 0xd8ecff, 8, 0.55, 7);
      this._h('flash', 'milestone');
      this._text('KAPI KIRILDI!', b, 'big', true);
      this._h('toast', `+${fmtTonsShort(bonus)} bonus`);
      this._h('track', 'gate', { ok: true });
    } else if (this.plus.consumeShield()) {
      w.breakGate(g, b.x, 0.7);
      this._h('sfx', 'crash', 0.6);
    } else {
      // too small: heavy bump, but the wall still gives way (never a soft-lock)
      w.breakGate(g, b.x, 0.6);
      this._loseSnow(CFG.gateLoss);
      b.speed *= 0.25;
      G.recoverT = 1.2;
      G.combo = 0; this._comboUi(0);
      G.shake += 1.1;
      this._h('hitStop', 0.1);
      this._h('sfx', 'bump', 1);
      this._h('sfx', 'crash', 0.6);
      this._h('haptic', 'heavy');
      b.squash(0.3);
      this._h('burst', b.x, b.y, g.d, 14, 0xd8ecff, 8, 0.5, 6);
      this._text('KAPI ÇOK BÜYÜK!', b, 'bad', true);
      this._h('track', 'gate', { ok: false });
    }
  }

  // ---- hunger: continuous melt
  _melt(dt) {
    const G = this.G, b = this.ball, w = this.world, M = this.plus.mods;
    if (G.state !== 'play') return;
    const T = tierOf(b.r);
    let rate = CFG.melt[Math.min(T, CFG.melt.length - 1)];
    const grace = sm01((G.t - CFG.meltGrace[0]) / (CFG.meltGrace[1] - CFG.meltGrace[0]));
    rate *= grace;
    if (b.airborne || M.noMelt) rate = 0;
    let onPatch = false;
    if (!b.airborne && !M.noMelt && w.inPatch(b.x, b.d)) { rate += CFG.patchMelt; onPatch = true; }
    this.melting = rate;
    if (rate > 0) {
      b.setRadius(Math.cbrt(b.r ** 3 * (1 - rate * dt)));
      if (onPatch) {
        this._meltFx = (this._meltFx || 0) - dt;
        if (this._meltFx <= 0) {
          this._meltFx = 0.12;
          this._h('burst', b.x, b.y - b.r * 0.8, b.d, 3, 0x7a5a3e, 4, 0.15 + b.r * 0.05, 3);
          this._h('haptic', 'light');
          this._text('ERİYOR!', b, 'bad');
        }
      }
    }
    if (b.r > G.peakR) G.peakR = b.r;
    if (b.r < this.dieR()) this.end('melt');
  }

  // ---- avalanche wave: only comes when you stall
  _wave(dt, target) {
    const G = this.G, b = this.ball, W = this.wave;
    if (G.state !== 'play') return;
    const slow = G.t > 6 && b.speed < target * CFG.waveSlow;
    G.slowT = slow ? G.slowT + dt : Math.max(0, G.slowT - dt * 1.5);
    if (!W.on) {
      if (G.slowT > CFG.waveT) {
        W.on = true; W.d = b.d - CFG.waveGap; W.v = 0; W.t = 0; W.calm = 0; W.warnT = 0.8; W.n++;
        this.stats.waves++;
        this._h('toast', '⚠ ÇIĞ GELİYOR!');
        this._h('sfx', 'rumble');
        this._h('haptic', 'warning');
        this._h('flash', 'milestone');
        G.shake += 0.6;
      }
      return;
    }
    W.t += dt;
    const ok = b.speed >= target * 0.85;
    W.calm = ok ? W.calm + dt : Math.max(0, W.calm - dt);
    // the wave runs at about the speed you SHOULD have; once you recover it falls back
    const wv = W.calm > 1.5 ? target * 0.45 : Math.max(target * 0.9, b.speed * 1.02);
    W.v += (wv - W.v) * Math.min(1, dt * 2);
    W.d += W.v * dt;
    const gap = b.d - W.d;
    if (gap > CFG.waveGap * 1.5 && W.calm > 1.5) { W.on = false; return; }
    W.warnT -= dt;
    if (W.warnT <= 0 && gap < 80) {
      W.warnT = 2.6;
      this._h('toast', '⚠ ÇIĞ YAKLAŞIYOR: hızlan, yemeye devam et!');
      if (gap < 35) this._h('flash', 'hit');
    }
    if ((W.t | 0) !== (W._lt | 0) && gap < 40) { W._lt = W.t; G.shake += 0.15; this._h('haptic', 'light'); }
    if (W.d >= b.d - b.r * 0.3) { this.end('wave'); }
  }

  // Safety net: pinned against something for 2 s means break free (never a soft-lock).
  _stallGuard(dt) {
    const G = this.G, b = this.ball, w = this.world;
    this.progT += dt;
    if (this.progT <= 2) return;
    if (b.d - this.progD < 2.5 && !b.airborne && G.state === 'play') {
      this.stats.stalls++;
      w.query(b.x, b.d, b.r * 2 + 8, _near);
      for (let i = 0; i < _near.length; i++) {
        const p = _near[i];
        if (!p.alive || p.kind === 'chunk' || this._edible(p)) continue;
        if (Math.hypot(p.x - b.x, p.d - b.d) < b.r + p.r * CFG.contactK + 1) this._smash(p);
      }
      b.speed = Math.max(b.speed, CFG.baseSpeed * 0.6);
    }
    this.progT = 0;
    this.progD = b.d;
  }

  // powder spray, avalanche wake, melt drips
  _ambient(dt) {
    const G = this.G, b = this.ball;
    if (G.state !== 'play') return;
    if (!b.airborne && b.speed > 3) {
      G.sprayT -= dt;
      if (G.sprayT <= 0) {
        G.sprayT = 0.05;
        const side = Math.random() < 0.5 ? -1 : 1;
        if (b.r < 2) this._h('burst', b.x + side * b.r * 0.7, b.y - b.r * 0.75, b.d - b.r * 0.4, 1, 0xffffff, 1.5 + b.speed * 0.08, 0.05 + b.r * 0.02, 2.5 + b.r * 0.3);
        else this._h('puff', b.x + side * b.r * 0.9, b.y - b.r * 0.6, -(b.d - b.r * 0.6), side * 2, 1.5, b.speed * 0.15, 0.6 + b.r * 0.35, 0.9, 0xf4f8ff, 0.4);
      }
    }
  }

  // ---- size tiers: YENİ BÖLGE!
  _tierCheck() {
    const G = this.G, b = this.ball;
    const t = tierOf(b.r);
    while (G.tier < t && G.tier < CFG.tierNames.length - 1) {
      G.tier++;
      G.avl = G.tier;
      const name = CFG.tierNames[G.tier];
      this.stats.tierT[G.tier] = +G.t.toFixed(1);
      this.world.setTier(G.tier, b.d);
      this._h('tier', name, G.tier);
      this._h('track', 'cig_tier', { tier: G.tier + 1, name });
      this._h('track', 'milestone', { level: G.tier, r: b.r });
      this._h('sfx', 'milestone', G.tier);
      this._h('haptic', 'success');
      this._h('hitStop', 0.08);
      this._h('kick', 0.28, 7);
      this._h('flash', 'milestone');
      G.shake += 0.5 + G.tier * 0.15;
      this._h('burst', b.x, b.y, b.d, 24, 0xffffff, 10 + b.r, 0.3 + b.r * 0.06, 6);
      b.punch(0.12);
    }
  }

  // ---- golden snowball (cigplus pickup)
  _golden() {
    const G = this.G, b = this.ball;
    this.stats.goldens++;
    const bonus = Math.max(CFG.goldenMinTons, CFG.goldenTons * this.totalTons());
    G.bonusTons += bonus;
    b.setRadius(Math.cbrt(b.r ** 3 * (1 + CFG.goldenGrow)));
    b.punch(0.1);
    this._h('sfx', 'milestone', 3);
    this._h('haptic', 'success');
    this._h('burst', b.x, b.y, b.d, 30, 0xffc928, 10 + b.r, 0.3 + b.r * 0.05, 7);
    this._h('flash', 'milestone');
    G.shake += 0.4;
    this._text('ALTIN KARTOPU!', b, 'big', true);
    this._h('toast', `🌟 +${fmtTonsShort(bonus)}`);
    this._tierCheck();
  }

  _wireHooks() {
    const self = this;
    this.plus.hooks = {
      onPower(kind) { self._h('onPower', kind); self._h('track', 'powerup', { kind }); },
      onPowerEnd(kind) { self._h('onPowerEnd', kind); },
      onGolden() { self._golden(); },
      onLaunch(vy, o) {
        const b = self.ball, G = self.G;
        b.airborne = true; b.airTime = 0; b.vy = vy;
        if (o.flip) G.timeScale = Math.min(G.timeScale, 0.6);
        else if (o.updraft) G.timeScale = Math.min(G.timeScale, 0.75);
        self._h('haptic', 'medium');
      },
      onFlip() {
        const b = self.ball, G = self.G;
        b.setRadius(Math.cbrt(b.r ** 3 * 1.06));
        G.bonusTons += self.snowTons() * 0.1;
        G.shake += 0.9;
        self._h('burst', b.x, b.y, b.d, 30, 0xff4fd8, 12 + b.r, 0.35 + b.r * 0.06, 8);
        self._tierCheck();
      },
      float(text, cls) { self._text(text, self.ball, cls, true); },
      haptic(kind) { self._h('haptic', kind); },
      burst(x, y, d, n, color, speed, size, up) { self._h('burst', x, y, d, n, color, speed, size, up); },
      sfx(name) { self._h('plusSfx', name); },
    };
  }

  // ---- HUD pass (10 Hz)
  _hud() {
    const G = this.G, b = this.ball;
    const T = Math.min(tierOf(b.r), CFG.tierNames.length - 1);
    const lo = T === 0 ? CFG.startR : CFG.tierEdges[T - 1];
    const hi = CFG.tierSpan[T];
    const frac = clamp((b.r - lo) / Math.max(0.01, hi - lo), 0, 1);
    const hf = this.hungerFrac();
    const warn = hf < CFG.hungerWarn;
    if (warn && !this._hungry && G.t > 5 && G.state === 'play') {
      this._hungry = true;
      this._text('KAR ERİYOR! YE!', b, 'bad', true);
      this._h('haptic', 'warning');
    } else if (!warn && hf > CFG.hungerWarn * 1.5) this._hungry = false;
    this._h('hunger', hf, warn);
    // chase the record: a soft nudge near it, a proper cheer when it falls
    if (this.bestTons > 0 && G.state === 'play') {
      const t = this.totalTons();
      if (!this._recNear && t > this.bestTons * 0.9) { this._recNear = true; if (t <= this.bestTons) this._h('toast', '🏆 Rekora ramak kaldı!'); }
      if (!this._recHit && t > this.bestTons) {
        this._recHit = true;
        this._h('toast', '🏆 YENİ REKOR!');
        this._h('haptic', 'success');
        this._h('sfx', 'milestone', 3);
        this._h('flash', 'gold');
      }
    }
    // one reused payload (the host reads it synchronously): no per-tick allocation
    const I = this._hudInfo || (this._hudInfo = {});
    I.tons = this.totalTons(); I.dist = b.d; I.tierName = CFG.tierNames[T]; I.frac = frac; I.best = this.bestTons || 0;
    I.size = b.r * 2; I.tier = T + 1; I.speed = b.speed; I.hunger = hf; I.wave = this.wave.on;
    this._h('hud', I);
  }

  // ---- end of run
  end(cause) {
    const G = this.G;
    if (G.state !== 'play') return;
    G.state = 'end';
    G.endT = 0;
    G.cause = cause;
    G.timeScale = 1;
    this.wave.on = cause === 'wave';
    this._h('ended', cause);
  }

  // Result payload (main shows it through ui.showResult).
  result() {
    const G = this.G, b = this.ball;
    const T = Math.min(Math.max(G.tier, tierOf(b.r)), CFG.tierNames.length - 1);
    return {
      cause: G.cause, tons: this.totalTons(), dist: b.d, tier: T + 1, tierName: CFG.tierNames[T],
      time: G.t, eats: this.stats.eats, maxCombo: this.stats.maxCombo, bumps: this.stats.bumps, gates: this.stats.gatesBroken, peakR: G.peakR,
    };
  }

  // ---- end animation (the run is over: roll out, melt away or get buried)
  updateEnd(dt) {
    const G = this.G, b = this.ball, w = this.world;
    G.endT += dt;
    const pd = b.d;
    if (G.cause === 'melt') {
      b.speed = Math.max(0, b.speed - 18 * dt);
      const k = clamp(G.endT / 0.9, 0, 1);
      b.setRadius(Math.max(0.05, Math.cbrt(Math.max(1e-4, b.r ** 3 * (1 - 3 * dt)))));
      if (Math.random() < dt * 40) this._h('burst', b.x, b.y - b.r * 0.6, b.d, 2, 0x9fd6ff, 3, 0.12, 3);
      if (k >= 1) b.speed = 0;
    } else if (G.cause === 'wave') {
      b.speed = Math.max(0, b.speed - 25 * dt);
      this.wave.d += Math.max(this.wave.v, 8) * dt;
    } else {
      b.speed = Math.max(0, b.speed - 14 * dt);
    }
    b.d += b.speed * dt;
    b.y = w.groundY(b.x, b.d) + b.r * 0.92;
    b.roll(0, b.d - pd);
  }

  // ===================================================================== bot (debug AUTO + balance sims)
  // bot.mode: 'greedy' (lane sampling toward food, around obstacles) | 'idle' (never steers) | 'random'.
  // bot.latency delays decisions like a human reaction; bot.noise adds sloppiness (0..1).
  _botTarget(dt, lim) {
    const G = this.G, bot = this.bot;
    if (bot.mode === 'idle') return G.targetX;
    if (bot.mode === 'random') {
      bot.rw -= dt;
      if (bot.rw <= 0) { bot.rw = 0.6 + Math.random() * 1.2; bot.rt = (Math.random() * 2 - 1) * lim; }
      return bot.rt ?? 0;
    }
    bot.tick -= dt;
    if (bot.tick <= 0) {
      bot.tick = 0.1;
      const x = this._botPlan(lim);
      bot.queue.push({ t: G.t + bot.latency, x });
    }
    while (bot.queue.length > 1 && bot.queue[1].t <= G.t) bot.queue.shift();
    if (bot.queue.length && bot.queue[0].t <= G.t) bot.cur = bot.queue[0].x;
    return bot.cur ?? G.targetX;
  }

  _botPlan(lim) {
    const b = this.ball, w = this.world, bot = this.bot;
    const look = 14 + b.speed * 0.9 + b.r * 3;
    const Rs = this.suctionR();
    w.query(b.x, b.d + look * 0.5, Math.max(lim, look * 0.5 + 2), _near);
    const N = 21;
    let bestX = b.x, bestS = -1e9;
    const maxV = 30 + 3 * b.r;
    for (let k = 0; k < N; k++) {
      const x = -lim + (2 * lim * k) / (N - 1);
      let s = 0;
      const move = Math.abs(x - b.x);
      for (let i = 0; i < _near.length; i++) {
        const p = _near[i];
        if (!p.alive) continue;
        const dd = p.d - b.d;
        if (dd < -2 || dd > look) continue;
        const need = (move - 0.5) / Math.max(1, maxV * 0.7);
        const have = Math.max(0, dd) / Math.max(4, b.speed);
        const lat = Math.abs(p.x - x);
        if (this._edible(p)) {
          if (need > have + 0.15) continue;
          const reach = Rs * 0.85 + p.r * 0.4;
          if (lat < reach) s += ((p.r / b.r) ** 2 + 0.1) / (1 + dd * 0.06) * (1 - 0.5 * lat / reach);
        } else {
          const clear = b.r + p.r * CFG.contactK + 0.7 + (1 - bot.noise) * 0.4;
          if (lat < clear && dd < look) s -= 30 * (1 + p.r / b.r) / (1 + Math.max(0, dd) * 0.04);
        }
      }
      // dirt patches melt: stay off them
      for (const pt of w.patches) {
        const dd = pt.d - b.d;
        if (dd > -pt.rd && dd < look && Math.abs(x - pt.x) < pt.rx + b.r) s -= 6;
      }
      s -= move * 0.015;
      if (s > bestS) { bestS = s; bestX = x; }
    }
    // human sloppiness
    if (bot.noise > 0) bestX += (Math.random() - 0.5) * bot.noise * (2 + b.r);
    return bestX;
  }
}

const _stickPos = new THREE.Vector3();

function fmtD(d) {
  if (d >= 10) return String(Math.round(d));
  return (Math.round(d * 10) / 10).toFixed(1).replace('.', ',').replace(/,0$/, '');
}

function fmtTonsShort(t) {
  if (t < 10) return `${t.toFixed(1).replace('.', ',')} ton`;
  if (t < 1000) return `${Math.round(t)} ton`;
  return `${(t / 1000).toFixed(1).replace('.', ',')} bin ton`;
}
