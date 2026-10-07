const KEY = 'cig.save.v1';
export const PERM_COSTS = [200, 450, 900, 1600, 2600];
const RUNNER_DEF = () => ({ best: 0, bestDist: 0, runs: 0, tut: false, turnHints: 0, lipHints: 0, seen: { boulder: false, slidewall: false, train: false } });
const CIG_DEF = () => ({ ch: {}, tut: 0, dailyCh: {}, endless: { tons: 0, dist: 0, runs: 0 } });

const fresh = () => ({
  level: 1, stars: {}, best: {}, daily: {},
  coins: 0,                                   // ❄️ kar tanesi — shop currency
  owned: { skin: ['classic'], trail: ['classic'] },
  selected: { skin: 'classic', trail: 'classic' },
  totalTons: 0, runs: 0,
  runner: RUNNER_DEF(),
  cig: CIG_DEF(),
});

let data = fresh();
try {
  const raw = localStorage.getItem(KEY);
  if (raw) {
    const parsed = JSON.parse(raw);
    const base = fresh();
    data = { ...base, ...parsed, owned: { ...base.owned, ...parsed.owned }, selected: { ...base.selected, ...parsed.selected } };
    // Corrupted storage must never turn into NaN seeds or crashes.
    if (!Number.isFinite(data.level) || data.level < 1) data.level = 1;
    if (!Number.isFinite(data.coins) || data.coins < 0) data.coins = 0;
    for (const k of ['stars', 'best', 'daily']) if (!data[k] || typeof data[k] !== 'object') data[k] = {};
    for (const k of ['skin', 'trail']) {
      if (!Array.isArray(data.owned[k])) data.owned[k] = base.owned[k].slice();
      data.owned[k] = data.owned[k].filter((x) => typeof x === 'string');
      if (!data.owned[k].includes('classic')) data.owned[k].push('classic');
      if (typeof data.selected[k] !== 'string') data.selected[k] = 'classic';
    }
    if (!Number.isFinite(data.totalTons) || data.totalTons < 0) data.totalTons = 0;
    if (!Number.isFinite(data.runs) || data.runs < 0) data.runs = 0;
    if (!data.runner || typeof data.runner !== 'object') data.runner = base.runner;
    {
      const d = RUNNER_DEF(), r = data.runner;
      r.best = r.best ?? d.best; r.bestDist = r.bestDist ?? d.bestDist; r.runs = r.runs ?? d.runs;
      r.tut = r.tut ?? d.tut; r.turnHints = r.turnHints ?? d.turnHints; r.lipHints = r.lipHints ?? d.lipHints;
      if (!r.seen || typeof r.seen !== 'object') r.seen = d.seen;
      for (const k in d.seen) r.seen[k] = r.seen[k] ?? false;
      if (Array.isArray(r.top)) { r.top = r.top.filter((e) => e && Number.isFinite(e.dist)).slice(0, 10); r.top.sort((a, b) => b.dist - a.dist); } else if (r.top !== undefined) delete r.top;
    }
    if (!data.cig || typeof data.cig !== 'object') data.cig = CIG_DEF();
    for (const k of ['ch', 'dailyCh']) if (!data.cig[k] || typeof data.cig[k] !== 'object') data.cig[k] = {};
    if (!Number.isFinite(data.cig.tut)) data.cig.tut = 0;
    {
      const e = data.cig.endless, d = CIG_DEF().endless;
      if (!e || typeof e !== 'object') data.cig.endless = d;
      else for (const k in d) e[k] = Number.isFinite(e[k]) && e[k] > 0 ? e[k] : 0;
    }
    if (!Number.isFinite(data.crystals) || data.crystals < 0) data.crystals = 0;
    if (data.perm && typeof data.perm !== 'object') data.perm = {};
  }
} catch { /* private mode / blocked storage: play without saving */ }

// Crystals 💎 live in meta.js (one source of truth); meta.init() binds them here. Until then a local counter is used.
let crystalStore = null;
// Optional listeners (meta.js registers them) so recording a result can feed missions without save.js importing meta.
const hooks = { cigEnd: null };

function persist() {
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* ignore */ }
}

