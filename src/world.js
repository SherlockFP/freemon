import * as THREE from 'three';
import { CFG, MASS, TIER_MASS } from './config.js';
import { makeRng } from './rng.js';
import { SLOPE_TIERS, TOWN_TYPES } from './props.js';
import { patchMaterial } from './shaders.js';

// Downhill distance `d` grows forward; world z = -d.
// Movement modes for props.
const MOVE_NONE = 0, MOVE_SKI = 1, MOVE_WANDER = 2, MOVE_CROSS = 3;

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);

// Imported Kenney models (src/assets.js) that join each slope tier / the town when present in the library.
const KENNEY_TIERS = [
  ['k_present_a', 'k_present_b', 'k_present_c', 'k_candy_cane', 'k_candy_cane_green', 'k_lantern', 'k_cone', 'k_rock_small'],
  ['k_snowman', 'k_snowman_hat', 'k_sled', 'k_bench', 'k_gingerbread', 'k_campfire', 'k_tent_small', 'k_pine_small'],
  ['k_sedan', 'k_sports', 'k_suv', 'k_taxi', 'k_police', 'k_van', 'k_ambulance', 'k_pickup', 'k_tractor', 'k_tent', 'k_canoe', 'k_pine_a', 'k_pine_b', 'k_rock_a', 'k_rock_b'],
  ['k_truck', 'k_delivery', 'k_garbage_truck', 'k_firetruck', 'k_pine_a_big', 'k_pine_b_big', 'k_rock_c', 'k_rock_d'],
  [],
];
const KENNEY_HOUSES = ['k_house_a', 'k_house_b', 'k_house_c', 'k_house_d', 'k_house_e', 'k_house_f', 'k_house_g', 'k_house_h', 'k_house_i', 'k_house_j', 'k_house_k', 'k_house_l'];
const KENNEY_STREET = ['k_sedan', 'k_taxi', 'k_police', 'k_van', 'k_planter', 'k_tree_small', 'k_snowman', 'k_bench'];

export function levelParams(level, daily) {
  const n = daily ? 7 : level;
  return {
    L: Math.min(520 + n * 45, 1100),
    density: Math.min(0.95 + n * 0.05, 1.5),
    townRows: Math.min(6 + n, 13),
    ramps: n < 2 ? 1 : Math.min(2 + (n >> 1), 6),
    patches: n < 3 ? 0 : Math.min(n - 1, 7),
    roads: n < 2 ? 0 : Math.min(1 + (n >> 1), 5),
  };
}

export class World {
  constructor(scene, lib, { seed, level, daily }) {
    this.scene = scene;
    this.lib = lib;
    this.rng = makeRng(seed);
    const P = levelParams(level, daily);
    this.P = P;
    this.L = P.L;
    this.townStart = P.L + 28;
    this.townEnd = this.townStart + P.townRows * 17 + 30;
    this.dEnd = this.townEnd + 160;

    this.statics = [];   // sorted by d after generation
    this.movers = [];
    this.ramps = [];
    this.patches = [];
    this.roads = [];
    this.buildings = []; // town buildings, for the destruction %
    this.maxPropR = 1;
    this.time = 0;
    this.group = new THREE.Group();
    scene.add(this.group);

    // Spawn tables: procedural props + whatever imported models are available.
    this.tiers = SLOPE_TIERS.map((t, i) => [...t, ...KENNEY_TIERS[i].filter((k) => lib[k])]);
    this.houses = KENNEY_HOUSES.filter((k) => lib[k]);
    this.street = KENNEY_STREET.filter((k) => lib[k]);
    this.mat = patchMaterial(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
    this.snowMat = patchMaterial(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }), { snow: true });
    this.avgColor = {};
    for (const name in lib) this.avgColor[name] = averageColor(lib[name].geometry);

