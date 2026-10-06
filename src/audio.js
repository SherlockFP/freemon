// Web Audio for CIG! (snowball): a procedural synth (oscillators + filtered noise
// buffers + gain envelopes) layered with a few CC0 one-shot samples (./sfx.js).
//
// Every sound is fully playable without samples: the synth is the fallback, and the
// samples (decoded asynchronously after init(), never awaited) are added on top of it
// - or replace its musical part (jingles, ui clicks) - as soon as they are available.
// The rolling loop, whoosh and the pop pentatonic pluck stay procedural.
//
// Public API: `audio` (bottom of file). Every method is a safe no-op when the
// context is missing / not initialised / muted / paused, and never throws.
//
// Mixing notes: all noise buffers are normalised to RMS ~0.3, so the numbers
// below are "roughly RMS-ish" levels. Tune per sound with MIX (synth) and SM (samples,
// 1 = the file's own loudness-normalised level, see sfx.js), or MASTER_LEVEL.

import { sfx } from './sfx.js';

const LS_KEY = 'cig.muted';
const MAX_VOICES = 24; // simultaneous one-shot synth voices (roll loop not counted); samples have their own cap in sfx.js
const MASTER_LEVEL = 0.7;
const BASE_HZ = 392; // G4, root of the pop pentatonic walk
const PENT = [0, 2, 4, 7, 9]; // major pentatonic semitones
const COIN_HZ = 1976; // pitch (B6) of the coin_N samples, so star(i) can tune them to its synth bell
// The steel-drum jingle samples are pitched ~22 cents sharp of A440 (measured); these rates
// retune them to the game's key (G major: the pop walk, the star bells) instead of beating.
const STEEL_FIX = -0.22; // semitones
const WIN_RATE = Math.pow(2, (1 + STEEL_FIX) / 12); // run ends A#4 -> B4: the major third of the star bells' G chord
const STAR_RATE = Math.pow(2, (11 + STEEL_FIX) / 12); // D#4 -> A#4 becomes D5 -> A5 (the bell's 5th and 9th)

/** Per-sound trim (1 = default). Handy for balancing without touching the synths. */
const MIX = {
  pop: 1.4, bump: 1, crash: 0.7, roll: 1, whoosh: 1, land: 1,
  milestone: 0.6, ui: 1.5, star: 1.25, win: 1.25, lose: 1.25,
};

/** Per-use sample trim (volume of the sample layer; the synth layer keeps MIX). */
const SM = {
  pop: 0.5, bumpSoft: 0.9, bumpHit: 0.8,
  crashBreak: 0.8, crashWood: 0.75, crashRock: 0.6, crashGlass: 0.45,
  landSoft: 1.0, landCrunch: 0.7,
  ui: 1.0, coin: 0.7, starJingle: 0.55, win: 0.9, lose: 0.9, milestone: 0.6,
};

/** ui(kind) -> sample name. */
const UI_SAMPLE = {
  __proto__: null,
  click: 'ui_click', select: 'ui_select', confirm: 'ui_confirm', back: 'ui_back', toggle: 'ui_toggle',
};

// Voice priorities: when the cap is hit, the oldest voice of the lowest priority
// (<= the new one's) is stolen; if every voice outranks the newcomer it is dropped.
const P_POP = 1, P_UI = 2, P_FX = 2, P_BIG = 3, P_JINGLE = 4;

/** @type {AudioContext|null} */ let ctx = null;
/** @type {GainNode|null} */ let master = null;
/** @type {GainNode|null} */ let bus = null; // sample bus -> master (so mute / compressor apply to samples too)
let samplesStarted = false;
let whiteBuf = null, brownBuf = null, crackleBuf = null;
let muted = loadMuted();
let paused = false;
let graceUntil = 0; // ms: a resume() is in flight, scheduling is allowed meanwhile
let lastResumeTry = 0;
let voices = []; // oldest first
let roll = null;
const lastAt = { pop: -1, popS: -1, bump: -1, crash: -1, land: -1, ui: -1, whoosh: -1 };

// ---------------------------------------------------------------- small utils

const rand = (a, b) => a + Math.random() * (b - a);
const num = (x, d) => (typeof x === 'number' && Number.isFinite(x) ? x : d);
const clamp01 = (x) => (x > 0 ? (x < 1 ? x : 1) : 0);
const nowMs = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());

function loadMuted() {
  try { return globalThis.localStorage.getItem(LS_KEY) === '1'; } catch (e) { return false; }
}
function saveMuted() {
  try { globalThis.localStorage.setItem(LS_KEY, muted ? '1' : '0'); } catch (e) { /* ignore */ }
}

// ------------------------------------------------------------- noise buffers

function normalizeRms(d, target) {
  let sum = 0;
  for (let i = 0; i < d.length; i++) sum += d[i] * d[i];
  const rms = Math.sqrt(sum / d.length) || 1;
  const k = target / rms;
  for (let i = 0; i < d.length; i++) d[i] *= k;
}

