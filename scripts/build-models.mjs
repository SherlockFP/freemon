#!/usr/bin/env node
// build-models.mjs — bake CC0 Kenney GLB models into one compact binary the game loads at runtime.
//
//   node scripts/build-models.mjs [path/to/unzipped/kenney/packs]
//   (or set KENNEY_DIR; the folder must contain kenney_car-kit/, kenney_nature-kit/, ... )
//
// Pipeline per model (see SELECTION below):
//   1. Parse the GLB by hand (no deps): JSON + BIN chunks, accessors, node hierarchy (TRS / matrix).
//   2. Merge every mesh primitive into one triangle soup with node transforms baked in.
//   3. Bake colour per vertex: base colour = baseColorFactor x colormap texel at the vertex UV
//      (PNG decoded here with node:zlib). Kenney palettes are flat-colour cells, so the sample is
//      exactly the intended colour.
//   4. Orient (rot = degrees about +Y so the model's front faces +Z), recentre to bottom-centre
//      (min y = 0, x/z centred on the bounding box) and scale uniformly to the target real-world size.
//   5. Quantise + write ONE binary (public/models/kenney.bin) and a manifest (kenney.json).
//
// ---------------------------------------------------------------------------------------------
// BINARY FORMAT  (public/models/kenney.bin, little endian; layout described by kenney.json)
//   For each model, in manifest order, back to back, every block padded to a multiple of 4 bytes:
//     position  Int16 x (3 * v)   non-indexed triangle soup, v = 3 * tris vertices.
//                                  world metres = int16 * model.scale   (scale = maxAbsCoord / 32767)
//     color     Uint8 x (3 * v)    RGB, sRGB-ENCODED (better precision in darks than linear 8 bit).
//                                  The loader decodes through a 256-entry LUT into LINEAR floats,
//                                  because three.js treats vertex colours as linear.
//   Normals are NOT stored: the loader calls computeVertexNormals() on the non-indexed geometry,
//   which yields flat per-face normals.
//   kenney.json:  { version, format:{...}, credits, models:{ key:{ tris, verts, posOffset, colOffset,
//                   scale, radius, height, bbox:[minx,miny,minz,maxx,maxy,maxz], tier, kind, pack, file } } }
// ---------------------------------------------------------------------------------------------

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const OUT_DIR = path.join(ROOT, 'public', 'models');

const DEFAULT_SRC = 'C:/Users/Sher/AppData/Local/Temp/claude/C--Users-Sher-Desktop-Joker/' +
  '2101f325-35be-491a-9c63-e037c75be757/scratchpad/assets_dl/x';

/** pack folder -> sub folder that holds the .glb files */
export const PACKS = {
  'kenney_holiday-kit': 'Models/GLB format',
  'kenney_platformer-kit': 'Models/GLB format',
  'kenney_nature-kit': 'Models/GLTF format',
  'kenney_city-kit-suburban_20': 'Models/GLB format',
  'kenney_car-kit': 'Models/GLB format',
};

// ===========================================================================
// PNG decoder (8/16-bit gray, gray+alpha, RGB, RGBA; 1/2/4/8-bit palette; not interlaced)
// ===========================================================================
export function decodePng(buf) {
  const sig = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  for (let i = 0; i < 8; i++) if (buf[i] !== sig[i]) throw new Error('decodePng: not a PNG');
  let p = 8, w = 0, h = 0, depth = 0, ctype = 0, interlace = 0;
  let plte = null, trns = null;
  const idat = [];
  while (p < buf.length) {
    const len = buf.readUInt32BE(p);
    const type = buf.toString('latin1', p + 4, p + 8);
    const data = buf.subarray(p + 8, p + 8 + len);
    p += 12 + len;
    if (type === 'IHDR') {
      w = data.readUInt32BE(0); h = data.readUInt32BE(4);
      depth = data[8]; ctype = data[9]; interlace = data[12];
    } else if (type === 'PLTE') plte = data;
    else if (type === 'tRNS') trns = data;
    else if (type === 'IDAT') idat.push(data);
    else if (type === 'IEND') break;
  }
  if (interlace) throw new Error('decodePng: interlaced PNG not supported');
  const channels = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[ctype];
  if (!channels) throw new Error('decodePng: bad colour type ' + ctype);
  const bitsPP = channels * depth;
  const bpp = Math.max(1, bitsPP >> 3);
  const stride = Math.ceil((w * bitsPP) / 8);
  const raw = zlib.inflateSync(Buffer.concat(idat));
  if (raw.length < (stride + 1) * h) throw new Error('decodePng: truncated data');
  const px = Buffer.alloc(stride * h);
  for (let y = 0; y < h; y++) {
    const ft = raw[y * (stride + 1)];
    const src = y * (stride + 1) + 1, dst = y * stride;
    for (let x = 0; x < stride; x++) {
      const a = x >= bpp ? px[dst + x - bpp] : 0;
      const b = y > 0 ? px[dst - stride + x] : 0;
      const c = x >= bpp && y > 0 ? px[dst - stride + x - bpp] : 0;
      let v = raw[src + x];
      switch (ft) {
        case 0: break;
        case 1: v += a; break;
        case 2: v += b; break;
        case 3: v += (a + b) >> 1; break;
        case 4: {
          const pa = Math.abs(b - c), pb = Math.abs(a - c), pc = Math.abs(a + b - 2 * c);
          v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
          break;
        }
        default: throw new Error('decodePng: bad filter ' + ft);
      }
      px[dst + x] = v & 255;
    }
  }
  const out = new Uint8Array(w * h * 4);
  const sample = (y, idx) => { // idx-th sample of row y, returns raw integer value
    const rowBase = y * stride;
    if (depth === 8) return px[rowBase + idx];
    if (depth === 16) return px[rowBase + idx * 2]; // keep the high byte
    const bitPos = idx * depth;
    const byte = px[rowBase + (bitPos >> 3)];
    return (byte >> (8 - depth - (bitPos & 7))) & ((1 << depth) - 1);
  };
  const scaleTo8 = depth < 8 && ctype !== 3 ? 255 / ((1 << depth) - 1) : 1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 4;
      if (ctype === 3) {
        const i = sample(y, x);
        out[o] = plte[i * 3]; out[o + 1] = plte[i * 3 + 1]; out[o + 2] = plte[i * 3 + 2];
        out[o + 3] = trns && i < trns.length ? trns[i] : 255;
      } else if (ctype === 0 || ctype === 4) {
        const g = Math.round(sample(y, x * channels) * scaleTo8);
        out[o] = out[o + 1] = out[o + 2] = g;
        out[o + 3] = ctype === 4 ? sample(y, x * 2 + 1) : 255;
      } else {
        out[o] = sample(y, x * channels);
        out[o + 1] = sample(y, x * channels + 1);
        out[o + 2] = sample(y, x * channels + 2);
        out[o + 3] = ctype === 6 ? sample(y, x * channels + 3) : 255;
      }
    }
  }
  return { width: w, height: h, data: out };
}

