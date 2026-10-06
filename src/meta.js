// meta.js — FREEMON progression brain.
//
//   import { meta, ACHIEVEMENTS, DAILY_REWARDS, EGGS, UPGRADES } from './meta.js';
//   meta.init(save);                       // once, after save.js is ready
//   meta.track('swallow', { type });       // feed gameplay events (cheap; safe to call every frame-ish)
//
// Everything lives in its own localStorage key (`freemon.meta.v1`); every storage access is wrapped in try/catch and a
// corrupted blob falls back to a fresh state. Importing this module never touches `document` / `localStorage`.
// Rewards that touch the shop economy (❄️, skins, trails) go through the `save` object handed to init().
import { SKINS, TRAILS } from './skins.js';
import { ACTS, CAMPAIGN_SIZE, LEVELS_PER_ACT, levelById } from './campaign.js';

const KEY = 'freemon.meta.v1';
const MAX_MULT = 30;
const WORD = 'FREEMON';
const MAX_UP = 5;
const XP_K = 260;
const XP_P = 1.8;

// =================================================================================================== small helpers

const num = (x, d = 0) => (typeof x === 'number' && Number.isFinite(x) ? x : d);
const nz = (x) => Math.max(0, num(x));
const isObj = (o) => !!o && typeof o === 'object' && !Array.isArray(o);
const pad2 = (n) => (n < 10 ? '0' : '') + n;
const now = () => Date.now();
const EMPTY = Object.freeze({});
const NONE = Object.freeze([]);

// Local calendar day key + day arithmetic (DST safe: goes through UTC day numbers).
function dateKey(ms = now()) {
  const d = new Date(ms);
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}
function dayNum(key) {
  const p = String(key).split('-');
  return Math.floor(Date.UTC(+p[0], +p[1] - 1, +p[2]) / 86400000);
}
const dayDiff = (a, b) => dayNum(b) - dayNum(a);
function msToMidnight(ms = now()) {
  const d = new Date(ms);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1).getTime() - ms;
}

let rand = Math.random;

// Same cycle as scenery.js LEVEL_CYCLE — used to guess "night" levels when cig_end carries no theme id.
const LEVEL_CYCLE = ['day', 'crystal', 'sunset', 'day', 'night', 'blizzard', 'pink', 'sunset', 'night', 'crystal', 'pink', 'blizzard', 'sunset', 'day', 'night'];

// =================================================================================================== catalogs

// ---- daily rewards: 7-day cycle (day 7 resolves to an unowned skin/trail at claim time) ----
export const DAILY_REWARDS = [
  { day: 1, coins: 50 },
  { day: 2, coins: 75 },
  { day: 3, coins: 100, crystals: 1 },
  { day: 4, coins: 150 },
  { day: 5, coins: 200, crystals: 1 },
  { day: 6, coins: 300 },
  { day: 7, coins: 500, crystals: 2, special: true }, // coins = fallback when every skin/trail is already owned
];

// ---- power-up upgrades (index = level 0..5; costs[i] = price of level i -> i+1) ----
export const UPGRADES = [
  { id: 'magnet', name: 'Mıknatıs', icon: '🧲', desc: 'Kar tanelerini çeker', durations: [8, 10, 12, 14, 17, 20], costs: [150, 400, 900, 1800, 3500] },
  { id: 'x2', name: '2x Skor', icon: '✖️', desc: 'Skor iki katı', durations: [10, 12, 14, 17, 20, 24], costs: [200, 500, 1100, 2200, 4200] },
  { id: 'jump', name: 'Süper Zıplama', icon: '🦘', desc: 'Dev zıplamalar', durations: [8, 10, 12, 14, 17, 20], costs: [150, 350, 800, 1600, 3200] },
  { id: 'rocket', name: 'Roket', icon: '🚀', desc: 'Hız + her şeyi kır', durations: [3.5, 4.5, 5.5, 6.5, 7.5, 9], costs: [250, 600, 1300, 2600, 5000] },
];
const UP_BY_ID = Object.fromEntries(UPGRADES.map((u) => [u.id, u]));
const UP_ALIAS = { superjump: 'jump', super_jump: 'jump', double: 'x2', '2x': 'x2', mult: 'x2', jetpack: 'rocket' };
const upId = (k) => (UP_BY_ID[k] ? k : UP_ALIAS[k] || null);

// Sled (kızak) = Subway "hoverboard": consumable one-hit shield, activated by double-tap during a run.
export const SLED_PACK = { count: 3, price: 270 };

// ---- act chests: given once, on the first clear of an act's boss level (already-owned items convert to coins) ----
export const ACT_CHEST = [
  { coins: 300, crystals: 1, boxes: 1 }, { coins: 200, trail: 'neon' }, { coins: 200, skin: 'karpuz' }, { coins: 250, skin: 'nazar' },
  { coins: 250, trail: 'gold' }, { coins: 300, skin: 'kofte' }, { coins: 300, skin: 'ice', crystals: 1 }, { coins: 350, skin: 'pamuk' },
  { coins: 400, skin: 'disko', crystals: 1 }, { coins: 600, skin: 'lav', crystals: 3, boxes: 2 },
];

// ---- holidays (fixed-date only; moving religious holidays are intentionally not here) ----
export const HOLIDAYS = [
  { id: 'yilbasi', m: 1, d: 1, name: 'YENİ YIL', emoji: '🎆', msg: 'Mutlu yıllar! Kar dolu bir yıl olsun.', coins: 50 },
  { id: 'nisan23', m: 4, d: 23, name: '23 NİSAN', emoji: '🎈', msg: 'Ulusal Egemenlik ve Çocuk Bayramı kutlu olsun!', coins: 50 },
  { id: 'ekim29', m: 10, d: 29, name: '29 EKİM', emoji: '🎉', msg: 'Cumhuriyet Bayramı kutlu olsun!', coins: 50 },
];

// ---- easter eggs. where:'ui' ones live in menus.js; where:'world' ones must be triggered by the game via meta.egg(id) ----
export const EGGS = [
  { id: 'logo', where: 'ui', name: 'Gökkuşağı Avcısı', hint: 'FREEMON yazısı sevilmeye bayılır. Yedi kez.', how: 'Logoya 7 kez dokun' },
  { id: 'konami', where: 'ui', name: 'Hile Yok!', hint: 'Eski kafa oyuncular bilir: yukarı yukarı aşağı aşağı...', how: '↑ ↑ ↓ ↓ ← → ← → B A' },
  { id: 'sneeze', where: 'ui', name: 'Hapşuu!', hint: 'Menüdeki kartopu burnunu çok seviyor. Gıdıkla.', how: 'Menüdeki kartopuna 3 sn basılı tut' },
  { id: 'typed', where: 'ui', name: 'Sihirli Kelime', hint: 'Klavyen varsa oyunun adını yaz.', how: 'Menüde "freemon" yaz' },
  { id: 'holiday', where: 'ui', name: 'Bayram Ruhu', hint: 'Takvimde kırmızı bir gün.', how: '1 Ocak / 23 Nisan / 29 Ekim günü oyunu aç' },
  { id: 'nasreddin', where: 'world', name: "Hoca'ya Selam", hint: 'Bir hoca eşeğine yanlış binmiş olabilir.', how: 'Nasreddin Hoca, eşeğine ters binmiş halde nadir bir yamaçta' },
  { id: 'ufo', where: 'world', name: 'Yakın Karşılaşma', hint: 'Gece gökyüzüne dikkat.', how: 'Gece temasında gökyüzünde UFO' },
  { id: 'duck', where: 'world', name: 'Vak Vak!', hint: 'Donmuş göldeki bir şey fazla sarı.', how: 'Donmuş gölde dev lastik ördek' },
  { id: 'yeti3am', where: 'world', name: 'Yeti Disko', hint: 'Gece yarısından sonra menü bile uyanık.', how: 'Saat 03:00-03:59 arası menüde Yeti dans eder' },
  { id: 'snowman', where: 'world', name: 'Kardan Adam Kankası', hint: 'Yol kenarındaki sessiz izleyiciler.', how: 'Yol kenarındaki kardan adama yaklaşınca el sallar' },
];
const EGG_BY_ID = Object.fromEntries(EGGS.map((e) => [e.id, e]));