function makeWhite(c, seconds) {
  const b = c.createBuffer(1, Math.floor(c.sampleRate * seconds), c.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  normalizeRms(d, 0.3);
  return b;
}

/** Leaky-integrated white noise (rumble). Loop-safe: the tail is cross-faded into the head. */
function makeBrown(c, seconds) {
  const len = Math.floor(c.sampleRate * seconds);
  const fade = Math.floor(c.sampleRate * 0.25);
  const raw = new Float32Array(len + fade);
  let y = 0;
  for (let i = 0; i < raw.length; i++) {
    y = (y + 0.02 * (Math.random() * 2 - 1)) / 1.02;
    raw[i] = y;
  }
  const b = c.createBuffer(1, len, c.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = raw[i];
  for (let i = 0; i < fade; i++) {
    const a = (i / fade) * Math.PI * 0.5;
    d[i] = raw[len + i] * Math.cos(a) + raw[i] * Math.sin(a); // equal-power seam
  }
  normalizeRms(d, 0.3);
  return b;
}

/** Sparse 1-2 ms noise grains: the "crunch" of snow, rattle of debris. */
function makeCrackle(c, seconds) {
  const b = c.createBuffer(1, Math.floor(c.sampleRate * seconds), c.sampleRate);
  const d = b.getChannelData(0);
  // grain density / decay are expressed in time so they survive 44.1k vs 48k
  const p = 300 / c.sampleRate; // ~300 grains per second
  const decay = Math.exp(-1 / (c.sampleRate * 0.0012));
  let env = 0;
  for (let i = 0; i < d.length; i++) {
    if (Math.random() < p) env = Math.max(env, 0.35 + 0.65 * Math.random());
    d[i] = (Math.random() * 2 - 1) * env;
    env *= decay;
  }
  normalizeRms(d, 0.25);
  return b;
}

// ----------------------------------------------------------------- readiness

function resumeCtx() {
  graceUntil = nowMs() + 400;
  try {
    const p = ctx.resume();
    if (p && typeof p.catch === 'function') p.catch(() => {});
  } catch (e) { /* ignore */ }
}

/** True when a sound may be scheduled right now. */
function ready() {
  if (!ctx || !master || muted || paused) return false;
  const st = ctx.state;
  if (st === 'running') return true;
  if (st === 'closed') return false;
  const t = nowMs();
  if (t < graceUntil) return true; // resume() in flight right after a gesture
  // Suspended/interrupted (iOS call, autoplay block): retry quietly, drop this sound
  // so a backlog of events doesn't burst out when the context finally wakes up.
  if (t - lastResumeTry > 600) {
    lastResumeTry = t;
    try {
      const p = ctx.resume();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch (e) { /* ignore */ }
  }
  return false;
}

function throttle(key, gap) {
  const t = ctx.currentTime;
  if (t - lastAt[key] < gap) return false;
  lastAt[key] = t;
  return true;
}

// -------------------------------------------------------------- voice pooling

function endVoice(v) {
  if (v.done) return;
  v.done = true;
  const i = voices.indexOf(v);
  if (i >= 0) voices.splice(i, 1);
  try { v.out.disconnect(); } catch (e) { /* ignore */ }
}

function stealVoice(v) {
  const i = voices.indexOf(v);
  if (i >= 0) voices.splice(i, 1);
  try {
    const t = ctx.currentTime;
    v.out.gain.cancelScheduledValues(t);
    v.out.gain.setTargetAtTime(0, t, 0.005);
    for (let k = 0; k < v.nodes.length; k++) {
      try { v.nodes[k].stop(t + 0.04); } catch (e) { /* not started */ }
    }
  } catch (e) { /* ignore */ }
}

/**
 * Open a one-shot voice: a gain node feeding the master bus. Returns null when the
 * pool is full of equal/higher priority voices.
 */
function begin(prio, dur, trim) {
  const now = ctx.currentTime;
  for (let i = voices.length - 1; i >= 0; i--) {
    if (voices[i].end < now - 0.25) endVoice(voices[i]); // safety net if `ended` never fired
  }
  if (voices.length >= MAX_VOICES) {
    let pick = -1;
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].prio <= prio && (pick < 0 || voices[i].prio < voices[pick].prio)) pick = i;
    }
    if (pick < 0) return null;
    stealVoice(voices[pick]);
  }
  const out = gain0(trim);
  out.connect(master);
  const v = { out, prio, end: now + dur + 0.1, live: 0, done: false, nodes: [] };
  voices.push(v);
  return v;
}

function track(v, node) {
  v.live++;
  v.nodes.push(node);
  node.onended = () => {
    try { node.disconnect(); } catch (e) { /* ignore */ }
    if (--v.live <= 0) endVoice(v);
  };
}

// ----------------------------------------------------------- node primitives

function gain0(value) {
  const g = ctx.createGain();
  g.gain.value = value === undefined ? 0 : value;
  return g;
}

function filt(type, freq, q) {
  const f = ctx.createBiquadFilter();
  f.type = type;
  f.frequency.value = freq;
  if (q !== undefined) f.Q.value = q;
  return f;
}

function link() {
  for (let i = 0; i < arguments.length - 1; i++) arguments[i].connect(arguments[i + 1]);
}

/** Percussive envelope: ~silence -> peak (linear attack) -> ~silence (exponential decay). */
function env(p, t, peak, atk, dec) {
  p.setValueAtTime(0.0001, t);
  p.linearRampToValueAtTime(Math.max(peak, 0.0002), t + atk);
  p.exponentialRampToValueAtTime(0.0001, t + atk + dec);
}

function sweep(p, t, f0, f1, d) {
  p.setValueAtTime(f0, t);
  p.exponentialRampToValueAtTime(f1, t + d);
}

