import * as THREE from 'three';
import './style.css';
import { CFG, LABEL } from './config.js';
import { buildPropLibrary } from './props.js';
import { World, clamp } from './world.js';
import { Ball } from './ball.js';
import { Fx } from './fx.js';
import { Input } from './input.js';
import { UI, fmtTons } from './ui.js';
import { audio } from './audio.js';
import { platform } from './platform.js';
import { save } from './save.js';
import { dailySeed, dailyNumber } from './rng.js';
import { PostFX, VISUAL_MODES, SU, patchMaterial } from './shaders.js';
import { makeSkin, disposeSkin, trailStyle } from './skins.js';
import { Scenery, themeForLevel } from './scenery.js';
import { loadModels } from './assets.js';
import { meta } from './meta.js';
import { createMenus } from './menus.js';
import { levelById, evalGoals, countStars } from './campaign.js';
import { openShop } from './shop.js';
// Endless mode is loaded on demand (keeps the first load small and ÇIĞ mode independent of it).
let Runner = null;
let music = { duck() {}, setMuted() {} };
async function loadEndless() {
  if (Runner) return;
  const [r, mu] = await Promise.all([import('./runner/runner.js'), import('./runner/music.js')]);
  Runner = r.Runner;
  music = mu.music;
  music.setMuted(!musicOn);
}

const params = new URLSearchParams(location.search);
const DEBUG = params.has('debug');
let AUTO = params.has('auto');
const MAX_LEVEL = 99;

// ---------- renderer / scene ----------
const canvas = document.getElementById('c');
const dprMax = Math.min(window.devicePixelRatio || 1, 2);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: dprMax < 2, powerPreference: 'high-performance' });
let dpr = dprMax;
renderer.setPixelRatio(dpr);

const HORIZON = 0xdcefff;
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(HORIZON, 90, 340);
scene.background = new THREE.Color(HORIZON);

const sky = makeSky();
sky.visible = false;
scene.add(sky);
const hemi = new THREE.HemisphereLight(0xffffff, 0xaec3e3, 1.55);
hemi.visible = false;
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff1dc, 1.9);
sun.position.set(0.25, 1, 0.6);
sun.visible = false;
scene.add(sun);

const camera = new THREE.PerspectiveCamera(60, 1, 0.5, 1400);
const post = new PostFX(renderer);
let visualMode = 'normal';
try { visualMode = localStorage.getItem('cig.visual') || 'normal'; } catch { /* ignore */ }
post.setMode(visualMode);
const camLook = new THREE.Vector3();
let baseFov = 60;

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  // Portrait phones need a wide horizontal view; derive vertical FOV from a target horizontal FOV.
  const hfov = 46 * Math.PI / 180;
  const vfov = 2 * Math.atan(Math.tan(hfov / 2) / camera.aspect) * 180 / Math.PI;
  baseFov = clamp(vfov, 52, 76);
  camera.fov = baseFov + (camera.userData.fovBoost || 0);
  camera.updateProjectionMatrix();
  post?.resize();
}
window.addEventListener('resize', resize);
resize();

canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); pause(true); });