// ===========================================================================
// GLB parsing
// ===========================================================================
const COMP = {
  5120: [Int8Array, 1, 127], 5121: [Uint8Array, 1, 255], 5122: [Int16Array, 2, 32767],
  5123: [Uint16Array, 2, 65535], 5125: [Uint32Array, 4, 4294967295], 5126: [Float32Array, 4, 1],
};
const NCOMP = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 };

export function parseGlb(buf, file = '?') {
  if (buf.readUInt32LE(0) !== 0x46546c67) throw new Error(`${file}: not a GLB (bad magic)`);
  if (buf.readUInt32LE(4) !== 2) throw new Error(`${file}: GLB version != 2`);
  let p = 12, json = null, bin = null;
  while (p + 8 <= buf.length) {
    const len = buf.readUInt32LE(p), type = buf.readUInt32LE(p + 4);
    const data = buf.subarray(p + 8, p + 8 + len);
    if (type === 0x4e4f534a) json = JSON.parse(data.toString('utf8'));
    else if (type === 0x004e4942 && !bin) bin = data;
    p += 8 + len; // chunk lengths already include the 4-byte padding
  }
  if (!json) throw new Error(`${file}: no JSON chunk`);
  const bad = (json.extensionsRequired || []).filter((e) => /draco|meshopt|quantiz/i.test(e));
  if (bad.length) throw new Error(`${file}: unsupported required extension(s): ${bad.join(', ')}`);
  return { json, bin };
}

/** Read an accessor into a plain Float64Array/Uint32Array (de-interleaved, de-normalised). */
function readAccessor(g, index, asFloat = true) {
  const { json, bin } = g;
  const acc = json.accessors[index];
  if (acc.sparse) throw new Error('sparse accessors not supported');
  const [Ctor, csize, nmax] = COMP[acc.componentType];
  const n = NCOMP[acc.type];
  const out = asFloat ? new Float64Array(acc.count * n) : new Uint32Array(acc.count * n);
  if (acc.bufferView === undefined) return out; // all zeros
  const bv = json.bufferViews[acc.bufferView];
  if (bv.buffer !== 0 || !bin) throw new Error('external/multiple buffers not supported');
  const base = bin.byteOffset + (bv.byteOffset || 0) + (acc.byteOffset || 0);
  const stride = bv.byteStride || n * csize;
  const dv = new DataView(bin.buffer, bin.byteOffset, bin.byteLength);
  const dvBase = base - bin.byteOffset;
  const get = {
    5120: (o) => dv.getInt8(o), 5121: (o) => dv.getUint8(o), 5122: (o) => dv.getInt16(o, true),
    5123: (o) => dv.getUint16(o, true), 5125: (o) => dv.getUint32(o, true), 5126: (o) => dv.getFloat32(o, true),
  }[acc.componentType];
  for (let i = 0; i < acc.count; i++) {
    for (let c = 0; c < n; c++) {
      let v = get(dvBase + i * stride + c * csize);
      if (asFloat && acc.normalized) v = Math.max(v / nmax, -1);
      out[i * n + c] = v;
    }
  }
  return out;
}

// ---- tiny column-major 4x4 matrix helpers (Float64Array(16)) ----
const mIdent = () => { const m = new Float64Array(16); m[0] = m[5] = m[10] = m[15] = 1; return m; };
function mMul(a, b) {
  const o = new Float64Array(16);
  for (let c = 0; c < 4; c++) {
    for (let r = 0; r < 4; r++) {
      o[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
    }
  }
  return o;
}
function mCompose(t, q, s) {
  const [x, y, z, w] = q;
  const x2 = x + x, y2 = y + y, z2 = z + z;
  const xx = x * x2, xy = x * y2, xz = x * z2, yy = y * y2, yz = y * z2, zz = z * z2;
  const wx = w * x2, wy = w * y2, wz = w * z2;
  const m = new Float64Array(16);
  m[0] = (1 - (yy + zz)) * s[0]; m[1] = (xy + wz) * s[0]; m[2] = (xz - wy) * s[0];
  m[4] = (xy - wz) * s[1]; m[5] = (1 - (xx + zz)) * s[1]; m[6] = (yz + wx) * s[1];
  m[8] = (xz + wy) * s[2]; m[9] = (yz - wx) * s[2]; m[10] = (1 - (xx + yy)) * s[2];
  m[12] = t[0]; m[13] = t[1]; m[14] = t[2]; m[15] = 1;
  return m;
}
const mDet3 = (m) => m[0] * (m[5] * m[10] - m[9] * m[6]) - m[4] * (m[1] * m[10] - m[9] * m[2]) + m[8] * (m[1] * m[6] - m[5] * m[2]);

function nodeMatrix(node) {
  if (node.matrix) return Float64Array.from(node.matrix);
  return mCompose(node.translation || [0, 0, 0], node.rotation || [0, 0, 0, 1], node.scale || [1, 1, 1]);
}

// ---- texture access ----
const pngCache = new Map();
function loadImage(g, imageIndex) {
  const key = g.file + '#' + imageIndex;
  if (pngCache.has(key)) return pngCache.get(key);
  const im = g.json.images[imageIndex];
  let data;
  if (im.uri) {
    if (im.uri.startsWith('data:')) data = Buffer.from(im.uri.split(',')[1], 'base64');
    else data = fs.readFileSync(path.join(path.dirname(g.file), decodeURIComponent(im.uri)));
  } else {
    const bv = g.json.bufferViews[im.bufferView];
    data = Buffer.from(g.bin.subarray(bv.byteOffset || 0, (bv.byteOffset || 0) + bv.byteLength));
  }
  const dec = decodePng(data);
  pngCache.set(key, dec);
  return dec;
}

const S2L = new Float64Array(256);
for (let i = 0; i < 256; i++) {
  const c = i / 255;
  S2L[i] = c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}
const srgbToLinear01 = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));

function wrap(t, mode, n) {
  if (mode === 33071) return Math.min(n - 1, Math.max(0, Math.floor(t * n))); // clamp to edge
  if (mode === 33648) { // mirrored repeat
    let f = t - 2 * Math.floor(t / 2);
    if (f > 1) f = 2 - f;
    return Math.min(n - 1, Math.floor(f * n));
  }
  const f = t - Math.floor(t); // repeat
  return Math.min(n - 1, Math.floor(f * n));
}

