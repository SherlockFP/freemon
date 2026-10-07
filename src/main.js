import * as THREE from 'three';
import './style.css';
import { CFG } from './config.js';
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
import { CigPlus, CigGame } from './cigplus.js';
// YETİ RUSH (the runner) is loaded on demand (keeps the first load small and ÇIĞ SONSUZ independent of it).
let Runner = null;
let music = { duck() {}, setMuted() {}, suspend() {}, resume() {} };
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

const camera = new THREE.PerspectiveCamera(60, 1, 0.5, 1800);
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
let plus = null;
let game = null;
let rainbowTrail = false;
// Particles in endless mode fall into the void instead of bouncing on the ÇIĞ terrain.
const groundless = { groundY: () => -1e9, rampAt: () => 0 };

const G = {
  mode: 'cig',          // 'cig' (ÇIĞ SONSUZ / lobby) | 'runner' (YETİ RUSH, MACERA)
  state: 'menu',        // menu | play | end | result | runner
  paused: false,
  level: save.level, daily: false, dailyNo: 0, dailySeed: 0,
  runNo: 0,
  // gameplay state lives here too (CigGame fills it in reset())
  targetX: 0, combo: 0, comboT: 0, swallowed: 0, townTons: 0, destroyed: 0, bonusTons: 0,
  bumpCd: 0, recoverT: 0, momentumT: 0, shake: 0, endT: 0, slowT: 0, timeScale: 1, hitStop: 0, hitStopCd: 0,
  onRamp: false, lastRamp: 0, tier: 0, avl: 0, peakR: CFG.startR, fovKick: 0,
  hinted: false, result: null,
};
const _v = new THREE.Vector3();

// ---------- wardrobe ----------
let skin = null;
function applySkin(id) {
  const next = makeSkin(id);
  // Lava ships its own shader patch; everything else gets the shared look (classic = sparkly snow).
  if (id !== 'lav') patchMaterial(next.material, { snow: id === 'classic' || id === 'pamuk' });
  ball.snow.geometry = next.geometry;
  ball.snow.material = next.material;
  if (window.__patpatGold) tintGold();
  if (skin) disposeSkin(skin);
  skin = next;
}
function tintGold() {
  try { ball.snow.material.color?.setHex(0xffd44a); } catch { /* ignore */ }
}
function applyTrail(id) {
  fx?.setTrailStyle(trailStyle(id));
}
let closeShop = null;
window.__cigSfx = audio;

// ---------- meta (missions, achievements, daily rewards) + PATPAT main menu ----------
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
    // OYNA = YETİ RUSH straight away; ÇIĞ SONSUZ and MACERA are small buttons.
    onEndless: () => startEndless(),
    onCigEndless: () => startCigEndless(),
    onPlayLevel: (id) => startLevel(id),
    onBallTap: () => lobbyBounce(),
    onBallGold: () => { window.__patpatGold = true; tintGold(); },
    onSneeze: () => { fx?.burst(ball.x, ball.y + ball.r, ball.d, 30, 0xffffff, 6, 0.15, 6); audio.pop(0.2, 4); },
    onLevels: () => startCigEndless(),
    onDaily: () => startCigEndless({ daily: true }),
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

platform.init();
platform.onPause(() => {
  if (G.state === 'play' || (G.state === 'runner' && runner?.state === 'play')) pause(true);
  audio.suspend();
  music.suspend?.();
});
platform.onResume(() => { audio.resume(); music.resume?.(); });
platform.onBack(() => {
  if (closeShop) { closeShop(); return; }
  if (menus.back()) return; // lobby panels / cards close first
  if (G.state === 'runner') {
    // playing: pause / resume; on the result screen (or before the run has started) Back leaves to the menu
    const rs = runner?.state;
    if (rs === 'play') pause(!G.paused);
    else if (rs === 'over' || rs === 'finished' || rs === 'idle' || !rs) toMenu();
  } else if (G.state === 'play') pause(!G.paused);
  else if (G.state === 'result' || G.state === 'end') toMenu();
  else if (G.state === 'menu' && platform.isNative) import('@capacitor/app').then(({ App }) => App.exitApp()).catch(() => {});
});

input.onRelease(() => audio.init());

// ---------- flow ----------
function randomSeed() {
  return (((Math.random() * 0x7fffffff) | 0) ^ (Date.now() & 0xffffff)) >>> 0 || 1;
}