/** Looping noise source starting at a random offset (so repeats differ). */
function noise(v, buf, t, dur) {
  const s = ctx.createBufferSource();
  s.buffer = buf;
  s.loop = true;
  track(v, s);
  s.start(t, rand(0, Math.max(0, buf.duration - 0.05)));
  s.stop(t + dur);
  return s;
}

function osc(v, type, freq, t, dur) {
  const o = ctx.createOscillator();
  o.type = type;
  o.frequency.value = freq;
  track(v, o);
  o.start(t);
  o.stop(t + dur);
  return o;
}

/** Pitched blip: osc -> percussive gain. f1 (optional) = pitch glide target over sweepT. */
function tone(v, type, t, f0, f1, sweepT, peak, atk, dec) {
  const o = osc(v, type, f0, t, atk + dec + 0.03);
  if (f1 && f1 !== f0) sweep(o.frequency, t, f0, f1, sweepT);
  const g = gain0();
  env(g.gain, t, peak, atk, dec);
  link(o, g, v.out);
  return o;
}

/** Filtered noise burst: noise -> biquad (optional sweep f0->f1) -> percussive gain. */
function nz(v, buf, t, type, f0, f1, q, sweepT, peak, atk, dec) {
  const s = noise(v, buf, t, atk + dec + 0.04);
  const f = filt(type, f0, q);
  if (f1 && f1 !== f0) sweep(f.frequency, t, f0, f1, sweepT);
  const g = gain0();
  env(g.gain, t, peak, atk, dec);
  link(s, f, g, v.out);
}

/** Noise that swells up to `peak` at tPeak then dies at tEnd, filter sweeping f0->f1->f2. */
function swell(v, buf, t, type, f0, f1, f2, q, peak, tPeak, tEnd) {
  const s = noise(v, buf, t, tEnd + 0.05);
  const f = filt(type, f0, q);
  f.frequency.setValueAtTime(f0, t);
  f.frequency.exponentialRampToValueAtTime(f1, t + tPeak);
  f.frequency.exponentialRampToValueAtTime(f2, t + tEnd);
  const g = gain0();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(Math.max(peak, 0.0002), t + tPeak);
  g.gain.exponentialRampToValueAtTime(0.0001, t + tEnd);
  link(s, f, g, v.out);
}

/** Oscillator that swells and decays (sub-bass for rumbles). */
function tswell(v, type, t, f0, f1, peak, tPeak, tEnd) {
  const o = osc(v, type, f0, t, tEnd + 0.05);
  sweep(o.frequency, t, f0, f1, tPeak);
  const g = gain0();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(Math.max(peak, 0.0002), t + tPeak);
  g.gain.exponentialRampToValueAtTime(0.0001, t + tEnd);
  link(o, g, v.out);
}

/**
 * Debris rattle: one crackle source, bandpassed, with the gain automated into `n`
 * short decaying grains spread over `span` seconds (starting after `delay`).
 */
function rattle(v, t, delay, span, n, fLo, fHi, q, peak) {
  const s = noise(v, crackleBuf, t, delay + span + 0.1);
  const f = filt('bandpass', (fLo + fHi) * 0.5, q);
  const g = gain0();
  g.gain.setValueAtTime(0.0001, t);
  const gap = span / n;
  const t0 = t + delay;
  let tk = t0;
  for (let k = 0; k < n; k++) {
    const d = Math.max(0.006, Math.min(rand(0.018, 0.04), gap * 0.8));
    const a = peak * (1 - 0.7 * ((tk - t0) / span)) * rand(0.5, 1);
    f.frequency.setValueAtTime(rand(fLo, fHi), tk);
    g.gain.setValueAtTime(0.0001, tk);
    g.gain.linearRampToValueAtTime(Math.max(a, 0.0002), tk + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, tk + d);
    tk += gap * rand(0.85, 1.15);
  }
  link(s, f, g, v.out);
}

// ------------------------------------------------------------- sample helpers

const SO = { volume: 1, rate: 1, detune: 0, when: 0, prio: 0, dur: 0 }; // reused: sfx.play only reads it during the call

/** Fire a sample (no-op returning null when it is missing). `dur` 0 = whole file. */
function smp(name, volume, rate, prio, when, dur) {
  SO.volume = volume;
  SO.rate = rate;
  SO.prio = prio;
  SO.when = when;
  SO.dur = dur || 0;
  return sfx.play(name, SO);
}

const has = (name) => sfx.has(name);

/** Start decoding the sample bank once, in the background. Nothing ever waits on it. */
function startSamples() {
  if (samplesStarted || !ctx || !bus) return;
  samplesStarted = true;
  try {
    const p = sfx.load(ctx, bus);
    if (p && typeof p.catch === 'function') p.catch(() => {});
  } catch (e) { /* ignore */ }
}

// ------------------------------------------------------------- scale helpers

/** Semitones above the root for combo count: major pentatonic, 2 octaves, then loops the upper octave. */
function scaleSemis(combo) {
  let s = combo;
  if (s > 10) s = 5 + ((s - 11) % 6); // cycle steps 5..10
  return 12 * Math.floor(s / 5) + PENT[s % 5];
}

// ----------------------------------------------------------------- lifecycle

