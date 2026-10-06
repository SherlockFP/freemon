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
  recordRunner(score, dist) {
    if (!data.runner) data.runner = { best: 0, bestDist: 0, runs: 0 };
    data.runner.best = Math.max(data.runner.best, score);
    data.runner.bestDist = Math.max(data.runner.bestDist, dist);
    data.runner.runs++;
    persist();
  },

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