// Dispose + rebuild everything that belongs to the ÇIĞ slope (world, scenery, extras, the rules).
function buildWorld(seed, themeIdx, daily) {
  plus?.dispose();
  if (world) world.dispose();
  world = new World(scene, lib, { seed });
  scenery?.dispose();
  scenery = new Scenery(scene, { world, lib, theme: themeForLevel(themeIdx, daily), onEgg: (id) => meta.egg(id) });
  plus = new CigPlus(scene, world, { seed, lib, ui, hud: typeof ui.buffAdd !== 'function' });
  if (!fx) { fx = new Fx(scene, world); applyTrail(save.selected('trail')); }
  fx.world = world;
  fx.reset();
  if (rainbowTrail) { rainbowTrail = false; applyTrail(save.selected('trail')); } // the run ended mid-rainbow: back to the chosen trail
  game = new CigGame({ world, ball, plus, G, host: cigHost });
  game.auto = AUTO;
  game.bestTons = save.cigEndlessBest?.().tons || 0;
}

// What the rules (cigplus.js) ask of the page: sounds, particles, HUD, camera kicks.
const cigHost = {
  sfx(name, a, b) {
    switch (name) {
      case 'pop': audio.pop(a, b); break;
      case 'bump': audio.bump(a); break;
      case 'crash': audio.crash(a); break;
      case 'whoosh': audio.whoosh(); break;
      case 'land': audio.land(a); break;
      case 'milestone': audio.milestone(a); break;
      case 'rumble': audio.crash(0.22); break;
      default: break;
    }
  },
  plusSfx(name) {
    switch (name) {
      case 'power': audio.milestone(1); break;
      case 'freeze': audio.ui('toggle'); audio.whoosh(); break;
      case 'shield': audio.bump(0.4); break;
      case 'whoosh': audio.whoosh(); break;
      case 'flip': audio.milestone(3); break;
      case 'boing': audio.pop(0.2, 14); break;
      case 'rumble': audio.crash(0.3); break;
      default: break;
    }
  },
  haptic(kind) { platform.haptic(kind); },
  burst(x, y, d, n, color, speed, size, up) { fx.burst(x, y, d, n, color, speed, size, up); },
  puff(x, y, z, vx, vy, vz, size, life, color, alpha) { fx.puff(x, y, z, vx, vy, vz, size, life, color, alpha); },
  text(str, at, cls) { popText(str, at, cls); },
  toast(str) { if (ui.toastSoft) ui.toastSoft(str); },
  shake(v) { G.shake += v; },
  hitStop(s) { if (G.hitStopCd <= 0) { G.hitStop = Math.max(G.hitStop, s); G.hitStopCd = 0.15; } },
  flash(kind) { ui.flash?.(kind); },
  kick(zoom, fov) { camZoom = Math.max(camZoom, zoom); G.fovKick = Math.max(G.fovKick, fov); },
  track(ev, data) { meta.track(ev, data); },
  tier(name, i) {
    G.tier = i;
    if (ui.cigTier) ui.cigTier(name);
    else ui.banner?.(name, i);
  },
  hud(info) {
    if (ui.cigHud) ui.cigHud(info);
    else { ui.setTons(info.tons); ui.setProgress(info.frac); }
  },
  hunger(frac, warn) { ui.hunger?.(frac, warn); },
  // how many "⛔ X m" size tags to hang on too-big obstacles before you reach them (many on the first runs, fewer later)
  labelBudget() { return Math.max(2, 7 - Math.min(5, save.cigEndlessRuns?.() || 0)); },
  combo(n) { ui.setCombo(n); if (n > 0) ui.pulse(); },
  onPower(kind) { if (kind === 'rainbow') { rainbowTrail = true; fx.setTrailStyle({ rainbow: true, glow: true }); } },
  onPowerEnd(kind) { if (kind === 'rainbow') { rainbowTrail = false; applyTrail(save.selected('trail')); } },
  ended(cause) {
    audio.setRoll(0, 0);
    ui.hint(false);
    ui.speedLines?.(0);
    if (cause === 'melt') { audio.lose(); platform.haptic('warning'); }
    else { audio.crash(0.5); platform.haptic('heavy'); }
    meta.track('cig_progress', { tons: game.totalTons(), dist: ball.d });
  },
};

function setCigVisible(on) {
  if (world) world.group.visible = on;
  if (plus) plus.group.visible = on;
  if (scenery) scenery.group.visible = on;
  if (fx) { fx.trail.visible = on; fx.shadow.visible = on; }
  if (waveVis) waveVis.mesh.visible = on && waveVis.on;
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
      onRetry: () => startEndless(lv, { retry: true }),
      onMap: () => { toMenu(); menus.openMap(lv.id); },
    });
  }, 1600);
}

