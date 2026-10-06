const $ = (id) => document.getElementById(id);

const NF = new Intl.NumberFormat('tr-TR');
export function fmtTons(t) {
  const kg = Math.round(t * 1000);
  if (kg < 1000) return `${kg} kg`;
  const t1 = Math.round(t * 10) / 10;
  if (t1 < 10) return `${t1.toFixed(1).replace('.', ',')} ton`;
  return `${NF.format(Math.round(t))} ton`;
}

export class UI {
  constructor() {
    this.el = {
      hud: $('hud'), level: $('hud-level'), prog: $('hud-prog'), dot: $('hud-dot'), tons: $('hud-tons'), combo: $('hud-combo'),
      floats: $('floats'), banner: $('banner'), hint: $('hint'),
      menu: $('menu'), menuLevel: $('menu-level'), menuStars: $('menu-stars'), daily: $('btn-daily'),
      result: $('result'), resTitle: $('res-title'), resStars: $('res-stars'), resPct: $('res-pct'), resTons: $('res-tons'), resSub: $('res-sub'),
      next: $('btn-next'), toast: $('toast'), pause: $('pause'), debug: $('debug'),
      sound: $('btn-sound'), haptic: $('btn-haptic'),
      coins: $('hud-coins'), vitals: $('hud-vitals'), pips: $('hud-pips'), grow: $('hud-grow'), powers: $('hud-powers'),
      yeti: $('hud-yeti'), yetiFill: $('hud-yetifill'),
      flow: $('hud-flow'), flowFill: $('hud-flow-fill'), flowLbl: $('hud-flow-lbl'), record: $('hud-record'), resExtra: $('res-extra'), resCoins: $('res-coins'), menuBest: $('menu-best'), resLabel: document.querySelector('.res-label'),
    };
    this.floatCount = 0;
    this.lastTonsText = '';
    this.pulseT = 0;
    this.timers = [];
  }

  on(id, fn) {
    $(id).addEventListener('click', (e) => { e.stopPropagation(); fn(e); });
  }

  showMenu({ level, stars, dailyNum, dailyBest, theme }) {
    this.clearTimers();
    this.el.menu.classList.remove('hidden');
    this.el.result.classList.add('hidden');
    this.el.pause.classList.add('hidden');
    this.el.hud.classList.add('hidden');
    this.el.menuLevel.textContent = theme ? `DAĞ ${level} · ${theme.toLocaleUpperCase('tr-TR')}` : `DAĞ ${level}`;
    this.el.menuStars.innerHTML = [0, 1, 2].map((i) => `<span class="${i < stars ? '' : 'off'}">★</span>`).join('');
    this.el.daily.textContent = dailyBest ? `🏔️ GÜNÜN DAĞI #${dailyNum} · ${fmtTons(dailyBest)}` : `🏔️ GÜNÜN DAĞI #${dailyNum}`;
  }

  // ---------- endless mode ----------
  runnerHud(on, biomeName) {
    this.el.menu.classList.add('hidden');
    this.el.result.classList.add('hidden');
    this.el.result.classList.toggle('runner', on);
    this.el.hud.classList.toggle('hidden', !on);
    this.el.coins.classList.toggle('hidden', !on);
    this.el.vitals.classList.toggle('hidden', !on);
    this.el.yeti.classList.toggle('hidden', !on);
    this.el.flow.classList.toggle('hidden', !on);
    if (!on) this.runnerDanger(1, 1, false);
    this.el.record.classList.toggle('hidden', !on);
    this.lastFlow = this.lastRec = null;
    this.lastVitals = '';
    if (!on) return;
    this.el.level.textContent = biomeName.toUpperCase();
    this.el.floats.innerHTML = '';
    this.el.banner.innerHTML = '';
    this.floatCount = 0;
    this.setCombo(0);
    this.hint(true, 'kaydır · yukarı: zıpla');
    this.lastBiome = biomeName;
  }

  runnerStats(score, coins, mult, biomeT, dist, biomeName) {
    const s = Math.round(score).toLocaleString('tr-TR');
    if (s !== this.lastTonsText) { this.el.tons.textContent = s; this.lastTonsText = s; }
    const c = `❄️ ${coins}`;
    if (c !== this.lastCoins) { this.el.coins.textContent = c; this.lastCoins = c; }
    if (biomeName && biomeName !== this.lastBiome) { this.el.level.textContent = biomeName.toUpperCase(); this.lastBiome = biomeName; }
    if (mult > 1) { this.el.combo.textContent = `x${mult} SKOR`; this.el.combo.classList.add('on'); }
    else if (this.el.combo.textContent.endsWith('SKOR')) this.el.combo.classList.remove('on');
    this.setProgress(biomeT);
  }

