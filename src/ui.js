// ui.js — HUD, result screens and the soft (non-blocking) feedback layer.
//
// Contracts other packages call (always with ?. on their side):
//   buffAdd(id, icon, name, secs) · buffTick([{id,left,total}]) · buffRemove(id)
//   turnCue(dir:-1|0|1, urgency 0..1) · hunger(frac 0..1, warn) · stompCombo(n)
//   cigHud({tons, dist, tierName, frac, best}) · cigTier(name) · toastSoft(text)
// Everything lives at the top / bottom edge of the screen: the middle strip (the reaction zone) stays empty.
import { meta } from './meta.js';
import { save } from './save.js';
import { nextGoal } from './shop.js';

const $ = (id) => document.getElementById(id);

const NF = new Intl.NumberFormat('tr-TR');
export const fmtN = (n) => NF.format(Math.max(0, Math.round(Number.isFinite(n) ? n : 0)));
export function fmtTons(t) {
  const kg = Math.round(t * 1000);
  if (kg < 1000) return `${kg} kg`;
  const t1 = Math.round(t * 10) / 10;
  if (t1 < 10) return `${t1.toFixed(1).replace('.', ',')} ton`;
  return `${NF.format(Math.round(t))} ton`;
}
const clamp01 = (x) => (x > 0 ? (x < 1 ? x : 1) : 0);
// Tiny sound hooks (main.js exposes the audio engine as window.__cigSfx); every one is optional and rate-limited inside audio.js.
function snd(name, a) {
  try { const s = typeof window !== 'undefined' ? window.__cigSfx : null; if (s && s[name]) s[name](a); } catch { /* audio is optional */ }
}

// The boot splash (index.html) goes away as soon as any real screen shows.
export function hideBoot() {
  const b = typeof document !== 'undefined' ? document.getElementById('boot') : null;
  if (!b) return;
  b.classList.add('out');
  setTimeout(() => b.remove(), 300);
}

// What killed you -> headline + one short tip. Used by the result screen (and exported for the runner / menus).
const DEATH = {
  wall: { icon: '🚧', title: 'DÖNEMEDİN!', tip: 'Kavşakta okun gösterdiği yöne kaydır.' },
  turn: { icon: '🚧', title: 'DÖNEMEDİN!', tip: 'Kavşakta okun gösterdiği yöne kaydır.' },
  turnFall: { icon: '🕳️', title: 'DÜŞTÜN!', tip: 'Kavşağı geç kaçırdın. Okları erken takip et.' },
  melt: { icon: '💧', title: 'ERİDİN!', tip: 'Kar yığınlarını ve kar izlerini topla, boyunu koru.' },
  yeti: { icon: '👹', title: 'YETİ YAKALADI!', tip: 'Üst üste çarpma. Yeti ensende bekliyor.' },
  explode: { icon: '💥', title: 'PATLADIN!', tip: 'Cam top tek çarpmaya dayanmaz.' },
  fall: { icon: '🕳️', title: 'DÜŞTÜN!', tip: 'Boşlukları zıplayarak geç.' },
  smash: { icon: '💢', title: 'ÇARPTIN!', tip: 'Büyük engellerin yanından dolan.' },
  finish: { icon: '🏁', title: 'BİTİŞ!', tip: '' },
};
const KILL_TIP = {
  rock: 'Küçük kayaya zıpla, büyük kayanın yanından dolan.',
  boulder: 'Gölgeye dikkat: yuvarlanan kaya şeridi kapatır.',
  overhead: 'Üstten geçen barın altından eğilerek geç.',
  laser: 'Lazerin altından eğilerek geç.',
  slidewall: 'Kayan duvarın açıklığına gir.',
  oncoming: 'Karşıdan gelen araca çarpma, şerit değiştir.',
};
export function runnerDeathText(cause, killKind) {
  const d = DEATH[cause] || { icon: '❄️', title: 'OLMADI!', tip: '' };
  return { icon: d.icon, title: d.title, tip: (killKind && KILL_TIP[killKind]) || d.tip };
}

// buff colours (ring); unknown ids get a stable hue
const BUFF_COL = { miknatis: '#ff7a7a', kar: '#9be7ff', kabuk: '#ffd23a', akis: '#7dff9a', altin: '#ffc21a', yay: '#c79bff', donma: '#bfe9ff', yetikov: '#ffa05a', dev: '#ff8ad0' };
function buffColor(id) {
  if (BUFF_COL[id]) return BUFF_COL[id];
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) % 360;
  return `hsl(${h} 85% 62%)`;
}
const fmtClock = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

export class UI {
  constructor() {
    this.el = {
      hud: $('hud'), level: $('hud-level'), prog: $('hud-prog'), dot: $('hud-dot'), tons: $('hud-tons'), combo: $('hud-combo'),
      floats: $('floats'), banner: $('banner'), hint: $('hint'),
      menu: $('menu'), menuLevel: $('menu-level'), menuStars: $('menu-stars'), daily: $('btn-daily'),
      result: $('result'), resTitle: $('res-title'), resStars: $('res-stars'), resPct: $('res-pct'), resTons: $('res-tons'), resSub: $('res-sub'), resBadge: $('res-badge'),
      next: $('btn-next'), retry: $('btn-retry'), menuBtn: $('btn-menu'), toast: $('toast'), pause: $('pause'), debug: $('debug'),
      sound: $('btn-sound'), haptic: $('btn-haptic'),
      coins: $('hud-coins'), vitals: $('hud-vitals'), pips: $('hud-pips'), grow: $('hud-grow'), powers: $('hud-powers'),
      yeti: $('hud-yeti'), yetiFill: $('hud-yetifill'), yetiLbl: $('hud-yeti-lbl'), goal: $('hud-goal'), goalFill: $('hud-goal-fill'), goalLbl: $('hud-goal-lbl'),
      flow: $('hud-flow'), flowFill: $('hud-flow-fill'), flowLbl: $('hud-flow-lbl'), record: $('hud-record'), resExtra: $('res-extra'), resCoins: $('res-coins'), menuBest: $('menu-best'), resLabel: document.querySelector('.res-label'),
      // v2
      buffs: $('buffs'), buffFly: $('buff-fly'), hunger: $('hunger'), hgFill: $('hg-fill'), hgIco: $('hg-ico'), turn: $('turn-cue'), stomp: $('stomp'),
      cigHud: $('cig-hud'), cgTn: $('cg-tn'), cgFill: $('cg-fill'), cgDist: $('cg-dist'), cgBest: $('cg-best'), cigBanner: $('cig-banner'), cbN: $('cb-n'),
      toastSoft: $('toast-soft'), tutor: $('tutor'), revive: $('revive-panel'), rvTitle: $('rv-title'), rvDist: $('rv-dist'), btnRevive: $('btn-revive'), btnReviveEnd: $('btn-revive-end'),
    };
    this.floatCount = 0;
    try { meta.onStamp((d) => this.toastSoft(`🛂 YENİ DAMGA! ${d.name}`, { icon: d.icon })); } catch { /* ignore */ }
    this.lastTonsText = '';
    this.pulseT = 0;
    this.timers = [];
    this.buffMap = new Map();
    this.reviveFn = null;
    this._lastFloat = 0;
    this._banAt = 0; this._banLv = 0;
    this._tcDir = 0; this._tcU = -1; this._hgOn = false; this._hgQ = -1; this._hgHue = -1; this._hgWarn = false;
    this._stompAt = 0; this._cg = { kg: -1, tnRaw: null, fill: -1, dm: -1, bk: -1 };
    this._tsLast = ''; this._tsAt = 0;
    this._tutorTap = null;
    // A revive button wired through the result payload (onRevive) must win over any generic btn-next handler.
    this.el.next?.addEventListener('click', (e) => {
      if (this.reviveFn) { e.stopImmediatePropagation(); e.stopPropagation(); const fn = this.reviveFn; snd('ui', 'confirm'); try { fn(); } catch { /* the runner decides; never break the button */ } }
    });
    this.el.tutor?.addEventListener('click', (e) => { e.stopPropagation(); const fn = this._tutorTap; this.runnerTutor(null); if (fn) fn(); });
  }

