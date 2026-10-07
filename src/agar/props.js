// KARTOPU ARENA - CIG-style prop food. A seeded, themed prop layout (villages, forests, parking lots, ski resorts, downtown,
// rock fields) that is eaten with the CIG rules: a prop is edible when it is small enough for the ball, otherwise it is an obstacle
// (or smashed when it is only a little too big). Eaten props fly into the ball (visible suction), stick to its surface (katamari)
// and respawn later. Everything is instanced per prop type, culled by the camera view and allocation free per frame.
// Online: the layout comes from the room seed (same on every machine); the host owns which props are alive and sends deltas.
import * as THREE from 'three';
import { mulberry } from './terrain.js';
import { CFG, MASS, fallbackMass } from '../config.js';

export const SK = 2.7; // arena metres per CIG metre (an arena start ball r=1.47 is a CIG start ball r=0.55)
export const TIER_NAMES = CFG.tierNames;
// CIG ball radius edges -> arena mass thresholds (mass = (r / 0.3)^2)
export const TIER_M = [0].concat(CFG.tierEdges.map((e) => Math.round(Math.pow((e * SK) / 0.3, 2))));
export const TIER_HINT = ['', 'Arabaları ve ağaçları yutabilirsin', 'Evler ve otobüsler artık yemek', 'Apartmanlar ve oteller menüde', 'Dev kayalar, köyler... her şey senin!'];
export const tierOfM = (m) => { let t = 0; for (let i = 1; i < TIER_M.length; i++) if (m >= TIER_M[i]) t = i; return t; };

const PGS = 40, PGN = 55; // same grid as the arena food grid
const PMAX = 2800, STK = 32, PULLCAP = 96, EXTRA = 72;
const KP = 1.0, CAPG = 0.15; // gain = tons * 253 / sqrt(mass) (marginal CIG volume -> arena mass), at most 15% of the ball per prop

const G_SMALL = ['pebble', 'pebble', 'bush_small', 'bush_small', 'penguin', 'rabbit', 'gift', 'traffic_cone', 'k_present_a', 'k_present_b', 'k_candy_cane', 'k_rock_small', 'person', 'person', 'skier', 'snowman', 'k_snowman', 'k_gingerbread'];
const G_MID = ['sled', 'bench', 'fence', 'pine_small', 'pine_small', 'k_pine_small', 'car', 'car_blue', 'snowmobile', 'deer', 'kiosk', 'pine', 'yeti', 'boulder', 'k_tent', 'k_snowman_hat', 'k_sedan', 'k_taxi', 'k_tent_small'];
const G_HOUSE = ['house', 'house_tall', 'shop', 'barn', 'cabin', 'house', 'shop', 'k_house_a', 'k_house_b', 'k_house_c', 'k_house_d', 'k_house_e', 'k_house_f', 'k_house_g', 'k_house_h', 'k_house_i', 'k_house_j', 'k_house_k', 'k_house_l'];
const G_CAR = ['car', 'car_blue', 'car', 'car_blue', 'k_sedan', 'k_sports', 'k_suv', 'k_taxi', 'k_police', 'k_van', 'k_pickup', 'k_ambulance', 'k_tractor'];
const G_BIGCAR = ['bus', 'truck', 'bus', 'truck', 'k_truck', 'k_delivery', 'k_garbage_truck', 'k_firetruck'];
const G_TREE = ['pine_small', 'pine_small', 'pine', 'pine', 'k_pine_small', 'k_pine_a', 'k_pine_b', 'k_pine_c', 'k_tree_small'];
const G_TREEB = ['pine_big', 'pine_big', 'k_pine_a_big', 'k_pine_b_big', 'k_pine_c_big'];
const G_ROCK = ['boulder', 'k_rock_a', 'k_rock_b', 'k_rock_c', 'k_rock_d', 'k_rock_snow'];
const G_DOWN = ['apartment', 'apartment', 'hotel', 'clocktower', 'water_tower', 'house_tall', 'apartment', 'shop'];
const EXTRA_NAMES = ['rock_big', 'hotel', 'apartment', 'clocktower', 'gondola_station', 'water_tower', 'lift_pylon', 'cabin', 'sled', 'skier', 'snowmobile', 'kiosk', 'k_pine_a_big'];
const NAMES = Array.from(new Set([].concat(G_SMALL, G_MID, G_HOUSE, G_CAR, G_BIGCAR, G_TREE, G_TREEB, G_ROCK, G_DOWN, EXTRA_NAMES)));
const ID = new Map();
NAMES.forEach((n, i) => ID.set(n, i));
const NT = NAMES.length;

const clampN = (v, a, b) => (v < a ? a : v > b ? b : v);

// translation * scale * rotation(q)
function wmq(a, p, x, y, z, sx, sy, sz, qx, qy, qz, qw) {
  const xx = qx * qx, yy = qy * qy, zz = qz * qz, xy = qx * qy, xz = qx * qz, yz = qy * qz, wx = qw * qx, wy = qw * qy, wz = qw * qz;
  a[p] = sx * (1 - 2 * (yy + zz)); a[p + 1] = sy * 2 * (xy + wz); a[p + 2] = sz * 2 * (xz - wy); a[p + 3] = 0;
  a[p + 4] = sx * 2 * (xy - wz); a[p + 5] = sy * (1 - 2 * (xx + zz)); a[p + 6] = sz * 2 * (yz + wx); a[p + 7] = 0;
  a[p + 8] = sx * 2 * (xz + wy); a[p + 9] = sy * 2 * (yz - wx); a[p + 10] = sz * (1 - 2 * (xx + yy)); a[p + 11] = 0;
  a[p + 12] = x; a[p + 13] = y; a[p + 14] = z; a[p + 15] = 1;
}
// yaw rotation + uniform scale
function wmy(a, p, x, y, z, s, c, sn) {
  a[p] = s * c; a[p + 1] = 0; a[p + 2] = -s * sn; a[p + 3] = 0;
  a[p + 4] = 0; a[p + 5] = s; a[p + 6] = 0; a[p + 7] = 0;
  a[p + 8] = s * sn; a[p + 9] = 0; a[p + 10] = s * c; a[p + 11] = 0;
  a[p + 12] = x; a[p + 13] = y; a[p + 14] = z; a[p + 15] = 1;
}