  // Size = health pips, growth to next size, Yeti closeness, active power-ups.
  runnerVitals({ tier, tiers, grow, gap, yetiMax, helmet, magnet, rocket, x2, superjump, sled }) {
    const key = `${tier}|${Math.round(grow * 20)}|${Math.round(gap)}|${helmet}|${magnet}|${rocket}|${x2}|${superjump}|${sled}`;
    if (key === this.lastVitals) return;
    this.lastVitals = key;
    if (this.lastTier !== tier || !this.el.pips.children.length) {
      this.lastTier = tier;
      let html = '';
      for (let i = 0; i < tiers; i++) {
        const s = 14 + i * 4;
        const cls = i > tier ? 'off' : tier === 0 ? 'danger' : '';
        html += `<div class="pip ${cls}" style="width:${s}px;height:${s}px"></div>`;
      }
      this.el.pips.innerHTML = html;
    }
    this.el.grow.style.width = `${Math.round(Math.max(0, Math.min(1, grow)) * 100)}%`;
    const close = 1 - Math.max(0, Math.min(1, gap / yetiMax));
    this.el.yetiFill.style.width = `${Math.round(close * 100)}%`;
    this.el.yeti.classList.toggle('close', gap < 14);
    this.el.powers.textContent = `${sled ? '🛷' : ''}${helmet ? '⛑️' : ''}${magnet ? '🧲' : ''}${rocket ? '🚀' : ''}${x2 ? '✖️2' : ''}${superjump ? '👟' : ''}`;
  }

  showRunnerResult({ title, distance, score, coins, best, isBest, canRevive, reviveCost = 0, boxes = 0, rank = 0, toRecord = 0, missions = [], layer = 1, dailyBest = false, destruction = '', tons = 0 }) {
    this.runnerDanger(1, 1, false);
    this.clearTimers();
    this.el.hud.classList.add('hidden');
    this.el.coins.classList.add('hidden');
    this.el.flow.classList.add('hidden');
    this.el.record.classList.add('hidden');
    // "One more run" hooks: how close the record was, the run's rank, mission progress.
    const ex = this.el.resExtra;
    let html = '';
    if (isBest) html += '<div class="rx-line">🏆 EN İYİ KOŞUN!</div>';
    else if (toRecord > 0 && toRecord < Math.max(400, distance * 0.6)) html += `<div class="rx-line">Rekora ${toRecord.toLocaleString('tr-TR')} m kaldı!</div>`;
    else if (rank > 0 && rank <= 10) html += `<div class="rx-line">#${rank}. en iyi koşun</div>`;
    if (dailyBest && !isBest) html += '<div class="rx-line">☀️ BUGÜNÜN REKORU!</div>';
    html += `<div class="rx-line" style="font-size:14px;color:#cfe6ff">KATMAN ${layer}${tons ? ` · YIKIM: ${destruction} (${tons.toLocaleString('tr-TR')} ton)` : ''}</div>`;
    for (const m of missions.slice(0, 3)) {
      const f = Math.max(0, Math.min(1, (m.value || 0) / (m.goal || 1)));
      html += `<div class="rx-m ${m.done ? 'done' : ''}"><span>${m.icon || '📜'}</span><span class="rx-t">${m.text}</span><span class="rx-b"><i style="width:${Math.round(f * 100)}%"></i></span></div>`;
    }
    ex.innerHTML = html;
    ex.classList.toggle('hidden', !html);
    this.el.vitals.classList.add('hidden');
    this.el.yeti.classList.add('hidden');
    this.el.result.classList.remove('hidden');
    this.el.result.classList.add('runner');
    this.el.resTitle.textContent = title;
    this.el.resLabel.textContent = 'metre';
    this.el.resSub.textContent = isBest ? 'YENİ REKOR!' : `REKOR ${best.toLocaleString('tr-TR')}`;
    this.el.resCoins.classList.remove('hidden');
    this.el.resCoins.textContent = `❄️ +${coins}${boxes ? `  ·  🎁 x${boxes}` : ''}`;
    this.el.next.textContent = canRevive ? (reviveCost ? `DEVAM ET 💎${reviveCost}` : 'DEVAM ET ▶') : 'ANA MENÜ';
    const t0 = performance.now(), dur = 900;
    const tick = () => {
      const k = Math.min(1, (performance.now() - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      this.el.resPct.textContent = `${Math.round(distance * e).toLocaleString('tr-TR')} m`;
      this.el.resTons.textContent = `SKOR ${Math.round(score * e).toLocaleString('tr-TR')}`;
      if (k < 1) this.raf = requestAnimationFrame(tick);
    };
    tick();
  }

  hideResult() {
    this.el.result.classList.add('hidden');
    this.el.flow.classList.remove('hidden');
    this.el.record.classList.remove('hidden');
    this.el.hud.classList.remove('hidden');
    this.el.coins.classList.remove('hidden');
    this.el.vitals.classList.remove('hidden');
    this.el.yeti.classList.remove('hidden');
    this.lastVitals = '';
  }

  // A red "!" over the lane something is coming down/at you (boulder shadow, oncoming snowcat).
  laneWarn(lane, kind) {
    const d = document.createElement('div');
    d.className = 'lane-warn';
    d.textContent = kind === 'boulder' ? '⚠' : '❗';
    d.style.left = `${50 + (lane - 1) * 26}%`;
    this.el.floats.appendChild(d);
    setTimeout(() => d.remove(), 1100);
  }

  showPerks(cards, title, onPick) {
    const wrap = document.getElementById('perks');
    document.getElementById('perk-title').textContent = title;
    const box = document.getElementById('perk-cards');
    box.innerHTML = '';
    for (const c of cards) {
      const el = document.createElement('button');
      el.className = `perk-card ${c.rare ? 'rare' : ''}`;
      el.innerHTML = `<span class="pi">${c.icon}</span><span><div class="pn">${c.name}</div><div class="pd">${c.desc}</div></span>`;
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        wrap.classList.add('hidden');
        onPick(c);
      }, { once: true });
      box.appendChild(el);
    }
    wrap.classList.remove('hidden');
  }