  on(id, fn) {
    $(id).addEventListener('click', (e) => { e.stopPropagation(); fn(e); });
  }

  showMenu({ level, stars, dailyNum, dailyBest, theme }) {
    hideBoot();
    this.clearTimers();
    this.el.menu.classList.remove('hidden');
    this.el.result.classList.add('hidden');
    this.el.pause.classList.add('hidden');
    this.el.hud.classList.add('hidden');
    this.resetHud();
    this.el.menuLevel.textContent = theme ? `DAĞ ${level} · ${theme.toLocaleUpperCase('tr-TR')}` : `DAĞ ${level}`;
    this.el.menuStars.innerHTML = [0, 1, 2].map((i) => `<span class="${i < stars ? '' : 'off'}">★</span>`).join('');
    this.el.daily.textContent = dailyBest ? `🏔️ GÜNÜN DAĞI #${dailyNum} · ${fmtTons(dailyBest)}` : `🏔️ GÜNÜN DAĞI #${dailyNum}`;
  }

  // Clears every v2 HUD widget (buffs, hunger, turn arrow, stomp text, ÇIĞ block, banners, tutor, revive).
  resetHud() {
    this._sc = this._co = this._di = this._mu = null; // HUD number caches: the next frame rewrites everything
    this._prog = -1;
    this.lastVitals = '';
    this.el.hud.classList.remove('rush');
    this.buffClear();
    this.turnCue(0);
    this.hungerHide();
    this.cigReset();
    this.el.stomp.classList.add('hidden');
    this.el.cigBanner.classList.remove('on'); this.el.cigBanner.classList.add('hidden');
    this.el.buffFly.innerHTML = '';
    this._annReset();
    this.el.toastSoft.innerHTML = '';
    this.el.toastSoft.classList.remove('res');
    this.runnerTutor(null);
    this.hideRunnerRevive();
    this.el.banner.innerHTML = '';
    this.el.banner.classList.remove('runner');
    this.reviveFn = null;
  }

  // ---------- endless mode (YETİ RUSH) ----------
  runnerHud(on, biomeName) {
    hideBoot();
    this.el.menu.classList.add('hidden');
    this.el.result.classList.add('hidden');
    this.el.result.classList.toggle('runner', on);
    this.el.hud.classList.toggle('hidden', !on);
    this.el.hud.classList.remove('cig-endless');
    this.el.coins.classList.toggle('hidden', !on);
    this.el.vitals.classList.toggle('hidden', !on);
    this.el.yeti.classList.toggle('hidden', !on);
    this.el.flow.classList.toggle('hidden', !on);
    this.resetHud();
    this.el.hud.classList.toggle('rush', on);
    if (!on) this.runnerDanger(0, 0, 0);
    this.runnerGoal(null); // the runner switches it on once it knows the next goal (endless only)
    this.runnerSurge(false);
    this.el.record.classList.toggle('hidden', !on);
    this.lastFlow = this.lastRec = null;
    this.lastVitals = '';
    if (!on) return;
    this.el.banner.classList.add('runner');
    this.el.level.textContent = String(biomeName || '').toLocaleUpperCase('tr-TR');
    this.el.floats.innerHTML = '';
    this.floatCount = 0;
    this.comboReset();
    this.scoreReset();
    // the swipe hint only teaches brand-new players
    let runs = 0;
    try { runs = meta.stats().runs || 0; } catch { runs = 0; }
    this.hint(runs < 3, 'kaydır · yukarı: zıpla');
    this.lastBiome = biomeName;
  }

  runnerStats(score, coins, mult, biomeT, dist, biomeName) {
    // numbers are compared first: no string building / Intl formatting on frames where nothing visible changed
    const sc = Math.round(score);
    if (sc !== this._sc) this.scoreTo(sc);
    if (coins !== this._co || dist !== this._di) { this._co = coins; this._di = dist; this.el.coins.textContent = `❄️ ${coins}
${dist} m`; }
    if (biomeName && biomeName !== this.lastBiome) { this.el.level.textContent = String(biomeName).toLocaleUpperCase('tr-TR'); this.lastBiome = biomeName; }
    const mm = mult > 1 ? mult : 0;
    if (mm !== (this._mu || 0)) { this._mu = mm; this._cmRender(); }
    this.setProgress(biomeT);
  }

  // Size = health pips + growth, Yeti closeness, active power-ups. Understands both the old ({gap, yetiMax}) and the new
  // ({yeti: {mode: 'stumble'|'hold'|null, frac}}) shape.
  runnerVitals(v) {
    const { tier, tiers, grow, gap, yetiMax, helmet, helmetT, magnet, rocket, x2, superjump, sled, sledCd, yeti } = v;
    const ym = yeti ? yeti.mode || '' : '';
    const yf = yeti ? Math.round(clamp01(yeti.frac) * 50) : (yetiMax ? Math.round(clamp01(1 - gap / yetiMax) * 50) : 0);
    const L = this._vit || (this._vit = { tier: -2, g: -1, yf: -1, ym: '', h: 0, m: 0, r: 0, x: 0, s: 0, sl: 0, sc: 0 });
    const gq = Math.round(grow * 20);
    if (this.lastVitals !== '' && L.tier === tier && L.g === gq && L.yf === yf && L.ym === ym && L.h === (helmet ? 1 : 0) && L.m === (magnet ? 1 : 0) && L.r === (rocket ? 1 : 0)
      && L.x === (x2 ? 1 : 0) && L.s === (superjump ? 1 : 0) && L.sl === (sled ? 1 : 0) && L.sc === (sledCd ? 1 : 0)) return;
    L.tier = tier; L.g = gq; L.yf = yf; L.ym = ym; L.h = helmet ? 1 : 0; L.m = magnet ? 1 : 0; L.r = rocket ? 1 : 0; L.x = x2 ? 1 : 0; L.s = superjump ? 1 : 0; L.sl = sled ? 1 : 0; L.sc = sledCd ? 1 : 0;
    this.lastVitals = 'x';
    if (this.lastTier !== tier || !this.el.pips.children.length) {
      this.lastTier = tier;
      let html = '';
      for (let i = 0; i < tiers; i++) {
        const s = 12 + i * 3.5;
        const cls = i > tier ? 'off' : tier === 0 ? 'danger' : '';
        html += `<div class="pip ${cls}" style="width:${s}px;height:${s}px"></div>`;
      }
      this.el.pips.innerHTML = html;
    }
    this.el.grow.style.width = `${Math.round(clamp01(grow) * 100)}%`;
    if (yeti || yetiMax) {
      const close = yeti ? clamp01(yeti.frac) : clamp01(1 - gap / yetiMax);
      this.el.yetiFill.style.width = `${Math.round(close * 100)}%`;
      this.el.yeti.classList.toggle('close', yeti ? ym === 'stumble' : gap < 14);
      this.el.yetiLbl.textContent = ym === 'stumble' ? 'YETİ ARKANDA!' : ym === 'hold' ? 'YETİ ENSENDE' : '';
    }
    this.el.powers.textContent = `${sled ? '🛷' : ''}${helmet ? '⛑️' : ''}${magnet ? '🧲' : ''}${rocket ? '🚀' : ''}${x2 ? '✖️+3' : ''}${superjump ? '👟' : ''}`;
  }

  // red tick on the size bar when smashing costs snow
  runnerSizeTick() {
    const gb = $('hud-growbar');
    if (!gb) return;
    gb.classList.remove('tick');
    void gb.offsetWidth;
    gb.classList.add('tick');
    setTimeout(() => gb.classList.remove('tick'), 520);
  }