function build(c) {
  const m = c.createGain();
  m.gain.value = muted ? 0 : MASTER_LEVEL;
  const comp = c.createDynamicsCompressor();
  comp.threshold.value = -12;
  comp.knee.value = 20;
  comp.ratio.value = 6;
  comp.attack.value = 0.004; // slow enough to let the crunch transients through
  comp.release.value = 0.2;
  m.connect(comp);
  comp.connect(c.destination);
  // old iOS: a started silent buffer inside the gesture unlocks output
  try {
    const sb = c.createBuffer(1, 1, 22050);
    const ss = c.createBufferSource();
    ss.buffer = sb;
    ss.connect(c.destination);
    ss.start(0);
  } catch (e) { /* ignore */ }
  const b = c.createGain();
  b.gain.value = 1;
  b.connect(m);
  ctx = c;
  master = m;
  bus = b;
  whiteBuf = makeWhite(c, 2);
  brownBuf = makeBrown(c, 4);
  crackleBuf = makeCrackle(c, 2);
}

function init() {
  try {
    const nav = globalThis.navigator;
    if (nav && nav.audioSession) nav.audioSession.type = 'playback'; // iOS: ignore the silent switch
  } catch (e) { /* ignore */ }
  try {
    if (!ctx) {
      const AC = globalThis.AudioContext || globalThis.webkitAudioContext;
      if (!AC) return;
      let c;
      try { c = new AC({ latencyHint: 'interactive' }); } catch (e) { c = new AC(); }
      try {
        build(c);
      } catch (e) {
        ctx = null; master = null; bus = null; whiteBuf = brownBuf = crackleBuf = null;
        try { c.close(); } catch (e2) { /* ignore */ }
        return;
      }
    }
    paused = false; // a user gesture means the app is in the foreground
    if (ctx.state !== 'running') resumeCtx();
    startSamples(); // async + fire-and-forget: sounds fall back to the synth until it lands
  } catch (e) { /* ignore */ }
}

function setMuted(b) {
  muted = !!b;
  saveMuted();
  if (ctx && master) {
    const t = ctx.currentTime;
    master.gain.cancelScheduledValues(t);
    master.gain.setTargetAtTime(muted ? 0 : MASTER_LEVEL, t, 0.015);
  }
  if (muted) silenceRoll();
}

function isMuted() { return muted; }

function suspend() {
  if (!ctx) return;
  paused = true;
  silenceRoll();
  const p = ctx.suspend();
  if (p && typeof p.catch === 'function') p.catch(() => {});
}

function resume() {
  if (!ctx) return;
  paused = false;
  resumeCtx();
}

// ----------------------------------------------------------------- rolling

function silenceRoll() {
  if (!roll || !ctx) return;
  const t = ctx.currentTime;
  roll.out.gain.cancelScheduledValues(t);
  roll.out.gain.setTargetAtTime(0, t, 0.03);
  roll.sp = 0;
}

function createRoll() {
  const out = gain0(0);
  out.connect(master);

  const brown = ctx.createBufferSource();
  brown.buffer = brownBuf;
  brown.loop = true;
  const lp = filt('lowpass', 200, 0.7);
  const rg = gain0(1.2);
  link(brown, lp, rg, out);
  brown.start(0, rand(0, brownBuf.duration - 0.1));

  const sub = ctx.createOscillator();
  sub.type = 'triangle';
  sub.frequency.value = 70;
  const subG = gain0(0);
  link(sub, subG, out);
  sub.start();

  const hiss = ctx.createBufferSource();
  hiss.buffer = whiteBuf;
  hiss.loop = true;
  const hbp = filt('bandpass', 2000, 0.6);
  const hg = gain0(0);
  link(hiss, hbp, hg, out);
  hiss.start(0, rand(0, whiteBuf.duration - 0.1));

  // slow tremolo on the whole loop = the ball's revolutions
  const lfo = ctx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = 3;
  const lfoG = gain0(0);
  link(lfo, lfoG);
  lfoG.connect(out.gain);
  lfo.start();

  return { out, lp, sub, subG, hbp, hg, lfo, lfoG, sp: -1, sz: -1 };
}

function setRoll(speed01, size01) {
  if (!ready()) return;
  let sp = clamp01(num(speed01, 0));
  const sz = clamp01(num(size01, 0));
  if (sp < 0.01) sp = 0;
  if (!roll) {
    if (sp === 0) return;
    roll = createRoll();
  }
  if (Math.abs(sp - roll.sp) + Math.abs(sz - roll.sz) < 0.003) return;
  roll.sp = sp;
  roll.sz = sz;
  const t = ctx.currentTime;
  const level = sp === 0 ? 0 : Math.pow(sp, 1.2) * (0.16 + 0.2 * sz) * MIX.roll;
  roll.out.gain.setTargetAtTime(level, t, 0.09);
  roll.lp.frequency.setTargetAtTime((140 + 620 * sp) * (1 - 0.5 * sz), t, 0.12);
  roll.sub.frequency.setTargetAtTime(96 - 44 * sz + 14 * sp, t, 0.15);
  roll.subG.gain.setTargetAtTime(sp === 0 ? 0 : 0.05 + 0.1 * sz, t, 0.12);
  roll.hbp.frequency.setTargetAtTime(1600 + 1600 * sp, t, 0.12);
  roll.hg.gain.setTargetAtTime(0.7 * sp * sp * (1 - 0.4 * sz), t, 0.1);
  roll.lfo.frequency.setTargetAtTime((1.5 + 5 * sp) / (0.8 + 0.8 * sz), t, 0.15);
  roll.lfoG.gain.setTargetAtTime(level * 0.16, t, 0.1);
}

