// KARTOPU ARENA - agar.io style snowball mode. Own scene + camera, own DOM overlay, own pointer input.
// Single player runs entirely here (no network code is loaded). A P2P lobby (PeerJS, src/agar/net.js) is imported lazily:
// the host runs the whole simulation, clients only send input and render snapshots.
import * as THREE from 'three';

// ------------------------------------------------------------------ constants
const R = 300; // arena radius (m)
const CAP = 160; // max live cells
const NOWN = 28; // owners (players + bots)
const FOOD = 2600, SPARE = 400, FT = FOOD + SPARE; // permanent pellets + slots for boost-trail pellets
const NVIR = 26, NPUP = 14;
const GS = 20, GN = 30; // food grid
const KR = 0.3; // radius = KR * sqrt(mass)
const MAXM = 22000;
const VIRR = 3, VIR_MIN = 130; // ice crystal radius / smallest mass that gets shattered
const MAXPIECES = 16;
const BEST_KEY = 'patpat.agar.best', XP_KEY = 'patpat.agar.xp', NICK_KEY = 'patpat.agar.nick';
const PUP_TYPES = [
  { id: 'mag', emoji: '🧲', name: 'MIKNATIS', col: 0xff5a5a, t: 9 },
  { id: 'shd', emoji: '🛡️', name: 'KALKAN', col: 0x4aa8ff, t: 7 },
  { id: 'spd', emoji: '⚡', name: 'HIZ', col: 0xffd23f, t: 7 },
  { id: 'big', emoji: '🍄', name: 'DEV', col: 0xb06bff, t: 0 },
];
const BOT_NAMES = ['Buzkıran', 'KarTanesi', 'Çığ Avcısı', 'YetiAvcısı', 'Kutup Ayısı', 'DondurmaKral', 'Pamuk', 'Bora', 'Kızakçı', 'BuzAdam', 'KarPanda',
  'Soğuk Zeki', 'Kartopu Ali', 'Penguen Mehmet', 'Hasan Çığ', 'Eskimo Cemal', 'Zeybek', 'Fırtına', 'Kış Prensi', 'Sucuk', 'Lokum', 'Pofuduk', 'Ayaz', 'Kırağı',
  'Boran', 'Tipi', 'Karakış', 'Dondurma Ayşe', 'Çiğdem', 'Şerbetçi', 'Bulut', 'Karlı Kaya', 'Don Kişot', 'Kristal', 'Yumak', 'Poyraz'];
const FOOD_PAL = [0xffffff, 0xbfe6ff, 0xffd9e8, 0xfff3b0, 0xcdf5d0, 0xe3d4ff, 0xffc9a8, 0xa8f0f0];
const VOWELS = 'aeıioöuü';

const speedFor = (m) => 17 * Math.pow(m, -0.12);
const rnd = (a, b) => a + Math.random() * (b - a);
const clampN = (v, a, b) => (v < a ? a : v > b ? b : v);
const fmtM = (m) => (m >= 100000 ? Math.floor(m / 1000) + 'k' : String(Math.floor(m)));
const fmtT = (s) => { s = Math.floor(s); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
function accSuffix(name) {
  const low = name.toLocaleLowerCase('tr');
  let lv = 'e';
  for (let i = low.length - 1; i >= 0; i--) { if (VOWELS.includes(low[i])) { lv = low[i]; break; } }
  const endsV = VOWELS.includes(low[low.length - 1]);
  const s = (lv === 'a' || lv === 'ı') ? 'ı' : (lv === 'e' || lv === 'i') ? 'i' : (lv === 'o' || lv === 'u') ? 'u' : 'ü';
  if (endsV && /(si|sı|su|sü)$/.test(low)) return "'n" + s;
  return "'" + (endsV ? 'y' : '') + s;
}
const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch { return d; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, String(v)); } catch { /* ignore */ } };
const lvlOf = (xp) => Math.floor(Math.sqrt(Math.max(0, xp) / 60)) + 1;

function wm(a, p, x, y, z, s) {
  a[p] = s; a[p + 1] = 0; a[p + 2] = 0; a[p + 3] = 0;
  a[p + 4] = 0; a[p + 5] = s; a[p + 6] = 0; a[p + 7] = 0;
  a[p + 8] = 0; a[p + 9] = 0; a[p + 10] = s; a[p + 11] = 0;
  a[p + 12] = x; a[p + 13] = y; a[p + 14] = z; a[p + 15] = 1;
}