const _q1 = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _v1 = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0), _ax = new THREE.Vector3();
const _o = { x: 0, y: 0, z: 0 };
/** rotate (vx,vy,vz) by the quaternion (qx,qy,qz,qw) into _o */
function rotQ(qx, qy, qz, qw, vx, vy, vz) {
  const tx = 2 * (qy * vz - qz * vy), ty = 2 * (qz * vx - qx * vz), tz = 2 * (qx * vy - qy * vx);
  _o.x = vx + qw * tx + (qy * tz - qz * ty);
  _o.y = vy + qw * ty + (qz * tx - qx * tz);
  _o.z = vz + qw * tz + (qx * ty - qy * tx);
}

export class ArenaProps {
  constructor(game, scene, lib, R, maxM) {
    this.g = game; this.scene = scene; this.lib = lib || {}; this.R = R; this.maxM = maxM;
    this.mat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
    this.n = 0;
    this.prx = new Float32Array(PMAX); this.prz = new Float32Array(PMAX); this.pcs = new Float32Array(PMAX); this.psn = new Float32Array(PMAX);
    this.prs = new Float32Array(PMAX); this.prr = new Float32Array(PMAX); this.pre = new Float32Array(PMAX); this.prc = new Float32Array(PMAX); this.prm = new Float32Array(PMAX);
    this.prt = new Uint8Array(PMAX); this.pra = new Uint8Array(PMAX); this.prw = new Float32Array(PMAX);
    this.pnext = new Int32Array(PMAX); this.phead = new Int32Array(PGN * PGN).fill(-1);
    this.pdead = new Int32Array(PMAX); this.ndead = 0;
    this.pdm = new Uint8Array(PMAX); this.pdl = new Int32Array(PMAX); this.pdn = 0;
    // per type
    this.tdef = new Array(NT).fill(null); this.tmesh = new Array(NT).fill(null);
    this.tcount = new Int32Array(NT); this.tcap = new Int32Array(NT); this.tw = new Int32Array(NT); this.tprev = new Int32Array(NT);
    this.thx = new Float32Array(NT); this.thz = new Float32Array(NT); this.tr = new Float32Array(NT); this.th = new Float32Array(NT); this.tmass = new Float32Array(NT);
    this.defT = 0;
    // suction (flying props)
    this.npl = 0;
    this.plProp = new Int32Array(PULLCAP); this.plT = new Uint8Array(PULLCAP); this.plCell = new Int16Array(PULLCAP); this.plOwn = new Int16Array(PULLCAP);
    this.plX = new Float32Array(PULLCAP); this.plY = new Float32Array(PULLCAP); this.plZ = new Float32Array(PULLCAP); this.plS = new Float32Array(PULLCAP);
    this.plYaw = new Float32Array(PULLCAP); this.plSpin = new Float32Array(PULLCAP); this.plArc = new Float32Array(PULLCAP); this.plLift = new Float32Array(PULLCAP);
    this.plTilt = new Float32Array(PULLCAP); this.plTime = new Float32Array(PULLCAP); this.plDur = new Float32Array(PULLCAP);
    // katamari: props stuck on every owner's snowball
    const NO = game.owners.length;
    this.stN = new Uint8Array(NO); this.stT = new Uint8Array(NO * STK); this.stP = new Float32Array(NO * STK * 3); this.stQ = new Float32Array(NO * STK * 4);
    this.stS = new Float32Array(NO * STK); this.stTop = new Float32Array(NO * STK);
    // view box (set every render): visual effects are only spent on what the camera can see
    this.vcx = 0; this.vhx = 1e9; this.vz0 = -1e9; this.vz1 = 1e9;
    this.combo = 0; this.comboAt = -9;
    this.tmpT = { x: 0, z: 0, d: 0, g: 0 };
    this.refreshDefs();
  }

  // ------------------------------------------------------------------ prop types (meshes are created as soon as the model exists in the library)
  refreshDefs() {
    let any = false;
    for (let t = 0; t < NT; t++) {
      if (this.tdef[t]) continue;
      const d = this.lib[NAMES[t]];
      if (!d || !d.geometry) continue;
      this.tdef[t] = d;
      const geo = d.geometry;
      if (!geo.boundingBox) geo.computeBoundingBox();
      const b = geo.boundingBox;
      this.thx[t] = Math.max(Math.abs(b.min.x), Math.abs(b.max.x)); this.thz[t] = Math.max(Math.abs(b.min.z), Math.abs(b.max.z));
      this.tr[t] = d.radius || 1; this.th[t] = d.height || b.max.y;
      const m = MASS[NAMES[t]];
      this.tmass[t] = m !== undefined ? m : fallbackMass(this.tr[t]);
      this.setupType(t);
      any = true;
    }
    return any;
  }

  /** (re)compute the per prop numbers of one type and create its instanced mesh */
  setupType(t) {
    const cap = this.tcount[t] + EXTRA;
    this.tcap[t] = cap;
    const mesh = new THREE.InstancedMesh(this.tdef[t].geometry, this.mat, cap);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.frustumCulled = false; mesh.count = 0; mesh.visible = false; mesh.userData.keepGeo = true;
    this.scene.add(mesh);
    this.tmesh[t] = mesh;
    for (let i = 0; i < this.n; i++) if (this.prt[i] === t) this.setupProp(i);
  }