// ------------------------------------------------------------------- sounds

function pop(size01, combo) {
  if (!ready() || !throttle('pop', 0.022)) return;
  const s = clamp01(num(size01, 0.3));
  const c = Math.max(0, Math.floor(num(combo, 0)));
  const v = begin(P_POP, 0.45, MIX.pop);
  if (!v) return;
  const t = ctx.currentTime + 0.002;
  const cm = Math.min(c, 10) / 10;

  // pitched pluck walking up the pentatonic scale; bigger things sit a little lower
  const f = BASE_HZ * Math.pow(2, (scaleSemis(c) - s * 4) / 12) * rand(0.97, 1.03);
  tone(v, 'triangle', t, f * 1.05, f, 0.012, 0.2 * (1 + 0.3 * cm), 0.002, 0.15 + 0.05 * s);
  tone(v, 'sine', t, f * 2, 0, 0, 0.07 + 0.07 * cm, 0.001, 0.07); // sparkle octave

  // snow crunch: crackle grains through a band that drops with size, plus a click
  // (a bit quieter when the real crunch sample is layered on top)
  const sc = has('snow_crunch');
  const bf = rand(2300, 3800) * (1 - 0.4 * s);
  nz(v, crackleBuf, t, 'bandpass', bf, bf * 0.7, rand(0.9, 1.5), 0.08, 2.0 * (0.7 + 0.3 * s) * (sc ? 0.55 : 1), 0.002, 0.05 + 0.07 * s);
  nz(v, whiteBuf, t, 'highpass', rand(2500, 3500), 0, 0.7, 0, 0.3 * (sc ? 0.6 : 1), 0.0008, 0.012);

  // body thump for the big stuff
  if (s > 0.2) tone(v, 'sine', t, rand(130, 160) * (1 - 0.3 * s), 50, 0.11, 0.3 * s, 0.003, 0.12);

  // sampled snow crunch: bigger = lower + longer; throttled harder than the synth so a
  // swallow burst can't pile up a wall of 0.3 s tails (and eat the shared voice cap)
  if (sc && throttle('popS', 0.04)) {
    smp('snow_crunch', SM.pop * (0.75 + 0.45 * s), (1.5 - 0.75 * s) * rand(0.92, 1.08), P_POP, t, 0.12 + 0.2 * s);
  }
}

function bump(intensity01) {
  if (!ready() || !throttle('bump', 0.07)) return;
  const k = clamp01(num(intensity01, 0.5));
  const v = begin(P_BIG, 0.9, MIX.bump);
  if (!v) return;
  const t = ctx.currentTime + 0.002;
  const a = 0.4 + 0.6 * k;
  // with samples: the soft-impact body and the hit's mid knock carry most of it, the synth
  // keeps a bit of thud (+ the crumble) underneath
  const ss = has('impact_soft'), sh = has('hit');
  const ps = ss || sh ? 0.65 : 1;
  tone(v, 'sine', t, rand(105, 125), 40, 0.16, 0.6 * a * ps, 0.003, 0.3); // dull heavy thud
  tone(v, 'triangle', t, rand(170, 200), 80, 0.12, 0.45 * a * (sh ? 0.4 : 1), 0.002, 0.14); // mid knock (phone speakers)
  nz(v, brownBuf, t, 'lowpass', 280, 120, 0.7, 0.2, 0.6 * a * ps, 0.004, 0.22);
  nz(v, whiteBuf, t, 'lowpass', 1200, 300, 0.7, 0.2, 0.7 * a * (ss || sh ? 0.8 : 1), 0.004, 0.16); // muffled snow puff
  rattle(v, t, 0.03, 0.25 + 0.15 * k, 4 + Math.round(8 * k), 700, 2000, 0.8, 0.9 * a * (ss || sh ? 0.8 : 1)); // crumble
  if (ss) smp('impact_soft', SM.bumpSoft * (0.55 + 0.45 * k), (1.1 - 0.15 * k) * rand(0.94, 1.06), P_BIG, t, 0);
  if (sh) smp('hit', SM.bumpHit * (0.45 + 0.55 * k), rand(0.94, 1.06), P_BIG, t, 0.4);
}

function crash(intensity01) {
  if (!ready() || !throttle('crash', 0.06)) return;
  const k = clamp01(num(intensity01, 0.7));
  const v = begin(P_BIG + 0.5, 1.8, MIX.crash);
  if (!v) return;
  const t = ctx.currentTime + 0.002;
  const a = 0.55 + 0.45 * k;
  // samples bring the mid punch + the shattering; the synth keeps the sub boom + rumble
  // (the things phone speakers can't do and a short sample can't sustain) and thins out
  // its own noise burst / debris so the two don't smear together
  const sm = has('break') || has('crash_wood') || has('crash_rock') || has('crash_glass');
  const ds = sm ? 0.5 : 1;
  tone(v, 'sine', t, rand(70, 90), 26, 0.6, 0.55 * a, 0.004, 0.95); // sub boom
  tone(v, 'triangle', t, rand(150, 190), 55, 0.25, 0.5 * a * (sm ? 0.7 : 1), 0.002, 0.28); // punch (phone speakers)
  nz(v, brownBuf, t, 'lowpass', 650, 150, 0.8, 0.7, 0.8 * a * (sm ? 0.85 : 1), 0.004, 0.8); // rumble body
  nz(v, whiteBuf, t, 'lowpass', 7000, 400, 0.8, 0.6, 0.9 * a * ds, 0.002, 0.55); // noise burst
  rattle(v, t, 0.08, 0.7 + 0.5 * k, 8 + Math.round(14 * k), 600, 4200, 1.0, 0.6 * a * ds); // debris
  rattle(v, t, 0.2, 0.9 + 0.4 * k, 5 + Math.round(8 * k), 250, 1400, 0.9, 0.5 * a * ds); // heavy chunks
  if (sm) crashSamples(k, t);
}