// =================================================================================================== achievements

const DEFS = [];
const RULES = {}; // id -> { on: [events], val: (S, d, cur) => number, auto }

// ach(id, name, desc, icon, goal, reward, events, valueFn, opts)
//  valueFn(S, d, cur) -> new progress value (progress only ever moves up). Events starting with '@' are pseudo events
//  ('@derive' = recomputed from save.js / meta state on init, refresh() and a few events).
function ach(id, name, desc, icon, goal, reward, on, val, opts = {}) {
  const def = { id, name, desc, icon, goal, reward };
  if (opts.secret) { def.secret = true; def.hint = opts.hint || ''; }
  DEFS.push(def);
  RULES[id] = { on, val, auto: !!opts.auto };
}

const END = ['endless_end', 'cig_end'];
let sv = null; // save.js object (set by init)

// ---------------- endless ----------------
ach('first_run', 'İlk Adım', 'Herhangi bir koşuyu bitir.', '👣', 1, { coins: 25 }, END, (S) => S.st.runs);
ach('km1', 'Isınma Turu', 'Tek koşuda 1 km git.', '🏃', 1000, { coins: 50 }, ['endless_end'], (S) => S.st.bestDist);
ach('km5', 'Dağ Keçisi', 'Tek koşuda 5 km git.', '🐐', 5000, { coins: 150 }, ['endless_end'], (S) => S.st.bestDist);
ach('km10', 'Yeti Bile Yoruldu', 'Tek koşuda 10 km git.', '🏔️', 10000, { skin: 'pamuk' }, ['endless_end'], (S) => S.st.bestDist);
ach('close5', 'Nefes Nefese', "Yeti'den 5 kez kıl payı kurtul.", '😅', 5, { coins: 40 }, ['close_call'], (S) => S.st.closeCalls);
ach('close50', 'Yeti Kaçkını', "Yeti'den 50 kez kıl payı kurtul.", '👹', 50, { coins: 200, crystals: 1 }, ['close_call'], (S) => S.st.closeCalls);
ach('maxsize', 'Dev Gibi', 'Maksimum boyuta ulaş.', '🌕', 1, { coins: 100 }, ['tier_up', 'endless_end'], (S) => (S.st.maxTier >= 4 ? 1 : 0));
ach('smash100', 'Kırıp Geçiren', '100 engel parçala.', '🔨', 100, { coins: 120 }, ['smash'], (S) => S.st.smashed);
ach('explode10', 'Patlamaya Doymayan', '10 kez patla.', '💥', 10, { trail: 'pink' }, ['endless_end'], (S) => S.st.explosions);
ach('perfect25', 'Ritim Kralı', '25 kez PERFECT yap.', '🥁', 25, { coins: 100 }, ['perfect'], (S) => S.st.perfects);
ach('biomes5', 'Dünya Turu', '5 farklı dünyayı gez.', '🗺️', 5, { coins: 150 }, ['portal'], (S) => S.sets.biomes.length);
ach('powers3', 'Çeşit Çeşit', '3 farklı güçlendirme topla.', '⚡', 3, { coins: 80 }, ['powerup'], (S) => S.sets.powers.length);

// ---------------- ÇIĞ ----------------
ach('swallow1000', 'Obur', 'Toplam 1.000 şey yut.', '🍽️', 1000, { coins: 150 }, ['swallow'], (S) => S.st.swallowed);
ach('police', 'Polisi Yuttun!', 'Bir polis arabasını yut.', '🚓', 1, { coins: 100 }, ['swallow'], (S) => S.st.police);
ach('stars3x10', 'Yıldız Avcısı', '10 dağı 3 yıldızla bitir.', '⭐', 10, { trail: 'neon' }, ['@derive'], (S) => countThreeStar());
ach('flatten', 'Kasaba Yok Oldu', 'Bir kasabayı tamamen yerle bir et.', '🏘️', 1, { coins: 150, crystals: 1 }, ['cig_end'], (S) => S.st.flattened);
ach('destroy200', 'Kentsel Dönüşüm', 'Toplam 200 bina yık.', '🏢', 200, { coins: 120 }, ['destroy'], (S) => S.st.destroyed);
ach('level10', 'Dağcı', '10. dağa ulaş.', '⛰️', 10, { coins: 100 }, ['@derive'], () => (sv ? num(sv.level) : 0));
ach('milestone5', 'KIYAMET!', 'En büyük çığ eşiğine ulaş.', '🌋', 1, { coins: 100 }, ['milestone'], (S) => (S.st.maxMilestone >= 5 ? 1 : 0));
ach('tons', 'Ton Ton', 'Toplam 250.000 ton kar topla.', '⚖️', 250000, { coins: 150 }, ['cig_end'], (S) => Math.floor(S.st.totalTons));
ach('daily_first', 'Günün Adamı', "Günün Dağı'nı bitir.", '📅', 1, { coins: 50 }, ['cig_end'], (S) => S.st.dailyRuns);
ach('night', 'Gece Kuşu', 'Gece temalı bir dağı bitir.', '🌙', 1, { coins: 50 }, ['cig_end'], (S) => S.st.nightRuns);

// ---------------- meta / economy ----------------
ach('streak7', 'Sadık Dost', '7 gün üst üste günlük ödülü al.', '🔥', 7, { trail: 'fire' }, ['@derive', 'daily_claim'], (S, d, cur) => Math.max(cur, S.d.streak));
ach('buy5', 'Dolap Meraklısı', '5 farklı topa sahip ol.', '👕', 5, { coins: 200 }, ['@derive'], () => ownedSkinCount());
ach('kofte', 'Köfteci', 'Köfte topuna sahip ol.', '🍖', 1, { coins: 50 }, ['@derive'], () => (sv && sv.isOwned('skin', 'kofte') ? 1 : 0));
ach('visual4', 'Gözlük Takan', 'Tüm görünüm modlarını dene.', '🎨', 4, { coins: 80 }, ['visual_mode'], (S) => S.sets.visual.length);
ach('fashion3', 'Moda Tutkunu', '3 farklı top seç.', '💃', 3, { coins: 40 }, ['skin_select'], (S) => S.sets.skins.length);
ach('trailx', 'İz Bırakan', 'Klasik dışı bir kar izi seç.', '✨', 1, { coins: 40 }, ['trail_select'], (S) => S.sets.trails.length);
ach('hoard', 'Kış Hazırlığı', 'Aynı anda 5.000 ❄️ biriktir.', '🐿️', 5000, { coins: 200, crystals: 1 }, ['@derive'], (S, d, cur) => Math.max(cur, sv ? num(sv.coins) : 0));
ach('share', 'Sesini Duyur', 'Sonucunu paylaş.', '📣', 1, { coins: 50 }, ['share'], (S) => S.st.shares);
ach('missions3', 'Görev Adamı', '3 görev seti tamamla.', '🎯', 3, { coins: 150, crystals: 1 }, ['@derive'], (S) => S.m.n);
ach('mult10', 'Çarpan Ustası', 'Kalıcı skor çarpanını x10 yap.', '✖️', 10, { coins: 300, crystals: 2 }, ['@derive'], (S) => S.m.mult);
ach('hunt1', 'Kelime Avcısı', 'FREEMON harflerini bir günde topla.', '🔤', 1, { coins: 150 }, ['@derive'], (S) => S.st.huntsDone);