function levelFailed(lv, cause, stats) {
  ui.runnerHud(false, '');
  menus.showLevelFailed({ level: lv, cause, killKind: stats?.killKind, stats, distance: stats?.distance }, {
    onRetry: () => startEndless(lv, { retry: true }),
    onMap: () => { toMenu(); menus.openMap(lv.id); },
  });
}

// ---------- YETİ RUSH (endless runner) / MACERA levels ----------
async function startEndless(level = null, opts = {}) {
  audio.init();
  audio.ui();
  try {
    await loadEndless();
  } catch (e) {
    console.error(e);
    ui.toast('Sonsuz mod yüklenemedi');
    return;
  }
  if (G.mode === 'cig' && G.state === 'play') meta.track('cig_progress', { tons: game?.totalTons() || 0, dist: ball.d });
  G.mode = 'runner';
  G.state = 'runner';
  G.paused = false;
  G.result = null;
  ui.showPause(false);
  ui.cigReset?.();
  menus.hideMain();
  setCigVisible(false);
  if (!fx) { fx = new Fx(scene, groundless); applyTrail(save.selected('trail')); }
  fx.world = groundless;
  scene.fog.near = 60;
  scene.fog.far = 330;
  if (!runner) runner = new Runner({ scene, camera, lib, ball, fx, ui, audio, platform, save, input, meta, menus });
  runner.ctx.noTut = params.has('notut') || !!debugNoTut;
  input.consumeLane();
  input.consumeDive?.();
  input.consumeDoubleTap?.();
  runner.onFinish = level ? (stats) => levelDone(level, stats) : null;
  runner.onFail = level ? (cause, stats) => levelFailed(level, cause, stats) : null;
  runner.start(undefined, level, { retry: !!opts.retry });
}
let debugNoTut = false;

function leaveEndless() {
  if (G.mode !== 'runner') return;
  ui.runnerHud(false, '');
  try { runner?.closeOut?.(); } catch (e) { console.warn(e); }
  runner?.dispose();
  G.mode = 'cig';
  scene.fog.color.set(HORIZON);
  scene.background = new THREE.Color(HORIZON);
  camera.up.set(0, 1, 0);
  camera.userData.fovBoost = 0;
  ball.group.visible = true;
  ball.reset(CFG.startR);
  setCigVisible(true);
}

// ---------- menu / lobby ----------
function toMenu() {
  leaveEndless();
  ui.hint(false); // the runner's swipe hint must not linger on the menu
  ui.speedLines?.(0);
  ui.cigReset?.();
  G.state = 'menu';
  G.paused = false;
  G.level = Math.min(save.level, MAX_LEVEL);
  G.hitStop = 0; G.timeScale = 1; G.shake = 0; G.fovKick = 0;
  camZoom = 0;
  buildWorld(4242, G.level, false);
  clearWaveVis();
  ball.reset(CFG.startR);
  ball.y = world.groundY(0, 0) + ball.r * 0.92;
  ball.speed = 0;
  ball.sync();
  const ds = dailySeed();
  const best = save.dailyFor(ds);
  ui.showMenu({ level: G.level, stars: save.starsFor(G.level), dailyNum: dailyNumber(), dailyBest: best ? best.tons : 0, theme: scenery.theme.name });
  ui.el.menu.classList.add('hidden'); // the PATPAT menu (menus.js) replaces the old screen
  const cb = save.cigEndlessBest?.() || { tons: 0, dist: 0 };
  menus.showMain({
    level: G.level,
    levelStars: save.starsFor(G.level),
    theme: scenery.theme.name,
    endlessBest: save.runnerBest(),
    endlessBestDist: save.runnerBestDist(),
    cigBest: cb,
    dailyNum: dailyNumber(),
    dailyBest: best ? best.tons : 0,
    coins: save.coins,
  });
  // (the daily reward is a badge in the menu now, never a pop-up)
  audio.setRoll(0, 0);
  ball.sync();
  updateCamera(0, true);
}

// Tap the snowball in the menu: squash & stretch hop + a puff of powder.
let lobbyPuffT = 0;
function lobbyBounce() {
  if (G.state !== 'menu') return;
  ball.bounce(6.5 + Math.random() * 1.5);
  fx?.burst(ball.x, ball.y - ball.r * 0.6, ball.d, 8, 0xffffff, 2.5, 0.12 + ball.r * 0.05, 3);
  lobbyPuffT = 0.12;
}