  // ---------- result screen (YETİ RUSH) ----------
  // p: { title?, cause?, killKind?, tip?, distance, score, coins, best, bestDist, isBest, isBestDist, canRevive, reviveCost, crystals,
  //      rank, toRecord, missions?, onRevive? }. No box overlay, no upgrade card, no chained popups.
  showRunnerResult(p) {
    const { distance = 0, score = 0, coins = 0, best = 0, canRevive = false, rank = 0, toRecord = 0, onRevive = null } = p || {};
    this.runnerDanger(0, 0, 0);
    this.runnerGoal(null);
    this.runnerSurge(false);
    this.clearTimers();
    // (the buff icons stay in the hidden #hud on purpose: a revive continues the same run with the same cards)
    this.turnCue(0);
    this.hideRunnerRevive();
    this.runnerTutor(null);
    this.el.hud.classList.add('hidden');
    this.el.coins.classList.add('hidden');
    this.el.flow.classList.add('hidden');
    this.el.record.classList.add('hidden');
    this.el.vitals.classList.add('hidden');
    this.el.yeti.classList.add('hidden');
    this.el.toastSoft.classList.add('res');
    this.hint(false);

    const dt = runnerDeathText(p && p.cause, p && p.killKind);
    const title = (p && p.cause && DEATH[p.cause] ? dt.title : p && p.title) || dt.title;
    let bestDist = p && p.bestDist;
    if (!(bestDist > 0)) { try { bestDist = save.runnerBestDist(); } catch { bestDist = 0; } }
    const isRec = !!(p && (p.isBestDist ?? p.isBest));

    // what the soft toasts / mission rows should say (queued mid-run notices are drained here, never shown during play)
    const mrep = this.missionBlock(p && p.missions);

    const ex = this.el.resExtra;
    let html = '';
    const tipTxt = (p && p.tip) || dt.tip;
    let note = '';
    if (isRec) note = '';
    else if (toRecord > 0 && toRecord < Math.max(400, distance * 0.6)) note = `Rekora ${fmtN(toRecord)} m kaldı!`;
    else if (rank > 0 && rank <= 3) note = `#${rank}. en iyi koşun`;
    const isScoreRec = !!(p && p.isBest) || isRec;
    const chips = [`<div class="rx-chip${isScoreRec ? ' gold' : ''}"><small>EN İYİ</small><b>${isScoreRec ? '★ ' : ''}${fmtN(Math.max(best, score))}</b></div>`];
    if (coins) chips.push(`<div class="rx-chip"><small>KAZANÇ</small><b>❄️ +${fmtN(coins)}</b></div>`);
    if ((this._bestCombo || 0) >= 3) chips.push(`<div class="rx-chip"><small>KOMBO</small><b>🔥 x${this._bestCombo}</b></div>`);
    html += `<div class="rx-stats">${chips.join('')}</div>`;
    if (note) html += `<div class="rx-line">${note}</div>`;
    if (!isRec && tipTxt) html += `<div class="rx-dim">${tipTxt}</div>`;
    html += mrep.html;
    html += this.goalBlock(coins);
    ex.innerHTML = html;
    ex.classList.toggle('hidden', !html);

    this.el.result.classList.remove('hidden');
    this.el.result.classList.add('runner');
    this.el.resTitle.textContent = title;
    this.el.resBadge.classList.toggle('hidden', !isRec);
    this.el.resLabel.textContent = 'metre';
    this.el.resSub.textContent = isRec ? '' : `REKOR ${fmtN(bestDist)} m`;
    this.el.resCoins.classList.add('hidden');
    this.el.resCoins.innerHTML = '';

    // buttons: TEKRAR is the big thumb-zone button, MENÜ small, BENİ KURTAR only when you can really pay for it
    let cost = p && p.reviveCost ? p.reviveCost : 0;
    let cr = p && Number.isFinite(p.crystals) ? p.crystals : null;
    try { if (cr === null) cr = save.crystals(); } catch { cr = 0; }
    const show = !!canRevive && cost > 0 ? cr >= cost : !!canRevive && cost === 0 && cr > 0;
    this.reviveFn = show && typeof onRevive === 'function' ? onRevive : null;
    this.el.next.classList.toggle('hidden', !show);
    this.el.next.classList.toggle('revive', show);
    this.el.next.classList.remove('next');
    this.el.next.textContent = show ? `BENİ KURTAR 💎${cost || 1}` : '';
    this.el.retry.classList.remove('hidden');
    this.el.retry.textContent = '↻ TEKRAR';
    this.el.menuBtn.classList.remove('hidden');

    this.resultFx(isScoreRec);
    this.goalAnimate();
    this.countUp(distance, (v, e) => {
      this.el.resPct.textContent = `${fmtN(v)} m`;
      this.el.resTons.textContent = `SKOR ${fmtN(score * e)}`;
    }, 1400, { tick: true, done: () => this.resultScoreDone(isScoreRec) });
    this.flushNotices(mrep.notices);
  }

  // Missions block (3 rows + multiplier) for the result screens. Drains the queued notices.
  missionBlock(fallback) {
    let rep = null;
    try { rep = meta.missionsReport(); } catch { rep = null; }
    let notices = [];
    try { notices = meta.takeNotices(); } catch { notices = []; }
    const rows = rep && rep.rows ? rep.rows : Array.isArray(fallback) ? fallback.slice(0, 3) : [];
    if (!rows.length) return { html: '', notices };
    const mult = rep ? rep.mult : 1;
    const up = !!(rep && rep.setDone);
    let html = `<div class="rx-head"><span>GÖREVLER</span><span class="rx-mult${up ? ' up' : ''}">ÇARPAN x${mult}${up ? ' ▲' : ''}</span></div>`;
    for (const m of rows.slice(0, 3)) {
      const f = clamp01((m.value || 0) / (m.goal || 1));
      html += `<div class="rx-m${m.done ? ' done' : ''}${m.justDone ? ' just' : ''}"><span>${m.icon || '📜'}</span><span class="rx-t">${m.text}</span><span class="rx-b"><i style="width:${Math.round(f * 100)}%"></i></span><span class="rx-c">${m.done ? '✓' : ''}</span></div>`;
    }
    return { html, notices };
  }

  // The next thing coins can buy (a skin, a trail or an upgrade) as a progress bar.
  goalBlock(gained = 0) {
    gained = Math.max(0, Number(gained) || 0);
    let g = null;
    try { g = nextGoal(save); } catch { g = null; }
    let li = null;
    try { li = meta.levelInfo(); } catch { li = null; }
    let dt = null;
    try {
      const ts = meta.dailyTasks().tasks.filter((t) => !t.done);
      ts.sort((x, y) => (y.value / y.goal) - (x.value / x.goal));
      dt = ts[0] || null;
    } catch { dt = null; }
    if (!g && !li && !dt) return '';
    let h = '<div class="rx-goal"><div class="rg-h">SONRAKİ ÖDÜL</div>';
    const bar = (from, to, cls = '') => `<div class="rg-b ${cls}"><i class="gain" style="width:${Math.round(clamp01(from) * 100)}%" data-to="${Math.round(clamp01(to) * 100)}"></i></div>`;
    if (g) {
      const left = Math.max(0, g.price - g.have);
      const nm = String(g.name).replace(/\s*Sv\d+$/, '');
      const lv = (nm.match(/[aeıioöuüAEIİOÖUÜ](?=[^aeıioöuüAEIİOÖUÜ]*$)/) || ['e'])[0];
      const back = /[aıouAIOU]/.test(lv), endsV = /[aeıioöuüAEIİOÖUÜ]$/.test(nm);
      const dat = `${nm}'${endsV ? 'y' : ''}${back ? 'a' : 'e'}`;
      h += left > 0 ? `<div class="rg-goal">${g.icon} ${dat} <b>${fmtN(left)} ❄️</b> kaldı</div>` : `<div class="rg-goal">${g.icon} ${g.name} <b>HAZIR!</b></div>`;
      h += bar(g.price > 0 ? Math.max(0, g.have - gained) / g.price : 0, g.frac);
      h += `<div class="rg-sub"><span>${fmtN(g.have)} / ${fmtN(g.price)} ❄️</span>${gained ? `<em>+${fmtN(gained)}</em>` : ''}</div>`;
    }
    if (li) h += `<div class="rg-row"><span>SEVİYE ${li.level + 1}</span>${bar(li.frac, li.frac, 'sm')}<b>${fmtN(Math.max(0, li.need - li.cur))} XP</b></div>`;
    if (dt) h += `<div class="rg-row"><span>${dt.icon} ${dt.text}</span>${bar(dt.value / dt.goal, dt.value / dt.goal, 'sm')}<b>${fmtN(dt.value)}/${fmtN(dt.goal)}</b></div>`;
    return h + '</div>';
  }