/**
 * Sampled layers of crash(): small stuff = wooden crates; from ~0.4 up the building
 * collapse (break_N) takes over with the wood on top; the big ones add rock or glass
 * a hair later so the layers stagger instead of stacking into one click.
 */
function crashSamples(k, t) {
  const P = P_BIG + 0.5;
  const r = (1.1 - 0.22 * k) * rand(0.95, 1.05); // bigger = lower
  const e = 0.7 + 0.5 * k;
  if (k < 0.4) {
    // (the fallbacks only matter if part of the bank failed to decode)
    if (!smp('crash_wood', SM.crashWood * e, r, P, t, 0) && !smp('break', SM.crashBreak * e, r, P, t, 0)) {
      smp('crash_rock', SM.crashRock * e, r, P, t, 0) || smp('crash_glass', SM.crashGlass * e, r, P, t, 0);
    }
    return;
  }
  if (!smp('break', SM.crashBreak * e, r, P, t, 0)) smp('crash_rock', SM.crashRock * e, r, P, t, 0);
  smp('crash_wood', SM.crashWood * 0.6 * e, r * rand(0.95, 1.05), P, t + 0.015, 0);
  if (k > 0.65) {
    const glass = Math.random() < 0.4;
    smp(glass ? 'crash_glass' : 'crash_rock', (glass ? SM.crashGlass : SM.crashRock) * (0.5 + 0.5 * k), r, P, t + 0.04, 0);
  }
}

function whoosh() {
  if (!ready() || !throttle('whoosh', 0.3)) return;
  const v = begin(P_FX, 1.3, MIX.whoosh);
  if (!v) return;
  const t = ctx.currentTime + 0.002;
  const s = noise(v, whiteBuf, t, 1.25);
  const bp = filt('bandpass', 320, 1.1);
  bp.frequency.setValueAtTime(320, t);
  bp.frequency.exponentialRampToValueAtTime(2800, t + 0.5);
  bp.frequency.exponentialRampToValueAtTime(900, t + 1.15);
  const g = gain0();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(1.6, t + 0.38);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
  link(s, bp, g, v.out);
  swell(v, brownBuf, t, 'lowpass', 300, 500, 200, 0.7, 0.6, 0.3, 1.0); // air body
  swell(v, whiteBuf, t + 0.05, 'highpass', 4500, 5500, 4000, 0.7, 0.12, 0.3, 0.9); // shimmer
}

function land(intensity01) {
  if (!ready() || !throttle('land', 0.1)) return;
  const k = clamp01(num(intensity01, 0.5));
  const v = begin(P_BIG, 0.9, MIX.land);
  if (!v) return;
  const t = ctx.currentTime + 0.002;
  const a = 0.4 + 0.6 * k;
  // with samples: soft impact body + snow crunch, the synth keeps a thud and the "poof"
  const ss = has('impact_soft'), sc = has('snow_crunch');
  const ps = ss ? 0.75 : 1;
  const pc = sc ? 0.6 : 1;
  tone(v, 'sine', t, rand(100, 120), 42, 0.14, 0.75 * a * ps, 0.003, 0.28);
  tone(v, 'triangle', t, rand(150, 175), 70, 0.12, 0.4 * a, 0.002, 0.16); // mid knock (phone speakers)
  nz(v, brownBuf, t, 'lowpass', 240, 110, 0.7, 0.25, 0.55 * a * ps, 0.004, 0.3);
  nz(v, whiteBuf, t, 'lowpass', 2400, 500, 0.7, 0.3, 0.7 * a * pc, 0.008, 0.3); // soft "poof"
  rattle(v, t, 0.04, 0.3, 3 + Math.round(8 * k), 900, 2400, 0.8, 0.8 * a * pc); // snow settling
  if (ss) smp('impact_soft', SM.landSoft * (0.5 + 0.5 * k), (1.1 - 0.2 * k) * rand(0.95, 1.05), P_BIG, t, 0.45);
  if (sc) smp('snow_crunch', SM.landCrunch * (0.6 + 0.4 * k), (1 - 0.3 * k) * rand(0.94, 1.06), P_BIG, t + 0.012, 0);
}