// ---------- systems ----------
const lib = buildPropLibrary();
const propMat = patchMaterial(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
const ball = new Ball(scene, lib, propMat);
const ui = new UI();
const input = new Input(canvas);
let world = null;
let fx = null;
let runner = null;
let scenery = null;
// Particles in endless mode fall into the void instead of bouncing on the ÇIĞ terrain.
const groundless = { groundY: () => -1e9, rampAt: () => 0 };

const G = {
  mode: 'cig',
  state: 'menu', paused: false,
  level: save.level, daily: false,
  targetX: 0, combo: 0, comboT: 0, avl: 0,
  swallowed: 0, townTons: 0, destroyed: 0,
  bumpCd: 0, shake: 0, endT: 0, slowT: 0, timeScale: 1,
  onRamp: false, lastRamp: 0, meltT: 0, meltWarned: false,
  hinted: false, result: null,
};
const near = [];
const _v = new THREE.Vector3();

// ---------- wardrobe ----------
let skin = null;
function applySkin(id) {
  const next = makeSkin(id);
  // Lava ships its own shader patch; everything else gets the shared look (classic = sparkly snow).
  if (id !== 'lav') patchMaterial(next.material, { snow: id === 'classic' || id === 'pamuk' });
  ball.snow.geometry = next.geometry;
  ball.snow.material = next.material;
  if (skin) disposeSkin(skin);
  skin = next;
}
function applyTrail(id) {
  fx?.setTrailStyle(trailStyle(id));
}
let closeShop = null;
window.__cigSfx = audio;

// ---------- meta (missions, achievements, daily rewards) + FREEMON main menu ----------
meta.init(save);
let musicOn = true;
try { musicOn = localStorage.getItem('cig.music.muted') !== '1'; } catch { /* ignore */ }
function openWardrobe() {
  audio.init();
  menus.hideMain();
  closeShop = openShop({
    save,
    onSelect: (kind, id) => {
      if (kind === 'skin') { applySkin(id); meta.track('skin_select', { id }); }
      else { applyTrail(id); meta.track('trail_select', { id }); }
    },
    onClose: () => { closeShop = null; toMenu(); },
  });
}
function cycleVisual() {
  const i = VISUAL_MODES.findIndex((v) => v.id === visualMode);
  visualMode = VISUAL_MODES[(i + 1) % VISUAL_MODES.length].id;
  post.setMode(visualMode);
  try { localStorage.setItem('cig.visual', visualMode); } catch { /* ignore */ }
  setVisualLabel();
  meta.track('visual_mode', { id: visualMode });
  return VISUAL_MODES.find((v) => v.id === visualMode).name;
}
const menus = createMenus({
  save,
  meta,
  root: document.getElementById('app'),
  callbacks: {
    onEndless: () => startEndless(),
    onPlayLevel: (id) => startLevel(id),
    onSneeze: () => { fx?.burst(ball.x, ball.y + ball.r, ball.d, 30, 0xffffff, 6, 0.15, 6); audio.pop(0.2, 4); },
    onLevels: () => startRun(false),
    onDaily: () => startRun(true),
    onShop: () => openWardrobe(),
    onVisualCycle: () => cycleVisual(),
    onSound: (on) => { audio.init(); audio.setMuted(!on); ui.setToggle('sound', on); },
    onMusic: (on) => { musicOn = on; music.setMuted(!on); try { localStorage.setItem('cig.music.muted', on ? '0' : '1'); } catch { /* ignore */ } },
    onHaptics: (on) => { platform.setHapticsEnabled(on); ui.setToggle('haptic', on); if (on) platform.haptic('medium'); },
    getToggles: () => ({ sound: !audio.isMuted(), music: musicOn, haptics: platform.hapticsEnabled(), visualName: (VISUAL_MODES.find((v) => v.id === visualMode) || VISUAL_MODES[0]).name }),
    sfx: (kind) => { audio.init(); audio.ui(kind); },
    onReward: () => menus.refresh(),
  },
});
meta.track('session', {});
let dailyShown = false;

platform.init();
platform.onPause(() => { if (G.state === 'play') pause(true); audio.suspend(); });
platform.onResume(() => audio.resume());
platform.onBack(() => {
  if (closeShop) { closeShop(); return; }
  if (G.state === 'play' || G.state === 'runner') pause(!G.paused);
  else if (G.state === 'result' || G.state === 'end') toMenu();
  else if (G.state === 'menu' && platform.isNative) import('@capacitor/app').then(({ App }) => App.exitApp()).catch(() => {});
});

input.onRelease(() => audio.init());

// ---------- flow ----------
function buildWorld(seed, level, daily) {
  if (world) world.dispose();
  world = new World(scene, lib, { seed, level, daily });
  scenery?.dispose();
  scenery = new Scenery(scene, { world, lib, theme: themeForLevel(level, daily), onEgg: (id) => meta.egg(id) });
  if (!fx) { fx = new Fx(scene, world); applyTrail(save.selected('trail')); }
  fx.world = world;
  fx.reset();
}

// Show/hide everything that belongs to the ÇIĞ mountain mode.
function setCigVisible(on) {
  if (world) world.group.visible = on;
  if (scenery) scenery.group.visible = on;
  if (fx) { fx.trail.visible = on; fx.shadow.visible = on; }
}

// Campaign level (1..100): an endless-mode run locked to one biome with a finish line.
function startLevel(id) {
  const lv = levelById(id);
  if (!lv) return;
  startEndless(lv);
}

function levelDone(lv, stats) {
  const goalsMet = evalGoals(lv, { ...stats, finished: true });
  const stars = Math.max(1, countStars(goalsMet));
  meta.track('endless_end', { distance: stats.distance, score: stats.score, coins: stats.coins, crashes: stats.crashes, cause: 'finish', maxTier: stats.maxTier, campaign: true });
  save.addCoins(stats.coins);
  const rewards = meta.completeLevel(lv.id, stars, { ...stats, goalsMet });
  setTimeout(() => {
    ui.runnerHud(false, '');
    menus.showLevelComplete({ level: lv, stars, goalsMet, rewards, hasNext: !!(rewards && rewards.next) }, {
      onNext: () => { const n = levelById(rewards.next); if (n && !menus.showLevelIntro(n, () => startLevel(n.id))) startLevel(n.id); },
      onRetry: () => startLevel(lv.id),
      onMap: () => { toMenu(); menus.openMap(lv.id); },
    });
  }, 1600);
}

function levelFailed(lv, cause) {
  ui.runnerHud(false, '');
  menus.showLevelFailed({ level: lv, cause }, {
    onRetry: () => startLevel(lv.id),
    onMap: () => { toMenu(); menus.openMap(lv.id); },
  });
}

async function startEndless(level = null) {
  audio.init();
  audio.ui();
  try {
    await loadEndless();
  } catch (e) {
    console.error(e);
    ui.toast('Sonsuz mod yüklenemedi');
    return;
  }
  G.mode = 'runner';
  G.state = 'runner';
  G.paused = false;
  G.result = null;
  ui.showPause(false);
  menus.hideMain();
  setCigVisible(false);
  fx.world = groundless;
  scene.fog.near = 60;
  scene.fog.far = 330;
  if (!runner) runner = new Runner({ scene, camera, lib, ball, fx, ui, audio, platform, save, input, meta, menus });
  input.consumeLane();
  input.consumeDive();
  input.consumeDoubleTap();
  runner.onFinish = level ? (stats) => levelDone(level, stats) : null;
  runner.onFail = level ? (cause) => levelFailed(level, cause) : null;
  runner.start(undefined, level);
}

function leaveEndless() {
  if (G.mode !== 'runner') return;
  runner?.dispose();
  G.mode = 'cig';
  scene.fog.color.set(HORIZON);
  scene.background = new THREE.Color(HORIZON);
  setCigVisible(true);
}

function toMenu() {
  leaveEndless();
  G.state = 'menu';
  G.paused = false;
  G.level = Math.min(save.level, MAX_LEVEL);
  buildWorld(G.level * 7919 + 13, G.level, false);
  ball.reset(CFG.startR);
  ball.y = world.groundY(0, 0) + ball.r;
  ball.sync();
  const ds = dailySeed();
  const best = save.dailyFor(ds);
  ui.showMenu({ level: G.level, stars: save.starsFor(G.level), dailyNum: dailyNumber(), dailyBest: best ? best.tons : 0, theme: scenery.theme.name });
  ui.el.menu.classList.add('hidden'); // the FREEMON menu (menus.js) replaces the old screen
  menus.showMain({
    level: G.level,
    levelStars: save.starsFor(G.level),
    theme: scenery.theme.name,
    endlessBest: save.runnerBest(),
    endlessBestDist: save.runnerBestDist(),
    dailyNum: dailyNumber(),
    dailyBest: best ? best.tons : 0,
    coins: save.coins,
  });
  if (!dailyShown) { dailyShown = true; menus.showDailyIfAvailable(); }
  audio.setRoll(0, 0);
  ball.sync();
  updateCamera(0, true);
}

function startRun(daily) {
  leaveEndless();
  menus.hideMain();
  meta.track('run_start', { mode: 'cig' });
  audio.init();
  audio.ui();
  G.daily = daily;
  const seed = daily ? (G.dailySeed = dailySeed()) : G.level * 7919 + 13;
  G.dailyNo = dailyNumber();
  buildWorld(seed, G.level, daily);
  ball.reset(CFG.startR);
  ball.y = world.groundY(0, 0) + ball.r;
  ball.speed = 4;
  Object.assign(G, {
    state: 'play', paused: false, targetX: 0, combo: 0, comboT: 0, avl: 0,
    swallowed: 0, townTons: 0, destroyed: 0, bumpCd: 0, momentumT: 0, shake: 0, endT: 0, slowT: 0, timeScale: 1,
    onRamp: false, lastRamp: 0, meltT: 0, meltWarned: false, result: null, sprayT: 0, progT: 0, progD: 0,
    dailySeed: dailySeed(), dailyNo: dailyNumber(),
  });
  input.consumeDx();
  ui.startRun(daily ? `GÜNÜN DAĞI #${G.dailyNo}` : `DAĞ ${G.level} · ${scenery.theme.name.toLocaleUpperCase('tr-TR')}`);
  ui.hint(!G.hinted);
  ball.sync();
  updateCamera(0, true);
}

function pause(on) {
  if (G.state !== 'play' && !(G.state === 'runner' && runner?.state === 'play')) return;
  G.paused = on;
  ui.showPause(on);
  if (on) {
    syncPauseToggles();
    const st = document.getElementById('pause-stats');
    st.textContent = G.mode === 'runner' && runner
      ? `${Math.round(runner.b.s).toLocaleString('tr-TR')} m · ${Math.round(runner.score).toLocaleString('tr-TR')} puan`
      : `${Math.round(ball.d)} m · ${fmtTons(totalTons())}`;
  }
  if (on) audio.setRoll(0, 0);
  if (G.mode === 'runner') music.duck(on);
  input.consumeDx(); // drags made on the pause screen must not yank the ball on resume
}

ui.on('btn-play', () => startRun(false));
ui.on('btn-daily', () => startRun(true));
ui.on('btn-pause', () => { audio.ui(); pause(true); });
ui.on('btn-resume', () => { audio.ui(); pause(false); });
ui.on('btn-restart', () => {
  audio.ui();
  G.paused = false;
  ui.showPause(false);
  if (G.mode === 'runner') { music.duck(false); startEndless(runner?.level || null); } else startRun(G.daily);
});
function syncPauseToggles() {
  for (const [id, on] of [['btn-p-sound', !audio.isMuted()], ['btn-p-music', musicOn], ['btn-p-haptic', platform.hapticsEnabled()]]) {
    document.getElementById(id).classList.toggle('off', !on);
  }
}
ui.on('btn-p-sound', () => { audio.setMuted(!audio.isMuted()); ui.setToggle('sound', !audio.isMuted()); syncPauseToggles(); audio.ui('toggle'); });
ui.on('btn-p-music', () => { musicOn = !musicOn; music.setMuted(!musicOn); try { localStorage.setItem('cig.music.muted', musicOn ? '0' : '1'); } catch { /* ignore */ } syncPauseToggles(); });
ui.on('btn-p-haptic', () => { platform.setHapticsEnabled(!platform.hapticsEnabled()); syncPauseToggles(); platform.haptic('medium'); });
ui.on('btn-quit', () => { audio.ui(); toMenu(); });
ui.on('btn-endless', () => startEndless());
ui.on('btn-shop', () => openWardrobe());
ui.on('btn-retry', () => (G.mode === 'runner' ? startEndless() : startRun(G.daily)));
ui.on('btn-next', () => {
  audio.ui();
  if (G.mode === 'runner') {
    if (runner.state === 'over' && !runner.revived) { runner.revive(); ui.hideResult(); }
    else toMenu();
    return;
  }
  if (G.daily || !G.result || G.result.stars === 0) { toMenu(); return; }
  G.level = Math.min(save.level, MAX_LEVEL);
  startRun(false);
});
ui.on('btn-share', async () => {
  audio.ui();
  let text;
  if (G.mode === 'runner' && runner) {
    text = `❄️ FREEMON · Yeti Kaçışı
📏 ${Math.round(runner.b.s).toLocaleString('tr-TR')} m
🏆 Skor ${Math.round(runner.score).toLocaleString('tr-TR')}
❄️ ${runner.coins}
Beni geçebilir misin?`;
  } else {
    if (!G.result) return;
    text = shareText(G.result);
  }
  const res = await platform.share({ text });
  meta.track('share', {});
  if (res === 'copied') ui.toast('Panoya kopyalandı!');
});
ui.on('btn-sound', () => {
  audio.init();
  audio.setMuted(!audio.isMuted());
  music.setMuted(audio.isMuted());
  ui.setToggle('sound', !audio.isMuted());
  audio.ui();
});
ui.on('btn-haptic', () => {
  platform.setHapticsEnabled(!platform.hapticsEnabled());
  ui.setToggle('haptic', platform.hapticsEnabled());
  platform.haptic('medium');
});
function setVisualLabel() {
  const mode = VISUAL_MODES.find((v) => v.id === visualMode) || VISUAL_MODES[0];
  document.getElementById('btn-visual').textContent = `🎨 ${mode.name}`;
}
ui.on('btn-visual', () => {
  audio.ui();
  const i = VISUAL_MODES.findIndex((v) => v.id === visualMode);
  visualMode = VISUAL_MODES[(i + 1) % VISUAL_MODES.length].id;
  post.setMode(visualMode);
  try { localStorage.setItem('cig.visual', visualMode); } catch { /* ignore */ }
  setVisualLabel();
});
setVisualLabel();
ui.setToggle('sound', !audio.isMuted());
ui.setToggle('haptic', platform.hapticsEnabled());

// ---------- gameplay ----------
function snowTons() {
  return (4 / 3) * Math.PI * ball.r ** 3 * CFG.snowDensity;
}
function totalTons() {
  return snowTons() + G.swallowed + G.townTons;
}

function updatePlay(dt) {
  const b = ball, w = world;
  const dx = input.consumeDx();
  if ((dx !== 0 || input.keyAxis() !== 0) && !G.hinted) { G.hinted = true; ui.hint(false); }
  const hw = w.halfWidth(b.d);
  const sens = CFG.steerSens * 2 * hw / Math.max(320, window.innerWidth);
  G.targetX += dx * sens + input.keyAxis() * 24 * dt;
  if (AUTO) G.targetX = autopilot();
  const lim = Math.max(0.5, hw - b.r * 0.55);
  G.targetX = clamp(G.targetX, -lim, lim);

  const mass = 1 + b.r * CFG.steerMass;
  const k = CFG.steerStiff / mass;
  const c = 2 * Math.sqrt(k) * 0.9;
  b.vx += ((G.targetX - b.x) * k - b.vx * c) * dt;

  const inTown = b.d > w.L;
  let target = Math.min(CFG.maxSpeed, CFG.baseSpeed + CFG.sizeSpeed * Math.sqrt(b.r));
  if (inTown) target *= 0.8;
  b.speed += clamp(target - b.speed, -CFG.accel * 3 * dt, CFG.accel * dt);

  const steps = Math.max(1, Math.ceil((b.speed * dt) / Math.max(0.3, b.r * 0.45)));
  for (let i = 0; i < steps; i++) step(dt / steps, lim);

  G.comboT -= dt;
  if (G.comboT <= 0 && G.combo) { G.combo = 0; ui.setCombo(0); }
  G.bumpCd -= dt;
  G.momentumT -= dt;

  // Powder kicked up by the ball — the snow should always read as snow.
  if (!b.airborne && b.speed > 3) {
    G.sprayT -= dt;
    if (G.sprayT <= 0) {
      G.sprayT = 0.05;
      const side = Math.random() < 0.5 ? -1 : 1;
      fx.burst(b.x + side * b.r * 0.7, b.y - b.r * 0.75, b.d - b.r * 0.4, 1, 0xffffff, 1.5 + b.speed * 0.08, 0.05 + b.r * 0.02, 2.5 + b.r * 0.3);
    }
  }

  // Avalanche wake: once the ball is a proper ÇIĞ, it drags a wall of powder behind it.
  if (G.avl >= 2 && !b.airborne) {
    const n = Math.random() < (G.avl - 1) * 0.5 * dt * 60 ? 1 : 0;
    if (n) {
      const side = Math.random() < 0.5 ? -1 : 1;
      fx.burst(b.x + side * b.r * 0.9, b.y - b.r * 0.6, b.d - b.r * 0.6, 1, 0xffffff, 3, 0.1 + b.r * 0.03, 4);
    }
  }

  // Safety net: no progress for 2 s means something pins the ball — break free.
  G.progT += dt;
  if (G.progT > 2) {
    if (b.d - G.progD < 2.5 && !b.airborne) {
      if (b.d > w.townStart) G.slowT = 99;
      else {
        w.query(b.x, b.d, b.r * 2 + 8, near);
        for (const p of near) if (p.alive && p.kind !== 'chunk' && Math.hypot(p.x - b.x, p.d - b.d) < b.r + p.r * CFG.contactK + 1) smash(p, true);
        b.speed = Math.max(b.speed, CFG.baseSpeed * 0.6);
      }
    }
    G.progT = 0;
    G.progD = b.d;
  }

  // Ending: ran out of town, or ground to a halt against something too big.
  if (b.d > w.townStart && b.speed < 1.2) G.slowT += dt; else G.slowT = 0;
  if (b.d >= w.townEnd + 12 || G.slowT > 0.7) endRun();

  ui.setTons(totalTons());
  ui.setProgress(b.d / w.townEnd);
  audio.setRoll(b.airborne ? 0 : clamp(b.speed / CFG.maxSpeed, 0, 1), clamp(b.r / 10, 0, 1));
}

function step(dt, lim) {
  const b = ball, w = world;
  const px = b.x, pd = b.d;
  b.x += b.vx * dt;
  b.d += b.speed * dt;
  if (b.x < -lim || b.x > lim) { b.x = clamp(b.x, -lim, lim); b.vx *= -0.2; }

  const ramp = w.rampAt(b.x, b.d);
  const rest = w.groundY(b.x, b.d) + ramp + b.r * 0.92;
  if (b.airborne) {
    b.vy -= CFG.gravity * dt;
    b.y += b.vy * dt;
    b.airTime += dt;
    if (b.y <= rest && b.vy < 0) land(rest);
  } else if (G.onRamp && ramp === 0 && G.lastRamp > 0.8) {
    launch();
  } else {
    b.y = rest;
  }
  G.lastRamp = ramp;
  G.onRamp = ramp > 0;
  b.roll(b.x - px, b.d - pd);

  if (!b.airborne) {
    if (w.inPatch(b.x, b.d)) melt(dt);
    else if (b.d < w.L) {
      b.setRadius(b.r + (CFG.passiveGrow * b.speed * dt * Math.min(2, rubberBand())) / Math.max(1, b.r));
      checkMilestones();
    }
  }
  collide();
}

function launch() {
  const b = ball;
  b.airborne = true;
  b.airTime = 0;
  b.vy = 5 + b.speed * 0.42;
  G.timeScale = 0.55;
  audio.whoosh();
  platform.haptic('medium');
  popText('UÇUŞ!', b, 'big');
}

function land(rest) {
  const b = ball;
  b.airborne = false;
  b.y = rest;
  b.vy = 0;
  G.timeScale = 1;
  const k = clamp(b.airTime / 1.2, 0.2, 1);
  audio.land(k);
  platform.haptic('heavy');
  G.shake += 0.5 * k + 0.15 * b.r * k;
  fx.burst(b.x, b.y - b.r * 0.8, b.d, 16, 0xffffff, 6 + b.r, 0.25 + b.r * 0.08, 5);
  // Belly-flop: everything swallowable around the landing point gets eaten.
  world.query(b.x, b.d, b.r * 1.9, near);
  for (const p of near) {
    if (!p.alive || p.kind === 'building') continue;
    if (Math.hypot(p.x - b.x, p.d - b.d) < b.r * 1.9 && p.r <= b.r * CFG.eatRatio) swallow(p);
  }
}

function melt(dt) {
  const b = ball;
  b.setRadius(Math.max(CFG.minR, b.r - b.r * CFG.patchMelt * dt));
  G.meltT -= dt;
  if (G.meltT <= 0) {
    G.meltT = 0.12;
    fx.burst(b.x, b.y - b.r * 0.8, b.d, 3, 0x7a5a3e, 4, 0.15 + b.r * 0.05, 3);
    platform.haptic('light');
  }
  if (!G.meltWarned) {
    G.meltWarned = true;
    popText('ERİYOR!', b, 'bad');
    setTimeout(() => { G.meltWarned = false; }, 1500);
  }
}

function collide() {
  const b = ball, w = world;
  const reachK = 1 + CFG.townReach * G.avl;
  w.query(b.x, b.d, b.r * reachK + 2, near);
  for (let i = 0; i < near.length; i++) {
    const p = near[i];
    if (!p.alive) continue;
    if (b.airborne && b.y - b.r > p.y + p.h) continue;
    const dx = p.x - b.x, dd = p.d - b.d;
    const dist = Math.hypot(dx, dd);
    if (p.kind === 'building') {
      if (dist > b.r * reachK + p.r * 0.5) continue;
      if (p.r <= b.r * (1.2 + 0.12 * G.avl)) destroy(p);
      else if (dist < b.r + p.r * 0.55) bump(p, dx, dd, dist, true);
      continue;
    }
    const contact = b.r + p.r * CFG.contactK;
    if (dist > contact) continue;
    if (p.kind === 'chunk' || p.r <= b.r * CFG.eatRatio) swallow(p);
    else if (p.r <= b.r * CFG.smashRatio) smash(p, G.momentumT > 0);
    else bump(p, dx, dd, dist, false, contact);
  }
}

// Too big to swallow, small enough to plough through: it shatters, you pay in snow and speed.
// Right after a hit the ball keeps momentum for a moment: anything else in the way is ploughed through for free,
// so a dense field costs one hit instead of draining the ball to nothing.
function smash(p, free = false) {
  const b = ball;
  world.kill(p);
  const col = world.avgColor[p.type];
  fx.burst(p.x, p.y + p.h * 0.5, p.d, 10, col, 7, 0.25 + p.r * 0.08, 6);
  audio.crash(0.35);
  if (free) {
    platform.haptic('medium');
    G.shake += 0.2;
    return;
  }
  fx.burst(b.x, b.y, b.d, 8, 0xffffff, 6, 0.2 + b.r * 0.08, 5);
  loseSnow(CFG.smashLoss);
  b.speed *= 0.72;
  G.momentumT = CFG.momentumTime;
  G.combo = 0;
  ui.setCombo(0);
  audio.bump(0.6);
  platform.haptic('heavy');
  G.shake += 0.45;
  popText('ÇARP!', b, 'bad');
}

function loseSnow(frac) {
  const b = ball;
  const before = b.r;
  b.setRadius(Math.max(CFG.minR, Math.cbrt(b.r ** 3 * (1 - frac))));
  // Lost snow scatters ahead as chunks you can win back.
  if (before - b.r > 0.02) {
    const n = 3 + Math.min(3, Math.floor(b.r));
    const cr = Math.max(0.25, Math.min(b.r * 0.35, before * 0.22));
    for (let i = 0; i < n; i++) world.spawnChunk(b.x + (Math.random() - 0.5) * b.r * 4, b.d + 5 + Math.random() * 12, cr);
  }
}

// Growth is scaled against the size the slope expects: a lagging ball catches up faster,
// a runaway one hits diminishing returns. Skill still shows, it just can't break the level.
function rubberBand() {
  const k = world.expectedR(ball.d) / ball.r;
  return clamp(k ** (k < 1 ? CFG.bandUp : CFG.bandDown), CFG.bandMin, CFG.bandMax);
}

function swallow(p) {
  const b = ball;
  world.kill(p);
  if (p.kind !== 'chunk') meta.track('swallow', { type: p.type });
  const gain = CFG.growK * p.r ** 3 * (p.kind === 'chunk' ? 1.3 : 1) * rubberBand();
  b.setRadius(Math.cbrt(b.r ** 3 + gain));
  if (p.kind !== 'chunk') {
    _v.set(p.x, p.y + p.h * 0.5, -p.d);
    b.stick(p.def, _v, p.s);
  }
  G.swallowed += p.mass;
  G.combo = G.comboT > 0 ? G.combo + 1 : 1;
  G.comboT = CFG.comboWindow;
  ui.setCombo(G.combo);
  ui.pulse();
  audio.pop(clamp(p.r / 8, 0, 1), G.combo);
  platform.haptic(p.tier >= 2 ? 'medium' : 'light');
  fx.burst(p.x, p.y + p.h * 0.4, p.d, 3 + p.tier * 3, skin?.puff ?? 0xffffff, 2 + p.r, 0.1 + p.r * 0.08, 3);
  const label = LABEL[p.type];
  if (label && (p.tier >= 2 || G.combo % 6 === 0)) popText(`${label}!`, p, p.tier >= 3 ? 'big' : '');
  else if (G.combo > 0 && G.combo % 10 === 0) popText(`x${G.combo}!`, b, 'big');
  checkMilestones();
}

function destroy(p) {
  const b = ball;
  world.kill(p);
  meta.track('destroy', { type: p.type });
  G.destroyed++;
  G.townTons += p.mass;
  const col = world.avgColor[p.type];
  fx.burst(p.x, p.y + p.h * 0.5, p.d, 14, col, 9 + p.r * 0.4, 0.5 + p.r * 0.07, 8);
  fx.burst(p.x, p.y + p.h * 0.8, p.d, 6, 0xffffff, 6, 0.4 + p.r * 0.05, 7);
  fx.burst(p.x, p.y + p.h * 0.3, p.d, 5, 0x8a96a8, 7, 0.3 + p.r * 0.05, 6);
  audio.crash(clamp(p.r / 12, 0.2, 1));
  platform.haptic('heavy');
  G.shake += 0.25 + p.r * 0.02;
  b.speed *= 0.985;
  G.combo = G.comboT > 0 ? G.combo + 1 : 1;
  G.comboT = CFG.comboWindow * 1.5;
  ui.setCombo(G.combo);
  ui.pulse();
  if (p.type === 'clocktower') popText('SAAT KULESİ!', p, 'big');
}

function bump(p, dx, dd, dist, hard, contact = ball.r + p.r * 0.55) {
  const b = ball;
  // Push the ball out along the contact normal and deflect sideways so it slides off.
  const nx = dist > 1e-4 ? dx / dist : 0, nd = dist > 1e-4 ? dd / dist : 1;
  const overlap = contact - dist;
  b.x -= nx * overlap;
  b.d -= Math.max(0, nd * overlap);
  // Glance off toward whichever side of the obstacle has more room (never into the valley wall).
  const lim = Math.max(0.5, world.halfWidth(b.d) - b.r * 0.55);
  const side = lim - (p.x + contact) >= (p.x - contact) + lim ? 1 : -1;
  b.vx += side * (4 + b.speed * 0.25);
  if (G.bumpCd > 0) return;
  G.bumpCd = 0.5;
  // Slide the steering target clear of the obstacle once per bump (not every substep, so the player keeps control).
  G.targetX = clamp(p.x + side * (contact + 0.8), -lim, lim);
  b.speed *= hard ? 0.35 : 0.5;
  loseSnow(CFG.bumpLoss);
  G.combo = 0;
  ui.setCombo(0);
  audio.bump(clamp(p.r / 6, 0.3, 1));
  platform.haptic('heavy');
  G.shake += 0.5;
  fx.burst(b.x + nx * b.r, b.y, b.d + nd * b.r, 10, 0xffffff, 6, 0.2 + b.r * 0.08, 5);
  popText('ÇARP!', b, 'bad');
}

function checkMilestones() {
  const b = ball;
  while (G.avl < CFG.milestones.length && b.r >= CFG.milestones[G.avl]) {
    G.avl++;
    meta.track('milestone', { level: G.avl });
    ui.banner(CFG.milestoneNames[G.avl - 1], G.avl);
    audio.milestone(G.avl);
    platform.haptic('success');
    G.shake += 0.4 + G.avl * 0.15;
    fx.burst(b.x, b.y, b.d, 24, 0xffffff, 10 + b.r, 0.3 + b.r * 0.06, 6);
  }
}

function endRun() {
  G.state = 'end';
  ui.hint(false);
  G.endT = 0;
  G.timeScale = 1;
  const pct = world.townProgress();
  const stars = CFG.starThresholds.filter((t) => pct >= t).length;
  const tons = totalTons();
  let sub = '';
  if (G.daily) {
    const ds = G.dailySeed;
    const prev = save.dailyFor(ds);
    if (!prev || tons > prev.tons) sub = 'GÜNÜN REKORU!';
    save.recordDaily(ds, { tons, pct, stars });
  } else {
    const prevBest = save.bestFor(G.level);
    if (prevBest && tons > prevBest) sub = 'YENİ REKOR!';
    save.recordLevel(G.level, stars, tons);
  }
  const coins = Math.round(stars * 25 + Math.sqrt(tons) * 1.5);
  save.addCoins(coins);
  save.recordRun(tons);
  const title = pct >= 0.85 ? 'KASABA YERLE BİR!' : pct >= 0.6 ? 'FELAKET!' : pct >= 0.3 ? 'FENA DEĞİL!' : 'BİRAZ DAHA BÜYÜ...';
  G.result = { level: G.level, daily: G.daily, pct, stars, tons, avl: G.avl, title, sub, coins };
  meta.track('cig_end', { level: G.level, stars, pct, tons, daily: G.daily, theme: scenery.theme.id });
  audio.setRoll(0, 0);
  if (stars > 0) { audio.win(); platform.haptic('success'); } else { audio.lose(); platform.haptic('warning'); }
}

function updateEnd(dt) {
  const b = ball;
  G.endT += dt;
  b.speed = Math.max(0, b.speed - 14 * dt);
  const pd = b.d;
  b.d += b.speed * dt;
  b.y = world.groundY(b.x, b.d) + b.r * 0.92;
  b.roll(0, b.d - pd);
  if (G.endT > 1.5 && G.result && !G.result.shown) {
    G.result.shown = true;
    const r = G.result;
    ui.showResult({ title: r.title, pct: r.pct, stars: r.stars, tons: r.tons, sub: r.sub, coins: r.coins, hasNext: !r.daily && r.stars > 0 }, audio);
    G.state = 'result';
  }
}

function autopilot() {
  const b = ball, w = world;
  w.query(b.x, b.d + 20, 30, near);
  let best = null, bestScore = -Infinity;
  for (const p of near) {
    const dd = p.d - b.d;
    if (dd < 2 || dd > 40) continue;
    if (p.r <= b.r * CFG.eatRatio || p.kind === 'building') {
      const s = (p.r * p.r + 0.2) / (dd + 6) - Math.abs(p.x - b.x) * 0.012;
      if (s > bestScore) { bestScore = s; best = p; }
    }
  }
  let tx = best ? best.x : b.x * 0.9;
  for (const p of near) {
    const dd = p.d - b.d;
    if (dd < 0 || dd > 16 || p.r <= b.r * CFG.eatRatio) continue;
    if (p.kind === 'building' && p.r <= b.r * (1.2 + 0.12 * G.avl)) continue;
    const gap = b.r + p.r * CFG.contactK + 1;
    if (Math.abs(p.x - tx) < gap) tx = p.x + (tx >= p.x ? gap : -gap);
  }
  for (const pt of w.patches) if (pt.d - b.d > -pt.rd && pt.d - b.d < 30 && Math.abs(tx - pt.x) < pt.rx + b.r) tx = pt.x + (tx >= pt.x ? 1 : -1) * (pt.rx + b.r + 1);
  return tx;
}

function popText(text, at, cls) {
  _v.set(at.x, (at.y ?? 0) + (at.h ?? at.r ?? 1) * 0.8, -at.d).project(camera);
  if (_v.z > 1) return;
  ui.float(text, (_v.x * 0.5 + 0.5) * window.innerWidth, (-_v.y * 0.5 + 0.5) * window.innerHeight, cls);
}

function shareText(r) {
  const filled = Math.floor(r.pct * 10);
  const bar = '🟥'.repeat(filled) + '⬜'.repeat(10 - filled);
  const snow = '❄️'.repeat(r.avl) + '▫️'.repeat(CFG.milestones.length - r.avl);
  const head = r.daily ? `❄️ FREEMON · Günün Dağı #${G.dailyNo}` : `❄️ FREEMON · Çığ Dağ ${r.level}`;
  return `${head}\n${snow}\n🏘️ ${bar} %${Math.round(r.pct * 100)}\n⚖️ ${fmtTons(r.tons)}\n${'⭐'.repeat(r.stars) || '💧'}`;
}

// ---------- camera ----------
const camPos = new THREE.Vector3();
let camBack = 10;
function updateCamera(dt, snap = false) {
  const b = ball;
  const r = b.r;
  const town = clamp((b.d - world.L) / 40, 0, 1);
  let back = 7.5 + r * 3.5 + town * r * 1.6;
  let up = 6 + r * 2.5 + town * r * 1.8;
  let ox = b.x * 0.7;
  if (G.state === 'menu') {
    // Lobby: the ball is the hero — close, centred, slowly orbited, spinning on the snow.
    const t = performance.now() * 0.00025;
    back = 2.6 + r * 2.2; up = 0.55 + r * 0.9; ox = b.x + Math.sin(t) * 1.4;
    ball.spin.rotateY(dt * 0.7);
  }
  if (G.state === 'end' || G.state === 'result') {
    const et = Math.min(G.endT, 6);
    const a = et * 0.25;
    back = (7.5 + r * 3.4) * Math.cos(a);
    ox = b.x + (7.5 + r * 3.4) * Math.sin(a);
    up = 6 + r * 2.8 + et * 0.6;
  }
  camBack = Math.abs(back);
  camPos.set(ox, b.y + up, -(b.d - back));
  camPos.y = Math.max(camPos.y, world.groundY(camPos.x, -camPos.z) + 3 + r);
  const k = snap ? 1 : 1 - Math.exp(-dt * 6);
  camera.position.lerp(camPos, k);
  _v.set(b.x * 0.85, b.y + r * 0.2, -(b.d + 9 + r * 2.2));
  if (G.state === 'menu') _v.set(b.x, b.y + r * 0.35, -(b.d - 0.2));
  if (G.state === 'end' || G.state === 'result') _v.set(b.x, b.y, -b.d);
  camLook.lerp(_v, snap ? 1 : 1 - Math.exp(-dt * 8));
  if (G.shake > 0) {
    const s = Math.min(G.shake, 2) * 0.35;
    camera.position.x += (Math.random() - 0.5) * s;
    camera.position.y += (Math.random() - 0.5) * s;
    G.shake = Math.max(0, G.shake - dt * 3.5);
  }
  camera.lookAt(camLook);
  sky.position.copy(camera.position);
  const fs = scenery?.theme?.fogScale ?? 1;
  scene.fog.near = (70 + r * 8) * fs;
  scene.fog.far = (300 + r * 14) * fs;
}

// ---------- loop ----------
let last = performance.now();
let frameAvg = 16, perfT = 0, fpsT = 0, frames = 0, fps = 0, upVotes = 0;

function frame(now) {
  requestAnimationFrame(frame);
  let dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  frameAvg += (dt * 1000 - frameAvg) * 0.05;

  if (G.mode === 'runner') {
    if (!G.paused) runner.update(dt);
  } else if (!G.paused) {
    const gdt = dt * G.timeScale;
    if (G.timeScale < 1) G.timeScale = Math.min(1, G.timeScale + dt * 0.5);
    if (G.state === 'play') updatePlay(gdt);
    else if (G.state === 'end' || G.state === 'result') updateEnd(gdt);
    ball.sync();
    world.update(gdt, ball.d, Math.max(CFG.viewAhead, scene.fog.far + 20), Math.max(CFG.viewBehind, camBack + 15));
    fx.update(gdt, ball);
    updateCamera(dt);
    scenery.update(gdt, camera, ball);
  }
  // Endless mode widens the FOV with speed.
  const wantFov = baseFov + (camera.userData.fovBoost || 0);
  if (Math.abs(camera.fov - wantFov) > 0.05) {
    camera.fov += (wantFov - camera.fov) * Math.min(1, dt * 4);
    camera.updateProjectionMatrix();
  }
  SU.uTime.value = now / 1000;
  skin?.update?.(dt, now / 1000, ball.snow);
  post.render(scene, camera);
  adaptResolution(dt);

  if (DEBUG) {
    frames++;
    fpsT += dt;
    if (fpsT > 0.5) { fps = Math.round(frames / fpsT); frames = 0; fpsT = 0; }
    const info = renderer.info.render;
    if (G.mode === 'runner') ui.debug(`fps ${fps}  dpr ${dpr.toFixed(2)}
calls ${info.calls}  tris ${(info.triangles / 1000).toFixed(0)}k
s ${runner.b.s.toFixed(0)} u ${runner.b.u.toFixed(2)} h ${runner.b.h.toFixed(2)}
v ${runner.b.vs.toFixed(1)} gap ${runner.gap.toFixed(0)} r ${runner.b.r.toFixed(2)} ${runner.state}`);
    else ui.debug(`fps ${fps}  dpr ${dpr.toFixed(2)}\ncalls ${info.calls}  tris ${(info.triangles / 1000).toFixed(0)}k\nr ${ball.r.toFixed(2)}  v ${ball.speed.toFixed(1)}  d ${ball.d.toFixed(0)}/${world.townEnd.toFixed(0)}\navl ${G.avl}  stuck ${ball.stuckCount()}  town ${(world.townProgress() * 100).toFixed(0)}%`);
  }
}

// Drop resolution when the phone struggles, creep back up when it's comfortable.
function adaptResolution(dt) {
  perfT += dt;
  if (perfT < 2) return;
  perfT = 0;
  let next = dpr;
  if (frameAvg > 24 && dpr > 1) next = Math.max(1, dpr - 0.25);
  else if (frameAvg < 18.5 && dpr < dprMax && ++upVotes >= 3) { next = Math.min(dprMax, dpr + 0.25); upVotes = 0; }
  if (next !== dpr) {
    dpr = next;
    renderer.setPixelRatio(dpr);
    resize();
  }
}

function makeSky() {
  const geo = new THREE.SphereGeometry(1000, 20, 12);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const top = new THREE.Color(0x5fa8ff), mid = new THREE.Color(0xa9d4ff), hor = new THREE.Color(HORIZON), c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i) / 1000;
    if (y > 0.25) c.copy(mid).lerp(top, Math.min(1, (y - 0.25) / 0.6));
    else c.copy(hor).lerp(mid, Math.max(0, y / 0.25));
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
}