  // Animate the NEXT REWARD bars from their pre-run fill to now.
  goalAnimate() {
    this.timers.push(setTimeout(() => {
      for (const i of this.el.resExtra.querySelectorAll('.rg-b i.gain')) i.style.width = `${i.dataset.to}%`;
    }, 900));
  }

  // One soft toast per completed mission (max 3), a multiplier toast when the set is done. Achievements are credited silently.
  flushNotices(list) {
    if (!list || !list.length) return;
    let n = 0;
    for (const x of list) {
      if (x.kind === 'mission' && n < 3) { const t = x; this.timers.push(setTimeout(() => this.toastSoft(`${t.icon || '🎯'} GÖREV TAMAM: ${t.text}`), 700 + n * 900)); n++; }
      else if (x.kind === 'missionset') {
        const t = x, r = x.reward || {};
        const gift = `${r.coins ? ` · +❄️${fmtN(r.coins)}` : ''}${r.crystals ? ` +💎${r.crystals}` : ''}${r.boxes ? ' +🎁' : ''}`;
        this.timers.push(setTimeout(() => this.toastSoft(`✖️ ÇARPAN x${t.multiplier}!${gift || ' Görev seti tamam'}`), 700 + n * 900));
        n++;
      }
    }
  }

  countUp(target, fn, dur = 800, opt = null) {
    const t0 = performance.now();
    let lastTick = 0;
    const tick = () => {
      const now = performance.now();
      const k = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      fn(target * e, e);
      if (opt && opt.tick && k < 1 && now - lastTick > 65) { lastTick = now; snd('ui'); }
      if (k < 1) this.raf = requestAnimationFrame(tick);
      else if (opt && opt.done) opt.done();
    };
    tick();
  }

  // Result-screen juice shared by both result screens: stat rows slide in, coins fly to the counter, record = confetti + glow.
  resultFx(rec) {
    const R = this.el.result;
    R.classList.remove('rec');
    this.el.resTons.classList.remove('pop');
    let i = 0;
    for (const ch of this.el.resExtra.children) { ch.classList.add('slidein'); ch.style.animationDelay = `${0.5 + i * 0.12}s`; i++; }
    if (rec) {
      R.classList.add('rec');
      this.timers.push(setTimeout(() => this.confetti(), 1100));
    }
    this.timers.push(setTimeout(() => this.coinFly(), 1000));
  }

  resultScoreDone(rec) {
    const t = this.el.resTons;
    t.classList.remove('pop'); void t.offsetWidth; t.classList.add('pop');
    if (rec) snd('chime'); else snd('ui', 'confirm');
  }

