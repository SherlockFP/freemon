// assets.js — runtime loader for the baked Kenney (CC0) models.
//
// public/models/kenney.json + kenney.bin are produced by scripts/build-models.mjs. Every model is a single
// non-indexed triangle soup with baked vertex colours and NO textures, so it plugs straight into the
// one-InstancedMesh-per-prop-type pipeline (same shape as the procedural props in props.js):
//
//   const models = await loadModels();            // {} if the files are missing -> keep procedural props
//   const def = models.k_sedan;                   // { name, geometry, radius, height, tier, kind }
//   new THREE.InstancedMesh(def.geometry, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }), n)
//
// Conventions (identical to props.js): metres, Y up, origin at bottom-centre (min y = 0), front faces +Z.
//
// Binary layout (see the header of scripts/build-models.mjs for the authoritative description):
//   per model:  position Int16 x3 per vertex (metres = value * model.scale)   -> posOffset
//               colour   Uint8 x3 per vertex, sRGB encoded -> decoded here to LINEAR floats -> colOffset
//   normals are recomputed here (flat, per face) because the geometry is non-indexed.

import * as THREE from 'three';

export const CREDITS = '3D modeller: Kenney (kenney.nl) — CC0';

/** 8-bit sRGB -> linear float (three.js treats vertex colours as linear). */
const SRGB_TO_LINEAR = new Float32Array(256);
for (let i = 0; i < 256; i++) {
  const c = i / 255;
  SRGB_TO_LINEAR[i] = c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

/**
 * Decode the manifest + binary into prop definitions. Pure (no fetch), so it can be unit-tested in Node.
 * @param {object} json         parsed kenney.json
 * @param {ArrayBuffer} buffer  kenney.bin
 * @returns {Object<string, {name:string, geometry:THREE.BufferGeometry, radius:number, height:number, tier:number, kind:string}>}
 */
export function parseModels(json, buffer) {
  const out = {};
  if (!json || json.version !== 1 || !json.models) throw new Error('unsupported kenney.json');
  for (const key of Object.keys(json.models)) {
    const m = json.models[key];
    try {
      const nv = m.verts;
      if (m.posOffset + nv * 6 > buffer.byteLength || m.colOffset + nv * 3 > buffer.byteLength) {
        throw new Error('data out of range');
      }
      const P = new Int16Array(buffer, m.posOffset, nv * 3);
      const C = new Uint8Array(buffer, m.colOffset, nv * 3);
      const pos = new Float32Array(nv * 3);
      const col = new Float32Array(nv * 3);
      const q = m.scale;
      for (let i = 0; i < nv * 3; i++) {
        pos[i] = P[i] * q;
        col[i] = SRGB_TO_LINEAR[C[i]];
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geometry.computeVertexNormals(); // non-indexed -> flat per-face normals
      geometry.setAttribute('color', new THREE.BufferAttribute(col, 3));
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
      out[key] = {
        name: key,
        geometry,
        radius: geometry.boundingSphere.radius,
        height: geometry.boundingBox.max.y,
        tier: m.tier,
        kind: m.kind,
      };
    } catch (e) {
      console.warn(`[assets] skipped model "${key}":`, e && e.message ? e.message : e);
    }
  }
  return out;
}

/**
 * Fetch and decode the baked models. Never throws: on any failure it warns and returns {} so the game keeps
 * running on its procedural props.
 * @param {string} [base='./models/']  folder holding kenney.json + kenney.bin (relative to the page)
 */
export async function loadModels(base = './models/') {
  try {
    const [jr, br] = await Promise.all([fetch(base + 'kenney.json'), fetch(base + 'kenney.bin')]);
    if (!jr.ok || !br.ok) throw new Error(`HTTP ${jr.status}/${br.status}`);
    const json = await jr.json(); // dev servers answer unknown paths with index.html -> JSON parse throws -> caught
    const buffer = await br.arrayBuffer();
    return parseModels(json, buffer);
  } catch (e) {
    console.warn('[assets] baked models unavailable, falling back to procedural props:', e && e.message ? e.message : e);
    return {};
  }
}
