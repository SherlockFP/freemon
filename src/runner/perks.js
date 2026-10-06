// Roguelite run perks (pick 1 of 3 every layer) and permanent between-run upgrades.

export const PERKS = [
  { id: 'cam', icon: '🃏', name: 'Cam Top', desc: 'Çarpınca patlarsın ama çarpan +3', rare: true },
  { id: 'miknatis', icon: '🧲', name: 'Mıknatıs Ruhu', desc: 'Kar taneleri kendiliğinden gelir' },
  { id: 'asiri', icon: '⚡', name: 'Aşırı Hız', desc: 'Hız +%20, çarpan +1' },
  { id: 'kilpayi', icon: '🎯', name: 'Kıl Payı Avcısı', desc: 'Kıl payı bonusu ×3' },
  { id: 'risk', icon: '🎲', name: 'Risk Bağımlısı', desc: 'Her kıl payı çarpanı +0,2 artırır (en çok +4)' },
  { id: 'kabuk', icon: '🛡️', name: 'Kalın Kabuk', desc: 'Her katmanda 1 bedava çarpma' },
  { id: 'yetikov', icon: '🦶', name: 'Yeti Kovucu', desc: 'Yeti çarpınca %40 daha az yaklaşır' },
  { id: 'kar', icon: '⛄', name: 'Kar Ejderi', desc: 'Kar yığınları 2 kat büyütür' },
  { id: 'altin', icon: '💰', name: 'Altın Dokunuş', desc: 'Kar taneleri ×2 değerli' },
  { id: 'yay', icon: '🦘', name: 'Yaylı Top', desc: 'Zıplama +%35' },
  { id: 'akis', icon: '🌊', name: 'Akış Ustası', desc: 'Akış kombosu yavaş söner, +1 seviye' },
  { id: 'tehlike', icon: '🔥', name: 'Tehlike Çılgını', desc: 'Yeti yakınken tehlike bonusu ikiye katlanır' },
  { id: 'ikiz', icon: '👯', name: 'İkiz Ruh', desc: '20 sn İkiz Top: çarpan +2' },
];

export function rollPerks(taken, rng = Math.random) {
  const pool = PERKS.filter((p) => !taken.has(p.id) || p.id === 'ikiz');
  const out = [];
  while (out.length < 3 && pool.length) {
    const i = Math.floor(rng() * pool.length);
    const p = pool.splice(i, 1)[0];
    if (p.rare && rng() < 0.5 && pool.length > 2) continue; // rare cards show up less
    out.push(p);
  }
  return out;
}

// Permanent upgrades chosen after each run (each pick = +1 level, max 10).
export const UPGRADES = [
  { id: 'size', icon: '🧊', name: 'Kartopu', desc: '+%4 başlangıç boyutu ve kar büyümesi' },
  { id: 'speed', icon: '🦬', name: 'Yeti Kaçağı', desc: '+%3 hız, çarpan +0,1' },
  { id: 'smash', icon: '🏔️', name: 'Çığ', desc: '+%10 yıkım puanı ve tonu' },
  { id: 'coin', icon: '💰', name: 'Altın', desc: '+%8 kar tanesi değeri' },
  { id: 'yeti', icon: '🧤', name: 'Kalın Eldiven', desc: 'Yeti %4 daha yavaş yaklaşır' },
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