  setupProp(i) {
    const t = this.prt[i], s = this.prs[i];
    if (!this.tdef[t]) { this.pre[i] = 1e9; this.prc[i] = 0; this.prr[i] = 0; this.prm[i] = 0; return; }
    this.prr[i] = this.tr[t] * s;
    this.pre[i] = this.tr[t] * 0.7 * s; // CIG contactK: the edible size of a prop
    this.prc[i] = 0.45 * (this.thx[t] + this.thz[t]) * s * 0.9; // footprint circle used as an obstacle
    this.prm[i] = this.tmass[t];
  }

  // ------------------------------------------------------------------ layout
  gen(seed) {
    const R = this.R;
    const rng = mulberry((seed ^ 0x5bd1e995) | 0);
    const rr = (a, b) => a + rng() * (b - a);
    const pick = (arr) => arr[(rng() * arr.length) | 0];
    this.n = 0; this.ndead = 0; this.pdn = 0; this.pdm.fill(0); this.npl = 0; this.stN.fill(0);
    this.phead.fill(-1);
    this.tcount.fill(0);
    const add = (name, x, z, yaw, k) => {
      const t = ID.get(name);
      if (t === undefined || this.n >= PMAX || x * x + z * z > (R - 30) * (R - 30)) return;
      const i = this.n++;
      this.prx[i] = x; this.prz[i] = z; this.prt[i] = t; this.prs[i] = SK * (k || 1);
      this.pcs[i] = Math.cos(yaw); this.psn[i] = Math.sin(yaw); this.pra[i] = 1; this.prw[i] = 0;
      this.tcount[t]++;
    };
    const centers = [];
    const place = (ext, dLo, dHi) => {
      for (let tr = 0; tr < 50; tr++) {
        const a = rng() * 6.2832, d = rr(dLo, dHi);
        const x = Math.cos(a) * d, z = Math.sin(a) * d;
        if (d + ext > R - 35) continue;
        let ok = true;
        for (let k = 0; k < centers.length; k++) { const c = centers[k]; if (Math.hypot(c.x - x, c.z - z) < c.e + ext + 40) { ok = false; break; } }
        if (!ok) continue;
        const c = { x, z, e: ext };
        centers.push(c);
        return c;
      }
      return null;
    };
    // --- starter meadow: plenty of tier 1 food around the middle of the map
    for (let k = 0; k < 110; k++) { const a = rng() * 6.2832, d = rr(15, 190); add(pick(G_SMALL), Math.cos(a) * d, Math.sin(a) * d, rr(0, 6.28), rr(0.9, 1.2)); }
    // --- villages
    const village = (cx, cz, big) => {
      const nh = big ? 22 : 10;
      for (let k = 0; k < nh; k++) {
        const ang = (k / nh) * 6.2832 + rr(-0.1, 0.1), rad = (k % 2 ? (big ? 72 : 42) : (big ? 100 : 64)) + rr(-4, 4);
        add(pick(G_HOUSE), cx + Math.cos(ang) * rad, cz + Math.sin(ang) * rad, Math.atan2(-Math.cos(ang), -Math.sin(ang)) + rr(-0.12, 0.12), rr(0.92, 1.1));
      }
      add(big ? 'hotel' : (rng() < 0.5 ? 'clocktower' : 'apartment'), cx, cz, rr(0, 6.28), 1);
      if (big) {
        for (let k = 0; k < 4; k++) { const ang = rr(0, 6.28), rad = rr(135, 170); add(k < 2 ? 'apartment' : 'rock_big', cx + Math.cos(ang) * rad, cz + Math.sin(ang) * rad, rr(0, 6.28), k < 2 ? 1 : rr(1.2, 1.6)); }
      }
      const sr = big ? 130 : 80;
      for (let k = 0; k < (big ? 22 : 14); k++) { const a = rng() * 6.2832, d = rr(10, sr); add(pick(G_SMALL), cx + Math.cos(a) * d, cz + Math.sin(a) * d, rr(0, 6.28), 1); }
      for (let k = 0; k < (big ? 8 : 4); k++) { const a = rng() * 6.2832, d = rr(20, sr); add(pick(G_CAR), cx + Math.cos(a) * d, cz + Math.sin(a) * d, rr(0, 6.28), 1); }
      for (let k = 0; k < 6; k++) { const a = rng() * 6.2832, d = rr(sr * 0.9, sr * 1.25); add(pick(G_TREE), cx + Math.cos(a) * d, cz + Math.sin(a) * d, rr(0, 6.28), rr(0.9, 1.2)); }
    };
    for (let v = 0; v < 8; v++) { const big = v < 2; const c = place(big ? 190 : 120, big ? 480 : 250, big ? 800 : 900); if (c) village(c.x, c.z, big); }
    // --- forests
    for (let f = 0; f < 10; f++) {
      const rad = rr(65, 100), c = place(rad + 25, 90, 960);
      if (!c) continue;
      const n = Math.round(rad * 0.62);
      for (let k = 0; k < n; k++) {
        const a = rng() * 6.2832, d = Math.sqrt(rng()) * rad, u = rng();
        const nm = u < 0.58 ? pick(G_TREE) : u < 0.7 ? pick(G_TREEB) : u < 0.8 ? 'bush_small' : u < 0.88 ? 'deer' : u < 0.92 ? 'yeti' : u < 0.96 ? 'rabbit' : pick(G_ROCK);
        add(nm, c.x + Math.cos(a) * d, c.z + Math.sin(a) * d, rr(0, 6.28), rr(0.85, 1.25));
      }
    }
    // --- parking lots
    for (let p = 0; p < 5; p++) {
      const c = place(110, 150, 920);
      if (!c) continue;
      const ya = rr(0, 6.28), ca = Math.cos(ya), sa = Math.sin(ya);
      const loc = (lx, lz) => [c.x + lx * ca + lz * sa, c.z - lx * sa + lz * ca];
      for (let ri = 0; ri < 3; ri++) {
        for (let ci = 0; ci < 6; ci++) {
          if (rng() < 0.18) continue;
          const q = loc((ci - 2.5) * 11, (ri - 1) * 19);
          add(pick(G_CAR), q[0], q[1], ya + (ri === 1 ? Math.PI : 0) + rr(-0.05, 0.05), 1);
        }
      }
      for (let k = 0; k < 3; k++) { const q = loc((k - 1) * 30, -52); add(pick(G_BIGCAR), q[0], q[1], ya + rr(-0.1, 0.1), 1); }
      for (let k = 0; k < 2; k++) { const q = loc(-50 + k * 100, 8); add(k ? 'kiosk' : pick(G_BIGCAR), q[0], q[1], ya, 1); }
      for (let k = 0; k < 6; k++) { const q = loc(rr(-45, 45), rr(40, 70)); add(pick(G_SMALL), q[0], q[1], rr(0, 6.28), 1); }
    }
    // --- ski resorts
    for (let s = 0; s < 2; s++) {
      const c = place(180, 220, 820);
      if (!c) continue;
      const ya = rr(0, 6.28), ca = Math.cos(ya), sa = Math.sin(ya);
      const loc = (lx, lz) => [c.x + lx * ca + lz * sa, c.z - lx * sa + lz * ca];
      add('hotel', c.x, c.z, ya, 1);
      let q = loc(95, 0); add('gondola_station', q[0], q[1], ya + 1.57, 1);
      for (let k = 0; k < 7; k++) { q = loc(150 + k * 48, rr(-4, 4)); add('lift_pylon', q[0], q[1], ya + 1.57, 1); }
      for (let k = 0; k < 6; k++) { const a = rr(0, 6.28); add(k < 4 ? 'cabin' : pick(G_HOUSE), c.x + Math.cos(a) * rr(70, 110), c.z + Math.sin(a) * rr(70, 110), rr(0, 6.28), 1); }
      for (let k = 0; k < 16; k++) { q = loc(rr(120, 330), rr(-45, 45)); add('skier', q[0], q[1], ya + rr(-0.6, 0.6), 1); }
      for (let k = 0; k < 7; k++) { q = loc(rr(120, 330), rr(-45, 45)); add('sled', q[0], q[1], ya + rr(-0.6, 0.6), 1); }
      for (let k = 0; k < 4; k++) { q = loc(rr(60, 200), rr(-60, 60)); add('snowmobile', q[0], q[1], rr(0, 6.28), 1); }
      for (let k = 0; k < 12; k++) { const a = rr(0, 6.28), d = rr(30, 130); add(pick(G_SMALL), c.x + Math.cos(a) * d, c.z + Math.sin(a) * d, rr(0, 6.28), 1); }
      for (let k = 0; k < 8; k++) { const a = rr(0, 6.28), d = rr(110, 170); add(pick(G_TREE), c.x + Math.cos(a) * d, c.z + Math.sin(a) * d, rr(0, 6.28), rr(0.9, 1.2)); }
    }
    // --- downtown (tier 4): towers in a grid
    {
      const c = place(190, 380, 820);
      if (c) {
        for (let gx = 0; gx < 4; gx++) for (let gz = 0; gz < 3; gz++) add(pick(G_DOWN), c.x + (gx - 1.5) * 78 + rr(-5, 5), c.z + (gz - 1) * 78 + rr(-5, 5), rr(0, 4) * 1.5708, 1);
        for (let k = 0; k < 14; k++) add(pick(G_CAR), c.x + rr(-150, 150), c.z + rr(-120, 120), rr(0, 6.28), 1);
        for (let k = 0; k < 10; k++) add(pick(G_SMALL), c.x + rr(-150, 150), c.z + rr(-120, 120), rr(0, 6.28), 1);
      }
    }
    // --- rock fields (tier 5 giants + boulders)
    for (let f = 0; f < 4; f++) {
      const c = place(120, 150, 940);
      if (!c) continue;
      for (let k = 0; k < 6; k++) { const a = rr(0, 6.28), d = rr(0, 90); add('rock_big', c.x + Math.cos(a) * d, c.z + Math.sin(a) * d, rr(0, 6.28), rr(1.0, 1.7)); }
      for (let k = 0; k < 10; k++) { const a = rr(0, 6.28), d = rr(0, 110); add(pick(G_ROCK), c.x + Math.cos(a) * d, c.z + Math.sin(a) * d, rr(0, 6.28), rr(0.9, 1.4)); }
      for (let k = 0; k < 10; k++) { const a = rr(0, 6.28), d = rr(0, 115); add(rng() < 0.6 ? 'pebble' : 'penguin', c.x + Math.cos(a) * d, c.z + Math.sin(a) * d, rr(0, 6.28), 1); }
    }
    // --- scatter over the whole map
    for (let k = 0; k < 520; k++) { const a = rng() * 6.2832, d = Math.sqrt(rng()) * (R - 40); add(pick(G_SMALL), Math.cos(a) * d, Math.sin(a) * d, rr(0, 6.28), rr(0.9, 1.25)); }
    for (let k = 0; k < 130; k++) { const a = rng() * 6.2832, d = Math.sqrt(rng()) * (R - 40); if (d < 110) continue; add(pick(G_MID), Math.cos(a) * d, Math.sin(a) * d, rr(0, 6.28), rr(0.9, 1.2)); }
    for (let k = 0; k < 44; k++) { const a = rng() * 6.2832, d = Math.sqrt(rng()) * (R - 40); if (d < 260) continue; add(k % 9 === 0 ? 'rock_big' : k % 3 === 0 ? pick(G_BIGCAR) : pick(G_HOUSE), Math.cos(a) * d, Math.sin(a) * d, rr(0, 6.28), 1); }
    // grid + per prop numbers
    for (let i = 0; i < this.n; i++) {
      const c = clampN(((this.prx[i] + R) / PGS) | 0, 0, PGN - 1) * PGN + clampN(((this.prz[i] + R) / PGS) | 0, 0, PGN - 1);
      this.pnext[i] = this.phead[c]; this.phead[c] = i;
      this.setupProp(i);
    }
    // instanced meshes were sized for the previous layout: rebuild them for the new per type counts
    for (let t = 0; t < NT; t++) {
      if (!this.tdef[t]) continue;
      const old = this.tmesh[t];
      const need = this.tcount[t] + EXTRA;
      if (!old || need !== this.tcap[t]) {
        if (old) { this.scene.remove(old); old.dispose(); }
        this.tcap[t] = need;
        const mesh = new THREE.InstancedMesh(this.tdef[t].geometry, this.mat, need);
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        mesh.frustumCulled = false; mesh.count = 0; mesh.visible = false; mesh.userData.keepGeo = true;
        this.scene.add(mesh);
        this.tmesh[t] = mesh;
      }
    }
    this.tprev.fill(0);
  }