  runnerDanger(danger, chain, risk) {
    const el = this.dangerEl || (this.dangerEl = document.getElementById('danger'));
    const parts = [];
    if (risk) parts.push('RİSK ×5');
    if (danger > 1) parts.push(`TEHLİKE ×${danger}`);
    if (chain > 1) parts.push(`ZİNCİR ×${chain}`);
    const t = parts.join(' · ');
    if (t !== this.lastDanger) {
      this.lastDanger = t;
      el.textContent = t;
      el.classList.toggle('hidden', !t);
    }
  }

  runnerFlow(lvl, frac) {
    const key = lvl * 100 + Math.round(frac * 50);
    if (key === this.lastFlow) return;
    this.lastFlow = key;
    this.el.flowFill.style.width = `${Math.round(frac * 100)}%`;
    this.el.flowLbl.textContent = lvl ? `AKIŞ x${lvl + 1}` : 'AKIŞ';
    this.el.flow.className = `hud-flow l${lvl}`;
  }

  runnerRecord(best) {
    if (best === this.lastRec) return;
    this.lastRec = best;
    this.el.record.textContent = best ? `REKOR ${Math.round(best).toLocaleString('tr-TR')}` : '';
  }

  speedLines(k) {
    const el = this.speedEl || (this.speedEl = document.getElementById('speedlines'));
    const v = Math.max(0, Math.min(1, k));
    const q = Math.round(v * 10) / 10;
    if (q !== this.lastSpeed) { this.lastSpeed = q; el.style.opacity = String(q * 0.85); }
  }

  flash(kind = 'hit') {
    const el = this.flashEl || (this.flashEl = document.getElementById('flash'));
    el.className = '';
    void el.offsetWidth; // restart the animation
    el.className = kind;
  }

  setMenuBest(text) { this.el.menuBest.textContent = text; }

  startRun(label) {
    this.clearTimers();
    this.el.resExtra?.classList.add('hidden');
    this.el.flow?.classList.add('hidden');
    this.el.record?.classList.add('hidden');
    this.el.vitals.classList.add('hidden');
    this.el.yeti.classList.add('hidden');
    this.el.result.classList.remove('runner');
    this.el.resCoins.classList.add('hidden');
    this.el.resLabel.textContent = 'kasaba yıkıldı';
    this.el.coins.classList.add('hidden');
    this.el.menu.classList.add('hidden');
    this.el.result.classList.add('hidden');
    this.el.hud.classList.remove('hidden');
    this.el.level.textContent = label;
    this.el.floats.innerHTML = '';
    this.el.banner.innerHTML = '';
    this.floatCount = 0;
    this.setCombo(0);
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
    const v = `${Math.max(0, Math.min(1, p)) * 100}%`;
    this.el.prog.style.width = v;
    this.el.dot.style.left = v;
  }

  setCombo(n) {
    if (n >= 3) {
      this.el.combo.textContent = `KOMBO x${n}`;
      this.el.combo.classList.add('on');
    } else this.el.combo.classList.remove('on');
  }

  float(text, x, y, cls = '') {
    if (this.floatCount > 8) return;
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
    this.el.banner.innerHTML = '';
    const b = document.createElement('div');
    b.className = `b l${level}`;
    b.textContent = text;
    this.el.banner.appendChild(b);
  }

  showResult({ title, pct, stars, tons, sub, coins, hasNext }, sfx) {
    this.el.resCoins.classList.toggle('hidden', !coins);
    if (coins) this.el.resCoins.textContent = `❄️ +${coins}`;
    this.el.hud.classList.add('hidden');
    this.el.result.classList.remove('hidden');
    this.el.resTitle.textContent = title;
    this.el.resSub.textContent = sub || '';
    this.el.next.textContent = hasNext ? 'SONRAKİ DAĞ' : 'ANA MENÜ';
    const spans = this.el.resStars.children;
    for (const s of spans) s.classList.remove('on');
    this.clearTimers();
    // Count the numbers up — the payoff should feel like a slot machine.
    const t0 = performance.now(), dur = 1100;
    const tick = () => {
      const k = Math.min(1, (performance.now() - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      this.el.resPct.textContent = `%${Math.round(pct * 100 * e)}`;
      this.el.resTons.textContent = fmtTons(tons * e);
      if (k < 1) this.raf = requestAnimationFrame(tick);
    };
    tick();
    for (let i = 0; i < stars; i++) {
      this.timers.push(setTimeout(() => { spans[i].classList.add('on'); sfx?.star(i); }, 500 + i * 380));
    }
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
