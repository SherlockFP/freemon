// props.js — procedural low-poly prop library for the snowball game.
//
// Every prop is built from Three.js primitives, merged into ONE non-indexed
// BufferGeometry with attributes { position, normal, color } (flat per-part
// vertex colors). The engine renders each prop type as one InstancedMesh with
//   new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })
//
// Conventions: meters, Y up, origin at bottom-center (y = 0 touches ground),
// front faces +Z.

import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// ---------------------------------------------------------------------------
// Public tables
// ---------------------------------------------------------------------------

/** Props that spawn on the mountain slope, grouped by tier (0 tiny ... 4 huge). */
export const SLOPE_TIERS = [
  ['pebble', 'bush_small', 'penguin', 'rabbit', 'gift', 'traffic_cone'],
  ['person', 'skier', 'snowman', 'sled', 'bench', 'fence', 'pine_small'],
  ['car', 'car_blue', 'snowmobile', 'deer', 'kiosk', 'pine', 'yeti', 'boulder'],
  ['cabin', 'bus', 'lift_pylon', 'truck', 'pine_big'],
  ['hotel', 'gondola_station', 'water_tower', 'rock_big'],
];

/** Building props used for the finale town (kind 'building'). */
export const TOWN_TYPES = ['house', 'house_tall', 'shop', 'apartment', 'clocktower', 'barn'];

// ---------------------------------------------------------------------------
// Internals
// ---------------------------------------------------------------------------

const PI = Math.PI;
const HALF_PI = PI / 2;

const _e = new THREE.Euler();
const _q = new THREE.Quaternion();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _up = new THREE.Vector3(0, 1, 0);
const _va = new THREE.Vector3();
const _vb = new THREE.Vector3();
const _vc = new THREE.Vector3();
const _vn = new THREE.Vector3();
const _vd = new THREE.Vector3();

function hash3(x, y, z, seed = 0) {
  const s = Math.sin(Math.round(x * 1000) * 12.9898 + Math.round(y * 1000) * 78.233 +
    Math.round(z * 1000) * 37.719 + seed * 19.19) * 43758.5453;
  return s - Math.floor(s);
}

/** Radially displace vertices of a (non-indexed) sphere-ish geometry. */
function jitter(g, amount, seed) {
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const k = 1 + amount * (hash3(x, y, z, seed) * 2 - 1);
    p.setXYZ(i, x * k, y * k, z * k);
  }
}

/** Per-face coloring for rocks: snow on upward faces, shaded gray elsewhere. */
function rockColor(base = 0x8c96aa, snowY = 0.55, seed = 0) {
  const cBase = new THREE.Color(base);
  const cDark = cBase.clone().multiplyScalar(0.7);
  const cLight = cBase.clone().lerp(new THREE.Color(0xffffff), 0.22);
  const sn1 = new THREE.Color(0xffffff);
  const sn2 = new THREE.Color(0xe4f0fb);
  const tmp = new THREE.Color();
  return (n, c) => {
    const h = hash3(c.x, c.y, c.z, seed);
    if (n.y > snowY) return h > 0.45 ? sn1 : sn2;
    const t = Math.min(1, Math.max(0, 0.15 + n.y * 0.5 + h * 0.45));
    return tmp.copy(cDark).lerp(cLight, t).clone();
  };
}

/** Where a face-attached element goes: returns [x, z, rotY]. u = along the face
 *  (to the right as seen from outside), n = outward distance from the center. */
function fpos(face, u, n) {
  switch (face) {
    case '+z': return [u, n, 0];
    case '-z': return [-u, -n, PI];
    case '+x': return [n, -u, HALF_PI];
    default: return [-n, u, -HALF_PI]; // '-x'
  }
}

class Model {
  constructor() {
    this.parts = [];
    this.stack = [new THREE.Matrix4()];
  }

  // -- transform stack ------------------------------------------------------
  push(x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s = 1) {
    _e.set(rx, ry, rz);
    _q.setFromEuler(_e);
    _p.set(x, y, z);
    _s.set(s, s, s);
    const m = new THREE.Matrix4().compose(_p, _q, _s);
    this.stack.push(this.stack[this.stack.length - 1].clone().multiply(m));
    return this;
  }
  pop() { this.stack.pop(); return this; }

  // -- raw add --------------------------------------------------------------
  add(geo, col, x = 0, y = 0, z = 0, rot = null, scl = null) {
    const g = geo.index ? geo.toNonIndexed() : geo;
    for (const k of Object.keys(g.attributes)) if (k !== 'position') g.deleteAttribute(k);
    _e.set(rot ? rot[0] : 0, rot ? rot[1] : 0, rot ? rot[2] : 0);
    _q.setFromEuler(_e);
    if (scl == null) _s.set(1, 1, 1);
    else if (typeof scl === 'number') _s.set(scl, scl, scl);
    else _s.set(scl[0], scl[1], scl[2]);
    _p.set(x, y, z);
    _m.compose(_p, _q, _s);
    _m.premultiply(this.stack[this.stack.length - 1]);
    g.applyMatrix4(_m);
    this.parts.push({ g, col });
    return this;
  }

  // -- primitives (center-anchored unless suffixed B = base-anchored) -------
  box(w, h, d, col, x = 0, y = 0, z = 0, rot = null) {
    return this.add(new THREE.BoxGeometry(w, h, d), col, x, y, z, rot);
  }
  boxB(w, h, d, col, x = 0, y = 0, z = 0, rot = null) {
    return this.box(w, h, d, col, x, y + h / 2, z, rot);
  }
  cyl(rt, rb, h, seg, col, x = 0, y = 0, z = 0, rot = null, open = false) {
    return this.add(new THREE.CylinderGeometry(rt, rb, h, seg, 1, open), col, x, y, z, rot);
  }
  cylB(rt, rb, h, seg, col, x = 0, y = 0, z = 0, rot = null, open = false) {
    return this.cyl(rt, rb, h, seg, col, x, y + h / 2, z, rot, open);
  }
  cone(r, h, seg, col, x = 0, y = 0, z = 0, rot = null, open = false) {
    return this.cyl(0, r, h, seg, col, x, y, z, rot, open);
  }
  coneB(r, h, seg, col, x = 0, y = 0, z = 0, rot = null, open = false) {
    return this.cyl(0, r, h, seg, col, x, y + h / 2, z, rot, open);
  }
  /** Icosphere (detail 0 = 20 tris, 1 = 80 tris), optional radial jitter. */
  ball(r, col, x = 0, y = 0, z = 0, scl = null, detail = 1, jit = 0, seed = 0) {
    const g = new THREE.IcosahedronGeometry(r, detail);
    if (jit) jitter(g, jit, seed);
    return this.add(g, col, x, y, z, null, scl);
  }
  /** UV sphere with few segments (default 7x5 = 56 tris). */
  blob(r, col, x = 0, y = 0, z = 0, scl = null, ws = 7, hs = 5) {
    return this.add(new THREE.SphereGeometry(r, ws, hs), col, x, y, z, null, scl);
  }
  /** Flat quad facing +Z (2 tris). */
  quad(w, h, col, x = 0, y = 0, z = 0, rot = null) {
    return this.add(new THREE.PlaneGeometry(w, h), col, x, y, z, rot);
  }
  /** Flat disc facing +Z. */
  disc(r, seg, col, x = 0, y = 0, z = 0, rot = null) {
    return this.add(new THREE.CircleGeometry(r, seg), col, x, y, z, rot);
  }
  /** Box whose top face is scaled/shifted (center-anchored). */
  tbox(w, h, d, col, x = 0, y = 0, z = 0, topX = 1, topZ = 1, shiftZ = 0, rot = null) {
    const g = new THREE.BoxGeometry(w, h, d);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      if (p.getY(i) > 0) {
        p.setX(i, p.getX(i) * topX);
        p.setZ(i, p.getZ(i) * topZ + shiftZ);
      }
    }
    return this.add(g, col, x, y, z, rot);
  }
  tboxB(w, h, d, col, x = 0, y = 0, z = 0, topX = 1, topZ = 1, shiftZ = 0, rot = null) {
    return this.tbox(w, h, d, col, x, y + h / 2, z, topX, topZ, shiftZ, rot);
  }
  /** Tapered cylinder between two points (r0 at a, r1 at b). */
  rod(a, b, r0, r1, col, seg = 6, caps = true) {
    _va.set(a[0], a[1], a[2]);
    _vb.set(b[0], b[1], b[2]);
    _vd.copy(_vb).sub(_va);
    const L = _vd.length();
    _vd.normalize();
    _q.setFromUnitVectors(_up, _vd);
    _e.setFromQuaternion(_q);
    const g = new THREE.CylinderGeometry(r1, r0, L, seg, 1, !caps);
    return this.add(g, col, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2, [_e.x, _e.y, _e.z]);
  }
  /** Square-section beam between two points. */
  strut(a, b, t, col, t2 = t) {
    _va.set(a[0], a[1], a[2]);
    _vb.set(b[0], b[1], b[2]);
    _vd.copy(_vb).sub(_va);
    const L = _vd.length();
    _vd.normalize();
    _q.setFromUnitVectors(_up, _vd);
    _e.setFromQuaternion(_q);
    const g = new THREE.BoxGeometry(t, L, t2);
    return this.add(g, col, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2, [_e.x, _e.y, _e.z]);
  }
  /** Convex polygon (CCW in XY) extruded along Z, caps only (front/back). */
  extrudeZ(poly, d, col, x = 0, y = 0, z = 0) {
    const pos = [];
    const n = poly.length;
    for (let i = 1; i < n - 1; i++) {
      pos.push(poly[0][0], poly[0][1], d / 2, poly[i][0], poly[i][1], d / 2, poly[i + 1][0], poly[i + 1][1], d / 2);
      pos.push(poly[0][0], poly[0][1], -d / 2, poly[i + 1][0], poly[i + 1][1], -d / 2, poly[i][0], poly[i][1], -d / 2);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    return this.add(g, col, x, y, z);
  }

  // -- face-attached helpers (building walls) -------------------------------
  fq(face, w, h, col, u, y, n, rz = 0) {
    const [x, z, ry] = fpos(face, u, n);
    return this.quad(w, h, col, x, y, z, [0, ry, rz]);
  }
  fdisc(face, r, seg, col, u, y, n) {
    const [x, z, ry] = fpos(face, u, n);
    return this.disc(r, seg, col, x, y, z, [0, ry, 0]);
  }
  fbox(face, w, h, d, col, u, y, n) {
    const [x, z, ry] = fpos(face, u, n);
    return this.box(w, h, d, col, x, y, z, [0, ry, 0]);
  }
  /** Window: frame quad + glass quad (+ optional cross bars and sill). */
  win(face, u, y, n, w, h, o = {}) {
    const frame = o.frame ?? 0xffffff;
    const glass = o.glass ?? 0x7cc4ee;
    this.fq(face, w + 0.3, h + 0.3, frame, u, y, n + 0.03);
    this.fq(face, w, h, glass, u, y, n + 0.06);
    if (o.bars !== false) {
      this.fq(face, 0.08, h, frame, u, y, n + 0.09);
      this.fq(face, w, 0.08, frame, u, y, n + 0.09);
    }
    if (o.sill) this.fbox(face, w + 0.5, 0.14, 0.34, frame, u, y - h / 2 - 0.22, n + 0.14);
    return this;
  }

  // -- finalize --------------------------------------------------------------
  build(name, tier, kind, opts = {}) {
    const geos = [];
    for (const { g, col } of this.parts) {
      const pos = g.attributes.position;
      const n = pos.count;
      const arr = new Float32Array(n * 3);
      if (typeof col === 'function') {
        for (let i = 0; i < n; i += 3) {
          _va.fromBufferAttribute(pos, i);
          _vb.fromBufferAttribute(pos, i + 1);
          _vc.fromBufferAttribute(pos, i + 2);
          _vn.subVectors(_vc, _vb).cross(_vd.subVectors(_va, _vb)).normalize();
          _p.copy(_va).add(_vb).add(_vc).multiplyScalar(1 / 3);
          let c = col(_vn, _p);
          if (!c.isColor) c = new THREE.Color(c);
          for (let k = 0; k < 3; k++) {
            arr[(i + k) * 3] = c.r; arr[(i + k) * 3 + 1] = c.g; arr[(i + k) * 3 + 2] = c.b;
          }
        }
      } else {
        const c = new THREE.Color(col);
        for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
      }
      g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
      geos.push(g);
    }
    const geometry = mergeGeometries(geos, false);
    if (!geometry) throw new Error(`props: merge failed for "${name}"`);
    geometry.computeBoundingBox();
    if (opts.ground) {
      geometry.translate(0, -geometry.boundingBox.min.y, 0);
      geometry.computeBoundingBox();
    }
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();
    return {
      name,
      geometry,
      radius: geometry.boundingSphere.radius,
      height: geometry.boundingBox.max.y,
      tier,
      kind,
    };
  }
}

