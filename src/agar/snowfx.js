// KARTOPU ARENA visual effects: continuous snow grooves (one ribbon per cell, merged into one dynamic mesh) + falling snow.
import * as THREE from 'three';

const P = 80;            // centreline points per cell slot (ring buffer)
const NV = 5;            // verts per cross-section: outer-L, rim-L, centre, rim-R, outer-R
const MAXV = 26000;      // total vertex cap (all ribbons)
const LIFE = 11;         // seconds a groove lasts
const OFF = [-1.35, -0.92, 0, 0.92, 1.35];

export class Trails {
  constructor(scene, slots) {
    this.n = slots;
    this.px = new Float32Array(slots * P); this.pz = new Float32Array(slots * P);
    this.pr = new Float32Array(slots * P); this.pt = new Float32Array(slots * P);
    this.head = new Int16Array(slots); this.cnt = new Int16Array(slots); this.own = new Int16Array(slots).fill(-1);
    this.pos = new Float32Array(MAXV * 3); this.col = new Float32Array(MAXV * 4);
    this.idx = new Uint32Array((MAXV / NV) * 24);
    const g = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage);
    this.aIdx = new THREE.BufferAttribute(this.idx, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.aPos); g.setAttribute('color', this.aCol); g.setIndex(this.aIdx);
    g.setDrawRange(0, 0);
    this.mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 3; scene.add(this.mesh);
    this.maxv = MAXV;
  }

  setCap(v) { this.maxv = Math.min(MAXV, v); }

  clear() { this.cnt.fill(0); this.head.fill(0); this.mesh.geometry.setDrawRange(0, 0); }

  /** record a centreline point for cell slot i when it moved far enough (only call for visible cells) */
  sample(i, owner, x, z, r, time) {
    const b = i * P;
    let c = this.cnt[i];
    if (c > 0) {
      const l = (this.head[i] + P - 1) % P, dx = x - this.px[b + l], dz = z - this.pz[b + l];
      const d2 = dx * dx + dz * dz, gap = Math.max(0.4 * r, 1.6);
      if (this.own[i] !== owner || d2 > (6 * r + 8) * (6 * r + 8)) { c = this.cnt[i] = 0; } // slot reused / teleport: new ribbon
      else if (d2 < gap * gap) return;
    }
    this.own[i] = owner;
    const h = this.head[i];
    this.px[b + h] = x; this.pz[b + h] = z; this.pr[b + h] = r; this.pt[b + h] = time;
    this.head[i] = (h + 1) % P;
    if (c < P) this.cnt[i] = c + 1;
  }

  /** rebuild the visible ribbons. live[i] = 1 when the slot's cell exists (its current position is appended as the ribbon head) */
  build(time, cells, camX, camZ, hx, zmin, zmax) {
    const pos = this.pos, col = this.col, idx = this.idx;
    let nv = 0, ni = 0;
    const m = 70;
    for (let i = 0; i < this.n; i++) {
      const cn = this.cnt[i];
      if (cn < 1) continue;
      const b = i * P, c = cells[i];
      const start = (this.head[i] - cn + P) % P;
      // age-trim: skip points that are fully faded
      let first = 0;
      while (first < cn && time - this.pt[b + (start + first) % P] >= LIFE) first++;
      let m2 = cn - first;
      const live = c.on && this.own[i] === c.o;
      if (m2 < 1 && !live) continue;
      // cheap visibility test on the newest point
      const li = b + (start + cn - 1) % P;
      if (Math.abs(this.px[li] - camX) > hx + m || this.pz[li] < zmin - m || this.pz[li] > zmax + m) continue;
      const total = m2 + (live ? 1 : 0);
      if (total < 2 || nv + total * NV > this.maxv) continue;
      const base = nv;
      for (let k = 0; k < total; k++) {
        let x, z, r, age;
        if (k < m2) { const q = b + (start + first + k) % P; x = this.px[q]; z = this.pz[q]; r = this.pr[q]; age = (time - this.pt[q]) / LIFE; }
        else { x = c.x; z = c.z; r = c.r; age = 0; }
        // tangent from neighbours
        let ax, az, bx, bz;
        if (k > 0) { if (k - 1 < m2) { const q = b + (start + first + k - 1) % P; ax = this.px[q]; az = this.pz[q]; } else { ax = c.x; az = c.z; } } else { ax = x; az = z; }
        if (k < total - 1) { if (k + 1 < m2) { const q = b + (start + first + k + 1) % P; bx = this.px[q]; bz = this.pz[q]; } else { bx = c.x; bz = c.z; } } else { bx = x; bz = z; }
        let tx = bx - ax, tz = bz - az; const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
        const nx = -tz, nz = tx;
        const hw = r * 0.9;
        if (age < 0) age = 0; if (age > 1) age = 1;
        // deeper-looking for big balls, fades with age; the very fresh end tapers into the ball
        const depth = Math.min(1, 0.55 + r * 0.025);
        const fade = (1 - age) * (1 - age * 0.3);
        const tip = k >= total - 2 ? 0.6 : 1;
        const w = hw * (1 + age * 0.12);
        for (let v = 0; v < NV; v++) {
          const o = OFF[v] * w, p3 = (nv + v) * 3, p4 = (nv + v) * 4;
          pos[p3] = x + nx * o; pos[p3 + 1] = 0.19; pos[p3 + 2] = z + nz * o;
          let cr, cg, cb, ca;
          if (v === 2) { cr = 0.5; cg = 0.64; cb = 0.84; ca = 0.62 * depth * fade * tip; }       // dark bluish groove floor
          else if (v === 1 || v === 3) { cr = 0.62; cg = 0.75; cb = 0.92; ca = 0.42 * depth * fade * tip; } // groove wall (shadowed)
          else { cr = 1; cg = 1; cb = 1; ca = 0.5 * fade * tip; }                                 // raised bright rim
          col[p4] = cr; col[p4 + 1] = cg; col[p4 + 2] = cb; col[p4 + 3] = ca;
        }
        nv += NV;
      }
      for (let k = 0; k < total - 1; k++) {
        const a = base + k * NV, bb = a + NV;
        for (let v = 0; v < NV - 1; v++) {
          idx[ni++] = a + v; idx[ni++] = bb + v; idx[ni++] = a + v + 1;
          idx[ni++] = a + v + 1; idx[ni++] = bb + v; idx[ni++] = bb + v + 1;
        }
      }
    }
    const g = this.mesh.geometry;
    g.setDrawRange(0, ni);
    this.aPos.addUpdateRange(0, nv * 3); this.aCol.addUpdateRange(0, nv * 4); this.aIdx.addUpdateRange(0, ni);
    this.aPos.needsUpdate = this.aCol.needsUpdate = this.aIdx.needsUpdate = true;
  }
}