  // ------------------------------------------------------------------ state
  gainFor(i, M) { return Math.min(M * CAPG, (this.prm[i] * 253 * KP) / Math.sqrt(Math.max(8, M))); }

  mark(i) { if (this.g.mp === 'host' && !this.pdm[i]) { this.pdm[i] = 1; this.pdl[this.pdn++] = i; } }

  kill(i) {
    this.pra[i] = 0;
    this.prw[i] = (30 + Math.min(110, this.pre[i] * 4)) * (0.7 + Math.random() * 0.6);
    this.pdead[this.ndead++] = i;
    this.mark(i);
  }

  /** a free spot? (used for spawning) */
  blockedAt(x, z, pad) {
    const R = this.R;
    const gx0 = clampN(((x - 40 - pad + R) / PGS) | 0, 0, PGN - 1), gx1 = clampN(((x + 40 + pad + R) / PGS) | 0, 0, PGN - 1);
    const gz0 = clampN(((z - 40 - pad + R) / PGS) | 0, 0, PGN - 1), gz1 = clampN(((z + 40 + pad + R) / PGS) | 0, 0, PGN - 1);
    for (let gx = gx0; gx <= gx1; gx++) for (let gz = gz0; gz <= gz1; gz++) {
      for (let i = this.phead[gx * PGN + gz]; i !== -1; i = this.pnext[i]) {
        const rc = this.prc[i] + pad;
        if (rc <= pad) continue;
        const dx = this.prx[i] - x, dz = this.prz[i] - z;
        if (dx * dx + dz * dz < rc * rc) return true;
      }
    }
    return false;
  }