// ---------------------------------------------------------------------------
// Shared construction kits
// ---------------------------------------------------------------------------

const SNOW = 0xffffff;

/** Snowy pine: trunk + stacked cones, each with a snow-covered top. */
function pineTree(m, o) {
  m.cylB(o.trunkR * 0.7, o.trunkR, o.trunkH, 6, 0x7a4b2a);
  o.tiers.forEach(([y, r, h], i) => {
    const green = o.greens[Math.min(i, o.greens.length - 1)];
    const rot = [0, i * 0.45, 0];
    m.coneB(r, h, o.seg, green, 0, y, 0, rot);
    const t = 0.42;
    m.coneB(r * (1 - t) * 1.07, h * (1 - t) + 0.03, o.seg, SNOW, 0, y + h * t, 0, rot, true);
  });
}

/** Chunky person (legs, jacket, scarf, head, beanie). Upper body pivots at hips. */
function figure(m, o) {
  const lean = o.lean || 0;
  for (const s of [-1, 1]) {
    m.boxB(0.17, 0.64, 0.2, o.pants, s * 0.1, 0.1, 0);
    m.boxB(0.18, 0.11, 0.3, o.boots, s * 0.1, 0, 0.04);
  }
  m.push(0, 0.74, 0, lean);
  m.boxB(0.46, 0.56, 0.28, o.jacket, 0, 0, 0);
  m.boxB(0.34, 0.1, 0.34, o.scarf, 0, 0.5, 0);
  if (o.helmet) {
    m.blob(0.17, o.skin, 0, 0.7, 0.01, null, 6, 4);
    m.blob(0.19, o.beanie, 0, 0.74, 0, [1, 0.9, 1.03], 6, 4);
    m.box(0.28, 0.07, 0.05, o.goggles, 0, 0.69, 0.175);
  } else {
    m.blob(0.17, o.skin, 0, 0.7, 0.01);
    m.box(0.045, 0.055, 0.04, 0x1f2430, -0.06, 0.66, 0.17);
    m.box(0.045, 0.055, 0.04, 0x1f2430, 0.06, 0.66, 0.17);
    m.blob(0.19, o.beanie, 0, 0.79, 0, [1, 0.78, 1]);
    m.ball(0.05, 0xffffff, 0, 0.96, 0, null, 0);
  }
  for (const s of [-1, 1]) {
    m.push(s * 0.3, 0.5, 0, o.armSwing || 0, 0, s * 0.1);
    m.box(0.12, 0.5, 0.14, o.jacket, 0, -0.26, 0);
    m.box(0.13, 0.1, 0.15, o.mitt, 0, -0.55, 0);
    m.pop();
  }
  m.pop();
}

/**
 * Gable / gambrel roof from slabs (thick, with overhang and snow cap).
 * half: right-hand profile polyline from the eave (x>0,y=0) up to the ridge (x=0).
 * d: ridge length (along local z). Optional wall (gable-end) polygon in wallCol.
 */
function roof(m, half, d, o) {
  const t = o.t ?? 0.18;
  const ts = o.ts ?? 0.26;
  const ovh = o.ovh ?? 0.5;
  const oz = o.oz ?? 0.4;
  const snow = o.snow !== false;
  const snowInset = o.snowInset ?? 0.5;
  const D = d + 2 * oz;
  m.push(o.x || 0, o.y || 0, o.z || 0, 0, o.ry || 0, 0);

  if (o.wallCol != null) {
    const poly = half.concat(half.slice(0, -1).reverse().map(([x, y]) => [-x, y]));
    m.extrudeZ(poly, d, o.wallCol);
  }

  const slab = (A, B, a, b, off, th, Dd, col, side) => {
    let ux = B[0] - A[0], uy = B[1] - A[1];
    const L = Math.hypot(ux, uy);
    ux /= L; uy /= L;
    const nx = uy, ny = -ux;
    const len = L + b - a;
    const c = (a + L + b) / 2;
    const cx = A[0] + ux * c + nx * (off + th / 2);
    const cy = A[1] + uy * c + ny * (off + th / 2);
    m.box(len, th, Dd, col, side * cx, cy, 0, [0, 0, Math.atan2(uy, side * ux)]);
  };

  const last = half.length - 2;
  for (const side of [1, -1]) {
    for (let i = 0; i <= last; i++) {
      const A = half[i], B = half[i + 1];
      slab(A, B, i === 0 ? -ovh : -0.04, i === last ? 0 : 0.04, 0, t, D, o.roofCol, side);
      if (snow) {
        slab(A, B, i === 0 ? snowInset : -0.04, i === last ? 0 : 0.04, t, ts, D + 0.14, SNOW, side);
      }
    }
  }
  // ridge caps (fill the V notch between the two slabs)
  {
    const A = half[last], B = half[last + 1];
    let ux = B[0] - A[0], uy = B[1] - A[1];
    const L = Math.hypot(ux, uy);
    ux /= L; uy /= L;
    const cosPhi = Math.max(0.3, Math.abs(ux));
    const H = B[1];
    const cap = (T, col, DD) => {
      const diag = T / cosPhi;
      const side = diag / Math.SQRT2;
      m.box(side, side, DD, col, 0, H + diag / 2, 0, [0, 0, PI / 4]);
    };
    cap(t, o.roofCol, D);
    if (snow) cap(t + ts, SNOW, D + 0.14);
  }
  m.pop();
}

function gableHalf(w, h) { return [[w / 2, 0], [0, h]]; }

/** Low snow bank around a building base. */
function snowbank(m, w, d, h = 0.4) {
  m.tboxB(w + 0.9, h, d + 0.9, SNOW, 0, 0, 0, 0.93, 0.93);
}

/** Round clock face on a wall. */
function clockFace(m, face, u, y, n, r) {
  m.fdisc(face, r * 1.12, 10, 0x2a3358, u, y, n + 0.03);
  m.fdisc(face, r, 10, 0xfffdf4, u, y, n + 0.06);
  for (let k = 0; k < 4; k++) {
    const a = k * HALF_PI;
    const rr = r * 0.78;
    m.fq(face, 0.16, r * 0.2, 0x2a3358, u + Math.sin(a) * rr, y + Math.cos(a) * rr, n + 0.09, -a);
  }
  const hand = (ang, len, wid) => {
    m.fq(face, wid, len, 0x2a3358, u + Math.sin(ang) * len / 2, y + Math.cos(ang) * len / 2, n + 0.12, -ang);
  };
  hand(-1.0, r * 0.55, 0.2);   // hour hand (~10)
  hand(1.05, r * 0.8, 0.13);   // minute hand (~2)
}

/** Hanging gondola cabin. */
function gondolaCabin(m, x, y, z, col) {
  m.strut([x, y, z], [x, y - 1.2, z], 0.14, 0x4a525e);
  m.boxB(0.5, 0.3, 0.5, 0x4a525e, x, y - 1.35, z);
  m.tboxB(1.7, 1.5, 1.5, col, x, y - 2.9, z, 0.86, 0.86);
  m.boxB(1.4, 0.18, 1.2, SNOW, x, y - 1.4, z);
  m.fq('+z', 1.3, 0.8, 0x7cc4ee, x, y - 2.1, z + 0.745);
  m.fq('-z', 1.3, 0.8, 0x7cc4ee, -x, y - 2.1, -z + 0.745);
  m.fq('+x', 1.1, 0.8, 0x7cc4ee, -z, y - 2.1, x + 0.815);
  m.fq('-x', 1.1, 0.8, 0x7cc4ee, z, y - 2.1, -x + 0.815);
}

// ---------------------------------------------------------------------------
// Tier 0
// ---------------------------------------------------------------------------

function buildPebble() {
  const m = new Model();
  const rc = rockColor(0x9aa3b8, 2, 1);
  m.ball(0.22, rc, 0, 0.14, 0, [1.15, 0.72, 0.9], 1, 0.16, 1);
  m.ball(0.12, rc, 0.2, 0.08, 0.14, [1, 0.7, 0.9], 0, 0.12, 2);
  return m.build('pebble', 0, 'rock', { ground: true });
}

function buildBushSmall() {
  const m = new Model();
  m.ball(0.3, 0x2fa35a, 0, 0.23, 0, [1.05, 0.8, 1], 1, 0.06, 3);
  m.blob(0.2, 0x3cc06a, 0.26, 0.15, 0.12, [1, 0.85, 1], 6, 4);
  m.blob(0.18, 0x27944f, -0.24, 0.14, 0.14, [1, 0.85, 1], 6, 4);
  m.blob(0.17, SNOW, 0.02, 0.41, -0.02, [1.1, 0.5, 1.1], 6, 3);
  for (const [x, y, z] of [[0.12, 0.34, 0.24], [-0.1, 0.3, 0.27]]) m.ball(0.035, 0xe8362f, x, y, z, null, 0);
  return m.build('bush_small', 0, 'static', { ground: true });
}

function buildPenguin() {
  const m = new Model();
  const navy = 0x26354d;
  m.ball(1, navy, 0, 0.24, 0, [0.15, 0.22, 0.13], 1);
  m.blob(1, 0xf4f7fb, 0, 0.23, 0.065, [0.11, 0.18, 0.09]);
  m.blob(0.1, navy, 0, 0.5, 0.015);
  m.coneB(0.035, 0.09, 6, 0xff9d1f, 0, 0.485, 0.105, [HALF_PI, 0, 0]);
  m.box(0.03, 0.035, 0.03, 0xffffff, -0.045, 0.52, 0.095);
  m.box(0.03, 0.035, 0.03, 0xffffff, 0.045, 0.52, 0.095);
  m.quad(0.018, 0.022, 0x15171c, -0.045, 0.52, 0.1115);
  m.quad(0.018, 0.022, 0x15171c, 0.045, 0.52, 0.1115);
  for (const s of [-1, 1]) {
    m.box(0.04, 0.2, 0.09, navy, s * 0.165, 0.26, 0, [0, 0, s * 0.3]);
    m.boxB(0.09, 0.03, 0.14, 0xff9d1f, s * 0.07, 0, 0.05);
  }
  return m.build('penguin', 0, 'walker', { ground: true });
}

function buildRabbit() {
  const m = new Model();
  const fur = 0xd9c3a5, white = 0xfaf6ef, pink = 0xff9fb5;
  m.blob(1, fur, 0, 0.15, 0, [0.13, 0.14, 0.2], 7, 5);
  m.blob(0.1, fur, 0, 0.27, 0.17, [0.95, 0.95, 1.1]);
  for (const s of [-1, 1]) {
    m.blob(1, fur, s * 0.045, 0.43, 0.14, [0.035, 0.14, 0.02], 5, 3);
    m.quad(0.03, 0.17, pink, s * 0.045, 0.43, 0.16);
    m.boxB(0.06, 0.03, 0.12, white, s * 0.08, 0, -0.03);
    m.quad(0.035, 0.04, 0x1f2430, s * 0.088, 0.295, 0.22, [0, s * 1.1, 0]);
  }
  m.ball(0.065, white, 0, 0.18, -0.2, null, 0);
  m.box(0.04, 0.03, 0.03, pink, 0, 0.255, 0.285);
  return m.build('rabbit', 0, 'walker', { ground: true });
}