// ---------------- campaign (state lives in S.c; all derived) ----------------
const ACT_NAMES = ['Buzları Kırdın', 'Orman Kurdu', 'Çimen Kralı', 'Peri Bacası Ustası', 'Kasaba Fatihi', 'Çöl Yolcusu', 'Buz Kralı', 'Şeker Krizi', 'Neon Işığı', 'Yanardağ Fatihi'];
const TR_SUFFIX = ['i', 'yi', 'ü', 'ü', 'i', 'yı', 'yi', 'i', 'u', 'u'];
for (let a = 1; a <= 10; a++) {
  ach('act_' + a, ACT_NAMES[a - 1], "Act " + a + "'" + TR_SUFFIX[a - 1] + ' bitir: ' + ACTS[a - 1].name + '.', ACTS[a - 1].icon, 1, { coins: 50 + 25 * a }, ['@derive'], (S) => (S.c.stars[a * LEVELS_PER_ACT] > 0 ? 1 : 0));
}
ach('stars30', 'Yıldız Tozu', 'Macerada toplam 30 yıldız topla.', '🌟', 30, { coins: 100 }, ['@derive'], (S) => campStars(S));
ach('stars100', 'Yıldız Yağmuru', 'Macerada toplam 100 yıldız topla.', '💫', 100, { coins: 250, crystals: 1 }, ['@derive'], (S) => campStars(S));
ach('stars300', 'Takımyıldız', 'Macerada 300 yıldızın hepsini topla.', '🌌', 300, { coins: 1000, crystals: 5 }, ['@derive'], (S) => campStars(S));
ach('camp_all', 'Efsane', 'Macerada 100 bölümü de bitir.', '👑', CAMPAIGN_SIZE, { coins: 500, crystals: 3 }, ['@derive'], (S) => campCleared(S));
ach('act_perfect', 'Kusursuz Act', "Bir act'in 10 bölümünü de 3 yıldızla bitir.", '💎', 1, { coins: 300, crystals: 1 }, ['@derive'], (S) => (S.c.perfect.some(Boolean) ? 1 : 0));

// ---------------- secrets (easter eggs; unlocked through meta.egg(id), auto-claimed) ----------------
function eggAch(id, name, desc, icon, reward) {
  const e = EGG_BY_ID[id];
  ach(`egg_${id}`, name, desc, icon, 1, reward, ['@egg'], (S) => (S.eggs[id] ? 1 : 0), { secret: true, hint: e.hint, auto: true });
}
eggAch('logo', 'Gökkuşağı Avcısı', 'FREEMON logosuna 7 kez dokundun!', '🌈', { trail: 'rainbow' });
eggAch('konami', 'Hile Yok!', 'Efsanevi kodu girdin. Ama hile yok!', '🎮', { coins: 100 });
eggAch('sneeze', 'Hapşuu!', 'Kartopunu 3 saniye gıdıkladın.', '🤧', { coins: 60 });
eggAch('typed', 'Sihirli Kelime', "Klavyede 'freemon' yazdın.", '⌨️', { coins: 60 });
eggAch('holiday', 'Bayram Ruhu', 'Milli bir bayramda oyunu açtın.', '🎊', { coins: 100 });
eggAch('nasreddin', "Hoca'ya Selam", "Nasreddin Hoca'yı eşeğine ters binerken gördün.", '🐴', { coins: 150 });
eggAch('ufo', 'Yakın Karşılaşma', 'Gece gökyüzünde bir UFO gördün.', '🛸', { coins: 150, crystals: 1 });
eggAch('duck', 'Vak Vak!', 'Donmuş gölde dev lastik ördek buldun.', '🦆', { coins: 150 });
eggAch('yeti3am', 'Yeti Disko', "Gece 3'te Yeti'nin dans ettiğini yakaladın.", '🕺', { coins: 150, crystals: 1 });
eggAch('snowman', 'Kardan Adam Kankası', 'Yol kenarındaki kardan adam sana el salladı.', '⛄', { coins: 100 });
ach('egg_all', 'Tavşan Deliği', 'Tüm sırları buldun!', '🐇', EGGS.length, { skin: 'altin' }, ['@egg'], (S) => Object.keys(S.eggs).length, { secret: true, hint: 'Bütün sırları bul.', auto: true });

export const ACHIEVEMENTS = DEFS;
const DEF_BY_ID = Object.fromEntries(DEFS.map((d) => [d.id, d]));
const ACH_IDS = DEFS.map((d) => d.id);

const BY_EVENT = {};
for (const id of ACH_IDS) for (const ev of RULES[id].on) (BY_EVENT[ev] || (BY_EVENT[ev] = [])).push(id);

function campStars(S) {
  let n = 0;
  for (const k in S.c.stars) n += S.c.stars[k];
  return n;
}
function campCleared(S) {
  let n = 0;
  for (const k in S.c.stars) if (S.c.stars[k] > 0) n++;
  return n;
}

function countThreeStar() {
  if (!sv || typeof sv.starsFor !== 'function') return 0;
  let n = 0;
  const top = Math.min(500, Math.max(1, num(sv.level, 1)));
  for (let i = 1; i <= top; i++) if (sv.starsFor(i) >= 3) n++;
  return n;
}
function ownedSkinCount() {
  if (!sv) return 0;
  let n = 0;
  for (const s of SKINS) if (s.id !== 'classic' && sv.isOwned('skin', s.id)) n++;
  return n;
}

// =================================================================================================== missions