  /** host: dead prop ids (for a joining client) */
  deadList() { const a = []; for (let i = 0; i < this.n; i++) if (!this.pra[i]) a.push(i); return a; }
  /** client: apply the dead list of a start message */
  setDead(list) { if (!list) return; for (let k = 0; k < list.length; k++) { const i = list[k]; if (i >= 0 && i < this.n) this.pra[i] = 0; } }

  /** host: prop changes since the last snapshot as i*2+alive */
  takeDelta() {
    const a = [];
    for (let k = 0; k < this.pdn; k++) { const i = this.pdl[k]; a.push(i * 2 + this.pra[i]); this.pdm[i] = 0; }
    this.pdn = 0;
    return a;
  }
  dropDelta() { for (let k = 0; k < this.pdn; k++) this.pdm[this.pdl[k]] = 0; this.pdn = 0; }

  /** client: apply a snapshot delta; eaten props near a ball fly into it (the eat event is derived from the positions) */
  applyDelta(arr) {
    if (!arr) return;
    const g = this.g, cells = g.cells;
    for (let k = 0; k < arr.length; k++) {
      const v = arr[k], i = v >> 1;
      if (i < 0 || i >= this.n) continue;
      if (v & 1) { this.pra[i] = 1; continue; }
      if (!this.pra[i]) continue;
      this.pra[i] = 0;
      if (Math.abs(this.prx[i] - this.vcx) > this.vhx || this.prz[i] < this.vz0 || this.prz[i] > this.vz1) continue;
      let best = -1, bd = 1e9;
      for (let c = 0; c < cells.length; c++) {
        const q = cells[c];
        if (!q.on || this.pre[i] > q.r * 1.15) continue;
        const dx = this.prx[i] - q.x, dz = this.prz[i] - q.z, lim = q.r * 1.55 + 3 + this.pre[i] * 0.4 + 14, d2 = dx * dx + dz * dz;
        if (d2 < lim * lim && d2 < bd) { bd = d2; best = c; }
      }
      if (best >= 0) this.startPull(i, best);
    }
  }

  /** respawn timers (host / solo) */
  tick(dt) {
    const g = this.g, cells = g.cells;
    for (let k = this.ndead - 1; k >= 0; k--) {
      const i = this.pdead[k];
      this.prw[i] -= dt;
      if (this.prw[i] > 0) continue;
      let blocked = false;
      for (let c = 0; c < cells.length; c++) {
        const q = cells[c];
        if (!q.on) continue;
        const dx = this.prx[i] - q.x, dz = this.prz[i] - q.z, lim = q.r + this.prc[i] + 4;
        if (dx * dx + dz * dz < lim * lim) { blocked = true; break; }
      }
      if (blocked) { this.prw[i] = 3; continue; }
      this.pra[i] = 1;
      this.pdead[k] = this.pdead[--this.ndead];
      this.mark(i);
    }
  }