function buildGift() {
  const m = new Model();
  const ribbon = 0xffd23f;
  m.boxB(0.44, 0.3, 0.44, 0xd62f5a, 0, 0, 0);
  m.boxB(0.48, 0.12, 0.48, 0xb5224a, 0, 0.28, 0);
  m.boxB(0.09, 0.3, 0.47, ribbon, 0, 0, 0);
  m.boxB(0.47, 0.3, 0.09, ribbon, 0, 0, 0);
  m.boxB(0.09, 0.124, 0.51, ribbon, 0, 0.28, 0);
  m.boxB(0.51, 0.124, 0.09, ribbon, 0, 0.28, 0);
  m.blob(1, ribbon, -0.07, 0.45, 0, [0.09, 0.06, 0.04], 6, 4);
  m.blob(1, ribbon, 0.07, 0.45, 0, [0.09, 0.06, 0.04], 6, 4);
  m.box(0.06, 0.06, 0.06, 0xf5b81c, 0, 0.43, 0);
  return m.build('gift', 0, 'static');
}

function buildTrafficCone() {
  const m = new Model();
  m.boxB(0.38, 0.04, 0.38, 0x2b2b33);
  m.cylB(0.03, 0.13, 0.46, 8, 0xff5a1f, 0, 0.04, 0);
  m.cylB(0.0757 + 0.006, 0.097 + 0.006, 0.1, 8, 0xffffff, 0, 0.19, 0);
  return m.build('traffic_cone', 0, 'static');
}

// ---------------------------------------------------------------------------
// Tier 1
// ---------------------------------------------------------------------------

function buildPerson() {
  const m = new Model();
  figure(m, {
    jacket: 0xff6b2c, pants: 0x2d3561, boots: 0x3b2f2f, beanie: 0x20c4b8,
    scarf: 0xffffff, skin: 0xffcc99, mitt: 0x20c4b8,
  });
  return m.build('person', 1, 'walker');
}

function buildSkier() {
  const m = new Model();
  m.push(0, 0.04, 0);
  figure(m, {
    jacket: 0x2f6bff, pants: 0x1c2b5e, boots: 0x20242e, beanie: 0xffd23f,
    scarf: 0xff4d6d, skin: 0xffcc99, mitt: 0x20242e, lean: 0.38, armSwing: -0.95,
    helmet: true, goggles: 0xffa31a,
  });
  m.pop();
  for (const s of [-1, 1]) {
    m.boxB(0.1, 0.035, 1.5, 0xe63946, s * 0.13, 0, 0.1);
    m.box(0.1, 0.03, 0.24, 0xe63946, s * 0.13, 0.065, 0.96, [-0.5, 0, 0]);
    m.strut([s * 0.42, 0.04, -0.4], [s * 0.38, 1.0, 0.45], 0.03, 0x4a525e);
    m.disc(0.07, 6, 0x4a525e, s * 0.42, 0.1, -0.4, [-HALF_PI, 0, 0]);
  }
  return m.build('skier', 1, 'skier', { ground: true });
}

function buildSnowman() {
  const m = new Model();
  m.blob(0.4, SNOW, 0, 0.4, 0, null, 8, 5);
  m.blob(0.3, SNOW, 0, 0.8, 0, null, 7, 5);
  m.blob(0.22, SNOW, 0, 1.17, 0, null, 7, 4);
  // scarf
  m.cylB(0.25, 0.25, 0.08, 6, 0xe8362f, 0, 0.96, 0);
  // face
  m.coneB(0.04, 0.26, 5, 0xff7a1a, 0, 1.15, 0.2, [HALF_PI, 0, 0]);
  m.quad(0.06, 0.06, 0x1f2430, -0.08, 1.24, 0.205);
  m.quad(0.06, 0.06, 0x1f2430, 0.08, 1.24, 0.205);
  for (let i = 0; i < 3; i++) m.quad(0.06, 0.06, 0x1f2430, 0, 0.88 - i * 0.14 - 0.05 + 0.1, 0.298 - i * 0.012 + 0.0);
  // top hat
  m.cylB(0.2, 0.2, 0.03, 5, 0x20242e, 0, 1.33, 0);
  m.cylB(0.12, 0.12, 0.24, 5, 0x20242e, 0, 1.35, 0);
  // stick arms
  for (const s of [-1, 1]) {
    m.strut([s * 0.26, 0.85, 0], [s * 0.7, 1.05, 0.05], 0.04, 0x7a4b2a);
    m.strut([s * 0.55, 0.99, 0.03], [s * 0.66, 1.2, 0.05], 0.03, 0x7a4b2a);
  }
  return m.build('snowman', 1, 'static');
}

function buildSled() {
  const m = new Model();
  const red = 0xe5383b, wood = 0x9a6a3a, steel = 0x6b7684;
  for (const s of [-1, 1]) {
    m.boxB(0.05, 0.08, 1.3, steel, s * 0.24, 0, 0);
    m.box(0.05, 0.05, 0.28, steel, s * 0.24, 0.1, 0.72, [-0.8, 0, 0]);
    m.boxB(0.05, 0.12, 0.05, steel, s * 0.24, 0.08, -0.45);
    m.boxB(0.05, 0.12, 0.05, steel, s * 0.24, 0.08, 0.35);
    m.boxB(0.05, 0.05, 1.3, wood, s * 0.24, 0.2, 0);
  }
  for (let i = 0; i < 5; i++) m.boxB(0.66, 0.04, 0.17, red, 0, 0.25, -0.5 + i * 0.25);
  m.boxB(0.6, 0.05, 0.05, wood, 0, 0.22, 0.65);
  m.strut([0, 0.25, 0.65], [0.0, 0.12, 1.0], 0.025, 0xffd23f);
  return m.build('sled', 1, 'static', { ground: true });
}

function buildBench() {
  const m = new Model();
  const wood = 0xb5793f, metal = 0x3a424f;
  for (const s of [-1, 1]) {
    m.boxB(0.07, 0.45, 0.5, metal, s * 0.72, 0, 0);
    m.boxB(0.07, 0.45, 0.07, metal, s * 0.72, 0.45, -0.22);
  }
  for (let i = 0; i < 3; i++) m.boxB(1.6, 0.05, 0.14, wood, 0, 0.45, -0.17 + i * 0.17);
  for (let i = 0; i < 2; i++) m.box(1.6, 0.14, 0.04, wood, 0, 0.75 + i * 0.18, -0.24, [-0.12, 0, 0]);
  m.boxB(1.4, 0.08, 0.5, SNOW, 0, 0.5, 0.0);
  return m.build('bench', 1, 'static');
}

function buildFence() {
  const m = new Model();
  const wood = 0xb5793f, post = 0x8a5a2e;
  for (const s of [-1, 1]) {
    m.boxB(0.14, 1.0, 0.14, post, s * 0.93, 0, 0);
    m.boxB(0.2, 0.07, 0.2, SNOW, s * 0.93, 1.0, 0);
  }
  m.boxB(2.0, 0.1, 0.06, post, 0, 0.3, -0.06);
  m.boxB(2.0, 0.1, 0.06, post, 0, 0.66, -0.06);
  for (let i = 0; i < 5; i++) {
    const x = -0.72 + i * 0.36;
    m.boxB(0.18, 0.86, 0.04, wood, x, 0.05, 0);
    m.boxB(0.2, 0.05, 0.06, SNOW, x, 0.91, 0);
  }
  m.boxB(2.0, 0.05, 0.14, SNOW, 0, 0.76, -0.06);
  return m.build('fence', 1, 'static');
}

function buildPineSmall() {
  const m = new Model();
  pineTree(m, {
    trunkH: 0.7, trunkR: 0.14, seg: 7,
    tiers: [[0.45, 0.95, 1.0], [1.05, 0.72, 0.95], [1.65, 0.46, 0.85]],
    greens: [0x1e8a4c, 0x27a05a, 0x30b568],
  });
  return m.build('pine_small', 1, 'tree');
}

// ---------------------------------------------------------------------------
// Tier 2
// ---------------------------------------------------------------------------

function buildCarBody(name, body, o = {}) {
  const m = new Model();
  const glass = 0x35506b;
  // chassis + cabin
  m.boxB(1.85, 0.55, 4.2, body, 0, 0.32, 0);
  m.tboxB(1.65, 0.62, 2.3, glass, 0, 0.87, -0.2, 0.82, 0.62, -0.15);
  m.boxB(1.4, 0.08, 1.48, body, 0, 1.49, -0.35);
  if (o.roofBox) {
    m.boxB(1.0, 0.3, 1.3, 0x2b2f3a, 0, 1.57, -0.35);
    m.boxB(0.9, 0.1, 1.2, SNOW, 0, 1.87, -0.35);
  } else {
    m.boxB(1.3, 0.12, 1.3, SNOW, 0, 1.57, -0.35);
  }
  m.boxB(1.5, 0.07, 0.95, SNOW, 0, 0.87, 1.52);
  m.boxB(1.5, 0.07, 0.55, SNOW, 0, 0.87, -1.74);
  // wheels
  for (const sx of [-1, 1]) {
    for (const z of [-1.32, 1.32]) {
      m.cyl(0.38, 0.38, 0.3, 8, 0x1d2129, sx * 0.93, 0.38, z, [0, 0, HALF_PI]);
      m.disc(0.22, 6, 0xc9d1dc, sx * 1.1, 0.38, z, [0, sx * HALF_PI, 0]);
    }
  }
  // lights + bumpers
  for (const s of [-1, 1]) {
    m.boxB(0.34, 0.16, 0.06, 0xfff0a0, s * 0.6, 0.55, 2.1);
    m.boxB(0.3, 0.14, 0.06, 0x8f1111, s * 0.62, 0.58, -2.1);
  }
  m.boxB(1.9, 0.18, 0.14, 0x30343c, 0, 0.26, 2.04);
  m.boxB(1.9, 0.18, 0.14, 0x30343c, 0, 0.26, -2.04);
  return m.build(name, 2, 'car');
}

function buildCar() { return buildCarBody('car', 0xe8362f); }
function buildCarBlue() { return buildCarBody('car_blue', 0x2f7de1, { roofBox: true }); }

function buildSnowmobile() {
  const m = new Model();
  const col = 0x1ec8d6, dark = 0x2d3139, accent = 0xffd23f;
  // track
  m.boxB(0.55, 0.5, 1.5, dark, 0, 0, -0.75);
  m.cyl(0.25, 0.25, 0.55, 8, dark, 0, 0.25, -1.5, [0, 0, HALF_PI]);
  m.cyl(0.25, 0.25, 0.55, 8, dark, 0, 0.25, 0.0, [0, 0, HALF_PI]);
  // rear body + seat + hood
  m.tboxB(0.95, 0.55, 2.0, col, 0, 0.5, -0.6, 0.85, 0.85);
  m.boxB(0.5, 0.18, 1.3, dark, 0, 1.05, -0.75);
  m.boxB(0.52, 0.04, 0.5, accent, 0, 0.7, -0.6);
  m.tboxB(1.0, 0.65, 1.5, col, 0, 0.45, 1.05, 0.62, 0.62);
  m.boxB(0.52, 0.05, 0.9, SNOW, 0, 1.1, 1.0);
  m.boxB(0.5, 0.18, 0.08, 0xfff5b8, 0, 0.7, 1.82);
  // windshield + handlebar
  m.box(0.75, 0.45, 0.05, 0xa3d9ff, 0, 1.3, 0.35, [-0.45, 0, 0]);
  m.strut([-0.48, 1.12, 0.3], [0.48, 1.12, 0.3], 0.07, dark);
  m.strut([0, 0.9, 0.5], [0, 1.12, 0.3], 0.08, dark);
  // skis
  for (const s of [-1, 1]) {
    m.boxB(0.16, 0.05, 1.3, dark, s * 0.58, 0, 1.35);
    m.box(0.16, 0.05, 0.4, dark, s * 0.58, 0.12, 2.18, [-0.5, 0, 0]);
    m.strut([s * 0.58, 0.1, 1.3], [s * 0.36, 0.7, 1.0], 0.08, dark);
  }
  return m.build('snowmobile', 2, 'static');
}