// Debug hook: advance the simulation with a fixed step regardless of rAF throttling.
if (DEBUG) {
  window.cig = {
    G, ball, CFG,
    set auto(v) { AUTO = v; },
    get world() { return world; },
    sim(seconds, step = 1 / 60) {
      const n = Math.round(seconds / step);
      for (let i = 0; i < n; i++) {
        const gdt = step * G.timeScale;
        if (G.timeScale < 1) G.timeScale = Math.min(1, G.timeScale + step * 0.5);
        if (G.state === 'play') updatePlay(gdt);
        else if (G.state === 'end' || G.state === 'result') updateEnd(gdt);
        ball.sync();
        world.update(gdt, ball.d, Math.max(CFG.viewAhead, scene.fog.far + 20), Math.max(CFG.viewBehind, camBack + 15));
        fx.update(gdt, ball);
        updateCamera(step);
        scenery.update(gdt, camera, ball);
      }
      post.render(scene, camera);
      return { state: G.state, r: +ball.r.toFixed(2), d: +ball.d.toFixed(1), v: +ball.speed.toFixed(1), avl: G.avl, tons: Math.round(totalTons()), town: +world.townProgress().toFixed(2), stuck: ball.stuckCount() };
    },
    start: (daily = false) => startRun(daily),
    endless: () => startEndless(),
    level: (id) => startEndless(levelById(id)),
    simEndless(seconds, step = 1 / 60) {
      const n = Math.round(seconds / step);
      for (let i = 0; i < n && runner; i++) runner.update(step);
      post.render(scene, camera);
      const b = runner.b;
      return { state: runner.state, s: +b.s.toFixed(1), u: +b.u.toFixed(2), h: +b.h.toFixed(2), v: +b.vs.toFixed(1), r: +b.r.toFixed(2), gap: +runner.gap.toFixed(1), score: Math.round(runner.score), coins: runner.coins, cause: runner.cause };
    },
    get runner() { return runner; },
  };
}

// Boot: pull in the imported models (≈1 MB) first; the game still runs on procedural props if they fail.
async function boot() {
  try { Object.assign(lib, await loadModels()); } catch (e) { console.warn(e); }
  applySkin(save.selected('skin'));
  toMenu();
  updateCamera(0, true);
  if (params.has('play')) startRun(params.has('daily'));
  if (params.has('endless')) startEndless();
  requestAnimationFrame(frame);
}
boot();