/** Per-material colour evaluator: (u, v) -> linear [r,g,b]. */
function hexToLinear(hex) {
  const n = typeof hex === 'string' ? parseInt(hex.replace('#', ''), 16) : hex;
  return [srgbToLinear01(((n >> 16) & 255) / 255), srgbToLinear01(((n >> 8) & 255) / 255), srgbToLinear01((n & 255) / 255)];
}

function makeMaterial(g, matIndex, stats, recolor) {
  const m = matIndex === undefined ? {} : g.json.materials[matIndex];
  const pbr = m.pbrMetallicRoughness || {};
  const f = pbr.baseColorFactor || [1, 1, 1, 1];
  const bt = pbr.baseColorTexture;
  if (!bt) {
    // Untextured (Nature kit): the factor is Kenney's authored colour. These values are the same numbers as
    // the OBJ .mtl "Kd" and the pack preview shows them as display (sRGB) colours, so treat as sRGB.
    const lin = recolor && m.name && recolor[m.name] !== undefined
      ? hexToLinear(recolor[m.name])
      : [srgbToLinear01(f[0]), srgbToLinear01(f[1]), srgbToLinear01(f[2])];
    stats.plain = (stats.plain || 0) + 1;
    return { name: m.name, textured: false, get: () => lin };
  }
  const tex = g.json.textures[bt.index];
  const img = loadImage(g, tex.source);
  const sampler = tex.sampler !== undefined ? g.json.samplers[tex.sampler] : {};
  const wrapS = sampler.wrapS || 10497, wrapT = sampler.wrapT || 10497;
  const tt = bt.extensions && bt.extensions.KHR_texture_transform;
  const off = (tt && tt.offset) || [0, 0], sc = (tt && tt.scale) || [1, 1], rot = (tt && tt.rotation) || 0;
  const cr = Math.cos(rot), sr = Math.sin(rot);
  const lf = [f[0], f[1], f[2]]; // glTF: baseColorFactor is linear, multiplies the (linearised) texel
  const out = [0, 0, 0];
  stats.textured = (stats.textured || 0) + 1;
  return {
    name: m.name,
    textured: true,
    texCoord: (tt && tt.texCoord !== undefined ? tt.texCoord : bt.texCoord) || 0,
    get(u, v) {
      if (tt) { // KHR_texture_transform: uv' = T * R * S * uv
        const su = u * sc[0], sv = v * sc[1];
        u = cr * su + sr * sv + off[0];
        v = -sr * su + cr * sv + off[1];
      }
      const x = wrap(u, wrapS, img.width), y = wrap(v, wrapT, img.height);
      const o = (y * img.width + x) * 4;
      out[0] = S2L[img.data[o]] * lf[0];
      out[1] = S2L[img.data[o + 1]] * lf[1];
      out[2] = S2L[img.data[o + 2]] * lf[2];
      return out;
    },
  };
}

/**
 * Replace a detailed wheel (flat arrays of world-space triangles `wp` + linear colours `wc`) by a `segs`-sided
 * prism: tread, outer sidewall ring and outer hub disc (5 * segs triangles). Axle axis = thinnest bbox axis,
 * outer side = the side away from the vehicle centre line. segs must be a multiple of 4 so the tyre has flats at
 * the bottom/top/front/back (it keeps resting exactly on the ground).
 */
function proceduralWheel(wp, wc, segs, outPos, outCol) {
  const b = [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity];
  for (let i = 0; i < wp.length; i += 3) for (let k = 0; k < 3; k++) { b[k] = Math.min(b[k], wp[i + k]); b[k + 3] = Math.max(b[k + 3], wp[i + k]); }
  const ext = [b[3] - b[0], b[4] - b[1], b[5] - b[2]];
  const C = [(b[0] + b[3]) / 2, (b[1] + b[4]) / 2, (b[2] + b[5]) / 2];
  const a = ext.indexOf(Math.min(...ext));
  const ra = (a + 1) % 3, rb = (a + 2) % 3;
  const R = Math.max(ext[ra], ext[rb]) / 2, W = ext[a];
  const out = C[a] >= 0 ? 1 : -1;
  // classify original triangles to sample the tyre / sidewall / hub colours (area weighted)
  const acc = { tread: [0, 0, 0, 0], ring: [0, 0, 0, 0], hub: [0, 0, 0, 0] };
  for (let t = 0; t < wp.length; t += 9) {
    const e1 = [wp[t + 3] - wp[t], wp[t + 4] - wp[t + 1], wp[t + 5] - wp[t + 2]];
    const e2 = [wp[t + 6] - wp[t], wp[t + 7] - wp[t + 1], wp[t + 8] - wp[t + 2]];
    const n = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
    const area = Math.hypot(...n) / 2;
    if (area < 1e-12) continue;
    const na = (n[a] / (2 * area)) * out;
    const cx = [(wp[t] + wp[t + 3] + wp[t + 6]) / 3, (wp[t + 1] + wp[t + 4] + wp[t + 7]) / 3, (wp[t + 2] + wp[t + 5] + wp[t + 8]) / 3];
    const dist = Math.hypot(cx[ra] - C[ra], cx[rb] - C[rb]);
    let bucket = null;
    if (Math.abs(na) < 0.35) bucket = acc.tread;
    else if (na > 0.7) bucket = dist > 0.62 * R ? acc.ring : acc.hub;
    if (!bucket) continue;
    for (let k = 0; k < 3; k++) bucket[k] += area * ((wc[t + k] + wc[t + 3 + k] + wc[t + 6 + k]) / 3);
    bucket[3] += area;
  }
  const mean = (x, fb) => (x[3] > 0 ? [x[0] / x[3], x[1] / x[3], x[2] / x[3]] : fb);
  const tread = mean(acc.tread, [0.03, 0.03, 0.035]);
  const ring = mean(acc.ring, tread);
  const hub = mean(acc.hub, ring.map((v) => Math.min(1, v * 2.5 + 0.05)));
  const rv = R / Math.cos(Math.PI / segs); // flats tangent to the original radius
  const ri = 0.62 * R;
  const pt = (ang, rad, side) => {
    const p = [0, 0, 0];
    p[a] = C[a] + side * (W / 2);
    p[ra] = C[ra] + Math.cos(ang) * rad;
    p[rb] = C[rb] + Math.sin(ang) * rad;
    return p;
  };
  const tri = (p, q, r, want, c) => { // push triangle wound CCW as seen from `want`
    const n = [(q[1] - p[1]) * (r[2] - p[2]) - (q[2] - p[2]) * (r[1] - p[1]),
      (q[2] - p[2]) * (r[0] - p[0]) - (q[0] - p[0]) * (r[2] - p[2]),
      (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0])];
    const flipT = n[0] * want[0] + n[1] * want[1] + n[2] * want[2] < 0;
    for (const v of flipT ? [p, r, q] : [p, q, r]) { outPos.push(v[0], v[1], v[2]); outCol.push(c[0], c[1], c[2]); }
  };
  const axisDir = [0, 0, 0]; axisDir[a] = out;
  for (let i = 0; i < segs; i++) {
    const a0 = (i / segs) * Math.PI * 2 + Math.PI / segs, a1 = ((i + 1) / segs) * Math.PI * 2 + Math.PI / segs;
    const am = (a0 + a1) / 2;
    const radial = [0, 0, 0]; radial[ra] = Math.cos(am); radial[rb] = Math.sin(am);
    // tread quad
    const t00 = pt(a0, rv, -1), t01 = pt(a0, rv, 1), t10 = pt(a1, rv, -1), t11 = pt(a1, rv, 1);
    tri(t00, t10, t11, radial, tread); tri(t00, t11, t01, radial, tread);
    // outer sidewall ring
    const o0 = pt(a0, rv, out), o1 = pt(a1, rv, out), i0 = pt(a0, ri, out), i1 = pt(a1, ri, out);
    tri(o0, o1, i1, axisDir, ring); tri(o0, i1, i0, axisDir, ring);
    // outer hub disc
    tri(i0, i1, pt(0, 0, out), axisDir, hub);
  }
}