function buildDeer() {
  const m = new Model();
  const fur = 0xb87333, belly = 0xeacb9f, hoof = 0x3a2a22, bone = 0xefe0bd;
  // body
  m.ball(1, fur, 0, 1.3, 0, [0.45, 0.48, 1.0], 1);
  m.blob(1, belly, 0, 1.12, 0.05, [0.38, 0.3, 0.8], 7, 4);
  m.ball(0.14, 0xffffff, 0, 1.55, -1.0, [1, 1.2, 0.9], 0);
  // legs
  for (const s of [-1, 1]) {
    m.rod([s * 0.25, 1.1, 0.62], [s * 0.25, 0.1, 0.68], 0.15, 0.08, fur, 6, false);
    m.rod([s * 0.27, 1.15, -0.62], [s * 0.26, 0.1, -0.7], 0.17, 0.08, fur, 6, false);
    m.boxB(0.13, 0.12, 0.17, hoof, s * 0.25, 0, 0.68);
    m.boxB(0.13, 0.12, 0.17, hoof, s * 0.26, 0, -0.7);
  }
  // neck + head
  m.rod([0, 1.45, 0.7], [0, 2.1, 1.1], 0.33, 0.2, fur, 6, false);
  m.ball(1, fur, 0, 2.18, 1.28, [0.21, 0.2, 0.34], 1);
  m.blob(0.07, 0x2b2320, 0, 2.12, 1.6, null, 5, 4);
  for (const s of [-1, 1]) {
    m.box(0.04, 0.05, 0.04, 0x15171c, s * 0.17, 2.25, 1.4);
    m.cone(0.1, 0.34, 5, fur, s * 0.27, 2.36, 1.12, [0.2, 0, -s * 1.1]);
    // antlers
    m.rod([s * 0.12, 2.35, 1.12], [s * 0.5, 3.1, 0.95], 0.065, 0.04, bone, 5, false);
    m.rod([s * 0.27, 2.68, 1.05], [s * 0.2, 3.02, 1.3], 0.045, 0.025, bone, 5, false);
    m.rod([s * 0.4, 2.88, 0.99], [s * 0.72, 3.25, 1.0], 0.045, 0.025, bone, 5, false);
    m.rod([s * 0.36, 2.78, 0.99], [s * 0.38, 3.15, 0.72], 0.04, 0.025, bone, 5, false);
  }
  return m.build('deer', 2, 'walker');
}

function buildKiosk() {
  const m = new Model();
  const wall = 0x3f8fd8, wood = 0xc79257, dark = 0x2a3358;
  snowbank(m, 3.2, 2.6, 0.3);
  m.boxB(3.2, 2.4, 2.6, wall, 0, 0.15, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) m.boxB(0.16, 2.4, 0.16, SNOW, sx * 1.6, 0.15, sz * 1.3);
  // service window + counter
  m.fq('+z', 2.1, 1.3, SNOW, 0, 1.55, 1.33);
  m.fq('+z', 1.9, 1.1, dark, 0, 1.55, 1.36);
  m.boxB(2.3, 0.1, 0.55, wood, 0, 0.95, 1.55);
  // sign + crossed skis icon
  m.fq('+z', 0.8, 0.8, 0xffd23f, -1.3, 0.95 + 0.7, 1.33);
  m.fq('+z', 0.08, 0.7, 0xe63946, -1.3, 1.65, 1.36, 0.5);
  m.fq('+z', 0.08, 0.7, 0x2f6bff, -1.3, 1.65, 1.37, -0.5);
  // striped awning
  for (let i = 0; i < 7; i++) {
    const x = -1.5 + i * 0.5;
    m.box(0.5, 0.07, 1.0, i % 2 ? SNOW : 0xe8362f, x, 2.45, 1.75, [0.33, 0, 0]);
    m.quad(0.5, 0.22, i % 2 ? SNOW : 0xe8362f, x, 2.14, 2.23);
  }
  // roof (ridge along x)
  roof(m, gableHalf(2.6, 1.0), 3.2, { y: 2.55, ry: HALF_PI, roofCol: 0x7a4a2b, wallCol: wall, ovh: 0.35, oz: 0.3, ts: 0.2 });
  m.fq('-z', 1.4, 0.9, SNOW, 0, 1.6, 1.33);
  m.fq('-z', 1.2, 0.7, dark, 0, 1.6, 1.36);
  // skis leaning on the side
  const skiCols = [0xe63946, 0xffd23f, 0x2fb96a];
  skiCols.forEach((c, i) => m.box(0.1, 1.9, 0.04, c, 1.82 + i * 0.01, 1.1, -0.7 + i * 0.28, [0, 0, -0.12]));
  return m.build('kiosk', 2, 'static');
}

function buildPine() {
  const m = new Model();
  pineTree(m, {
    trunkH: 1.3, trunkR: 0.28, seg: 8,
    tiers: [[0.9, 1.95, 2.0], [2.2, 1.55, 1.9], [3.5, 1.15, 1.8], [4.6, 0.75, 1.55]],
    greens: [0x1b8048, 0x219555, 0x29aa62, 0x32bd6e],
  });
  return m.build('pine', 2, 'tree');
}

function buildYeti() {
  const m = new Model();
  const fur = 0xe8f4ff, furD = 0xbcdcf5, skin = 0x9fcbea, ink = 0x1f2a44;
  // feet + legs
  for (const s of [-1, 1]) {
    m.blob(1, furD, s * 0.42, 0.15, 0.14, [0.34, 0.17, 0.46], 6, 4);
    m.rod([s * 0.4, 1.2, 0], [s * 0.42, 0.2, 0.05], 0.38, 0.33, fur, 7, false);
  }
  // body
  m.ball(1, fur, 0, 1.5, 0, [0.92, 0.85, 0.8], 1);
  m.blob(1, 0xf7fbff, 0, 1.4, 0.55, [0.6, 0.6, 0.3], 6, 4);
  // arms + hands
  for (const s of [-1, 1]) {
    m.rod([s * 0.85, 1.95, 0], [s * 1.12, 0.85, 0.28], 0.3, 0.26, fur, 7, false);
    m.blob(1, furD, s * 1.14, 0.72, 0.32, [0.3, 0.3, 0.3], 6, 4);
  }
  // head
  m.ball(1, fur, 0, 2.18, 0.15, [0.55, 0.5, 0.52], 1);
  m.blob(1, skin, 0, 2.08, 0.62, [0.4, 0.32, 0.16], 7, 4);
  for (const s of [-1, 1]) {
    m.disc(0.11, 8, 0xffffff, s * 0.17, 2.2, 0.785);
    m.disc(0.055, 6, ink, s * 0.17, 2.19, 0.79);
    // horns
    m.cone(0.09, 0.3, 5, 0xf3e9c8, s * 0.36, 2.62, 0.08, [0, 0, -s * 0.45]);
    // shoulder tufts
    m.cone(0.2, 0.5, 6, furD, s * 0.72, 2.3, -0.1, [0, 0, -s * 0.7]);
  }
  m.blob(0.07, ink, 0, 2.1, 0.785, null, 5, 4);
  m.fq('+z', 0.3, 0.05, ink, 0, 1.97, 0.775);
  m.fq('+z', 0.1, 0.04, ink, -0.17, 2.0, 0.775, -0.7);
  m.fq('+z', 0.1, 0.04, ink, 0.17, 2.0, 0.775, 0.7);
  m.fq('+z', 0.05, 0.06, 0xffffff, -0.06, 1.93, 0.78);
  m.fq('+z', 0.05, 0.06, 0xffffff, 0.06, 1.93, 0.78);
  // back fur spikes
  m.cone(0.2, 0.5, 6, furD, 0, 2.0, -0.7, [-1.2, 0, 0]);
  m.cone(0.18, 0.45, 6, furD, 0, 1.5, -0.8, [-1.5, 0, 0]);
  m.cone(0.15, 0.4, 6, furD, 0, 2.7, -0.05, [-0.2, 0, 0]);
  return m.build('yeti', 2, 'walker', { ground: true });
}

function buildBoulder() {
  const m = new Model();
  const rc = rockColor(0x858fa3, 0.68, 4);
  m.ball(1.5, rc, 0, 1.15, 0, [1.12, 0.82, 1.0], 1, 0.2, 4);
  m.ball(0.95, rc, 1.3, 0.55, 0.7, [1, 0.75, 1], 1, 0.2, 5);
  m.ball(0.6, rc, -1.2, 0.35, 0.9, [1, 0.7, 1], 1, 0.2, 6);
  return m.build('boulder', 2, 'rock', { ground: true });
}

// ---------------------------------------------------------------------------
// Tier 3
// ---------------------------------------------------------------------------

function buildCabin() {
  const m = new Model();
  const W = 8.4, D = 7.2, WH = 3.6, y0 = 0.5, H = 2.6;
  const logs = 0xa86a3a, logD = 0x7e4a24, stone = 0x7f8794;
  m.boxB(W + 0.3, y0, D + 0.3, stone, 0, 0, 0);
  m.boxB(W, WH, D, logs, 0, y0, 0);
  for (let i = 0; i < 4; i++) m.boxB(W + 0.1, 0.12, D + 0.1, logD, 0, y0 + 0.6 + i * 0.85, 0);
  roof(m, gableHalf(W, H), D, { y: y0 + WH, roofCol: 0x5b3a29, wallCol: 0xb97a47, ovh: 1.0, oz: 0.9, t: 0.22, ts: 0.34, snowInset: 0.7 });
  const n = D / 2;
  // porch + door
  m.boxB(2.8, 0.3, 1.3, stone, 0, 0, n + 0.4);
  m.fbox('+z', 1.8, 2.7, 0.14, 0xe9d3b0, 0, y0 + 1.35, n + 0.05);
  m.fbox('+z', 1.4, 2.5, 0.14, 0x5a3220, 0, y0 + 1.25, n + 0.1);
  m.fq('+z', 0.6, 0.8, 0xffd877, 0, y0 + 1.8, n + 0.19);
  // lit windows with shutters
  for (const s of [-1, 1]) {
    const u = s * 2.9;
    m.win('+z', u, y0 + 1.9, n, 1.1, 1.2, { glass: 0xffd877, sill: true });
    m.fbox('+z', 0.45, 1.5, 0.1, 0xc8352f, u - 0.95, y0 + 1.9, n + 0.06);
    m.fbox('+z', 0.45, 1.5, 0.1, 0xc8352f, u + 0.95, y0 + 1.9, n + 0.06);
  }
  m.win('+z', 0, y0 + WH + 0.95, n, 0.9, 0.9, { glass: 0xffd877 });
  for (const f of ['+x', '-x']) {
    for (const u of [-1.6, 1.6]) m.win(f, u, y0 + 1.9, W / 2, 1.0, 1.2, { glass: 0xffd877 });
  }
  m.win('-z', -1.6, y0 + 1.9, n, 1.0, 1.2, { glass: 0xffd877 });
  m.win('-z', 1.6, y0 + 1.9, n, 1.0, 1.2, { glass: 0xffd877 });
  // chimney
  m.boxB(1.0, 3.0, 1.0, 0x8a8f98, 2.4, y0 + WH + 0.4, -1.2);
  m.boxB(1.25, 0.2, 1.25, 0x5f646d, 2.4, y0 + WH + 3.4, -1.2);
  m.boxB(1.15, 0.2, 1.15, SNOW, 2.4, y0 + WH + 3.6, -1.2);
  return m.build('cabin', 3, 'static');
}

