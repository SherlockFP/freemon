import * as THREE from 'three';
import { patchMaterial } from './shaders.js';

const STUCK_CAP = 28;   // per prop type; oldest gets buried first
const STUCK_TYPES = 22; // distinct prop types stuck on the ball at once (least recently eaten type is dropped)

const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _q2 = new THREE.Quaternion();
const _m = new THREE.Matrix4();
const _s = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _axis = new THREE.Vector3();

export class Ball {
  constructor(scene, lib, material) {
    this.lib = lib;
    this.material = material;
    this.group = new THREE.Group();   // position + squash only
    this.spin = new THREE.Group();    // accumulated rolling rotation
    this.group.add(this.spin);
    scene.add(this.group);

    this.snow = new THREE.Mesh(makeSnowGeometry(), patchMaterial(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }), { snow: true }));
    this.spin.add(this.snow);

    this.pp = 0; this.pv = 0; // scale punch spring (growth feedback)
    this.sq = 0; this.sqv = 0; // squash spring (landing / bounce): >0 = flattened
    this.hopY = 0; this.hopV = 0; this.hopping = false; this.onHopLand = null; // lobby bounce
    this.visK = 1; this.visT = 1;  // visual-only size factor (the giant power)
    this.stuck = {}; // type → { mesh, items: [], t }
    this.stuckT = 0;
    this.reset(0.55);
  }

  reset(r) {
    this.r = r;
    this.x = 0; this.d = 0; this.y = 0;
    this.vx = 0; this.vy = 0;
    this.speed = 0;
    this.airborne = false;
    this.airTime = 0;
    this.spin.quaternion.identity();
    for (const k of Object.keys(this.stuck)) this.dropSlot(k);
    this.pp = 0; this.pv = 0; this.sq = 0; this.sqv = 0;
    this.hopY = 0; this.hopV = 0; this.hopping = false;
    this.visK = 1; this.visT = 1;
    this.applyScale();
    this.group.scale.set(1, 1, 1);
  }

  applyScale() {
    this.snow.scale.setScalar(this.r * (1 + this.pp) * this.visK);
  }

  // Growth punch: a quick springy overshoot of the snowball's scale (peak about 0.9 * a, settles in ~0.25 s).
  punch(a) { this.pv += a * 45; }

  // Landing / hit squash: a = 0.1..0.4 (fraction flattened at the peak).
  squash(a) { this.sqv += a * 40; }

  // Lobby bounce: a hop with stretch on the way up and squash on landing.
  bounce(v = 7.5) {
    this.hopV = v;
    this.hopping = true;
    this.sqv -= 5; // stretch
  }

  setVisual(k) { this.visT = k; }

  tick(dt) {
    const h = Math.min(dt, 0.033);
    if (this.pp !== 0 || this.pv !== 0) {
      const w = 32, z = 0.32;
      this.pv += (-w * w * this.pp - 2 * z * w * this.pv) * h;
      this.pp += this.pv * h;
      if (Math.abs(this.pp) < 1e-4 && Math.abs(this.pv) < 1e-3) { this.pp = 0; this.pv = 0; }
    }
    if (this.sq !== 0 || this.sqv !== 0) {
      const w = 26, z = 0.34;
      this.sqv += (-w * w * this.sq - 2 * z * w * this.sqv) * h;
      this.sq += this.sqv * h;
      this.sq = Math.max(-0.35, Math.min(0.5, this.sq));
      if (Math.abs(this.sq) < 1e-3 && Math.abs(this.sqv) < 1e-2) { this.sq = 0; this.sqv = 0; }
    }
    if (this.hopping) {
      this.hopV -= 24 * h;
      this.hopY += this.hopV * h;
      if (this.hopY <= 0 && this.hopV < 0) {
        const v = -this.hopV;
        this.hopY = 0; this.hopV = 0; this.hopping = false;
        this.sqv += 2.4 + v * 0.5;
        if (this.onHopLand) this.onHopLand(v);
      }
    }
    if (this.visK !== this.visT) {
      this.visK += (this.visT - this.visK) * Math.min(1, dt * 6);
      if (Math.abs(this.visT - this.visK) < 0.002) this.visK = this.visT;
    }
    this.applyScale();
  }

  setRadius(r) {
    this.r = r;
    this.applyScale();
    this.bury();
  }

  // Roll the visual sphere by the distance travelled this frame.
  roll(dx, dd) {
    const dist = Math.hypot(dx, dd);
    if (dist < 1e-5) return;
    // velocity in world: (dx, 0, -dd); axis = up × v
    _axis.set(-dd, 0, -dx).normalize();
    _q.setFromAxisAngle(_axis, dist / (this.r * this.visK));
    this.spin.quaternion.premultiply(_q);
  }

  // Roll about an arbitrary world axis (endless runner: the track curves, so "forward" isn't -Z).
  rollAxis(axis, angle) {
    if (Math.abs(angle) < 1e-6) return;
    _q.setFromAxisAngle(axis, angle);
    this.spin.quaternion.premultiply(_q);
  }

  sync() {
    const sy = 1 - this.sq, sx = 1 + this.sq * 0.55;
    const rr = this.r * this.visK;
    this.group.position.set(this.x, this.y + this.hopY - rr * (1 - sy), -this.d);
    if (sy !== 1 || this.group.scale.y !== 1) this.group.scale.set(sx, sy, sx);
  }

  // Glue a swallowed prop onto the surface, standing outward like a tiny planet. `shrink` scales it down a little so
  // a swallowed house does not turn the ball into a skyscraper.
  stick(def, worldPos, scale, shrink = 0.6) {
    let slot = this.stuck[def.name];
    if (!slot) {
      if (Object.keys(this.stuck).length >= STUCK_TYPES) {
        let oldest = null;
        for (const k in this.stuck) if (!oldest || this.stuck[k].t < this.stuck[oldest].t) oldest = k;
        if (oldest) this.dropSlot(oldest);
      }
      const mesh = new THREE.InstancedMesh(def.geometry, this.material, STUCK_CAP);
      mesh.count = 0;
      mesh.frustumCulled = false;
      this.spin.add(mesh);
      slot = this.stuck[def.name] = { mesh, items: [], t: 0 };
    }
    slot.t = ++this.stuckT;
    // Direction from ball centre to the prop, in the ball's rotating frame.
    _v.copy(worldPos).sub(this.group.position);
    if (_v.lengthSq() < 1e-6) _v.set(Math.random() - 0.5, 1, Math.random() - 0.5);
    _v.normalize();
    // Bias toward the top-back so new loot is visible from the chase camera.
    _v.y = Math.abs(_v.y) * 0.6 + 0.35;
    _v.z = Math.abs(_v.z) * 0.5 + 0.3; // back-top (toward the chase camera) so every pickup is seen right away
    _v.x += (Math.random() - 0.5) * 0.6;
    _v.normalize();
    _q2.copy(this.spin.quaternion).invert();
    _v.applyQuaternion(_q2);

    const sc = scale * shrink;
    const embed = this.r * 0.78;
    const item = {
      px: _v.x * embed, py: _v.y * embed, pz: _v.z * embed,
      q: new THREE.Quaternion().setFromUnitVectors(_up, _v),
      s: sc,
      top: embed + def.height * sc * 0.8,
    };
    // Random twist + lean so the pile looks chaotic, not stamped.
    _q.setFromAxisAngle(_up, Math.random() * Math.PI * 2);
    item.q.multiply(_q);
    _axis.set(Math.random() - 0.5, 0, Math.random() - 0.5).normalize();
    _q.setFromAxisAngle(_axis, (Math.random() - 0.5) * 0.9);
    item.q.multiply(_q);

    if (slot.items.length >= STUCK_CAP) slot.items.shift();
    slot.items.push(item);
    this.writeSlot(slot);
  }

  dropSlot(k) {
    const slot = this.stuck[k];
    if (!slot) return;
    this.spin.remove(slot.mesh);
    slot.mesh.dispose();
    delete this.stuck[k];
  }

  // Items get swallowed by the snow as the ball grows past them.
  bury() {
    const limit = this.r * 1.02;
    for (const k in this.stuck) {
      const slot = this.stuck[k];
      const items = slot.items;
      let w = 0;
      for (let i = 0; i < items.length; i++) if (items[i].top > limit) items[w++] = items[i];
      if (w !== items.length) {
        items.length = w;
        this.writeSlot(slot);
      }
    }
  }

  writeSlot(slot) {
    const { mesh, items } = slot;
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      _v.set(it.px, it.py, it.pz);
      _s.setScalar(it.s);
      _m.compose(_v, it.q, _s);
      mesh.setMatrixAt(i, _m);
    }
    mesh.count = items.length;
    mesh.instanceMatrix.needsUpdate = true;
  }

  stuckCount() {
    let n = 0;
    for (const k in this.stuck) n += this.stuck[k].items.length;
    return n;
  }
}

function makeSnowGeometry() {
  const geo = new THREE.IcosahedronGeometry(1, 3);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const base = new THREE.Color(0xffffff), shade = new THREE.Color(0xcfe2f7), c = new THREE.Color();
  const v = new THREE.Vector3();
  // Lumpy surface; displacement keyed by direction so shared vertices stay welded.
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    const n = Math.sin(v.x * 5.1 + v.y * 2.3) * Math.sin(v.z * 4.3 - v.x * 1.7) + Math.sin(v.y * 7.7 + v.z * 3.1) * 0.5;
    v.multiplyScalar(1 + n * 0.045);
    pos.setXYZ(i, v.x, v.y, v.z);
    c.copy(base).lerp(shade, Math.max(0, n) * 0.6);
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  return geo;
}