export class Snowfall {
  constructor(scene, count = 2400) {
    this.N = count;
    this.u = new Float32Array(count); this.v = new Float32Array(count); this.w = new Float32Array(count);
    this.ph = new Float32Array(count); this.sp = new Float32Array(count);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) { this.u[i] = Math.random(); this.v[i] = Math.random(); this.w[i] = Math.random(); this.ph[i] = Math.random() * 6.283; this.sp[i] = 0.6 + Math.random() * 0.8; sz[i] = 0.5 + Math.random() * 0.9; }
    this.pos = new Float32Array(count * 3);
    const g = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.aPos); g.setAttribute('aSize', new THREE.BufferAttribute(sz, 1));
    const cv = document.createElement('canvas'); cv.width = cv.height = 64;
    const c2 = cv.getContext('2d'), gr = c2.createRadialGradient(32, 32, 1, 32, 32, 31);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.45, 'rgba(240,248,255,0.8)'); gr.addColorStop(1, 'rgba(235,245,255,0)');
    c2.fillStyle = gr; c2.fillRect(0, 0, 64, 64);
    this.tex = new THREE.CanvasTexture(cv); this.tex.colorSpace = THREE.SRGBColorSpace;
    this.uni = { map: { value: this.tex }, uScale: { value: 400 }, uHeight: { value: 100 } };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uni, transparent: true, depthWrite: false,
      vertexShader: `attribute float aSize; uniform float uScale, uHeight; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = clamp(aSize * uHeight * 0.009 * uScale / max(1.0, -mv.z), 2.0, 26.0); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform sampler2D map; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(t.rgb, t.a * 0.85); }`,
    });
    this.pts = new THREE.Points(g, mat);
    this.pts.frustumCulled = false; this.pts.renderOrder = 8;
    scene.add(this.pts);
    this.inten = 0.65; this.t = 0; this.cap = count;
  }

  setCap(n) { this.cap = Math.min(this.N, n); }

  /** heavy: 0..1 extra intensity (storm). H = camera height, asp = viewport aspect, pxH = viewport pixel height */
  update(dt, time, camX, camZ, H, asp, fov, pxH, heavy) {
    this.t = time;
    const tgt = 0.65 + heavy * 0.35 + 0.08 * Math.sin(time * 0.17); // slow natural gusts
    this.inten += (tgt - this.inten) * Math.min(1, dt * 0.8);
    const N = this.cap, cnt = Math.min(N, (N * Math.min(1, this.inten)) | 0);
    const hsx = Math.max(H * (0.9 * asp + 0.25), 40) , hsz = H * 0.95, top = H * 0.85;
    const ix = 1 / (2 * hsx), iz = 1 / (2 * hsz), fall = (3.5 + H * 0.1) * (1 + heavy * 0.7) / top;
    const windX = (0.05 + heavy * 0.25) * H * 0.06, u = this.u, v = this.v, w = this.w, ph = this.ph, sp = this.sp, pos = this.pos;
    const cxn = camX * ix, czn = (camZ - H * 0.1) * iz;
    for (let i = 0; i < cnt; i++) {
      let wi = w[i] - fall * sp[i] * dt; if (wi < 0) wi += 1; w[i] = wi;
      const s = Math.sin(time * 0.9 * sp[i] + ph[i]);
      u[i] += (windX * (0.6 + sp[i] * 0.5) + s * H * 0.02) * dt * ix;
      v[i] += Math.cos(time * 0.7 + ph[i] * 1.7) * H * 0.012 * dt * iz;
      let a = u[i] - cxn; a -= Math.floor(a);
      let b = v[i] - czn; b -= Math.floor(b);
      const p3 = i * 3;
      pos[p3] = camX + (a - 0.5) * 2 * hsx;
      pos[p3 + 1] = wi * top + 0.5;
      pos[p3 + 2] = camZ - H * 0.1 + (b - 0.5) * 2 * hsz;
      if (u[i] > 1e4 || u[i] < -1e4) u[i] = Math.random();
    }
    this.pts.geometry.setDrawRange(0, cnt);
    this.aPos.needsUpdate = true;
    this.uni.uScale.value = pxH / (2 * Math.tan(fov * Math.PI / 360));
    this.uni.uHeight.value = H;
  }
}