function buildBus() {
  const m = new Model();
  const body = 0xffc21a, glass = 0x35506b, dark = 0x2b2f3a;
  m.boxB(2.55, 2.35, 11, body, 0, 0.55, 0);
  m.boxB(2.62, 0.4, 10.6, 0x2f7de1, 0, 0.75, 0);
  m.boxB(2.62, 0.12, 11.0, dark, 0, 1.3, 0);
  // windows (quads on both sides)
  for (let i = 0; i < 6; i++) {
    const z = 4.0 - i * 1.55;
    m.fq('+x', 1.2, 0.85, glass, -z, 2.15, 1.3 + 0.03);
    m.fq('-x', 1.2, 0.85, glass, z, 2.15, 1.3 + 0.03);
  }
  m.fq('+z', 2.2, 1.0, glass, 0, 2.15, 5.5 + 0.03);
  m.fq('-z', 1.9, 0.8, glass, 0, 2.2, 5.5 + 0.03);
  m.fq('+z', 1.5, 0.28, 0xffb000, 0, 2.78, 5.5 + 0.03);
  // roof snow + rack skis
  m.boxB(2.3, 0.28, 10.4, SNOW, 0, 2.9, 0);
  for (let i = 0; i < 3; i++) m.boxB(0.12, 0.05, 3.0, [0xe63946, 0x2f6bff, 0x2fb96a][i], -0.6 + i * 0.6, 3.15, -1.5);
  // wheels
  for (const sx of [-1, 1]) {
    for (const z of [-3.4, 3.4]) {
      m.cyl(0.58, 0.58, 0.4, 8, 0x1d2129, sx * 1.2, 0.58, z, [0, 0, HALF_PI]);
      m.disc(0.32, 6, 0xc9d1dc, sx * 1.42, 0.58, z, [0, sx * HALF_PI, 0]);
    }
  }
  // lights + bumpers
  for (const s of [-1, 1]) {
    m.boxB(0.36, 0.26, 0.08, 0xfff0a0, s * 0.95, 0.85, 5.5);
    m.boxB(0.3, 0.22, 0.08, 0xff3a2a, s * 0.95, 0.85, -5.5);
  }
  m.boxB(2.65, 0.22, 0.2, dark, 0, 0.45, 5.52);
  m.boxB(2.65, 0.22, 0.2, dark, 0, 0.45, -5.52);
  return m.build('bus', 3, 'car');
}

function buildLiftPylon() {
  const m = new Model();
  const steel = 0x6c7a89, red = 0xe84a3a, dark = 0x3a424f;
  m.boxB(2.6, 0.5, 1.8, 0x9aa1ab);
  for (const s of [-1, 1]) {
    m.strut([s * 0.95, 0.4, 0], [s * 0.28, 10.4, 0], 0.32, steel, 0.32);
  }
  for (const y of [2.6, 5.4, 8.0]) {
    const x = 0.95 - 0.67 * (y / 10);
    m.strut([-x, y, 0], [x, y, 0], 0.16, steel);
  }
  m.strut([-0.9, 0.5, 0], [0.45, 5.4, 0], 0.12, steel);
  m.strut([0.9, 0.5, 0], [-0.45, 5.4, 0], 0.12, steel);
  // crossarm + sheaves
  m.boxB(6.4, 0.38, 0.4, red, 0, 10.4, 0);
  m.boxB(0.6, 0.25, 0.7, dark, 0, 10.2, 0);
  for (const s of [-1, 1]) {
    m.strut([s * 2.7, 10.7, 0], [s * 2.7, 11.0, 0], 0.3, dark);
    m.cyl(0.38, 0.38, 0.24, 8, dark, s * 2.7, 11.05, 0, [0, 0, HALF_PI]);
    m.boxB(0.07, 0.07, 3.6, 0x20242e, s * 2.7, 11.4, 0);
    m.boxB(0.34, 0.5, 0.34, red, s * 3.1, 10.0, 0);
  }
  m.boxB(0.7, 0.45, 0.05, 0xffd23f, 0, 9.4, 0.28);
  m.boxB(1.8, 0.12, 1.4, SNOW, 0, 0.5, 0);
  return m.build('lift_pylon', 3, 'static');
}

function buildTruck() {
  const m = new Model();
  const orange = 0xff8a1f, orangeD = 0xe86a10, dark = 0x2b2f3a, glass = 0x35506b;
  m.boxB(2.2, 0.4, 7.2, dark, 0, 0.7, -0.2);
  // cab + hood
  m.boxB(2.4, 1.7, 2.1, orange, 0, 1.1, 1.55);
  m.boxB(1.95, 1.0, 1.1, orange, 0, 1.1, 3.15);
  m.boxB(2.5, 0.12, 2.2, orangeD, 0, 2.8, 1.55);
  m.boxB(2.2, 0.16, 1.9, SNOW, 0, 2.92, 1.55);
  m.fq('+z', 1.95, 0.9, glass, 0, 2.3, 2.6 + 0.0 + 0.03 - 0.0);
  m.fq('+x', 1.4, 0.85, glass, -1.7, 2.3, 1.2 + 0.03 - 0.0);
  m.fq('-x', 1.4, 0.85, glass, 1.7, 2.3, 1.2 + 0.03 - 0.0);
  m.fq('+z', 1.5, 0.6, dark, 0, 1.5, 3.7 + 0.03);
  for (const s of [-1, 1]) m.boxB(0.34, 0.26, 0.08, 0xfff0a0, s * 0.72, 1.7, 3.7);
  m.boxB(2.4, 0.3, 0.3, dark, 0, 0.75, 3.75);
  // beacon + stack
  m.boxB(1.2, 0.22, 0.32, 0xffb300, 0, 3.08, 1.9);
  m.cylB(0.09, 0.09, 1.4, 6, 0x9aa3b0, 1.0, 2.4, 0.5);
  // plow (V-blade)
  for (const s of [-1, 1]) {
    m.box(1.75, 1.3, 0.22, 0xffd21f, s * 0.84, 1.05, 4.5, [0, s * 0.3, 0]);
    m.box(1.75, 0.18, 0.26, dark, s * 0.84, 1.62, 4.5, [0, s * 0.3, 0]);
    m.strut([s * 0.7, 0.95, 3.6], [s * 0.85, 0.95, 4.35], 0.16, dark);
  }
  // dump bed + salt
  m.boxB(2.4, 1.2, 3.4, orangeD, 0, 1.1, -1.75);
  m.boxB(2.55, 0.14, 3.5, dark, 0, 2.3, -1.75);
  m.blob(1, 0xe6ecf2, 0, 2.3, -1.75, [1.05, 0.5, 1.6], 7, 4);
  // lights
  for (const s of [-1, 1]) m.boxB(0.34, 0.22, 0.08, 0xff3a2a, s * 0.8, 1.0, -3.5);
  // wheels
  for (const sx of [-1, 1]) {
    for (const z of [2.4, -1.4, -2.9]) {
      m.cyl(0.7, 0.7, 0.45, 8, 0x1d2129, sx * 1.1, 0.7, z, [0, 0, HALF_PI]);
      m.disc(0.38, 6, 0xc9d1dc, sx * 1.35, 0.7, z, [0, sx * HALF_PI, 0]);
    }
  }
  return m.build('truck', 3, 'car');
}

function buildPineBig() {
  const m = new Model();
  pineTree(m, {
    trunkH: 2.6, trunkR: 0.55, seg: 8,
    tiers: [[1.8, 3.8, 3.4], [4.2, 3.2, 3.2], [6.4, 2.6, 3.0], [8.6, 1.95, 2.7], [10.6, 1.3, 2.6]],
    greens: [0x167a42, 0x1b8d4e, 0x219f58, 0x29b263, 0x32c070],
  });
  return m.build('pine_big', 3, 'tree');
}

// ---------------------------------------------------------------------------
// Tier 4
// ---------------------------------------------------------------------------

function buildHotel() {
  const m = new Model();
  const cream = 0xf3e3c3, wood = 0xb97a47, stone = 0x8a8f98, roofC = 0x7a3b30;
  // plinth + main block
  m.boxB(18.4, 1.2, 9.4, stone, 0, 0, 0);
  m.boxB(18, 10, 9, cream, 0, 1.2, 0);
  // central tower block (protrudes at the front)
  m.boxB(7, 15.2, 10, 0xf7ecd2, 0, 0, 0.5);
  // roofs
  roof(m, gableHalf(9, 3.6), 18, { y: 11.2, ry: HALF_PI, roofCol: roofC, wallCol: cream, ovh: 0.8, oz: 0.6, ts: 0.34 });
  roof(m, gableHalf(7, 4.6), 10, { y: 15.2, z: 0.5, roofCol: roofC, wallCol: 0xf7ecd2, ovh: 0.7, oz: 0.6, ts: 0.34 });
  // balconies on the wings (floors 2 and 3)
  for (const sx of [-1, 1]) {
    for (const y of [4.7, 8.2]) {
      m.boxB(5.0, 0.22, 1.2, wood, sx * 6.2, y, 4.5 + 0.6);
      m.boxB(5.0, 0.8, 0.1, 0xd9363e, sx * 6.2, y + 0.22, 5.65);
    }
  }
  // wing windows (front)
  for (const sx of [-1, 1]) {
    for (const y of [3.0, 6.5, 9.7]) {
      for (const du of [-1.3, 1.3]) m.win('+z', sx * 6.2 + du, y, 4.5, 1.2, 1.6, { frame: 0xffffff, bars: true });
    }
  }
  // tower windows (front, protrudes to z = 5.5)
  for (const y of [7.0, 10.5, 14.0]) {
    for (const du of [-1.5, 1.5]) m.win('+z', du, y, 5.5, 1.3, 1.6, { glass: 0xffe08a });
  }
  // entrance: canopy, door, sign
  m.boxB(4.2, 0.22, 2.4, 0xd9363e, 0, 4.0, 5.5 + 1.0);
  m.boxB(4.4, 0.16, 2.6, SNOW, 0, 4.22, 5.5 + 1.0);
  m.fbox('+z', 2.6, 3.0, 0.15, 0x5a3220, 0, 1.2 + 1.5, 5.55);
  m.fq('+z', 1.0, 1.7, 0xffe08a, -0.55, 3.1, 5.64);
  m.fq('+z', 1.0, 1.7, 0xffe08a, 0.55, 3.1, 5.64);
  for (const s of [-1, 1]) m.boxB(0.25, 4.0, 0.25, wood, s * 1.9, 0, 7.4);
  m.fbox('+z', 4.6, 0.9, 0.15, 0x2e3a59, 0, 5.4, 5.55);
  for (let i = 0; i < 5; i++) m.fq('+z', 0.5, 0.6, 0xffd23f, -1.7 + i * 0.85, 5.4, 5.64);
  // side + back windows
  for (const f of ['+x', '-x']) for (const y of [3.0, 6.5, 9.7]) for (const u of [-1.8, 1.8]) m.win(f, u, y, 9.0, 1.2, 1.5);
  for (const y of [3.0, 6.5, 9.7]) for (const u of [-6.5, -3.0, 3.0, 6.5]) m.win('-z', u, y, 4.5, 1.2, 1.5);
  // chimneys
  for (const sx of [-1, 1]) {
    m.boxB(1.1, 4.2, 1.1, stone, sx * 7.4, 11.2, -1.4);
    m.boxB(1.4, 0.25, 1.4, SNOW, sx * 7.4, 15.4, -1.4);
  }
  snowbank(m, 18.4, 9.4, 0.5);
  return m.build('hotel', 4, 'static');
}