export const save = {
  get level() { return data.level; },
  starsFor: (lvl) => data.stars[lvl] || 0,
  bestFor: (lvl) => data.best[lvl] || 0,
  dailyFor: (seed) => data.daily[seed] || null,
  totalStars() {
    let n = 0;
    for (const k in data.stars) n += data.stars[k];
    return n;
  },
  recordLevel(lvl, stars, tons) {
    data.stars[lvl] = Math.max(data.stars[lvl] || 0, stars);
    data.best[lvl] = Math.max(data.best[lvl] || 0, tons);
    if (stars > 0 && lvl >= data.level) data.level = lvl + 1;
    persist();
  },
  recordDaily(seed, result) {
    const prev = data.daily[seed];
    if (!prev || result.tons > prev.tons) data.daily[seed] = result;
    persist();
  },
  recordRun(tons) {
    data.totalTons += tons;
    data.runs++;
    persist();
  },

  // ---- endless mode ----
  runnerBest: () => data.runner?.best || 0,
  runnerBestDist: () => data.runner?.bestDist || 0,
  // Returns this run's rank among the player's top-10 runs (1-based), or 0 if it didn't make the list.
  recordRunner(score, dist) {
    score = Number.isFinite(score) ? Math.max(0, score) : 0;
    dist = Number.isFinite(dist) ? Math.max(0, dist) : 0;
    if (!data.runner) data.runner = RUNNER_DEF();
    const r = data.runner;
    r.best = Math.max(r.best, score);
    r.bestDist = Math.max(r.bestDist, dist);
    r.runs++;
    if (!Array.isArray(r.top)) r.top = [];
    const entry = { score, dist, t: Date.now() };
    r.top.push(entry);
    r.top.sort((a, b) => b.dist - a.dist);
    r.top.length = Math.min(r.top.length, 10);
    persist();
    return r.top.indexOf(entry) + 1;
  },
  // Rank this distance would take in the top list (1-based), 0 if it would not make the top 10.
  previewRunnerRank(dist) {
    const top = Array.isArray(data.runner?.top) ? data.runner.top : [];
    let rank = 1;
    for (const e of top) if (e.dist >= dist) rank++;
    return rank <= 10 ? rank : 0;
  },
  runnerTutDone: () => !!data.runner?.tut || (data.runner?.runs || 0) > 0 || data.level >= 11,
  setRunnerTutDone() { data.runner.tut = true; persist(); },
  runnerTurnHints: () => data.runner?.turnHints || 0,
  addRunnerTurnHint() { data.runner.turnHints = (data.runner.turnHints || 0) + 1; persist(); },
  lipHints: () => data.runner?.lipHints || 0,
  addLipHint() { data.runner.lipHints = (data.runner.lipHints || 0) + 1; persist(); },
  threatSeen: (kind) => !!data.runner?.seen?.[kind],
  markThreatSeen(kind) {
    if (!data.runner.seen) data.runner.seen = {};
    if (!data.runner.seen[kind]) { data.runner.seen[kind] = true; persist(); }
  },
  perm() {
    const o = { size: 0, speed: 0, smash: 0, coin: 0, yeti: 0, flow: 0, ...(data.perm || {}) };
    for (const k in o) o[k] = Math.min(5, o[k] || 0);
    return o;
  },
  permCost(id) {
    const lv = Math.min(5, (data.perm && data.perm[id]) || 0);
    return lv >= 5 ? null : PERM_COSTS[lv];
  },
  buyPerm(id, cost = save.permCost(id)) {
    if (cost == null) return false;
    if (!data.perm) data.perm = {};
    if (Math.min(5, data.perm[id] || 0) >= 5) return false;
    if (data.coins < cost) return false;
    data.coins -= cost;
    data.perm[id] = Math.min(5, Math.min(5, data.perm[id] || 0) + 1);
    persist();
    return data.perm[id];
  },
  addPerm(id) {
    if (!data.perm) data.perm = {};
    data.perm[id] = Math.min(5, Math.min(5, data.perm[id] || 0) + 1);
    persist();
    return data.perm[id];
  },

  // ---- ÇIĞ extras ----
  cigChallengeDone: (l) => !!data.cig.ch[l],
  markCigChallenge(l) { data.cig.ch[l] = true; persist(); },
  cigDailyChDone: (seed) => !!data.cig.dailyCh[seed],
  markCigDailyCh(seed) { data.cig.dailyCh[seed] = true; persist(); },
  cigTut: () => data.cig.tut || 0,
  bumpCigTut() { data.cig.tut = (data.cig.tut || 0) + 1; persist(); },
  // Today's best endless score; returns true when this run set it.
  recordDailyRunner(score) {
    const d = new Date();
    const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    if (!data.dailyRunner || data.dailyRunner.key !== key) data.dailyRunner = { key, best: 0 };
    const isBest = score > data.dailyRunner.best;
    if (isBest) data.dailyRunner.best = score;
    persist();
    return isBest;
  },
  dailyRunnerBest() {
    const d = new Date();
    const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    return data.dailyRunner && data.dailyRunner.key === key ? data.dailyRunner.best : 0;
  },
  runnerTop: () => (Array.isArray(data.runner?.top) ? data.runner.top.slice() : []),

  // ---- ÇIĞ SONSUZ (endless avalanche) ----
  // recordCigEndless({tons, dist, tier?, tierName?}) -> true when this run set a new best (tons is the ranking key).
  // Never throws, ignores garbage.
  cigEndlessBest() {
    const e = data.cig.endless || {};
    return { tons: e.tons || 0, dist: e.dist || 0 };
  },
  cigEndlessRuns: () => (data.cig.endless && data.cig.endless.runs) || 0,
  recordCigEndless(r) {
    const tons = Number.isFinite(r && r.tons) ? Math.max(0, r.tons) : 0;
    const dist = Number.isFinite(r && r.dist) ? Math.max(0, r.dist) : (Number.isFinite(r && r.distance) ? Math.max(0, r.distance) : 0);
    if (!data.cig.endless || typeof data.cig.endless !== 'object') data.cig.endless = CIG_DEF().endless;
    const e = data.cig.endless;
    const isBest = tons > e.tons || (e.tons === 0 && tons === 0 && dist > e.dist);
    e.runs = (e.runs || 0) + 1;
    if (tons > e.tons) e.tons = tons;
    if (dist > e.dist) e.dist = dist;
    persist();
    try { if (hooks.cigEnd) hooks.cigEnd({ ...r, tons, dist, isBest }); } catch { /* telemetry must never break the result */ }
    return isBest;
  },

  // ---- crystals 💎 (revive currency) ----
  crystals: () => (crystalStore ? crystalStore.get() : data.crystals || 0),
  addCrystals(n) {
    n = Math.floor(Number.isFinite(n) ? n : 0);
    if (n <= 0) return save.crystals();
    if (crystalStore) crystalStore.add(n); else { data.crystals = (data.crystals || 0) + n; persist(); }
    return save.crystals();
  },
  spendCrystals(n) {
    n = Math.floor(Number.isFinite(n) ? n : 0);
    if (n < 0 || save.crystals() < n) return false;
    if (n === 0) return true;
    if (crystalStore) return !!crystalStore.spend(n);
    data.crystals -= n;
    persist();
    return true;
  },
  // meta.js calls these in init(): { get, add, spend } and a cig-endless listener.
  bindCrystals(store) { crystalStore = store && typeof store.get === 'function' ? store : null; },
  onCigEndless(fn) { hooks.cigEnd = typeof fn === 'function' ? fn : null; },

  // ---- economy / customization ----
  get coins() { return data.coins; },
  // (garbage in -> nothing happens: a NaN must never reach the wallet, the loader would reset the whole balance to 0)
  addCoins(n) { n = Math.floor(Number.isFinite(n) ? n : 0); if (n <= 0) return; data.coins += n; persist(); },
  spend(n) {
    if (!Number.isFinite(n) || n < 0 || data.coins < n) return false;
    data.coins -= n;
    persist();
    return true;
  },
  isOwned: (kind, id) => (data.owned[kind] || []).includes(id),
  own(kind, id) {
    if (!data.owned[kind]) data.owned[kind] = [];
    if (!data.owned[kind].includes(id)) data.owned[kind].push(id);
    persist();
  },
  selected: (kind) => data.selected[kind],
  select(kind, id) { data.selected[kind] = id; persist(); },
};