// ---------- ÇIĞ SONSUZ ----------
function startCigEndless(opts = {}) {
  const daily = !!opts.daily;
  const fromMenu = G.state === 'menu' && G.mode === 'cig'; // lobby -> slope: the camera swoops out; retries cut cleanly
  leaveEndless();
  ui.cigReset?.();
  menus.hideMain();
  audio.init();
  if (!opts.retry) audio.ui();
  meta.track('run_start', { mode: 'cigEndless', daily });
  G.mode = 'cig';
  G.daily = daily;
  G.dailyNo = dailyNumber();
  G.dailySeed = dailySeed();
  G.runNo++;
  const seed = opts.seed ?? (daily ? G.dailySeed * 7919 + 13 : randomSeed());
  buildWorld(seed, (save.cigEndlessRuns?.() || 0) + G.runNo, daily);
  clearWaveVis();
  game.reset();
  G.paused = false;
  G.state = 'play';
  G.fovKick = 0; camZoom = 0;
  input.consumeDx();
  lastPlusPlan = -1;
  ui.showPause(false);
  ui.startRun(daily ? `GÜNÜN DAĞI #${G.dailyNo}` : 'ÇIĞ SONSUZ');
  const showHint = !G.hinted && (save.cigTut?.() ?? 0) < 3;
  ui.hint(showHint, 'sürükle · küçükleri ye, büyüklerden kaç');
  if (showHint) save.bumpCigTut?.();
  scene.fog.near = 70; scene.fog.far = 300;
  ball.sync();
  updateCamera(0, !fromMenu);
  plus.planTo(world.genD - 30);
}
let lastPlusPlan = -1;

// Rewards go quietly into the counters; one clean result screen.
function finishCig() {
  if (G.state !== 'end') return;
  G.state = 'result';
  const r = game.result();
  G.result = r;
  ui.hint(false);
  const coins = Math.round(Math.sqrt(Math.max(0, r.tons)) * 1.5 + r.dist / 40);
  save.addCoins(coins);
  save.recordRun(r.tons);
  if (G.daily) save.recordDaily(G.dailySeed, { tons: r.tons, pct: 0, stars: 0 });
  const rec = { tons: r.tons, dist: r.dist, tier: r.tier, tierName: r.tierName };
  let isBest = false;
  if (save.recordCigEndless) isBest = !!save.recordCigEndless(rec);
  else meta.track('cig_endless_end', { ...rec, endless: true });
  const best = save.cigEndlessBest?.() || { tons: r.tons, dist: r.dist };
  meta.track('cig_progress', { tons: r.tons, dist: r.dist });
  const wave = r.cause === 'wave';
  ui.showResult({
    endless: true,
    title: wave ? 'ÇIĞ SENİ YAKALADI!' : 'ERİDİN!',
    tip: wave ? 'Hızını koru ve yemeye devam et: durursan çığ yakalar.' : 'Beyaz olanları ye, turuncu ve kırmızılardan kaç. Yemezsen erirsin.',
    tons: r.tons, dist: r.dist, distance: r.dist, best, isBest, newBest: isBest, cause: wave ? 'wave' : r.cause,
    tierName: r.tierName, coins, hasNext: false,
  }, audio);
  G.state = 'result';
  if (isBest) { audio.win(); platform.haptic('success'); }
}

// ---------- pause / buttons ----------
function pause(on) {
  if (G.state !== 'play' && !(G.state === 'runner' && runner?.state === 'play')) return;
  G.paused = on;
  ui.showPause(on);
  if (on) {
    syncPauseToggles();
    const st = document.getElementById('pause-stats');
    if (st) {
      st.textContent = G.mode === 'runner' && runner
        ? `${Math.round(runner.b.s).toLocaleString('tr-TR')} m · ${Math.round(runner.score).toLocaleString('tr-TR')} puan`
        : `${Math.round(ball.d).toLocaleString('tr-TR')} m · ${fmtTons(game ? game.totalTons() : 0)}`;
    }
  }
  if (on) audio.setRoll(0, 0);
  if (G.mode === 'runner') music.duck(on);
  if (input.clear) input.clear(); else input.consumeDx(); // swipes made on the pause screen must not fire (lane / jump / drag) on resume
}

// Buttons may be missing/renamed by the HTML: never throw from the boot path.
function bind(id, fn) {
  if (document.getElementById(id)) ui.on(id, fn);
}
function restartSame() {
  audio.ui();
  G.paused = false;
  ui.showPause(false);
  if (G.mode === 'runner') { music.duck(false); startEndless(runner?.level || null, { retry: true }); }
  else startCigEndless({ daily: G.daily, retry: true });
}