function buildGondolaStation() {
  const m = new Model();
  m.push(0, 0, 0, 0, 0, 0, 0.92); // scale whole model to ~14 m
  const body = 0xe6edf5, red = 0xd9363e, dark = 0x3a424f;
  m.boxB(12.4, 0.5, 8.4, 0x8a8f98);
  m.boxB(12, 6.2, 8, body, 0, 0.5, 0);
  m.boxB(12.12, 0.9, 8.12, red, 0, 4.4, 0);
  roof(m, gableHalf(8, 1.7), 12, { y: 6.7, ry: HALF_PI, roofCol: red, wallCol: body, ovh: 0.7, oz: 0.6, ts: 0.34 });
  // big glass front
  m.fq('+z', 9.6, 3.6, SNOW, 0, 2.6, 4.03);
  m.fq('+z', 9.2, 3.2, 0x6bb6e6, 0, 2.6, 4.06);
  for (let i = -3; i <= 3; i++) m.fq('+z', 0.12, 3.2, SNOW, i * 1.3, 2.6, 4.09);
  m.fq('+z', 9.2, 0.12, SNOW, 0, 2.6, 4.09);
  // sign
  m.fbox('+z', 5.0, 0.8, 0.15, 0x2e3a59, 0, 5.1 + 0.2, 4.05);
  for (let i = 0; i < 4; i++) m.fq('+z', 0.6, 0.5, 0xffd23f, -1.5 + i * 1.0, 5.3, 4.14);
  // steps
  m.boxB(3.6, 0.5, 1.2, 0xc9d1dc, 0, 0, 4.8);
  // side windows
  for (const f of ['+x', '-x']) for (const u of [-2, 2]) m.win(f, u, 3.0, 6.0, 1.6, 1.8);
  for (const u of [-3.5, 0, 3.5]) m.win('-z', u, 3.0, 4.0, 1.8, 1.8);
  // mast + footing
  m.boxB(1.8, 0.6, 1.8, 0x9aa1ab, 9.0, 0, 0);
  m.rod([9.0, 0.6, 0], [9.0, 14.2, 0], 0.46, 0.28, 0x6c7a89, 8);
  m.boxB(0.4, 0.4, 4.4, 0xe84a3a, 9.0, 13.5, 0);
  for (const s of [-1, 1]) {
    m.cyl(0.55, 0.55, 0.28, 8, dark, 9.0, 14.2, s * 1.7, [HALF_PI, 0, 0]);
    // cable from station housing up to the mast sheave and beyond
    m.strut([6.2, 6.4, s * 1.7], [9.0, 14.7, s * 1.7], 0.1, 0x20242e);
    m.strut([9.0, 14.7, s * 1.7], [11.6, 15.5, s * 1.7], 0.1, 0x20242e);
    m.boxB(1.0, 1.0, 1.0, dark, 6.5, 5.8, s * 1.7);
  }
  const cableY = (x) => 6.4 + (x - 6.2) * (14.7 - 6.4) / (9.0 - 6.2);
  gondolaCabin(m, 7.1, cableY(7.1), 1.7, 0xe8362f);
  gondolaCabin(m, 8.1, cableY(8.1), -1.7, 0xffc21a);
  return m.build('gondola_station', 4, 'static');
}

function buildWaterTower() {
  const m = new Model();
  m.push(0, 0, 0, 0, 0, 0, 0.94); // scale whole model to ~16.5 m
  const steel = 0x6c7a89, tank = 0x3fb6b0;
  const px = (y) => 3.2 - 0.8 * (y / 10);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    m.strut([sx * 3.2, 0, sz * 3.2], [sx * 2.4, 10.1, sz * 2.4], 0.38, steel);
    m.boxB(0.9, 0.3, 0.9, 0x9aa1ab, sx * 3.2, 0, sz * 3.2);
  }
  for (const y of [3.4, 6.7, 9.7]) {
    const v = px(y);
    m.strut([-v, y, v], [v, y, v], 0.22, steel);
    m.strut([-v, y, -v], [v, y, -v], 0.22, steel);
    m.strut([v, y, -v], [v, y, v], 0.22, steel);
    m.strut([-v, y, -v], [-v, y, v], 0.22, steel);
  }
  // diagonal braces (two lower spans, each face)
  const spans = [[0.2, 3.4], [3.4, 6.7]];
  spans.forEach(([ya, yb]) => {
    const a = px(ya), b = px(yb);
    m.strut([-a, ya, a], [b, yb, b], 0.14, steel);
    m.strut([a, ya, -a], [-b, yb, -b], 0.14, steel);
    m.strut([a, ya, a], [b, yb, -b], 0.14, steel);
    m.strut([-a, ya, -a], [-b, yb, b], 0.14, steel);
  });
  m.cylB(0.25, 0.25, 10.2, 6, 0x9aa3b0);
  // platform + tank
  m.cylB(3.7, 3.7, 0.3, 8, 0x4a525e, 0, 9.9, 0);
  m.cylB(3.2, 3.2, 4.2, 8, tank, 0, 10.2, 0);
  m.cylB(3.3, 3.3, 0.7, 8, 0xffffff, 0, 11.6, 0);
  m.cylB(3.3, 3.3, 0.25, 8, 0xe8362f, 0, 12.4, 0);
  // roof + snow
  const rr = 3.7, rh = 2.2, t = 0.45;
  m.coneB(rr, rh, 8, 0xd9363e, 0, 14.4, 0);
  m.coneB(rr * (1 - t) * 1.07, rh * (1 - t) + 0.04, 8, SNOW, 0, 14.4 + rh * t, 0, null, true);
  m.cylB(0.06, 0.06, 0.8, 5, 0x4a525e, 0, 16.5, 0);
  m.ball(0.22, 0xffd23f, 0, 17.3, 0, null, 0);
  return m.build('water_tower', 4, 'static', { ground: true });
}

function buildRockBig() {
  const m = new Model();
  const rc = rockColor(0x7b8499, 0.45, 9);
  m.ball(3.6, rc, 0, 3.8, 0, [1.0, 1.5, 0.9], 1, 0.26, 11);
  m.ball(2.8, rc, 3.8, 2.2, 1.2, [1.0, 1.2, 1.0], 1, 0.26, 12);
  m.ball(2.5, rc, -3.5, 2.0, 1.6, [1.0, 1.1, 1.0], 1, 0.26, 13);
  m.ball(1.9, rc, 1.0, 1.3, 3.4, [1.0, 0.9, 1.0], 1, 0.24, 14);
  m.ball(1.6, rc, -1.5, 1.1, -3.3, [1.0, 1.0, 1.0], 1, 0.24, 15);
  return m.build('rock_big', 4, 'rock', { ground: true });
}

// ---------------------------------------------------------------------------
// Town buildings
// ---------------------------------------------------------------------------

function buildHouse() {
  const m = new Model();
  const W = 7.2, D = 6, WH = 4.2, y0 = 0.2;
  const wall = 0xa8e6c1, trim = 0xffffff, roofC = 0xd9694a;
  const n = D / 2;
  snowbank(m, W, D, 0.4);
  m.boxB(W, WH, D, wall, 0, y0, 0);
  roof(m, gableHalf(W, 2.6), D, { y: y0 + WH, roofCol: roofC, wallCol: wall, ovh: 0.45, oz: 0.4 });
  // door
  m.boxB(2.2, 0.35, 0.7, 0xb8c0cc, 0, 0, n + 0.35);
  m.fbox('+z', 1.7, 2.5, 0.12, trim, 0, 0.35 + 1.25, n + 0.02);
  m.fbox('+z', 1.3, 2.3, 0.12, 0xc2603a, 0, 0.35 + 1.15, n + 0.06);
  m.fq('+z', 0.5, 0.6, 0x9fd8ff, 0, 1.9, n + 0.13);
  m.fq('+z', 0.12, 0.12, 0xffd23f, 0.42, 1.3, n + 0.13);
  // windows + shutters
  for (const s of [-1, 1]) {
    const u = s * 2.3;
    m.win('+z', u, 2.9, n, 1.3, 1.4, { sill: true });
    m.fbox('+z', 0.4, 1.6, 0.1, 0x6aa6d8, u - 1.0, 2.9, n + 0.05);
    m.fbox('+z', 0.4, 1.6, 0.1, 0x6aa6d8, u + 1.0, 2.9, n + 0.05);
  }
  m.fdisc('+z', 0.68, 8, trim, 0, y0 + WH + 1.0, n + 0.03);
  m.fdisc('+z', 0.52, 8, 0x7cc4ee, 0, y0 + WH + 1.0, n + 0.06);
  for (const f of ['+x', '-x']) m.win(f, 0, 2.9, W / 2, 1.3, 1.4);
  for (const u of [-2.3, 2.3]) m.win('-z', u, 2.9, n, 1.3, 1.4);
  // chimney
  m.boxB(0.95, 3.2, 0.95, 0xb4574a, 2.1, y0 + WH + 0.4, -1.0);
  m.boxB(1.2, 0.25, 1.2, SNOW, 2.1, y0 + WH + 3.6, -1.0);
  return m.build('house', 3, 'building');
}

function buildHouseTall() {
  const m = new Model();
  const W = 5, D = 5, FH = 2.8, F = 3, y0 = 0.2;
  const WH = FH * F;
  const wall = 0xffc1a1, trim = 0xffffff, roofC = 0x3b9aae;
  const n = D / 2;
  snowbank(m, W, D, 0.4);
  m.boxB(W, WH, D, wall, 0, y0, 0);
  for (let f = 1; f < F; f++) m.boxB(W + 0.12, 0.16, D + 0.12, trim, 0, y0 + f * FH - 0.08, 0);
  roof(m, gableHalf(W, 2.1), D, { y: y0 + WH, roofCol: roofC, wallCol: wall, ovh: 0.4, oz: 0.35 });
  // ground floor: door + window
  m.boxB(1.9, 0.35, 0.7, 0xb8c0cc, -1.0, 0, n + 0.35);
  m.fbox('+z', 1.5, 2.4, 0.12, trim, -1.0, 0.35 + 1.2, n + 0.02);
  m.fbox('+z', 1.15, 2.2, 0.12, 0x7b4fa8, -1.0, 0.35 + 1.1, n + 0.06);
  m.win('+z', 1.15, 1.7, n, 1.2, 1.3, { sill: true });
  // upper floors
  for (let f = 1; f < F; f++) {
    const y = y0 + f * FH + 1.5;
    for (const u of [-1.15, 1.15]) m.win('+z', u, y, n, 1.1, 1.4, { sill: f === 1 });
  }
  // balcony on floor 2
  m.boxB(3.4, 0.16, 0.95, trim, 0, y0 + FH + 0.05, n + 0.45);
  m.boxB(3.4, 0.75, 0.08, 0x3b9aae, 0, y0 + FH + 0.21, n + 0.88);
  m.fdisc('+z', 0.55, 8, trim, 0, y0 + WH + 0.95, n + 0.03);
  m.fdisc('+z', 0.42, 8, 0x7cc4ee, 0, y0 + WH + 0.95, n + 0.06);
  for (const f of ['+x', '-x']) for (let k = 0; k < F; k++) m.win(f, 0, y0 + k * FH + 1.6, W / 2, 1.1, 1.4);
  for (let k = 0; k < F; k++) for (const u of [-1.15, 1.15]) m.win('-z', u, y0 + k * FH + 1.6, n, 1.1, 1.4);
  m.boxB(0.8, 2.2, 0.8, 0xb4574a, -1.3, y0 + WH + 0.4, -0.8);
  m.boxB(1.0, 0.22, 1.0, SNOW, -1.3, y0 + WH + 2.6, -0.8);
  return m.build('house_tall', 3, 'building');
}

function buildShop() {
  const m = new Model();
  const W = 7.4, D = 6, WH = 4.4, y0 = 0.2;
  const wall = 0xc9b2f0, trim = 0xffffff;
  const n = D / 2;
  const awn = [0xff5c8a, 0xffffff];
  snowbank(m, W, D, 0.4);
  m.boxB(W, WH, D, wall, 0, y0, 0);
  // false front
  m.boxB(W + 0.2, 1.9, 0.6, wall, 0, y0 + WH - 0.3, n + 0.05);
  m.boxB(W + 0.5, 0.25, 0.9, SNOW, 0, y0 + WH + 1.6, n + 0.05);
  m.fq('+z', 6.6, 1.2, 0x2a3358, 0, y0 + WH + 0.65, n + 0.38);
  for (let i = 0; i < 3; i++) m.fdisc('+z', 0.36, 8, 0xffc933, -1.8 + i * 1.8, y0 + WH + 0.65, n + 0.41);
  roof(m, gableHalf(D, 1.9), W, { y: y0 + WH, ry: HALF_PI, roofCol: 0x7a4e3a, wallCol: wall, ovh: 0.15, oz: 0.2, ts: 0.3, snowInset: 0.2 });
  // awning
  for (let i = 0; i < 7; i++) {
    const x = -3.17 + i * 1.057;
    m.box(1.057, 0.08, 1.7, awn[i % 2], x, 3.88, n + 0.85, [0.33, 0, 0]);
    m.quad(1.057, 0.32, awn[i % 2], x, 3.5, n + 1.62);
  }
  // display window + door
  m.fq('+z', 4.4, 2.3, trim, -1.3, 2.1, n + 0.03);
  m.fq('+z', 4.0, 1.9, 0xaee3ff, -1.3, 2.1, n + 0.06);
  for (const u of [-2.3, -1.3, -0.3]) m.fq('+z', 0.08, 1.9, trim, u, 2.1, n + 0.09);
  m.fbox('+z', 1.5, 2.6, 0.12, trim, 2.55, 0.35 + 1.3, n + 0.02);
  m.fbox('+z', 1.2, 2.4, 0.12, 0x2fb7a6, 2.55, 0.35 + 1.2, n + 0.06);
  m.fq('+z', 0.6, 0.8, 0xaee3ff, 2.55, 1.9, n + 0.13);
  m.boxB(1.9, 0.35, 0.7, 0xb8c0cc, 2.55, 0, n + 0.35);
  for (const f of ['+x', '-x']) for (const u of [-1.4, 1.4]) m.win(f, u, 2.7, W / 2, 1.2, 1.4);
  for (const u of [-2.3, 0, 2.3]) m.win('-z', u, 2.7, n, 1.2, 1.4);
  m.boxB(0.8, 2.0, 0.8, 0xb4574a, -2.4, y0 + WH + 0.3, -1.0);
  m.boxB(1.0, 0.22, 1.0, SNOW, -2.4, y0 + WH + 2.3, -1.0);
  return m.build('shop', 3, 'building');
}