  // ------------------------------------------------------------------ one ball against the props (host / solo)
  interact(c, ci, o, dt) {
    const R = this.R, g = this.g, cr = c.r;
    if (c.pcd > 0) c.pcd -= dt;
    const reach = cr * 1.55 + 3, scan = reach + 34;
    const gx0 = clampN(((c.x - scan + R) / PGS) | 0, 0, PGN - 1), gx1 = clampN(((c.x + scan + R) / PGS) | 0, 0, PGN - 1);
    const gz0 = clampN(((c.z - scan + R) / PGS) | 0, 0, PGN - 1), gz1 = clampN(((c.z + scan + R) / PGS) | 0, 0, PGN - 1);
    const me = c.o === g.me;
    let pulled = 0;
    for (let gx = gx0; gx <= gx1; gx++) {
      for (let gz = gz0; gz <= gz1; gz++) {
        for (let i = this.phead[gx * PGN + gz]; i !== -1; i = this.pnext[i]) {
          if (!this.pra[i]) continue;
          const dx = this.prx[i] - c.x, dz = this.prz[i] - c.z, d2 = dx * dx + dz * dz, e = this.pre[i];
          if (e <= cr * 0.9) {
            const lim = reach + e * 0.4;
            if (d2 >= lim * lim) continue;
            const gain = this.gainFor(i, c.m);
            c.m = Math.min(this.maxM, c.m + gain); o.xpRun += gain;
            this.kill(i);
            if (pulled < 6 && Math.abs(this.prx[i] - this.vcx) < this.vhx && this.prz[i] > this.vz0 && this.prz[i] < this.vz1) { if (this.startPull(i, ci)) pulled++; } else if (me) g.snd('pellet');
            continue;
          }
          const pc = this.prc[i];
          if (pc <= 0) continue;
          const minD = cr + pc;
          if (d2 >= minD * minD) continue;
          const d = Math.sqrt(d2) + 1e-4, nx = -dx / d, nz = -dz / d;
          const into = -(c.mvx * nx + c.mvz * nz) - (c.vx * nx + c.vz * nz);
          // a prop that is only a little too big: plough through it (partial mass); a boost smashes bigger ones
          if (e <= cr * 1.55 && (o.boostT > 0 || into > speedRef(c.m) * 0.4)) {
            const gain = this.gainFor(i, c.m) * CFG.smashGrow;
            c.m = Math.min(this.maxM, c.m + gain); o.xpRun += gain;
            this.kill(i);
            for (let k = 0; k < 3; k++) g.spawnPellet(this.prx[i] + (Math.random() - 0.5) * pc * 1.2, this.prz[i] + (Math.random() - 0.5) * pc * 1.2, 2, 0xffffff);
            if (me) { g.audio?.crash?.(clampN(e / (cr * 1.5), 0.2, 0.7)); g.platform?.haptic?.('light'); } else g.snd('ice', this.prx[i], this.prz[i], 0.4);
            continue;
          }
          const ov = minD - d;
          c.x += nx * ov * 0.85; c.z += nz * ov * 0.85;
          if (into > 8 && (c.pcd || 0) <= 0 && pc >= cr * 0.4 && o.shield <= 0) {
            c.m = Math.max(12, c.m * (1 - 0.012 * clampN(into / 20, 0.5, 1.5)));
            c.pcd = 0.8;
            c.vx += nx * 4; c.vz += nz * 4;
            if (me) g.audio?.bump?.(clampN(into / 30, 0.2, 0.9)); else g.snd('slide', c.x, c.z, 0.3);
          }
        }
      }
    }
  }

  /** bots: the most attractive edible prop within ~36 m. Fills out.{x,z,d,g}; false when there is none */
  bestFor(cx, cz, maxM, maxR, out) {
    const R = this.R, rad = 36;
    const gx0 = clampN(((cx - rad + R) / PGS) | 0, 0, PGN - 1), gx1 = clampN(((cx + rad + R) / PGS) | 0, 0, PGN - 1);
    const gz0 = clampN(((cz - rad + R) / PGS) | 0, 0, PGN - 1), gz1 = clampN(((cz + rad + R) / PGS) | 0, 0, PGN - 1);
    let best = -1, bs = 0;
    for (let gx = gx0; gx <= gx1; gx++) for (let gz = gz0; gz <= gz1; gz++) {
      for (let i = this.phead[gx * PGN + gz]; i !== -1; i = this.pnext[i]) {
        if (!this.pra[i] || this.pre[i] > maxR * 0.9) continue;
        const d = Math.hypot(this.prx[i] - cx, this.prz[i] - cz);
        const s = this.gainFor(i, maxM) / (d + 10);
        if (s > bs) { bs = s; best = i; out.d = d; out.g = this.gainFor(i, maxM); }
      }
    }
    if (best < 0) return false;
    out.x = this.prx[best]; out.z = this.prz[best];
    return true;
  }

  /** bots: steering push away from props they cannot eat (accumulated into out.x / out.z) */
  repel(cx, cz, r, out) {
    const R = this.R, rad = r + 46;
    const gx0 = clampN(((cx - rad + R) / PGS) | 0, 0, PGN - 1), gx1 = clampN(((cx + rad + R) / PGS) | 0, 0, PGN - 1);
    const gz0 = clampN(((cz - rad + R) / PGS) | 0, 0, PGN - 1), gz1 = clampN(((cz + rad + R) / PGS) | 0, 0, PGN - 1);
    for (let gx = gx0; gx <= gx1; gx++) for (let gz = gz0; gz <= gz1; gz++) {
      for (let i = this.phead[gx * PGN + gz]; i !== -1; i = this.pnext[i]) {
        if (!this.pra[i] || this.pre[i] <= r * 1.55 || this.prc[i] <= 0) continue;
        const dx = cx - this.prx[i], dz = cz - this.prz[i], d = Math.hypot(dx, dz) + 0.01, lim = r + this.prc[i] + 12;
        if (d < lim) { const k = (1 - d / lim) * 1.6 / d; out.x += dx * k; out.z += dz * k; }
      }
    }
  }