const fmtN = (n) => String(Math.floor(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const inc = (d, v) => v + 1;
const best = (f) => (d, v) => Math.max(v, num(f(d)));

// modes: 'endless' | 'cig' | 'any'. scope 'run' = value resets at run_start, 'sum' = accumulates until the set is replaced.
// `on` maps event -> (data, value) => newValue. Missions also look at the *_end event so they work even when the
// game sends no live events (run_progress is optional).
const MISSION_TPL = [
  { id: 'coins', group: 'coin', modes: 'endless', scope: 'run', icon: '❄️', goals: [100, 200, 350, 500, 800, 1200], text: (g) => `Bir koşuda ${fmtN(g)} kar tanesi topla`,
    on: { run_progress: best((d) => d.coins), endless_end: best((d) => d.coins) } },
  { id: 'dist', group: 'dist', modes: 'endless', scope: 'run', icon: '📏', goals: [500, 800, 1200, 1800, 2500, 4000], text: (g) => `Bir koşuda ${fmtN(g)} m git`,
    on: { run_progress: best((d) => d.distance), endless_end: best((d) => d.distance) } },
  { id: 'jump', group: 'jump', modes: 'endless', scope: 'sum', icon: '🦘', goals: [5, 15, 30, 50, 80, 120], text: (g) => `${g} kez zıpla`, on: { jump: inc } },
  { id: 'close', group: 'close', modes: 'endless', scope: 'sum', icon: '😅', goals: [1, 2, 3, 5, 8, 12], text: (g) => `Yeti'den ${g} kez kıl payı kaç`, on: { close_call: inc } },
  { id: 'power', group: 'power', modes: 'endless', scope: 'sum', icon: '⚡', goals: [1, 3, 4, 6, 8, 10], text: (g) => `${g} güçlendirme topla`, on: { powerup: inc } },
  { id: 'maxsize', group: 'size', modes: 'endless', scope: 'sum', icon: '🌕', goals: [1, 1, 2, 3, 4, 5], text: (g) => (g === 1 ? 'Maksimum boyuta ulaş' : `Maksimum boyuta ${g} kez ulaş`),
    on: { tier_up: (d, v) => (num(d.tier) >= 4 ? v + 1 : v) } },
  { id: 'smash', group: 'smash', modes: 'endless', scope: 'sum', icon: '🔨', goals: [10, 20, 35, 60, 100, 150], text: (g) => `${g} engel kır`, on: { smash: inc } },
  { id: 'perfect', group: 'perfect', modes: 'endless', scope: 'sum', icon: '🥁', goals: [3, 6, 10, 15, 25, 40], text: (g) => `${g} kez PERFECT yap`, on: { perfect: inc } },
  { id: 'portal', group: 'portal', modes: 'endless', scope: 'sum', icon: '🌀', goals: [1, 1, 2, 2, 3, 4], text: (g) => (g === 1 ? 'Bir portaldan geç' : `${g} portaldan geç`), on: { portal: inc } },
  { id: 'runs', group: 'runs', modes: 'any', scope: 'sum', icon: '🔁', goals: [1, 2, 3, 3, 4, 5], text: (g) => (g === 1 ? 'Bir koşu tamamla' : `${g} koşu tamamla`), on: { endless_end: inc, cig_end: inc } },
  { id: 'stars', group: 'stars', modes: 'cig', scope: 'sum', icon: '⭐', goals: [1, 2, 2, 3, 3, 3], text: (g) => `Çığ modunda bir dağı ${g} yıldızla bitir`,
    on: { cig_end: best((d) => d.stars) } },
  { id: 'swallow', group: 'swallow', modes: 'cig', scope: 'sum', icon: '🍽️', goals: [100, 200, 400, 700, 1000, 1500], text: (g) => `Çığ modunda ${fmtN(g)} şey yut`, on: { swallow: inc } },
  { id: 'destroy', group: 'destroy', modes: 'cig', scope: 'sum', icon: '🏢', goals: [5, 10, 20, 40, 70, 100], text: (g) => `Kasabada ${g} bina yık`, on: { destroy: inc } },
];
const TPL_BY_ID = Object.fromEntries(MISSION_TPL.map((t) => [t.id, t]));
const MISSION_EVENTS = new Set();
for (const t of MISSION_TPL) for (const ev of Object.keys(t.on)) MISSION_EVENTS.add(ev);

// =================================================================================================== state

const STAT_KEYS = [
  'runs', 'endlessRuns', 'cigRuns', 'bestDist', 'totalDist', 'bestScore', 'swallowed', 'police', 'destroyed', 'smashed', 'crashes', 'explosions',
  'closeCalls', 'perfects', 'portals', 'powerups', 'tierUps', 'maxTier', 'maxMilestone', 'totalTons', 'shares', 'sessions', 'jumps', 'nightRuns',
  'dailyRuns', 'flattened', 'boxesOpened', 'lettersFound', 'huntsDone', 'sledsUsed', 'upgrades', 'crystalsEarned',
];
const SET_KEYS = ['biomes', 'visual', 'skins', 'powers', 'trails'];

function fresh() {
  const st = {};
  for (const k of STAT_KEYS) st[k] = 0;
  const sets = {};
  for (const k of SET_KEYS) sets[k] = [];
  return {
    v: 1, born: 0, xp: 0, cr: 0, boxes: 0, sleds: 0,
    st, sets, a: {}, eggs: {}, hol: {},
    d: { last: '', streak: 0, pos: 0, total: 0 },
    u: { magnet: 0, x2: 0, jump: 0, rocket: 0 },
    m: { n: 0, mult: 1, cur: [], awarded: false, skipDay: '' },
    h: { day: '', found: [0, 0, 0, 0, 0, 0, 0], done: false, last: '', streak: 0 },
    recent: [],
    c: { stars: {}, b: {}, unlocked: 1, seen: {}, chest: new Array(10).fill(0), perfect: new Array(10).fill(0) },
    mode: 'camp',
  };
}

function sanitize(p) {
  const s = fresh();
  if (!isObj(p)) return s;
  s.born = nz(p.born);
  s.xp = Math.floor(nz(p.xp));
  s.cr = Math.floor(nz(p.cr));
  s.boxes = Math.floor(nz(p.boxes));
  s.sleds = Math.min(99, Math.floor(nz(p.sleds)));
  if (isObj(p.st)) for (const k of STAT_KEYS) s.st[k] = nz(p.st[k]);
  if (isObj(p.sets)) for (const k of SET_KEYS) if (Array.isArray(p.sets[k])) s.sets[k] = p.sets[k].filter((x) => typeof x === 'string' && x.length < 40).slice(0, 64);
  if (isObj(p.a)) {
    for (const id of ACH_IDS) {
      const e = p.a[id];
      if (isObj(e)) s.a[id] = { v: Math.min(nz(e.v), DEF_BY_ID[id].goal), d: nz(e.d), c: e.c ? 1 : 0 };
    }
  }
  if (isObj(p.eggs)) for (const e of EGGS) if (p.eggs[e.id]) s.eggs[e.id] = num(p.eggs[e.id], 1) || 1;
  if (isObj(p.hol)) for (const k of Object.keys(p.hol)) if (p.hol[k] && /^\d{4}-[a-z0-9]+$/.test(k)) s.hol[k] = 1;
  if (isObj(p.d)) {
    s.d.last = typeof p.d.last === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(p.d.last) ? p.d.last : '';
    s.d.streak = Math.floor(nz(p.d.streak));
    s.d.pos = Math.min(7, Math.floor(nz(p.d.pos)));
    s.d.total = Math.floor(nz(p.d.total));
  }
  if (isObj(p.u)) for (const k of Object.keys(s.u)) s.u[k] = Math.min(MAX_UP, Math.floor(nz(p.u[k])));
  if (isObj(p.m)) {
    s.m.n = Math.floor(nz(p.m.n));
    s.m.mult = Math.min(MAX_MULT, Math.max(1, Math.floor(num(p.m.mult, 1))));
    s.m.awarded = !!p.m.awarded;
    s.m.skipDay = typeof p.m.skipDay === 'string' ? p.m.skipDay : '';
    if (Array.isArray(p.m.cur)) {
      for (const m of p.m.cur.slice(0, 3)) {
        if (isObj(m) && TPL_BY_ID[m.id] && num(m.g) > 0) s.m.cur.push({ id: m.id, g: Math.floor(num(m.g)), v: nz(m.v), d: m.d ? 1 : 0 });
      }
      if (s.m.cur.length !== 3) s.m.cur = [];
    }
  }
  if (isObj(p.h)) {
    s.h.day = typeof p.h.day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(p.h.day) ? p.h.day : '';
    s.h.last = typeof p.h.last === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(p.h.last) ? p.h.last : '';
    s.h.streak = Math.floor(nz(p.h.streak));
    s.h.done = !!p.h.done;
    if (Array.isArray(p.h.found)) for (let i = 0; i < 7; i++) s.h.found[i] = p.h.found[i] ? 1 : 0;
  }
  if (isObj(p.c)) {
    const C = s.c;
    if (isObj(p.c.stars)) for (let id = 1; id <= CAMPAIGN_SIZE; id++) { const v = Math.min(3, Math.floor(nz(p.c.stars[id]))); if (v > 0) C.stars[id] = v; }
    if (isObj(p.c.b)) {
      for (let id = 1; id <= CAMPAIGN_SIZE; id++) {
        const e = p.c.b[id];
        if (Array.isArray(e)) C.b[id] = [Math.min(100, Math.floor(nz(e[0]))), Math.floor(nz(e[1]))];
      }
    }
    if (isObj(p.c.seen)) for (let id = 1; id <= CAMPAIGN_SIZE; id++) if (p.c.seen[id]) C.seen[id] = 1;
    for (const k of ['chest', 'perfect']) if (Array.isArray(p.c[k])) for (let i = 0; i < 10; i++) C[k][i] = p.c[k][i] ? 1 : 0;
    let hi = 0;
    for (const k in C.stars) hi = Math.max(hi, +k);
    C.unlocked = Math.max(1, Math.min(CAMPAIGN_SIZE, Math.max(Math.floor(nz(p.c.unlocked)), hi + 1)));
  }
  if (p.mode === 'camp' || p.mode === 'endless' || p.mode === 'cig') s.mode = p.mode;
  if (Array.isArray(p.recent)) s.recent = p.recent.filter((x) => x === 'e' || x === 'c').slice(-6);
  return s;
}

let S = fresh();
let dirty = false;
let timer = null;
let quiet = false;
let listenersAdded = false;
const cbs = { unlock: [], levelup: [], mission: [], missionset: [], letter: [], hunt: [] };

function lsGet() {
  try { return globalThis.localStorage ? globalThis.localStorage.getItem(KEY) : null; } catch { return null; }
}
function lsSet(str) {
  try { if (globalThis.localStorage) globalThis.localStorage.setItem(KEY, str); } catch { /* private mode / quota: play without saving */ }
}
function persistNow() {
  dirty = false;
  if (timer) { clearTimeout(timer); timer = null; }
  try { lsSet(JSON.stringify(S)); } catch { /* ignore */ }
}
function markDirty() {
  dirty = true;
  if (timer) return;
  timer = setTimeout(() => { timer = null; if (dirty) persistNow(); }, 900);
  if (timer && typeof timer.unref === 'function') timer.unref();
}
function fire(name, a, b) {
  const list = cbs[name];
  for (let i = 0; i < list.length; i++) {
    try { list[i](a, b); } catch { /* a bad listener must never break the game */ }
  }
}

// =================================================================================================== economy plumbing

const NOOP_SAVE = {
  level: 1, coins: 0, totalStars: () => 0, starsFor: () => 0, addCoins() {}, spend: () => false, isOwned: () => false, own() {}, selected: () => null, select() {},
};
const wallet = () => sv || NOOP_SAVE;

function giveItem(kind, id, out) {
  const list = kind === 'skin' ? SKINS : TRAILS;
  const it = list.find((x) => x.id === id);
  if (!it) return;
  if (wallet().isOwned(kind, id)) {
    // Already owned: pay out half its shop price instead so no reward is ever wasted.
    const c = Math.max(50, Math.round(((it.price || 300) * 0.5) / 10) * 10);
    wallet().addCoins(c);
    out.coins = (out.coins || 0) + c;
    out.converted = { kind, id };
  } else {
    wallet().own(kind, id);
    out[kind] = id;
  }
}

// Reward spec -> actually grants it. Returns what was really given: { coins, crystals, boxes, sleds, skin, trail, converted }.
function grant(r) {
  const out = {};
  if (!r) return out;
  if (r.coins) { out.coins = Math.floor(r.coins); wallet().addCoins(out.coins); }
  if (r.crystals) { S.cr += r.crystals; S.st.crystalsEarned += r.crystals; out.crystals = r.crystals; }
  if (r.boxes) { S.boxes += r.boxes; out.boxes = r.boxes; }
  if (r.sleds) { S.sleds = Math.min(99, S.sleds + r.sleds); out.sleds = r.sleds; }
  if (r.skin) giveItem('skin', r.skin, out);
  if (r.trail) giveItem('trail', r.trail, out);
  return out;
}

// =================================================================================================== XP / level

const xpAt = (L) => Math.round(XP_K * Math.pow(Math.max(0, L - 1), XP_P)); // cumulative XP needed to REACH level L
function levelFor(xp) {
  let L = Math.floor(Math.pow(Math.max(0, xp) / XP_K, 1 / XP_P)) + 1;
  while (xpAt(L + 1) <= xp) L++;
  while (L > 1 && xpAt(L) > xp) L--;
  return L;
}
function addXp(n) {
  n = Math.round(n);
  if (!(n > 0)) return;
  const before = levelFor(S.xp);
  S.xp += n;
  const after = levelFor(S.xp);
  if (after > before && !quiet) fire('levelup', after, before);
}

// =================================================================================================== achievements engine

function ent(id) {
  return S.a[id] || (S.a[id] = { v: 0, d: 0, c: 0 });
}

function unlock(id, newly) {
  const def = DEF_BY_ID[id];
  const e = ent(id);
  e.d = now();
  e.v = def.goal;
  let info = { auto: false };
  if (RULES[id].auto) {
    const reward = claim(id);
    info = { auto: true, reward };
  }
  if (newly) newly.push(def);
  if (!quiet) fire('unlock', def, info);
}

function claim(id) {
  const def = DEF_BY_ID[id];
  const e = S.a[id];
  if (!def || !e || !e.d || e.c) return null;
  e.c = 1;
  const given = grant(def.reward);
  given.id = id;
  addXp(def.secret ? 40 : 15 + (def.reward.skin || def.reward.trail ? 20 : 0) + (def.reward.crystals ? 10 : 0));
  persistNow();
  return given;
}

function runRules(ev, d, newly) {
  const list = BY_EVENT[ev];
  if (!list) return;
  for (let i = 0; i < list.length; i++) {
    const id = list[i];
    const e = S.a[id];
    if (e && e.d) continue; // done: frozen
    const def = DEF_BY_ID[id];
    const cur = e ? e.v : 0;
    let v = RULES[id].val(S, d, cur);
    if (!(v > cur)) continue;
    if (v > def.goal) v = def.goal;
    ent(id).v = v;
    if (v >= def.goal) unlock(id, newly);
  }
}
const derive = (newly) => runRules('@derive', undefined, newly);
const DERIVE_ON = new Set(['session', 'cig_end', 'endless_end', 'skin_select', 'trail_select', 'daily_claim', 'visual_mode', 'share']);
const END_EVENTS = new Set(['endless_end', 'cig_end']);

function addSet(name, val) {
  if (typeof val !== 'string' || !val || val.length > 39) return;
  const arr = S.sets[name];
  if (arr.length < 64 && !arr.includes(val)) arr.push(val);
}

// =================================================================================================== missions engine

function pushRecent(m) {
  S.recent.push(m);
  if (S.recent.length > 6) S.recent.shift();
}

function eligible(t) {
  if (t.modes === 'any') return true;
  const hasE = S.recent.includes('e');
  const hasC = S.recent.includes('c');
  if (t.modes === 'endless') return hasE || !hasC; // new players + endless players
  return hasC;                                      // ÇIĞ missions only once the player actually plays ÇIĞ
}

function pickMission(exclude) {
  const tier0 = Math.min(5, Math.floor(S.m.n / 3));
  let pool = MISSION_TPL.filter((t) => eligible(t) && !exclude.groups.has(t.group));
  const fresher = pool.filter((t) => !exclude.ids.has(t.id));
  if (fresher.length) pool = fresher;
  if (!pool.length) pool = MISSION_TPL.filter((t) => !exclude.groups.has(t.group));
  const t = pool[Math.floor(rand() * pool.length)];
  let tier = tier0 + (rand() < 0.3 ? 1 : 0) - (rand() < 0.15 ? 1 : 0);
  tier = Math.max(0, Math.min(5, tier));
  return { id: t.id, g: t.goals[tier], v: 0, d: 0 };
}

function genMissions() {
  const prevIds = new Set(S.m.cur.map((m) => m.id));
  const groups = new Set();
  const out = [];
  for (let i = 0; i < 3; i++) {
    const m = pickMission({ ids: prevIds, groups });
    groups.add(TPL_BY_ID[m.id].group);
    out.push(m);
  }
  return out;
}

function missionsOn(ev, d) {
  if (!MISSION_EVENTS.has(ev)) return;
  const cur = S.m.cur;
  let any = false;
  for (let i = 0; i < cur.length; i++) {
    const m = cur[i];
    if (m.d) continue;
    const fn = TPL_BY_ID[m.id].on[ev];
    if (!fn) continue;
    const nv = fn(d, m.v);
    if (nv !== m.v) {
      m.v = nv;
      any = true;
      if (m.v >= m.g) {
        m.d = 1;
        if (!quiet) fire('mission', { id: m.id, text: TPL_BY_ID[m.id].text(m.g), icon: TPL_BY_ID[m.id].icon, goal: m.g });
      }
    }
  }
  if (any) checkSet();
}

function setReward(n) {
  const r = { coins: Math.min(600, 100 + 40 * n) };
  if (n % 3 === 0) r.crystals = 1;
  if (n % 4 === 0) r.boxes = 1;
  return r;
}

// All three done -> permanent multiplier +1 + reward. The finished set stays on screen until the run ends.
function checkSet() {
  const m = S.m;
  if (m.awarded || m.cur.length !== 3 || !m.cur.every((x) => x.d)) return;
  m.awarded = true;
  m.n += 1;
  m.mult = Math.min(MAX_MULT, m.mult + 1);
  const reward = grant(setReward(m.n));
  addXp(60);
  derive(null);
  persistNow();
  if (!quiet) fire('missionset', { multiplier: m.mult, reward, n: m.n });
}

function rollMissions() {
  const m = S.m;
  if (m.cur.length !== 3 || (m.awarded && m.cur.every((x) => x.d))) {
    m.cur = genMissions();
    m.awarded = false;
    return;
  }
  // The player's habits changed (e.g. started with endless, now only plays ÇIĞ): swap untouched missions that no
  // longer fit for fresh ones, so nobody is stuck with a mission for a mode they don't play.
  for (let i = 0; i < 3; i++) {
    const x = m.cur[i];
    if (!x.d && x.v === 0 && !eligible(TPL_BY_ID[x.id])) {
      const groups = new Set(m.cur.filter((_, j) => j !== i).map((y) => TPL_BY_ID[y.id].group));
      m.cur[i] = pickMission({ ids: new Set(m.cur.map((y) => y.id)), groups });
    }
  }
}

function resetRunMissions() {
  for (const m of S.m.cur) if (!m.d && TPL_BY_ID[m.id].scope === 'run') m.v = 0;
}

// =================================================================================================== letter hunt

function huntReward(k) {
  const r = { coins: 100 + 50 * k };
  if (k === 7) { r.crystals = 1; r.boxes = 1; }
  return r;
}

function rollHunt(t = now()) {
  const H = S.h;
  const today = dateKey(t);
  if (H.day === today) return;
  if (H.day && dayDiff(H.day, today) < 0) return; // clock moved backwards: don't re-arm the hunt
  if (!H.last || dayDiff(H.last, today) > 1) H.streak = 0;
  H.day = today;
  H.found = [0, 0, 0, 0, 0, 0, 0];
  H.done = false;
}

// =================================================================================================== daily rewards

function pickSpecial() {
  const w = wallet();
  const pool = (list, kind) => list.filter((s) => s.price > 0 && !s.unlock && !w.isOwned(kind, s.id)).sort((a, b) => a.price - b.price);
  const skins = pool(SKINS, 'skin');
  if (skins.length) return { skin: skins[0].id };
  const trails = pool(TRAILS, 'trail');
  if (trails.length) return { trail: trails[0].id };
  return null;
}

function dailyReward(day) {
  const base = DAILY_REWARDS[Math.max(1, Math.min(7, day | 0)) - 1];
  if (!base.special) return { ...base };
  const sp = pickSpecial();
  const r = { day: base.day, special: true, crystals: base.crystals };
  if (sp) Object.assign(r, sp);
  else r.coins = base.coins;
  return r;
}

// =================================================================================================== boxes

const BOX_TABLE = [
  { w: 30, r: { coins: 50 } }, { w: 25, r: { coins: 100 } }, { w: 14, r: { coins: 150 } }, { w: 8, r: { coins: 250 } },
  { w: 3, r: { coins: 500 }, rare: true }, { w: 10, r: { crystals: 1 } }, { w: 2, r: { crystals: 2 }, rare: true },
  { w: 6, r: { sleds: 1 } }, { w: 2, r: 'item', rare: true },
];

function rollBox() {
  let total = 0;
  for (const b of BOX_TABLE) total += b.w;
  let x = rand() * total;
  let pick = BOX_TABLE[0];
  for (const b of BOX_TABLE) { x -= b.w; if (x < 0) { pick = b; break; } }
  if (pick.r !== 'item') return { spec: pick.r, rare: !!pick.rare };
  const w = wallet();
  const pool = [
    ...SKINS.filter((s) => s.price >= 500 && !s.unlock && !w.isOwned('skin', s.id)).map((s) => ({ skin: s.id })),
    ...TRAILS.filter((s) => s.price >= 500 && !s.unlock && !w.isOwned('trail', s.id)).map((s) => ({ trail: s.id })),
  ];
  if (!pool.length) return { spec: { coins: 500 }, rare: true };
  return { spec: pool[Math.floor(rand() * pool.length)], rare: true };
}

// =================================================================================================== event handlers

function onRunStart(d) {
  resetRunMissions();
  rollMissions();
}

function onEndlessEnd(d) {
  const st = S.st;
  st.runs++;
  st.endlessRuns++;
  const dist = nz(d.distance);
  st.bestDist = Math.max(st.bestDist, dist);
  st.totalDist += dist;
  st.bestScore = Math.max(st.bestScore, nz(d.score));
  st.maxTier = Math.max(st.maxTier, nz(d.maxTier));
  if (d.cause === 'explode') st.explosions++;
  pushRecent('e');
  addXp(10 + dist / 10 + nz(d.coins) * 0.5 + nz(d.maxTier) * 8);
}

function onCigEnd(d) {
  const st = S.st;
  st.runs++;
  st.cigRuns++;
  const tons = nz(d.tons);
  st.totalTons += tons;
  if (d.daily) st.dailyRuns++;
  if (num(d.pct) >= 0.99) st.flattened++;
  const theme = typeof d.theme === 'string' ? d.theme : (!d.daily ? LEVEL_CYCLE[(Math.max(1, num(d.level, 1) | 0) - 1) % LEVEL_CYCLE.length] : '');
  if (theme === 'night') st.nightRuns++;
  pushRecent('c');
  addXp(20 + nz(d.stars) * 30 + nz(d.pct) * 40 + Math.sqrt(tons) * 0.8);
}

function handle(ev, d, newly) {
  const st = S.st;
  switch (ev) {
    case 'session': st.sessions++; rollHunt(); rollMissions(); break;
    case 'run_start': onRunStart(d); break;
    case 'run_progress': break;
    case 'cig_end': onCigEnd(d); break;
    case 'endless_end': onEndlessEnd(d); break;
    case 'swallow': st.swallowed++; if (d.type === 'k_police') st.police++; break;
    case 'destroy': st.destroyed++; break;
    case 'milestone': st.maxMilestone = Math.max(st.maxMilestone, num(d.level)); break;
    case 'tier_up': st.tierUps++; st.maxTier = Math.max(st.maxTier, num(d.tier)); break;
    case 'crash': st.crashes++; break;
    case 'smash': st.smashed++; break;
    case 'powerup': st.powerups++; addSet('powers', d.kind); break;
    case 'close_call': st.closeCalls++; break;
    case 'perfect': st.perfects++; break;
    case 'portal': st.portals++; addSet('biomes', d.biome); break;
    case 'jump': st.jumps++; break;
    case 'skin_select': addSet('skins', d.id); break;
    case 'trail_select': if (d.id && d.id !== 'classic') addSet('trails', d.id); break;
    case 'visual_mode': addSet('visual', d.id); break;
    case 'share': st.shares++; break;
    case 'daily_claim': break;
    default: return;
  }
  runRules(ev, d, newly);
  missionsOn(ev, d);
  if (DERIVE_ON.has(ev)) derive(newly);
  if (END_EVENTS.has(ev)) { rollMissions(); persistNow(); } else markDirty();
}

// =================================================================================================== public API

export const meta = {
  // ---- lifecycle ----
  init(save) {
    sv = save || null;
    let parsed = null;
    try { const raw = lsGet(); parsed = raw ? JSON.parse(raw) : null; } catch { parsed = null; }
    S = sanitize(parsed);
    if (!S.born) S.born = now();
    quiet = true; // retro-unlocks from an existing save must not spam toasts
    try {
      rollHunt();
      rollMissions();
      derive(null);
    } finally { quiet = false; }
    persistNow();
    if (!listenersAdded && typeof document !== 'undefined' && document.addEventListener) {
      listenersAdded = true;
      try {
        document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') meta.flush(); });
        if (typeof window !== 'undefined') window.addEventListener('pagehide', () => meta.flush());
      } catch { /* ignore */ }
    }
  },
  flush() { if (dirty) persistNow(); },
  // Re-derive things that depend on save.js (coins, owned skins, levels) and re-arm daily things. Call when the menu opens.
  refresh() {
    try { rollHunt(); rollMissions(); derive([]); markDirty(); } catch { /* ignore */ }
  },

  // ---- events ----
  track(event, data) {
    const d = data && typeof data === 'object' ? data : EMPTY;
    const newly = [];
    try { handle(event, d, newly); } catch { /* telemetry must never break gameplay */ }
    return newly.length ? newly : NONE;
  },
  on(name, cb) {
    const list = cbs[name];
    if (!list || typeof cb !== 'function') return () => {};
    list.push(cb);
    return () => { const i = list.indexOf(cb); if (i >= 0) list.splice(i, 1); };
  },
  onUnlock(cb) { return meta.on('unlock', cb); },
  onLevelUp(cb) { return meta.on('levelup', cb); },

  // ---- achievements ----
  progress(id) {
    const def = DEF_BY_ID[id];
    if (!def) return { value: 0, goal: 1, done: false, claimed: false };
    const e = S.a[id];
    return { value: e ? Math.min(e.v, def.goal) : 0, goal: def.goal, done: !!(e && e.d), claimed: !!(e && e.c) };
  },
  claimAchievement(id) {
    try { return claim(id); } catch { return null; }
  },
  unclaimedCount() {
    let n = 0;
    for (const id of ACH_IDS) { const e = S.a[id]; if (e && e.d && !e.c) n++; }
    return n;
  },
  doneCount() {
    let n = 0;
    for (const id of ACH_IDS) if (S.a[id] && S.a[id].d) n++;
    return n;
  },

  // ---- daily reward ----
  // day: cycle day (1..7) on offer (when available) or last claimed (when not). reward: what that day pays.
  daily() {
    const t = now();
    const today = dateKey(t);
    const D = S.d;
    const gap = D.last ? dayDiff(D.last, today) : null;
    const claimedToday = gap === 0;
    const available = gap === null || gap > 0;
    let streak = D.streak;
    let pos = D.pos;
    if (gap === null || gap > 2) { streak = 0; pos = 0; } // missed more than the 1 grace day: start over
    const day = available ? (pos % 7) + 1 : Math.max(1, pos);
    return {
      day, streak, available, claimedToday, grace: gap === 2,
      reward: dailyReward(day), nextInMs: available ? 0 : msToMidnight(t),
    };
  },
  dailyReward(day) { return dailyReward(day); },
  claimDaily() {
    const info = meta.daily();
    if (!info.available) return null;
    const D = S.d;
    const given = grant(info.reward);
    given.day = info.day;
    given.streak = info.streak + 1;
    D.streak = info.streak + 1;
    D.pos = info.day;
    D.last = dateKey();
    D.total++;
    addXp(20);
    const newly = [];
    runRules('daily_claim', { day: info.day }, newly);
    derive(newly);
    persistNow();
    return given;
  },

  // ---- holidays ----
  holiday(ms = now()) {
    const d = new Date(ms);
    const h = HOLIDAYS.find((x) => x.m === d.getMonth() + 1 && x.d === d.getDate());
    if (!h) return null;
    const key = `${d.getFullYear()}-${h.id}`;
    return { ...h, key, claimed: !!S.hol[key] };
  },
  claimHoliday(ms = now()) {
    const h = meta.holiday(ms);
    if (!h || h.claimed) return null;
    S.hol[h.key] = 1;
    const given = grant({ coins: h.coins });
    meta.egg('holiday');
    persistNow();
    return given;
  },

  // ---- stats / xp ----
  stats() {
    const st = S.st;
    return {
      level: levelFor(S.xp), xp: S.xp,
      runs: st.runs, endlessRuns: st.endlessRuns, cigRuns: st.cigRuns,
      bestDistance: Math.round(st.bestDist), totalDistance: Math.round(st.totalDist), bestScore: Math.round(st.bestScore),
      swallowed: st.swallowed, destroyed: st.destroyed, smashed: st.smashed, crashes: st.crashes, explosions: st.explosions,
      closeCalls: st.closeCalls, perfects: st.perfects, portals: st.portals, powerups: st.powerups, jumps: st.jumps,
      totalTons: Math.round(st.totalTons), sessions: st.sessions,
      stars: sv && typeof sv.totalStars === 'function' ? sv.totalStars() : 0,
      daysClaimed: S.d.total, dailyStreak: meta.daily().streak,
      achievements: meta.doneCount(), achievementsTotal: ACH_IDS.length,
      eggs: Object.keys(S.eggs).length, eggsTotal: EGGS.length,
      campaignStars: campStars(S), campaignCleared: campCleared(S), campaignUnlocked: S.c.unlocked,
      multiplier: S.m.mult, missionSets: S.m.n, boxesOpened: st.boxesOpened, lettersFound: st.lettersFound, huntsDone: st.huntsDone,
      crystals: S.cr, sleds: S.sleds, since: S.born,
    };
  },
  get xp() { return S.xp; },
  get level() { return levelFor(S.xp); },
  get xpForNext() { return xpAt(levelFor(S.xp) + 1) - S.xp; }, // XP still missing to reach the next level
  levelInfo() {
    const L = levelFor(S.xp);
    const lo = xpAt(L), hi = xpAt(L + 1);
    return { level: L, xp: S.xp, cur: S.xp - lo, need: hi - lo, frac: Math.max(0, Math.min(1, (S.xp - lo) / (hi - lo))) };
  },
  xpAt,

  // ---- easter eggs ----
  egg(id) {
    if (!EGG_BY_ID[id] || S.eggs[id]) return false;
    S.eggs[id] = now();
    const newly = [];
    runRules('@egg', undefined, newly);
    persistNow();
    return true;
  },
  eggFound(id) { return !!S.eggs[id]; },

  // ---- missions + permanent multiplier ----
  missions() {
    return S.m.cur.map((m) => {
      const t = TPL_BY_ID[m.id];
      return { id: m.id, icon: t.icon, text: t.text(m.g), value: Math.min(m.v, m.g), goal: m.g, done: !!m.d };
    });
  },
  multiplier() { return S.m.mult; },
  maxMultiplier() { return MAX_MULT; },
  missionSetReward() { return setReward(S.m.n + 1); },
  missionSetsDone() { return S.m.n; },
  skipCost() { return S.m.skipDay === dateKey() ? 1 : 0; }, // one free skip per day, then 1 crystal
  skipMission(i) {
    const m = S.m.cur[i];
    if (!m || m.d) return false;
    const cost = meta.skipCost();
    if (cost && S.cr < cost) return false;
    S.cr -= cost;
    S.m.skipDay = dateKey();
    const groups = new Set(S.m.cur.filter((_, j) => j !== i).map((x) => TPL_BY_ID[x.id].group));
    S.m.cur[i] = pickMission({ ids: new Set(S.m.cur.map((x) => x.id)), groups });
    persistNow();
    return true;
  },

  // ---- upgrades + sleds ----
  upgrades: UPGRADES,
  upgradeLevel(kind) { const k = upId(kind); return k ? S.u[k] : 0; },
  duration(kind) { const k = upId(kind); return k ? UP_BY_ID[k].durations[S.u[k]] : 0; },
  upgradeCost(kind) { const k = upId(kind); return k && S.u[k] < MAX_UP ? UP_BY_ID[k].costs[S.u[k]] : null; },
  buyUpgrade(kind) {
    const k = upId(kind);
    const cost = meta.upgradeCost(kind);
    if (!k || cost === null || !wallet().spend(cost)) return false;
    S.u[k]++;
    S.st.upgrades++;
    persistNow();
    return true;
  },
  sleds() { return S.sleds; },
  useSled() {
    if (S.sleds <= 0) return false;
    S.sleds--;
    S.st.sledsUsed++;
    markDirty();
    return true;
  },
  buySled(packs = 1) {
    packs = Math.max(1, Math.floor(num(packs, 1)));
    if (S.sleds + packs * SLED_PACK.count > 99) return false;
    if (!wallet().spend(packs * SLED_PACK.price)) return false;
    S.sleds += packs * SLED_PACK.count;
    persistNow();
    return true;
  },

  // ---- crystals 💎 ----
  get crystals() { return S.cr; },
  addCrystals(n) {
    n = Math.floor(num(n));
    if (n <= 0) return S.cr;
    S.cr += n;
    S.st.crystalsEarned += n;
    markDirty();
    return S.cr;
  },
  spendCrystals(n) {
    n = Math.floor(num(n));
    if (n < 0 || S.cr < n) return false;
    S.cr -= n;
    persistNow();
    return true;
  },
  // nthRevive = revives already used in this run (0-based): 1, 2, 4, 8, ... (capped at 64)
  reviveCost(nthRevive) { return Math.min(64, Math.pow(2, Math.max(0, Math.floor(num(nthRevive))))); },

  // ---- mystery boxes 🎁 ----
  get boxes() { return S.boxes; },
  addBoxes(n) {
    n = Math.floor(num(n));
    if (n > 0) { S.boxes += n; markDirty(); }
    return S.boxes;
  },
  openBox() {
    if (S.boxes <= 0) return null;
    S.boxes--;
    S.st.boxesOpened++;
    const { spec, rare } = rollBox();
    const out = grant(spec);
    out.rare = rare;
    out.kind = spec.skin ? 'skin' : spec.trail ? 'trail' : spec.crystals ? 'crystals' : spec.sleds ? 'sleds' : 'coins';
    addXp(5);
    derive(null);
    persistNow();
    return out;
  },

  // ---- daily letter hunt ----
  letterHunt() {
    rollHunt();
    const H = S.h;
    const today = dateKey();
    const found = H.found.map(Boolean);
    const count = found.filter(Boolean).length;
    const alive = H.last && dayDiff(H.last, today) <= 1;
    const streak = alive ? H.streak : 0;
    const nextDayInStreak = H.done ? ((H.streak - 1) % 7) + 1 : (streak % 7) + 1;
    const nextLetter = H.done ? -1 : found.indexOf(false);
    return {
      word: WORD, found, count, nextLetter, letter: nextLetter >= 0 ? WORD[nextLetter] : '',
      complete: !!H.done, streak, streakDay: nextDayInStreak, reward: huntReward(nextDayInStreak),
    };
  },
  collectLetter() {
    rollHunt();
    const H = S.h;
    if (H.done) return null;
    const idx = H.found.indexOf(0);
    if (idx < 0) return null;
    H.found[idx] = 1;
    S.st.lettersFound++;
    const res = { index: idx, letter: WORD[idx], count: idx + 1, complete: false, reward: null };
    fire('letter', res);
    if (idx === 6) {
      const today = dateKey();
      H.streak = H.last && dayDiff(H.last, today) === 1 ? H.streak + 1 : 1;
      H.last = today;
      H.done = true;
      S.st.huntsDone++;
      res.complete = true;
      res.streak = H.streak;
      res.reward = grant(huntReward(((H.streak - 1) % 7) + 1));
      addXp(40);
      derive(null);
      persistNow();
      fire('hunt', res);
    } else markDirty();
    return res;
  },

  // ---- campaign (100 levels, 10 acts; data in campaign.js) ----
  // unlocked = highest playable level, current = level the MACERA button plays (== unlocked, capped at 100).
  campaign() {
    const C = S.c;
    const stars = {};
    for (const k in C.stars) stars[k] = C.stars[k];
    return {
      unlocked: C.unlocked, current: Math.min(CAMPAIGN_SIZE, C.unlocked), stars, totalStars: campStars(S), maxStars: CAMPAIGN_SIZE * 3,
      cleared: campCleared(S), done: campCleared(S) >= CAMPAIGN_SIZE,
      actDone: (act) => (C.stars[Math.max(1, Math.min(10, act | 0)) * LEVELS_PER_ACT] || 0) > 0,
      actStars: (act) => { let n = 0; for (let i = 1; i <= LEVELS_PER_ACT; i++) n += C.stars[(act - 1) * LEVELS_PER_ACT + i] || 0; return n; },
    };
  },
  levelStars(id) { return S.c.stars[id] || 0; },
  levelBest(id) {
    const st = S.c.stars[id] || 0;
    if (!st) return null;
    const b = S.c.b[id] || [0, 0];
    return { stars: st, flakesPct: b[0], time: b[1] };
  },
  // Call when a campaign level ends successfully (stars >= 1; the runner decides stars via campaign.evalGoals).
  // Grants rewards immediately and returns them (or null for stars < 1 / bad id): { coins, crystals, boxes, skin, trail,
  // converted, stars (best), earned, newStars, firstClear, boss, act, chest (what the act chest gave, or null), perfect (bool),
  // actDone, next (next level id or 0), endlessUnlocked, justUnlockedEndless, achievements: [newly unlocked] }.
  completeLevel(id, stars, stats) {
    const lv = levelById(id);
    if (!lv) return null;
    stars = Math.max(0, Math.min(3, Math.floor(num(stars))));
    if (stars < 1) return null;
    const st = isObj(stats) ? stats : EMPTY;
    const C = S.c;
    const prev = C.stars[id] || 0;
    const firstClear = prev === 0;
    const newStars = Math.max(0, stars - prev);
    const wasEndless = meta.endlessUnlocked();
    C.stars[id] = Math.max(prev, stars);
    const b = C.b[id] || (C.b[id] = [0, 0]);
    b[0] = Math.max(b[0], Math.round(Math.max(0, Math.min(1, num(st.flakesPct))) * 100));
    const tm = Math.round(num(st.time));
    if (tm > 0 && (!b[1] || tm < b[1])) b[1] = tm;
    if (id < CAMPAIGN_SIZE) C.unlocked = Math.max(C.unlocked, id + 1);

    const parts = [grant({ coins: (firstClear ? 25 + Math.round(id * 1.2) : 5) + newStars * 20 })];
    let chest = null;
    if (lv.boss && firstClear && !C.chest[lv.act - 1]) {
      C.chest[lv.act - 1] = 1;
      chest = grant(ACT_CHEST[lv.act - 1]);
      parts.push(chest);
    }
    let perfect = false;
    if (!C.perfect[lv.act - 1]) {
      let all = true;
      for (let i = 1; i <= LEVELS_PER_ACT; i++) if ((C.stars[(lv.act - 1) * LEVELS_PER_ACT + i] || 0) < 3) { all = false; break; }
      if (all) { C.perfect[lv.act - 1] = 1; perfect = true; parts.push(grant({ crystals: 2, boxes: 1 })); }
    }
    const out = {};
    for (const p of parts) {
      for (const k of ['coins', 'crystals', 'boxes']) if (p[k]) out[k] = (out[k] || 0) + p[k];
      for (const k of ['skin', 'trail', 'converted']) if (p[k]) out[k] = p[k];
    }
    addXp(20 + stars * 15 + (lv.boss && firstClear ? 60 : 0));
    const newly = [];
    derive(newly);
    persistNow();
    const nowEndless = meta.endlessUnlocked();
    return Object.assign(out, {
      id, act: lv.act, boss: lv.boss, stars: C.stars[id], earned: stars, newStars, firstClear, chest, perfect,
      actDone: C.stars[lv.act * LEVELS_PER_ACT] > 0, next: id < CAMPAIGN_SIZE ? id + 1 : 0,
      endlessUnlocked: nowEndless, justUnlockedEndless: nowEndless && !wasEndless, achievements: newly,
    });
  },
  // YETİ KAÇIŞI opens after Act 1's boss (level 10). Players who already have an endless record are grandfathered in.
  endlessUnlocked() {
    if (S.c.unlocked > 10 || (S.c.stars[10] || 0) > 0) return true;
    try { return !!(sv && typeof sv.runnerBest === 'function' && sv.runnerBest() > 0); } catch { return false; }
  },
  introSeen(id) { return !!S.c.seen[id]; },
  markIntroSeen(id) { if (levelById(id)) { S.c.seen[id] = 1; markDirty(); } },
  // last mode picked on the main screen: 'camp' | 'endless' | 'cig'
  mode() { return S.mode; },
  setMode(m) { if (m === 'camp' || m === 'endless' || m === 'cig') { S.mode = m; markDirty(); } },

  // ---- testing hooks ----
  _setRandom(fn) { rand = typeof fn === 'function' ? fn : Math.random; },
};