function milestone(level) {
  if (!ready()) return;
  const lv = Math.max(1, Math.min(6, Math.floor(num(level, 1))));
  const v = begin(P_JINGLE, 2.4, MIX.milestone);
  if (!v) return;
  const t = ctx.currentTime + 0.01;

  // The jingle sample replaces the synth arpeggio (it is only the fallback); the
  // avalanche rumble below stays synthesised either way. Each level lifts the stinger up
  // the G pentatonic (0, +2, +4, +7, +9, +12 semitones: pitch + tempo), like the arpeggio
  // lifted its key, but staying in tune with the pop walk.
  const n = Math.min(8, 4 + lv);
  const gap = Math.max(0.045, 0.075 - lv * 0.005);
  if (has('jingle_milestone')) {
    smp('jingle_milestone', SM.milestone * (0.85 + 0.03 * lv), Math.pow(2, (scaleSemis(lv - 1) + STEEL_FIX) / 12), P_JINGLE, t, 0);
  } else {
    // rising major arpeggio; each level lifts the key and adds notes + a bigger last chord
    const ARP = [0, 4, 7, 12, 16, 19, 24, 28];
    const root = 261.63 * Math.pow(2, ((lv - 1) * 2) / 12);
    for (let i = 0; i < n; i++) {
      const ti = t + i * gap;
      const last = i === n - 1;
      const f = root * Math.pow(2, ARP[i] / 12) * rand(0.998, 1.002);
      const peak = 0.17 + 0.1 * (i / n);
      tone(v, 'triangle', ti, f, 0, 0, peak, 0.004, last ? 0.7 + 0.1 * lv : 0.2);
      tone(v, 'sine', ti, f * 2, 0, 0, peak * 0.4, 0.003, last ? 0.5 : 0.14);
      if (last && lv >= 2) {
        tone(v, 'sine', ti, f * 1.5, 0, 0, peak * 0.5, 0.006, 0.8);
        tone(v, 'sine', ti, f * 0.5, 0, 0, peak * 0.5, 0.006, 0.9);
      }
    }
  }

  // rumble swell + snow-wave whoomph
  const tp = 0.4 + 0.05 * lv;
  swell(v, brownBuf, t, 'lowpass', 90, 520, 140, 0.8, 0.9 + 0.1 * lv, tp, 1.9);
  tswell(v, 'sine', t, 50, 78, 0.28 + 0.04 * lv, tp, 1.8);
  swell(v, whiteBuf, t, 'bandpass', 500, 2500, 900, 0.8, 0.5 + 0.05 * lv, tp, 1.5);
  if (lv >= 4) nz(v, whiteBuf, t + n * gap, 'highpass', 5000, 0, 0.7, 0, 0.1, 0.01, 0.6); // sparkle
}

/**
 * Button feedback. kind (optional): 'click' (default), 'select', 'confirm', 'back',
 * 'toggle'. Sample only; the synth blip is the fallback (and only knows 'click').
 */
function ui(kind) {
  if (!ready() || !throttle('ui', 0.03)) return;
  let name = typeof kind === 'string' ? UI_SAMPLE[kind] : undefined;
  if (!name || !has(name)) name = 'ui_click';
  if (has(name)) {
    smp(name, SM.ui, rand(0.97, 1.03), P_UI, ctx.currentTime + 0.001, 0);
    return;
  }
  const v = begin(P_UI, 0.15, MIX.ui);
  if (!v) return;
  const t = ctx.currentTime + 0.001;
  tone(v, 'sine', t, 1500, 900, 0.03, 0.26, 0.001, 0.05);
  tone(v, 'triangle', t, 3000, 1800, 0.03, 0.06, 0.001, 0.03);
  nz(v, whiteBuf, t, 'highpass', 3500, 0, 0.7, 0, 0.12, 0.0008, 0.008);
}

function star(i) {
  if (!ready()) return;
  const k = Math.max(0, Math.min(2, Math.round(num(i, 0))));
  const v = begin(P_JINGLE, 1.6, MIX.star);
  if (!v) return;
  const t = ctx.currentTime + 0.005;
  const tn = t + 0.07;
  const f = 784 * Math.pow(2, [0, 4, 7][k] / 12);
  tone(v, 'sine', t, f * 0.5, f, 0.09, 0.1, 0.01, 0.08); // rising "pfiu"
  tone(v, 'sine', tn, f, 0, 0, 0.28, 0.003, 0.7 + 0.15 * k); // bell
  tone(v, 'sine', tn, f * 2.76, 0, 0, 0.08, 0.002, 0.35); // inharmonic bell partials
  tone(v, 'sine', tn, f * 5.4, 0, 0, 0.04, 0.002, 0.2);
  nz(v, whiteBuf, tn, 'highpass', 6000 + k * 500, 0, 0.7, 0, 0.07 + 0.02 * k, 0.001, 0.12);
  if (k === 2) {
    tone(v, 'triangle', tn, f * 2, 0, 0, 0.12, 0.004, 1.0);
    tone(v, 'sine', tn, f * 1.5, 0, 0, 0.1, 0.004, 0.9);
  }
  // sampled glass "ping" an octave above the bell and tuned to it (so it rings with the
  // synth instead of against it); the last star adds the rising stinger
  if (has('coin')) smp('coin', SM.coin, (f * 2) / COIN_HZ, P_JINGLE, tn, 0);
  if (k === 2 && has('jingle_star')) smp('jingle_star', SM.starJingle, STAR_RATE, P_JINGLE, tn, 0);
}

