// cigplus.js — extra fun for the ÇIĞ (snowball) mode: power-ups, slides, flip kickers, updrafts,
// bouncy mushrooms, portals, a snowman army and a gravity-flip gate.
//
// Everything is procedural low-poly. Draw calls: 1 static merged mesh (slides, kickers, towers, gates),
// 1 dynamic solid mesh (spinning pickups, mushrooms, ball auras), 1 dynamic translucent mesh (halos, beams,
// portals), 1 InstancedMesh for the snowman army (registered into the World's own render loop).
// Nothing is allocated per frame: dynamic meshes are CPU-transformed into preallocated buffers.
//
// Coordinates follow world.js: downhill distance `d` grows forward, world z = -d.
import * as THREE from 'three';
import { CFG } from './config.js';
import { makeRng } from './rng.js';
import { patchMaterial } from './shaders.js';

const TAU = Math.PI * 2;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const sm01 = (t) => { t = t < 0 ? 0 : t > 1 ? 1 : t; return t * t * (3 - 2 * t); };

const MOVE_SKI = 1, MOVE_WANDER = 2, MOVE_CROSS = 3, MOVE_PULL = 88, MOVE_ARMY = 77; // world.js movement modes + ours

export const POWERS = {
  magnet: { name: 'MIKNATIS', icon: '🧲', color: 0xff4455, dur: 6 },
  giant: { name: 'DEV MANTAR', icon: '🍄', color: 0x45e06f, dur: 6 },
  rocket: { name: 'ROKET', icon: '🚀', color: 0xff9226, dur: 4 },
  shield: { name: 'KALKAN', icon: '🛡️', color: 0x44a6ff, dur: 25 },
  freeze: { name: 'BUZ BOMBASI', icon: '🧊', color: 0x8eeaff, dur: 6 },
  rainbow: { name: 'GÖKKUŞAĞI', icon: '🌈', color: 0xff5fd2, dur: 8 },
  wings: { name: 'KANAT', icon: '🕊️', color: 0xffffff, dur: 5 },
  invert: { name: 'TERS YERÇEKİMİ', icon: '🙃', color: 0xb36bff, dur: 3 },
};
const KEYS = Object.keys(POWERS);
const PICKUP_KINDS = ['magnet', 'giant', 'rocket', 'shield', 'freeze', 'rainbow', 'wings'];

// Launch option objects (preallocated: hooks read them synchronously).
const OPT_FLIP = { flip: true };
const OPT_BOUNCE = { bounce: true };
const OPT_SLIDE = { slide: true };
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
  T.ringS = mk((m) => m.torus(1, 0.06, 20, 4, 0xffffff));
  // Translucent glow shapes (alpha baked into vertex colours).
  T.ring = mk((m) => m.torus(1, 0.075, 20, 3, C(0xffffff, 0.9)));
  T.ringT = mk((m) => m.torus(1, 0.1, 28, 4, C(0xffffff, 0.95)));
  T.arc = mk((m) => m.torus(1, 0.08, 6, 3, C(0xffffff, 0.9), 2.0, 0));
  T.disc = mk((m) => {
    const n = 20, cc = C(0xffffff, 0.55), ce = C(0xffffff, 0.12);
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * TAU, a1 = ((i + 1) / n) * TAU;
      m.tri([0, 0, 0], [Math.cos(a0), Math.sin(a0), 0], [Math.cos(a1), Math.sin(a1), 0], cc, ce, ce);
    }
  });
  T.beam = mk((m) => {
    const n = 6, cb = C(0xffffff, 0.6), ct = C(0xffffff, 0);
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * TAU, a1 = ((i + 1) / n) * TAU;
      m.quad([Math.cos(a0), 0, Math.sin(a0)], [Math.cos(a1), 0, Math.sin(a1)], [Math.cos(a1), 1, Math.sin(a1)], [Math.cos(a0), 1, Math.sin(a0)], cb, cb, ct, ct);
    }
  });
  T.curtain = mk((m) => m.quad([-1, 0, 0], [1, 0, 0], [1, 1, 0], [-1, 1, 0], C(0xffffff, 0.5), C(0xffffff, 0.5), C(0xffffff, 0), C(0xffffff, 0)));
  T.stripe = mk((m) => m.quad([-1, 0, 0], [1, 0, 0], [1, 0.07, 0], [-1, 0.07, 0], C(0xffffff, 0.9)));
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

const ICON_TILT = { rocket: 0.7, magnet: 0, giant: 0, shield: 0, freeze: 0, rainbow: 0, wings: 0 };

