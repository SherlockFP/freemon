import * as THREE from 'three';
import { patchMaterial } from './shaders.js';

const STUCK_CAP = 28; // per prop type; oldest gets buried first

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
    this.group = new THREE.Group();   // position only
    this.spin = new THREE.Group();    // accumulated rolling rotation
    this.group.add(this.spin);
    scene.add(this.group);

    this.snow = new THREE.Mesh(makeSnowGeometry(), patchMaterial(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }), { snow: true }));
    this.spin.add(this.snow);

    this.stuck = {}; // type → { mesh, items: [] }
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
    for (const k in this.stuck) {
      this.stuck[k].items.length = 0;
      this.stuck[k].mesh.count = 0;
    }
    this.snow.scale.setScalar(r);
  }

  setRadius(r) {
    this.r = r;
    this.snow.scale.setScalar(r);
    this.bury();
  }

  // Roll the visual sphere by the distance travelled this frame.
  roll(dx, dd) {
    const dist = Math.hypot(dx, dd);
    if (dist < 1e-5) return;
    // velocity in world: (dx, 0, -dd); axis = up × v
    _axis.set(-dd, 0, -dx).normalize();
    _q.setFromAxisAngle(_axis, dist / this.r);
    this.spin.quaternion.premultiply(_q);
  }

  // Roll about an arbitrary world axis (endless mode: the track curves, so "forward" isn't -Z).
  rollAxis(axis, angle) {
    if (Math.abs(angle) < 1e-6) return;
    _q.setFromAxisAngle(axis, angle);
    this.spin.quaternion.premultiply(_q);
  }

  sync() {
    this.group.position.set(this.x, this.y, -this.d);
  }

  // Glue a swallowed prop onto the surface, standing outward like a tiny planet.
  stick(def, worldPos, scale) {
    let slot = this.stuck[def.name];
    if (!slot) {
      const mesh = new THREE.InstancedMesh(def.geometry, this.material, STUCK_CAP);
      mesh.count = 0;
      mesh.frustumCulled = false;
      this.spin.add(mesh);
      slot = this.stuck[def.name] = { mesh, items: [] };
    }
    // Direction from ball centre to the prop, in the ball's rotating frame.
    _v.copy(worldPos).sub(this.group.position);
    if (_v.lengthSq() < 1e-6) _v.set(Math.random() - 0.5, 1, Math.random() - 0.5);
    _v.normalize();
    // Bias toward the top-front so new loot is visible from the chase camera.
    _v.y = Math.abs(_v.y) * 0.6 + 0.35;
    _v.x += (Math.random() - 0.5) * 0.6;
    _v.normalize();
    _q2.copy(this.spin.quaternion).invert();
    _v.applyQuaternion(_q2);

    const embed = this.r * 0.78;
    const item = {
      px: _v.x * embed, py: _v.y * embed, pz: _v.z * embed,
      q: new THREE.Quaternion().setFromUnitVectors(_up, _v),
      s: scale,
      top: embed + def.height * scale * 0.8,
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