    this.generate();
    this.statics.sort((a, b) => a.d - b.d);
    this.buildInstancing();
    this.buildTerrain();
    this.buildRamps();
    this.buildPisteMarkers();
  }

  // ---------- terrain shape ----------
  // The valley opens up as you descend, so the world's scale keeps pace with the ball.
  halfWidth(d) {
    const h0 = CFG.trackW / 2, h1 = CFG.trackWEnd / 2, tw = CFG.townW / 2;
    if (d <= this.L) {
      const u = Math.max(0, d / this.L);
      return h0 + (h1 - h0) * u * u;
    }
    const u = Math.min(1, (d - this.L) / CFG.flattenLen);
    return h1 + (tw - h1) * u * u * (3 - 2 * u);
  }

  baseY(d) {
    const g = CFG.grade, L = this.L, F = CFG.flattenLen;
    if (d <= L) return -g * d + 4 * Math.sin(d * 0.011);
    const yL = -g * L + 4 * Math.sin(L * 0.011);
    const u = Math.min(d - L, F);
    return yL - g * (u - (u * u) / (2 * F));
  }

  groundY(x, d) {
    let y = this.baseY(d);
    const hw = this.halfWidth(d);
    const ax = Math.abs(x) - hw;
    const flat = d > this.L ? Math.max(0, 1 - (d - this.L) / 30) : 1;
    if (ax > 0) {
      y += ax * ax * 0.014 + ax * 0.22 + ax * 0.1 * Math.sin(d * 0.05 + x * 0.13);
    }
    y += flat * 0.2 * Math.sin(x * 0.45 + d * 0.09) * Math.sin(d * 0.13 - x * 0.2);
    return y;
  }

  // Ground + ramp kickers (what the ball actually rides on).
  rampAt(x, d) {
    for (let i = 0; i < this.ramps.length; i++) {
      const r = this.ramps[i];
      const u = d - r.d;
      if (u < 0 || u > r.len || Math.abs(x - r.x) > r.w / 2) continue;
      return r.h * Math.pow(u / r.len, 1.4);
    }
    return 0;
  }

  // Lowest ground under a prop's footprint, so long things (buses, cabins) sink into slopes instead of floating.
  footY(p) {
    const e = Math.min(p.r * 0.7, 6);
    return Math.min(
      this.groundY(p.x, p.d),
      this.groundY(p.x, p.d + e), this.groundY(p.x, p.d - e),
      this.groundY(p.x + e, p.d), this.groundY(p.x - e, p.d),
    );
  }

  // Drop dead movers and chunks left far behind so update/query loops stay short.
  compactMovers(ballD) {
    const a = this.movers;
    let n = 0;
    for (let i = 0; i < a.length; i++) {
      const p = a[i];
      if (!p.alive) continue;
      if (p.kind === 'chunk' && p.d < ballD - 60) { p.alive = false; continue; }
      a[n++] = p;
    }
    a.length = n;
  }

  inPatch(x, d) {
    for (let i = 0; i < this.patches.length; i++) {
      const p = this.patches[i];
      const a = (x - p.x) / p.rx, b = (d - p.d) / p.rd;
      if (a * a + b * b < 1) return true;
    }
    return false;
  }

  // ---------- generation ----------
  add(type, x, d, opts = {}) {
    const def = this.lib[type];
    if (!def) return null;
    const s = opts.s ?? 0.9 + this.rng.next() * 0.25;
    const p = {
      type, def, x, d,
      y: 0,
      rot: opts.rot ?? this.rng.range(0, Math.PI * 2),
      s,
      r: def.radius * s,
      h: def.height * s,
      tier: def.tier,
      kind: def.kind,
      mass: (MASS[type] ?? TIER_MASS[def.tier] ?? 1) * s * s * s,
      alive: true,
      decor: !!opts.decor, // scenery: rendered, never collides
      move: opts.move ?? MOVE_NONE,
      m: null,
      // mover state
      ox: x, od: d, vx: opts.vx ?? 0, vd: opts.vd ?? 0, phase: this.rng.range(0, 6.28),
    };
    if (p.r > this.maxPropR && def.kind !== 'building' && !opts.decor) this.maxPropR = p.r;
    if (p.move === MOVE_NONE) this.statics.push(p);
    else this.movers.push(p);
    if (def.kind === 'building') this.buildings.push(p);
    return p;
  }

  // The radius the content is tuned for at a given distance (food tier thresholds below).
  expectedR(d) {
    const k = CFG.expectedR;
    const prog = Math.max(0, Math.min(1, d / this.L)) * (k.length - 1);
    const i = Math.min(k.length - 2, Math.floor(prog));
    return k[i] + (k[i + 1] - k[i]) * (prog - i);
  }

  // Food tops out at tier 3; tier 4 giants are landmarks placed off to the side, never walls.
  foodTier(prog) {
    if (prog < 0.14) return 0;
    if (prog < 0.38) return 1;
    if (prog < 0.66) return 2;
    return 3;
  }

  // Mostly current food, plenty of smaller stuff to recover with, a few bigger ones.
  mixTier(ft) {
    const r = this.rng.next();
    return Math.max(0, Math.min(3, r < 0.4 ? ft - 1 : r < 0.92 ? ft : ft + 1));
  }

  pickTier(t) {
    const tier = this.tiers[Math.max(0, Math.min(4, t))];
    // Huge rocks only as rare landmarks; keep food readable.
    return this.rng.pick(tier);
  }

  generate() {
    const R = this.rng;
    const L = this.L;

    // Breadcrumb line straight ahead: the first second of play is a satisfying combo.
    for (let i = 0; i < 9; i++) this.add(R.pick(['gift', 'traffic_cone', 'penguin', 'bush_small']), Math.sin(i * 0.5) * 1.5, 10 + i * 3.2);

    // Pre-place special features so they're spread across the run.
    const specials = [];
    for (let i = 0; i < this.P.ramps; i++) specials.push({ kind: 'ramp', d: L * (0.2 + 0.7 * (i + R.next() * 0.6) / this.P.ramps) });
    for (let i = 0; i < this.P.patches; i++) specials.push({ kind: 'patch', d: L * (0.25 + 0.65 * (i + R.next()) / this.P.patches) });
    for (let i = 0; i < this.P.roads; i++) specials.push({ kind: 'road', d: L * (0.3 + 0.6 * (i + R.next() * 0.5) / this.P.roads) });
    specials.sort((a, b) => a.d - b.d);

    let d = 44;
    let si = 0;
    while (d < L - 12) {
      while (si < specials.length && specials[si].d <= d) {
        const sp = specials[si++];
        if (sp.kind === 'ramp') d += this.placeRamp(d);
        else if (sp.kind === 'patch') d += this.placePatch(d);
        else d += this.placeRoad(d);
      }
      const prog = d / L;
      const ft = this.foodTier(prog);
      const hw = this.halfWidth(d) - 1.5;
      const roll = R.next();
      if (roll < 0.34) this.patternLine(d, ft, hw);
      else if (roll < 0.62) this.patternCluster(d, ft, hw);
      else if (roll < 0.8) this.patternFiller(d, ft, hw);
      else if (roll < 0.92) this.patternObstacle(d, ft, hw);
      else this.patternMovers(d, ft, hw);
      d += R.range(8, 14) / this.P.density;
    }

    this.generateBanks();
    this.generateTown();
    // Nothing may hide under a ramp kicker.
    if (this.ramps.length) {
      const under = (p) => this.ramps.some((r) => Math.abs(p.x - r.x) < r.w / 2 + p.r * 0.5 && p.d > r.d - p.r && p.d < r.d + r.len + p.r);
      this.statics = this.statics.filter((p) => p.decor || !under(p));
      this.movers = this.movers.filter((p) => !under(p));
    }
  }

  patternLine(d, ft, hw) {
    const R = this.rng;
    const type = this.pickTier(this.mixTier(ft));
    const def = this.lib[type];
    const n = R.int(5, 9);
    const spacing = Math.max(2.2, def.radius * 2.4);
    const x0 = R.range(-hw * 0.8, hw * 0.8);
    const amp = R.range(0, hw * 0.4), freq = R.range(0.05, 0.12);
    for (let i = 0; i < n; i++) {
      const x = clamp(x0 + Math.sin(i * spacing * freq) * amp, -hw, hw);
      this.add(type, x, d + i * spacing);
    }
    if (ft > 0 && R.chance(0.6)) this.patternFiller(d + n * spacing * 0.5, ft - 1, hw, 5);
  }

  patternCluster(d, ft, hw) {
    const R = this.rng;
    const cx = R.range(-hw * 0.7, hw * 0.7);
    const centerType = this.pickTier(Math.min(3, ft + (R.chance(0.25) ? 1 : 0)));
    const center = this.add(centerType, cx, d + 6);
    const ringR = (center ? center.r : 2) + R.range(1.5, 4);
    const foodType = this.pickTier(this.mixTier(ft));
    const n = R.int(6, 11);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + R.next() * 0.4;
      const rr = ringR * R.range(0.8, 1.3);
      this.add(R.chance(0.7) ? foodType : this.pickTier(Math.max(0, ft - 1)),
        clamp(cx + Math.cos(a) * rr, -hw, hw), d + 6 + Math.sin(a) * rr);
    }
  }

  patternFiller(d, ft, hw, n = 0) {
    const R = this.rng;
    const count = n || R.int(6, 12);
    const t = Math.max(0, ft - (R.chance(0.5) ? 1 : 0));
    for (let i = 0; i < count; i++) this.add(this.pickTier(R.chance(0.8) ? t : this.mixTier(ft)), R.range(-hw, hw), d + R.range(0, 14));
  }

  patternObstacle(d, ft, hw) {
    const R = this.rng;
    const t = Math.min(4, ft + 1);
    const big = this.pickTier(t);
    // Giants hug one side so there's always a lane past them.
    const x = t >= 4 ? R.sign() * R.range(hw * 0.55, hw * 0.85) : R.range(-hw * 0.6, hw * 0.6);
    this.add(big, x, d + 8);
    // Food arcs around the obstacle reward steering around it.
    const food = this.pickTier(ft);
    const side = x > 0 ? -1 : 1;
    for (let i = 0; i < 6; i++) this.add(food, clamp(x + side * (5 + Math.sin(i * 0.6) * 3), -hw, hw), d + i * 3);
  }

  patternMovers(d, ft, hw) {
    const R = this.rng;
    if (ft <= 1 || R.chance(0.5)) {
      // Skiers racing downhill — slower than you, so the chase always pays off.
      const n = R.int(3, 6);
      for (let i = 0; i < n; i++) {
        this.add('skier', R.range(-hw, hw), d + R.range(0, 10), { move: MOVE_SKI, vd: R.range(5, 8.5), rot: Math.PI });
      }
    } else {
      // Wandering creatures.
      const type = R.pick(['penguin', 'deer', 'yeti', 'person']);
      const cx = R.range(-hw * 0.7, hw * 0.7);
      const n = type === 'yeti' ? R.int(1, 3) : R.int(4, 8);
      for (let i = 0; i < n; i++) this.add(type, clamp(cx + R.range(-5, 5), -hw, hw), d + R.range(0, 10), { move: MOVE_WANDER });
    }
  }

  placeRamp(d) {
    const R = this.rng;
    const hw = this.halfWidth(d);
    const w = R.range(6, 8);
    const x = R.range(-hw + w, hw - w);
    this.ramps.push({ x, d, w, len: 9, h: 2.6 });
    // Landing zone full of food: flying into a crowd is the money shot.
    const prog = d / this.L;
    const ft = this.foodTier(prog);
    const land = d + 30;
    for (let i = 0; i < 14; i++) this.add(this.pickTier(this.rng.chance(0.6) ? ft : Math.max(0, ft - 1)), clamp(x + R.range(-7, 7), -hw + 1, hw - 1), land + R.range(-6, 10));
    return 52;
  }

  placePatch(d) {
    const R = this.rng;
    const hw = this.halfWidth(d);
    const rx = R.range(4, 8), rd = R.range(8, 16);
    const x = R.range(-hw + rx * 0.5, hw - rx * 0.5);
    this.patches.push({ x, d: d + rd, rx, rd });
    // Bait: something tasty on the far side of the dirt.
    const ft = this.foodTier(d / this.L);
    for (let i = 0; i < 5; i++) this.add(this.pickTier(ft), clamp(x + R.range(-rx, rx) * 0.6, -hw + 1, hw - 1), d + rd + R.range(-rd * 0.5, rd * 0.5));
    return rd * 2 + 14;
  }

  placeRoad(d) {
    const R = this.rng;
    this.roads.push({ d, w: 7 });
    const n = R.int(2, 4);
    const prog = d / this.L;
    for (let i = 0; i < n; i++) {
      const lane = i % 2 === 0 ? -1.7 : 1.7;
      const dir = lane < 0 ? 1 : -1;
      const type = prog > 0.55 && R.chance(0.4) ? R.pick(['bus', 'truck']) : R.pick(['car', 'car_blue', 'snowmobile']);
      this.add(type, R.range(-40, 40), d + lane, { move: MOVE_CROSS, vx: dir * R.range(6, 10), rot: dir > 0 ? Math.PI / 2 : -Math.PI / 2, s: 1 });
    }
    return 18;
  }

  generateBanks() {
    const R = this.rng;
    for (let d = -60; d < this.dEnd; d += R.range(2.5, 5.5)) {
      for (const side of [-1, 1]) {
        if (R.chance(0.15)) continue;
        const hw = this.halfWidth(d);
        const off = R.range(1, 34);
        const kp = this.lib.k_pine_a && R.chance(0.45);
        const t = off < 6 ? (kp ? 'k_pine_small' : 'pine_small')
          : off < 18 ? (kp ? R.pick(['k_pine_a', 'k_pine_b']) : R.pick(['pine', 'pine', 'pine_small', 'boulder']))
          : (kp ? R.pick(['k_pine_a_big', 'k_pine_b_big']) : R.pick(['pine_big', 'pine', 'rock_big', 'pine_big']));
        if (d > this.L && t === 'rock_big') continue;
        this.add(t, side * (hw + off), d, { decor: true });
      }
    }
  }

  generateTown() {
    const R = this.rng;
    const tw = CFG.townW / 2;
    const rows = this.P.townRows;
    const early = ['house', 'shop', 'barn', 'house', 'house_tall'];
    const late = ['house_tall', 'apartment', 'shop', 'house', 'apartment'];
    for (let i = 0; i < rows; i++) {
      const d = this.townStart + 10 + i * 17;
      const prog = i / rows;
      for (const side of [-1, 1]) {
        let x = 9 + R.range(0, 2);
        while (x < tw - 3) {
          const type = this.houses.length && R.chance(0.55) ? R.pick(this.houses) : R.pick(prog < 0.5 ? early : late);
          if (!this.lib[type]) break;
          const s = R.range(0.9, 1.1);
          const half = this.lib[type].radius * s * 0.75;
          if (x + half > tw + 2) break;
          this.add(type, side * (x + half), d + R.range(-1.5, 1.5), { rot: side > 0 ? -Math.PI / 2 : Math.PI / 2, s });
          x += half * 2 + R.range(1.5, 3.5);
        }
      }
      // Street life between rows.
      const streetPool = ['person', 'person', 'bench', 'traffic_cone', 'car', 'car_blue', 'snowman', ...this.street];
      for (let k = 0; k < 4; k++) this.add(R.pick(streetPool), R.range(-7, 7), d + 8 + R.range(-3, 3));
      if (i % 3 === 1) this.add(R.pick(['kiosk', 'shop']), R.range(-4, 4), d + 8);
    }
    // The finale "boss" sits dead centre at the end of the main street.
    this.add('clocktower', 0, this.townStart + 10 + rows * 17, { rot: 0, s: 1 });
  }

  // ---------- rendering ----------
  buildInstancing() {
    const counts = {};
    for (const p of this.statics) counts[p.type] = (counts[p.type] || 0) + 1;
    for (const p of this.movers) counts[p.type] = (counts[p.type] || 0) + 1;
    this.meshes = {};
    for (const type in counts) {
      const mesh = new THREE.InstancedMesh(this.lib[type].geometry, this.mat, counts[type]);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      mesh.count = 0;
      this.meshes[type] = mesh;
      this.group.add(mesh);
    }
    // Static props: bake world matrices once.
    for (const p of this.statics) {
      p.y = this.footY(p) - 0.05;
      _p.set(p.x, p.y, -p.d);
      _q.setFromAxisAngle(_up, p.rot);
      _s.setScalar(p.s);
      _m.compose(_p, _q, _s);
      p.m = new Float32Array(16);
      _m.toArray(p.m);
    }
    this.moverMat = new Float32Array(16);
  }

  lowerBound(d) {
    const a = this.statics;
    let lo = 0, hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (a[mid].d < d) lo = mid + 1; else hi = mid;
    }
    return lo;
  }

  update(dt, ballD, ahead = CFG.viewAhead, behind = CFG.viewBehind) {
    this.ahead = ahead;
    this.behind = behind;
    this.time += dt;
    const t = this.time;
    for (const p of this.movers) {
      if (!p.alive) continue;
      if (p.move === MOVE_SKI) {
        p.d += p.vd * dt;
        p.x = clamp(p.ox + Math.sin(t * 0.9 + p.phase) * 4, -this.halfWidth(p.d) + 1, this.halfWidth(p.d) - 1);
        p.rot = Math.PI + Math.cos(t * 0.9 + p.phase) * 0.5;
      } else if (p.move === MOVE_WANDER) {
        const a = t * 0.5 + p.phase;
        p.x = p.ox + Math.sin(a) * 2.5;
        p.d = p.od + Math.sin(a * 0.7) * 2;
        p.rot = Math.atan2(Math.cos(a) * 2.5, Math.cos(a * 0.7) * -1.4);
      } else if (p.move === MOVE_CROSS) {
        p.x += p.vx * dt;
        if (p.x > 45) p.x = -45;
        if (p.x < -45) p.x = 45;
      }
      p.y = this.footY(p) - 0.05;
    }
    this.compactMovers(ballD);
    this.render(ballD);
  }

  render(ballD) {
    if (!this.meshList || this.meshList.length !== Object.keys(this.meshes).length) this.meshList = Object.values(this.meshes);
    const meshes = this.meshList;
    for (let i = 0; i < meshes.length; i++) { meshes[i].userData.prev = meshes[i].count; meshes[i].count = 0; }
    const d0 = ballD - (this.behind ?? CFG.viewBehind), d1 = ballD + (this.ahead ?? CFG.viewAhead);
    const i0 = this.lowerBound(d0), i1 = this.lowerBound(d1);
    for (let i = i0; i < i1; i++) {
      const p = this.statics[i];
      if (!p.alive) continue;
      const mesh = this.meshes[p.type];
      mesh.instanceMatrix.array.set(p.m, mesh.count * 16);
      mesh.count++;
    }
    for (const p of this.movers) {
      if (!p.alive || p.d < d0 || p.d > d1) continue;
      const mesh = this.meshes[p.type];
      _p.set(p.x, p.y, -p.d);
      _q.setFromAxisAngle(_up, p.rot);
      _s.setScalar(p.s);
      _m.compose(_p, _q, _s);
      _m.toArray(mesh.instanceMatrix.array, mesh.count * 16);
      mesh.count++;
    }
    for (let i = 0; i < meshes.length; i++) {
      const mesh = meshes[i];
      mesh.visible = mesh.count > 0; // empty types cost no draw call
      if (!mesh.count && !mesh.userData.prev) continue; // empty before and now: nothing to upload
      const attr = mesh.instanceMatrix;
      attr.clearUpdateRanges();
      attr.addUpdateRange(0, Math.max(1, mesh.count) * 16);
      attr.needsUpdate = true;
    }
  }

  // Collect live props whose centers fall within `reach` of (x, d).
  query(x, d, reach, out) {
    out.length = 0;
    const pad = reach + this.maxPropR;
    const i0 = this.lowerBound(d - pad), i1 = this.lowerBound(d + pad);
    for (let i = i0; i < i1; i++) {
      const p = this.statics[i];
      if (p.alive && !p.decor && Math.abs(p.x - x) < reach + p.r) out.push(p);
    }
    // Buildings can be wider than maxPropR; the town is short so scan them directly.
    if (d > this.L) {
      for (const p of this.buildings) {
        if (p.alive && Math.abs(p.d - d) >= pad && Math.abs(p.d - d) < reach + p.r && Math.abs(p.x - x) < reach + p.r) out.push(p);
      }
    }
    for (const p of this.movers) {
      if (p.alive && Math.abs(p.d - d) < reach + p.r && Math.abs(p.x - x) < reach + p.r) out.push(p);
    }
    return out;
  }

  // Snow chunks knocked off the ball: they land ahead and can be re-collected.
  spawnChunk(x, d, r) {
    const def = this.chunkDef || (this.chunkDef = makeChunkDef());
    if (!this.meshes.chunk) {
      const mesh = new THREE.InstancedMesh(def.geometry, this.mat, 64);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      mesh.count = 0;
      this.meshes.chunk = mesh;
      this.group.add(mesh);
      this.lib.chunk = def;
    }
    let live = 0;
    for (const p of this.movers) if (p.type === 'chunk' && p.alive && p.d > d - 40) live++;
    if (live >= 60) return;
    const p = {
      type: 'chunk', def, x: clamp(x, -this.halfWidth(d) + 1, this.halfWidth(d) - 1), d, y: 0, rot: 0, s: r, r: r, h: r * 2,
      tier: 0, kind: 'chunk', mass: MASS.chunk * r * r * r * 20, alive: true, move: MOVE_NONE + 99, ox: x, od: d, vx: 0, vd: 0, phase: 0,
    };
    this.movers.push(p);
  }

  kill(p) { p.alive = false; }

  townProgress() {
    let total = 0, dead = 0;
    for (const b of this.buildings) { total++; if (!b.alive) dead++; }
    return total ? dead / total : 0;
  }

  buildTerrain() {
    const xMin = -80, xMax = 80, dMin = -70, dMax = this.dEnd;
    const nx = 46, nd = Math.ceil((dMax - dMin) / 4);
    const pos = new Float32Array((nx + 1) * (nd + 1) * 3);
    const col = new Float32Array((nx + 1) * (nd + 1) * 3);
    const c = new THREE.Color();
    const snow = new THREE.Color(0xf4f8ff), snowShade = new THREE.Color(0xdde8f6), bank = new THREE.Color(0xe2ecf8);
    const dirt = new THREE.Color(0x8a6447), grass = new THREE.Color(0x6f9a52), road = new THREE.Color(0xb9c2cf), street = new THREE.Color(0xa7b0bc);
    let k = 0;
    for (let j = 0; j <= nd; j++) {
      const d = dMin + (j / nd) * (dMax - dMin);
      const hw = this.halfWidth(d);
      for (let i = 0; i <= nx; i++) {
        // Denser columns near the track, sparse out on the banks.
        const u = i / nx * 2 - 1;
        const x = Math.sign(u) * Math.pow(Math.abs(u), 1.6) * (xMax - xMin) / 2;
        const y = this.groundY(x, d);
        pos[k] = x; pos[k + 1] = y; pos[k + 2] = -d;
        const ax = Math.abs(x) - hw;
        if (ax > 0) c.copy(bank).lerp(snowShade, Math.min(1, 0.5 + 0.5 * Math.sin(d * 0.07 + x))).lerp(snow, Math.max(0, 1 - ax / 6));
        else c.copy(snow).lerp(snowShade, 0.25 + 0.25 * Math.sin(x * 0.7 + d * 0.21));
        for (const p of this.patches) {
          const a = (x - p.x) / (p.rx + 1.5), b = (d - p.d) / (p.rd + 1.5);
          const q = a * a + b * b;
          if (q < 1) c.copy(q < 0.6 ? dirt : grass).lerp(dirt, Math.sin(x * 3 + d) * 0.3 + 0.3);
        }
        for (const r of this.roads) if (Math.abs(d - r.d) < r.w / 2) c.copy(road);
        if (d > this.townStart - 6 && d < this.townEnd + 20 && ax < 0) {
          const crossStreet = ((d - this.townStart - 10 + 8.5) % 17 + 17) % 17 < 5;
          if (Math.abs(x) < 7.5 || crossStreet) c.copy(street);
        }
        col[k] = c.r; col[k + 1] = c.g; col[k + 2] = c.b;
        k += 3;
      }
    }
    const idx = [];
    for (let j = 0; j < nd; j++) {
      for (let i = 0; i < nx; i++) {
        const a = j * (nx + 1) + i, b = a + 1, cc = a + nx + 1, dd = cc + 1;
        idx.push(a, b, cc, b, dd, cc); // counter-clockwise from above, or the snow gets back-face culled
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    this.terrain = new THREE.Mesh(geo, this.snowMat);
    this.terrain.frustumCulled = false;
    this.group.add(this.terrain);
  }

  buildRamps() {
    if (!this.ramps.length) return;
    const pos = [], col = [];
    const white = new THREE.Color(0xffffff), blue = new THREE.Color(0x4aa8ff), orange = new THREE.Color(0xff7a2f);
    const push = (x, y, d, c) => { pos.push(x, y, -d); col.push(c.r, c.g, c.b); };
    for (const r of this.ramps) {
      const n = 8;
      const surf = (x, u) => this.groundY(x, r.d + u) + r.h * Math.pow(u / r.len, 1.4);
      const xl = r.x - r.w / 2, xr = r.x + r.w / 2;
      for (let i = 0; i < n; i++) {
        const u0 = (i / n) * r.len, u1 = ((i + 1) / n) * r.len;
        const c = i >= n - 1 ? orange : i % 2 ? white : blue;
        // top
        push(xl, surf(xl, u0), r.d + u0, c); push(xr, surf(xr, u0), r.d + u0, c); push(xl, surf(xl, u1), r.d + u1, c);
        push(xr, surf(xr, u0), r.d + u0, c); push(xr, surf(xr, u1), r.d + u1, c); push(xl, surf(xl, u1), r.d + u1, c);
        // sides
        for (const x of [xl, xr]) {
          const g0 = this.groundY(x, r.d + u0) - 0.3, g1 = this.groundY(x, r.d + u1) - 0.3;
          push(x, g0, r.d + u0, blue); push(x, surf(x, u0), r.d + u0, blue); push(x, g1, r.d + u1, blue);
          push(x, surf(x, u0), r.d + u0, blue); push(x, surf(x, u1), r.d + u1, blue); push(x, g1, r.d + u1, blue);
        }
      }
      // lip wall
      const u = r.len;
      push(xl, this.groundY(xl, r.d + u) - 0.3, r.d + u, orange); push(xl, surf(xl, u), r.d + u, orange); push(xr, surf(xr, u), r.d + u, orange);
      push(xl, this.groundY(xl, r.d + u) - 0.3, r.d + u, orange); push(xr, surf(xr, u), r.d + u, orange); push(xr, this.groundY(xr, r.d + u) - 0.3, r.d + u, orange);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.computeVertexNormals();
    const mat = patchMaterial(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide }), { snow: true });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.frustumCulled = false;
    this.group.add(mesh);
  }

  // Orange/blue piste poles mark the edges so steering is readable at a glance.
  buildPisteMarkers() {
    const geo = new THREE.CylinderGeometry(0.09, 0.09, 1.8, 5).translate(0, 0.9, 0);
    const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const n = Math.ceil(this.L / 14) * 2;
    const mesh = new THREE.InstancedMesh(geo, mat, n);
    const ca = new THREE.Color(0xff6a2a), cb = new THREE.Color(0x2f7dff);
    let k = 0;
    for (let d = 6; d < this.L && k < n - 1; d += 14) {
      for (const side of [-1, 1]) {
        const x = side * (this.halfWidth(d) + 0.6);
        _m.makeTranslation(x, this.groundY(x, d), -d);
        mesh.setMatrixAt(k, _m);
        mesh.setColorAt(k, side < 0 ? ca : cb);
        k++;
      }
    }
    mesh.count = k;
    this.group.add(mesh);
  }

  buildBackdrop() {
    // Distant peaks that frame the valley; cheap cones, no fog so they read as far away silhouettes.
    const R = this.rng;
    const geo = new THREE.ConeGeometry(1, 1, 7, 1).translate(0, 0.5, 0);
    const pos = geo.attributes.position;
    const col = new Float32Array(pos.count * 3);
    const rock = new THREE.Color(0x8fa3bf), cap = new THREE.Color(0xffffff);
    for (let i = 0; i < pos.count; i++) {
      const c = pos.getY(i) > 0.55 ? cap : rock;
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const n = 40;
    const mesh = new THREE.InstancedMesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, fog: false }), n);
    for (let i = 0; i < n; i++) {
      const d = this.dEnd * (i / n) + R.range(0, 80) + 150;
      const side = i % 2 ? 1 : -1;
      const h = R.range(120, 260);
      const rad = h * R.range(0.55, 0.8);
      // Keep the whole base clear of the valley so a peak never swallows the camera.
      const x = side * (rad + R.range(90, 200));
      _p.set(x, this.baseY(d) - 40, -d);
      _q.setFromAxisAngle(_up, R.range(0, 6));
      _s.set(rad, h, rad);
      _m.compose(_p, _q, _s);
      mesh.setMatrixAt(i, _m);
    }
    mesh.frustumCulled = false;
    this.group.add(mesh);
  }

  dispose() {
    this.scene.remove(this.group);
    const shared = new Set();
    for (const k in this.lib) if (k !== 'chunk') shared.add(this.lib[k].geometry);
    this.group.traverse((o) => {
      if (!o.isMesh) return;
      if (o.isInstancedMesh) o.dispose();
      if (!shared.has(o.geometry)) o.geometry.dispose();
      o.material.map?.dispose();
      o.material.dispose();
    });
  }
}

function makeChunkDef() {
  const geo = new THREE.IcosahedronGeometry(1, 0).toNonIndexed();
  const col = new Float32Array(geo.attributes.position.count * 3);
  const c = new THREE.Color(0xf6faff);
  for (let i = 0; i < col.length; i += 3) { col[i] = c.r; col[i + 1] = c.g; col[i + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.translate(0, 0.8, 0);
  geo.computeBoundingSphere();
  return { name: 'chunk', geometry: geo, radius: 1, height: 2, tier: 0, kind: 'chunk' };
}

function averageColor(geo) {
  const col = geo.attributes.color;
  if (!col) return new THREE.Color(0xcccccc);
  let r = 0, g = 0, b = 0;
  for (let i = 0; i < col.count; i++) { r += col.getX(i); g += col.getY(i); b += col.getZ(i); }
  return new THREE.Color(r / col.count, g / col.count, b / col.count);
}

export function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