export class CigPlus {
  constructor(scene, world, { seed = 1, lib = null, level = null, hud = true } = {}) {
    this.scene = scene;
    this.world = world;
    this.lib = lib || world.lib;
    this.hooks = {};
    this.time = 0;
    this.disposed = false;
    this.near = [];
    const P = world.P || {};
    this.lvl = level ?? clamp(Math.round(((P.L ?? 565) - 520) / 45), 1, 99);
    this.rng = makeRng(((seed ^ 0x5bd1e995) >>> 0) + 17);

    this.T = {};
    for (const k of KEYS) this.T[k] = 0;
    this.mods = { speedMul: 1, accelMul: 1, steerMul: 1, eatMul: 1, gravityMul: 1, magnetR: 0, ghost: false, shield: false, tonMul: 1, sliding: false, flying: false, invert: false };

    this.pickups = []; this.slides = []; this.kickers = []; this.towers = [];
    this.mush = []; this.portals = []; this.gates = []; this.armies = []; this.snow = [];

    this.slideCur = null; this.slideOff = 0; this._lastTarget = 0; this._sparkT = 0;
    this.fly = { on: false, t: 0, up: 0 };
    this.flip = { on: false, t: 0, dur: 1, landed: false, roll: 0 };
    this.invK = 0;
    this.sizeF = 1;
    this.rollNow = 0;
    this._fov = 0;
    this._pd = null;
    this._cam = null;
    this._hudT = 0;
    this._rbT = 0;

    this.TPL = buildTemplates();
    this._plan();
    this._buildStatic();

    const solidMat = patchMaterial(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide }));
    this.solid = new DynMesh(9000, 3, solidMat);
    this.glow = new DynMesh(9000, 4, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    this.group = new THREE.Group();
    this.group.add(this.solid.mesh, this.glow.mesh);
    if (this.staticMesh) this.group.add(this.staticMesh);
    scene.add(this.group);

    this._buildArmy();
    this._buildHud(hud);
    this._refreshMods(null);
  }

  // ------------------------------------------------------------------ planning
  _expR(d) { return this.world.expectedR(d); }

  _plan() {
    const w = this.world, R = this.rng, lvl = this.lvl;
    const L = w.L, lo = 90, hi = L - 40;
    const blocked = [];
    for (const r of w.ramps) blocked.push([r.d - 12, r.d + r.len + 48]);
    for (const p of w.patches) blocked.push([p.d - p.rd - 12, p.d + p.rd + 12]);
    for (const r of w.roads) blocked.push([r.d - 16, r.d + 16]);
    const fit = (d, len, pad = 6) => {
      let a = d;
      for (let it = 0; it < 16; it++) {
        let moved = false;
        for (let i = 0; i < blocked.length; i++) {
          const b = blocked[i];
          if (a - pad < b[1] && a + len + pad > b[0]) { a = b[1] + pad; moved = true; }
        }
        if (!moved) return a + len <= hi ? a : -1;
      }
      return -1;
    };

    const pool = [{ k: 'slide', w: 3, len: 100 }, { k: 'updraft', w: 2, len: 30 }, { k: 'mush', w: 2, len: 78 }];
    if (lvl >= 2) pool.push({ k: 'flip', w: 2.4, len: 56 });
    if (lvl >= 3) pool.push({ k: 'portal', w: 1.6, len: 128 });
    if (lvl >= 4) pool.push({ k: 'army', w: 2, len: 24 });
    if (lvl >= 5) pool.push({ k: 'invert', w: 0.7, len: 12 });
    let invertDone = false, last = '', last2 = '';
    let d = lo + R.range(30, 70);
    let guard = 0;
    while (d < hi - 30 && guard++ < 40) {
      let tot = 0;
      for (const p of pool) tot += p.k === 'invert' && invertDone ? 0 : p.w * (p.k === last || p.k === last2 ? 0.15 : 1);
      let roll = R.next() * tot, pick = pool[0];
      for (const p of pool) {
        const wt = p.k === 'invert' && invertDone ? 0 : p.w * (p.k === last || p.k === last2 ? 0.15 : 1);
        if (roll < wt) { pick = p; break; }
        roll -= wt;
      }
      let at = fit(d, pick.len);
      if (at < 0) { // doesn't fit anywhere: try the shorter features once, else stop
        const small = pool.filter((p) => p.len < 60 && !(p.k === 'invert' && invertDone));
        pick = small[(R.next() * small.length) | 0];
        at = fit(d, pick.len);
        if (at < 0) break;
      }
      let used = pick.len;
      switch (pick.k) {
        case 'slide': used = this._addSlide(at); break;
        case 'updraft': this._addTower(at + 8); break;
        case 'mush': used = this._addMush(at); break;
        case 'flip': used = this._addKicker(at); break;
        case 'portal': used = this._addPortal(at); break;
        case 'army': this._addArmy(at + 12); break;
        case 'invert': this._addGate(at + 4); invertDone = true; break;
        default: break;
      }
      blocked.push([at - 10, at + used + 10]);
      last2 = last; last = pick.k;
      d = at + used + R.range(55, 105);
    }

    // Power-ups: one roughly every 150 m, drawn from a shuffled bag so kinds don't repeat.
    const kinds = ['magnet', 'giant', 'shield', 'rainbow', 'wings'];
    if (lvl >= 2) kinds.push('rocket');
    if (lvl >= 3) kinds.push('freeze');
    let bag = [];
    const draw = () => {
      if (!bag.length) { bag = kinds.slice(); for (let i = bag.length - 1; i > 0; i--) { const j = (R.next() * (i + 1)) | 0; [bag[i], bag[j]] = [bag[j], bag[i]]; } }
      return bag.pop();
    };
    let pd = lo + R.range(25, 55);
    while (pd < hi) {
      const at = fit(pd, 4, 8);
      if (at < 0) break;
      const hw = w.halfWidth(at);
      const x = R.range(-1, 1) * Math.max(1, hw - 3) * 0.75;
      const s = clamp(0.85 + this._expR(at) * 0.33, 1, 3.6);
      this.pickups.push({ kind: draw(), x, d: at, s, gy: w.groundY(x, at), alive: true, ph: R.range(0, TAU) });
      blocked.push([at - 6, at + 10]);
      pd = at + R.range(135, 170);
    }
  }

  // Remove props from a rectangular footprint so features never sit on top of scenery.
  _clear(cxFn, d0, d1, halfW) {
    const w = this.world, out = this.near;
    for (let d = d0 - 2; d <= d1 + 2; d += 6) {
      const x = cxFn(d - d0);
      w.query(x, d, halfW + 6, out);
      for (let i = 0; i < out.length; i++) {
        const p = out[i];
        if (!p.alive || p.kind === 'building') continue;
        if (Math.abs(p.x - cxFn(clamp(p.d - d0, 0, d1 - d0))) < halfW + p.r * 0.5 && p.d > d0 - 2 - p.r && p.d < d1 + 2 + p.r) w.kill(p);
      }
    }
  }

  _addSlide(d0) {
    const w = this.world, R = this.rng;
    const len = R.range(70, 100);
    const mid = d0 + len / 2;
    const hwMin = w.halfWidth(d0);
    let hwC = clamp(this._expR(mid) * 1.6 + 3.4, 4.2, hwMin * 0.5);
    let A = Math.min(8, hwMin * 0.3);
    const room = Math.max(0, hwMin - hwC - 1 - A);
    const x0 = R.range(-1, 1) * room * 0.8;
    A *= R.sign();
    const H = 1.4 + hwC * 0.35;
    const s = { x0, A, hwC, H, d0, d1: d0 + len, len };
    this.slides.push(s);
    this._clear((u) => this._cx(s, u), d0, d0 + len, hwC + 1.5);
    return len;
  }
  _cx(s, u) { return s.x0 + s.A * 1.3 * Math.sin((TAU * u) / s.len) * Math.sin((Math.PI * u) / s.len); }
  _slideEnv(s, u) { return sm01(u / 8) * sm01((s.len - u) / 8); }
  _slideLift(s, x, d) {
    const u = d - s.d0;
    const v = Math.abs(x - this._cx(s, u));
    if (v > s.hwC + 1.5) return 0;
    const env = this._slideEnv(s, u);
    const edge = 0.25 + s.H;
    if (v > s.hwC) return env * edge * (1 - (v - s.hwC) / 1.5); // outer wall face
    const q = v / s.hwC;
    return env * (0.25 + s.H * q * q);
  }

  _addKicker(d0) {
    const w = this.world, R = this.rng;
    const expR = this._expR(d0);
    const hw = w.halfWidth(d0);
    const wd = clamp(expR * 2.2 + 7, 8, hw * 1.2);
    const len = 12 + expR * 1.2;
    const h = 3 + expR * 0.55;
    const x = R.range(-1, 1) * Math.max(0, hw - wd / 2 - 1) * 0.9;
    const k = { x, d: d0, w: wd, len, h, hoopR: Math.max(wd * 0.4, expR * 1.5 + 2.5), expR };
    w.ramps.push({ x, d: d0, w: wd, len, h, plus: true });
    this.kickers.push(k);
    this._clear(() => x, d0, d0 + len, wd / 2 + 0.5);
    return len + 30;
  }

  _addTower(d) {
    const w = this.world, R = this.rng;
    const expR = this._expR(d), hw = w.halfWidth(d);
    const pr = clamp(3.4 + expR * 0.8, 3.4, hw * 0.4);
    const x = R.range(-1, 1) * Math.max(0, hw - pr - 1) * 0.8;
    this.towers.push({ x, d, pr, gy: w.groundY(x, d), cd: 0 });
    this._clear(() => x, d - pr, d + pr, pr + 0.5);
  }

  _addMush(d0) {
    const w = this.world, R = this.rng;
    const n = 3, spacing = 26;
    const hw = w.halfWidth(d0);
    const expR = this._expR(d0 + 30);
    const pr = clamp(2.4 + expR * 1.1, 3, hw * 0.3);
    let x = R.range(-1, 1) * Math.max(0, hw - pr - 1) * 0.6;
    for (let i = 0; i < n; i++) {
      const d = d0 + 6 + i * spacing;
      x = clamp(x + R.range(-4, 4), -(hw - pr - 1), hw - pr - 1);
      const slope = (w.groundY(x, d - 1) - w.groundY(x, d + 1)) / 2;
      this.mush.push({ x, d, pr, capH: pr * 0.55, gy: w.groundY(x, d), cd: 0, sq: 0, tilt: -Math.atan(slope) });
      this._clear(() => x, d - pr, d + pr, pr + 0.5);
    }
    return 6 + (n - 1) * spacing + pr;
  }

  _addPortal(d0) {
    const w = this.world, R = this.rng;
    const dist = R.range(95, 125);
    const dB = d0 + dist;
    const mk = (d) => {
      const hw = w.halfWidth(d);
      const pr = clamp(2.8 + this._expR(d) * 1.0, 4, hw * 0.45);
      const x = R.range(-1, 1) * Math.max(0, hw - pr - 1) * 0.7;
      return { x, d, pr, gy: w.groundY(x, d), flash: 0 };
    };
    const a = mk(d0 + 2), b = mk(dB);
    this._clear(() => a.x, a.d - 1, a.d + 1, a.pr + 0.5);
    this._clear(() => b.x, b.d - 1, b.d + 1, b.pr + 0.5);
    this.portals.push({ a, b });
    return dist + 8;
  }

  _addGate(d) {
    const w = this.world;
    this.gates.push({ d, hw: w.halfWidth(d), gy: w.groundY(0, d), used: false, flash: 0 });
  }

  _addArmy(d) {
    const w = this.world, R = this.rng;
    const hw = w.halfWidth(d);
    const cx = R.range(-1, 1) * hw * 0.45;
    const n = Math.min(10, 5 + (this.lvl >> 1));
    this.armies.push({ d, cx, n, hw, members: [], woke: false, boss: R.int(0, n - 1) });
  }

  // ------------------------------------------------------------------ static geometry
  _buildStatic() {
    const w = this.world, S = new Mesher();
    const P3 = (x, y, d) => [x, y, -d];
    // slides
    for (const s of this.slides) {
      const nU = Math.ceil(s.len / 2), K = 14;
      const X = [], Y = [], Dd = [];
      for (let iu = 0; iu <= nU; iu++) {
        const u = (iu / nU) * s.len, d = s.d0 + u, cx = this._cx(s, u), env = this._slideEnv(s, u);
        for (let k = 0; k <= K; k++) {
          const t = (k / K) * 2 - 1, x = cx + t * s.hwC;
          X.push(x); Dd.push(d); Y.push(w.groundY(x, d) + env * (0.25 + s.H * t * t));
        }
      }
      const ix = (iu, k) => iu * (K + 1) + k;
      for (let iu = 0; iu < nU; iu++) {
        const base = SLIDE_PAL[(iu >> 1) % SLIDE_PAL.length];
        for (let k = 0; k < K; k++) {
          const t = Math.abs((k + 0.5) / K * 2 - 1), shade = 0.82 + 0.18 * (1 - t);
          const c = C(base); const cc = { r: c.r * shade, g: c.g * shade, b: c.b * shade, a: 1 };
          const a = ix(iu, k), b = ix(iu, k + 1), e = ix(iu + 1, k + 1), f = ix(iu + 1, k);
          S.quad(P3(X[a], Y[a], Dd[a]), P3(X[b], Y[b], Dd[b]), P3(X[e], Y[e], Dd[e]), P3(X[f], Y[f], Dd[f]), cc);
        }
        for (const k of [0, K]) { // outer skirts down to the snow
          const a = ix(iu, k), f = ix(iu + 1, k);
          const g0 = w.groundY(X[a], Dd[a]) - 0.4, g1 = w.groundY(X[f], Dd[f]) - 0.4;
          S.quad(P3(X[a], Y[a], Dd[a]), P3(X[a], g0, Dd[a]), P3(X[f], g1, Dd[f]), P3(X[f], Y[f], Dd[f]), C(iu % 2 ? 0xf3f6ff : base));
        }
      }
      // mouth arch
      const x0 = this._cx(s, 0), gy = w.groundY(x0, s.d0), top = s.H + 5;
      for (const sd of [-1, 1]) {
        S.at(x0 + sd * (s.hwC + 0.5), gy + top / 2, -s.d0).box(0.9, top, 0.9, sd < 0 ? 0xff4d5e : 0x3fa7ff).reset();
      }
      S.at(x0, gy + top, -s.d0).box(s.hwC * 2 + 2.2, 0.9, 1.0, 0xffc83a).reset();
      S.at(x0, gy + top + 0.9, -s.d0).box(s.hwC * 1.2, 0.8, 0.8, 0xffffff).reset();
    }
    // flip kickers
    for (const r of this.kickers) {
      const n = 9, xl = r.x - r.w / 2, xr = r.x + r.w / 2;
      const surf = (x, u) => w.groundY(x, r.d + u) + r.h * Math.pow(u / r.len, 1.4);
      for (let i = 0; i < n; i++) {
        const u0 = (i / n) * r.len, u1 = ((i + 1) / n) * r.len;
        const c = C(i >= n - 1 ? 0xffe03a : i % 2 ? 0xff4fd8 : 0x3fe0ff);
        S.quad(P3(xl, surf(xl, u0), r.d + u0), P3(xr, surf(xr, u0), r.d + u0), P3(xr, surf(xr, u1), r.d + u1), P3(xl, surf(xl, u1), r.d + u1), c);
        for (const x of [xl, xr]) {
          const g0 = w.groundY(x, r.d + u0) - 0.3, g1 = w.groundY(x, r.d + u1) - 0.3;
          S.quad(P3(x, g0, r.d + u0), P3(x, surf(x, u0), r.d + u0), P3(x, surf(x, u1), r.d + u1), P3(x, g1, r.d + u1), C(0x6a3df0));
        }
      }
      const u = r.len;
      S.quad(P3(xl, w.groundY(xl, r.d + u) - 0.3, r.d + u), P3(xl, surf(xl, u), r.d + u), P3(xr, surf(xr, u), r.d + u), P3(xr, w.groundY(xr, r.d + u) - 0.3, r.d + u), C(0xff4fd8));
      // curled side fins: little quarter-pipe arcs flaring up from each lip corner
      for (const sd of [-1, 1]) {
        const x = sd < 0 ? xl : xr;
        const base = surf(x, u), cr = r.h * 0.5;
        let prev = null;
        for (let k = 0; k <= 8; k++) {
          const a = (k / 8) * Math.PI * 0.85;
          const dd = r.d + u + Math.sin(a) * cr * 0.8, yy = base + (1 - Math.cos(a)) * cr;
          if (prev) S.quad(P3(x - 0.18, prev[1], prev[0]), P3(x + 0.18, prev[1], prev[0]), P3(x + 0.18, yy, dd), P3(x - 0.18, yy, dd), C(k % 2 ? 0xffe03a : 0xff4fd8));
          prev = [dd, yy];
        }
      }
    }
    // updraft towers
    for (const t of this.towers) {
      const g = t.gy;
      S.at(t.x, g, -t.d).lathe([[t.pr, -0.5], [t.pr, 0.35], [t.pr * 0.8, 0.45], [0.0, 0.45]], 14, (j, i) => (j === 2 ? 0xdff3ff : i % 2 ? 0x59c8ff : 0x2fa8e8)).reset();
      S.at(t.x, g + 0.45, -t.d).lathe([[0.45, 0], [0.3, 7], [0.0, 7.4]], 6, (j) => (j === 1 ? 0xffffff : 0xf0f6ff)).reset();
      for (let a = 0; a < 4; a++) { // kite flags on the pylon
        const ang = (a / 4) * TAU + 0.4;
        S.at(t.x, g + 3.2 + a * 1.1, -t.d, { ry: ang });
        S.tri([0.3, 0, 0], [t.pr * 0.45, 0.4, 0], [0.3, -1.0, 0], C([0xff4d5e, 0xffc83a, 0x3ddc84, 0xb066ff][a]));
        S.reset();
      }
      for (let a = 0; a < 6; a++) { // chevrons around the pad
        const ang = (a / 6) * TAU;
        S.at(t.x + Math.cos(ang) * t.pr * 0.62, g + 0.5, -(t.d + Math.sin(ang) * t.pr * 0.62), { ry: -ang + Math.PI / 2 });
        S.tri([-0.7, 0, 0], [0.7, 0, 0], [0, 0, -1.4], C(0xffffff));
        S.reset();
      }
    }
    // invert gates: purple pylons across the whole track
    for (const gt of this.gates) {
      for (const sd of [-1, 1]) {
        S.at(sd * (gt.hw + 1.2), gt.gy + 5, -gt.d).box(1.6, 10, 1.6, 0x3a2670).reset();
        S.at(sd * (gt.hw + 1.2), gt.gy + 10.4, -gt.d).box(2.2, 1.2, 2.2, 0xb36bff).reset();
      }
      S.at(0, gt.gy + 10.5, -gt.d).box(gt.hw * 2 + 2.6, 1.0, 1.2, 0x7a3ff0).reset();
    }
    if (!S.p.length) { this.staticMesh = null; return; }
    const n = S.p.length / 3;
    const col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = S.c[i * 4]; col[i * 3 + 1] = S.c[i * 4 + 1]; col[i * 3 + 2] = S.c[i * 4 + 2]; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(S.p, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.computeVertexNormals();
    this.staticMesh = new THREE.Mesh(g, patchMaterial(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide }), { snow: true }));
    this.staticMesh.frustumCulled = false;
  }

  // ------------------------------------------------------------------ snowman army (real world movers)
  _buildArmy() {
    const baseDef = this.lib.snowman || this.lib.k_snowman;
    this.armyType = 'cp_snowman';
    if (!this.armies.length || !baseDef) { this.armies.length = 0; return; }
    const w = this.world, R = this.rng;
    let total = 0;
    for (const a of this.armies) total += a.n;
    this.armyDef = { ...baseDef, name: this.armyType };
    const mesh = new THREE.InstancedMesh(baseDef.geometry, w.mat, total);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.frustumCulled = false;
    mesh.count = 0;
    this.armyMesh = mesh;
    w.meshes[this.armyType] = mesh;
    w.group.add(mesh);
    w.avgColor[this.armyType] = w.avgColor.snowman || new THREE.Color(0xf4f8ff);
    for (const a of this.armies) {
      for (let i = 0; i < a.n; i++) {
        const expR = this._expR(a.d);
        const boss = i === a.boss;
        const ratio = boss ? 1.85 : R.chance(0.68) ? R.range(0.45, 0.78) : R.range(1.15, 1.6);
        const tR = Math.max(0.45, expR * ratio);
        const s = tR / baseDef.radius;
        const ang = R.range(0, TAU), rad = R.range(0, 1) * (3 + expR * 1.2);
        const x = clamp(a.cx + Math.cos(ang) * rad, -a.hw + 1, a.hw - 1);
        const d = a.d + Math.sin(ang) * rad * 1.5 + (boss ? 6 : 0);
        const p = {
          type: this.armyType, def: this.armyDef, x, d, y: 0, rot: Math.PI, s, r: baseDef.radius * s, h: baseDef.height * s,
          tier: baseDef.tier ?? 1, kind: baseDef.kind || 'prop', mass: 0.3 * s * s * s, alive: true, decor: false,
          move: MOVE_ARMY, m: null, ox: x, od: d, vx: 0, vd: 0, phase: R.range(0, TAU), s0: s, spd: R.range(5, 8.2),
        };
        w.movers.push(p);
        a.members.push(p);
        this.snow.push(p);
      }
    }
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
        let dx = b.x - p.x, dd = b.d - p.d;
        const dist = Math.hypot(dx, dd) || 1;
        dx /= dist; dd /= dist;
        const hw = w.halfWidth(p.d) - 1;
        p.x = clamp(p.x + dx * p.spd * dt, -hw, hw);
        p.d += dd * p.spd * dt;
        p.ox = p.x; p.od = p.d;
        p.rot = Math.atan2(dx, -dd);
      }
    }
  }

  // ------------------------------------------------------------------ HUD
  _buildHud(on) {
    this.hud = null;
    if (!on || typeof document === 'undefined') return;
    const root = document.createElement('div');
    root.style.cssText = 'position:fixed;left:0;right:0;top:calc(env(safe-area-inset-top,0px) + 112px);display:none;justify-content:center;gap:6px;pointer-events:none;z-index:15;';
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
    if (!this.hud) return;
    if (active !== this.hudShown) { this.hudShown = active; this.hud.style.display = active ? 'flex' : 'none'; }
    this._hudT -= dt;
    if (this._hudT > 0) return;
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

  // ------------------------------------------------------------------ hooks
  _call(name, a, b, c, d, e, f, g, h) {
    const fn = this.hooks && this.hooks[name];
    if (fn) fn(a, b, c, d, e, f, g, h);
  }
  _burst(x, y, d, n, color, speed, size, up) { this._call('burst', x, y, d, n, color, speed, size, up); }

  // ------------------------------------------------------------------ queries main uses each substep
  // Height of slide floors / mushroom domes above the plain ground at (x, d). Add to the ramp height.
  lift(x, d) {
    const sl = this.slides;
    for (let i = 0; i < sl.length; i++) {
      const s = sl[i];
      if (d > s.d0 && d < s.d1) return this._slideLift(s, x, d);
    }
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

  // Call from bump()/smash(): returns true (and pops the shield) if the hit should be free.
  consumeShield() {
    if (this.T.shield <= 0) return false;
    this.T.shield = 0;
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
    m.speedMul = 1; m.accelMul = 1; m.steerMul = 1; m.eatMul = 1; m.gravityMul = 1; m.magnetR = 0; m.ghost = false; m.tonMul = 1;
    m.shield = T.shield > 0; m.sliding = !!this.slideCur; m.flying = this.fly.on; m.invert = T.invert > 0;
    if (T.rocket > 0) { m.speedMul *= 1 + 0.8 * clamp(T.rocket / 0.6, 0, 1); m.accelMul = 4; m.ghost = true; }
    if (this.slideCur) { m.speedMul *= 1.6; m.accelMul = Math.max(m.accelMul, 3); m.steerMul *= 2.4; m.ghost = true; }
    if (this.fly.on) { m.gravityMul = this.fly.t < this.fly.up ? -0.4 : 0.3; m.speedMul *= 1.12; m.steerMul *= 1.4; }
    if (T.magnet > 0 && b) m.magnetR = (7 + b.r * 3.2) * clamp(T.magnet / 0.8, 0.3, 1);
    if (T.rainbow > 0) m.tonMul = 3;
  }

  // ------------------------------------------------------------------ per-frame
  reset() {
    for (const k of KEYS) this.T[k] = 0;
    this.slideCur = null; this.fly.on = false; this.flip.on = false;
    this._unfreeze();
    this.sizeF = 1;
  }

  update(dt, ball, G, input) {
    if (this.disposed) return;
    const b = ball;
    this._ball = b;
    this.time += dt;
    const active = G.state === 'play';
    if (this._pd === null) this._pd = b.d;
    if (active) {
      this._pickups(b);
      this._slideUpdate(dt, b, G);
      this._kickers(dt, b);
      this._towers(dt, b);
      this._flight(dt, b);
      this._mushrooms(dt, b);
      this._portals(dt, b, G);
      this._gatesUpdate(dt, b);
      this._timers(dt, b);
      this._magnet(dt, b);
      this._freeze(dt, b);
      this._effects(dt, b);
    }
    this._armyUpdate(dt, b, active);
    this._invertRoll(dt);
    this._draw(dt, b, active);
    this._hudUpdate(dt, active);
    this._refreshMods(b);
    this._pd = b.d;
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
    const P = POWERS[kind];
    this.T[kind] = P.dur;
    this._call('onPower', kind);
    this._call('float', `${P.name}!`, 'big');
    this._call('sfx', 'power');
    this._call('haptic', 'success');
    if (p) this._burst(p.x, p.gy + p.s * 1.7, p.d, 20, P.color, 8, 0.24, 6);
    if (kind === 'rocket') b.speed *= 1.25;
    else if (kind === 'wings') this._startFlight(b, 9, 0.7, OPT_WINGS);
    else if (kind === 'freeze') { this._burst(b.x, b.y, b.d, 24, 0xbff4ff, 12, 0.3, 4); this._call('sfx', 'freeze'); }
  }

  // ---- slides
  _slideUpdate(dt, b, G) {
    let s = this.slideCur;
    if (!s) {
      for (let i = 0; i < this.slides.length; i++) {
        const q = this.slides[i];
        if (b.d < q.d0 || b.d > q.d1 - 16) continue;
        const cx = this._cx(q, b.d - q.d0);
        if (Math.abs(b.x - cx) < q.hwC * 0.92 && (!b.airborne || b.y - b.r * 0.92 - this._gy(b.x, b.d) < 1.5)) {
          this.slideCur = s = q;
          this.slideOff = clamp(b.x - cx, -q.hwC, q.hwC);
          G.targetX = cx + this.slideOff;
          this._lastTarget = G.targetX;
          this._call('onSlide', true);
          this._call('float', 'KAYDIRAK!', 'big');
          this._call('sfx', 'slide');
          this._call('haptic', 'medium');
          break;
        }
      }
      return;
    }
    if (b.d >= s.d1 || b.d < s.d0 - 1) {
      this.slideCur = null;
      this._call('onSlide', false);
      this._call('onLaunch', 6 + b.speed * 0.28, OPT_SLIDE);
      this._call('sfx', 'whoosh');
      return;
    }
    const u = b.d - s.d0, cx = this._cx(s, u);
    const swing = Math.max(0.3, s.hwC - b.r * 0.55 - 0.3);
    this.slideOff = clamp(this.slideOff + (G.targetX - this._lastTarget) * 0.8, -swing, swing);
    G.targetX = cx + this.slideOff;
    this._lastTarget = G.targetX;
    const lo = cx - swing, hi = cx + swing;
    if (b.x < lo) { b.x = lo; b.vx *= 0.3; } else if (b.x > hi) { b.x = hi; b.vx *= 0.3; }
    this._sparkT -= dt;
    if (this._sparkT <= 0) {
      this._sparkT = 0.06;
      this._burst(b.x, b.y - b.r * 0.6, b.d - b.r * 0.3, 1, SLIDE_PAL[((this.time * 9) | 0) % SLIDE_PAL.length], 4, 0.14, 1.5);
    }
  }

  // ---- flip kickers
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
    for (let i = 0; i < this.kickers.length; i++) {
      const k = this.kickers[i], lip = k.d + k.len;
      if (b.d > lip - 3 && b.d < lip + 9 && Math.abs(b.x - k.x) < k.w / 2 + b.r) {
        const vy = 14 + b.speed * 0.5 + k.expR * 0.6;
        f.on = true; f.landed = false; f.t = 0; f.dur = (2 * vy) / CFG.gravity; f.roll = 0;
        this._call('onLaunch', vy, OPT_FLIP);
        this._call('sfx', 'whoosh');
        this._call('haptic', 'heavy');
        this._call('float', 'TERS DÖNÜŞ!', 'big');
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

  _flight(dt, b) {
    const f = this.fly;
    if (!f.on) return;
    f.t += dt;
    if (!b.airborne) { if (f.t > 0.15) { f.on = false; this.T.wings = 0; } return; }
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
      const vy = 13 + b.speed * 0.28 + this._expR(m.d) * 0.35;
      this._call('onLaunch', vy, OPT_BOUNCE);
      this._call('sfx', 'boing');
      this._call('haptic', 'medium');
      this._call('float', 'ZIP!', '');
      this._burst(m.x, m.gy + m.capH, m.d, 18, 0xffd7ec, 6, 0.22, 7);
      this._burst(m.x, m.gy + m.capH, m.d, 8, 0xff6fa8, 5, 0.2, 6);
    }
  }

  // ---- portals
  _portals(dt, b, G) {
    for (let i = 0; i < this.portals.length; i++) {
      const pp = this.portals[i], a = pp.a, c = pp.b;
      a.flash = Math.max(0, a.flash - dt * 2); c.flash = Math.max(0, c.flash - dt * 2);
      if (!(this._pd <= a.d && b.d >= a.d)) continue;
      if (Math.abs(b.x - a.x) > a.pr * 0.9 + b.r * 0.2 || b.y > a.gy + a.pr * 2.1) continue;
      const w = this.world, ox = b.x, od = b.d, oy = b.y;
      const nd = c.d + (b.d - a.d);
      const off = clamp(b.x - a.x, -c.pr * 0.7, c.pr * 0.7);
      const lim = Math.max(0.5, w.halfWidth(nd) - b.r * 0.55);
      const nx = clamp(c.x + off, -lim, lim);
      const dy = this._gy(nx, nd) - this._gy(ox, od);
      b.x = nx; b.d = nd; b.y += dy;
      G.targetX = clamp(G.targetX + (nx - ox), -lim, lim);
      this._lastTarget = G.targetX;
      a.flash = c.flash = 1;
      this._pd = b.d; // don't trigger anything on the jump itself
      this._call('onTeleport', nx - ox, nd - od, dy);
      this._call('float', 'IŞINLANMA!', 'big');
      this._call('sfx', 'portal');
      this._call('haptic', 'heavy');
      this._burst(nx, b.y, nd, 24, 0xffffff, 10, 0.28, 5);
      return;
    }
  }

  // ---- gravity flip gate
  _gatesUpdate(dt, b) {
    for (let i = 0; i < this.gates.length; i++) {
      const g = this.gates[i];
      g.flash = Math.max(0, g.flash - dt);
      if (g.used || !(this._pd <= g.d && b.d >= g.d)) continue;
      g.used = true; g.flash = 1;
      this.T.invert = POWERS.invert.dur;
      this._call('onPower', 'invert');
      this._call('float', 'TERS YERÇEKİMİ!', 'big');
      this._call('sfx', 'power');
      this._call('haptic', 'heavy');
    }
  }

  _invertRoll(dt) {
    const want = this.T.invert > 0 ? 1 : 0;
    this.invK += (want - this.invK) * Math.min(1, dt * 5);
    if (Math.abs(want - this.invK) < 0.002) this.invK = want;
    this.rollNow = (this.flip.on ? this.flip.roll : 0) + this.invK * Math.PI;
  }

  // ---- timers, giant growth
  _timers(dt, b) {
    const T = this.T;
    for (let i = 0; i < KEYS.length; i++) {
      const k = KEYS[i];
      if (T[k] <= 0) continue;
      T[k] -= dt;
      if (T[k] <= 0) {
        T[k] = 0;
        this._call('onPowerEnd', k);
        if (k === 'giant') this._call('float', 'KÜÇÜLÜYOR', '');
      }
    }
    if (b.d > this.world.L + 10 && T.giant > 0) { T.giant = 0; this._call('onPowerEnd', 'giant'); }
    // Smooth radius change for the giant power (ball.r stays the single truth for physics).
    const target = T.giant > 0 ? 1.6 : 1;
    const prev = this.sizeF;
    this.sizeF += (target - prev) * Math.min(1, dt * 5);
    if (Math.abs(target - this.sizeF) < 0.003) this.sizeF = target;
    if (this.sizeF !== prev) b.setRadius(Math.max(CFG.minR, b.r * (this.sizeF / prev)));
  }

  // ---- magnet
  _magnet(dt, b) {
    this._refreshMods(b);
    const R = this.mods.magnetR;
    if (R <= 0) return;
    const w = this.world, out = this.near;
    w.query(b.x, b.d, R, out);
    let n = 0;
    for (let i = 0; i < out.length && n < 48; i++) {
      let p = out[i];
      if (!p.alive || p.kind === 'building' || p.decor) continue;
      if (p.kind !== 'chunk' && p.r > b.r * CFG.eatRatio) continue;
      const dx0 = b.x - p.x, dd0 = b.d - p.d;
      const dist = Math.hypot(dx0, dd0);
      if (dist > R || dist < b.r * 0.8) continue;
      if (p.move === 0 && p.m) { // static -> mover clone so it can travel (statics are baked and sorted)
        const q = Object.assign({}, p);
        q.alive = true; q.move = MOVE_PULL; q.m = null; q.ox = p.x; q.od = p.d;
        p.alive = false;
        w.movers.push(q);
        p = q;
      }
      const sp = (8 + 16 * (1 - dist / R)) * dt, st = Math.min(dist - b.r * 0.5, sp);
      if (st <= 0) continue;
      const mx = (dx0 / dist) * st, md = (dd0 / dist) * st;
      p.x += mx; p.d += md; p.ox += mx; p.od += md;
      n++;
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
        if (p.move === MOVE_SKI) p.phase -= 0.9 * dt;
        else if (p.move === MOVE_WANDER) p.phase -= 0.5 * dt;
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
      const P = POWERS[p.kind], col = P.color;
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

    for (let i = 0; i < this.kickers.length; i++) {
      const k = this.kickers[i];
      if (k.d > hi || k.d + k.len < lo) continue;
      const lipY = this.world.groundY(k.x, k.d + k.len) + k.h;
      const vy = 14 + 16 * 0.5 + k.expR * 0.6, v = 12 + 3.4 * Math.sqrt(k.expR);
      for (let h = 0; h < 3; h++) {
        const tau = (4 + h * 7) / v;
        const y = lipY + vy * tau - 0.5 * CFG.gravity * tau * tau;
        const glowK = 0.55 + 0.45 * Math.sin(t * 6 - h * 1.6);
        Gl.emit(TP.ring, k.x, y, -(k.d + k.len + 4 + h * 7), 0, k.hoopR, k.hoopR, k.hoopR, 0, 0, 1, 0.3 + 0.3 * glowK, 0.85, 0.85);
      }
    }

    for (let i = 0; i < this.towers.length; i++) {
      const tw = this.towers[i];
      if (tw.d < lo || tw.d > hi) continue;
      for (let r = 0; r < 5; r++) {
        const f = ((t * 0.35 + r * 0.2) % 1), y = tw.gy + 0.6 + f * 34, rad = tw.pr * (0.45 + 0.55 * (1 - f * 0.5));
        const a = Math.sin(f * Math.PI);
        Gl.emit(TP.ring, tw.x, y, -tw.d, 0, rad, rad, rad, Math.PI / 2, 0, 0.75, 0.95, 1, 0.9 * a);
      }
      Gl.emit(TP.beam, tw.x, tw.gy, -tw.d, 0, tw.pr * 0.9, 36, tw.pr * 0.9, 0, 0, 0.7, 0.92, 1, 0.5);
    }

    for (let i = 0; i < this.portals.length; i++) {
      const pp = this.portals[i];
      for (let e = 0; e < 2; e++) {
        const o = e ? pp.b : pp.a;
        if (o.d < lo || o.d > hi) continue;
        const cr = e ? 1 : 0.3, cg = e ? 0.55 : 0.75, cb = e ? 0.15 : 1, cy = o.gy + o.pr * 0.95, fl = o.flash;
        Gl.emit(TP.ringT, o.x, cy, -o.d, 0, o.pr, o.pr, o.pr, 0, 0, cr, cg, cb, 1);
        Gl.emit(TP.ringT, o.x, cy, -o.d, 0, o.pr * 0.82, o.pr * 0.82, o.pr * 0.82, 0, -t * 1.4, cr, cg, cb, 0.8);
        Gl.emit(TP.disc, o.x, cy, -o.d, 0, o.pr * 0.95, o.pr * 0.95, o.pr, 0, 0, cr + fl, cg + fl, cb + fl, 0.8 + fl);
        for (let a = 0; a < 3; a++) {
          const rr = o.pr * (0.7 - a * 0.2);
          Gl.emit(TP.arc, o.x, cy, -o.d, 0, rr, rr, rr, 0, t * (2.2 + a * 0.7) * (e ? -1 : 1) + a * 2.1, 1, 1, 1, 0.85);
        }
      }
    }

    for (let i = 0; i < this.gates.length; i++) {
      const g = this.gates[i];
      if (g.d < lo || g.d > hi) continue;
      const hot = g.used ? 0.35 : 1;
      Gl.emit(TP.curtain, 0, g.gy, -g.d, 0, g.hw + 1, 10, 1, 0, 0, 0.75, 0.35, 1, 0.9 * hot + g.flash);
      for (let s = 0; s < 4; s++) {
        const f = (t * 0.5 + s * 0.25) % 1;
        Gl.emit(TP.stripe, 0, g.gy + f * 10, -g.d, 0, g.hw + 1, 1, 1, 0, 0, 1, 0.8, 1, 0.9 * (1 - f) * hot);
      }
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
        const R = b.r * 1.15;
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
  // Use instead of camera.lookAt(target): applies the flip barrel-roll / gravity-flip roll and a speed FOV kick.
  lookAt(camera, target) {
    this._cam = camera;
    flipCamera(camera, target, this.rollNow);
    camera.lookAt(target);
    const m = this.mods;
    const want = (this.T.rocket > 0 ? 14 : 0) + (m.sliding ? 8 : 0) + (m.flying ? 7 : 0);
    this._fov += (want - this._fov) * 0.08;
    if (Math.abs(this._fov) < 0.02 && want === 0) this._fov = 0;
    camera.userData.fovBoost = this._fov;
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    if (this._frozenAny) this._unfreeze();
    if (this.fly.on) this.fly.on = false;
    const w = this.world;
    for (let i = 0; i < this.snow.length; i++) this.snow[i].alive = false;
    if (this.armyMesh) {
      if (w.meshes && w.meshes[this.armyType] === this.armyMesh) delete w.meshes[this.armyType];
      w.group.remove(this.armyMesh);
      this.armyMesh.dispose(); // frees instance buffers only; geometry/material are shared with the prop library / world
    }
    this.scene.remove(this.group);
    if (this.staticMesh) { this.staticMesh.geometry.dispose(); this.staticMesh.material.dispose(); }
    this.solid.dispose();
    this.glow.dispose();
    if (this.hud && this.hud.parentNode) this.hud.parentNode.removeChild(this.hud);
    this.hud = null;
    if (this._cam) { this._cam.up.set(0, 1, 0); this._cam.userData.fovBoost = 0; }
  }
}
