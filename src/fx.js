import * as THREE from 'three';
import { patchMaterial } from './shaders.js';

const MAX_PARTS = 700;
const TRAIL_N = 90;

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _c = new THREE.Color();

export class Fx {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;

    // ---- particles: one instanced low-poly rock/snow chunk mesh ----
    const geo = new THREE.IcosahedronGeometry(1, 0);
    const mat = patchMaterial(new THREE.MeshLambertMaterial({ flatShading: true }));
    this.parts = new THREE.InstancedMesh(geo, mat, MAX_PARTS);
    this.parts.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.parts.frustumCulled = false;
    this.parts.count = 0;
    for (let i = 0; i < MAX_PARTS; i++) this.parts.setColorAt(i, _c.setRGB(1, 1, 1));
    scene.add(this.parts);
    this.px = new Float32Array(MAX_PARTS * 3);
    this.pv = new Float32Array(MAX_PARTS * 3);
    this.life = new Float32Array(MAX_PARTS);
    this.maxLife = new Float32Array(MAX_PARTS);
    this.size = new Float32Array(MAX_PARTS);
    this.spinA = new Float32Array(MAX_PARTS);
    this.n = 0;
    this.axis = new THREE.Vector3(0.3, 1, 0.5).normalize();

    // ---- trail: ribbon pressed into the snow behind the ball ----
    const tg = new THREE.BufferGeometry();
    this.trailPos = new Float32Array(TRAIL_N * 2 * 3);
    tg.setAttribute('position', new THREE.BufferAttribute(this.trailPos, 3).setUsage(THREE.DynamicDrawUsage));
    this.trailCol = new Float32Array(TRAIL_N * 2 * 3).fill(1);
    tg.setAttribute('color', new THREE.BufferAttribute(this.trailCol, 3));
    const idx = [];
    for (let i = 0; i < TRAIL_N - 1; i++) {
      const a = i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    tg.setIndex(idx);
    this.trail = new THREE.Mesh(tg, new THREE.MeshBasicMaterial({
      color: 0xbcd3ee, transparent: true, opacity: 0.75, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2, side: THREE.DoubleSide,
    }));
    this.trail.frustumCulled = false;
    scene.add(this.trail);
    this.trailPts = []; // {x, d, w}
    this.trailAcc = 0;

    // ---- blob shadow ----
    const cv = document.createElement('canvas');
    cv.width = cv.height = 64;
    const g = cv.getContext('2d');
    const grd = g.createRadialGradient(32, 32, 4, 32, 32, 32);
    grd.addColorStop(0, 'rgba(40,70,120,0.55)');
    grd.addColorStop(1, 'rgba(40,70,120,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 64, 64);
    this.shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }),
    );
    this.shadow.frustumCulled = false;
    scene.add(this.shadow);

    // ---- mist / steam / powder puffs: soft round sprites that grow and fade ----
    const MN = 220;
    this.mN = MN;
    this.mPos = new Float32Array(MN * 3);
    this.mVel = new Float32Array(MN * 3);
    this.mCol = new Float32Array(MN * 3);
    this.mLife = new Float32Array(MN);
    this.mMax = new Float32Array(MN);
    this.mSize = new Float32Array(MN);
    this.mSizeAttr = new Float32Array(MN);
    this.mAlpha = new Float32Array(MN);
    this.mHead = 0;
    const mg = new THREE.BufferGeometry();
    mg.setAttribute('position', new THREE.BufferAttribute(this.mPos, 3).setUsage(THREE.DynamicDrawUsage));
    mg.setAttribute('color', new THREE.BufferAttribute(this.mCol, 3).setUsage(THREE.DynamicDrawUsage));
    mg.setAttribute('size', new THREE.BufferAttribute(this.mSizeAttr, 1).setUsage(THREE.DynamicDrawUsage));
    mg.setAttribute('alpha', new THREE.BufferAttribute(this.mAlpha, 1).setUsage(THREE.DynamicDrawUsage));
    this.mist = new THREE.Points(mg, new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { uScale: { value: 400 } },
      vertexShader: `
        attribute float size; attribute float alpha; attribute vec3 color;
        varying float vA; varying vec3 vC; uniform float uScale;
        void main() {
          vA = alpha; vC = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * uScale / max(0.5, -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying float vA; varying vec3 vC;
        void main() {
          vec2 d = gl_PointCoord - 0.5;
          float r = dot(d, d) * 4.0;
          float a = vA * smoothstep(1.0, 0.0, r) * (0.7 + 0.3 * (1.0 - r));
          if (a < 0.01) discard;
          gl_FragColor = vec4(vC, a);
        }`,
    }));
    this.mist.frustumCulled = false;
    scene.add(this.mist);
  }

  // Soft puff: snow powder, steam, dust. vel in world units/s; size in metres.
  puff(x, y, z, vx, vy, vz, size, life, color = 0xffffff, alpha = 0.55) {
    const i = this.mHead;
    this.mHead = (this.mHead + 1) % this.mN;
    const c = typeof color === 'number' ? _c.setHex(color) : color;
    this.mPos[i * 3] = x; this.mPos[i * 3 + 1] = y; this.mPos[i * 3 + 2] = z;
    this.mVel[i * 3] = vx; this.mVel[i * 3 + 1] = vy; this.mVel[i * 3 + 2] = vz;
    this.mCol[i * 3] = c.r; this.mCol[i * 3 + 1] = c.g; this.mCol[i * 3 + 2] = c.b;
    this.mLife[i] = this.mMax[i] = life;
    this.mSize[i] = size;
    this.mAlpha[i] = alpha;
    this.mBase = this.mBase || new Float32Array(this.mN);
    this.mBase[i] = alpha;
  }

  updateMist(dt) {
    const n = this.mN;
    for (let i = 0; i < n; i++) {
      if (this.mLife[i] <= 0) { this.mAlpha[i] = 0; this.mSizeAttr[i] = 0; continue; }
      this.mLife[i] -= dt;
      const t = 1 - Math.max(0, this.mLife[i]) / this.mMax[i];
      const o = i * 3;
      const drag = Math.exp(-2.2 * dt);
      this.mVel[o] *= drag; this.mVel[o + 1] = this.mVel[o + 1] * drag + 0.6 * dt; this.mVel[o + 2] *= drag;
      this.mPos[o] += this.mVel[o] * dt; this.mPos[o + 1] += this.mVel[o + 1] * dt; this.mPos[o + 2] += this.mVel[o + 2] * dt;
      this.mSizeAttr[i] = this.mSize[i] * (0.5 + 1.6 * t);
      this.mAlpha[i] = (this.mBase ? this.mBase[i] : 0.5) * (t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85);
    }
    const g = this.mist.geometry.attributes;
    g.position.needsUpdate = g.size.needsUpdate = g.alpha.needsUpdate = g.color.needsUpdate = true;
    this.mist.material.uniforms.uScale.value = window.innerHeight * 0.9;
  }

  // Trail look from the wardrobe: { color, rainbow, glow }.
  setTrailStyle(style) {
    const m = this.trail.material;
    m.color.setHex(style.rainbow ? 0xffffff : style.color);
    m.vertexColors = !!style.rainbow;
    m.blending = style.glow ? THREE.AdditiveBlending : THREE.NormalBlending;
    m.opacity = style.glow ? 0.9 : 0.75;
    m.needsUpdate = true;
    if (style.rainbow) {
      const c = new THREE.Color();
      for (let i = 0; i < TRAIL_N; i++) {
        if (style.palette) c.setHex(style.palette[Math.floor(i / 6) % style.palette.length]);
        else c.setHSL((i / TRAIL_N) * 2 % 1, 0.85, 0.6);
        for (const k of [0, 3]) { this.trailCol[i * 6 + k] = c.r; this.trailCol[i * 6 + k + 1] = c.g; this.trailCol[i * 6 + k + 2] = c.b; }
      }
      this.trail.geometry.attributes.color.needsUpdate = true;
    }
  }

  reset() {
    if (this.mLife) this.mLife.fill(0);
    this.n = 0;
    this.parts.count = 0;
    this.trailPts.length = 0;
    this.trail.geometry.setDrawRange(0, 0);
  }

  // Burst of chunks. color: THREE.Color or hex.
  burst(x, y, d, count, color, speed = 6, size = 0.25, up = 4) {
    const c = typeof color === 'number' ? _c.setHex(color) : color;
    // debris budget: smaller, fewer, short-lived, thrown away from the camera (never between camera and ball)
    count = Math.min(count, 12);
    if (this._bb === undefined) this._bb = 0;
    count = Math.min(count, Math.max(0, 40 - this._bb));
    this._bb += count;
    size *= 0.6;
    for (let k = 0; k < count; k++) {
      let i;
      if (this.n < MAX_PARTS) i = this.n++;
      else i = (Math.random() * MAX_PARTS) | 0; // recycle a random one when saturated
      const a = Math.random() * Math.PI * 2, e = Math.random();
      this.px[i * 3] = x + (Math.random() - 0.5) * size * 2;
      this.px[i * 3 + 1] = y + Math.random() * size;
      this.px[i * 3 + 2] = -d - Math.random() * size * 2;
      this.pv[i * 3] = Math.cos(a) * speed * (0.3 + e);
      this.pv[i * 3 + 1] = up * (0.4 + Math.random() * 0.6) * 0.8;
      this.pv[i * 3 + 2] = -Math.abs(Math.sin(a)) * speed * (0.3 + e);
      this.maxLife[i] = this.life[i] = 0.3 + Math.random() * 0.3;
      this.size[i] = size * (0.5 + Math.random());
      this.spinA[i] = Math.random() * 6;
      this.parts.setColorAt(i, c);
    }
    this.parts.instanceColor.needsUpdate = true;
  }

  update(dt, ball) {
    const w = this.world;
    this.updateMist(dt);
    this._bb = 0;
    // particles
    let n = this.n;
    for (let i = 0; i < n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        // swap-remove
        n--;
        this.copyPart(n, i);
        i--;
        continue;
      }
      const o = i * 3;
      this.pv[o + 1] -= 22 * dt;
      this.px[o] += this.pv[o] * dt;
      this.px[o + 1] += this.pv[o + 1] * dt;
      this.px[o + 2] += this.pv[o + 2] * dt;
      const gy = w.groundY(this.px[o], -this.px[o + 2]);
      if (this.px[o + 1] < gy) {
        this.px[o + 1] = gy;
        this.pv[o + 1] *= -0.3;
        this.pv[o] *= 0.6;
        this.pv[o + 2] *= 0.6;
      }
      this.spinA[i] += dt * 8;
      const t = this.life[i] / this.maxLife[i];
      _p.set(this.px[o], this.px[o + 1], this.px[o + 2]);
      _q.setFromAxisAngle(this.axis, this.spinA[i]);
      _s.setScalar(this.size[i] * Math.min(1, t * 3));
      _m.compose(_p, _q, _s);
      this.parts.setMatrixAt(i, _m);
    }
    this.n = n;
    this.parts.count = n;
    this.parts.instanceMatrix.needsUpdate = true;

    // shadow
    const gy = w.groundY(ball.x, ball.d) + w.rampAt(ball.x, ball.d);
    const lift = Math.max(0, ball.y - ball.r - gy);
    this.shadow.position.set(ball.x, gy + 0.06, -ball.d);
    this.shadow.scale.setScalar(ball.r * 2.6 * (1 + lift * 0.05));
    // Lie along the slope instead of half-buried / half-floating.
    const hs = Math.max(0.5, ball.r);
    this.shadow.rotation.x = -Math.atan((w.groundY(ball.x, ball.d - hs) - w.groundY(ball.x, ball.d + hs)) / (2 * hs));
    this.shadow.material.opacity = Math.max(0.2, 1 - lift * 0.08);

    this.updateTrail(dt, ball);
  }

  copyPart(from, to) {
    if (from === to) return;
    for (let k = 0; k < 3; k++) {
      this.px[to * 3 + k] = this.px[from * 3 + k];
      this.pv[to * 3 + k] = this.pv[from * 3 + k];
    }
    this.life[to] = this.life[from];
    this.maxLife[to] = this.maxLife[from];
    this.size[to] = this.size[from];
    this.spinA[to] = this.spinA[from];
    this.parts.getColorAt(from, _c);
    this.parts.setColorAt(to, _c);
    this.parts.instanceColor.needsUpdate = true;
  }

  updateTrail(dt, ball) {
    const pts = this.trailPts;
    const last = pts[pts.length - 1];
    const step = 0.6 + ball.r * 0.25;
    if (ball.airborne) {
      if (last && !last.gap) pts.push({ x: last.x, d: last.d, w: 0, gap: true });
    } else if (!last || Math.hypot(ball.x - last.x, ball.d - last.d) > step) {
      // After a jump, start with a zero-width point at the landing spot so no wedge spans the flight.
      if (last && last.gap) pts.push({ x: ball.x, d: ball.d, w: 0, gap: true });
      pts.push({ x: ball.x, d: ball.d, w: ball.r * 0.85 });
    }
    while (pts.length > TRAIL_N) pts.shift();
    const w = this.world;
    const arr = this.trailPos;
    const n = pts.length;
    for (let i = 0; i < n; i++) {
      const p = pts[i];
      const nx = pts[Math.min(n - 1, i + 1)], pv = pts[Math.max(0, i - 1)];
      let tx = nx.x - pv.x, td = nx.d - pv.d;
      const len = Math.hypot(tx, td) || 1;
      tx /= len; td /= len;
      // perpendicular in xz (world z = -d)
      const fade = Math.min(1, i / 12);
      const hw = p.w * fade;
      const lx = p.x + td * hw, ld = p.d - tx * hw;
      const rx = p.x - td * hw, rd = p.d + tx * hw;
      arr[i * 6] = lx; arr[i * 6 + 1] = w.groundY(lx, ld) + 0.04; arr[i * 6 + 2] = -ld;
      arr[i * 6 + 3] = rx; arr[i * 6 + 4] = w.groundY(rx, rd) + 0.04; arr[i * 6 + 5] = -rd;
    }
    this.trail.geometry.attributes.position.needsUpdate = true;
    this.trail.geometry.setDrawRange(0, Math.max(0, (n - 1) * 6));
  }
}
