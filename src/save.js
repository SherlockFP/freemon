const KEY = 'cig.save.v1';

const fresh = () => ({
  level: 1, stars: {}, best: {}, daily: {},
  coins: 0,                                   // ❄️ kar tanesi — shop currency
  owned: { skin: ['classic'], trail: ['classic'] },
  selected: { skin: 'classic', trail: 'classic' },
  totalTons: 0, runs: 0,
  runner: { best: 0, bestDist: 0, runs: 0 },
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
    if (!data.runner || typeof data.runner !== 'object') data.runner = base.runner;
  }
} catch { /* private mode / blocked storage: play without saving */ }

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
    if (!data.runner) data.runner = { best: 0, bestDist: 0, runs: 0 };
    const r = data.runner;
    r.best = Math.max(r.best, score);
    r.bestDist = Math.max(r.bestDist, dist);
    r.runs++;
    if (!Array.isArray(r.top)) r.top = [];
    const entry = { score, dist, t: Date.now() };
    r.top.push(entry);
    r.top.sort((a, b) => b.score - a.score);
    r.top.length = Math.min(r.top.length, 10);
    persist();
    return r.top.indexOf(entry) + 1;
  },
  perm: () => ({ size: 0, speed: 0, smash: 0, coin: 0, yeti: 0, flow: 0, ...(data.perm || {}) }),
  addPerm(id) {
    if (!data.perm) data.perm = {};
    data.perm[id] = Math.min(10, (data.perm[id] || 0) + 1);
    persist();
    return data.perm[id];
  },
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

  // ---- economy / customization ----
  get coins() { return data.coins; },
  addCoins(n) { data.coins += Math.max(0, Math.floor(n)); persist(); },
  spend(n) {
    if (data.coins < n) return false;
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