  // ------------------------------------------------------------------ suction
  startPull(i, ci) {
    if (this.npl >= PULLCAP) return false;
    const g = this.g, c = g.cells[ci], t = this.prt[i];
    if (!this.tmesh[t]) return false;
    const k = this.npl++;
    const dist = Math.hypot(this.prx[i] - c.x, this.prz[i] - c.z);
    this.plProp[k] = i; this.plT[k] = t; this.plCell[k] = ci; this.plOwn[k] = c.o;
    this.plX[k] = this.prx[i]; this.plZ[k] = this.prz[i]; this.plY[k] = this.th[t] * this.prs[i] * 0.3; this.plS[k] = this.prs[i];
    this.plYaw[k] = Math.atan2(this.psn[i], this.pcs[i]);
    this.plSpin[k] = (Math.random() < 0.5 ? -1 : 1) * (8 + Math.random() * 8);
    this.plArc[k] = (Math.random() - 0.5) * 2.2; this.plLift[k] = 0.6 + Math.random() * 0.6; this.plTilt[k] = (Math.random() - 0.5) * 2.4;
    this.plTime[k] = 0; this.plDur[k] = 0.2 + Math.min(0.15, (dist / (c.r * 2.5 + 10)) * 0.15);
    if (c.o === g.me) {
      this.combo = g.time - this.comboAt < 0.9 ? this.combo + 1 : 1; this.comboAt = g.time;
      g.audio?.pop?.(clampN(this.pre[i] / Math.max(1, c.r), 0, 1), this.combo);
    }
    return true;
  }

  updatePulls(dt) {
    this.defT -= dt;
    if (this.defT <= 0) { this.defT = 2; this.refreshDefs(); }
    const cells = this.g.cells;
    for (let k = this.npl - 1; k >= 0; k--) {
      this.plTime[k] += dt;
      if (this.plTime[k] < this.plDur[k]) continue;
      const c = cells[this.plCell[k]];
      if (c && c.on && c.o === this.plOwn[k]) this.stick(this.plOwn[k], c, this.plT[k], this.plS[k], this.plX[k], this.plZ[k]);
      const last = --this.npl;
      if (k !== last) {
        this.plProp[k] = this.plProp[last]; this.plT[k] = this.plT[last]; this.plCell[k] = this.plCell[last]; this.plOwn[k] = this.plOwn[last];
        this.plX[k] = this.plX[last]; this.plY[k] = this.plY[last]; this.plZ[k] = this.plZ[last]; this.plS[k] = this.plS[last]; this.plYaw[k] = this.plYaw[last];
        this.plSpin[k] = this.plSpin[last]; this.plArc[k] = this.plArc[last]; this.plLift[k] = this.plLift[last]; this.plTilt[k] = this.plTilt[last];
        this.plTime[k] = this.plTime[last]; this.plDur[k] = this.plDur[last];
      }
    }
  }

  // ------------------------------------------------------------------ katamari: props stuck on a ball
  /** adaptive quality: dm = prop draw distance multiplier, so = stuck props drawn per other ball */
  setQuality(dm, so) { this.distMul = dm; this.stuckOthers = so; }

  clearStuck(oid) { this.stN[oid] = 0; }

  bury(oid, r) {
    const base = oid * STK, lim = r * 1.02;
    let n = this.stN[oid], w = 0;
    for (let k = 0; k < n; k++) {
      if (this.stTop[base + k] <= lim) continue;
      if (w !== k) {
        const a = base + w, b = base + k;
        this.stT[a] = this.stT[b]; this.stS[a] = this.stS[b]; this.stTop[a] = this.stTop[b];
        for (let j = 0; j < 3; j++) this.stP[a * 3 + j] = this.stP[b * 3 + j];
        for (let j = 0; j < 4; j++) this.stQ[a * 4 + j] = this.stQ[b * 4 + j];
      }
      w++;
    }
    this.stN[oid] = w;
    return w;
  }

  stick(oid, c, t, s0, fx, fz) {
    const def = this.tdef[t];
    if (!def) return;
    const base = oid * STK;
    let n = this.bury(oid, c.r);
    if (n >= STK) {
      this.stT.copyWithin(base, base + 1, base + STK); this.stS.copyWithin(base, base + 1, base + STK); this.stTop.copyWithin(base, base + 1, base + STK);
      this.stP.copyWithin(base * 3, (base + 1) * 3, (base + STK) * 3); this.stQ.copyWithin(base * 4, (base + 1) * 4, (base + STK) * 4);
      n = STK - 1;
    }
    // direction from the ball to where the prop came from, biased to the top / camera side so every pickup is seen (as in the CIG ball)
    let vx = fx - c.x, vz = fz - c.z;
    const dl = Math.hypot(vx, vz) || 1;
    vx /= dl; vz /= dl;
    let wx = vx + (Math.random() - 0.5) * 0.6, wy = 0.35 + Math.random() * 0.3, wz = Math.abs(vz) * 0.5 + 0.3;
    const wl = Math.hypot(wx, wy, wz);
    wx /= wl; wy /= wl; wz /= wl;
    rotQ(-c.qx, -c.qy, -c.qz, c.qw, wx, wy, wz); // into the ball's rolling frame
    const lx = _o.x, ly = _o.y, lz = _o.z;
    const embed = c.r * 0.78;
    const s = Math.min(s0 * 0.6, (0.55 * c.r) / Math.max(0.2, this.tr[t]));
    _q1.setFromUnitVectors(_up, _v1.set(lx, ly, lz));
    _q2.setFromAxisAngle(_up, Math.random() * 6.2832); _q1.multiply(_q2);
    _ax.set(Math.random() - 0.5, 0, Math.random() - 0.5);
    if (_ax.lengthSq() > 1e-6) { _ax.normalize(); _q2.setFromAxisAngle(_ax, (Math.random() - 0.5) * 0.9); _q1.multiply(_q2); }
    const idx = base + n;
    this.stT[idx] = t; this.stS[idx] = s; this.stTop[idx] = embed + this.th[t] * s * 0.8;
    this.stP[idx * 3] = lx * embed; this.stP[idx * 3 + 1] = ly * embed; this.stP[idx * 3 + 2] = lz * embed;
    this.stQ[idx * 4] = _q1.x; this.stQ[idx * 4 + 1] = _q1.y; this.stQ[idx * 4 + 2] = _q1.z; this.stQ[idx * 4 + 3] = _q1.w;
    this.stN[oid] = n + 1;
  }