function buildApartment() {
  const m = new Model();
  const W = 12, D = 8, F = 5, FH = 2.9, y0 = 0.5;
  const WH = F * FH;
  const wall = 0xffe08a, acc = 0xe0b34a;
  const n = D / 2;
  m.boxB(W + 0.4, y0, D + 0.4, 0x9aa1ab);
  m.boxB(W, WH, D, wall, 0, y0, 0);
  // accent stripes
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) m.boxB(0.6, WH, 0.6, acc, sx * (W / 2 - 0.27), y0, sz * (D / 2 - 0.27));
  m.boxB(W + 0.2, 0.3, D + 0.2, acc, 0, y0 + 2 * FH - 0.15, 0);
  // parapet + rooftop
  m.boxB(W + 0.5, 0.55, D + 0.5, 0xf4f1e8, 0, y0 + WH, 0);
  m.boxB(W - 0.2, 0.4, D - 0.2, SNOW, 0, y0 + WH + 0.3, 0);
  m.boxB(3.2, 2.0, 3.0, acc, -3.2, y0 + WH + 0.5, -1.0);
  m.boxB(3.4, 0.3, 3.2, SNOW, -3.2, y0 + WH + 2.5, -1.0);
  m.cylB(0.7, 0.7, 1.4, 6, 0x6c7a89, 3.0, y0 + WH + 0.5, 1.0);
  m.boxB(1.8, 0.2, 1.8, SNOW, 3.0, y0 + WH + 1.9, 1.0);
  // entrance
  m.boxB(2.8, 0.3, 1.0, 0xb8c0cc, 0, 0, n + 0.5);
  m.fbox('+z', 2.4, 2.7, 0.14, 0xffffff, 0, y0 + 1.35, n + 0.03);
  m.fbox('+z', 1.0, 2.5, 0.12, 0x2f7de1, -0.55, y0 + 1.25, n + 0.08);
  m.fbox('+z', 1.0, 2.5, 0.12, 0x2f7de1, 0.55, y0 + 1.25, n + 0.08);
  m.boxB(3.4, 0.2, 1.4, 0xd9363e, 0, y0 + 3.0, n + 0.7);
  m.boxB(3.5, 0.14, 1.5, SNOW, 0, y0 + 3.2, n + 0.7);
  // windows
  for (const u of [-3.9, 3.9]) m.win('+z', u, y0 + 1.5, n, 1.4, 1.5);
  for (let f = 1; f < F; f++) {
    const y = y0 + f * FH + 1.5;
    for (const u of [-4.2, -1.4, 1.4, 4.2]) m.win('+z', u, y, n, 1.3, 1.5, { glass: (f + (u > 0)) % 3 === 0 ? 0xffe9a8 : 0x7cc4ee });
  }
  for (const f of ['+x', '-x']) for (let k = 0; k < F; k++) for (const u of [-1.8, 1.8]) m.win(f, u, y0 + k * FH + 1.5, W / 2, 1.3, 1.5);
  for (let k = 0; k < F; k++) for (const u of [-4.2, -1.4, 1.4, 4.2]) m.win('-z', u, y0 + k * FH + 1.5, n, 1.3, 1.5);
  // balconies
  for (const f of [2, 4]) for (const s of [-1, 1]) {
    const y = y0 + f * FH;
    m.boxB(2.2, 0.16, 1.0, acc, s * 2.8, y, n + 0.45);
    m.boxB(2.2, 0.7, 0.08, 0xffffff, s * 2.8, y + 0.16, n + 0.9);
  }
  snowbank(m, W, D, 0.35);
  return m.build('apartment', 4, 'building');
}

function buildClocktower() {
  const m = new Model();
  const cream = 0xefe3c6, cream2 = 0xf6ecd3, stone = 0x9aa1ab, teal = 0x2f9e9e, navy = 0x2a3358;
  m.boxB(7.2, 1.0, 7.2, stone);
  m.boxB(6.2, 6.0, 6.2, cream, 0, 1.0, 0);
  m.boxB(6.5, 0.4, 6.5, stone, 0, 6.8, 0);
  m.boxB(5.0, 8.5, 5.0, cream2, 0, 7.0, 0);
  m.boxB(5.8, 5.0, 5.8, cream, 0, 15.5, 0);
  m.boxB(6.4, 0.5, 6.4, stone, 0, 20.5, 0);
  // door + base windows
  m.fbox('+z', 2.0, 3.2, 0.14, 0xffffff, 0, 1.0 + 1.6, 3.15);
  m.fbox('+z', 1.6, 3.0, 0.14, 0x6b3f2a, 0, 1.0 + 1.5, 3.2);
  m.boxB(2.8, 0.3, 1.0, 0xb8c0cc, 0, 0, 3.5);
  for (const f of ['+z', '-z', '+x', '-x']) {
    const nn = 2.5;
    for (const y of [10.0, 13.5]) {
      m.fq(f, 0.9, 1.8, 0xffffff, 0, y, nn + 0.03);
      m.fq(f, 0.6, 1.5, navy, 0, y, nn + 0.06);
    }
    clockFace(m, f, 0, 18.0, 2.9, 2.0);
  }
  for (const f of ['+x', '-x']) for (const u of [-1.4, 1.4]) m.win(f, u, 3.6, 3.1, 1.0, 1.6);
  for (const u of [-1.4, 1.4]) m.win('-z', u, 3.6, 3.1, 1.0, 1.6);
  m.win('+z', -2.0, 3.6, 3.1, 0.8, 1.6);
  m.win('+z', 2.0, 3.6, 3.1, 0.8, 1.6);
  // roof: pyramid with snow
  const R = 3.5 * Math.SQRT2 * 1.0, H = 4.2, t = 0.4;
  m.coneB(R, H, 4, teal, 0, 21.0, 0, [0, PI / 4, 0]);
  m.coneB(R * (1 - t) * 1.05, H * (1 - t) + 0.04, 4, SNOW, 0, 21.0 + H * t, 0, [0, PI / 4, 0], true);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    m.boxB(0.5, 0.9, 0.5, cream2, sx * 2.9, 21.0, sz * 2.9);
    m.coneB(0.5 * Math.SQRT2 * 0.6, 0.9, 4, teal, sx * 2.9, 21.9, sz * 2.9, [0, PI / 4, 0]);
  }
  m.cylB(0.1, 0.1, 1.2, 5, 0xffd23f, 0, 25.0, 0);
  m.ball(0.3, 0xffd23f, 0, 26.2, 0, null, 0);
  snowbank(m, 7.2, 7.2, 0.35);
  return m.build('clocktower', 4, 'building');
}

function buildBarn() {
  const m = new Model();
  const W = 9, D = 11, WH = 4.4, y0 = 0.2;
  const red = 0xd93a2e, redD = 0xb02a20, trim = 0xffffff, slate = 0x5d6578;
  const n = D / 2;
  snowbank(m, W, D, 0.4);
  m.boxB(W, WH, D, red, 0, y0, 0);
  const half = [[W / 2, 0], [3.0, 2.2], [0, 3.6]];
  roof(m, half, D, { y: y0 + WH, roofCol: slate, wallCol: red, ovh: 0.45, oz: 0.5, t: 0.2, ts: 0.3, snowInset: 0.4 });
  // corner + base trim
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) m.boxB(0.3, WH, 0.3, trim, sx * (W / 2 - 0.1), y0, sz * (n - 0.1));
  // big double doors with X-bracing
  m.fq('+z', 3.9, 3.9, trim, 0, 0.4 + 1.95, n + 0.03);
  for (const s of [-1, 1]) {
    m.fq('+z', 1.8, 3.7, redD, s * 0.93, 0.4 + 1.85, n + 0.06);
    const ang = Math.atan2(1.8, 3.7);
    const len = Math.hypot(1.8, 3.7) * 0.97;
    m.fq('+z', 0.16, len, trim, s * 0.93, 0.4 + 1.85, n + 0.09, ang);
    m.fq('+z', 0.16, len, trim, s * 0.93, 0.4 + 1.85, n + 0.09, -ang);
  }
  // hayloft hatch
  m.fq('+z', 1.7, 1.5, trim, 0, y0 + WH + 1.3, n + 0.03);
  m.fq('+z', 1.3, 1.1, 0x3a2f2a, 0, y0 + WH + 1.3, n + 0.06);
  m.fq('+z', 0.1, 1.1, trim, 0, y0 + WH + 1.3, n + 0.09);
  m.fq('-z', 1.7, 1.5, trim, 0, y0 + WH + 1.3, n + 0.03);
  m.fq('-z', 1.3, 1.1, 0x3a2f2a, 0, y0 + WH + 1.3, n + 0.06);
  m.fq('-z', 2.2, 2.4, trim, 0, 0.4 + 1.2, n + 0.03);
  m.fq('-z', 1.9, 2.1, redD, 0, 0.4 + 1.05, n + 0.06);
  // side windows
  for (const f of ['+x', '-x']) for (const u of [-3, 0, 3]) {
    m.fq(f, 1.5, 1.3, trim, u, 2.8, W / 2 + 0.03);
    m.fq(f, 1.1, 0.9, 0x3a2f2a, u, 2.8, W / 2 + 0.06);
  }
  return m.build('barn', 3, 'building');
}

// ---------------------------------------------------------------------------
// Late-game giants (tiers 6-8): city / mountain / planet setpieces + the robot enemy + the rival snowball
// ---------------------------------------------------------------------------

function buildSkyscraper() {
  const m = new Model();
  const glass = [0x5fa8d8, 0x4a93c9, 0x76b9e0];
  let y = 0.4;
  m.boxB(8, 0.4, 8, 0x9aa1ab);
  const tiers = [[6, 14], [5, 12], [3.8, 9], [2.6, 6]];
  tiers.forEach(([w, h], i) => {
    m.boxB(w, h, w, glass[i % 3], 0, y, 0);
    for (let k = 1; k < h / 2.2; k++) m.boxB(w + 0.12, 0.25, w + 0.12, 0xdfe8f2, 0, y + k * 2.2, 0);
    m.boxB(w + 0.3, 0.4, w + 0.3, SNOW, 0, y + h, 0);
    y += h + 0.4;
  });
  m.cylB(0.12, 0.2, 9, 5, 0xd9363e, 0, y, 0);
  return m.build('skyscraper', 4, 'building', { ground: true });
}

function buildStadium() {
  const m = new Model();
  m.cylB(15, 16, 5, 14, 0xc9ced8, 0, 0, 0);
  m.cylB(14.6, 14.6, 0.1, 14, SNOW, 0, 5, 0);
  m.cylB(11, 11, 0.2, 14, 0x3fae5a, 0, 4.9, 0);
  m.cylB(5, 5, 0.25, 12, 0xf4f7ff, 0, 5.0, 0);
  m.cylB(3.5, 3.5, 0.3, 12, 0x3fae5a, 0, 5.0, 0);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    m.rod([Math.cos(a) * 15, 4, Math.sin(a) * 15], [Math.cos(a) * 15, 17, Math.sin(a) * 15], 0.4, 0.3, 0x6c7a89, 5);
    m.boxB(2.2, 1.1, 0.6, 0xfff3a8, Math.cos(a) * 15, 17, Math.sin(a) * 15, [0, -a, 0]);
  }
  return m.build('stadium', 4, 'building', { ground: true });
}