/**
 * Bake a GLB into a world-space triangle soup with per-vertex LINEAR colours.
 * opts.dropNodes: array of substrings; nodes whose name contains one are skipped (with their children).
 * returns { pos: Float64Array(3n), col: Float64Array(3n), tris, stats }
 */
export function bakeGlb(file, opts = {}) {
  const buf = fs.readFileSync(file);
  const g = { ...parseGlb(buf, file), file };
  const json = g.json;
  const stats = { skippedPrims: 0, flatTris: 0, mixedTris: 0, mirrored: 0 };
  const matCache = new Map();
  const getMat = (i) => {
    const k = i === undefined ? -1 : i;
    if (!matCache.has(k)) matCache.set(k, makeMaterial(g, i, stats, opts.recolor));
    return matCache.get(k);
  };
  const pos = [], col = [];
  const dropNodes = opts.dropNodes || [];
  const dropMaterials = opts.dropMaterials || [];

  const visit = (ni, parent) => {
    const node = json.nodes[ni];
    if (dropNodes.some((s) => (node.name || '').includes(s))) return;
    const world = mMul(parent, nodeMatrix(node));
    if (node.mesh !== undefined) {
      if (opts.wheelSegs && /^wheel/i.test(node.name || '')) {
        // Car-kit wheels are 330-430 tris each (more than the car body). Swap for a low-poly wheel
        // that keeps the same size, side, tyre/rim colours.
        const p0 = pos.length, c0 = col.length;
        emitMesh(json.meshes[node.mesh], world);
        const wp = pos.splice(p0), wc = col.splice(c0);
        proceduralWheel(wp, wc, opts.wheelSegs, pos, col);
        stats.wheels = (stats.wheels || 0) + 1;
      } else emitMesh(json.meshes[node.mesh], world);
    }
    for (const c of node.children || []) visit(c, world);
  };

  const emitMesh = (mesh, M) => {
    const flip = mDet3(M) < 0;
    if (flip) stats.mirrored++;
    for (const prim of mesh.primitives) {
      const mode = prim.mode === undefined ? 4 : prim.mode;
      if (mode < 4) { stats.skippedPrims++; continue; }
      if (prim.extensions && prim.extensions.KHR_draco_mesh_compression) throw new Error(file + ': Draco not supported');
      const mat = getMat(prim.material);
      if (mat.name && dropMaterials.some((s) => mat.name.includes(s))) continue;
      const P = readAccessor(g, prim.attributes.POSITION);
      const nv = P.length / 3;
      const uvAttr = prim.attributes['TEXCOORD_' + (mat.texCoord || 0)];
      const UV = mat.textured ? (uvAttr !== undefined ? readAccessor(g, uvAttr) : new Float64Array(nv * 2)) : null;
      const CA = prim.attributes.COLOR_0 !== undefined ? readAccessor(g, prim.attributes.COLOR_0) : null;
      const cn = CA ? CA.length / nv : 0;
      let idx;
      if (prim.indices !== undefined) idx = readAccessor(g, prim.indices, false);
      else { idx = new Uint32Array(nv); for (let i = 0; i < nv; i++) idx[i] = i; }
      // to plain triangle list
      let tri = [];
      if (mode === 4) tri = idx;
      else if (mode === 5) { for (let i = 2; i < idx.length; i++) tri.push(...(i & 1 ? [idx[i - 1], idx[i - 2], idx[i]] : [idx[i - 2], idx[i - 1], idx[i]])); }
      else if (mode === 6) { for (let i = 2; i < idx.length; i++) tri.push(idx[0], idx[i - 1], idx[i]); }
      // world positions + colours of every vertex of this primitive
      const WP = new Float64Array(nv * 3), VC = new Float64Array(nv * 3);
      for (let i = 0; i < nv; i++) {
        const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
        WP[i * 3] = M[0] * x + M[4] * y + M[8] * z + M[12];
        WP[i * 3 + 1] = M[1] * x + M[5] * y + M[9] * z + M[13];
        WP[i * 3 + 2] = M[2] * x + M[6] * y + M[10] * z + M[14];
        let c;
        if (mat.textured) c = mat.get(UV[i * 2], UV[i * 2 + 1]);
        else c = mat.get();
        let r = c[0], gg = c[1], b = c[2];
        if (CA) { r *= CA[i * cn]; gg *= CA[i * cn + 1]; b *= CA[i * cn + 2]; }
        VC[i * 3] = r; VC[i * 3 + 1] = gg; VC[i * 3 + 2] = b;
      }
      for (let t = 0; t + 2 < tri.length; t += 3) {
        const a = tri[t], b = flip ? tri[t + 2] : tri[t + 1], c = flip ? tri[t + 1] : tri[t + 2];
        if (a >= nv || b >= nv || c >= nv) throw new Error(file + ': index out of range');
        for (const v of [a, b, c]) {
          pos.push(WP[v * 3], WP[v * 3 + 1], WP[v * 3 + 2]);
          col.push(VC[v * 3], VC[v * 3 + 1], VC[v * 3 + 2]);
        }
        const same = (k) => Math.abs(VC[a * 3 + k] - VC[b * 3 + k]) < 1e-4 && Math.abs(VC[a * 3 + k] - VC[c * 3 + k]) < 1e-4;
        if (same(0) && same(1) && same(2)) stats.flatTris++; else stats.mixedTris++;
      }
    }
  };

  const scene = (json.scenes && json.scenes[json.scene || 0]) || null;
  let roots;
  if (scene) roots = scene.nodes;
  else {
    const child = new Set();
    json.nodes.forEach((n) => (n.children || []).forEach((c) => child.add(c)));
    roots = json.nodes.map((_, i) => i).filter((i) => !child.has(i));
  }
  for (const r of roots) visit(r, mIdent());
  return { pos: Float64Array.from(pos), col: Float64Array.from(col), tris: pos.length / 9, stats };
}

