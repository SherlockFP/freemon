// KARTOPU ARENA - realistic player-style nickname generator (used for bot slots). Pure, no dependencies.
const TR = ['emre', 'kaan', 'mert', 'baris', 'efe', 'ahmet', 'zeynep', 'elif', 'ecem', 'burak', 'can', 'cem', 'deniz', 'ece', 'sude', 'oguz', 'yusuf', 'berk', 'arda', 'selin', 'ayse',
  'irem', 'hakan', 'onur', 'tolga', 'umut', 'kerem', 'melih', 'ozan', 'furkan', 'batu', 'eren', 'yigit', 'alp', 'mehmet', 'ali', 'ceren', 'naz', 'doruk', 'kuzey', 'tuna', 'asli', 'beren', 'gizem', 'hilal', 'bora'];
const TRW = ['kartal', 'kurt', 'aslan', 'kara', 'gece', 'golge', 'bozkurt', 'yildiz', 'ruzgar', 'simsek', 'tufan', 'atlas', 'akin', 'demir', 'celik', 'efsane', 'sultan', 'turbo'];
const EN = ['Shadow', 'nova', 'pixel', 'Zyrex', 'Max', 'Snow', 'Frost', 'Blaze', 'Echo', 'Ghost', 'Rex', 'Kai', 'Luna', 'Ace', 'Vex', 'Zed', 'Orion', 'Hawk', 'Wolf', 'Storm', 'Jinx', 'Neo', 'Axel', 'Mira', 'Dex'];
const CITY = ['34', '06', '35', '16', '01', '07', '61', '42', '26', '55', '41', '33', '27'];
const TAGS = ['TR', 'ARS', 'GS', 'FB', 'BJK', 'KRT', 'ICE', 'PRO', 'TRB', 'XD'];
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export function generateNames(count, avoid) {
  const used = new Set();
  if (avoid) for (const a of avoid) used.add(String(a).toLowerCase());
  const out = [];
  const pick = (a) => a[(Math.random() * a.length) | 0];
  const yr = () => String(1998 + ((Math.random() * 14) | 0));
  const nn = () => String(1 + ((Math.random() * 99) | 0));
  const make = () => {
    const r = Math.random();
    const n = pick(TR);
    if (r < 0.10) return n + '_' + pick(CITY);
    if (r < 0.18) return 'x' + cap(n) + 'x';
    if (r < 0.27) return cap(n) + yr();
    if (r < 0.33) return n + pick(CITY);
    if (r < 0.38) return n + n[n.length - 1];
    if (r < 0.43) return n + '.' + pick(['kar', 'yil', 'er', 'gul', 'ak']);
    if (r < 0.47) return cap(n) + pick(['Pro', '_YT', 'TV', 'Gaming']);
    if (r < 0.51) return 'TR_' + cap(n);
    if (r < 0.55) return cap(pick(TRW)) + pick(['', '1903', '1907', '1905', '_' + nn(), nn()]);
    if (r < 0.59) return pick(['', 'Mr', 'xx']) + cap(pick(TRW)) + yr().slice(2);
    if (r < 0.63) return n;
    if (r < 0.68) return '[' + pick(TAGS) + '] ' + pick(['Kurt', 'deniz', 'Efe', 'can', 'Mert', 'Alp', 'bora', 'Kaan']);
    if (r < 0.74) return pick(EN) + '_' + nn();
    if (r < 0.79) return 'Its' + cap(pick(EN));
    if (r < 0.83) return 'Lil' + cap(pick(EN));
    if (r < 0.88) return pick(EN) + pick(['xd', 'yt', 'x', '07', '99', '_tr', 'z']);
    if (r < 0.92) return pick(EN).toLowerCase();
    if (r < 0.96) return pick(EN) + pick(EN).toLowerCase();
    return pick(TR) + '_' + pick(TR) + pick(['', '06', '34']);
  };
  let guard = 0;
  while (out.length < count && guard++ < count * 40) {
    let s = make();
    if (s.length > 14) s = s.slice(0, 14);
    const k = s.toLowerCase();
    if (used.has(k)) continue;
    used.add(k);
    out.push(s);
  }
  while (out.length < count) out.push('player' + (1000 + out.length));
  return out;
}

/** short, lowercase, player-like chat lines for bots */
export const BOT_CHAT = ['gg', 'selam', 'sa', 'naber', 'kacin buyuk geliyor', 'lan ne ara buyudun', 'ayyy yutuldum', 'gg ez', 'kim yuttu beni', 'bu harita cok buyuk',
  'buzda kaydim ya', 'firtina geliyor dikkat', 'takim kuralim mi', 'iyi oyundu', 'bi dakka', 'yardim', 'hahaha', 'oha', 'nasil o kadar buyudun', 'ice girmeyin kayiyorsunuz',
  'hello', 'lol', 'nice one', 'gg wp', 'run', 'rip', 'bro what', 'ok', 'tamam', 'sakin ol', 'bol yem var burada', 'altin kar tanesi gordum'];
