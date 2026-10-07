// YETİ RUSH: temporary BUFF CARDS (granted automatically, 90 s each, never pause the game) and the permanent
// between-run upgrades. No DOM / THREE in here, so it can be smoke-tested in node.

export const BUFF_LEN = 90;      // seconds a card lasts (1:30)
export const BUFF_MAX = 3;       // at most this many cards active at once

// Positive effects only. `once` cards are consumed by the effect itself (kabuk = one forgiven crash).
export const BUFFS = [
  { id: 'miknatis', icon: '🧲', name: 'Mıknatıs', desc: 'Kar taneleri sana akar' },
  { id: 'kar', icon: '⛄', name: 'Çift Kar', desc: 'Kar yığınları 2 kat büyütür' },
  { id: 'kabuk', icon: '🛡️', name: 'Kabuk', desc: 'Bir çarpışmayı affeder', once: true },
  { id: 'akis', icon: '🌊', name: 'Akış', desc: 'Akış kombosu yavaş söner' },
  { id: 'altin', icon: '💰', name: 'Altın Yağmuru', desc: 'Kar taneleri 2 kat değerli' },
  { id: 'yay', icon: '🦘', name: 'Süper Yay', desc: 'Zıplama +%35' },
  { id: 'donma', icon: '🧊', name: 'Donma', desc: 'Erime durur' },
  { id: 'yetikov', icon: '🦶', name: 'Yeti Kovucu', desc: 'Yeti uzak durur' },
  { id: 'dev', icon: '🗿', name: 'Dev Top', desc: '+1 boy, küçük engelleri ezer' },
];
export const BUFF_BY_ID = Object.fromEntries(BUFFS.map((b) => [b.id, b]));

/**
 * The active-buff map. `list` holds { id, icon, name, left, total } entries and is handed to ui.buffTick as is
 * (entries are reused, so nothing is allocated per tick). has(id) is the single question the game asks.
 */
export class BuffSet {
  constructor() { this.list = []; }

  reset() { this.list.length = 0; }

  has(id) {
    const l = this.list;
    for (let i = 0; i < l.length; i++) if (l[i].id === id) return true;
    return false;
  }

  left(id) {
    const l = this.list;
    for (let i = 0; i < l.length; i++) if (l[i].id === id) return l[i].left;
    return 0;
  }

  get size() { return this.list.length; }

  /**
   * Activate a card. Same id: its time is refreshed. Pool full: the card with the least time left is replaced.
   * Returns { refreshed, replaced } (replaced = the evicted entry or null).
   */
  add(id, secs = BUFF_LEN) {
    const def = BUFF_BY_ID[id];
    if (!def) return null;
    const l = this.list;
    for (let i = 0; i < l.length; i++) {
      if (l[i].id === id) { l[i].left = l[i].total = secs; return { refreshed: true, replaced: null }; }
    }
    let replaced = null;
    if (l.length >= BUFF_MAX) {
      let k = 0;
      for (let i = 1; i < l.length; i++) if (l[i].left < l[k].left) k = i;
      replaced = l.splice(k, 1)[0];
    }
    l.push({ id, icon: def.icon, name: def.name, left: secs, total: secs });
    return { refreshed: false, replaced };
  }

  remove(id) {
    const l = this.list;
    for (let i = 0; i < l.length; i++) if (l[i].id === id) { return l.splice(i, 1)[0]; }
    return null;
  }

  /** Tick every card; expired ones are removed and reported through onExpire(entry). */
  update(dt, onExpire) {
    const l = this.list;
    for (let i = l.length - 1; i >= 0; i--) {
      const b = l[i];
      b.left -= dt;
      if (b.left <= 0) { l.splice(i, 1); if (onExpire) onExpire(b); }
    }
  }
}

/** Pick the next card: strongly prefers ones that are not active yet (variety), never the one just granted twice in a row. */
export function rollBuff(active, rng = Math.random, last = '') {
  let tot = 0;
  const w = [];
  for (let i = 0; i < BUFFS.length; i++) {
    const id = BUFFS[i].id;
    let k = active.has(id) ? 0.25 : 1;
    if (id === last) k *= 0.3;
    w.push(k); tot += k;
  }
  let r = rng() * tot;
  for (let i = 0; i < BUFFS.length; i++) { r -= w[i]; if (r <= 0) return BUFFS[i]; }
  return BUFFS[BUFFS.length - 1];
}

// Permanent upgrades, bought between runs (each level +1, max 5).
export const UPGRADES = [
  { id: 'size', icon: '🧊', name: 'Kartopu', desc: 'Kar yığınları %6 daha çok büyütür' },
  { id: 'speed', icon: '🦬', name: 'Yeti Kaçağı', desc: 'Çarpan +0,15' },
  { id: 'smash', icon: '🏔️', name: 'Çığ', desc: 'Yıkım puanı ve tonu +%10' },
  { id: 'coin', icon: '💰', name: 'Altın', desc: 'Kar taneleri %8 daha değerli' },
  { id: 'yeti', icon: '🧤', name: 'Kalın Eldiven', desc: 'Tökezleme süresi %4 kısalır' },
  { id: 'flow', icon: '🌊', name: 'Akış', desc: 'Akış kombosu %6 daha yavaş söner' },
];

// Destruction tiers by tons smashed.
export const DESTRUCTION = [
  { t: 0, name: 'KULÜBE' },
  { t: 100, name: 'EV' },
  { t: 500, name: 'OTEL' },
  { t: 2000, name: 'KÖY' },
  { t: 10000, name: 'KASABA' },
  { t: 100000, name: 'MEGA ÇIĞ' },
];
export const destructionTier = (tons) => {
  let i = 0;
  while (i + 1 < DESTRUCTION.length && tons >= DESTRUCTION[i + 1].t) i++;
  return i;
};