function win() {
  if (!ready()) return;
  if (has('jingle_win')) { // the sample is the whole sound; the fanfare below is the fallback
    smp('jingle_win', SM.win, WIN_RATE, P_JINGLE, ctx.currentTime + 0.01, 0);
    return;
  }
  const v = begin(P_JINGLE, 1.6, MIX.win);
  if (!v) return;
  const t = ctx.currentTime + 0.01;
  const lp = filt('lowpass', 3200, 0.7);
  lp.connect(v.out);
  const note = (ti, f, dur, peak) => {
    const g = gain0();
    g.gain.setValueAtTime(0.0001, ti);
    g.gain.linearRampToValueAtTime(peak, ti + 0.012);
    g.gain.linearRampToValueAtTime(peak * 0.8, ti + dur * 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, ti + dur);
    const o1 = osc(v, 'sawtooth', f * rand(0.998, 1.002), ti, dur + 0.03);
    const o2 = osc(v, 'triangle', f, ti, dur + 0.03);
    link(o1, g);
    link(o2, g);
    g.connect(lp);
  };
  // ta-ta-ta-DAAA
  note(t, 523.25, 0.13, 0.1);
  note(t + 0.11, 659.25, 0.13, 0.1);
  note(t + 0.22, 783.99, 0.13, 0.1);
  const tc = t + 0.36;
  note(tc, 523.25, 0.9, 0.07);
  note(tc, 659.25, 0.9, 0.07);
  note(tc, 783.99, 0.9, 0.07);
  note(tc, 1046.5, 0.9, 0.08);
  // confetti sparkle
  nz(v, whiteBuf, tc, 'highpass', 5500, 0, 0.7, 0, 0.09, 0.01, 0.5);
  tone(v, 'sine', tc + 0.04, 2093, 0, 0, 0.05, 0.002, 0.25);
  tone(v, 'sine', tc + 0.16, 2637, 0, 0, 0.05, 0.002, 0.25);
  tone(v, 'sine', tc + 0.28, 3136, 0, 0, 0.05, 0.002, 0.3);
}

function lose() {
  if (!ready()) return;
  if (has('jingle_lose')) { // the sample is the whole sound; the sad trombone below is the fallback
    smp('jingle_lose', SM.lose, 1, P_JINGLE, ctx.currentTime + 0.01, 0);
    return;
  }
  const v = begin(P_JINGLE, 1.8, MIX.lose);
  if (!v) return;
  const t = ctx.currentTime + 0.01;
  // sad trombone: wah-wah-wah-waaah
  const notes = [[466.16, 0.26], [440, 0.26], [415.3, 0.26], [392, 0.9]];
  let total = 0;
  for (let i = 0; i < notes.length; i++) total += notes[i][1] + 0.03;
  const lp = filt('lowpass', 500, 3);
  const g = gain0();
  link(g, lp, v.out);
  const o1 = osc(v, 'sawtooth', notes[0][0], t, total + 0.1);
  const o2 = osc(v, 'triangle', notes[0][0] * 0.5, t, total + 0.1);
  link(o1, g);
  link(o2, g);
  const lfo = osc(v, 'sine', 5.5, t, total + 0.1);
  const lfoG = gain0(0);
  link(lfo, lfoG);
  lfoG.connect(o1.detune);
  lfoG.connect(o2.detune);
  g.gain.setValueAtTime(0.0001, t);
  lp.frequency.setValueAtTime(380, t);
  const peak = 0.16;
  let tk = t;
  for (let i = 0; i < notes.length; i++) {
    const f = notes[i][0];
    const d = notes[i][1];
    const lastNote = i === notes.length - 1;
    o1.frequency.setValueAtTime(f, tk);
    o2.frequency.setValueAtTime(f * 0.5, tk);
    if (lastNote) {
      o1.frequency.exponentialRampToValueAtTime(f * 0.92, tk + d);
      o2.frequency.exponentialRampToValueAtTime(f * 0.46, tk + d);
      lfoG.gain.setValueAtTime(0, tk);
      lfoG.gain.linearRampToValueAtTime(24, tk + d * 0.6);
    }
    g.gain.setValueAtTime(0.0001, tk);
    g.gain.linearRampToValueAtTime(peak, tk + 0.025);
    g.gain.linearRampToValueAtTime(peak * 0.85, tk + d * 0.75);
    g.gain.exponentialRampToValueAtTime(0.0001, tk + d);
    lp.frequency.setValueAtTime(380, tk);
    lp.frequency.exponentialRampToValueAtTime(1500, tk + (lastNote ? 0.25 : 0.09));
    lp.frequency.exponentialRampToValueAtTime(500, tk + d);
    tk += d + 0.03;
  }
}

// --------------------------------------------------------------- public API

// Every method goes through guard(): whatever happens inside, callers never see a throw.
const guard = (fn, fallback) => function () {
  try { return fn.apply(null, arguments); } catch (e) { return fallback; }
};

export const audio = {
  /** Call from a user gesture (pointerup). Idempotent. */
  init: guard(init),
  setMuted: guard(setMuted),
  isMuted: guard(isMuted, false),
  /** Swallow sound. size01: 0..1 (bigger = lower/thumpier); combo: consecutive swallows (pitch walks up). */
  pop: guard(pop),
  bump: guard(bump),
  crash: guard(crash),
  /** Per-frame rolling rumble. speed01 = 0 silences it. */
  setRoll: guard(setRoll),
  whoosh: guard(whoosh),
  land: guard(land),
  /** level 1..n gets grander (capped at 6). */
  milestone: guard(milestone),
  /** Button feedback. Optional kind: 'click' (default) | 'select' | 'confirm' | 'back' | 'toggle'. */
  ui: guard(ui),
  /** i = 0, 1, 2. */
  star: guard(star),
  win: guard(win),
  lose: guard(lose),
  suspend: guard(suspend),
  resume: guard(resume),
};