  confetti() {
    const R = this.el.result;
    const cols = ['#ffd23a', '#ff5c8a', '#4fd3ff', '#7dff6a', '#fff', '#b46bff'];
    const box = document.createElement('div');
    box.className = 'confetti';
    let h = '';
    for (let i = 0; i < 34; i++) {
      const a = Math.random() * Math.PI * 2, r = 90 + Math.random() * 190;
      h += `<i style="background:${cols[i % cols.length]};--x:${Math.round(Math.cos(a) * r)}px;--y:${Math.round(Math.sin(a) * r - 60)}px;--r:${Math.round(Math.random() * 720 - 360)}deg;animation-delay:${(Math.random() * 0.15).toFixed(2)}s"></i>`;
    }
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; h += `<b style="--x:${Math.round(Math.cos(a) * 130)}px;--y:${Math.round(Math.sin(a) * 130 - 60)}px">★</b>`; }
    box.innerHTML = h;
    R.appendChild(box);
    snd('chime');
    setTimeout(() => box.remove(), 2200);
  }

  coinFly() {
    const dst = this.el.resCoins, src = this.el.resPct;
    if (!dst || dst.classList.contains('hidden') || !dst.textContent) return;
    let a, b;
    try { a = src.getBoundingClientRect(); b = dst.getBoundingClientRect(); } catch { return; }
    for (let i = 0; i < 6; i++) {
      const c = document.createElement('div');
      c.className = 'coin-fly';
      c.textContent = '❄️';
      c.style.left = `${a.left + a.width / 2}px`; c.style.top = `${a.top + a.height / 2}px`;
      this.el.result.appendChild(c);
      const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
      try {
        const an = c.animate([{ transform: 'translate(-50%,-50%) scale(1.2)', opacity: 1 }, { transform: `translate(calc(-50% + ${dx * 0.5 + (i - 3) * 14}px),calc(-50% + ${dy * 0.3 - 30}px)) scale(1)`, opacity: 1, offset: 0.5 }, { transform: `translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(0.5)`, opacity: 0.6 }], { duration: 650, delay: i * 70, easing: 'ease-in', fill: 'backwards' });
        an.onfinish = () => { c.remove(); if (i === 5) { dst.classList.remove('pop'); void dst.offsetWidth; dst.classList.add('pop'); snd('ui'); } };
      } catch { c.remove(); }
    }
  }

  hideResult() {
    this.el.result.classList.remove('rec');
    this.el.result.querySelectorAll('.confetti,.coin-fly').forEach((n) => n.remove());
    this.clearTimers(); // pending "GÖREV TAMAM" toasts / count-ups belong to the result screen, not to the continued run
    this.el.toastSoft.classList.remove('res');
    this.el.toastSoft.innerHTML = '';
    this.el.result.classList.add('hidden');
    this.el.flow.classList.remove('hidden');
    this.lastFlow = null;
    this.el.record.classList.remove('hidden');
    this.el.hud.classList.remove('hidden');
    this.el.coins.classList.remove('hidden');
    this.el.vitals.classList.remove('hidden');
    this.el.yeti.classList.remove('hidden');
    this.reviveFn = null;
    this.lastVitals = '';
  }

  // Compat revive panel (thumb zone): the runner may still open it instead of putting BENİ KURTAR on the result screen.
  showRunnerRevive({ title, distance, cost, crystals }) {
    this.el.rvTitle.textContent = title || 'PATLADIN!';
    this.el.rvDist.textContent = `${fmtN(distance || 0)} m`;
    this.el.btnRevive.textContent = `BENİ KURTAR 💎${cost}`;
    this.el.btnRevive.classList.toggle('poor', Number.isFinite(crystals) && crystals < cost);
    this.el.btnReviveEnd.textContent = 'BİTİR';
    this.el.revive.classList.remove('hidden');
  }

  hideRunnerRevive() { this.el.revive.classList.add('hidden'); }

  // A red "!" over the lane something is coming down/at you (boulder shadow, oncoming snowcat).
  laneWarn(lane, kind, x, y) {
    const now = performance.now();
    if (now - (this._laneAt || 0) < 500) return;
    this._laneAt = now;
    const d = document.createElement('div');
    d.className = 'lane-warn';
    d.textContent = kind === 'boulder' ? '⚠' : '❗';
    if (Number.isFinite(x)) {
      // the runner projected the threat onto the screen: put the sign right there (kept off the very top / bottom edge)
      const H = window.innerHeight || 800;
      d.style.left = `${Math.round(Math.max(24, Math.min((window.innerWidth || 390) - 24, x)))}px`;
      if (Number.isFinite(y)) d.style.top = `${Math.round(Math.max(H * 0.2, Math.min(H * 0.62, y - 36)))}px`;
    } else d.style.left = `${50 + (lane - 1) * 26}%`;
    this.el.floats.appendChild(d);
    setTimeout(() => d.remove(), 1100);
  }

  // Compat for the old pick-1-of-3 cards: nothing blocks any more. Mid-run cards are resolved immediately (random pick) and shown
  // as a soft toast; the post-run permanent-upgrade card is never shown (upgrades are bought with ❄️ in the shop).
  showPerks(cards, title, onPick) {
    if (!cards || !cards.length) return;
    if (/KALICI/i.test(String(title))) return;
    const c = cards[Math.floor(Math.random() * cards.length)];
    this.toastSoft(`${c.icon} ${c.name}`);
    try { onPick && onPick(c); } catch { /* ignore */ }
  }

  // Score bonuses are additive now (they add to the x-multiplier): danger / chain / risk are the +N each contributes.
  runnerDanger(danger, chain, risk) {
    // called every frame: nothing is built (no array / string) unless one of the three numbers changed
    if (danger === this._dgD && chain === this._dgC && risk === this._dgR) return;
    this._dgD = danger; this._dgC = chain; this._dgR = risk;
    const el = this.dangerEl || (this.dangerEl = document.getElementById('danger'));
    const parts = [];
    if (risk) parts.push(`RİSK +${risk}`);
    if (danger > 0) parts.push(`TEHLİKE +${danger}`);
    if (chain > 0) parts.push(`ZİNCİR +${chain}`);
    const t = parts.join(' · ');
    if (t !== this.lastDanger) {
      this.lastDanger = t;
      el.textContent = t;
      el.classList.toggle('hidden', !t);
    }
  }

  // Goal strip under the score: mode 'cp' = next checkpoint (val = its distance), 'rec' = record in reach (val = metres
  // left), 'rage' = the Yeti's boulder barrage (fill = how much of it is behind you), 'new' = record just broken.
  // mode null hides it (campaign, menus). Only touches the DOM when something visible changed.
  runnerGoal(mode, val = 0, frac) {
    if (mode === 'fury') { if (frac === undefined) frac = val; val = 0; }
    if (frac === undefined) frac = 0;
    if (mode === 'cp' && frac < 0.8) mode = null;   // declutter: the checkpoint strip only shows in the last 20% of a layer
    const pct = Math.round(Math.max(0, Math.min(1, frac)) * 100);
    if (mode === this.gMode && val === this.gVal && pct === this.gPct) return;
    const g = this.el.goal, mChanged = mode !== this.gMode;
    if (mChanged) {
      g.classList.toggle('hidden', !mode);
      this.el.hud.classList.toggle('has-goal', !!mode);
      g.classList.remove('cp', 'rec', 'rage', 'new', 'fury');
      if (mode) g.classList.add(mode === 'boss' ? 'rage' : mode === 'fury' ? 'fury' : mode === 'cannon' ? 'rec' : mode);
    }
    if (mode && (mChanged || val !== this.gVal)) {
      this.el.goalLbl.textContent = mode === 'cp' ? `SIRADAKİ: ${val} m` : mode === 'rec' ? `REKORA ${val} m` : mode === 'new' ? 'YENİ REKOR!' : mode === 'cannon' ? `KAR KANONU: ${val}` : mode === 'boss' ? 'YETİ ÖNÜNDE!' : mode === 'fury' ? 'YETİ ÖFKESİ' : '⚠ YETİ ÖFKESİ';
    }
    if (mode && (mChanged || pct !== this.gPct)) this.el.goalFill.style.width = `${pct}%`;
    this.gMode = mode; this.gVal = val; this.gPct = pct;
  }

  // Checkpoint passed: the strip bounces.
  runnerGoalPop() {
    const g = this.el.goal;
    g.classList.remove('pop');
    void g.offsetWidth; // restart the animation
    g.classList.add('pop');
    clearTimeout(this.popT);
    this.popT = setTimeout(() => g.classList.remove('pop'), 650); // so the rage / record pulse can take over again
  }

  // Yeti lunge window: the Yeti gauge shakes red.
  runnerSurge(on) {
    if (on === this.surgeOn) return;
    this.surgeOn = on;
    this.el.yeti.classList.toggle('surge', on);
  }

  runnerFlow(lvl, frac) {
    const key = lvl * 100 + Math.round(frac * 50);
    if (key === this.lastFlow) return;
    this.lastFlow = key;
    this.el.flowFill.style.width = `${Math.round(frac * 100)}%`;
    this.el.flowLbl.textContent = lvl ? `AKIŞ +${lvl}` : 'AKIŞ';
    this.el.flow.className = `hud-flow l${lvl}${lvl === 0 && frac < 0.04 ? ' hidden' : ''}`;   // declutter: only while a streak is alive
  }

  // runnerRecord(bestDist, dist): distance record flag. Old callers pass only a score and get a plain label.
  runnerRecord(best, dist) {
    if (dist === undefined) {
      if (best === this.lastRec) return;
      this.lastRec = best;
      this.el.record.textContent = best ? `REKOR ${Math.round(best).toLocaleString('tr-TR')}` : '';
      return;
    }
    const over = dist > best;
    const km = over ? Math.floor(dist / 1000) : -1;
    const bq = Math.round(best);
    if (bq === this._rb && km === this._rk && this.lastRec === 'd') return;
    this._rb = bq; this._rk = km; this.lastRec = 'd';
    if (!best) { this.el.record.textContent = ''; return; }
    this.el.record.textContent = over ? `HEDEF ${km + 1} km` : `REKOR ${fmtN(best)} m`;
  }

  speedLines(k) {
    const el = this.speedEl || (this.speedEl = document.getElementById('speedlines'));
    const v = Math.max(0, Math.min(1, k));
    const q = Math.round(v * 10) / 10;
    if (q !== this.lastSpeed) { this.lastSpeed = q; el.style.opacity = String(q * 0.85); }
  }

  // No full-screen white flash: every kind is a soft edge vignette ('hit' red, 'gold' gold, the rest barely-there white).
  flash(kind = 'hit') {
    const el = this.flashEl || (this.flashEl = document.getElementById('flash'));
    const now = performance.now();
    if (now - (this._flashAt || 0) < 250) return;
    this._flashAt = now;
    el.className = '';
    void el.offsetWidth; // restart the animation
    el.className = kind;
  }

  setMenuBest(text) { this.el.menuBest.textContent = text; }

  startRun(label) {
    hideBoot();
    this.clearTimers();
    this.resetHud();
    this.el.resExtra?.classList.add('hidden');
    this.el.flow?.classList.add('hidden');
    this.el.record?.classList.add('hidden');
    this.el.vitals.classList.add('hidden');
    this.el.yeti.classList.add('hidden');
    this.el.result.classList.remove('runner');
    this.el.resCoins.classList.add('hidden');
    this.el.resLabel.textContent = 'kasaba yıkıldı';
    this.el.coins.classList.add('hidden');
    this.runnerGoal(null);
    this.el.hud.classList.remove('cig-endless');
    this.el.menu.classList.add('hidden');
    this.el.result.classList.add('hidden');
    this.el.hud.classList.remove('hidden');
    this.el.level.textContent = label;
    this.el.floats.innerHTML = '';
    this.floatCount = 0;
    this.comboReset();
    this.scoreReset();
  }

  hint(on, text = 'sürükle') {
    this.el.hint.classList.toggle('hidden', !on);
    if (on) this.el.hint.lastElementChild.textContent = text;
  }

  setTons(t) {
    const s = fmtTons(t);
    if (s !== this.lastTonsText) {
      this.el.tons.textContent = s;
      this.lastTonsText = s;
    }
  }

  pulse() {
    this.el.tons.classList.add('pulse');
    clearTimeout(this.pulseT);
    this.pulseT = setTimeout(() => this.el.tons.classList.remove('pulse'), 90);
  }

  setProgress(p) {
    const q = Math.round(Math.max(0, Math.min(1, p)) * 200) / 2; // 0.5 % steps: no DOM write when nothing visibly changed
    if (q === this._prog) return;
    this._prog = q;
    const v = `${q}%`;
    this.el.prog.style.width = v;
    this.el.dot.style.left = v;
  }

  // ÇIĞ swallow combo (external): same counter as the derived Yeti Rush one
  setCombo(n) {
    if (n > 0) this._extCombo = true;
    this._comboSet(n, 3200);
  }

  comboReset() {
    clearTimeout(this._dT);
    this._dN = 0; this._cmN = 0; this._mu = 0; this._bestCombo = 0; this._extCombo = false; this._cmT = 0;
    if (this._cmb) this._cmb.className = 'cmb';
  }

  _mkCmb() {
    const c = document.createElement('div');
    c.className = 'cmb';
    c.innerHTML = '<span class="cmb-n"></span><i class="cmb-bar"><b></b></i>';
    this.el.hud.appendChild(c);
    this._cmb = c; this._cmn = c.firstChild; this._cmbar = c.lastChild.firstChild;
    return c;
  }

  // one tidy row under the score: 'KOMBO x34 · x5 SKOR' (+ drain bar beneath while a combo runs)
  _cmRender() {
    const c = this._cmb || this._mkCmb();
    if (c.classList.contains('broke')) return;
    const n = this._cmN >= 3 ? this._cmN : 0, mu = this._mu || 0;
    if (!n && !mu) { if (c.classList.contains('on')) c.className = 'cmb'; return; }
    const parts = [];
    if (n) parts.push(`${this._cmT >= 3 ? '\u{1F525} ' : ''}KOMBO x${n}`);
    if (mu > 1) parts.push(`x${mu} SKOR`);
    this._cmn.textContent = parts.join(' · ');
    if (!n) { const lv = mu >= 6 ? 3 : mu >= 4 ? 2 : mu >= 3 ? 1 : 0; c.className = `cmb on t${lv} nobar`; }
  }

  _comboSet(n, drainMs) {
    const c = this._cmb || this._mkCmb();
    if (n >= 3) {
      if (n === this._cmN) return;
      const rose = n > this._cmN;
      this._cmN = n;
      if (n > (this._bestCombo || 0)) this._bestCombo = n;
      const t = n >= 50 ? 4 : n >= 20 ? 3 : n >= 10 ? 2 : n >= 5 ? 1 : 0;
      const tierUp = t > (this._cmT || 0);
      this._cmT = t;
      c.className = `cmb on t${t}`;
      this._cmRender();
      void c.offsetWidth;
      c.classList.add(tierUp ? 'tierup' : 'hit');
      if (tierUp) snd('chime');
      if (rose) {
        const b = this._cmbar;
        b.style.transition = 'none'; b.style.transform = 'scaleX(1)';
        void b.offsetWidth;
        b.style.transition = `transform ${drainMs}ms linear`; b.style.transform = 'scaleX(0)';
      }
    } else if (this._cmN >= 3) {
      this._cmN = 0; this._cmT = 0;
      this._cmn.textContent = 'KOMBO KIRILDI';
      c.className = 'cmb broke';
      clearTimeout(this._cmBk);
      this._cmBk = setTimeout(() => { if (c.classList.contains('broke')) { c.className = 'cmb'; this._cmRender(); } }, 1150);
    }
  }

  // ---------- score feel: smooth count-up, bump + flash on big chunks, milestones, popups, record ribbon ----------
  scoreReset() {
    cancelAnimationFrame(this._sraf);
    this._sraf = 0; this._disp = 0; this._tgt = 0; this._rate = 0; this._sc = -1; this._shown = -1; this._recShown = false; this._pops = 0;
    let b = 0;
    try { b = save.runnerBest(); } catch { b = 0; }
    this._best = b;
    this.el.tons.className = 'hud-tons';
    this.el.tons.textContent = '0';
  }

  scoreTo(sc) {
    const prev = this._sc < 0 ? 0 : this._tgt;
    this._sc = sc; this._tgt = sc;
    const delta = sc - prev;
    if (delta < 0) { this._disp = sc; this._shown = sc; this.el.tons.textContent = fmtN(sc); this.lastTonsText = this.el.tons.textContent; return; }
    const big = delta >= 20 && delta > this._rate * 4 + 10;
    if (!big) this._rate = this._rate * 0.9 + delta * 0.1;
    const el = this.el.tons;
    if (big) {
      const k = delta >= 300 ? 1.5 : delta >= 100 ? 1.3 : 1.18;
      try { el.animate([{ transform: 'scale(1)', color: '#fff' }, { transform: `scale(${k})`, color: '#ffd23a', offset: 0.3 }, { transform: 'scale(1)', color: '#fff' }], { duration: 420, easing: 'cubic-bezier(.2,1.6,.4,1)' }); } catch { /* optional */ }
      this.scorePop(delta);
      this.comboDerive();
    }
    const m = (v, st) => Math.floor(v / st);
    if (m(sc, 1000) > m(prev, 1000)) {
      const ms = m(sc, 10000) > m(prev, 10000) ? 3 : m(sc, 5000) > m(prev, 5000) ? 2 : 1;
      el.classList.remove('gold1', 'gold2', 'gold3'); void el.offsetWidth; el.classList.add(`gold${ms}`);
      snd('chime');
    }
    if (!this._recShown && this._best > 0 && sc > this._best) { this._recShown = true; this.recRibbon(); }
    if (!this._sraf) this._sraf = requestAnimationFrame(this._scoreTick || (this._scoreTick = () => this.scoreStep()));
  }

  scoreStep() {
    this._sraf = 0;
    const d = this._tgt - this._disp;
    this._disp = Math.abs(d) < 1.5 ? this._tgt : this._disp + d * 0.2;
    const r = Math.round(this._disp);
    if (r !== this._shown) { this._shown = r; const s = fmtN(r); this.el.tons.textContent = s; this.lastTonsText = s; }
    if (this._disp !== this._tgt) this._sraf = requestAnimationFrame(this._scoreTick);
  }

  scorePop(delta) {
    if (this._pops >= 3 || typeof document === 'undefined') return;
    this._pops++;
    const d = document.createElement('div');
    d.className = 'score-pop';
    d.textContent = `+${fmtN(delta)}`;
    this.el.hud.appendChild(d);
    let dx = 0, dy = -90;
    const W = window.innerWidth || 390, H = window.innerHeight || 800;
    try { const r = this.el.tons.getBoundingClientRect(); dx = r.left + r.width / 2 - W / 2; dy = r.top + r.height / 2 - H * 0.3; } catch { /* default */ }
    const done = () => { d.remove(); this._pops--; };
    try {
      const a = d.animate([{ transform: 'translate(-50%,0) scale(0.6)', opacity: 0 }, { transform: 'translate(-50%,0) scale(1.35)', opacity: 1, offset: 0.2 }, { transform: 'translate(-50%,0) scale(1.2)', opacity: 1, offset: 0.4 }, { transform: `translate(calc(-50% + ${dx}px),${dy}px) scale(0.45)`, opacity: 0.1 }], { duration: 750, easing: 'ease-in' });
      a.onfinish = done;
    } catch { done(); }
  }

  recRibbon() {
    const r = document.createElement('div');
    r.className = 'rec-ribbon';
    r.textContent = '★ YENİ REKOR! ★';
    this.el.hud.appendChild(r);
    snd('chime');
    setTimeout(() => r.remove(), 2000);
  }

  // no combo data from the runner: a big score chunk is a combo hit, 2.2 s without one breaks it
  comboDerive() {
    if (this._extCombo) return;
    this._dN = (this._dN || 0) + 1;
    this._comboSet(this._dN, 2200);
    clearTimeout(this._dT);
    this._dT = setTimeout(() => { this._comboSet(0); this._dN = 0; }, 2200);
  }

  // Floating text is rationed (plain ones at most one a second, the rarer big/bad ones every 0.65 s) and never piles up.
  float(text, x, y, cls = '') {
    const now = performance.now();
    const prio = cls === 'big' || cls === 'bad';
    if (now - this._lastFloat < (prio ? 650 : 1000) || this.floatCount > 2) return;
    this._lastFloat = now;
    const d = document.createElement('div');
    d.className = `float ${cls}`;
    d.textContent = text;
    d.style.left = `${x}px`;
    d.style.top = `${y}px`;
    this.floatCount++;
    d.addEventListener('animationend', () => { d.remove(); this.floatCount--; });
    this.el.floats.appendChild(d);
  }

  banner(text, level = 1) {
    const now = performance.now();
    // a small banner never stomps a bigger one that is still on screen
    if (now - this._banAt < 900 && level < this._banLv) return;
    this._banAt = now; this._banLv = level;
    this.el.banner.innerHTML = '';
    const b = document.createElement('div');
    b.className = `b l${level}`;
    b.textContent = text;
    this.el.banner.appendChild(b);
  }

  // ---------- v2 HUD API ----------

  // ---- buff cards: icon + radial countdown top-right, a 1 s fly-in card at the top edge on add ----
  buffAdd(id, icon, name, secs) {
    id = String(id);
    let b = this.buffMap.get(id);
    if (!b) {
      const el = document.createElement('div');
      el.className = 'buff';
      el.style.setProperty('--bc', buffColor(id));
      el.style.setProperty('--p', '1');
      el.innerHTML = '<span class="bi"></span>';
      el.firstChild.textContent = icon || '✨';
      el.setAttribute('aria-label', name || id);
      this.el.buffs.appendChild(el);
      b = { el, q: 72, total: secs, low: false };
      this.buffMap.set(id, b);
    } else {
      b.total = secs; b.q = 72; b.low = false;
      b.el.classList.remove('low', 'out');
      b.el.style.setProperty('--p', '1');
    }
    try { meta.track('buff', { id }); } catch { /* ignore */ }
    snd('chime');
    // fly-in card
    this._ann(() => this._buffCardNow(b, icon, name, secs), 1000);
  }

  _buffCardNow(b, icon, name, secs) {
    {
      const card = document.createElement('div');
      card.className = 'buff-card';
      const ic = document.createElement('div'); ic.className = 'bc-i'; ic.textContent = icon || '✨';
      const tx = document.createElement('div');
      const nm = document.createElement('div'); nm.className = 'bc-n'; nm.textContent = name || '';
      const sb = document.createElement('div'); sb.className = 'bc-s'; sb.textContent = `${fmtClock(secs)} SÜRESİNCE`;
      tx.appendChild(nm); tx.appendChild(sb);
      card.appendChild(ic); card.appendChild(tx);
      const r = b.el.getBoundingClientRect();
      const W = window.innerWidth || 390;
      card.style.setProperty('--dx', `${Math.round(r.left + r.width / 2 - W / 2)}px`);
      card.style.setProperty('--dy', `${Math.round(r.top + r.height / 2 - 188)}px`);
      card.addEventListener('animationend', () => card.remove());
      this.el.buffFly.appendChild(card);
    }
  }

  // list = [{id, left, total}] every ~0.25 s
  buffTick(list) {
    if (!list) return;
    for (let i = 0; i < list.length; i++) {
      const it = list[i];
      const b = this.buffMap.get(String(it.id));
      if (!b) continue;
      const total = it.total > 0 ? it.total : b.total || 1;
      const q = Math.round(clamp01(it.left / total) * 72);
      if (q !== b.q) { b.q = q; b.el.style.setProperty('--p', String(q / 72)); }
      const low = it.left > 0 && it.left <= Math.min(8, total * 0.3); // 90 s cards blink for their last 8 s, a 5 s power-up only at the very end
      if (low !== b.low) { b.low = low; b.el.classList.toggle('low', low); }
    }
  }

  buffRemove(id) {
    id = String(id);
    const b = this.buffMap.get(id);
    if (!b) return;
    this.buffMap.delete(id);
    b.el.classList.remove('low');
    b.el.classList.add('out');
    setTimeout(() => b.el.remove(), 320);
  }

  buffClear() {
    for (const b of this.buffMap.values()) b.el.remove();
    this.buffMap.clear();
    if (this.el.buffs) this.el.buffs.innerHTML = '';
  }

  // ---- turn cue: a big chevron on the turn side in the bottom corner; pulses faster as the corner nears ----
  turnCue(dir, urgency = 0) {
    const el = this.el.turn;
    if (!dir) {
      if (this._tcDir) { this._tcDir = 0; this._tcU = -1; el.classList.add('hidden'); }
      return;
    }
    const d = dir < 0 ? -1 : 1;
    const u = Math.round(clamp01(urgency) * 10) / 10;
    if (d !== this._tcDir) {
      this._tcDir = d;
      el.className = d < 0 ? 'tc-l' : 'tc-r';
      this._tcU = -1;
    }
    if (u !== this._tcU) {
      this._tcU = u;
      el.style.setProperty('--tcp', `${(0.8 - 0.58 * u).toFixed(2)}s`);
    }
  }
  runnerTurn(dir) { this.turnCue(dir || 0, this._tcU > 0 ? this._tcU : 0.3); }
  runnerTurnOk(dir) {
    const el = this.el.turn;
    if (!dir) return;
    snd('turn');
    this.turnCue(dir, 1);
    el.classList.add('ok');
    clearTimeout(this._tcOkT);
    this._tcOkT = setTimeout(() => { el.classList.remove('ok'); this.turnCue(0); }, 450);
  }

  // ---- hunger / size meter: blue -> red, pulses when warn ----
  hunger(frac, warn = false) {
    if (!this._hgOn) {
      this._hgOn = true;
      this._hgQ = -1; this._hgHue = -1; this._hgWarn = false;
      this.el.hunger.classList.remove('hidden');
      this.el.hud.classList.add('has-hunger');
    }
    const f = clamp01(frac);
    const q = Math.round(f * 100);
    if (q !== this._hgQ) {
      this._hgQ = q;
      this.el.hgFill.style.setProperty('--f', String(q / 100));
      const hue = Math.round(205 * clamp01((f - 0.1) / 0.55) / 4) * 4;
      if (hue !== this._hgHue) { this._hgHue = hue; this.el.hgFill.style.setProperty('--hc', `hsl(${hue} 88% 56%)`); }
    }
    const w = !!warn;
    if (w !== this._hgWarn) { this._hgWarn = w; this.el.hunger.classList.toggle('warn', w); }
  }
  hungerHide() {
    if (!this._hgOn) return;
    this._hgOn = false;
    this._hgWarn = false;
    this.el.hunger.classList.add('hidden');
    this.el.hunger.classList.remove('warn');
    this.el.hud.classList.remove('has-hunger');
  }

  // ---- stomp combo: small 'EZ x3!' above the ball ----
  stompCombo(n) {
    const el = this.el.stomp;
    if (!(n > 0)) { el.classList.add('hidden'); el.classList.remove('pop'); return; }
    const now = performance.now();
    if (now - this._stompAt < 60) return;
    this._stompAt = now;
    try { meta.track('stomp', { combo: n }); } catch { /* ignore */ }
    snd('stomp', n - 1);
    el.textContent = n > 1 ? `EZ x${n}!` : 'EZ!';
    el.classList.remove('hidden', 'pop');
    void el.offsetWidth;
    el.classList.add('pop');
    clearTimeout(this._stompT);
    this._stompT = setTimeout(() => { el.classList.add('hidden'); el.classList.remove('pop'); }, 950);
  }

  // ---- ÇIĞ SONSUZ HUD ----
  // d = {tons, dist, tierName, frac (progress to the next tier), best}
  cigHud(d) {
    if (!d) return;
    const c = this._cg;
    if (this.el.cigHud.classList.contains('hidden')) {
      this.el.cigHud.classList.remove('hidden');
      this.el.hud.classList.add('cig-endless');
      this.el.level.textContent = 'ÇIĞ SONSUZ';
    }
    // numbers are compared first (no Intl formatting / string building on frames where nothing visible changed)
    const kg = Math.round((d.tons || 0) * 1000);
    if (kg !== c.kg) { c.kg = kg; const ts = fmtTons(kg / 1000); this.el.tons.textContent = ts; this.lastTonsText = ts; }
    const tnRaw = d.tierName || '';
    if (tnRaw !== c.tnRaw) { c.tnRaw = tnRaw; this.el.cgTn.textContent = String(tnRaw).toLocaleUpperCase('tr-TR'); }
    const q = Math.round(clamp01(d.frac) * 100);
    if (q !== c.fill) { c.fill = q; this.el.cgFill.style.setProperty('--f', String(q / 100)); }
    const dm = Math.round(d.dist || 0);
    if (dm !== c.dm) { c.dm = dm; this.el.cgDist.textContent = `${fmtN(dm)} m`; }
    const bv = d.best && typeof d.best === 'object' ? d.best.tons : d.best;
    const bk = bv > 0 ? Math.round(bv * 1000) : 0;
    if (bk !== c.bk) { c.bk = bk; this.el.cgBest.textContent = bk ? `REKOR ${fmtTons(bk / 1000)}` : ''; }
  }

  cigReset() {
    this.el.cigHud.classList.add('hidden');
    this.el.hud.classList.remove('cig-endless');
    this._cg = { kg: -1, tnRaw: null, fill: -1, dm: -1, bk: -1 };
  }

  // announcements (tier banner, XP toast, power card) share one slot: they queue and show one at a time
  _ann(run, ms) {
    const q = this._annQ || (this._annQ = []);
    if (q.length >= 4) q.shift();
    q.push({ run, ms });
    this._annPump();
  }
  _annPump() {
    if (this._annBusy || !this._annQ || !this._annQ.length) return;
    const a = this._annQ.shift();
    this._annBusy = true;
    try { a.run(); } catch { /* ignore */ }
    clearTimeout(this._annT);
    this._annT = setTimeout(() => { this._annBusy = false; this._annPump(); }, a.ms);
  }
  _annReset() { clearTimeout(this._annT); this._annQ = []; this._annBusy = false; }

  cigTier(name) {
    this._ann(() => this._cigTierNow(name), 1350);
  }
  _cigTierNow(name) {
    const el = this.el.cigBanner;
    this.el.cbN.textContent = String(name || '').toLocaleUpperCase('tr-TR');
    el.classList.remove('hidden', 'on');
    void el.offsetWidth;
    el.classList.add('on');
    clearTimeout(this._cbT);
    this._cbT = setTimeout(() => { el.classList.remove('on'); el.classList.add('hidden'); }, 1300);
    this.flash('gold');
    try { meta.track('cig_tier', { name: String(name || '') }); } catch { /* ignore */ }
  }

  // ---- small non-blocking toast (top edge, never in the middle) ----
  toastSoft(text, opts) {
    if (!text) return;
    const now = performance.now();
    if (text === this._tsLast && now - this._tsAt < 2500) return;
    this._tsLast = text; this._tsAt = now;
    this._ann(() => this._toastNow(text, opts), 1250);
  }
  _toastNow(text, opts) {
    const box = this.el.toastSoft;
    while (box.children.length >= 2) box.firstChild.remove();
    const d = document.createElement('div');
    d.className = 'ts';
    const ico = opts && opts.icon;
    if (ico) { const i = document.createElement('span'); i.className = 'ti'; i.textContent = ico; d.appendChild(i); }
    const t = document.createElement('span');
    t.textContent = text;
    d.appendChild(t);
    d.addEventListener('animationend', () => d.remove());
    box.appendChild(d);
  }

  // ---- first-run tutor card (top edge). card = {icon, title, text} or null ----
  runnerTutor(card, onTap) {
    const el = this.el.tutor;
    if (!el) return;
    if (!card) { el.classList.add('hidden'); this._tutorTap = null; return; }
    el.querySelector('.tt-icon').textContent = card.icon || '';
    el.querySelector('.tt-title').textContent = card.title || '';
    el.querySelector('.tt-text').textContent = card.text || '';
    this._tutorTap = onTap || null;
    el.classList.remove('hidden');
  }

  // ---------- legacy ÇIĞ levels ----------
  showResult({ title, pct, stars, tons, sub, coins, hasNext, endless, dist, distance, best, isBest, newBest, cause, tip, tierName, onRevive }, sfx) {
    this.clearTimers();
    this.buffClear();
    this.hungerHide();
    this.cigReset();
    this.hideRunnerRevive();
    this.hint(false);
    const isEndless = !!(endless || dist != null || distance != null || tierName);
    this.el.toastSoft.classList.add('res');
    this.el.hud.classList.add('hidden');
    this.el.result.classList.remove('hidden');
    this.el.result.classList.toggle('runner', isEndless); // hides the star row
    this.el.next.classList.remove('revive');
    this.el.next.classList.add('next');
    this.el.retry.classList.remove('hidden');
    this.el.menuBtn.classList.remove('hidden');
    this.reviveFn = null;
    this.el.resCoins.classList.toggle('hidden', !coins);
    this.el.resCoins.innerHTML = coins ? `❄️ +${fmtN(coins)}` : '';
    const dt = runnerDeathText(cause);
    const rec = !!(isBest || newBest);
    const mrep = this.missionBlock(null);

    if (isEndless) {
      const dd = dist != null ? dist : distance || 0;
      const bt = best && typeof best === 'object' ? best.tons : best;
      const bd = best && typeof best === 'object' ? best.dist : 0;
      this.el.resTitle.textContent = cause && DEATH[cause] ? dt.title : title || dt.title;
      this.el.resBadge.classList.toggle('hidden', !rec);
      this.el.resLabel.textContent = tierName ? String(tierName).toLocaleUpperCase('tr-TR') : 'çığ boyutu';
      this.el.resSub.textContent = rec ? '' : bt > 0 ? `REKOR ${fmtTons(bt)}${bd > 0 ? ` · ${fmtN(bd)} m` : ''}` : sub || '';
      this.el.next.classList.add('hidden');
      let html = (!rec && (tip || dt.tip)) ? `<div class="rx-dim">${tip || dt.tip}</div>` : '';
      if ((this._bestCombo || 0) >= 3) html += `<div class="rx-line rx-combo">\u{1F525} EN \u0130Y\u0130 KOMBO x${this._bestCombo}</div>`;
      html += mrep.html + this.goalBlock(coins);
      this.el.resExtra.innerHTML = html;
      this.el.resExtra.classList.toggle('hidden', !html);
      this.resultFx(rec);
      this.goalAnimate();
      this.countUp(tons, (v) => { this.el.resPct.textContent = fmtTons(v); this.el.resTons.textContent = `${fmtN(dd * (v / Math.max(tons, 0.0001)))} m`; }, 1200, { tick: true, done: () => this.resultScoreDone(rec) });
      this.flushNotices(mrep.notices);
      return;
    }

    this.el.resBadge.classList.add('hidden');
    this.el.resTitle.textContent = title;
    this.el.resSub.textContent = sub || '';
    this.el.resLabel.textContent = 'kasaba yıkıldı';
    this.el.next.textContent = 'SONRAKİ DAĞ ▶';
    this.el.next.classList.toggle('hidden', !hasNext);
    const lh = mrep.html + this.goalBlock(coins);
    this.el.resExtra.innerHTML = lh;
    this.el.resExtra.classList.toggle('hidden', !lh);
    this.goalAnimate();
    const spans = this.el.resStars.children;
    for (const s of spans) s.classList.remove('on');
    // Count the numbers up: the payoff should feel like a slot machine.
    this.countUp(1, (_, e) => {
      this.el.resPct.textContent = `%${Math.round(pct * 100 * e)}`;
      this.el.resTons.textContent = fmtTons(tons * e);
    }, 1100);
    for (let i = 0; i < stars; i++) {
      this.timers.push(setTimeout(() => { spans[i].classList.add('on'); sfx?.star(i); }, 500 + i * 380));
    }
    this.flushNotices(mrep.notices);
  }

  clearTimers() {
    for (const t of this.timers) clearTimeout(t);
    this.timers.length = 0;
    cancelAnimationFrame(this.raf);
  }

  toast(text) {
    this.el.toast.textContent = text;
    this.el.toast.classList.add('on');
    clearTimeout(this.toastT);
    this.toastT = setTimeout(() => this.el.toast.classList.remove('on'), 1600);
  }

  showPause(on) { this.el.pause.classList.toggle('hidden', !on); }

  setToggle(name, on) { this.el[name].classList.toggle('off', !on); }

  debug(text) {
    this.el.debug.classList.remove('hidden');
    this.el.debug.textContent = text;
  }
}

UI.prototype.runnerDeathText = runnerDeathText;