  // ------------------------------------------------------------------ render
  render(camX, camH, hx, zmin, zmax, cells, owners, me) {
    const R = this.R, tw = this.tw;
    this.vcx = camX; this.vhx = hx + 30; this.vz0 = zmin - 30; this.vz1 = zmax + 30;
    tw.fill(0);
    const dm = this.distMul || 1, minR = camH * 0.0025 * (dm < 1 ? 1.8 : 1), mx = (hx + 50) * dm;
    const zc = (zmin + zmax) * 0.5, zh = (zmax - zmin) * 0.5 * dm + 50;
    const gx0 = clampN(((camX - mx + R) / PGS) | 0, 0, PGN - 1), gx1 = clampN(((camX + mx + R) / PGS) | 0, 0, PGN - 1);
    const gz0 = clampN(((zc - zh + R) / PGS) | 0, 0, PGN - 1), gz1 = clampN(((zc + zh + R) / PGS) | 0, 0, PGN - 1);
    const arrs = this.arrs || (this.arrs = new Array(NT));
    for (let t = 0; t < NT; t++) arrs[t] = this.tmesh[t] ? this.tmesh[t].instanceMatrix.array : null;
    for (let gx = gx0; gx <= gx1; gx++) {
      for (let gz = gz0; gz <= gz1; gz++) {
        for (let i = this.phead[gx * PGN + gz]; i !== -1; i = this.pnext[i]) {
          if (!this.pra[i] || this.prr[i] < minR) continue;
          const t = this.prt[i], a = arrs[t];
          if (!a) continue;
          const k = tw[t];
          if (k >= this.tcap[t]) continue;
          wmy(a, k * 16, this.prx[i], 0, this.prz[i], this.prs[i], this.pcs[i], this.psn[i]);
          tw[t] = k + 1;
        }
      }
    }
    // props in flight: lifted, spinning, shrinking, sucked into the ball
    for (let k = 0; k < this.npl; k++) {
      const t = this.plT[k], a = arrs[t];
      if (!a || tw[t] >= this.tcap[t]) continue;
      const c = cells[this.plCell[k]];
      if (!c || !c.on) continue;
      const u = clampN(this.plTime[k] / this.plDur[k], 0, 1), e = u * u * (1.7 - 0.7 * u), sn = Math.sin(u * Math.PI);
      let dx = this.plX[k] - c.x, dz = this.plZ[k] - c.z;
      const dl = Math.hypot(dx, dz) || 1;
      dx /= dl; dz /= dl;
      const tx = c.x + dx * c.r * 0.55, tz = c.z + dz * c.r * 0.55, ty = c.r * 0.9;
      const x = this.plX[k] + (tx - this.plX[k]) * e + -dz * this.plArc[k] * Math.min(dl, 30) * 0.2 * sn;
      const z = this.plZ[k] + (tz - this.plZ[k]) * e + dx * this.plArc[k] * Math.min(dl, 30) * 0.2 * sn;
      const y = this.plY[k] + (ty - this.plY[k]) * e + sn * this.plLift[k] * (c.r * 0.35 + 1.2);
      const s = this.plS[k] * (1 - 0.4 * e);
      const h = this.plYaw[k] + this.plSpin[k] * this.plTime[k], tl = this.plTilt[k] * e * 0.5;
      const sy = Math.sin(h * 0.5), cy = Math.cos(h * 0.5), sx = Math.sin(tl), cx = Math.cos(tl);
      wmq(a, tw[t] * 16, x, y, z, s, s, s, cy * sx, sy * cx, -sy * sx, cy * cx);
      tw[t]++;
    }
    // katamari: stuck props ride the ball's rolling rotation
    for (let i = 0; i < owners.length; i++) {
      const o = owners[i];
      if (!this.stN[i]) continue;
      if (!o.alive) { this.stN[i] = 0; continue; }
      const c = cells[o.bc];
      if (!c || !c.on || c.o !== i) continue;
      const mine = o === me;
      if (!mine && (Math.abs(c.x - camX) > hx + 20 || c.z < zmin - 20 || c.z > zmax + 20)) continue;
      const n = this.bury(i, c.r), base = i * STK, from = Math.max(0, n - (mine ? STK : (this.stuckOthers || 12)));
      const cqx = c.qx, cqy = c.qy, cqz = c.qz, cqw = c.qw;
      for (let k = from; k < n; k++) {
        const idx = base + k, t = this.stT[idx], a = arrs[t];
        if (!a || tw[t] >= this.tcap[t]) continue;
        rotQ(cqx, cqy, cqz, cqw, this.stP[idx * 3], this.stP[idx * 3 + 1], this.stP[idx * 3 + 2]);
        const lx = this.stQ[idx * 4], ly = this.stQ[idx * 4 + 1], lz = this.stQ[idx * 4 + 2], lw = this.stQ[idx * 4 + 3];
        const qw = cqw * lw - cqx * lx - cqy * ly - cqz * lz, qx = cqw * lx + cqx * lw + cqy * lz - cqz * ly;
        const qy = cqw * ly - cqx * lz + cqy * lw + cqz * lx, qz = cqw * lz + cqx * ly - cqy * lx + cqz * lw;
        const s = this.stS[idx];
        wmq(a, tw[t] * 16, c.x + _o.x, c.r + _o.y, c.z + _o.z, s, s, s, qx, qy, qz, qw);
        tw[t]++;
      }
    }
    for (let t = 0; t < NT; t++) {
      const mesh = this.tmesh[t];
      if (!mesh) continue;
      const k = tw[t];
      mesh.count = k; mesh.visible = k > 0;
      if (k > 0 || this.tprev[t] > 0) {
        const attr = mesh.instanceMatrix;
        attr.clearUpdateRanges(); attr.addUpdateRange(0, Math.max(1, k) * 16); attr.needsUpdate = true;
      }
      this.tprev[t] = k;
    }
  }
}

/** a reference travel speed for a ball of this mass (same formula as the arena) */
function speedRef(m) { return 17 * Math.pow(m, -0.12); }