// ===========================================================================
// Geometry post-processing
// ===========================================================================
function bounds(pos) {
  const b = [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity];
  for (let i = 0; i < pos.length; i += 3) {
    for (let k = 0; k < 3; k++) {
      const v = pos[i + k];
      if (v < b[k]) b[k] = v;
      if (v > b[k + 3]) b[k + 3] = v;
    }
  }
  return b;
}

function rotateY(pos, deg) {
  if (!deg) return;
  const a = (deg * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
  for (let i = 0; i < pos.length; i += 3) {
    const x = pos[i], z = pos[i + 2];
    pos[i] = c * x + s * z;
    pos[i + 2] = -s * x + c * z;
  }
}

/** Drop degenerate (zero-area) triangles. */
function cleanTris(pos, col) {
  const keepP = [], keepC = [];
  for (let t = 0; t < pos.length; t += 9) {
    const ax = pos[t + 3] - pos[t], ay = pos[t + 4] - pos[t + 1], az = pos[t + 5] - pos[t + 2];
    const bx = pos[t + 6] - pos[t], by = pos[t + 7] - pos[t + 1], bz = pos[t + 8] - pos[t + 2];
    const cx = ay * bz - az * by, cy = az * bx - ax * bz, cz = ax * by - ay * bx;
    if (cx * cx + cy * cy + cz * cz < 1e-14) continue;
    for (let k = 0; k < 9; k++) { keepP.push(pos[t + k]); keepC.push(col[t + k]); }
  }
  return { pos: Float64Array.from(keepP), col: Float64Array.from(keepC) };
}

/** Diagnostic: number of boundary / non-manifold edges after welding vertices by position. */
function openEdges(pos) {
  const ids = new Map();
  const id = (i) => {
    const k = Math.round(pos[i] * 1e4) + ',' + Math.round(pos[i + 1] * 1e4) + ',' + Math.round(pos[i + 2] * 1e4);
    let v = ids.get(k);
    if (v === undefined) { v = ids.size; ids.set(k, v); }
    return v;
  };
  const edges = new Map();
  for (let t = 0; t < pos.length; t += 9) {
    const v = [id(t), id(t + 3), id(t + 6)];
    for (let e = 0; e < 3; e++) {
      const x = v[e], y = v[(e + 1) % 3];
      const k = x < y ? x * 4294967296 + y : y * 4294967296 + x;
      edges.set(k, (edges.get(k) || 0) + 1);
    }
  }
  let open = 0;
  for (const c of edges.values()) if (c !== 2) open++;
  return open;
}

const lin2srgb8 = (c) => {
  c = Math.min(1, Math.max(0, c));
  const s = c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  return Math.round(s * 255);
};

// ===========================================================================
// SELECTION
//   key   : name the game references
//   pack  : folder in PACKS        file : .glb name without extension
//   size  : { height | length | width : metres }   (length = Z extent, width = X extent, after orientation)
//   scale : alternative to size, plain uniform multiplier on the source units (used for the whole town kit)
//   rot   : degrees about +Y applied BEFORE sizing so the front faces +Z   (default 0)
//   tier  : prop tier (0 tiny .. 4 huge, same scale as props.js)
//   kind  : props.js kinds ('static' | 'rock' | 'tree' | 'car' | 'building') + 'decor' | 'obstacle' for the runner
//   wheelSegs : replace the 330-430 tri car-kit wheels by a low-poly prism with this many sides (multiple of 4)
//   recolor   : { materialName: '#rrggbb' } remap for the UNTEXTURED Nature-kit materials (stylised teal -> natural)
//   ao        : 0..1 darkening of the lowest ~half of the model (default 0.28 for untextured, 0 for palette kits)
//   dropNodes / dropMaterials : optional substring filters to remove sub-parts
// ===========================================================================
const HOL = 'kenney_holiday-kit', PLA = 'kenney_platformer-kit', NAT = 'kenney_nature-kit',
  CITY = 'kenney_city-kit-suburban_20', CAR = 'kenney_car-kit';

// The Nature kit is untextured with Kenney's stylised teal/orange palette. For a few models we remap named
// materials to more natural colours (sRGB hex) so they sit with the rest of the game's palette.
const PINE_GREEN = { leafsDark: '#23895a', leafsGreen: '#2b9a62', woodBarkDark: '#7a4b2a', woodBark: '#7a4b2a' };
const CACTUS_GREEN = { leafsGreen: '#4fae5e', leafsDark: '#3f9650' };
const PALM_GREEN = { leafsGreen: '#35b36a', leafsDark: '#2a9a5a', woodBarkDark: '#8a5a38', woodBark: '#8a5a38' };
const DESERT_ROCK = { grass: '#f2c987', dirt: '#e0885a', _defaultMat: '#c8744c' };
const ROCK_GRAY = { stone: '#8f9aae', _defaultMat: '#8f9aae' };
const VOLCANO_ROCK = { stone: '#4a4452', _defaultMat: '#38333f' };

export const SELECTION = [
  // ---- ÇIĞ mountain slope: tiny (tier 0) ------------------------------------------------------------------
  { key: 'k_present_a', pack: HOL, file: 'present-a-cube', size: { height: 0.5 }, tier: 0, kind: 'static' },
  { key: 'k_present_b', pack: HOL, file: 'present-b-cube', size: { height: 0.5 }, tier: 0, kind: 'static' },
  { key: 'k_present_c', pack: HOL, file: 'present-b-round', size: { height: 0.45 }, tier: 0, kind: 'static' },
  { key: 'k_candy_cane', pack: HOL, file: 'candy-cane-red', size: { height: 1.2 }, tier: 0, kind: 'static' },
  { key: 'k_candy_cane_green', pack: HOL, file: 'candy-cane-green', size: { height: 1.2 }, tier: 0, kind: 'static' },
  { key: 'k_lantern', pack: HOL, file: 'lantern', size: { height: 1.4 }, tier: 0, kind: 'static' },
  { key: 'k_cone', pack: CAR, file: 'cone', size: { height: 0.5 }, tier: 0, kind: 'static' },
  { key: 'k_rock_small', pack: NAT, file: 'stone_smallH', size: { width: 0.7 }, tier: 0, kind: 'rock', recolor: ROCK_GRAY },
  // ---- tier 1 -----------------------------------------------------------------------------------------------
  { key: 'k_snowman', pack: HOL, file: 'snowman', size: { height: 1.7 }, tier: 1, kind: 'static' },
  { key: 'k_sled', pack: HOL, file: 'sled', size: { length: 1.4 }, tier: 1, kind: 'static' },
  { key: 'k_bench', pack: HOL, file: 'bench', size: { width: 1.6 }, tier: 1, kind: 'static' },
  { key: 'k_gingerbread', pack: HOL, file: 'gingerbread-man', size: { height: 1.2 }, tier: 1, kind: 'static' },
  { key: 'k_campfire', pack: NAT, file: 'campfire_logs', size: { width: 1.0 }, tier: 1, kind: 'static' },
  { key: 'k_canoe', pack: NAT, file: 'canoe', size: { length: 3.5 }, tier: 1, kind: 'static' },
  { key: 'k_pine_small', pack: HOL, file: 'tree-snow-c', size: { height: 3.0 }, tier: 1, kind: 'tree' },
  { key: 'k_rock_a', pack: NAT, file: 'stone_largeD', size: { width: 2.2 }, tier: 1, kind: 'rock', recolor: ROCK_GRAY },
  { key: 'k_rock_c', pack: NAT, file: 'stone_largeB', size: { width: 1.5 }, tier: 1, kind: 'rock', recolor: ROCK_GRAY },
  // ---- tier 2 -----------------------------------------------------------------------------------------------
  { key: 'k_snowman_hat', pack: HOL, file: 'snowman-hat', size: { height: 2.1 }, tier: 2, kind: 'static' },
  { key: 'k_tent', pack: NAT, file: 'tent_detailedClosed', size: { width: 2.6 }, tier: 2, kind: 'static' },
  { key: 'k_tent_small', pack: NAT, file: 'tent_smallOpen', size: { height: 1.6 }, tier: 2, kind: 'static' },
  { key: 'k_pine_a', pack: HOL, file: 'tree-snow-a', size: { height: 6 }, tier: 2, kind: 'tree' },
  { key: 'k_pine_b', pack: HOL, file: 'tree-snow-b', size: { height: 6 }, tier: 2, kind: 'tree' },
  { key: 'k_pine_c', pack: NAT, file: 'tree_pineRoundA', size: { height: 6 }, tier: 2, kind: 'tree', recolor: PINE_GREEN },
  { key: 'k_rock_b', pack: NAT, file: 'stone_tallA', size: { height: 2.8 }, tier: 2, kind: 'rock', recolor: ROCK_GRAY },
  { key: 'k_rock_d', pack: NAT, file: 'stone_tallB', size: { height: 3.5 }, tier: 2, kind: 'rock', recolor: ROCK_GRAY },
  { key: 'k_rock_snow', pack: HOL, file: 'rocks-medium', size: { width: 3.2 }, tier: 2, kind: 'rock' },
  // cars (tier 2; Kenney vehicles already face +Z)
  { key: 'k_sedan', pack: CAR, file: 'sedan', size: { length: 4.4 }, tier: 2, kind: 'car', wheelSegs: 12 },
  { key: 'k_sports', pack: CAR, file: 'sedan-sports', size: { length: 4.4 }, tier: 2, kind: 'car', wheelSegs: 12 },
  { key: 'k_suv', pack: CAR, file: 'suv', size: { length: 4.8 }, tier: 2, kind: 'car', wheelSegs: 12 },
  { key: 'k_taxi', pack: CAR, file: 'taxi', size: { length: 4.5 }, tier: 2, kind: 'car', wheelSegs: 12 },
  { key: 'k_police', pack: CAR, file: 'police', size: { length: 4.7 }, tier: 2, kind: 'car', wheelSegs: 12 },
  { key: 'k_van', pack: CAR, file: 'van', size: { length: 5.0 }, tier: 2, kind: 'car', wheelSegs: 12 },
  { key: 'k_ambulance', pack: CAR, file: 'ambulance', size: { length: 5.0 }, tier: 2, kind: 'car', wheelSegs: 12 },
  { key: 'k_pickup', pack: CAR, file: 'truck', size: { length: 5.3 }, tier: 2, kind: 'car', wheelSegs: 12 },
  { key: 'k_tractor', pack: CAR, file: 'tractor', size: { length: 3.8 }, tier: 2, kind: 'car', wheelSegs: 12 },
  // ---- tier 3 -----------------------------------------------------------------------------------------------
  { key: 'k_pine_a_big', pack: HOL, file: 'tree-snow-a', size: { height: 12 }, tier: 3, kind: 'tree' },
  { key: 'k_pine_b_big', pack: HOL, file: 'tree-snow-b', size: { height: 12 }, tier: 3, kind: 'tree' },
  { key: 'k_pine_c_big', pack: NAT, file: 'tree_pineRoundA', size: { height: 12 }, tier: 3, kind: 'tree', recolor: PINE_GREEN },
  { key: 'k_truck', pack: CAR, file: 'delivery-flat', size: { length: 7.0 }, tier: 3, kind: 'car', wheelSegs: 12 },
  { key: 'k_delivery', pack: CAR, file: 'delivery', size: { length: 7.5 }, tier: 3, kind: 'car', wheelSegs: 12 },
  { key: 'k_garbage_truck', pack: CAR, file: 'garbage-truck', size: { length: 8.0 }, tier: 3, kind: 'car', wheelSegs: 12 },
  { key: 'k_firetruck', pack: CAR, file: 'firetruck', size: { length: 9.0 }, tier: 3, kind: 'car', wheelSegs: 12 },
  // ---- finale town (front/door on +Z; scale 8.8 => a 2-storey house is ~10 m tall) ----------------------------
  ...'acdegijklopq'.split('').map((l, i) => ({
    key: 'k_house_' + 'abcdefghijkl'[i], pack: CITY, file: 'building-type-' + l, scale: 8.8, rot: 180, tier: 3, kind: 'building',
  })),
  { key: 'k_planter', pack: CITY, file: 'planter', scale: 6, rot: 180, tier: 2, kind: 'static' },
  { key: 'k_fence', pack: CITY, file: 'fence', size: { height: 1.5 }, rot: 180, tier: 2, kind: 'static' },
  { key: 'k_tree_large', pack: CITY, file: 'tree-large', scale: 8.8, tier: 2, kind: 'tree' },
  { key: 'k_tree_small', pack: CITY, file: 'tree-small', scale: 8.8, tier: 2, kind: 'tree' },
  // ---- endless parkour: obstacles / decor / pickups ----------------------------------------------------------
  { key: 'k_crate', pack: PLA, file: 'crate', size: { height: 1.2 }, tier: 1, kind: 'obstacle' },
  { key: 'k_crate_strong', pack: PLA, file: 'crate-strong', size: { height: 1.4 }, tier: 1, kind: 'obstacle' },
  { key: 'k_barrel', pack: PLA, file: 'barrel', size: { height: 1.1 }, tier: 1, kind: 'obstacle' },
  { key: 'k_spikes', pack: PLA, file: 'trap-spikes', size: { width: 1.4 }, tier: 1, kind: 'obstacle' },
  { key: 'k_spike_block', pack: PLA, file: 'spike-block', size: { height: 1.2 }, tier: 1, kind: 'obstacle' },
  { key: 'k_saw', pack: PLA, file: 'saw', size: { height: 1.4 }, tier: 1, kind: 'obstacle' },
  { key: 'k_spring', pack: PLA, file: 'spring', size: { width: 1.2 }, tier: 1, kind: 'obstacle' },
  { key: 'k_hex_block', pack: PLA, file: 'block-snow-hexagon', size: { width: 2.0 }, tier: 2, kind: 'decor' },
  { key: 'k_hex_block_grass', pack: PLA, file: 'block-grass-hexagon', size: { width: 2.0 }, tier: 2, kind: 'decor' },
  { key: 'k_hex_block_low', pack: PLA, file: 'block-snow-low-hexagon', size: { width: 2.0 }, tier: 2, kind: 'decor' },
  { key: 'k_coin', pack: PLA, file: 'coin-gold', size: { height: 0.8 }, tier: 0, kind: 'decor' },
  { key: 'k_star', pack: PLA, file: 'star', size: { height: 0.9 }, tier: 0, kind: 'decor' },
  { key: 'k_heart', pack: PLA, file: 'heart', size: { height: 0.8 }, tier: 0, kind: 'decor' },
  { key: 'k_gem', pack: PLA, file: 'jewel', size: { height: 0.9 }, tier: 0, kind: 'decor' },
  { key: 'k_chest', pack: PLA, file: 'chest', size: { width: 1.2 }, tier: 1, kind: 'decor' },
  { key: 'k_bomb', pack: PLA, file: 'bomb', size: { height: 1.0 }, tier: 1, kind: 'obstacle' },
  { key: 'k_flag', pack: PLA, file: 'flag', size: { height: 2.4 }, tier: 1, kind: 'decor' },
  { key: 'k_arrow_sign', pack: PLA, file: 'arrow', size: { height: 1.5 }, tier: 1, kind: 'decor' },
  { key: 'k_fork_sign', pack: PLA, file: 'arrows', size: { height: 1.9 }, tier: 1, kind: 'decor' },
  { key: 'k_snowflake_a', pack: HOL, file: 'snowflake-a', size: { height: 0.8 }, tier: 0, kind: 'decor' },
  { key: 'k_snowflake_c', pack: HOL, file: 'snowflake-c', size: { height: 0.8 }, tier: 0, kind: 'decor' },
  { key: 'k_cactus_tall', pack: NAT, file: 'cactus_tall', size: { height: 4 }, tier: 2, kind: 'decor', recolor: CACTUS_GREEN },
  { key: 'k_cactus_short', pack: NAT, file: 'cactus_short', size: { height: 2 }, tier: 1, kind: 'decor', recolor: CACTUS_GREEN },
  { key: 'k_palm', pack: NAT, file: 'tree_palmTall', size: { height: 7 }, tier: 2, kind: 'decor', recolor: PALM_GREEN },
  { key: 'k_palm_bend', pack: NAT, file: 'tree_palmBend', size: { height: 6 }, tier: 2, kind: 'decor', recolor: PALM_GREEN },
  { key: 'k_mesa_a', pack: NAT, file: 'rock_tallB', size: { height: 6 }, tier: 3, kind: 'decor', recolor: DESERT_ROCK },
  { key: 'k_mesa_b', pack: NAT, file: 'rock_largeD', size: { width: 6 }, tier: 3, kind: 'decor', recolor: DESERT_ROCK },
  { key: 'k_basalt_a', pack: NAT, file: 'stone_tallB', size: { height: 6 }, tier: 3, kind: 'decor', recolor: VOLCANO_ROCK },
  { key: 'k_basalt_b', pack: NAT, file: 'stone_largeD', size: { width: 5 }, tier: 3, kind: 'decor', recolor: VOLCANO_ROCK },
];

// triangle budgets (per brief): tier 0-1 < 500, tier 2-3 < 1500, buildings < 2500
export function triBudget(sel) {
  if (sel.kind === 'building') return 2500;
  return sel.tier <= 1 ? 500 : 1500;
}

// ===========================================================================
// main
// ===========================================================================
function fmtBytes(n) { return (n / 1024).toFixed(1) + ' KB'; }

export function buildOne(srcRoot, sel) {
  const dir = PACKS[sel.pack];
  if (!dir) throw new Error(`${sel.key}: unknown pack ${sel.pack}`);
  const file = path.join(srcRoot, sel.pack, dir, sel.file + '.glb');
  if (!fs.existsSync(file)) throw new Error(`${sel.key}: missing ${file}`);
  let { pos, col, stats } = bakeGlb(file, sel);
  if (!pos.length) throw new Error(`${sel.key}: no geometry`);
  ({ pos, col } = cleanTris(pos, col));
  rotateY(pos, sel.rot || 0);
  let b = bounds(pos);
  const ext = { x: b[3] - b[0], y: b[4] - b[1], z: b[5] - b[2] };
  let s;
  if (sel.size) {
    const [tk, tv] = Object.entries(sel.size)[0];
    const k = { height: 'y', length: 'z', width: 'x' }[tk];
    if (!k) throw new Error(`${sel.key}: bad size key ${tk}`);
    s = tv / ext[k];
  } else if (sel.scale) s = sel.scale;
  else throw new Error(`${sel.key}: need size or scale`);
  const cx = (b[0] + b[3]) / 2, cz = (b[2] + b[5]) / 2;
  for (let i = 0; i < pos.length; i += 3) {
    pos[i] = (pos[i] - cx) * s;
    pos[i + 1] = (pos[i + 1] - b[1]) * s;
    pos[i + 2] = (pos[i + 2] - cz) * s;
  }
  b = bounds(pos);
  // Kenney's textured palettes bake a light-top -> dark-bottom gradient into every colour (cheap ambient occlusion).
  // The untextured Nature kit has flat colours, so add the same gradient to keep the packs consistent.
  const ao = sel.ao !== undefined ? sel.ao : stats.textured ? 0 : 0.28;
  if (ao > 0) {
    const ref = 0.55 * b[4];
    for (let i = 0; i < pos.length; i += 3) {
      const t = Math.min(1, Math.max(0, pos[i + 1] / ref));
      const f = 1 - ao + ao * t;
      col[i] *= f; col[i + 1] *= f; col[i + 2] *= f;
    }
  }
  stats.openEdges = openEdges(pos);
  return { sel, pos, col, stats, srcFile: file, srcSize: ext, scale: s };
}

export function packModel(m) {
  const { pos, col } = m;
  const nv = pos.length / 3;
  let maxAbs = 0;
  for (let i = 0; i < pos.length; i++) maxAbs = Math.max(maxAbs, Math.abs(pos[i]));
  const q = maxAbs / 32767;
  const P = new Int16Array(nv * 3);
  for (let i = 0; i < pos.length; i++) P[i] = Math.round(pos[i] / q);
  const C = new Uint8Array(nv * 3);
  for (let i = 0; i < col.length; i++) C[i] = lin2srgb8(col[i]);
  return { P, C, q, nv };
}

function main() {
  const srcRoot = path.resolve(process.argv[2] || process.env.KENNEY_DIR || DEFAULT_SRC);
  if (!fs.existsSync(srcRoot)) { console.error('Kenney source folder not found: ' + srcRoot); process.exit(1); }
  if (!SELECTION.length) { console.error('SELECTION is empty'); process.exit(1); }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const chunks = [];
  let offset = 0;
  const manifest = {
    version: 1,
    format: {
      endian: 'little',
      position: 'int16 x3 per vertex, metres = value * model.scale, non-indexed triangle list (3 verts per tri)',
      color: 'uint8 x3 per vertex, sRGB-encoded; decode to linear floats on load (three vertex colours are linear)',
      normals: 'not stored; computeVertexNormals() on the non-indexed geometry gives flat normals',
      alignment: 'every block starts on a 4-byte boundary (offsets in bytes)',
    },
    credits: '3D modeller: Kenney (kenney.nl) — CC0 1.0',
    models: {},
  };
  const pad4 = (n) => (4 - (n & 3)) & 3;
  const rows = [];
  const warnings = [];
  const seen = new Set();
  for (const sel of SELECTION) {
    if (seen.has(sel.key)) throw new Error('duplicate key ' + sel.key);
    seen.add(sel.key);
    let m;
    try { m = buildOne(srcRoot, sel); } catch (e) { warnings.push(`SKIP ${sel.key}: ${e.message}`); continue; }
    const tris = m.pos.length / 9;
    const budget = triBudget(sel);
    if (tris > budget) warnings.push(`OVER BUDGET ${sel.key}: ${tris} tris > ${budget}`);
    const { P, C, q, nv } = packModel(m);
    // stats from the DEQUANTISED data so the manifest equals what the runtime will see
    const dq = new Float64Array(P.length);
    for (let i = 0; i < P.length; i++) dq[i] = P[i] * q;
    const bb = bounds(dq);
    const cxm = (bb[0] + bb[3]) / 2, cym = (bb[1] + bb[4]) / 2, czm = (bb[2] + bb[5]) / 2;
    let r2 = 0;
    for (let i = 0; i < dq.length; i += 3) {
      const dx = dq[i] - cxm, dy = dq[i + 1] - cym, dz = dq[i + 2] - czm;
      r2 = Math.max(r2, dx * dx + dy * dy + dz * dz);
    }
    const posBuf = Buffer.from(P.buffer, P.byteOffset, P.byteLength);
    const colBuf = Buffer.from(C.buffer, C.byteOffset, C.byteLength);
    const posOffset = offset;
    chunks.push(posBuf, Buffer.alloc(pad4(posBuf.length)));
    offset += posBuf.length + pad4(posBuf.length);
    const colOffset = offset;
    chunks.push(colBuf, Buffer.alloc(pad4(colBuf.length)));
    offset += colBuf.length + pad4(colBuf.length);
    const r5 = (x) => Math.round(x * 1e4) / 1e4;
    manifest.models[sel.key] = {
      tris, verts: nv, posOffset, colOffset, scale: q,
      radius: r5(Math.sqrt(r2)), height: r5(bb[4]),
      bbox: bb.map(r5), tier: sel.tier, kind: sel.kind,
      pack: sel.pack, file: sel.file + '.glb',
    };
    rows.push({ key: sel.key, src: `${sel.pack.replace('kenney_', '')}/${sel.file}`, tris, w: bb[3] - bb[0], h: bb[4], l: bb[5] - bb[2], r: Math.sqrt(r2), bytes: posBuf.length + colBuf.length, open: m.stats.openEdges, textured: !!m.stats.textured });
  }
  const bin = Buffer.concat(chunks);
  fs.writeFileSync(path.join(OUT_DIR, 'kenney.bin'), bin);
  fs.writeFileSync(path.join(OUT_DIR, 'kenney.json'), JSON.stringify(manifest));

  // credits file
  const lines = [
    '3D models in kenney.bin were created by Kenney (www.kenney.nl) and are released under CC0 1.0 (public domain).',
    'Attribution is not required; credit is given anyway: "3D modeller: Kenney (kenney.nl) — CC0".',
    'Source packs: Holiday Kit, Platformer Kit, Nature Kit (2.1), City Kit (Suburban) 2.0, Car Kit.',
    'Modifications (allowed by CC0): merged into single vertex-coloured meshes, re-oriented/scaled, car wheels replaced by',
    'low-poly wheels, some Nature Kit materials recoloured (pines, cacti, palms, desert/volcano rocks, grey slope rocks).',
    '',
    'Models used (game key <- pack/file):',
    ...rows.map((r) => `  ${r.key.padEnd(18)} <- ${r.src}`),
    '',
  ];
  fs.writeFileSync(path.join(OUT_DIR, 'CREDITS.txt'), lines.join('\n'));

  // report
  console.log('key'.padEnd(20) + 'source'.padEnd(46) + 'tris'.padStart(6) + 'w'.padStart(7) + 'h'.padStart(7) + 'l'.padStart(7) + 'radius'.padStart(8) + 'bytes'.padStart(8) + 'open'.padStart(6));
  for (const r of rows) {
    console.log(r.key.padEnd(20) + r.src.padEnd(46) + String(r.tris).padStart(6) + r.w.toFixed(2).padStart(7) + r.h.toFixed(2).padStart(7) + r.l.toFixed(2).padStart(7) + r.r.toFixed(2).padStart(8) + String(r.bytes).padStart(8) + String(r.open).padStart(6));
  }
  const totalTris = rows.reduce((a, r) => a + r.tris, 0);
  console.log(`\n${rows.length} models, ${totalTris} tris, kenney.bin ${fmtBytes(bin.length)} (${bin.length} bytes), kenney.json ${fmtBytes(JSON.stringify(manifest).length)}`);
  for (const w of warnings) console.warn(w);
  if (bin.length > 3 * 1024 * 1024) console.warn('WARNING: kenney.bin exceeds 3 MB budget');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