function buildCastle() {
  const m = new Model();
  const st = 0xb9b2a5, roofC = 0xc0392b;
  m.boxB(16, 5, 16, st, 0, 0, 0);
  m.boxB(16.4, 0.5, 16.4, SNOW, 0, 5, 0);
  m.boxB(7, 11, 7, 0xc7c0b3, 0, 5, 0);
  m.coneB(5.4, 6, 4, roofC, 0, 16, 0, [0, Math.PI / 4, 0]);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    m.cylB(2.1, 2.3, 11, 8, st, sx * 8, 0, sz * 8);
    m.coneB(2.9, 4, 8, roofC, sx * 8, 11, sz * 8);
  }
  m.boxB(3, 3.6, 0.5, 0x3a2f2a, 0, 0, 8.1);
  m.boxB(0.12, 3, 0.12, 0x333333, 0, 22, 0);
  m.boxB(1.6, 1, 0.08, 0xe0b34a, 0.8, 24.2, 0);
  return m.build('castle', 4, 'building', { ground: true });
}

function buildShip() {
  const m = new Model();
  m.tboxB(8, 3.4, 22, 0x2f5f8f, 0, 0.6, 0, 1.0, 1.0);
  m.boxB(8.3, 0.4, 22.3, 0xd9363e, 0, 0.3, 0);
  m.boxB(8.2, 0.4, 22.2, 0xf4f7ff, 0, 4.0, 0);
  m.boxB(6, 3, 8, 0xf4f7ff, 0, 4.4, -2);
  m.boxB(5, 2.2, 5, 0xe9edf3, 0, 7.4, -2);
  for (const z of [-1, -4]) m.cylB(1, 1.2, 3.6, 8, 0xe0b34a, 0, 9.4, z);
  m.cone(3.4, 6, 4, 0x2f5f8f, 0, 3.4, 13, [HALF_PI, 0, 0]);
  return m.build('ship', 4, 'building', { ground: true });
}

function buildAirplane() {
  const m = new Model();
  const body = 0xf4f7ff;
  m.cyl(1.5, 1.5, 17, 8, body, 0, 3.4, 0, [HALF_PI, 0, 0]);
  m.cone(1.5, 3.4, 8, 0xd9363e, 0, 3.4, 10.2, [HALF_PI, 0, 0]);
  m.cone(1.5, 4, 8, body, 0, 3.4, -10.5, [-HALF_PI, 0, 0]);
  m.boxB(20, 0.35, 4, 0xdfe8f2, 0, 3.2, 1);
  m.boxB(7, 0.3, 2.2, 0xdfe8f2, 0, 3.8, -8.5);
  m.boxB(0.35, 4.5, 3, 0xd9363e, 0, 4.2, -8.5);
  for (const s of [-1, 1]) { m.cylB(0.7, 0.7, 2.6, 8, 0x6c7a89, s * 5.5, 1.7, 2, [HALF_PI, 0, 0]); m.cylB(0.35, 0.35, 1.7, 5, 0x333a46, s * 2.2, 0, 3); }
  m.boxB(1.0, 1.5, 1.0, 0x6c7a89, 0, 0, -3);
  return m.build('airplane', 4, 'building', { ground: true });
}

function buildWindTurbine() {
  const m = new Model();
  m.cylB(0.55, 1.0, 22, 8, 0xf4f7ff, 0, 0, 0);
  m.boxB(1.8, 1.8, 4, 0xdfe8f2, 0, 22, 0);
  m.ball(0.9, 0xd9363e, 0, 23, 2.2, null, 0);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.4;
    m.rod([0, 23, 2.4], [Math.sin(a) * 11, 23 + Math.cos(a) * 11, 2.4], 0.4, 0.12, 0xf4f7ff, 4);
  }
  return m.build('wind_turbine', 4, 'building', { ground: true });
}

function buildRadioTower() {
  const m = new Model();
  const H = 38, r0 = 3.4;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) m.strut([sx * r0, 0, sz * r0], [sx * 0.3, H, sz * 0.3], 0.35, 0xd9363e);
  for (let k = 1; k < 6; k++) {
    const y = k * (H / 6), v = r0 + (0.3 - r0) * (y / H);
    const c = k % 2 ? 0xf4f7ff : 0xd9363e;
    m.strut([-v, y, v], [v, y, v], 0.2, c);
    m.strut([-v, y, -v], [v, y, -v], 0.2, c);
    m.strut([v, y, -v], [v, y, v], 0.2, 0xdfe8f2);
    m.strut([-v, y, -v], [-v, y, v], 0.2, 0xdfe8f2);
  }
  m.cylB(1.6, 1.6, 1.4, 8, 0xdfe8f2, 0, 26, 0);
  m.cylB(0.1, 0.25, 8, 5, 0xd9363e, 0, H, 0);
  return m.build('radio_tower', 4, 'building', { ground: true });
}

function buildFerrisWheel() {
  const m = new Model();
  const R = 10, cy = 12, N = 14, pal = [0xff4d5e, 0xffc83a, 0x3ddc84, 0x3fa7ff];
  for (let i = 0; i < N; i++) {
    const a0 = (i / N) * Math.PI * 2, a1 = ((i + 1) / N) * Math.PI * 2;
    m.rod([Math.cos(a0) * R, cy + Math.sin(a0) * R, 0], [Math.cos(a1) * R, cy + Math.sin(a1) * R, 0], 0.25, 0.25, 0xf4f7ff, 5);
    m.rod([0, cy, 0], [Math.cos(a0) * R, cy + Math.sin(a0) * R, 0], 0.15, 0.15, 0xdfe8f2, 4);
    m.boxB(1.6, 1.6, 1.6, pal[i % 4], Math.cos(a0) * R, cy + Math.sin(a0) * R - 1.7, 0);
  }
  for (const sx of [-4, 4]) for (const sz of [-1.5, 1.5]) m.strut([sx, 0, sz], [0, cy, 0], 0.5, 0x6c7a89);
  return m.build('ferris_wheel', 4, 'building', { ground: true });
}

function buildRocketPad() {
  const m = new Model();
  m.cylB(7, 8, 1.2, 10, 0x6c7a89, 0, 0, 0);
  m.cylB(1.7, 1.9, 22, 10, 0xf4f7ff, 0, 1.2, 0);
  m.cylB(1.72, 1.72, 2, 10, 0xd9363e, 0, 9, 0);
  m.coneB(1.7, 6, 10, 0xd9363e, 0, 23.2, 0);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    m.boxB(0.4, 5, 1.8, 0xd9363e, Math.cos(a) * 2.2, 1.2, Math.sin(a) * 2.2, [0, -a, 0]);
  }
  m.boxB(1.4, 24, 1.4, 0x6c7a89, 5.5, 1.2, 0);
  m.boxB(3.6, 0.5, 0.5, 0x6c7a89, 3.6, 20, 0);
  return m.build('rocket_pad', 4, 'building', { ground: true });
}

// enemy: ice robot (kind 'enemy' is outside the food catalog)
function buildRobot() {
  const m = new Model();
  const ice = 0x9fd6f2, dark = 0x3b5b7a;
  for (const s of [-1, 1]) {
    m.boxB(1.3, 3, 1.4, dark, s * 1.1, 0, 0);
    m.boxB(1.8, 0.5, 2.2, ice, s * 1.1, 0, 0.3);
    m.boxB(1.1, 3.4, 1.1, ice, s * 2.7, 3.3, 0);
    m.boxB(1.4, 1.4, 1.4, 0xd9363e, s * 2.7, 2.1, 0.4);
  }
  m.boxB(4.2, 3.6, 2.6, ice, 0, 3, 0);
  m.boxB(2.4, 1.6, 0.2, 0xff5a3a, 0, 4.2, 1.35);
  m.boxB(2.2, 1.8, 2, 0xdfe8f2, 0, 6.6, 0);
  m.boxB(0.5, 0.5, 0.2, 0xff3b3b, -0.55, 7.2, 1.05);
  m.boxB(0.5, 0.5, 0.2, 0xff3b3b, 0.55, 7.2, 1.05);
  m.cylB(0.1, 0.12, 1.4, 4, dark, 0, 8.4, 0);
  return m.build('robot', 3, 'enemy', { ground: true });
}

// the rival snowball: a grumpy ball with eyes and brows (radius ~1, scaled to the ball's size)
function buildRivalBall() {
  const m = new Model();
  m.ball(1, 0xeaf3ff, 0, 1, 0, null, 1, 0.05, 3);
  m.ball(0.2, 0x1b2230, -0.38, 1.35, 0.9, null, 0);
  m.ball(0.2, 0x1b2230, 0.38, 1.35, 0.9, null, 0);
  m.boxB(0.5, 0.1, 0.1, 0x1b2230, -0.38, 1.62, 0.92, [0, 0, 0.45]);
  m.boxB(0.5, 0.1, 0.1, 0x1b2230, 0.38, 1.62, 0.92, [0, 0, -0.45]);
  m.cone(0.14, 0.45, 5, 0xff8a2a, 0, 1.05, 1.0, [HALF_PI, 0, 0]);
  return m.build('rival_ball', 3, 'ball');
}

// ÇIĞ DAĞLAR: breakable crate (1.2 m wooden box with corner posts and a plank cross) and its golden twin.
// kind 'obstacle' keeps it out of the endless slope's food / obstacle catalogue: only the level generator places it.
function crateModel(name, board, post, trim) {
  const m = new Model();
  const w = 1.2;
  m.boxB(w, w, w, board, 0, 0, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) m.boxB(0.16, w + 0.04, 0.16, post, sx * (w / 2 - 0.06), -0.02, sz * (w / 2 - 0.06));
  for (const y of [0, w - 0.14]) {
    m.boxB(w + 0.04, 0.14, 0.12, post, 0, y, w / 2 - 0.02);
    m.boxB(w + 0.04, 0.14, 0.12, post, 0, y, -w / 2 + 0.02);
    m.boxB(0.12, 0.14, w + 0.04, post, w / 2 - 0.02, y, 0);
    m.boxB(0.12, 0.14, w + 0.04, post, -w / 2 + 0.02, y, 0);
  }
  // plank cross on the front and back faces
  for (const sz of [-1, 1]) {
    m.boxB(0.1, 1.5, 0.05, trim, 0, -0.15, sz * (w / 2 + 0.02), [0, 0, 0.78]);
    m.boxB(0.1, 1.5, 0.05, trim, 0, -0.15, sz * (w / 2 + 0.02), [0, 0, -0.78]);
  }
  m.boxB(w * 0.9, 0.06, w * 0.9, trim, 0, w, 0);
  return m.build(name, 1, 'obstacle');
}
function buildCrate() { return crateModel('crate', 0xd49a58, 0x8a5a2b, 0xa8723a); }
function buildCrateGold() { return crateModel('crate_gold', 0xffc928, 0xd69a10, 0xfff0a0); }

// ---------------------------------------------------------------------------
// Library
// ---------------------------------------------------------------------------

const BUILDERS = [
  buildPebble, buildBushSmall, buildPenguin, buildRabbit, buildGift, buildTrafficCone,
  buildPerson, buildSkier, buildSnowman, buildSled, buildBench, buildFence, buildPineSmall,
  buildCar, buildCarBlue, buildSnowmobile, buildDeer, buildKiosk, buildPine, buildYeti, buildBoulder,
  buildCabin, buildBus, buildLiftPylon, buildTruck, buildPineBig,
  buildHotel, buildGondolaStation, buildWaterTower, buildRockBig,
  buildHouse, buildHouseTall, buildShop, buildApartment, buildClocktower, buildBarn,
  buildSkyscraper, buildStadium, buildCastle, buildShip, buildAirplane, buildWindTurbine, buildRadioTower, buildFerrisWheel, buildRocketPad, buildRobot, buildRivalBall, buildCrate, buildCrateGold,
];

/** Build every prop. Returns { [name]: { name, geometry, radius, height, tier, kind } }. */
export function buildPropLibrary() {
  const lib = {};
  for (const b of BUILDERS) {
    const def = b();
    lib[def.name] = def;
  }
  return lib;
}