function spikyGeometry() {
  const g = new THREE.IcosahedronGeometry(1, 1);
  const base = new THREE.IcosahedronGeometry(1, 0).attributes.position;
  const keys = [];
  const v = new THREE.Vector3();
  for (let i = 0; i < base.count; i++) { v.fromBufferAttribute(base, i).normalize(); keys.push(v.clone()); }
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    let spike = false;
    for (let k = 0; k < keys.length; k++) if (v.dot(keys[k]) > 0.9995) { spike = true; break; }
    if (spike) v.multiplyScalar(1.55);
    else v.multiplyScalar(0.92);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

export class AgarMode {
  constructor({ renderer, post, ui, audio, save, platform, onExit } = {}) {
    this.renderer = renderer; this.post = post; this.ui = ui; this.audio = audio; this.save = save; this.platform = platform; this.onExit = onExit;
    this._scene = new THREE.Scene();
    this._scene.background = new THREE.Color(0x6fb0e6);
    this._camera = new THREE.PerspectiveCamera(50, 0.5, 2, 3500);
    this.app = document.getElementById('app') || document.body;
    this.dom = this.renderer.domElement;
    this.sz = new THREE.Vector2();
    this.tmpC = new THREE.Color();
    this.state = 'title'; // title | lobby | play | dead
    this.mp = null; // null | 'host' | 'client'
    this.net = null;
    this.me = 0;
    this.time = 0;
    this.nick = (lsGet(NICK_KEY, '') || '').slice(0, 12);
    this.best = parseFloat(lsGet(BEST_KEY, '0')) || 0;
    this.xp = parseFloat(lsGet(XP_KEY, '0')) || 0;
    this.camH = 110; this.camX = 0; this.camZ = 0; this.fs = 1;
    this.inp = { dx: 0, dz: 0, mag: 0, ldx: 0, ldz: 1 };
    this.stickId = null; this.sx = 0; this.sy = 0; this.keys = { l: 0, r: 0, u: 0, d: 0 };
    this.hudT = 0; this.lbT = 0; this.mapT = 0; this.netT = 0; this.sendT = 0; this.lastSnap = 0;
    this.mDirty = true; this.cDirty = true; this.vDirty = true;
    this.deadT = 0; this.disposed = false;
    this.spareHint = FOOD;
    this.fdn = 0;
    this.lb = []; this.lbN = 0;
    this.lastLevel = 1;
    this.resultEl = null; this.screenEl = null;
    this._lbCmp = (a, b) => b.mass - a.mass;

    this.initData();
    this.buildScene();
    this.buildHud();
    this.bindInput();
    this.initWorld();
  }

  get scene() { return this._scene; }
  get camera() { return this._camera; }

  // ------------------------------------------------------------------ data
  initData() {
    this.cells = [];
    for (let i = 0; i < CAP; i++) this.cells.push({ on: false, o: 0, x: 0, z: 0, vx: 0, vz: 0, m: 0, r: 0, merge: 0, tx: 0, tz: 0, killer: -1 });
    this.act = new Int16Array(CAP);
    this.tmpIdx = new Int16Array(CAP);
    this.owners = [];
    for (let i = 0; i < NOWN; i++) {
      const o = {
        id: i, name: '', col: 0xffffff, cr: 1, cg: 1, cb: 1, bot: true, human: null, alive: false, wasAlive: false, cellN: 0, mass: 0, cx: 0, cz: 0, lx: 0, lz: 0, maxR: 1, maxM: 0, ext: 0,
        dx: 0, dz: 1, mag: 0, ldx: 0, ldz: 1, boostT: 0, boostCd: 0, trailT: 0, splitCd: 0, shield: 0, magnet: 0, speed: 0, respawnT: 0, aiT: Math.random(), tx: 0, tz: 0, wanderT: 0,
        kills: 0, xpRun: 0, t0: 0, bestRank: 99, maxMass: 0, seen: 0, killer: -1, sprite: null, tex: null, spriteName: '',
      };
      this.owners.push(o);
    }
    // food
    this.fx = new Float32Array(FT); this.fz = new Float32Array(FT); this.fv = new Float32Array(FT);
    this.fcol = new Int32Array(FT);
    this.fnext = new Int32Array(FT); this.fprev = new Int32Array(FT); this.fcell = new Int32Array(FT); this.fin = new Uint8Array(FT);
    this.fd = new Uint8Array(FT); this.fdl = new Int32Array(FT);
    this.ghead = new Int32Array(GN * GN).fill(-1);
    // viruses + pickups
    this.vx = new Float32Array(NVIR); this.vz = new Float32Array(NVIR); this.von = new Uint8Array(NVIR); this.vt = new Float32Array(NVIR);
    this.px = new Float32Array(NPUP); this.pz = new Float32Array(NPUP); this.pon = new Uint8Array(NPUP); this.ptype = new Uint8Array(NPUP); this.pt = new Float32Array(NPUP);
    // feed
    this.feed = [{ t: '', until: 0 }, { t: '', until: 0 }, { t: '', until: 0 }, { t: '', until: 0 }];
  }

  // ------------------------------------------------------------------ scene
  buildScene() {
    const sc = this._scene;
    sc.add(new THREE.AmbientLight(0xffffff, 1.05));
    const dl = new THREE.DirectionalLight(0xffffff, 1.35);
    dl.position.set(0.5, 1, 0.35);
    sc.add(dl);
    // ground
    const cv = document.createElement('canvas');
    cv.width = cv.height = 512;
    const g = cv.getContext('2d');
    g.fillStyle = '#eef6ff'; g.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 700; i++) { g.fillStyle = Math.random() < 0.5 ? 'rgba(200,225,250,0.35)' : 'rgba(255,255,255,0.6)'; g.fillRect(Math.random() * 512, Math.random() * 512, 3 + Math.random() * 6, 3 + Math.random() * 6); }
    g.strokeStyle = 'rgba(150,190,230,0.55)'; g.lineWidth = 1.5;
    for (let i = 0; i <= 20; i++) { const p = (i * 512) / 20; g.beginPath(); g.moveTo(p, 0); g.lineTo(p, 512); g.stroke(); g.beginPath(); g.moveTo(0, p); g.lineTo(512, p); g.stroke(); }
    this.groundTex = new THREE.CanvasTexture(cv);
    this.groundTex.colorSpace = THREE.SRGBColorSpace;
    this.groundTex.anisotropy = 4;
    const gm = new THREE.Mesh(new THREE.CircleGeometry(R, 72).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: this.groundTex }));
    sc.add(gm);
    const sea = new THREE.Mesh(new THREE.CircleGeometry(3000, 24).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x4f90c9 }));
    sea.position.y = -0.3;
    sc.add(sea);
    const wall = new THREE.Mesh(new THREE.CylinderGeometry(R + 1.5, R + 1.5, 4, 72, 1, true), new THREE.MeshBasicMaterial({ color: 0xbfe3ff, side: THREE.DoubleSide, transparent: true, opacity: 0.85 }));
    wall.position.y = 2;
    sc.add(wall);
    const rim = new THREE.Mesh(new THREE.RingGeometry(R - 2, R + 3, 72).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x8cc8f5 }));
    rim.position.y = 0.05;
    sc.add(rim);

    // cells (+ blob shadows)
    const mk = (geo, mat, n, color) => {
      const m = new THREE.InstancedMesh(geo, mat, n);
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      m.frustumCulled = false;
      if (color) { m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3); m.instanceColor.setUsage(THREE.DynamicDrawUsage); }
      m.count = 0;
      sc.add(m);
      return m;
    };
    this.shadowMesh = mk(new THREE.CircleGeometry(1, 20).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x1a3a66, transparent: true, opacity: 0.2, depthWrite: false }), CAP, false);
    this.shadowMesh.position.y = 0.06;
    this.cellMesh = mk(new THREE.SphereGeometry(1, 22, 15), new THREE.MeshLambertMaterial({ color: 0xffffff }), CAP, true);
    this.foodMesh = mk(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshLambertMaterial({ color: 0xffffff }), FT, true);
    this.foodMesh.count = FT;
    this.virMesh = mk(spikyGeometry(), new THREE.MeshLambertMaterial({ color: 0x9fe8ff, flatShading: true, emissive: 0x1a6a8a }), NVIR, false);
    this.pupMesh = mk(new THREE.OctahedronGeometry(1.3, 0), new THREE.MeshBasicMaterial({ color: 0xffffff }), NPUP, true);
    this.pupMesh.count = NPUP;
    this.aura = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), new THREE.MeshBasicMaterial({ color: 0x66bbff, transparent: true, opacity: 0.28, depthWrite: false }));
    this.aura.visible = false; this.aura.frustumCulled = false;
    sc.add(this.aura);
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.94, 1, 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xff6a6a, transparent: true, opacity: 0.55, depthWrite: false, side: THREE.DoubleSide }));
    this.ring.visible = false; this.ring.position.y = 0.2; this.ring.frustumCulled = false;
    sc.add(this.ring);
    // name sprites
    for (const o of this.owners) {
      const cvs = document.createElement('canvas');
      cvs.width = 256; cvs.height = 64;
      const tex = new THREE.CanvasTexture(cvs);
      tex.colorSpace = THREE.SRGBColorSpace;
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false }));
      sp.renderOrder = 10; sp.visible = false; sp.frustumCulled = true;
      sc.add(sp);
      o.sprite = sp; o.tex = tex;
    }
  }

  setName(o, name, isMe) {
    if (o.spriteName === name && o.isMeTag === isMe) return;
    o.name = name; o.spriteName = name; o.isMeTag = isMe;
    const cvs = o.tex.image;
    const g = cvs.getContext('2d');
    g.clearRect(0, 0, 256, 64);
    g.font = '900 38px "Trebuchet MS", system-ui, sans-serif';
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.lineJoin = 'round'; g.lineWidth = 9; g.strokeStyle = 'rgba(10,30,60,0.92)';
    g.strokeText(name, 128, 34, 246);
    g.fillStyle = isMe ? '#ffe066' : '#ffffff';
    g.fillText(name, 128, 34, 246);
    o.tex.needsUpdate = true;
  }

  setColor(o, hex) {
    o.col = hex;
    this.tmpC.setHex(hex);
    o.cr = this.tmpC.r; o.cg = this.tmpC.g; o.cb = this.tmpC.b;
  }

  // ------------------------------------------------------------------ food grid
  gIdx(x, z) { return clampN(((x + R) / GS) | 0, 0, GN - 1) * GN + clampN(((z + R) / GS) | 0, 0, GN - 1); }
  gAdd(i) {
    const c = this.gIdx(this.fx[i], this.fz[i]);
    const h = this.ghead[c];
    this.fnext[i] = h; this.fprev[i] = -1;
    if (h !== -1) this.fprev[h] = i;
    this.ghead[c] = i; this.fcell[i] = c; this.fin[i] = 1;
  }
  gRemove(i) {
    if (!this.fin[i]) return;
    const p = this.fprev[i], n = this.fnext[i];
    if (p !== -1) this.fnext[p] = n; else this.ghead[this.fcell[i]] = n;
    if (n !== -1) this.fprev[n] = p;
    this.fin[i] = 0;
  }
  foodSize(v) { return (v >= 5 ? 0.95 : v >= 2 ? 0.58 : 0.42) * this.fs; }
  writeFood(i) {
    const a = this.foodMesh.instanceMatrix.array;
    const v = this.fv[i];
    if (v > 0) { const s = this.foodSize(v); wm(a, i * 16, this.fx[i], s, this.fz[i], s); } else wm(a, i * 16, 0, -5, 0, 0);
    this.mDirty = true;
  }
  setFoodColor(i, hex) {
    this.fcol[i] = hex;
    this.tmpC.setHex(hex);
    const a = this.foodMesh.instanceColor.array;
    a[i * 3] = this.tmpC.r; a[i * 3 + 1] = this.tmpC.g; a[i * 3 + 2] = this.tmpC.b;
    this.cDirty = true;
  }
  foodMark(i) { if (this.mp === 'host' && !this.fd[i]) { this.fd[i] = 1; this.fdl[this.fdn++] = i; } }
  foodPlace(i, x, z, v) {
    this.gRemove(i);
    this.fx[i] = x; this.fz[i] = z; this.fv[i] = v;
    if (v > 0) this.gAdd(i);
    this.writeFood(i);
    this.foodMark(i);
  }
  foodMove(i, x, z) {
    this.gRemove(i);
    this.fx[i] = x; this.fz[i] = z;
    this.gAdd(i);
    this.writeFood(i);
    this.foodMark(i);
  }
  baseVal(i) { return i % 60 === 0 ? 5 : 1; }
  randPos(out, pad) {
    const a = Math.random() * 6.2832, d = Math.sqrt(Math.random()) * (R - pad);
    out.x = Math.cos(a) * d; out.z = Math.sin(a) * d;
  }
  spawnPellet(x, z, v, hex) {
    for (let k = 0; k < SPARE; k++) {
      let i = this.spareHint + k; if (i >= FT) i -= SPARE;
      if (this.fv[i] === 0) { this.spareHint = i + 1 >= FT ? FOOD : i + 1; this.setFoodColor(i, hex); this.foodPlace(i, x, z, v); return i; }
    }
    return -1;
  }

  // ------------------------------------------------------------------ world init
  initWorld() {
    const p = { x: 0, z: 0 };
    this.fs = 1;
    for (let i = 0; i < FT; i++) { this.gRemove(i); this.fv[i] = 0; }
    this.ghead.fill(-1); this.fin.fill(0);
    for (let i = 0; i < FOOD; i++) {
      this.randPos(p, 2);
      const gold = i % 60 === 0;
      this.setFoodColor(i, gold ? 0xffc400 : FOOD_PAL[(Math.random() * FOOD_PAL.length) | 0]);
      this.fx[i] = p.x; this.fz[i] = p.z; this.fv[i] = this.baseVal(i);
      this.gAdd(i);
    }
    for (let i = FOOD; i < FT; i++) wm(this.foodMesh.instanceMatrix.array, i * 16, 0, -5, 0, 0);
    for (let i = 0; i < FOOD; i++) this.writeFood(i);
    this.mDirty = true;
    for (let i = 0; i < NVIR; i++) { this.randPos(p, 12); this.vx[i] = p.x; this.vz[i] = p.z; this.von[i] = 1; this.vt[i] = 0; }
    this.vDirty = true;
    for (let i = 0; i < NPUP; i++) { this.randPos(p, 12); this.px[i] = p.x; this.pz[i] = p.z; this.pon[i] = 1; this.ptype[i] = i % 4; this.pt[i] = 0; this.setPupColor(i); }
    for (const c of this.cells) c.on = false;
    // bots
    const names = BOT_NAMES.slice();
    for (let i = names.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; const t = names[i]; names[i] = names[j]; names[j] = t; }
    for (let i = 0; i < NOWN; i++) {
      const o = this.owners[i];
      o.bot = i !== 0; o.human = null; o.alive = false; o.wasAlive = false; o.respawnT = 0; o.shield = o.magnet = o.speed = o.boostT = o.boostCd = 0;
      if (i === 0) { this.setColor(o, 0xbfeaff); this.setName(o, this.nick || 'Sen', true); } else {
        this.tmpC.setHSL((i * 0.6180339) % 1, 0.72, 0.56);
        this.setColor(o, this.tmpC.getHex());
        this.setName(o, names[i % names.length], false);
        o.isMeTag = false;
      }
    }
    this.fdn = 0; this.fd.fill(0);
    if (this.mp !== 'client') {
      for (let i = 1; i < NOWN; i++) {
        let m = 22 * Math.exp(Math.random() * 3.1);
        if (i <= 2) m = rnd(1400, 3200);
        this.spawnOwner(this.owners[i], m);
      }
    }
  }

  setPupColor(i) {
    this.tmpC.setHex(PUP_TYPES[this.ptype[i]].col);
    const a = this.pupMesh.instanceColor.array;
    a[i * 3] = this.tmpC.r; a[i * 3 + 1] = this.tmpC.g; a[i * 3 + 2] = this.tmpC.b;
    this.pupMesh.instanceColor.needsUpdate = true;
  }

  newCell(o, x, z, m) {
    for (let i = 0; i < CAP; i++) {
      const c = this.cells[i];
      if (!c.on) { c.on = true; c.o = o.id; c.x = c.tx = x; c.z = c.tz = z; c.vx = c.vz = 0; c.m = m; c.r = KR * Math.sqrt(m); c.merge = 0; c.killer = -1; return c; }
    }
    return null;
  }

  spawnOwner(o, m) {
    const p = { x: 0, z: 0 };
    for (let t = 0; t < 10; t++) {
      this.randPos(p, 25);
      let ok = true;
      for (let i = 0; i < CAP; i++) { const c = this.cells[i]; if (c.on && c.m > m * 0.8 && (c.x - p.x) * (c.x - p.x) + (c.z - p.z) * (c.z - p.z) < 900) { ok = false; break; } }
      if (ok) break;
    }
    this.newCell(o, p.x, p.z, m);
    o.alive = true; o.wasAlive = true; o.cellN = 1; o.mass = m; o.cx = p.x; o.cz = p.z; o.lx = p.x; o.lz = p.z;
    o.boostT = o.boostCd = o.splitCd = o.magnet = o.speed = 0; o.shield = o.bot ? 0 : 3;
    o.kills = 0; o.xpRun = 0; o.t0 = this.time; o.bestRank = 99; o.maxMass = m; o.killer = -1;
    o.tx = p.x; o.tz = p.z; o.wanderT = 0; o.mag = 0;
    o.dx = Math.cos(Math.random() * 6.28); o.dz = Math.sin(Math.random() * 6.28);
  }

  startMass() { return Math.min(80, 20 + (lvlOf(this.xp) - 1) * 3); }

  // ------------------------------------------------------------------ lifecycle
  start() {
    this.state = 'title';
    this.showTitle();
    this.hud.root.classList.add('ag-menu');
  }

  playSolo() {
    if (this.mp) return;
    this.state = 'play';
    this.clearScreen();
    this.hud.root.classList.remove('ag-menu');
    const o = this.owners[this.me];
    this.setName(o, this.nick || 'Sen', true);
    o.bot = false;
    this.spawnOwner(o, this.startMass());
    this.lastLevel = lvlOf(this.xp);
    this.audio?.init?.();
    this.audio?.whoosh?.();
  }

  respawnMe() {
    this.closeResult();
    if (this.mp === 'client') { this.net && this.net.send({ t: 'respawn' }); this.state = 'play'; this.owners[this.me].t0 = this.time; this.owners[this.me].maxMass = 0; this.owners[this.me].bestRank = 99; return; }
    const o = this.owners[this.me];
    o.bot = false;
    this.spawnOwner(o, this.startMass());
    this.state = 'play';
    this.audio?.whoosh?.();
  }

  exit() {
    if (this.net) { try { this.net.close(); } catch { /* ignore */ } this.net = null; }
    this.mp = null;
    if (this.onExit) this.onExit();
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    if (this.net) { try { this.net.close(); } catch { /* ignore */ } this.net = null; }
    this.unbindInput();
    if (this.hud && this.hud.root) this.hud.root.remove();
    if (this.screenEl) this.screenEl.remove();
    if (this.resultEl) this.resultEl.remove();
    this._scene.traverse((n) => {
      if (n.geometry) n.geometry.dispose();
      if (n.material) { if (n.material.map) n.material.map.dispose(); n.material.dispose(); }
    });
    this.groundTex.dispose();
    this._scene.clear();
  }

  // ------------------------------------------------------------------ input
  bindInput() {
    const d = this.dom;
    this._style = d.style.touchAction;
    d.style.touchAction = 'none';
    this.onDown = (e) => {
      if (this.state !== 'play') return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (this.stickId !== null) return;
      this.stickId = e.pointerId; this.sx = e.clientX; this.sy = e.clientY;
      try { d.setPointerCapture(e.pointerId); } catch { /* ignore */ }
      this.stickMouse = e.pointerType === 'mouse';
      if (!this.stickMouse) { this.hud.stick.style.display = 'block'; this.hud.stick.style.left = this.sx + 'px'; this.hud.stick.style.top = this.sy + 'px'; this.hud.knob.style.transform = 'translate(0px,0px)'; }
      this.onMove(e);
    };
    this.onMove = (e) => {
      if (e.pointerType === 'mouse') {
        const w = d.clientWidth || 1, h = d.clientHeight || 1;
        const dx = e.clientX - w / 2, dy = e.clientY - h / 2, len = Math.hypot(dx, dy);
        this.setDir(dx, dy, len, 0.18 * Math.min(w, h));
        return;
      }
      if (e.pointerId !== this.stickId) return;
      const dx = e.clientX - this.sx, dy = e.clientY - this.sy, len = Math.hypot(dx, dy);
      this.setDir(dx, dy, len, 55);
      const k = len > 55 ? 55 / len : 1;
      this.hud.knob.style.transform = 'translate(' + dx * k + 'px,' + dy * k + 'px)';
    };
    this.onUp = (e) => {
      if (e.pointerId !== this.stickId) return;
      this.stickId = null;
      if (e.pointerType !== 'mouse') { this.inp.mag = 0; this.hud.stick.style.display = 'none'; }
    };
    d.addEventListener('pointerdown', this.onDown);
    d.addEventListener('pointermove', this.onMove);
    d.addEventListener('pointerup', this.onUp);
    d.addEventListener('pointercancel', this.onUp);
    this.onKey = (e) => {
      const dn = e.type === 'keydown' ? 1 : 0;
      if (e.target && e.target.tagName === 'INPUT') return;
      switch (e.code) {
        case 'KeyA': case 'ArrowLeft': this.keys.l = dn; break;
        case 'KeyD': case 'ArrowRight': this.keys.r = dn; break;
        case 'KeyW': case 'ArrowUp': this.keys.u = dn; break;
        case 'KeyS': case 'ArrowDown': this.keys.d = dn; break;
        case 'Space': if (dn && !e.repeat) this.doSplit(); e.preventDefault(); break;
        case 'ShiftLeft': case 'ShiftRight': case 'KeyE': if (dn && !e.repeat) this.doBoost(); break;
        default: break;
      }
      const kx = this.keys.r - this.keys.l, kz = this.keys.d - this.keys.u;
      if (kx || kz) this.setDir(kx, kz, Math.hypot(kx, kz), 1);
      else if (this.stickId === null && dn === 0) this.inp.mag = 0;
    };
    window.addEventListener('keydown', this.onKey);
    window.addEventListener('keyup', this.onKey);
  }

  unbindInput() {
    const d = this.dom;
    d.removeEventListener('pointerdown', this.onDown);
    d.removeEventListener('pointermove', this.onMove);
    d.removeEventListener('pointerup', this.onUp);
    d.removeEventListener('pointercancel', this.onUp);
    window.removeEventListener('keydown', this.onKey);
    window.removeEventListener('keyup', this.onKey);
    d.style.touchAction = this._style || '';
  }

  setDir(dx, dy, len, full) {
    const i = this.inp;
    if (len < 4 && full > 2) { i.mag = 0; return; }
    i.dx = dx / len; i.dz = dy / len;
    i.mag = clampN(len / full, 0, 1);
    if (i.mag < 0.12) i.mag = 0; else { i.ldx = i.dx; i.ldz = i.dz; }
  }

  doBoost() {
    if (this.state !== 'play') return;
    if (this.mp === 'client') { this.net && this.net.send({ t: 'b' }); return; }
    this.boost(this.owners[this.me]);
  }
  doSplit() {
    if (this.state !== 'play') return;
    if (this.mp === 'client') { this.net && this.net.send({ t: 's' }); return; }
    this.split(this.owners[this.me]);
  }

  // ------------------------------------------------------------------ abilities
  boost(o) {
    if (!o.alive || o.boostCd > 0 || o.mass < 30) return false;
    for (let i = 0; i < CAP; i++) { const c = this.cells[i]; if (c.on && c.o === o.id) c.m = Math.max(15, c.m * 0.97); }
    o.boostT = 0.4; o.boostCd = 2.4; o.trailT = 0;
    if (o.id === this.me || o.human === 'host') this.audio?.whoosh?.();
    return true;
  }

  split(o) {
    if (!o.alive || o.splitCd > 0) return false;
    let n = 0;
    for (let i = 0; i < CAP; i++) if (this.cells[i].on && this.cells[i].o === o.id) this.tmpIdx[n++] = i;
    if (n >= MAXPIECES) return false;
    let did = false, total = n;
    for (let k = 0; k < n && total < MAXPIECES; k++) {
      const c = this.cells[this.tmpIdx[k]];
      if (!c.on || c.m < 40) continue;
      const half = c.m / 2;
      const nc = this.newCell(o, c.x, c.z, half);
      if (!nc) break;
      c.m = half; total++;
      nc.r = c.r;
      nc.vx = o.ldx * 30; nc.vz = o.ldz * 30;
      nc.merge = c.merge = 10 + Math.min(8, half * 0.004);
      did = true;
    }
    if (did) { o.splitCd = 0.3; if (o.id === this.me || o.human === 'host') this.audio?.pop?.(0.6, 1); }
    return did;
  }

  popCell(c, vi) {
    // an ice crystal shatters a big ball into pieces
    this.von[vi] = 0; this.vt[vi] = 15; this.vDirty = true;
    const o = this.owners[c.o];
    let n = 0;
    for (let i = 0; i < CAP; i++) if (this.cells[i].on && this.cells[i].o === o.id) n++;
    const k = Math.min(7, MAXPIECES - n, Math.floor(c.m / 30));
    if (k < 1) { c.m += 30; return; }
    const part = c.m / (k + 1);
    c.m = part;
    const a0 = Math.random() * 6.28;
    for (let j = 0; j < k; j++) {
      const nc = this.newCell(o, c.x, c.z, part);
      if (!nc) { c.m += part; continue; }
      const a = a0 + (j * 6.2832) / k;
      nc.vx = Math.cos(a) * 32; nc.vz = Math.sin(a) * 32;
      nc.merge = 12; nc.r = c.r * 0.7;
    }
    c.merge = 12;
    if (o.id === this.me || o.human === 'host') { this.audio?.crash?.(); this.platform?.haptic?.('heavy'); }
  }

  applyPickup(o, type) {
    const t = PUP_TYPES[type];
    if (type === 0) o.magnet = t.t; else if (type === 1) o.shield = t.t; else if (type === 2) o.speed = t.t;
    else for (let i = 0; i < CAP; i++) { const c = this.cells[i]; if (c.on && c.o === o.id) c.m = Math.min(MAXM, c.m * 1.3 + 10); }
    if (o.id === this.me || o.human === 'host') this.audio?.chime?.();
  }

  // ------------------------------------------------------------------ simulation (single player + host)
  simulate(dt) {
    const owners = this.owners, cells = this.cells;
    // local player input
    const me = owners[this.me];
    if (me.alive && this.state === 'play') {
      const i = this.inp;
      me.dx = i.dx; me.dz = i.dz; me.mag = i.mag;
      if (i.mag > 0) { me.ldx = i.dx; me.ldz = i.dz; }
    }
    // owners: timers + ai
    for (let k = 0; k < NOWN; k++) {
      const o = owners[k];
      if (o.boostT > 0) o.boostT -= dt;
      if (o.boostCd > 0) o.boostCd -= dt;
      if (o.splitCd > 0) o.splitCd -= dt;
      if (o.shield > 0) o.shield -= dt;
      if (o.magnet > 0) o.magnet -= dt;
      if (o.speed > 0) o.speed -= dt;
      if (!o.alive) {
        if (o.bot && !o.human) { o.respawnT -= dt; if (o.respawnT <= 0 && o.wasAlive === false) this.spawnOwner(o, rnd(20, 45)); }
        continue;
      }
      if (o.bot) { o.aiT -= dt; if (o.aiT <= 0) { o.aiT = 0.18 + Math.random() * 0.1; this.think(o); } }
      else if (o.human && o.human !== 'host' && this.time - o.seen > 8) { this.dropHuman(o.human); }
      if (o.boostT > 0) {
        o.trailT -= dt;
        if (o.trailT <= 0) {
          o.trailT = 0.07;
          for (let i = 0; i < CAP; i++) {
            const c = cells[i];
            if (!c.on || c.o !== o.id || c.m < 20) continue;
            c.m -= 0.9;
            this.spawnPellet(c.x - o.ldx * (c.r + 0.8) + rnd(-0.4, 0.4), c.z - o.ldz * (c.r + 0.8) + rnd(-0.4, 0.4), 2, o.col);
          }
        }
      }
    }
    // movement
    const f = Math.exp(-4 * dt);
    let n = 0;
    for (let i = 0; i < CAP; i++) {
      const c = cells[i];
      if (!c.on) continue;
      this.act[n++] = i;
      const o = owners[c.o];
      let sp = speedFor(c.m) * (o.speed > 0 ? 1.45 : 1);
      let dx = o.dx, dz = o.dz, mg = o.mag;
      if (o.boostT > 0) { sp *= 2.4; dx = o.ldx; dz = o.ldz; mg = 1; }
      let vx = dx * sp * mg + c.vx, vz = dz * sp * mg + c.vz;
      if (c.merge <= 0 && o.cellN > 1) { const ax = o.cx - c.x, az = o.cz - c.z; const ad = Math.hypot(ax, az) + 0.01; vx += (ax / ad) * 2.5; vz += (az / ad) * 2.5; }
      c.x += vx * dt; c.z += vz * dt;
      c.vx *= f; c.vz *= f;
      if (c.merge > 0) c.merge -= dt;
      const d2 = c.x * c.x + c.z * c.z, lim = R - 1;
      if (d2 > lim * lim) { const k = lim / Math.sqrt(d2); c.x *= k; c.z *= k; }
      if (c.m > 150) c.m -= c.m * 0.0018 * dt;
    }
    // cell vs cell
    const gk = Math.min(1, dt * 10);
    for (let a = 0; a < n; a++) {
      const ca = cells[this.act[a]];
      if (!ca.on) continue;
      for (let b = a + 1; b < n; b++) {
        const cb = cells[this.act[b]];
        if (!cb.on || !ca.on) continue;
        const dx = cb.x - ca.x, dz = cb.z - ca.z, d2 = dx * dx + dz * dz, rs = ca.r + cb.r;
        if (d2 >= rs * rs) continue;
        if (ca.o === cb.o) {
          if (ca.merge > 0 || cb.merge > 0) {
            const d = Math.sqrt(d2) + 0.001, push = (rs - d) * 0.5 * gk;
            const nx = dx / d, nz = dz / d;
            ca.x -= nx * push; ca.z -= nz * push; cb.x += nx * push; cb.z += nz * push;
          } else if (d2 < Math.pow(Math.max(ca.r, cb.r) * 0.6, 2)) {
            if (ca.m >= cb.m) { ca.m = Math.min(MAXM, ca.m + cb.m); cb.on = false; } else { cb.m = Math.min(MAXM, cb.m + ca.m); ca.on = false; }
          }
          continue;
        }
        if (ca.m > cb.m * 1.25 && d2 < Math.pow(ca.r - cb.r * 0.4, 2)) this.eatCell(ca, cb);
        else if (cb.m > ca.m * 1.25 && d2 < Math.pow(cb.r - ca.r * 0.4, 2)) this.eatCell(cb, ca);
      }
    }
    // food, crystals, power-ups
    for (let a = 0; a < n; a++) {
      const c = cells[this.act[a]];
      if (!c.on) continue;
      const o = owners[c.o];
      const pull = o.magnet > 0 ? 14 : 0, reach = c.r + pull;
      const gx0 = clampN(((c.x - reach + R) / GS) | 0, 0, GN - 1), gx1 = clampN(((c.x + reach + R) / GS) | 0, 0, GN - 1);
      const gz0 = clampN(((c.z - reach + R) / GS) | 0, 0, GN - 1), gz1 = clampN(((c.z + reach + R) / GS) | 0, 0, GN - 1);
      const r2 = c.r * c.r, p2 = reach * reach;
      for (let gx = gx0; gx <= gx1; gx++) {
        for (let gz = gz0; gz <= gz1; gz++) {
          let i = this.ghead[gx * GN + gz];
          while (i !== -1) {
            const nx = this.fnext[i];
            const dx = this.fx[i] - c.x, dz = this.fz[i] - c.z, d2 = dx * dx + dz * dz;
            if (d2 < r2) {
              const v = this.fv[i];
              c.m = Math.min(MAXM, c.m + v); o.xpRun += v;
              if (i < FOOD) { const p = this.tmpP || (this.tmpP = { x: 0, z: 0 }); this.randPos(p, 2); this.foodPlace(i, p.x, p.z, this.baseVal(i)); } else this.foodPlace(i, 0, 0, 0);
            } else if (pull && d2 < p2) {
              const dd = Math.sqrt(d2), st = Math.min(dd - c.r * 0.5, 30 * dt);
              if (st > 0) this.foodMove(i, this.fx[i] - (dx / dd) * st, this.fz[i] - (dz / dd) * st);
            }
            i = nx;
          }
        }
      }
      if (c.m >= VIR_MIN && o.shield <= 0) {
        for (let v = 0; v < NVIR; v++) {
          if (!this.von[v]) continue;
          const dx = this.vx[v] - c.x, dz = this.vz[v] - c.z, lim = c.r - 0.9;
          if (dx * dx + dz * dz < lim * lim) { this.popCell(c, v); break; }
        }
      }
      if (!o.bot) {
        for (let p = 0; p < NPUP; p++) {
          if (!this.pon[p]) continue;
          const dx = this.px[p] - c.x, dz = this.pz[p] - c.z, lim = c.r + 1.4;
          if (dx * dx + dz * dz < lim * lim) { this.pon[p] = 0; this.pt[p] = 18; this.applyPickup(o, this.ptype[p]); }
        }
      }
    }
    for (let v = 0; v < NVIR; v++) if (!this.von[v]) { this.vt[v] -= dt; if (this.vt[v] <= 0) { const p = this.tmpP || (this.tmpP = { x: 0, z: 0 }); this.randPos(p, 12); this.vx[v] = p.x; this.vz[v] = p.z; this.von[v] = 1; this.vDirty = true; } }
    for (let p = 0; p < NPUP; p++) if (!this.pon[p]) { this.pt[p] -= dt; if (this.pt[p] <= 0) { const q = this.tmpP || (this.tmpP = { x: 0, z: 0 }); this.randPos(q, 12); this.px[p] = q.x; this.pz[p] = q.z; this.ptype[p] = (Math.random() * 4) | 0; this.pon[p] = 1; this.setPupColor(p); } }
  }

  eatCell(pred, prey) {
    const po = this.owners[prey.o];
    if (po.shield > 0) return;
    pred.m = Math.min(MAXM, pred.m + prey.m);
    this.owners[pred.o].xpRun += prey.m;
    prey.on = false;
    po.killer = pred.o;
    if (pred.o === this.me || this.owners[pred.o].human === 'host') this.audio?.pop?.(clampN(prey.m / 400, 0.1, 1), 1);
  }

  // ------------------------------------------------------------------ bot AI
  think(o) {
    const cells = this.cells;
    let thr = null, thrD = 1e9, prey = null, preyS = 0, preyD = 0;
    const cx = o.lx, cz = o.lz, om = o.maxM, orr = o.maxR;
    for (let i = 0; i < CAP; i++) {
      const c = cells[i];
      if (!c.on || c.o === o.id) continue;
      const dx = c.x - cx, dz = c.z - cz, d = Math.sqrt(dx * dx + dz * dz);
      if (c.m > om * 1.25) {
        const e = d - c.r;
        if (e < 14 + orr * 2.5 + c.r * 1.5 && e < thrD) { thrD = e; thr = c; }
      } else if (c.m * 1.25 < om && this.owners[c.o].shield <= 0 && d < 22 + orr * 4) {
        const s = c.m / (d + 6);
        if (s > preyS) { preyS = s; prey = c; preyD = d; }
      }
    }
    let tx = 0, tz = 0, mode = 0;
    if (thr) {
      mode = 1;
      tx = cx - (thr.x - cx); tz = cz - (thr.z - cz);
      if (om < VIR_MIN) {
        let bd = 45, bv = -1;
        for (let v = 0; v < NVIR; v++) { if (!this.von[v]) continue; const d = Math.hypot(this.vx[v] - cx, this.vz[v] - cz); if (d < bd) { bd = d; bv = v; } }
        if (bv >= 0) { tx = this.vx[bv]; tz = this.vz[bv]; }
      }
      if (thrD < orr * 1.5 + 4 && o.boostCd <= 0 && om > 40 && Math.random() < 0.5) this.boost(o);
    } else if (prey && (o.id % 3 !== 0 || preyD < 20 + orr * 2)) {
      mode = 2;
      tx = prey.x + prey.vx * 0.2; tz = prey.z + prey.vz * 0.2;
      if (preyD < orr * 3.2 + prey.r) {
        if (o.boostCd <= 0 && om > 60 && Math.random() < 0.4) this.boost(o);
        else if (om > prey.m * 2.6 && om > 120 && o.cellN < 3 && o.splitCd <= 0 && Math.random() < 0.25) { o.ldx = (tx - cx) / (preyD + 0.01); o.ldz = (tz - cz) / (preyD + 0.01); this.split(o); }
      }
    } else {
      // food
      let best = -1, bd = 1e9;
      const rad = 28;
      const gx0 = clampN(((cx - rad + R) / GS) | 0, 0, GN - 1), gx1 = clampN(((cx + rad + R) / GS) | 0, 0, GN - 1);
      const gz0 = clampN(((cz - rad + R) / GS) | 0, 0, GN - 1), gz1 = clampN(((cz + rad + R) / GS) | 0, 0, GN - 1);
      for (let gx = gx0; gx <= gx1; gx++) for (let gz = gz0; gz <= gz1; gz++) {
        for (let i = this.ghead[gx * GN + gz]; i !== -1; i = this.fnext[i]) {
          const d = Math.hypot(this.fx[i] - cx, this.fz[i] - cz) / (this.fv[i] >= 5 ? 3 : this.fv[i] >= 2 ? 1.5 : 1);
          if (d < bd) { bd = d; best = i; }
        }
      }
      if (best >= 0) { tx = this.fx[best]; tz = this.fz[best]; } else {
        o.wanderT -= 0.2;
        if (o.wanderT <= 0 || Math.hypot(o.tx - cx, o.tz - cz) < 8) { const p = this.tmpP || (this.tmpP = { x: 0, z: 0 }); this.randPos(p, 20); o.tx = p.x; o.tz = p.z; o.wanderT = 8; }
        tx = o.tx; tz = o.tz;
      }
    }
    let dx = tx - cx, dz = tz - cz;
    const dl = Math.hypot(dx, dz) + 0.001;
    dx /= dl; dz /= dl;
    if (om > 150) {
      for (let v = 0; v < NVIR; v++) {
        if (!this.von[v]) continue;
        const vx = cx - this.vx[v], vz = cz - this.vz[v], vd = Math.hypot(vx, vz);
        if (vd < orr + 8) { dx += (vx / vd) * 1.6; dz += (vz / vd) * 1.6; }
      }
    }
    const ed = Math.hypot(cx, cz);
    if (ed > R - 14) { dx -= (cx / ed) * 1.8; dz -= (cz / ed) * 1.8; }
    const l2 = Math.hypot(dx, dz) + 0.001;
    o.dx = dx / l2; o.dz = dz / l2; o.mag = 1; o.ldx = o.dx; o.ldz = o.dz;
    if (mode === 0 && o.mag) o.mag = 1;
  }

  // ------------------------------------------------------------------ accumulate owner stats
  accumulate() {
    const owners = this.owners, cells = this.cells;
    for (let k = 0; k < NOWN; k++) { const o = owners[k]; o.mass = 0; o.cellN = 0; o.cx = 0; o.cz = 0; o.maxM = 0; o.maxR = 0; o.ext = 0; }
    for (let i = 0; i < CAP; i++) {
      const c = cells[i];
      if (!c.on) continue;
      const o = owners[c.o];
      o.mass += c.m; o.cellN++; o.cx += c.x * c.m; o.cz += c.z * c.m;
      if (c.m > o.maxM) { o.maxM = c.m; o.maxR = c.r; o.lx = c.x; o.lz = c.z; }
    }
    for (let k = 0; k < NOWN; k++) {
      const o = owners[k];
      if (o.cellN > 0) { o.cx /= o.mass; o.cz /= o.mass; o.alive = true; if (o.mass > o.maxMass) o.maxMass = o.mass; } else o.alive = false;
    }
    for (let i = 0; i < CAP; i++) {
      const c = cells[i];
      if (!c.on) continue;
      const o = owners[c.o];
      const e = Math.hypot(c.x - o.cx, c.z - o.cz) + c.r;
      if (e > o.ext) o.ext = e;
    }
  }

  checkDeaths() {
    for (let k = 0; k < NOWN; k++) {
      const o = this.owners[k];
      if (!(o.wasAlive && !o.alive)) { if (o.alive) o.wasAlive = true; continue; }
      o.wasAlive = false;
      const killer = o.killer >= 0 ? this.owners[o.killer] : null;
      if (killer && killer !== o) { killer.kills++; this.pushFeed(killer.name + ', ' + o.name + accSuffix(o.name) + ' yuttu!'); }
      if (o.bot && !o.human) o.respawnT = 3 + Math.random() * 3;
      else if (k === this.me) this.onMeDead(killer);
      else if (o.human && o.human !== 'host') this.net && this.net.sendTo(o.human, { t: 'dead', k: killer ? killer.name : '' });
      o.killer = -1;
    }
  }

  dropHuman(id) {
    for (let k = 1; k < NOWN; k++) {
      const o = this.owners[k];
      if (o.human === id) { o.human = null; o.bot = true; o.respawnT = 2; this.pushFeed(o.name + ' ayrıldı'); if (!o.alive) o.wasAlive = false; }
    }
    if (this.net) this.net.kick(id);
  }

  // ------------------------------------------------------------------ result
  onMeDead(killer) {
    const o = this.owners[this.me];
    this.state = 'dead';
    this.deadT = 1.1;
    this.deadKiller = killer ? killer.name : '';
    this.audio?.crash?.();
    this.platform?.haptic?.('heavy');
    this.bank(o);
  }

  bank(o) {
    if (o.maxMass > this.best) { this.best = o.maxMass; lsSet(BEST_KEY, Math.floor(this.best)); this.newBest = true; } else this.newBest = false;
    this.xp += o.xpRun; lsSet(XP_KEY, Math.floor(this.xp));
    o.xpRun = 0;
  }

  showResult() {
    const o = this.owners[this.me];
    this.closeResult();
    const el = document.createElement('div');
    el.className = 'ag-screen';
    const card = document.createElement('div');
    card.className = 'ag-card';
    const row = (k, v) => `<div class="ag-r"><span>${k}</span><b>${v}</b></div>`;
    card.innerHTML = '<h2>YUTULDUN!</h2>' + (this.deadKiller ? `<div class="ag-sub"></div>` : '') +
      row('KÜTLE', fmtM(o.maxMass) + (this.newBest ? ' 🏆 REKOR' : '')) + row('SIRA', o.bestRank >= 99 ? '-' : '#' + o.bestRank) + row('SÜRE', fmtT(this.time - o.t0)) + row('YUTULAN', o.kills) + row('SEVİYE', lvlOf(this.xp)) + row('EN İYİ', fmtM(this.best));
    if (this.deadKiller) card.querySelector('.ag-sub').textContent = this.deadKiller + ' seni yuttu';
    const b1 = document.createElement('button'); b1.type = 'button'; b1.className = 'ag-btn go'; b1.textContent = 'TEKRAR';
    const b2 = document.createElement('button'); b2.type = 'button'; b2.className = 'ag-btn'; b2.textContent = 'MENÜ';
    b1.addEventListener('click', () => { this.audio?.init?.(); this.audio?.ui?.('confirm'); this.respawnMe(); });
    b2.addEventListener('click', () => { this.audio?.ui?.('back'); this.exit(); });
    card.append(b1, b2);
    el.appendChild(card);
    this.hud.root.appendChild(el);
    this.resultEl = el;
  }
  closeResult() { if (this.resultEl) { this.resultEl.remove(); this.resultEl = null; } }

  // ------------------------------------------------------------------ title / lobby screens
  clearScreen() { if (this.screenEl) { this.screenEl.remove(); this.screenEl = null; } }

  card(title) {
    this.clearScreen();
    const el = document.createElement('div');
    el.className = 'ag-screen';
    const card = document.createElement('div');
    card.className = 'ag-card';
    const h = document.createElement('h2'); h.textContent = title; card.appendChild(h);
    el.appendChild(card);
    this.hud.root.appendChild(el);
    this.screenEl = el;
    return card;
  }
  btn(parent, text, fn, cls) {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'ag-btn' + (cls ? ' ' + cls : ''); b.textContent = text;
    const kind = cls === 'go' ? 'confirm' : /GERİ|ÇIK|KAPAT|MENÜ/.test(text) ? 'back' : 'click';
    b.addEventListener('click', () => { this.audio?.init?.(); this.audio?.ui?.(kind); fn(); });
    parent.appendChild(b);
    return b;
  }
  nickInput(card) {
    const inp = document.createElement('input');
    inp.className = 'ag-inp'; inp.maxLength = 12; inp.placeholder = 'Takma adın'; inp.value = this.nick; inp.autocomplete = 'off';
    inp.addEventListener('input', () => { this.nick = inp.value.slice(0, 12); lsSet(NICK_KEY, this.nick); });
    card.appendChild(inp);
    return inp;
  }
  ensureNick() { if (!this.nick.trim()) { this.nick = 'Yeti' + ((Math.random() * 900 + 100) | 0); lsSet(NICK_KEY, this.nick); } return this.nick.trim(); }

  showTitle() {
    const c = this.card('KARTOPU ARENA');
    const s = document.createElement('div'); s.className = 'ag-sub'; s.textContent = 'Büyü, yut, hayatta kal! Rekor kütle: ' + fmtM(this.best) + ' · Seviye ' + lvlOf(this.xp); c.appendChild(s);
    this.nickInput(c);
    this.btn(c, 'TEK OYUNCU', () => { this.ensureNick(); this.playSolo(); }, 'go');
    this.btn(c, '👥 ODA KUR', () => this.hostLobby(), 'blue');
    this.btn(c, '🔑 ODAYA KATIL', () => this.joinScreen(), 'blue');
    this.btn(c, 'MENÜ', () => this.exit());
  }

  statusEl(card) { const s = document.createElement('div'); s.className = 'ag-status'; card.appendChild(s); return s; }

  async hostLobby() {
    const nick = this.ensureNick();
    const c = this.card('ODA KUR');
    const st = this.statusEl(c); st.textContent = 'Oda açılıyor...';
    try {
      const { ArenaNet } = await import('./net.js');
      if (this.disposed) return;
      this.net = new ArenaNet({
        onLobby: (list, code) => this.renderLobby(list, code, true),
        onData: (id, msg) => this.onHostData(id, msg),
        onGone: (id) => this.dropHuman(id),
        onClosed: () => { /* host side: nothing */ },
      });
      const code = await this.net.host(nick);
      if (this.disposed) return;
      this.renderLobby(this.net.list(), code, true);
    } catch (e) {
      if (this.net) { try { this.net.close(); } catch { /* ignore */ } this.net = null; }
      const c2 = this.card('ODA KUR');
      const s2 = this.statusEl(c2); s2.textContent = 'Oda kurulamadı. İnternet bağlantını kontrol et.';
      this.btn(c2, 'GERİ', () => this.showTitle());
    }
  }

  renderLobby(list, code, isHost) {
    if (this.state === 'play') return;
    const c = this.card(isHost ? 'ODA: ' + code : 'ODADASIN: ' + code);
    c.querySelector('h2').classList.add('code');
    const s = document.createElement('div'); s.className = 'ag-sub';
    s.textContent = isHost ? 'Arkadaşların bu kodla katılsın. Boş yerleri botlar doldurur.' : 'Kurucu oyunu başlatınca açılır...';
    c.appendChild(s);
    const ul = document.createElement('div'); ul.className = 'ag-plist';
    list.forEach((n, i) => { const d = document.createElement('div'); d.textContent = (i === 0 ? '👑 ' : '⛄ ') + n; ul.appendChild(d); });
    c.appendChild(ul);
    if (isHost) {
      this.btn(c, '📋 KODU KOPYALA / PAYLAŞ', () => {
        const text = 'KARTOPU ARENA odası: ' + code;
        try { if (navigator.share) { navigator.share({ title: 'KARTOPU ARENA', text, url: location.href }).catch(() => {}); return; } } catch { /* ignore */ }
        try { navigator.clipboard.writeText(text); this.toast('Kopyalandı!'); } catch { this.toast(code); }
      }, 'blue');
      this.btn(c, 'BAŞLAT (' + list.length + ' oyuncu)', () => this.hostStart(), 'go');
    }
    this.btn(c, isHost ? 'ODAYI KAPAT' : 'ÇIK', () => { if (this.net) { try { this.net.close(); } catch { /* ignore */ } this.net = null; } this.showTitle(); });
  }

  joinScreen() {
    const c = this.card('ODAYA KATIL');
    const inp = document.createElement('input');
    inp.className = 'ag-inp code'; inp.maxLength = 5; inp.placeholder = 'KOD'; inp.autocomplete = 'off'; inp.autocapitalize = 'characters';
    c.appendChild(inp);
    this.nickInput(c);
    const st = this.statusEl(c);
    this.btn(c, 'KATIL', async () => {
      const code = inp.value.trim().toUpperCase();
      if (code.length !== 5) { st.textContent = '5 haneli kodu gir.'; return; }
      const nick = this.ensureNick();
      st.textContent = 'Bağlanılıyor...';
      try {
        const { ArenaNet } = await import('./net.js');
        if (this.disposed) return;
        this.net = new ArenaNet({
          onLobby: (list) => this.renderLobby(list, code, false),
          onStart: (m) => this.clientStart(m),
          onData: (id, msg) => this.onClientData(msg),
          onClosed: (why) => this.onRoomClosed(why),
        });
        await this.net.join(code, nick);
        if (this.disposed) return;
        this.renderLobby([nick], code, false);
      } catch (e) {
        if (this.net) { try { this.net.close(); } catch { /* ignore */ } this.net = null; }
        st.textContent = e && e.type === 'peer-unavailable' ? 'Oda bulunamadı.' : 'Bağlanılamadı.';
      }
    }, 'go');
    this.btn(c, 'GERİ', () => this.showTitle());
  }

  onRoomClosed(why) {
    if (this.disposed || this.closedShown) return;
    this.closedShown = true;
    this.closeResult();
    const c = this.card(why === 'full' ? 'Oda dolu' : 'Oda kapandı');
    this.btn(c, 'MENÜ', () => this.exit(), 'go');
    this.state = 'title';
    if (this.net) { try { this.net.close(); } catch { /* ignore */ } this.net = null; }
    this.mp = null;
  }

  toast(t) {
    const el = this.hud.toast;
    el.textContent = t; el.classList.add('on');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => el.classList.remove('on'), 1800);
  }

  // ------------------------------------------------------------------ multiplayer: host
  hostStart() {
    if (!this.net || this.net.role !== 'host') return;
    const ids = Array.from(this.net.clients.keys());
    this.mp = 'host';
    this.net.started = true;
    this.clearScreen();
    this.hud.root.classList.remove('ag-menu');
    this.me = 0;
    this.initWorld(); // fresh world, bots filled (owner 0 left empty)
    const used = new Set();
    const mine = this.owners[0];
    mine.bot = false; mine.human = 'host';
    this.setName(mine, this.net.nick, true);
    used.add(this.net.nick);
    this.spawnOwner(mine, this.startMass());
    ids.forEach((id, k) => {
      const o = this.owners[k + 1];
      // replace the bot occupying this slot
      for (let i = 0; i < CAP; i++) if (this.cells[i].on && this.cells[i].o === o.id) this.cells[i].on = false;
      let nm = this.net.clients.get(id).nick;
      while (used.has(nm)) nm += '2';
      used.add(nm);
      o.bot = false; o.human = id; o.seen = this.time;
      this.setName(o, nm, false);
      this.spawnOwner(o, 24);
    });
    this.fdn = 0; this.fd.fill(0);
    const food = new Array(FOOD * 2);
    for (let i = 0; i < FOOD; i++) { food[i * 2] = Math.round(this.fx[i] * 10); food[i * 2 + 1] = Math.round(this.fz[i] * 10); }
    const own = this.owners.map((o) => [o.name, o.col, o.human ? 1 : 0]);
    ids.forEach((id, k) => this.net.sendTo(id, { t: 'start', me: k + 1, owners: own, food }));
    this.state = 'play';
    this.lastLevel = lvlOf(this.xp);
    this.pushFeed('Oda açıldı: ' + (ids.length + 1) + ' oyuncu');
  }

  onHostData(id, msg) {
    const o = this.owners.find((q) => q.human === id);
    if (!o) return;
    o.seen = this.time;
    if (msg.t === 'i') {
      const dx = +msg.x || 0, dz = +msg.z || 0, m = clampN(+msg.m || 0, 0, 1);
      o.dx = dx; o.dz = dz; o.mag = m;
      if (m > 0) { o.ldx = dx; o.ldz = dz; }
    } else if (msg.t === 'b') this.boost(o);
    else if (msg.t === 's') this.split(o);
    else if (msg.t === 'respawn') { if (!o.alive) this.spawnOwner(o, 24); }
  }

  sendSnapshot() {
    const net = this.net;
    if (!net || net.clients.size === 0) { this.fdn = 0; this.fd.fill(0); return; }
    const c = [];
    for (let i = 0; i < CAP; i++) { const q = this.cells[i]; if (q.on) c.push(i, q.o, Math.round(q.x * 10) / 10, Math.round(q.z * 10) / 10, Math.round(q.m * 10) / 10); }
    const fd = [];
    for (let k = 0; k < this.fdn; k++) { const i = this.fdl[k]; fd.push(i, Math.round(this.fx[i] * 10), Math.round(this.fz[i] * 10), this.fv[i], this.fcol[i]); this.fd[i] = 0; }
    this.fdn = 0;
    const v = [];
    for (let i = 0; i < NVIR; i++) v.push(this.von[i] ? Math.round(this.vx[i] * 10) : 99999, Math.round(this.vz[i] * 10));
    const p = [];
    for (let i = 0; i < NPUP; i++) p.push(this.pon[i] ? Math.round(this.px[i] * 10) : 99999, Math.round(this.pz[i] * 10), this.ptype[i]);
    for (const [id, rec] of net.clients) {
      const o = this.owners.find((q) => q.human === id);
      if (!o || !rec.conn.open) continue;
      net.sendTo(id, { t: 's', c, fd, v, p, me: [o.shield, o.magnet, o.speed, o.boostCd, o.kills, o.xpRun, o.maxMass] });
    }
  }

  // ------------------------------------------------------------------ multiplayer: client
  clientStart(m) {
    this.mp = 'client';
    this.me = m.me;
    this.clearScreen();
    this.hud.root.classList.remove('ag-menu');
    for (const c of this.cells) c.on = false;
    m.owners.forEach((d, i) => {
      const o = this.owners[i];
      this.setColor(o, d[1]);
      this.setName(o, d[0], i === this.me);
      o.bot = !d[2]; o.alive = false; o.wasAlive = false;
    });
    for (let i = 0; i < FT; i++) { this.gRemove(i); this.fv[i] = 0; }
    this.ghead.fill(-1);
    for (let i = 0; i < FOOD; i++) {
      this.setFoodColor(i, i % 60 === 0 ? 0xffc400 : FOOD_PAL[i % FOOD_PAL.length]);
      this.fx[i] = m.food[i * 2] / 10; this.fz[i] = m.food[i * 2 + 1] / 10; this.fv[i] = this.baseVal(i); this.gAdd(i);
    }
    for (let i = 0; i < FT; i++) this.writeFood(i);
    const me = this.owners[this.me];
    me.t0 = this.time; me.maxMass = 0; me.bestRank = 99; me.kills = 0; me.xpRun = 0;
    this.state = 'play';
    this.lastSnap = this.time;
    this.lastLevel = lvlOf(this.xp);
  }

  onClientData(msg) {
    if (msg.t === 's') this.applySnapshot(msg);
    else if (msg.t === 'k') this.pushFeed(msg.x);
    else if (msg.t === 'dead') { this.deadKiller = msg.k || ''; this.state = 'dead'; this.deadT = 1.1; this.bank(this.owners[this.me]); this.audio?.crash?.(); }
  }

  applySnapshot(m) {
    this.lastSnap = this.time;
    const cells = this.cells;
    for (let i = 0; i < CAP; i++) cells[i].killer = 0; // 0 = not seen this snapshot
    const c = m.c;
    for (let k = 0; k + 4 < c.length; k += 5) {
      const q = cells[c[k]];
      if (!q) continue;
      if (!q.on) { q.on = true; q.x = c[k + 2]; q.z = c[k + 3]; q.r = KR * Math.sqrt(c[k + 4]); q.vx = q.vz = 0; }
      q.o = c[k + 1]; q.tx = c[k + 2]; q.tz = c[k + 3]; q.m = c[k + 4]; q.killer = 1;
    }
    for (let i = 0; i < CAP; i++) if (cells[i].on && cells[i].killer === 0) cells[i].on = false;
    const fd = m.fd;
    for (let k = 0; k + 4 < fd.length; k += 5) {
      const i = fd[k];
      if (fd[k + 4]) this.setFoodColor(i, fd[k + 4]);
      this.foodPlace(i, fd[k + 1] / 10, fd[k + 2] / 10, fd[k + 3]);
    }
    for (let i = 0; i < NVIR; i++) { const x = m.v[i * 2]; this.von[i] = x < 90000 ? 1 : 0; this.vx[i] = x / 10; this.vz[i] = m.v[i * 2 + 1] / 10; }
    this.vDirty = true;
    for (let i = 0; i < NPUP; i++) { const x = m.p[i * 3]; this.pon[i] = x < 90000 ? 1 : 0; this.px[i] = x / 10; this.pz[i] = m.p[i * 3 + 1] / 10; const t = m.p[i * 3 + 2]; if (t !== this.ptype[i]) { this.ptype[i] = t; this.setPupColor(i); } }
    const o = this.owners[this.me], a = m.me;
    o.shield = a[0]; o.magnet = a[1]; o.speed = a[2]; o.boostCd = a[3]; o.kills = a[4]; o.xpRun = a[5];
  }

  clientSmooth(dt) {
    const k = Math.min(1, dt * 12);
    for (let i = 0; i < CAP; i++) { const c = this.cells[i]; if (c.on) { c.x += (c.tx - c.x) * k; c.z += (c.tz - c.z) * k; } }
    for (const o of this.owners) { if (o.boostCd > 0) o.boostCd -= dt; if (o.shield > 0) o.shield -= dt; if (o.magnet > 0) o.magnet -= dt; if (o.speed > 0) o.speed -= dt; }
    this.sendT -= dt;
    if (this.sendT <= 0 && this.state === 'play') {
      this.sendT = 0.05;
      const i = this.inp;
      this.net && this.net.send({ t: 'i', x: Math.round(i.dx * 100) / 100, z: Math.round(i.dz * 100) / 100, m: Math.round(i.mag * 100) / 100 });
    }
    if (this.time - this.lastSnap > 8 && this.state !== 'title') this.onRoomClosed('closed');
  }

  // ------------------------------------------------------------------ feed
  pushFeed(text) {
    const f = this.feed;
    for (let i = 0; i < 3; i++) { f[i].t = f[i + 1].t; f[i].until = f[i + 1].until; }
    f[3].t = text; f[3].until = this.time + 6;
    this.feedDirty = true;
    if (this.mp === 'host' && this.net && !text.startsWith('Oda açıldı')) this.net.broadcast({ t: 'k', x: text });
  }

  // ------------------------------------------------------------------ main update
  update(dt) {
    if (this.disposed) return;
    if (dt > 0.05) dt = 0.05;
    this.time += dt;
    if (this.mp === 'client') this.clientSmooth(dt);
    else if (this.state === 'play' || this.state === 'dead' || this.state === 'title' || this.state === 'lobby') this.simulate(dt);
    // radii
    const k = Math.min(1, dt * 9);
    for (let i = 0; i < CAP; i++) { const c = this.cells[i]; if (c.on) c.r += (KR * Math.sqrt(c.m) - c.r) * k; }
    this.accumulate();
    if (this.mp !== 'client') this.checkDeaths();
    // host snapshots
    if (this.mp === 'host') { this.netT -= dt; if (this.netT <= 0) { this.netT = 0.066; this.sendSnapshot(); } }
    if (this.state === 'dead') { this.deadT -= dt; if (this.deadT <= 0 && !this.resultEl) this.showResult(); }
    this.render(dt);
    this.updateHud(dt);
  }

  render(dt) {
    const owners = this.owners, cells = this.cells;
    const me = owners[this.me];
    // follow target
    let fo = me;
    if (!me.alive) { fo = null; let bm = -1; for (let i = 0; i < NOWN; i++) if (owners[i].alive && owners[i].mass > bm) { bm = owners[i].mass; fo = owners[i]; } }
    // camera
    const dom = this.dom;
    this.renderer.getSize(this.sz);
    const asp = (this.sz.x || 1) / (this.sz.y || 1);
    if (Math.abs(asp - this._camera.aspect) > 0.001) { this._camera.aspect = asp; this._camera.updateProjectionMatrix(); }
    const zf = asp < 1 ? 1 + (1 / asp - 1) * 0.5 : 1;
    let ht = 120 * zf;
    if (fo) {
      const rEff = Math.max(KR * Math.sqrt(fo.mass), fo.ext * 0.8);
      ht = me.alive ? (16 + 7.5 * rEff) * zf : Math.max(120 * zf, (16 + 7.5 * rEff) * zf);
      const kk = Math.min(1, dt * (me.alive ? 6 : 1.5));
      this.camX += (fo.cx + (me.alive ? this.inp.dx * this.inp.mag * rEff * 0.5 : 0) - this.camX) * kk;
      this.camZ += (fo.cz + (me.alive ? this.inp.dz * this.inp.mag * rEff * 0.5 : 0) - this.camZ) * kk;
    }
    ht = Math.min(ht, 1100);
    this.camH += (ht - this.camH) * Math.min(1, dt * 2.2);
    this._camera.position.set(this.camX, this.camH, this.camZ + this.camH * 0.6);
    this._camera.lookAt(this.camX, 0, this.camZ);
    // food scale steps with zoom
    const fs = 1 + Math.floor(this.camH / 70) * 0.45;
    if (fs !== this.fs) { this.fs = fs; for (let i = 0; i < FT; i++) if (this.fv[i] > 0) this.writeFood(i); }
    // cells
    const ca = this.cellMesh.instanceMatrix.array, cc = this.cellMesh.instanceColor.array, sa = this.shadowMesh.instanceMatrix.array;
    let n = 0;
    for (let i = 0; i < CAP; i++) {
      const c = cells[i];
      if (!c.on) continue;
      const o = owners[c.o], r = c.r;
      wm(ca, n * 16, c.x, r, c.z, r);
      wm(sa, n * 16, c.x + r * 0.15, 0, c.z + r * 0.2, r * 1.12);
      cc[n * 3] = o.cr; cc[n * 3 + 1] = o.cg; cc[n * 3 + 2] = o.cb;
      n++;
    }
    this.cellMesh.count = n; this.shadowMesh.count = n;
    this.cellMesh.instanceMatrix.needsUpdate = true; this.cellMesh.instanceColor.needsUpdate = true; this.shadowMesh.instanceMatrix.needsUpdate = true;
    if (this.mDirty) { this.foodMesh.instanceMatrix.needsUpdate = true; this.mDirty = false; }
    if (this.cDirty) { this.foodMesh.instanceColor.needsUpdate = true; this.cDirty = false; }
    if (this.vDirty) {
      const va = this.virMesh.instanceMatrix.array;
      let vn = 0;
      for (let i = 0; i < NVIR; i++) if (this.von[i]) { wm(va, vn * 16, this.vx[i], VIRR, this.vz[i], VIRR); vn++; }
      this.virMesh.count = vn; this.virMesh.instanceMatrix.needsUpdate = true; this.vDirty = false;
    }
    const pa = this.pupMesh.instanceMatrix.array;
    for (let i = 0; i < NPUP; i++) {
      if (this.pon[i]) wm(pa, i * 16, this.px[i], 2 + Math.sin(this.time * 3 + i) * 0.5, this.pz[i], 1 + Math.sin(this.time * 4 + i) * 0.1); else wm(pa, i * 16, 0, -9, 0, 0);
    }
    this.pupMesh.instanceMatrix.needsUpdate = true;
    // auras (local player)
    if (me.alive && me.shield > 0) { this.aura.visible = true; this.aura.position.set(me.lx, me.maxR, me.lz); this.aura.scale.setScalar(me.maxR * 1.18 + 0.4); } else this.aura.visible = false;
    if (me.alive && me.magnet > 0) { this.ring.visible = true; this.ring.position.set(me.lx, 0.2, me.lz); this.ring.scale.setScalar(me.maxR + 14); } else this.ring.visible = false;
    // name sprites
    const camH = this.camH;
    for (let i = 0; i < NOWN; i++) {
      const o = owners[i], sp = o.sprite;
      if (!o.alive) { sp.visible = false; continue; }
      sp.visible = true;
      const w = Math.max(o.maxR * 2.2, camH * 0.1);
      sp.scale.set(w, w * 0.25, 1);
      sp.position.set(o.lx, o.maxR + 0.3 + w * 0.1, o.lz + o.maxR * 0.2);
    }
  }

  // ------------------------------------------------------------------ HUD
  buildHud() {
    const root = document.createElement('div');
    root.id = 'ag-root';
    root.className = 'ag-root';
    root.innerHTML =
      '<div class="ag-tl"><div class="ag-mass"><small>KÜTLE</small><b class="m">0</b></div>' +
      '<div class="ag-lvl"><span class="lv">Sv 1</span><div class="bar"><i></i></div></div>' +
      '<div class="ag-online">🟢 <span class="on">0</span> oyuncu çevrimiçi</div>' +
      '<div class="ag-rank">SIRA <b>-</b></div><div class="ag-feed"></div><div class="ag-chips"></div></div>' +
      '<div class="ag-tr"><div class="ag-lb"><div class="t">LİDERLER</div><div class="rows"></div></div><canvas class="ag-map" width="84" height="84"></canvas></div>' +
      '<div class="ag-stick"><i></i></div><div class="ag-toast"></div>' +
      '<div class="ag-btns"><button type="button" class="ag-act split"><span>✂️</span><small>BÖL</small></button>' +
      '<button type="button" class="ag-act boost"><span>🚀</span><small>HIZLAN</small><i class="cd"></i></button></div>';
    this.app.appendChild(root);
    const q = (s) => root.querySelector(s);
    const rows = [];
    const rowsEl = q('.rows');
    for (let i = 0; i < 11; i++) { const d = document.createElement('div'); d.className = 'row'; d.innerHTML = '<span class="n"></span><span class="v"></span>'; rowsEl.appendChild(d); rows.push(d); }
    const chips = [];
    for (let i = 0; i < 3; i++) { const d = document.createElement('div'); d.className = 'chip'; q('.ag-chips').appendChild(d); chips.push(d); }
    const feeds = [];
    for (let i = 0; i < 4; i++) { const d = document.createElement('div'); d.className = 'f'; q('.ag-feed').appendChild(d); feeds.push(d); }
    this.hud = {
      root, rows, chips, feeds, mass: q('.m'), lv: q('.lv'), bar: q('.bar i'), online: q('.on'), rank: q('.ag-rank b'), stick: q('.ag-stick'), knob: q('.ag-stick i'), toast: q('.ag-toast'),
      map: q('.ag-map'), mctx: q('.ag-map').getContext('2d'), boost: q('.boost'), cd: q('.cd'), bsplit: q('.split'),
    };
    const press = (el, fn) => {
      el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.audio?.init?.(); fn(); });
    };
    press(this.hud.boost, () => this.doBoost());
    press(this.hud.bsplit, () => this.doSplit());
  }

  updateHud(dt) {
    const h = this.hud, me = this.owners[this.me];
    this.hudT -= dt; this.lbT -= dt; this.mapT -= dt;
    if (this.feedDirty || this.hudT <= 0) {
      for (let i = 0; i < 4; i++) { const f = this.feed[i], e = h.feeds[i]; const on = f.until > this.time; if (e._t !== f.t || e._on !== on) { e.textContent = on ? f.t : ''; e.style.opacity = on ? '1' : '0'; e._t = f.t; e._on = on; } }
      this.feedDirty = false;
    }
    if (this.lbT <= 0) {
      this.lbT = 0.25;
      let n = 0;
      for (let i = 0; i < NOWN; i++) if (this.owners[i].alive) this.lb[n++] = this.owners[i];
      this.lbN = n; this.lb.length = n;
      this.lb.sort(this._lbCmp);
      let myRank = -1;
      for (let i = 0; i < n; i++) if (this.lb[i] === me) { myRank = i; break; }
      for (let i = 0; i < 10; i++) {
        const r = h.rows[i], o = this.lb[i];
        if (o) { r.style.display = 'flex'; r.classList.toggle('me', o === me); r.children[0].textContent = (i + 1) + '. ' + o.name; r.children[1].textContent = fmtM(o.mass); } else r.style.display = 'none';
      }
      const yr = h.rows[10];
      if (myRank >= 10) { yr.style.display = 'flex'; yr.classList.add('me'); yr.children[0].textContent = (myRank + 1) + '. ' + me.name; yr.children[1].textContent = fmtM(me.mass); } else yr.style.display = 'none';
      h.rank.textContent = myRank >= 0 ? '#' + (myRank + 1) + ' / ' + n : '-';
      h.online.textContent = String(n);
      if (myRank >= 0 && this.state === 'play' && myRank + 1 < me.bestRank) me.bestRank = myRank + 1;
    }
    if (this.hudT <= 0) {
      this.hudT = 0.1;
      h.mass.textContent = me.alive ? fmtM(me.mass) : '0';
      const xp = this.xp + me.xpRun, lv = lvlOf(xp), lo = 60 * (lv - 1) * (lv - 1), hi = 60 * lv * lv;
      h.lv.textContent = 'Sv ' + lv;
      h.bar.style.width = clampN(((xp - lo) / (hi - lo)) * 100, 0, 100).toFixed(0) + '%';
      if (lv > this.lastLevel && this.state === 'play') { this.toast('SEVİYE ' + lv + '! Başlangıç kütlen arttı'); this.audio?.milestone?.(Math.min(6, lv)); }
      this.lastLevel = lv;
      // chips
      let ci = 0;
      const eff = [[me.magnet, PUP_TYPES[0]], [me.shield, PUP_TYPES[1]], [me.speed, PUP_TYPES[2]]];
      for (let i = 0; i < 3; i++) {
        const [t, d] = eff[i];
        if (t > 0) { const c = h.chips[ci++]; c.style.display = 'block'; c.textContent = d.emoji + ' ' + Math.ceil(t) + 's'; }
      }
      for (; ci < 3; ci++) h.chips[ci].style.display = 'none';
      const cd = me.boostCd > 0 ? me.boostCd / 2.4 : 0;
      if (cd !== this._cd) { this._cd = cd; h.cd.style.height = (cd * 100).toFixed(0) + '%'; }
    }
    if (this.mapT <= 0) { this.mapT = 0.2; this.drawMap(); }
  }

  drawMap() {
    const g = this.hud.mctx, W = 84, c0 = W / 2, sc = (W / 2 - 3) / R;
    g.clearRect(0, 0, W, W);
    g.fillStyle = 'rgba(20,50,95,0.55)'; g.beginPath(); g.arc(c0, c0, c0 - 1, 0, 6.2832); g.fill();
    const me = this.owners[this.me];
    for (let i = 0; i < NOWN; i++) {
      const o = this.owners[i];
      if (!o.alive || o === me) continue;
      g.fillStyle = o.mass > me.mass * 1.25 && me.alive ? '#ff6b6b' : '#d8ecff';
      const s = 1.2 + Math.min(2.2, Math.log10(o.mass + 1) * 0.6);
      g.fillRect(c0 + o.cx * sc - s / 2, c0 + o.cz * sc - s / 2, s, s);
    }
    if (me.alive) { g.fillStyle = '#ffe066'; g.beginPath(); g.arc(c0 + me.cx * sc, c0 + me.cz * sc, 3, 0, 6.2832); g.fill(); }
  }
}
