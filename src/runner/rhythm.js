import * as THREE from 'three';
import { LANES } from './track.js';

// ÇIĞ KAYMA HATTI — an occasional golden rhythm lane. A glowing strip with beat-synced pads: stay on it and cross the pads ON the
// beat (they pulse) to build a RİTİM xN chain (speed + score bonus). Leaving the strip ends the chain; there is never any damage.
const LEN = 100, SEG = 2, HALF = 1.0;
const _v = new THREE.Vector3();
const rnd = (a, b) => a + Math.random() * (b - a);
let PAD_GEO = null;

export class RhythmLane {
  constructor(run) {
    this.run = run;
    this.strip = null;       // { s0, s1, u, mesh, pads: [{s, mesh, hit}], swept }
    this.nextS = 1100 + rnd(0, 400);
    this.chain = 0;
    this.speedK = 1;
    this.on = false;
    this.lastS = 0;
    this.sweepT = 0;
    this.flash = 0; this.lastEnd = 0;
  }

  _build(s0, lane, beat, vs) {
    const run = this.run, tr = run.track, u = lane * run.laneW();
    const s1 = s0 + LEN;
    const n = Math.floor(LEN / SEG) + 1, pos = new Float32Array(n * 6), idx = [];
    for (let i = 0; i < n; i++) {
      const s = s0 + i * SEG;
      tr.toWorld(s, u - HALF, 0.07, _v); pos.set([_v.x, _v.y, _v.z], i * 6);
      tr.toWorld(s, u + HALF, 0.07, _v); pos.set([_v.x, _v.y, _v.z], i * 6 + 3);
      if (i < n - 1) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    // bright glow lines along both lane edges
    const EW = 0.08, epos = new Float32Array(n * 12), eidx = [];
    for (let i = 0; i < n; i++) {
      const s = s0 + i * SEG;
      tr.toWorld(s, u - HALF - EW, 0.1, _v); epos.set([_v.x, _v.y, _v.z], i * 12);
      tr.toWorld(s, u - HALF + EW, 0.1, _v); epos.set([_v.x, _v.y, _v.z], i * 12 + 3);
      tr.toWorld(s, u + HALF - EW, 0.1, _v); epos.set([_v.x, _v.y, _v.z], i * 12 + 6);
      tr.toWorld(s, u + HALF + EW, 0.1, _v); epos.set([_v.x, _v.y, _v.z], i * 12 + 9);
      if (i < n - 1) { const a = i * 4, b2 = a + 4; eidx.push(a, a + 1, b2, a + 1, b2 + 1, b2, a + 2, a + 3, b2 + 2, a + 3, b2 + 3, b2 + 2); }
    }
    const egeo = new THREE.BufferGeometry();
    egeo.setAttribute('position', new THREE.BufferAttribute(epos, 3)); egeo.setIndex(eidx);
    const emesh = new THREE.Mesh(egeo, new THREE.MeshBasicMaterial({ color: 0xffd23a, transparent: true, opacity: 0.6, depthWrite: false, side: THREE.DoubleSide }));
    emesh.frustumCulled = false;
    run.ctx.scene.add(emesh);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setIndex(idx);
    const mat = new THREE.MeshBasicMaterial({ color: 0xffc83a, transparent: true, opacity: 0.16, depthWrite: false, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.frustumCulled = false;
    run.ctx.scene.add(mesh);
    // pads every 2 beats at the beat the ball will actually meet (speed assumed constant over the lead time)
    const bpm = beat.bpm || 100, spb = 60 / bpm, gap = Math.max(14, vs * spb * 2);
    const tNext = (1 - beat.phase) * spb;
    const pads = [];
    if (!PAD_GEO) PAD_GEO = new THREE.SphereGeometry(0.5, 14, 8);
    const first = Math.max(s0 + 6, run.b.s + vs * tNext + Math.ceil((s0 + 6 - run.b.s - vs * tNext) / gap) * gap);
    for (let s = first; s < s1 - 4; s += gap) {
      const pm = new THREE.MeshBasicMaterial({ color: 0xffd23a, transparent: true, opacity: 0.55, depthWrite: false });
      const m = new THREE.Mesh(PAD_GEO, pm);
      tr.toWorld(s, u, 0.14, _v); m.position.copy(_v);
      m.scale.set(2.3, 0.25, 2.3);
      run.ctx.scene.add(m);
      pads.push({ s, mesh: m, hit: false });
    }
    this.strip = { s0, s1, u, mesh, emesh, pads, swept: -1e9 };
    this._sweep(true);
  }

  // clear everything that could hurt on the strip's lane (the track ahead is generated before the strip appears)
  _sweep(force) {
    const st = this.strip, ob = this.run.obstacles;
    if (!st || !ob) return;
    const hi = Math.min(st.s1 + 6, this.run.b.s + 200);
    if (!force && hi <= st.swept + 1) return;
    st.swept = hi;
    for (const o of ob.obs) {
      if (!o.alive || o.s + (o.ext || 2) < st.s0 - 6 || o.s - (o.ext || 2) > hi) continue;
      const wide = o.u === undefined || o.kind === 'moving' || o.kind === 'overhead';
      if (!wide && Math.abs(o.u - st.u) > 2.2) continue;
      if (o.pending) { const i = ob.pending.indexOf(o); if (i >= 0) ob.pending.splice(i, 1); o.pending = false; }
      o.alive = false;
      for (const p of o.parts) if (p.idx >= 0) { ob._release(p.key, p.idx); p.idx = -1; }
    }
  }

  _free() {
    const st = this.strip;
    if (!st) return;
    const sc = this.run.ctx.scene;
    sc.remove(st.mesh); st.mesh.geometry.dispose(); st.mesh.material.dispose();
    sc.remove(st.emesh); st.emesh.geometry.dispose(); st.emesh.material.dispose();
    for (const p of st.pads) { sc.remove(p.mesh); p.mesh.material.dispose(); }
    this.strip = null;
  }

  _end(msg) {
    this.chain = 0;
    this.on = false;
  }

  update(dt, beat) {
    const run = this.run, b = run.b, tr = run.track;
    if (!tr || run.level) { return; }
    // spawn
    if (!this.strip && b.s + 150 >= this.nextS && b.s > 400) {
      const s0 = Math.max(this.nextS, b.s + 130);
      const pa = tr.pieceAt(s0), pb = tr.pieceAt(s0 + LEN);
      const ok = pa && pb && pa.n === pb.n && !pa.junction && !pb.junction && !(tr.junctionAt && (tr.junctionAt(s0) || tr.junctionAt(s0 + LEN)))
        && !run.boss && !tr.bossHold && b.s + 130 > this.lastEnd;
      if (ok) {
        const m = Math.min(1, (LANES.length - 1) / 2);
        this._build(s0, Math.round(rnd(-m, m)), beat, Math.max(14, b.vs));
        this.lastEnd = s0 + LEN;
      } else this.nextS = b.s + 60;
    }
    const st = this.strip;
    this.flash = Math.max(0, this.flash - dt * 4);
    if (!st) { this.speedK += (1 - this.speedK) * Math.min(1, dt * 2); return; }
    this.sweepT -= dt;
    if (this.sweepT <= 0) { this.sweepT = 0.4; this._sweep(false); }
    // look: pulse with the beat (pads breathe, strip glows)
    const ph = beat.phase, pulse = Math.pow(1 - ph, 3);
    st.mesh.material.opacity = 0.14 + 0.08 * pulse + 0.08 * this.flash;
    st.emesh.material.opacity = 0.5 + 0.2 * pulse;
    const spb = 60 / (beat.bpm || 100);
    for (const p of st.pads) {
      const near = Math.abs(p.s - b.s) < 90;
      p.mesh.visible = near && !p.hit;
      if (!p.mesh.visible) continue;
      const k = 1 + 0.2 * pulse;
      p.mesh.scale.set(1.6 * k, 0.12, 1.6 * k);
      p.mesh.material.opacity = 0.45 + 0.2 * pulse;
    }
    // ball on the strip?
    const inside = b.s >= st.s0 && b.s <= st.s1;
    const lat = Math.abs(b.u - st.u);
    if (inside && b.s > st.s0 + 0.5) {
      if (lat < HALF + 0.35) {
        if (!this.on) this.on = true;
      } else if (this.on) this._end('RİTİM BİTTİ');
      if (this.on) {
        for (const p of st.pads) {
          if (p.hit || p.s > b.s || p.s < this.lastS - 0.001) continue;
          p.hit = true;
          const d = Math.min(ph, 1 - ph);          // distance to the nearest beat, in beats
          if (d < 0.28 && lat < 1.3) this._padHit(p, d < 0.12);
        }
      }
    }
    this.lastS = b.s;
    if (!inside && b.s > st.s1) { if (this.on) this._end('RİTİM'); this._free(); this.nextS = st.s1 + rnd(1300, 1900) - LEN; }
    // speed bonus rides the chain (decays smoothly when it ends)
    const want = 1 + Math.min(0.12, this.chain * 0.012);
    this.speedK += (want - this.speedK) * Math.min(1, dt * 3);
  }

  _padHit(p, perfect) {
    const run = this.run;
    this.chain++;
    this.flash = 1;
    run.score += (20 + 10 * Math.min(this.chain, 12)) * run.mult * (perfect ? 1.5 : 1);
    run.ctx.audio.ui?.('select');
    run.ctx.platform.haptic?.('light');
    const bp = run.ctx.ball.group.position;
    run.ctx.fx.burst(bp.x, bp.y, -bp.z, 6, 0xffd24a, 3, 0.08, 3);
    if (this.chain === 3 || this.chain % 5 === 0) run.ctx.ui.toastSoft?.(`RİTİM x${this.chain}`);
  }

  dispose() { this._free(); this.chain = 0; this.on = false; this.speedK = 1; }
}