bind('btn-play', () => startEndless());            // OYNA / BAŞLA = YETİ RUSH
bind('btn-daily', () => startCigEndless({ daily: true }));
bind('btn-pause', () => { audio.ui(); pause(true); });
bind('btn-resume', () => { audio.ui(); pause(false); });
bind('btn-restart', restartSame);
function syncPauseToggles() {
  for (const [id, on] of [['btn-p-sound', !audio.isMuted()], ['btn-p-music', musicOn], ['btn-p-haptic', platform.hapticsEnabled()]]) {
    document.getElementById(id)?.classList.toggle('off', !on);
  }
}
bind('btn-p-sound', () => { audio.setMuted(!audio.isMuted()); ui.setToggle('sound', !audio.isMuted()); syncPauseToggles(); audio.ui('toggle'); });
bind('btn-p-music', () => { musicOn = !musicOn; music.setMuted(!musicOn); try { localStorage.setItem('cig.music.muted', musicOn ? '0' : '1'); } catch { /* ignore */ } syncPauseToggles(); });
bind('btn-p-haptic', () => { platform.setHapticsEnabled(!platform.hapticsEnabled()); syncPauseToggles(); platform.haptic('medium'); });
bind('btn-quit', () => { audio.ui(); toMenu(); });
bind('btn-menu', () => { audio.ui(); toMenu(); });
bind('btn-endless', () => startEndless());
bind('btn-shop', () => openWardrobe());
bind('btn-retry', () => {
  audio.ui();
  if (G.mode === 'runner') startEndless(runner?.level || null, { retry: true });
  else startCigEndless({ daily: G.daily, retry: true });
});
bind('btn-next', () => {
  audio.ui();
  if (G.mode === 'runner') {
    // A second (and third...) revive is allowed: the runner charges the escalating crystal price (1, 2, 4, 8) itself
    // and stays in 'over' when it can't be paid; only then does this button read as "ANA MENÜ".
    if (runner && runner.state === 'over') {
      runner.revive?.();
      if (runner.state !== 'over') { ui.hideResult(); return; }   // revived: the run goes on, no menu bounce
    }
    toMenu();
    return;
  }
  toMenu();
});
bind('btn-revive', () => { if (runner?.state === 'over') runner.revive?.(); });
bind('btn-revive-end', () => { if (runner?.declineRevive) runner.declineRevive(); else toMenu(); });
bind('btn-share', async () => {
  audio.ui();
  let text;
  if (G.mode === 'runner' && runner) {
    text = `❄️ PATPAT · Yeti Kaçışı
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
bind('btn-sound', () => {
  audio.init();
  audio.setMuted(!audio.isMuted());
  music.setMuted(audio.isMuted());
  ui.setToggle('sound', !audio.isMuted());
  audio.ui();
});
bind('btn-haptic', () => {
  platform.setHapticsEnabled(!platform.hapticsEnabled());
  ui.setToggle('haptic', platform.hapticsEnabled());
  platform.haptic('medium');
});
function setVisualLabel() {
  const mode = VISUAL_MODES.find((v) => v.id === visualMode) || VISUAL_MODES[0];
  const el = document.getElementById('btn-visual');
  if (el) el.textContent = `🎨 ${mode.name}`;
}
bind('btn-visual', () => {
  audio.ui();
  cycleVisual();
});
setVisualLabel();
try { ui.setToggle('sound', !audio.isMuted()); ui.setToggle('haptic', platform.hapticsEnabled()); } catch { /* optional buttons */ }

function shareText(r) {
  return `❄️ PATPAT · ÇIĞ SONSUZ\n🌋 ${r.tierName}\n⚖️ ${fmtTons(r.tons)}\n📏 ${Math.round(r.dist).toLocaleString('tr-TR')} m\nBeni geçebilir misin?`;
}

// ---------- ÇIĞ SONSUZ: per-frame ----------
function popText(text, at, cls) {
  _v.set(at.x, (at.y ?? 0) + (at.h ?? at.r ?? 1) * 0.8, -at.d).project(camera);
  if (_v.z > 1) return;
  ui.float(text, (_v.x * 0.5 + 0.5) * window.innerWidth, (-_v.y * 0.5 + 0.5) * window.innerHeight, cls);
}

function cigAhead() {
  return clamp(scene.fog.far + 20, CFG.viewAhead, CFG.viewAheadMax);
}

// One ÇIĞ frame. `dt` is real time; the rules get the time-scaled (slow-mo / hit-stop) step.
function cigFrame(dt) {
  if (!G.paused) {
    let gdt = dt * G.timeScale;
    if (G.timeScale < 1) G.timeScale = Math.min(1, G.timeScale + dt * 0.5);
    G.hitStopCd -= dt;
    if (G.hitStop > 0) { G.hitStop -= dt; gdt *= 0.05; }
    if (G.fovKick > 0) G.fovKick = Math.max(0, G.fovKick - dt * 12);
    camZoom = Math.max(0, camZoom - dt * 0.12);
    if (G.state === 'play') cigPlay(gdt);
    else if (G.state === 'end') {
      game.updateEnd(gdt);
      if (G.endT > 1.25) finishCig();
    } else if (G.state === 'result') game.updateEnd(gdt * 0.5);
    plus.update(gdt, ball, G);
    plus.planTo(world.genD - 30);
    ball.tick(dt);
    if (G.state === 'menu') lobbyUpdate(dt);
    ball.sync();
    world.update(gdt, ball.d, cigAhead(), Math.max(CFG.viewBehind, camBack + 15), ball);
    fx.update(gdt, ball);
    updateWaveVis(gdt);
    updateCamera(dt);
    scenery.update(gdt, camera, ball);
  }
}

function cigPlay(gdt) {
  const b = ball;
  const dx = input.consumeDx();
  if ((dx !== 0 || input.keyAxis() !== 0) && !G.hinted) { G.hinted = true; ui.hint(false); }
  const hw = world.halfWidth(b.d);
  // gain follows what the camera shows (a full-screen swipe = ~1.6 visible widths), not the ball size
  const swipeM = Math.max(CFG.swipeVis * camVisW, CFG.swipeTrack * 2 * hw);
  const sens = swipeM / Math.max(320, window.innerWidth);
  const flipK = Math.cos(plus.rollNow || 0) < 0 ? -1 : 1; // the TAKLA barrel roll must not mirror the steering
  const steerM = (dx * sens + input.keyAxis() * (14 + 3 * b.r + hw * 0.3) * gdt) * flipK;
  game.update(gdt, steerM);
  G.progT2 = (G.progT2 || 0) + gdt;
  if (G.progT2 > 10) { G.progT2 = 0; meta.track('cig_progress', { tons: game.totalTons(), dist: b.d }); }
  audio.setRoll(b.airborne ? 0 : clamp(b.speed / 40, 0, 1), clamp(b.r / 10, 0, 1));
  // speed cues: wider FOV and speed lines as the ball gets heavy and fast
  ui.speedLines?.(clamp((b.speed - 18) / 30, 0, 1) * 0.5 + (plus.T.rocket > 0 ? 0.5 : 0));
}

// ---------- the avalanche wave (white wall rolling in from behind when you stall) ----------
let waveVis = null;
function ensureWaveVis() {
  if (waveVis) return waveVis;
  const geo = new THREE.IcosahedronGeometry(1, 1);
  const mat = new THREE.MeshLambertMaterial({ color: 0xf4f8ff, flatShading: true, emissive: 0x7e92b3, emissiveIntensity: 0.55 });
  const N = 26;
  const mesh = new THREE.InstancedMesh(geo, mat, N);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.frustumCulled = false;
  mesh.visible = false;
  scene.add(mesh);
  waveVis = { mesh, N, on: false, t: 0, m: new THREE.Matrix4(), p: new THREE.Vector3(), q: new THREE.Quaternion(), s: new THREE.Vector3(), puffT: 0 };
  return waveVis;
}
function clearWaveVis() {
  if (waveVis) { waveVis.on = false; waveVis.mesh.visible = false; }
}
function updateWaveVis(dt) {
  const W = game?.wave;
  if (!W || !W.on || !world) { if (waveVis && waveVis.on) clearWaveVis(); return; }
  const v = ensureWaveVis();
  v.on = true;
  v.mesh.visible = true;
  v.t += dt;
  const hw = world.halfWidth(W.d);
  const sc = 4.5 + ball.r * 0.55;
  for (let i = 0; i < v.N; i++) {
    const u = i / (v.N - 1);
    const x = (u - 0.5) * (2 * hw + 16) + Math.sin(v.t * 1.7 + i * 1.9) * 1.4;
    const d = W.d - (i % 3) * sc * 0.45 + Math.sin(v.t * 2.3 + i * 1.3) * sc * 0.25;
    const s = sc * (0.85 + 0.35 * Math.sin(i * 2.1 + v.t * 1.3 + 1));
    v.p.set(x, world.groundY(x, d) + s * 0.55, -d);
    v.s.set(s, s * 0.85, s);
    v.q.setFromAxisAngle(_upY, v.t * 0.6 + i);
    v.m.compose(v.p, v.q, v.s);
    v.mesh.setMatrixAt(i, v.m);
  }
  v.mesh.instanceMatrix.needsUpdate = true;
  // rolling powder in front of the wall
  v.puffT -= dt;
  if (v.puffT <= 0 && fx) {
    v.puffT = 0.05;
    const x = (Math.random() - 0.5) * (2 * hw);
    fx.puff(x, world.groundY(x, W.d) + sc * 0.5, -(W.d + sc * 0.6), 0, 2, -3, sc * 0.9, 0.9, 0xf4f8ff, 0.5);
  }
}
const _upY = new THREE.Vector3(0, 1, 0);

// Lobby: tiny hop physics for the bounce lives in ball.js; here only the powder when it lands.
function lobbyUpdate(dt) {
  if (lobbyPuffT > 0) lobbyPuffT -= dt;
}
ball.onHopLand = (v) => {
  if (G.state !== 'menu' || !fx) return;
  fx.burst(ball.x, ball.y - ball.r * 0.85, ball.d, 10, 0xffffff, 3 + v * 0.3, 0.12 + ball.r * 0.05, 2.5);
};

// ---------- camera ----------
const camPos = new THREE.Vector3();
let camBack = 10;
let camVisW = 8;   // metres of ground the screen shows across the ball's depth (steering gain follows it)
let camZoom = 0;   // extra zoom-out after a tier-up (decays)
function updateCamera(dt, snap = false) {
  const b = ball;
  const r = b.r;
  const z = 1 + camZoom;
  // steep enough that <= ~20-25% of the portrait screen is sky and the path stays visible over a big ball
  let back = (6.8 + r * 2.5) * z;
  let up = (8.5 + r * 4.2) * z;
  let ox = b.x * 0.7;
  const menu = G.state === 'menu';
  if (menu) {
    // Lobby: the ball is the hero — close, centred, slowly orbited, spinning on the snow.
    const t = performance.now() * 0.00025;
    back = 2.6 + r * 2.2; up = 0.55 + r * 0.9; ox = b.x + Math.sin(t) * 1.4;
    ball.spin.rotateY(dt * 0.7);
  }
  const ending = G.state === 'end' || G.state === 'result';
  if (ending) {
    const et = Math.min(G.endT, 6);
    const a = et * 0.25;
    back = (7 + r * 2.5) * Math.cos(a);
    ox = b.x + (7 + r * 2.5) * Math.sin(a);
    up = 7 + r * 3.2 + et * 0.6;
  }
  camBack = Math.abs(back);
  camPos.set(ox, b.y + up, -(b.d - back));
  camPos.y = Math.max(camPos.y, world.groundY(camPos.x, -camPos.z) + 3 + r);
  const k = snap ? 1 : 1 - Math.exp(-dt * 6);
  camera.position.lerp(camPos, k);
  // look down the slope: the look-at point follows the slope's drop, so the pitch stays steep over the ball
  const ahead = 8 + r * 2.6;
  _v.set(b.x * 0.85, b.y - (world.baseY(b.d) - world.baseY(b.d + ahead)), -(b.d + ahead));
  if (menu) _v.set(b.x, b.y + r * 0.35, -(b.d - 0.2));
  if (ending) _v.set(b.x, b.y, -b.d);
  camLook.lerp(_v, snap ? 1 : 1 - Math.exp(-dt * 8));
  plus ? plus.lookAt(camera, camLook) : camera.lookAt(camLook);
  // real (angular) screen shake: it does not build up and looks the same at any camera distance
  if (G.shake > 0) {
    const a = 0.028 * Math.min(G.shake, 1.4);
    camera.rotateX((Math.random() - 0.5) * a);
    camera.rotateY((Math.random() - 0.5) * a);
    camera.rotateZ((Math.random() - 0.5) * a * 0.6);
    G.shake = Math.max(0, G.shake - dt * 3.5);
  }
  sky.position.copy(camera.position);
  const fs = scenery?.theme?.fogScale ?? 1;
  scene.fog.near = (70 + r * 6) * fs;
  scene.fog.far = Math.min(430, 300 + r * 9) * fs;
  // what the camera shows around the ball (for steering gain); uses the base FOV so power-up FOV kicks don't change it
  camVisW = 2 * camera.position.distanceTo(ball.group.position) * Math.tan(baseFov * Math.PI / 360) * camera.aspect;
}

// ---------- loop ----------
let last = performance.now();
let frameErrors = 0;
let frameAvg = 16, perfT = 0, fpsT = 0, frames = 0, fps = 0, upVotes = 0;

function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  frameAvg += (dt * 1000 - frameAvg) * 0.05;

  // A bug in one system must never freeze the picture (the pause / menu buttons still need a live page): log and carry on.
  try {
    if (G.mode === 'runner') {
      if (runner && !G.paused) runner.update(dt);
    } else cigFrame(dt);
  } catch (e) {
    if (frameErrors++ < 5) console.error('[frame]', e);
  }

  // widen the FOV with speed (endless modes)
  let wantFov = baseFov + (camera.userData.fovBoost || 0);
  if (G.mode === 'cig' && G.state === 'play') wantFov += 9 * clamp((ball.speed - 13) / 24, 0, 1) + G.fovKick;
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
    if (G.mode === 'runner' && runner) ui.debug(`fps ${fps}  dpr ${dpr.toFixed(2)}
calls ${info.calls}  tris ${(info.triangles / 1000).toFixed(0)}k
s ${runner.b.s.toFixed(0)} u ${runner.b.u.toFixed(2)} h ${runner.b.h.toFixed(2)}
v ${runner.b.vs.toFixed(1)} gap ${runner.gap.toFixed(0)} r ${runner.b.r.toFixed(2)} ${runner.state}`);
    else ui.debug(`fps ${fps}  dpr ${dpr.toFixed(2)}\ncalls ${info.calls}  tris ${(info.triangles / 1000).toFixed(0)}k\nr ${ball.r.toFixed(2)}  v ${ball.speed.toFixed(1)}  d ${ball.d.toFixed(0)}\ntier ${G.tier + 1}  stuck ${ball.stuckCount()}  pulls ${world?.pulls.length ?? 0}`);
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

// Debug hooks: advance the simulation with a fixed step regardless of rAF throttling (muted headless tests use these).
if (DEBUG) {
  window.cig = {
    G, ball, CFG,
    set auto(v) { AUTO = !!v; if (game) game.auto = AUTO; },
    get auto() { return AUTO; },
    get world() { return world; },
    get game() { return game; },
    get bot() { return game?.bot; },
    // ÇIĞ SONSUZ: mirrors the real frame (rules, suction, world, fx, camera, scenery) with a fixed step.
    sim(seconds, step = 1 / 60) {
      const n = Math.round(seconds / step);
      for (let i = 0; i < n && G.mode === 'cig'; i++) {
        cigFrame(step);
        if (G.state === 'result' && i > 0) break;
      }
      post.render(scene, camera);
      return cigSummary();
    },
    start: (a = false) => startCigEndless(typeof a === 'number' ? { seed: a } : { daily: !!a }),
    cigEndless: (opts = {}) => startCigEndless(opts),
    endless: () => startEndless(),
    level: (id) => startEndless(levelById(id)),
    skipTutorial() { debugNoTut = true; if (runner) runner.ctx.noTut = true; },
    simEndless(seconds, step = 1 / 60) {
      const n = Math.round(seconds / step);
      for (let i = 0; i < n && runner; i++) runner.update(step);
      post.render(scene, camera);
      const b = runner.b;
      return { state: runner.state, s: +b.s.toFixed(1), u: +b.u.toFixed(2), h: +b.h.toFixed(2), v: +b.vs.toFixed(1), r: +b.r.toFixed(2), gap: +runner.gap.toFixed(1), score: Math.round(runner.score), coins: runner.coins, cause: runner.cause };
    },
    get runner() { return runner; },
    get plus() { return plus; },
    get ui() { return ui; },
    get menus() { return menus; },
    get camera() { return camera; },
    get result() { return G.result; },
  };
  const cigSummary = () => ({
    state: G.state, r: +ball.r.toFixed(2), d: +ball.d.toFixed(1), v: +ball.speed.toFixed(1), tier: G.tier + 1,
    tons: game ? Math.round(game.totalTons()) : 0, eats: game?.stats.eats ?? 0, bumps: game?.stats.bumps ?? 0, cause: G.cause || '',
    pulls: world?.pulls.length ?? 0, stuck: ball.stuckCount(), statics: world?.statics.length ?? 0, hunger: game ? +game.hungerFrac().toFixed(2) : 0,
    wave: !!game?.wave.on, hw: world ? +world.halfWidth(ball.d + 100).toFixed(1) : 0,
  });
  window.cig.summary = cigSummary;
}

// Boot: pull in the imported models (≈1 MB) first; the game still runs on procedural props if they fail.
async function boot() {
  try { Object.assign(lib, await loadModels()); } catch (e) { console.warn(e); }
  applySkin(save.selected('skin'));
  toMenu();
  updateCamera(0, true);
  try { (window.requestIdleCallback || ((f) => setTimeout(f, 1500)))(() => { loadEndless().catch(() => {}); }); } catch { /* optional */ }
  if (params.has('play') || params.has('cig')) startCigEndless({ daily: params.has('daily') });
  else if (params.has('endless')) startEndless();
  requestAnimationFrame(frame);
}
boot();
