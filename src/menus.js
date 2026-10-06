// menus.js — FREEMON main menu + meta panels (daily reward, achievements, missions, upgrades, letter hunt, settings,
// mystery boxes, toasts, easter eggs). Self-contained DOM + injected CSS (<style id="freemon-menus-style">).
//
//   const menus = createMenus({ save, meta, root: document.getElementById('app'), callbacks });
//   menus.showMain(info); menus.hideMain(); menus.toastAchievement(a); menus.showDailyIfAvailable();
//   menus.openBoxes(n, onDone); menus.refresh(); menus.isOpen();
//
// Importing this module never touches `document`; everything happens inside createMenus().
import { SKINS, TRAILS } from './skins.js';
import { ACHIEVEMENTS, EGGS, DAILY_REWARDS, UPGRADES, SLED_PACK } from './meta.js';

const STYLE_ID = 'freemon-menus-style';
const VERSION = '0.2.0';
const WORD = 'FREEMON';
const KONAMI = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// ================================================================================================================ CSS

const CSS = `
.fm-main, .fm-ov, .fm-modal, .fm-toasts, .fm-fx, .fm-boxov {
  --ink: #17345c; --orange: #ff7a2f; --orange-dark: #d2541a; --blue: #2f7dff; --blue-dark: #1d55b8; --gold: #ffcf3a;
  --purple: #7a3cf0; --green: #35c46a; --red: #ff4d4d;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-weight: 900; color: #fff;
  user-select: none; -webkit-user-select: none; -webkit-tap-highlight-color: transparent;
}
.fm-main *, .fm-ov *, .fm-modal *, .fm-toasts *, .fm-fx *, .fm-boxov * { box-sizing: border-box; }
.fm-main button, .fm-ov button, .fm-modal button, .fm-boxov button { font-family: inherit; margin: 0; -webkit-appearance: none; appearance: none; }
.fm-main button:focus, .fm-ov button:focus, .fm-modal button:focus, .fm-boxov button:focus { outline: none; }
.fm-main button:focus-visible, .fm-ov button:focus-visible, .fm-modal button:focus-visible, .fm-boxov button:focus-visible { outline: 3px solid var(--gold); outline-offset: 2px; }
.fm-ol { text-shadow: 0 3px 0 var(--ink), 2px 2px 0 var(--ink), -2px 2px 0 var(--ink), 2px -2px 0 var(--ink), -2px -2px 0 var(--ink), 0 6px 12px rgba(10, 30, 60, 0.35); }

/* =============================================================== MAIN SCREEN */
.fm-main {
  position: absolute; inset: 0; z-index: 40; display: flex; flex-direction: column;
  padding-top: calc(var(--sat, env(safe-area-inset-top, 0px)) + 10px);
  background: linear-gradient(180deg, rgba(110, 182, 255, 0.62) 0%, rgba(255, 255, 255, 0) 36%, rgba(255, 255, 255, 0) 52%, rgba(23, 52, 92, 0.46) 100%);
}
.fm-main.fm-hide { display: none; }
.fm-top { flex: none; display: flex; align-items: center; gap: 8px; width: 100%; max-width: 460px; margin: 0 auto; padding: 0 16px; }
.fm-lvl {
  --p: 0; position: relative; flex: none; width: 52px; height: 52px; padding: 0; border-radius: 50%; cursor: pointer; border: 3px solid var(--ink);
  background: conic-gradient(var(--gold) calc(var(--p) * 1%), rgba(255, 255, 255, 0.55) 0); box-shadow: 0 4px 0 var(--ink);
}
.fm-lvl-in {
  position: absolute; inset: 4px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: linear-gradient(180deg, #2c5799, var(--ink)); color: #fff; line-height: 1;
}
.fm-lvl-in small { font-size: 8px; letter-spacing: 0.08em; color: var(--gold); }
.fm-lvl-in b { font-size: 19px; font-weight: 900; }
.fm-lvl:active { transform: translateY(2px); box-shadow: 0 2px 0 var(--ink); }
.fm-spacer-x { flex: 1; }
.fm-pill {
  display: flex; align-items: center; gap: 6px; padding: 6px 12px 6px 9px; border-radius: 16px; min-height: 36px;
  border: 3px solid var(--ink); background: linear-gradient(180deg, #2c5799, var(--ink));
  box-shadow: 0 3px 0 var(--ink), inset 0 2px 0 rgba(255, 255, 255, 0.18); font-size: 17px; line-height: 1; color: var(--gold); white-space: nowrap;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.35);
}
.fm-pill .ico { font-size: 16px; text-shadow: none; }
.fm-pill.cr { color: #9be7ff; }
.fm-pill.bump { animation: fmBump 0.4s cubic-bezier(.2, 1.8, .4, 1); }
@keyframes fmBump { 0% { transform: scale(1); } 35% { transform: scale(1.18); } 100% { transform: scale(1); } }

.fm-scroll {
  flex: 1; min-height: 0; overflow-y: auto; overflow-x: hidden; touch-action: pan-y; overscroll-behavior: contain; -webkit-overflow-scrolling: touch;
  padding: 0 16px calc(var(--sab, env(safe-area-inset-bottom, 0px)) + 14px);
}
.fm-col { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 460px; min-height: 100%; margin: 0 auto; }
.fm-hero { flex: none; display: flex; flex-direction: column; align-items: center; gap: 2px; padding-top: 4px; touch-action: none; }
.fm-flex { flex: 1 1 0; min-height: 4px; }

/* ---- logo ---- */
.fm-logo {
  position: relative; display: flex; justify-content: center; align-items: baseline; gap: 1px; padding: 6px 8px 8px; cursor: pointer;
  font-size: clamp(40px, 15.5vw, 72px); line-height: 1; transform: rotate(-3deg); touch-action: none;
}
.fm-ch {
  position: relative; display: inline-block; font-weight: 900; color: var(--ink);
  text-shadow: 0 .09em 0 var(--ink), .055em .055em 0 var(--ink), -.055em .055em 0 var(--ink), .055em -.055em 0 var(--ink), -.055em -.055em 0 var(--ink),
    0 -.055em 0 var(--ink), .075em 0 0 var(--ink), -.075em 0 0 var(--ink), 0 .16em .12em rgba(10, 30, 60, 0.35);
  animation: fmBob 2.4s ease-in-out infinite; animation-delay: calc(var(--i) * -0.19s);
}
.fm-ch::after {
  content: attr(data-t); position: absolute; left: 0; top: 0; width: 100%; height: 100%; text-shadow: none;
  background: linear-gradient(180deg, var(--c1) 0%, var(--c2) 100%); -webkit-background-clip: text; background-clip: text;
  color: transparent; -webkit-text-fill-color: transparent;
}
.fm-ball {
  position: relative; display: inline-block; width: 0.74em; height: 0.74em; margin: 0 0.04em; border-radius: 50%; border: 0.07em solid var(--ink);
  background: radial-gradient(circle at 34% 28%, #fff 0 30%, #e6f2ff 55%, #b9d6f5 100%);
  box-shadow: 0 0.07em 0 var(--ink), inset -0.05em -0.06em 0 rgba(120, 170, 225, 0.55), 0 0.16em 0.12em rgba(10, 30, 60, 0.3);
  animation: fmBob 2.4s ease-in-out infinite; animation-delay: calc(var(--i) * -0.19s);
}
.fm-ball .e { position: absolute; top: 0.2em; width: 0.1em; height: 0.15em; border-radius: 50%; background: var(--ink); animation: fmBlink 4.2s infinite; }
.fm-ball .e.l { left: 0.17em; } .fm-ball .e.r { right: 0.17em; }
.fm-ball .n { position: absolute; left: 50%; top: 0.35em; width: 0.17em; height: 0.09em; margin-left: -0.04em; border-radius: 0 60% 60% 0; background: #ff8a2a; }
.fm-logo.spin { animation: fmSpin 1.15s cubic-bezier(.3, 1.3, .5, 1); }
.fm-logo.squish { animation: fmSquish 0.18s ease-out; }
@keyframes fmBob { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-0.07em) rotate(1.6deg); } }
@keyframes fmBlink { 0%, 93%, 100% { transform: scaleY(1); } 96% { transform: scaleY(0.08); } }
@keyframes fmSpin { 0% { transform: rotate(-3deg) scale(1); } 40% { transform: rotate(357deg) scale(1.25); } 100% { transform: rotate(717deg) scale(1); } }
@keyframes fmSquish { 0% { transform: rotate(-3deg) scale(1); } 50% { transform: rotate(-3deg) scale(0.94, 1.04); } 100% { transform: rotate(-3deg) scale(1); } }
.fm-tag { margin-top: -2px; font-size: 13px; letter-spacing: 0.1em; color: var(--ink); font-weight: 800; text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6); }

/* ---- mascot ---- */
.fm-mascot-wrap { position: relative; margin-top: 6px; height: 92px; display: flex; align-items: center; justify-content: center; }
.fm-mascot {
  --lx: 0px; --ly: 0px; position: relative; width: 84px; height: 84px; padding: 0; border-radius: 50%; cursor: pointer; touch-action: none;
  border: 3.5px solid var(--ink); background: radial-gradient(circle at 34% 28%, #fff 0 28%, #e9f4ff 52%, #b8d5f4 100%);
  box-shadow: 0 5px 0 var(--ink), inset -6px -8px 0 rgba(110, 160, 220, 0.4); animation: fmBounce 2.8s ease-in-out infinite;
}
.fm-mascot .eye {
  position: absolute; top: 30%; width: 20px; height: 24px; border-radius: 50%; background: #fff; border: 3px solid var(--ink); overflow: hidden;
  animation: fmBlink 4.6s infinite;
}
.fm-mascot .eye.l { left: 16%; } .fm-mascot .eye.r { right: 16%; animation-delay: 0.05s; }
.fm-mascot .pup {
  position: absolute; left: 50%; top: 50%; width: 9px; height: 11px; margin: -5.5px 0 0 -4.5px; border-radius: 50%; background: var(--ink);
  transform: translate(var(--lx), var(--ly)); transition: transform 0.25s ease;
}
.fm-mascot .nose { position: absolute; left: 50%; top: 52%; width: 18px; height: 9px; margin-left: -3px; border-radius: 0 70% 70% 0; background: linear-gradient(180deg, #ffa04a, #ff7a1a); border: 2px solid var(--ink); }
.fm-mascot .cheek { position: absolute; top: 60%; width: 13px; height: 8px; border-radius: 50%; background: rgba(255, 110, 150, 0.5); }
.fm-mascot .cheek.l { left: 9%; } .fm-mascot .cheek.r { right: 9%; }
.fm-mascot .mouth { position: absolute; left: 50%; top: 72%; width: 20px; height: 9px; margin-left: -10px; border-bottom: 3.5px solid var(--ink); border-radius: 0 0 20px 20px; }
.fm-mascot.press { animation: fmTremble 0.12s linear infinite; }
.fm-mascot.sneeze { animation: fmSneeze 1.8s ease-out; }
@keyframes fmBounce { 0%, 100% { transform: translateY(0) scale(1, 1); } 45% { transform: translateY(-9px) scale(0.98, 1.03); } 80% { transform: translateY(0) scale(1.04, 0.95); } }
@keyframes fmTremble { 0% { transform: translateX(-1.5px) rotate(-1deg); } 50% { transform: translateX(1.5px) rotate(1deg); } 100% { transform: translateX(-1.5px) rotate(-1deg); } }
@keyframes fmSneeze {
  0% { transform: scale(1); opacity: 1; } 22% { transform: scale(1.18, 1.1) translateY(-6px); } 34% { transform: scale(0.9, 1.2) translateY(-10px) rotate(-6deg); }
  44% { transform: scale(1.4, 0.7) translateY(4px); opacity: 1; } 52% { transform: scale(0.1); opacity: 0; } 76% { transform: scale(0.1); opacity: 0; }
  90% { transform: scale(1.12); opacity: 1; } 100% { transform: scale(1); opacity: 1; }
}
.fm-achoo {
  position: absolute; left: 50%; top: -4px; transform: translateX(-50%) scale(0.3) rotate(-6deg); opacity: 0; pointer-events: none; white-space: nowrap;
  font-size: 22px; color: #fff; text-shadow: 0 3px 0 var(--ink), 2px 2px 0 var(--ink), -2px 2px 0 var(--ink), 2px -2px 0 var(--ink), -2px -2px 0 var(--ink);
}
.fm-achoo.on { animation: fmAchoo 1.5s ease-out forwards; }
@keyframes fmAchoo { 0% { opacity: 0; transform: translateX(-50%) scale(0.3) rotate(-6deg); } 28% { opacity: 0; } 38% { opacity: 1; transform: translateX(-50%) scale(1.25) rotate(4deg); } 80% { opacity: 1; transform: translateX(-50%) scale(1) rotate(0); } 100% { opacity: 0; transform: translateX(-50%) translateY(-20px) scale(1); } }
.fm-burst { position: absolute; left: 50%; top: 50%; font-size: 18px; pointer-events: none; animation: fmBurst 1.1s ease-out forwards; }
@keyframes fmBurst { 0% { opacity: 1; transform: translate(-50%, -50%) scale(0.4); } 100% { opacity: 0; transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(1.2) rotate(240deg); } }

/* ---- mode cards ---- */
.fm-modes { display: flex; flex-direction: column; gap: 12px; flex: none; }
.fm-mode {
  --c1: #ff9a52; --c2: #ff7a2f; --sh: #d2541a;
  position: relative; display: flex; align-items: center; gap: 12px; width: 100%; min-height: 72px; padding: 9px 14px 9px 10px; text-align: left; cursor: pointer; color: #fff;
  border: 3px solid var(--ink); border-radius: 22px; background: linear-gradient(180deg, var(--c1), var(--c2));
  box-shadow: 0 6px 0 var(--ink), inset 0 2px 0 rgba(255, 255, 255, 0.35); transition: transform 0.06s, box-shadow 0.06s;
}
.fm-mode:active { transform: translateY(4px); box-shadow: 0 2px 0 var(--ink), inset 0 2px 0 rgba(255, 255, 255, 0.35); }
.fm-mode.endless { --c1: #b07bff; --c2: #7a3cf0; --sh: #4b1fa8; min-height: 86px; animation: fmGlow 2.4s ease-in-out infinite; }
.fm-mode.cig { --c1: #ff9a52; --c2: #ff7a2f; --sh: #d2541a; }
.fm-mode.daily { --c1: #5aa0ff; --c2: #2f7dff; --sh: #1d55b8; }
@keyframes fmGlow { 0%, 100% { box-shadow: 0 6px 0 var(--ink), inset 0 2px 0 rgba(255, 255, 255, 0.35), 0 0 0 rgba(176, 123, 255, 0); } 50% { box-shadow: 0 6px 0 var(--ink), inset 0 2px 0 rgba(255, 255, 255, 0.35), 0 0 22px 4px rgba(176, 123, 255, 0.7); } }
.fm-mode .ico {
  flex: none; width: 54px; height: 54px; display: grid; place-items: center; font-size: 34px; line-height: 1; border-radius: 17px;
  background: rgba(255, 255, 255, 0.22); border: 2.5px solid rgba(23, 52, 92, 0.5);
}
.fm-mode.endless .ico { font-size: 40px; }
.fm-mode .txt { flex: 1; min-width: 0; }
.fm-mode .ttl { font-size: 22px; line-height: 1.05; letter-spacing: 0.03em; text-shadow: 0 2px 0 var(--sh); }
.fm-mode.endless .ttl { font-size: 25px; }
.fm-mode .sub { margin-top: 3px; font-size: 12.5px; font-weight: 800; text-shadow: 0 1px 0 var(--sh); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.fm-mult {
  flex: none; min-width: 46px; height: 46px; padding: 0 6px; display: grid; place-items: center; border-radius: 50%; transform: rotate(8deg);
  background: radial-gradient(circle at 35% 30%, #fff3a8, var(--gold) 60%, #f0a500); border: 3px solid var(--ink); box-shadow: 0 3px 0 var(--ink);
  color: var(--ink); font-size: 17px; line-height: 1;
}
.fm-go { flex: none; font-size: 24px; text-shadow: 0 2px 0 var(--sh); }

/* ---- strips ---- */
.fm-strip {
  flex: none; display: flex; align-items: center; gap: 10px; width: 100%; min-height: 48px; padding: 6px 12px; cursor: pointer; text-align: left;
  border: 3px solid var(--ink); border-radius: 18px; background: rgba(255, 255, 255, 0.9); color: var(--ink); box-shadow: 0 4px 0 var(--ink);
  transition: transform 0.06s, box-shadow 0.06s;
}
.fm-strip:active { transform: translateY(3px); box-shadow: 0 1px 0 var(--ink); }
.fm-strip .lbl { flex: none; font-size: 11px; letter-spacing: 0.08em; line-height: 1.1; }
.fm-strip .lbl small { display: block; font-size: 9.5px; font-weight: 800; letter-spacing: 0.04em; opacity: 0.7; }
.fm-mbars { flex: 1; min-width: 0; display: flex; gap: 6px; }
.fm-mbar { position: relative; flex: 1; height: 16px; border-radius: 9px; border: 2.5px solid var(--ink); background: rgba(23, 52, 92, 0.16); overflow: hidden; }
.fm-mbar i { position: absolute; left: 0; top: 0; bottom: 0; width: var(--p, 0%); background: linear-gradient(90deg, #7be89d, var(--green)); transition: width 0.3s; }
.fm-mbar.done i { background: linear-gradient(90deg, #ffe27a, var(--gold)); }
.fm-mbar b { position: absolute; inset: 0; display: grid; place-items: center; font-size: 9px; color: var(--ink); }
.fm-strip .fm-mult { min-width: 38px; height: 38px; font-size: 14px; }
.fm-chips { flex: 1; min-width: 0; display: flex; justify-content: flex-end; gap: 4px; }
.fm-chips .fm-chip { flex: 1 1 0; width: auto; min-width: 0; max-width: 27px; font-size: 14px; }
.fm-chip {
  width: 27px; height: 31px; flex: none; display: grid; place-items: center; font-size: 15px; line-height: 1; border-radius: 9px;
  border: 2.5px solid var(--ink); background: rgba(23, 52, 92, 0.12); color: rgba(23, 52, 92, 0.4);
}
.fm-chip.got { background: linear-gradient(180deg, #ffe27a, var(--gold)); color: var(--ink); }
.fm-chip.next { color: var(--ink); animation: fmChip 1s ease-in-out infinite alternate; }
@keyframes fmChip { from { box-shadow: 0 0 0 0 rgba(255, 207, 58, 0.9); } to { box-shadow: 0 0 0 4px rgba(255, 207, 58, 0); } }

/* ---- bottom nav ---- */
.fm-nav { flex: none; display: flex; gap: 6px; width: 100%; margin-top: 2px; }
.fm-nb {
  position: relative; flex: 1; min-width: 0; min-height: 58px; padding: 6px 1px 5px; cursor: pointer; color: var(--ink);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  border: 3px solid var(--ink); border-radius: 16px; background: linear-gradient(180deg, #ffffff, #d9eaff); box-shadow: 0 4px 0 var(--ink);
  transition: transform 0.06s, box-shadow 0.06s;
}
.fm-nb:active { transform: translateY(3px); box-shadow: 0 1px 0 var(--ink); }
.fm-nb .e { font-size: 22px; line-height: 1; }
.fm-nb .t { font-size: 9.5px; letter-spacing: 0.03em; white-space: nowrap; }
.fm-bdg {
  position: absolute; top: -9px; right: -5px; min-width: 21px; height: 21px; padding: 0 5px; display: grid; place-items: center; border-radius: 11px;
  border: 2.5px solid var(--ink); background: var(--red); color: #fff; font-size: 11px; line-height: 1; pointer-events: none;
}
.fm-bdg.gold { background: var(--gold); color: var(--ink); }
.fm-bdg.pulse { animation: fmPulse 0.9s ease-in-out infinite alternate; }
.fm-bdg.off { display: none; }
@keyframes fmPulse { from { transform: scale(1); } to { transform: scale(1.22); } }

.fm-main.enter .fm-modes > *, .fm-main.enter .fm-strip, .fm-main.enter .fm-nav { animation: fmRise 0.45s cubic-bezier(.2, 1.3, .4, 1) backwards; }
.fm-main.enter .fm-modes > *:nth-child(2) { animation-delay: 0.06s; }
.fm-main.enter .fm-modes > *:nth-child(3) { animation-delay: 0.12s; }
@keyframes fmRise { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }

@media (max-height: 760px) {
  .fm-mascot-wrap { display: none; }
  .fm-logo { font-size: clamp(38px, 14vw, 62px); }
}
@media (max-height: 680px) {
  .fm-col { gap: 7px; }
  .fm-modes { gap: 9px; }
  .fm-mode { min-height: 62px; padding-top: 6px; padding-bottom: 6px; }
  .fm-mode.endless { min-height: 70px; }
  .fm-mode .ico { width: 46px; height: 46px; font-size: 28px; }
  .fm-nb { min-height: 52px; }
  .fm-tag { display: none; }
}
@media (max-width: 350px) {
  .fm-nb .t { font-size: 8.5px; letter-spacing: 0; }
  .fm-pill { font-size: 15px; padding: 5px 9px 5px 7px; }
  .fm-mode { gap: 9px; padding-right: 10px; }
  .fm-mode .ico, .fm-mode.endless .ico { width: 44px; height: 44px; font-size: 27px; }
  .fm-mode .ttl { font-size: 17px; }
  .fm-mode.endless .ttl { font-size: 18px; }
  .fm-mode .sub { font-size: 11px; }
  .fm-mult { min-width: 40px; height: 40px; font-size: 15px; }
  .fm-strip .lbl { font-size: 10px; }
}

/* =============================================================== PANELS */
.fm-ov {
  position: absolute; inset: 0; z-index: 60; display: flex; flex-direction: column;
  padding-top: calc(var(--sat, env(safe-area-inset-top, 0px)) + 10px);
  background: linear-gradient(180deg, rgba(118, 183, 250, 0.98) 0%, rgba(188, 224, 255, 0.99) 55%, rgba(233, 245, 255, 0.99) 100%);
  animation: fmIn 0.22s ease-out;
}
@keyframes fmIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
.fm-head { flex: none; display: flex; flex-wrap: wrap; align-items: center; gap: 8px 10px; width: 100%; max-width: 520px; margin: 0 auto; padding: 0 16px; }
.fm-titles { flex: 1 1 140px; min-width: 0; }
.fm-title { font-size: clamp(24px, 8.5vw, 34px); line-height: 1; transform: rotate(-2deg); transform-origin: left center; white-space: nowrap; overflow: visible;
  text-shadow: 0 3px 0 var(--ink), 2px 2px 0 var(--ink), -2px 2px 0 var(--ink), 2px -2px 0 var(--ink), -2px -2px 0 var(--ink), 0 6px 12px rgba(10, 30, 60, 0.35); }
.fm-title.long { font-size: clamp(20px, 6.6vw, 28px); }
.fm-sub { margin-top: 6px; min-height: 14px; font-size: 12px; font-weight: 800; letter-spacing: 0.12em; color: var(--ink); }
.fm-x {
  order: 2; flex: none; width: 44px; height: 44px; padding: 0; border-radius: 14px; border: 3px solid var(--ink); cursor: pointer;
  background: rgba(255, 255, 255, 0.9); color: var(--ink); font-size: 18px; line-height: 1; box-shadow: 0 3px 0 var(--ink); transition: transform 0.06s, box-shadow 0.06s;
}
.fm-x:active { transform: translateY(2px); box-shadow: 0 1px 0 var(--ink); }
.fm-pills { order: 3; flex: 1 0 100%; display: flex; gap: 8px; }
.fm-tabs { flex: none; display: flex; gap: 8px; width: 100%; max-width: 520px; margin: 12px auto 4px; padding: 0 16px; }
.fm-tab {
  flex: 1; min-height: 44px; padding: 8px 2px 7px; cursor: pointer; border-radius: 16px; border: 3px solid var(--ink); background: rgba(255, 255, 255, 0.65);
  color: var(--ink); font-size: 14px; font-weight: 900; letter-spacing: 0.05em; box-shadow: 0 4px 0 var(--ink); transition: transform 0.06s, box-shadow 0.06s;
}
.fm-tab.on { background: linear-gradient(180deg, #ff9a52, var(--orange)); color: #fff; text-shadow: 0 2px 0 var(--orange-dark); transform: translateY(2px); box-shadow: 0 2px 0 var(--ink); }
.fm-body { flex: 1; min-height: 0; margin-top: 8px; overflow-y: auto; overflow-x: hidden; touch-action: pan-y; overscroll-behavior: contain; -webkit-overflow-scrolling: touch;
  padding: 6px 0 calc(var(--sab, env(safe-area-inset-bottom, 0px)) + 28px); }
.fm-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 520px; margin: 0 auto; padding: 4px 16px 0; }

/* buttons */
.fm-btn {
  flex: none; min-height: 44px; padding: 9px 14px 8px; cursor: pointer; border: 3px solid var(--ink); border-radius: 16px; font-size: 15px; font-weight: 900; letter-spacing: 0.03em;
  color: #fff; white-space: nowrap; background: linear-gradient(180deg, #ff9a52, var(--orange)); box-shadow: 0 4px 0 var(--ink); text-shadow: 0 2px 0 var(--orange-dark);
  transition: transform 0.06s, box-shadow 0.06s;
}
.fm-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 var(--ink); }
.fm-btn.big { width: 100%; font-size: 21px; padding: 13px 14px 12px; }
.fm-btn.blue { background: linear-gradient(180deg, #5aa0ff, var(--blue)); text-shadow: 0 2px 0 var(--blue-dark); }
.fm-btn.green { background: linear-gradient(180deg, #6fe39a, var(--green)); text-shadow: 0 2px 0 #1e8a49; }
.fm-btn.poor, .fm-btn.lock { background: linear-gradient(180deg, #bcc7d6, #98a7bb); text-shadow: 0 2px 0 #6d7c92; }
.fm-btn.on { background: linear-gradient(180deg, #ffe27a, var(--gold)); color: var(--ink); text-shadow: none; cursor: default; transform: translateY(3px); box-shadow: 0 1px 0 var(--ink); }
.fm-btn.sm { min-height: 44px; min-width: 56px; padding: 6px 10px; font-size: 14px; }
.fm-btn.glow { animation: fmBtnGlow 0.9s ease-in-out infinite alternate; }
@keyframes fmBtnGlow { from { box-shadow: 0 4px 0 var(--ink), 0 0 0 0 rgba(255, 207, 58, 0.9); } to { box-shadow: 0 4px 0 var(--ink), 0 0 16px 5px rgba(255, 207, 58, 0.8); } }
.fm-shake { animation: fmShake 0.32s; }
@keyframes fmShake { 0%, 100% { transform: none; } 20% { transform: translateX(-6px); } 40% { transform: translateX(6px); } 60% { transform: translateX(-4px); } 80% { transform: translateX(3px); } }
.fm-popc { animation: fmPop 0.6s cubic-bezier(.2, 1.8, .4, 1); }
@keyframes fmPop { 0% { transform: scale(0.85) rotate(-3deg); } 40% { transform: scale(1.1) rotate(2deg); } 100% { transform: none; } }

/* generic row card */
.fm-row {
  position: relative; display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 20px; border: 3px solid var(--ink);
  background: linear-gradient(180deg, #ffffff, #e2f0ff); box-shadow: 0 4px 0 var(--ink); color: var(--ink);
}
.fm-row.done { background: linear-gradient(180deg, #fff9dc, #ffe9a2); box-shadow: 0 4px 0 var(--ink), 0 0 0 3px var(--gold), 0 0 16px 3px rgba(255, 207, 58, 0.5); }
.fm-row.claimed { opacity: 0.72; }
.fm-row.secret { background: linear-gradient(180deg, #eef1f7, #d5dbe8); }
.fm-aico { flex: none; width: 46px; height: 46px; display: grid; place-items: center; font-size: 26px; line-height: 1; border-radius: 15px; background: rgba(23, 52, 92, 0.1); border: 2.5px solid var(--ink); }
.fm-amid { flex: 1; min-width: 0; }
.fm-an { font-size: 15px; line-height: 1.15; }
.fm-ad { margin-top: 2px; font-size: 12px; font-weight: 800; color: #5a7196; line-height: 1.25; }
.fm-abar { display: flex; align-items: center; gap: 6px; margin-top: 5px; }
.fm-bar { position: relative; flex: 1; height: 11px; border-radius: 7px; background: rgba(23, 52, 92, 0.18); border: 2px solid var(--ink); overflow: hidden; }
.fm-bar i { position: absolute; left: 0; top: 0; bottom: 0; width: var(--p, 0%); background: linear-gradient(90deg, #7be89d, var(--green)); }
.fm-row.done .fm-bar i { background: linear-gradient(90deg, #ffe27a, var(--gold)); }
.fm-bn { flex: none; font-size: 11px; color: #5a7196; }
.fm-ar { margin-top: 5px; font-size: 11.5px; font-weight: 900; color: var(--orange-dark); }
.fm-ok { flex: none; font-size: 22px; color: var(--green); }

/* ---- daily ---- */
.fm-streak { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 20px; border: 3px solid var(--ink); background: linear-gradient(180deg, #fff, #ffe9c9); box-shadow: 0 4px 0 var(--ink); color: var(--ink); }
.fm-streak .fl { font-size: 34px; line-height: 1; }
.fm-streak .st { font-size: 20px; line-height: 1.1; }
.fm-streak .sd { margin-top: 2px; font-size: 12px; font-weight: 800; color: #5a7196; }
.fm-dgrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px 10px; }
.fm-dcard {
  position: relative; display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 10px 4px 10px; min-height: 124px; border-radius: 20px;
  border: 3px solid var(--ink); background: linear-gradient(180deg, #ffffff, #e2f0ff); box-shadow: 0 4px 0 var(--ink); color: var(--ink); text-align: center;
}
.fm-dcard.big { grid-column: 1 / -1; flex-direction: row; justify-content: center; gap: 14px; min-height: 96px; background: linear-gradient(180deg, #fff0ff, #e7d6ff); }
.fm-dcard .dl { font-size: 12px; letter-spacing: 0.08em; color: #5a7196; }
.fm-dcard .di { font-size: 34px; line-height: 1.1; min-height: 38px; display: grid; place-items: center; }
.fm-dcard .dv { font-size: 18px; line-height: 1; }
.fm-dcard .dx { font-size: 12px; color: #1b7fa8; }
.fm-dcard .dn { font-size: 12px; line-height: 1.1; max-width: 100%; padding: 0 2px; }
.fm-dcard .dst { margin-top: auto; font-size: 13px; min-height: 18px; }
.fm-dcard.claimed { background: linear-gradient(180deg, #e6ffee, #c3f1d2); }
.fm-dcard.claimed .dst { color: var(--green); font-size: 20px; }
.fm-dcard.locked { filter: grayscale(0.55); opacity: 0.8; }
.fm-dcard.today {
  background: linear-gradient(180deg, #fff9dc, #ffe9a2); animation: fmToday 0.9s ease-in-out infinite alternate;
}
.fm-dcard.today .dst { color: #fff; background: var(--orange); border: 2.5px solid var(--ink); border-radius: 12px; padding: 3px 12px; font-size: 14px; text-shadow: 0 1px 0 var(--orange-dark); }
@keyframes fmToday { from { box-shadow: 0 4px 0 var(--ink), 0 0 0 3px var(--gold), 0 0 8px 2px rgba(255, 207, 58, 0.4); } to { box-shadow: 0 4px 0 var(--ink), 0 0 0 3px var(--gold), 0 0 22px 7px rgba(255, 207, 58, 0.9); } }
.fm-prev { flex: none; width: 46px; height: 46px; border-radius: 50%; border: 3px solid var(--ink); box-shadow: 0 3px 0 var(--ink); }
.fm-prev.trail { width: 62px; height: 24px; border-radius: 14px 8px 8px 14px; }
.fm-cd { text-align: center; color: var(--ink); font-size: 14px; letter-spacing: 0.06em; line-height: 1.5; }
.fm-cd b { display: block; font-size: 30px; letter-spacing: 0.04em; font-variant-numeric: tabular-nums; }

/* ---- stats / settings ---- */
.fm-sw { position: relative; flex: none; width: 58px; height: 34px; padding: 0; cursor: pointer; border-radius: 17px; border: 3px solid var(--ink); background: #aab6c8; transition: background 0.15s; }
.fm-sw::after { content: ""; position: absolute; top: 2px; left: 2px; width: 24px; height: 24px; border-radius: 50%; background: #fff; border: 2.5px solid var(--ink); transition: transform 0.15s; }
.fm-sw.on { background: var(--green); }
.fm-sw.on::after { transform: translateX(24px); }
.fm-tgl { font-size: 17px; flex: 1; }
.fm-sec { margin: 6px 4px 0; font-size: 13px; letter-spacing: 0.12em; color: var(--ink); }
.fm-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.fm-stat { padding: 9px 10px; border-radius: 16px; border: 3px solid var(--ink); background: rgba(255, 255, 255, 0.85); box-shadow: 0 3px 0 var(--ink); color: var(--ink); }
.fm-stat b { display: block; font-size: 20px; line-height: 1.1; }
.fm-stat span { font-size: 11px; font-weight: 800; color: #5a7196; letter-spacing: 0.03em; }
.fm-credits { padding: 12px 14px; border-radius: 18px; border: 3px solid var(--ink); background: rgba(255, 255, 255, 0.7); color: var(--ink); font-size: 12.5px; font-weight: 800; line-height: 1.5; }
.fm-credits em { display: block; margin-top: 6px; font-style: normal; font-weight: 900; opacity: 0.6; }

/* ---- missions ---- */
.fm-multbig { display: flex; align-items: center; gap: 14px; padding: 12px 14px; border-radius: 22px; border: 3px solid var(--ink); background: linear-gradient(180deg, #fff9dc, #ffe39a); box-shadow: 0 4px 0 var(--ink); color: var(--ink); }
.fm-multbig .fm-mult { min-width: 84px; height: 84px; font-size: 38px; border-width: 4px; box-shadow: 0 4px 0 var(--ink), 0 0 0 5px rgba(255, 207, 58, 0.45); }
.fm-multbig .mt { font-size: 18px; line-height: 1.15; }
.fm-multbig .ms { margin-top: 4px; font-size: 12px; font-weight: 800; color: #6b5a1e; line-height: 1.35; }
.fm-mrow .fm-an { font-size: 14.5px; }
.fm-skip { flex: none; min-height: 44px; min-width: 52px; padding: 4px 8px; cursor: pointer; border-radius: 14px; border: 3px solid var(--ink); background: rgba(255, 255, 255, 0.9); color: var(--ink); font-size: 11px; line-height: 1.15; box-shadow: 0 3px 0 var(--ink); }
.fm-skip b { display: block; font-size: 18px; }
.fm-skip:active { transform: translateY(2px); box-shadow: 0 1px 0 var(--ink); }
.fm-note { text-align: center; color: var(--ink); font-size: 12.5px; font-weight: 800; line-height: 1.45; padding: 0 6px; }

/* ---- upgrades ---- */
.fm-pips { display: flex; gap: 4px; margin-top: 6px; }
.fm-pips i { width: 20px; height: 9px; border-radius: 5px; border: 2px solid var(--ink); background: rgba(23, 52, 92, 0.15); }
.fm-pips i.on { background: linear-gradient(180deg, #ffe27a, var(--gold)); }
.fm-up .fm-btn { min-width: 84px; }

/* ---- hunt ---- */
.fm-word { display: flex; justify-content: center; gap: 6px; padding: 6px 0; }
.fm-word .fm-chip { flex: 1 1 0; width: auto; min-width: 0; max-width: 42px; height: 52px; font-size: 26px; border-radius: 13px; }

/* =============================================================== MODAL / BOX OVERLAY / TOAST / FX */
.fm-modal { position: absolute; inset: 0; z-index: 70; display: flex; align-items: center; justify-content: center; padding: 20px; background: rgba(10, 25, 50, 0.62); animation: fmIn 0.2s ease-out; }
.fm-mcard {
  display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; max-width: 340px; padding: 22px 18px 18px; text-align: center; color: var(--ink);
  border: 3px solid var(--ink); border-radius: 26px; background: linear-gradient(180deg, #fff, #dcecff); box-shadow: 0 6px 0 var(--ink), 0 14px 30px rgba(10, 30, 60, 0.4);
  animation: fmPop 0.55s cubic-bezier(.2, 1.8, .4, 1);
}
.fm-mcard .big { font-size: 64px; line-height: 1; }
.fm-mcard .mt { font-size: 24px; line-height: 1.1; color: var(--orange-dark); }
.fm-mcard .mm { font-size: 14px; font-weight: 800; line-height: 1.4; }

.fm-boxov { position: absolute; inset: 0; z-index: 80; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; padding: 20px;
  background: radial-gradient(ellipse at 50% 40%, rgba(60, 40, 120, 0.85), rgba(10, 18, 40, 0.94)); animation: fmIn 0.2s ease-out; }
.fm-boxt { font-size: 22px; letter-spacing: 0.06em; text-shadow: 0 3px 0 var(--ink); }
.fm-boxs { min-height: 18px; font-size: 13px; font-weight: 800; color: #cbd8f5; }
.fm-gift { font-size: 128px; line-height: 1; padding: 6px 14px; border: 0; background: transparent; cursor: pointer; filter: drop-shadow(0 8px 0 rgba(0, 0, 0, 0.35)); animation: fmWiggle 1.1s ease-in-out infinite; }
.fm-gift.open { animation: fmBoxShake 0.65s ease-in-out forwards; }
@keyframes fmWiggle { 0%, 100% { transform: rotate(-4deg) scale(1); } 50% { transform: rotate(4deg) scale(1.06); } }
@keyframes fmBoxShake { 0% { transform: rotate(0) scale(1); } 15% { transform: rotate(-12deg) scale(1.1); } 30% { transform: rotate(12deg) scale(1.15); } 45% { transform: rotate(-14deg) scale(1.2); } 60% { transform: rotate(14deg) scale(1.25); } 100% { transform: scale(1.6); opacity: 0; } }
.fm-rcard { display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; max-width: 300px; padding: 20px 16px; border-radius: 24px; border: 3px solid var(--ink); color: var(--ink);
  background: linear-gradient(180deg, #fff, #dcecff); box-shadow: 0 6px 0 var(--ink); animation: fmPop 0.6s cubic-bezier(.2, 1.8, .4, 1); text-align: center; }
.fm-rcard.rare { background: linear-gradient(180deg, #fff6c7, #ffd966); box-shadow: 0 6px 0 var(--ink), 0 0 30px 8px rgba(255, 207, 58, 0.8); }
.fm-rcard .ri { font-size: 64px; line-height: 1; }
.fm-rcard .rt { font-size: 24px; line-height: 1.1; }
.fm-rcard .rs { font-size: 13px; font-weight: 800; color: #5a7196; }
.fm-sumlist { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; max-width: 340px; }
.fm-sumlist span { padding: 6px 10px; border-radius: 14px; border: 3px solid var(--ink); background: #fff; color: var(--ink); font-size: 14px; }
.fm-sumlist span.rare { background: var(--gold); }
.fm-boxbtns { display: flex; gap: 10px; width: 100%; max-width: 300px; }
.fm-boxbtns .fm-btn { flex: 1; }

.fm-toasts { position: absolute; left: 0; right: 0; top: 0; z-index: 90; display: flex; flex-direction: column; align-items: center; pointer-events: none;
  padding-top: calc(var(--sat, env(safe-area-inset-top, 0px)) + 8px); }
.fm-toast {
  display: flex; align-items: center; gap: 10px; max-width: min(92vw, 380px); padding: 8px 16px 8px 10px; border-radius: 18px; border: 3px solid var(--ink);
  background: linear-gradient(180deg, #2c5799, var(--ink)); box-shadow: 0 5px 0 rgba(10, 25, 50, 0.8), 0 10px 24px rgba(10, 30, 60, 0.35);
  transform: translateY(-150%); opacity: 0; transition: transform 0.35s cubic-bezier(.2, 1.5, .4, 1), opacity 0.25s; pointer-events: none;
}
.fm-toast.on { transform: none; opacity: 1; }
.fm-toast.gold { background: linear-gradient(180deg, #ffb347, #e8830f); }
.fm-toast.egg { background: linear-gradient(180deg, #b07bff, #7a3cf0); }
.fm-toast .ti { flex: none; font-size: 30px; line-height: 1; }
.fm-toast .tt { font-size: 15px; letter-spacing: 0.02em; color: var(--gold); text-shadow: 0 2px 0 rgba(0, 0, 0, 0.35); line-height: 1.15; }
.fm-toast.gold .tt { color: #fff; }
.fm-toast .ts { margin-top: 2px; font-size: 12.5px; font-weight: 800; color: #dbe9ff; line-height: 1.25; }

.fm-fx { position: absolute; inset: 0; z-index: 95; pointer-events: none; overflow: hidden; }
.fm-fly { position: absolute; font-size: 22px; line-height: 1; opacity: 0; transform: translate(-50%, -50%); animation: fmFly 0.85s cubic-bezier(.5, 0, .75, .35) both; }
@keyframes fmFly { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); } 15% { opacity: 1; transform: translate(-50%, -50%) scale(1.25); } 100% { opacity: 0.9; transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0.5); } }
.fm-cf { position: absolute; top: -16px; left: var(--x); width: 9px; height: 14px; border-radius: 2px; background: var(--c); animation: fmCf var(--d) linear forwards; }
@keyframes fmCf { to { transform: translate(var(--dx), 112vh) rotate(var(--r)); } }

@media (prefers-reduced-motion: reduce) {
  .fm-main *, .fm-ov *, .fm-modal *, .fm-boxov *, .fm-toast { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}
`;

// ================================================================================================================ helpers

const fmt = (n) => String(Math.max(0, Math.floor(Number.isFinite(n) ? n : 0))).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
function fmtDist(m) {
  m = Math.max(0, Math.round(m || 0));
  return m >= 1000 ? `${(m / 1000).toFixed(1).replace('.', ',')} km` : `${m} m`;
}
function fmtTons(t) {
  const kg = Math.round((t || 0) * 1000);
  if (kg < 1000) return `${kg} kg`;
  const t1 = Math.round(t * 10) / 10;
  return t1 < 10 ? `${t1.toFixed(1).replace('.', ',')} ton` : `${fmt(Math.round(t))} ton`;
}
function fmtClock(ms) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const p = (n) => (n < 10 ? '0' : '') + n;
  return `${p(Math.floor(s / 3600))}:${p(Math.floor((s % 3600) / 60))}:${p(s % 60)}`;
}

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined && text !== null) e.textContent = text;
  return e;
}
function add(parent, ...kids) {
  for (const k of kids) if (k) parent.appendChild(k);
  return parent;
}
function clear(e) {
  while (e.firstChild) e.removeChild(e.firstChild);
}
function button(cls, text, fn, label) {
  const b = el('button', cls, text);
  b.setAttribute('type', 'button');
  if (label) b.setAttribute('aria-label', label);
  if (fn) b.addEventListener('click', (e) => { if (e && e.stopPropagation) e.stopPropagation(); fn(e); });
  return b;
}
function setCss(e, k, v) {
  e.style.setProperty(k, v);
}
const nameOf = (list, id) => (list.find((x) => x.id === id) || { name: id }).name;

// reward spec / given-reward -> ['❄️ 100', '💎 1', ...]
function rewardChips(r) {
  const out = [];
  if (!r) return out;
  if (r.coins) out.push(`❄️ ${fmt(r.coins)}`);
  if (r.crystals) out.push(`💎 ${r.crystals}`);
  if (r.boxes) out.push(`🎁 ${r.boxes}`);
  if (r.sleds) out.push(`🛷 ${r.sleds}`);
  if (r.skin) out.push(`👕 ${nameOf(SKINS, r.skin)}`);
  if (r.trail) out.push(`✨ ${nameOf(TRAILS, r.trail)}`);
  return out;
}
const rewardLine = (r) => rewardChips(r).join('  ');

function previewEl(kind, id) {
  const list = kind === 'skin' ? SKINS : TRAILS;
  const it = list.find((x) => x.id === id);
  const pv = (it && it.preview) || { a: '#fff', b: '#cfe2f7' };
  const d = el('div', `fm-prev ${kind === 'trail' ? 'trail' : 'ball'}`);
  d.style.background = kind === 'trail' ? `linear-gradient(270deg, ${pv.a}, ${pv.b})` : `radial-gradient(circle at 34% 30%, ${pv.a}, ${pv.b} 92%)`;
  return d;
}

function injectStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const st = document.createElement('style');
  st.id = STYLE_ID;
  st.textContent = CSS;
  (document.head || document.body).appendChild(st);
}

// ================================================================================================================ factory

export function createMenus({ save, meta, root, callbacks = {} } = {}) {
  injectStyle();
  const host = root || document.getElementById('app') || document.body;
  const cb = callbacks || {};
  const sfx = (k) => { try { if (cb.sfx) cb.sfx(k); } catch { /* audio is optional */ } };
  const toggles = () => {
    try { return { sound: true, music: true, haptics: true, visualName: 'NORMAL', ...(cb.getToggles ? cb.getToggles() : {}) }; } catch { return { sound: true, music: true, haptics: true, visualName: 'NORMAL' }; }
  };
  const hasRAF = typeof requestAnimationFrame === 'function';

  let refs = null;          // main screen elements
  let mainOpen = false;
  let info = { level: 1, levelStars: 0, theme: '', endlessBest: 0, endlessBestDist: 0, dailyNum: 1, dailyBest: 0, coins: 0 };
  let activePanel = null;
  let modalEl = null;
  let boxEl = null;
  let mainTimer = 0;
  let tick = 0;
  let holidayShown = '';
  const offs = [];

  // ---- persistent layers ----
  const toastLayer = el('div', 'fm-toasts');
  toastLayer.setAttribute('aria-live', 'polite');
  const fxLayer = el('div', 'fm-fx');
  host.appendChild(toastLayer);
  host.appendChild(fxLayer);

  const coins = () => (save && Number.isFinite(save.coins) ? save.coins : info.coins || 0);

  // ============================================================================================ fx helpers

  function confetti(n = 60) {
    const colors = ['#ff5d73', '#ffb02e', '#ffe14a', '#5fe08a', '#3fc1ff', '#b07bff', '#ffffff'];
    for (let i = 0; i < n; i++) {
      const c = el('i', 'fm-cf');
      setCss(c, '--x', `${Math.random() * 100}%`);
      setCss(c, '--dx', `${Math.round((Math.random() - 0.5) * 160)}px`);
      setCss(c, '--r', `${Math.round(360 + Math.random() * 900)}deg`);
      setCss(c, '--d', `${(1.8 + Math.random() * 1.6).toFixed(2)}s`);
      setCss(c, '--c', colors[i % colors.length]);
      c.style.animationDelay = `${(Math.random() * 0.4).toFixed(2)}s`;
      fxLayer.appendChild(c);
      setTimeout(() => c.remove(), 3800);
    }
  }

  function burst(parent, emoji, n = 14, dist = 90) {
    for (let i = 0; i < n; i++) {
      const f = el('span', 'fm-burst', emoji);
      const a = (i / n) * Math.PI * 2 + Math.random() * 0.5;
      const d = dist * (0.55 + Math.random() * 0.6);
      setCss(f, '--dx', `${Math.round(Math.cos(a) * d)}px`);
      setCss(f, '--dy', `${Math.round(Math.sin(a) * d * 0.85 - 10)}px`);
      parent.appendChild(f);
      setTimeout(() => f.remove(), 1200);
    }
  }

  const center = (e) => {
    const r = e && e.getBoundingClientRect ? e.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };
    const o = fxLayer.getBoundingClientRect ? fxLayer.getBoundingClientRect() : { left: 0, top: 0 };
    return { x: r.left - o.left + r.width / 2, y: r.top - o.top + r.height / 2 };
  };

  // emoji particles flying from one element to another (coins into the counter), then done()
  function fly(from, to, emoji, n, done) {
    if (!from || !to) { if (done) done(); return; }
    const a = center(from), b = center(to);
    for (let i = 0; i < n; i++) {
      const f = el('span', 'fm-fly', emoji);
      f.style.left = `${Math.round(a.x + (Math.random() - 0.5) * 30)}px`;
      f.style.top = `${Math.round(a.y + (Math.random() - 0.5) * 20)}px`;
      setCss(f, '--dx', `${Math.round(b.x - a.x)}px`);
      setCss(f, '--dy', `${Math.round(b.y - a.y)}px`);
      f.style.animationDelay = `${i * 55}ms`;
      fxLayer.appendChild(f);
      setTimeout(() => f.remove(), 900 + i * 55 + 80);
    }
    setTimeout(() => { if (done) done(); }, 780 + n * 55);
  }

  // numeric pill (❄️ / 💎) with count-up
  function makePill(icon, cls) {
    const box = el('div', `fm-pill ${cls || ''}`.trim());
    const ico = el('span', 'ico', icon);
    const num = el('span', 'num', '0');
    add(box, ico, num);
    let shown = 0;
    let raf = 0;
    return {
      el: box,
      num,
      set(target, animate) {
        const from = shown;
        shown = target;
        if (hasRAF && raf && typeof cancelAnimationFrame === 'function') cancelAnimationFrame(raf);
        if (!animate || from === target || !hasRAF) { num.textContent = fmt(target); return; }
        box.classList.remove('bump');
        void box.offsetWidth;
        box.classList.add('bump');
        const t0 = performance.now();
        const step = (now) => {
          const k = Math.min(1, (now - t0) / 450);
          num.textContent = fmt(Math.round(from + (target - from) * (1 - Math.pow(1 - k, 3))));
          if (k < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
    };
  }

  // ============================================================================================ toasts

  const toastQ = [];
  let toastBusy = false;
  const toastSeen = new Map();

  function pumpToast() {
    if (toastBusy || !toastQ.length) return;
    toastBusy = true;
    const t = toastQ.shift();
    const box = el('div', `fm-toast ${t.kind || ''}`.trim());
    const body = el('div', 'tb');
    add(body, el('div', 'tt', t.title), t.sub ? el('div', 'ts', t.sub) : null);
    add(box, el('div', 'ti', t.icon || '🏆'), body);
    toastLayer.appendChild(box);
    void box.offsetWidth;
    box.classList.add('on');
    setTimeout(() => {
      box.classList.remove('on');
      setTimeout(() => { box.remove(); toastBusy = false; pumpToast(); }, 380);
    }, t.ms || 2700);
  }
  function toast(t) {
    if (!t || !t.title) return;
    if (toastQ.length >= 4) toastQ.splice(1, 1);
    toastQ.push(t);
    pumpToast();
  }

  function toastAchievement(a, extra) {
    if (!a) return;
    const nowT = Date.now();
    if (toastSeen.has(a.id) && nowT - toastSeen.get(a.id) < 4000) return;
    toastSeen.set(a.id, nowT);
    const reward = extra && extra.reward ? extra.reward : a.reward;
    const line = rewardLine(reward);
    toast({
      icon: a.icon || '🏆',
      title: `🏆 ${a.name}`,
      sub: extra && extra.auto ? `${line ? `${line} · ` : ''}SIR BULUNDU!` : (line ? `${line} · ÖDÜL BAŞARIMLAR'DA` : ''),
      kind: a.secret ? 'egg' : '',
    });
    if (mainOpen) updateMain();
  }

  // ============================================================================================ panels

  function closePanel(silent) {
    const p = activePanel;
    if (!p) return;
    activePanel = null;
    for (const t of p.timers) { clearInterval(t); clearTimeout(t); }
    p.el.remove();
    if (p.onClose) p.onClose();
    if (!silent && mainOpen) updateMain();
  }

  function openPanel({ id, title, sub = '', pills = ['coins'], tabs = null, onTab = null }) {
    closePanel(true);
    const ov = el('div', `fm-ov fm-p-${id}`);
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.setAttribute('aria-label', title);

    const p = { id, el: ov, timers: [], pills: {}, onClose: null, list: null, body: null, setSub: null, refreshPills: null, tab: 0 };

    const head = el('div', 'fm-head');
    const titles = el('div', 'fm-titles');
    const subEl = el('div', 'fm-sub', sub);
    add(titles, el('div', title.length > 11 ? 'fm-title long' : 'fm-title', title), subEl);
    p.setSub = (s) => { subEl.textContent = s; };
    const pillBox = el('div', 'fm-pills');
    if (pills.includes('coins')) { p.pills.coins = makePill('❄️'); add(pillBox, p.pills.coins.el); }
    if (pills.includes('crystals')) { p.pills.crystals = makePill('💎', 'cr'); add(pillBox, p.pills.crystals.el); }
    p.refreshPills = (animate) => {
      if (p.pills.coins) p.pills.coins.set(coins(), animate);
      if (p.pills.crystals) p.pills.crystals.set(meta.crystals, animate);
    };
    p.refreshPills(false);
    const x = button('fm-x', '✕', () => { sfx('back'); closePanel(); }, 'Kapat');
    add(head, titles, x);
    if (pillBox.firstChild) head.appendChild(pillBox);
    add(ov, head);

    if (tabs) {
      const tb = el('div', 'fm-tabs');
      const els = tabs.map((name, i) => {
        const t = button(`fm-tab${i === 0 ? ' on' : ''}`, name, () => {
          if (p.tab === i) return;
          p.tab = i;
          els.forEach((e2, j) => e2.classList.toggle('on', j === i));
          sfx('click');
          if (p.body) p.body.scrollTop = 0;
          if (onTab) onTab(i);
        });
        return t;
      });
      add(tb, ...els);
      add(ov, tb);
    }

    const body = el('div', 'fm-body');
    const list = el('div', 'fm-list');
    body.appendChild(list);
    // The game blocks document-level touchmove (iOS rubber band); keep drags inside the scroller from ever reaching it.
    body.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: true });
    add(ov, body);
    p.body = body;
    p.list = list;
    host.appendChild(ov);
    activePanel = p;
    return p;
  }

  // ---------------------------------------------------------------------------------------------- daily reward

  function openDaily() {
    sfx('click');
    const p = openPanel({ id: 'daily', title: 'GÜNLÜK ÖDÜL', pills: ['coins', 'crystals'] });
    let claiming = false;
    let todayEl = null;
    let claimBtn = null;

    function card(day, d) {
      const r = meta.dailyReward(day);
      const claimedUntil = d.available ? d.day - 1 : d.day;
      const state = day <= claimedUntil ? 'claimed' : d.available && day === d.day ? 'today' : 'locked';
      const c = el('div', `fm-dcard ${state}${day === 7 ? ' big' : ''}`);
      const info1 = el('div', day === 7 ? 'fm-dinfo' : '');
      const label = el('div', 'dl', day === 7 ? 'GÜN 7 · BÜYÜK ÖDÜL' : `GÜN ${day}`);
      let icon;
      let val;
      if (r.skin || r.trail) {
        icon = el('div', 'di');
        icon.appendChild(previewEl(r.skin ? 'skin' : 'trail', r.skin || r.trail));
        val = el('div', 'dn', r.skin ? nameOf(SKINS, r.skin) : nameOf(TRAILS, r.trail));
      } else {
        icon = el('div', 'di', day >= 6 ? '❄️❄️' : '❄️');
        val = el('div', 'dv', `+${fmt(r.coins)}`);
      }
      const extra = r.crystals ? el('div', 'dx', `+💎 ${r.crystals}`) : null;
      const st = el('div', 'dst', state === 'claimed' ? '✓' : state === 'today' ? 'AL!' : '🔒');
      if (day === 7) {
        add(info1, label, val, extra);
        add(c, icon, info1, st);
      } else {
        add(c, label, icon, val, extra, st);
      }
      if (state === 'today') todayEl = c;
      return c;
    }

    function render() {
      const d = meta.daily();
      clear(p.list);
      todayEl = null;
      claimBtn = null;
      p.setSub(d.streak > 0 ? `🔥 SERİ ${d.streak} GÜN` : 'HER GÜN GEL, KAZAN');

      const sb = el('div', 'fm-streak');
      const flame = el('div', 'fl', d.streak > 0 ? '🔥' : '🌱');
      const txt = el('div', '');
      add(txt, el('div', 'st', d.streak > 0 ? `${d.streak} günlük seri!` : 'Serini başlat!'));
      const sd = d.grace
        ? 'Bir günü kaçırdın ama seri bozulmadı. Bu hoşgörü günü!'
        : 'Bir gün atlarsan seri bozulmaz. İki gün atlarsan sıfırlanır.';
      add(txt, el('div', 'sd', sd));
      add(sb, flame, txt);
      p.list.appendChild(sb);

      const grid = el('div', 'fm-dgrid');
      for (let day = 1; day <= 7; day++) grid.appendChild(card(day, d));
      p.list.appendChild(grid);

      if (d.available) {
        claimBtn = button('fm-btn big glow', 'ÖDÜLÜ AL!', claim);
        p.list.appendChild(claimBtn);
      } else {
        const cd = el('div', 'fm-cd');
        const label = el('span', '', 'SONRAKİ ÖDÜL');
        const clock = el('b', '', fmtClock(d.nextInMs));
        add(cd, label, clock);
        p.list.appendChild(cd);
        const iv = setInterval(() => {
          const nd = meta.daily();
          if (nd.available) { clearInterval(iv); if (activePanel === p && !claiming) render(); return; }
          clock.textContent = fmtClock(nd.nextInMs);
        }, 1000);
        p.timers.push(iv);
      }
    }

    function claim() {
      if (claiming) return;
      const r = meta.claimDaily();
      if (!r) { render(); return; }
      claiming = true;
      sfx('confirm');
      if (cb.onReward) { try { cb.onReward('daily', r); } catch { /* ignore */ } }
      const src = todayEl || claimBtn;
      if (r.coins) fly(src, p.pills.coins && p.pills.coins.el, '❄️', 9, () => p.refreshPills(true));
      if (r.crystals) fly(src, p.pills.crystals && p.pills.crystals.el, '💎', Math.min(6, 2 + r.crystals), () => p.refreshPills(true));
      if (r.skin || r.trail) {
        toast({ icon: '👕', title: 'YENİ EŞYA!', sub: r.skin ? nameOf(SKINS, r.skin) : nameOf(TRAILS, r.trail), kind: 'gold' });
      }
      confetti(r.skin || r.trail ? 70 : 36);
      if (todayEl) todayEl.classList.add('fm-popc');
      const t = setTimeout(() => {
        claiming = false;
        if (activePanel === p) { render(); p.refreshPills(true); }
        if (mainOpen) updateMain();
      }, 1150);
      p.timers.push(t);
    }

    render();
    return p;
  }

  // ---------------------------------------------------------------------------------------------- achievements

  function openAchievements() {
    sfx('click');
    const p = openPanel({ id: 'ach', title: 'BAŞARIMLAR', tabs: ['TÜMÜ', 'AÇIK', 'GİZLİ'], onTab: () => render(), pills: ['coins', 'crystals'] });
    const secretHint = (def) => def.hint || 'Gizli bir şey var...';

    function row(def) {
      const pr = meta.progress(def.id);
      const hidden = def.secret && !pr.done;
      const r = el('div', `fm-row${pr.done ? ' done' : ''}${pr.claimed ? ' claimed' : ''}${hidden ? ' secret' : ''}`);
      const ico = el('div', 'fm-aico', hidden ? '❓' : def.icon);
      const mid = el('div', 'fm-amid');
      add(mid, el('div', 'fm-an', hidden ? '???' : def.name), el('div', 'fm-ad', hidden ? `İpucu: ${secretHint(def)}` : def.desc));
      if (!hidden && def.goal > 1) {
        const bar = el('div', 'fm-abar');
        const b = el('div', 'fm-bar');
        const fill = el('i');
        setCss(fill, '--p', `${Math.round((pr.value / pr.goal) * 100)}%`);
        b.appendChild(fill);
        add(bar, b, el('div', 'fm-bn', `${fmt(pr.value)}/${fmt(pr.goal)}`));
        mid.appendChild(bar);
      }
      mid.appendChild(el('div', 'fm-ar', hidden ? '🎁 ???' : rewardLine(def.reward)));
      add(r, ico, mid);
      if (pr.done && !pr.claimed) {
        const claimBtn = button('fm-btn sm glow', 'AL', () => claimOne(def, r, claimBtn));
        r.appendChild(claimBtn);
      } else if (pr.claimed) {
        r.appendChild(el('div', 'fm-ok', '✓'));
      }
      return r;
    }

    function claimOne(def, rowEl, btn) {
      const given = meta.claimAchievement(def.id);
      if (!given) { render(); return; }
      sfx('confirm');
      if (cb.onReward) { try { cb.onReward('achievement', given); } catch { /* ignore */ } }
      if (given.coins) fly(btn, p.pills.coins.el, '❄️', 6, () => p.refreshPills(true));
      if (given.crystals) fly(btn, p.pills.crystals.el, '💎', 3, () => p.refreshPills(true));
      if (given.skin || given.trail) toast({ icon: '🎁', title: 'YENİ EŞYA!', sub: given.skin ? nameOf(SKINS, given.skin) : nameOf(TRAILS, given.trail), kind: 'gold' });
      rowEl.classList.add('fm-popc');
      const keep = p.body.scrollTop;
      const t = setTimeout(() => { if (activePanel === p) { render(); p.body.scrollTop = keep; } }, 700);
      p.timers.push(t);
    }

    function render() {
      clear(p.list);
      const unclaimed = meta.unclaimedCount();
      p.setSub(`${meta.doneCount()}/${ACHIEVEMENTS.length} AÇIK${unclaimed ? ` · ${unclaimed} ÖDÜL BEKLİYOR` : ''}`);
      let items = ACHIEVEMENTS.slice();
      const state = (d) => meta.progress(d.id);
      if (p.tab === 1) items = items.filter((d) => state(d).done);
      else if (p.tab === 2) items = items.filter((d) => d.secret);
      const rank = (d) => {
        const s = state(d);
        if (s.done && !s.claimed) return 0;
        if (d.secret && !s.done) return 3;
        if (s.claimed) return 2;
        return 1;
      };
      items.sort((a, b) => {
        const ra = rank(a), rb = rank(b);
        if (ra !== rb) return ra - rb;
        if (ra === 1) return state(b).value / state(b).goal - state(a).value / state(a).goal;
        return 0;
      });
      if (p.tab === 0 && unclaimed > 1) {
        p.list.appendChild(button('fm-btn big green', `HEPSİNİ AL (${unclaimed})`, () => {
          sfx('confirm');
          let coinsSum = 0;
          let crystalsSum = 0;
          for (const d of ACHIEVEMENTS) {
            const s = meta.progress(d.id);
            if (s.done && !s.claimed) {
              const g = meta.claimAchievement(d.id);
              if (g) { coinsSum += g.coins || 0; crystalsSum += g.crystals || 0; if (cb.onReward) { try { cb.onReward('achievement', g); } catch { /* ignore */ } } }
            }
          }
          confetti(40);
          if (coinsSum) fly(p.body, p.pills.coins.el, '❄️', 10, () => p.refreshPills(true));
          if (crystalsSum) fly(p.body, p.pills.crystals.el, '💎', 4, () => p.refreshPills(true));
          const t = setTimeout(() => { if (activePanel === p) render(); }, 700);
          p.timers.push(t);
        }));
      }
      if (!items.length) p.list.appendChild(el('div', 'fm-note', p.tab === 1 ? 'Henüz açık başarım yok. Oyna, kazan!' : 'Burada bir şey yok.'));
      for (const d of items) p.list.appendChild(row(d));
      if (p.tab === 2) p.list.appendChild(el('div', 'fm-note', `🐇 ${meta.stats().eggs}/${EGGS.length} sır bulundu. Menüde, oyunda, her yerde bir şeyler saklı...`));
    }

    render();
    return p;
  }

  // ---------------------------------------------------------------------------------------------- settings

  function openSettings() {
    sfx('click');
    const p = openPanel({ id: 'settings', title: 'AYARLAR', sub: `FREEMON v${VERSION}`, pills: [] });

    function toggleRow(icon, label, key, fn) {
      const r = el('div', 'fm-row');
      const sw = button(`fm-sw${toggles()[key] ? ' on' : ''}`, '', () => {
        const next = !toggles()[key];
        try { if (fn) fn(next); } catch { /* ignore */ }
        sfx('toggle');
        sw.classList.toggle('on', !!toggles()[key]);
      }, label);
      sw.setAttribute('role', 'switch');
      sw.setAttribute('aria-checked', String(!!toggles()[key]));
      add(r, el('div', 'fm-aico', icon), el('div', 'fm-tgl', label), sw);
      return r;
    }

    add(p.list, toggleRow('🔊', 'SES', 'sound', cb.onSound), toggleRow('🎵', 'MÜZİK', 'music', cb.onMusic), toggleRow('📳', 'TİTREŞİM', 'haptics', cb.onHaptics));

    const vr = el('div', 'fm-row');
    const vlabel = el('div', 'fm-tgl', 'GÖRÜNÜM');
    const vbtn = button('fm-btn blue', `🎨 ${toggles().visualName}`, () => {
      let name;
      try { name = cb.onVisualCycle ? cb.onVisualCycle() : null; } catch { name = null; }
      sfx('toggle');
      vbtn.textContent = `🎨 ${name || toggles().visualName}`;
    });
    add(vr, el('div', 'fm-aico', '🖼️'), vlabel, vbtn);
    p.list.appendChild(vr);

    p.list.appendChild(el('div', 'fm-sec', 'İSTATİSTİKLER'));
    const s = meta.stats();
    const tiles = [
      ['SEVİYE', s.level], ['TOPLAM KOŞU', fmt(s.runs)], ['EN UZUN KOŞU', fmtDist(s.bestDistance)], ['TOPLAM MESAFE', fmtDist(s.totalDistance)],
      ['YUTULAN', fmt(s.swallowed)], ['YIKILAN BİNA', fmt(s.destroyed)], ['KIRILAN ENGEL', fmt(s.smashed)], ['KIL PAYI', fmt(s.closeCalls)],
      ['TOPLANAN TON', fmtTons(s.totalTons)], ['YILDIZ', `⭐ ${s.stars}`], ['BAŞARIM', `${s.achievements}/${s.achievementsTotal}`], ['SIRLAR', `${s.eggs}/${s.eggsTotal}`],
      ['ÇARPAN', `x${s.multiplier}`], ['GÖREV SETİ', fmt(s.missionSets)],
    ];
    const grid = el('div', 'fm-stats');
    for (const [k, v] of tiles) add(grid, add(el('div', 'fm-stat'), el('b', '', String(v)), el('span', '', k)));
    p.list.appendChild(grid);

    const cr = el('div', 'fm-credits');
    cr.appendChild(el('div', '', '3D modeller: Kenney (kenney.nl) — CC0 · Ses efektleri: Kenney, rubberduck (OpenGameArt) — CC0 · Müzik ve kod: FREEMON ekibi'));
    cr.appendChild(el('em', '', `FREEMON v${VERSION}`));
    p.list.appendChild(cr);
    return p;
  }

  // ---------------------------------------------------------------------------------------------- missions

  function openMissions() {
    sfx('click');
    const p = openPanel({ id: 'missions', title: 'GÖREVLER', pills: ['coins', 'crystals'] });

    function render() {
      clear(p.list);
      const mult = meta.multiplier();
      const max = meta.maxMultiplier();
      p.setSub(`SET #${meta.missionSetsDone() + 1}`);

      const mb = el('div', 'fm-multbig');
      const badge = el('div', 'fm-mult', `x${mult}`);
      const txt = el('div', '');
      add(txt, el('div', 'mt', 'KALICI SKOR ÇARPANI'));
      add(txt, el('div', 'ms', mult >= max ? 'Maksimum çarpana ulaştın!' : `3 görevi bitir, çarpan x${mult + 1} olsun. En fazla x${max}. Skorun her zaman bu çarpanla çarpılır.`));
      add(mb, badge, txt);
      p.list.appendChild(mb);

      const ms = meta.missions();
      ms.forEach((m, i) => {
        const r = el('div', `fm-row fm-mrow${m.done ? ' done' : ''}`);
        const mid = el('div', 'fm-amid');
        add(mid, el('div', 'fm-an', m.text));
        const bar = el('div', 'fm-abar');
        const b = el('div', 'fm-bar');
        const fill = el('i');
        setCss(fill, '--p', `${Math.round((m.value / m.goal) * 100)}%`);
        b.appendChild(fill);
        add(bar, b, el('div', 'fm-bn', `${fmt(m.value)}/${fmt(m.goal)}`));
        mid.appendChild(bar);
        add(r, el('div', 'fm-aico', m.icon), mid);
        if (m.done) r.appendChild(el('div', 'fm-ok', '✓'));
        else {
          const cost = meta.skipCost();
          const sk = button('fm-skip', '', () => {
            if (!meta.skipMission(i)) { sk.classList.add('fm-shake'); sfx('back'); setTimeout(() => sk.classList.remove('fm-shake'), 340); return; }
            sfx('confirm');
            p.refreshPills(true);
            render();
          }, 'Görevi değiştir');
          add(sk, el('b', '', '↻'), document.createTextNode(cost ? '💎 1' : 'BEDAVA'));
          r.appendChild(sk);
        }
        p.list.appendChild(r);
      });

      const rw = meta.missionSetReward();
      p.list.appendChild(el('div', 'fm-note', `SET ÖDÜLÜ: ${rewardLine(rw)}`));
      p.list.appendChild(el('div', 'fm-note', 'Her gün 1 görevi ücretsiz değiştirebilirsin, sonrası 💎 1.'));
    }

    render();
    return p;
  }

  // ---------------------------------------------------------------------------------------------- upgrades

  function openUpgrades() {
    sfx('click');
    const p = openPanel({ id: 'up', title: 'GELİŞTİR', sub: 'GÜÇLENDİRME SÜRELERİ', pills: ['coins', 'crystals'] });

    function render() {
      clear(p.list);
      for (const u of UPGRADES) {
        const lv = meta.upgradeLevel(u.id);
        const cost = meta.upgradeCost(u.id);
        const r = el('div', 'fm-row fm-up');
        const mid = el('div', 'fm-amid');
        const cur = meta.duration(u.id);
        const nextDur = lv < 5 ? u.durations[lv + 1] : null;
        add(mid, el('div', 'fm-an', u.name), el('div', 'fm-ad', nextDur ? `${cur} sn → ${nextDur} sn` : `${cur} sn (en yüksek)`));
        const pips = el('div', 'fm-pips');
        for (let i = 0; i < 5; i++) pips.appendChild(el('i', i < lv ? 'on' : ''));
        mid.appendChild(pips);
        add(r, el('div', 'fm-aico', u.icon), mid);
        if (cost === null) r.appendChild(button('fm-btn sm on', 'MAKS ✓'));
        else {
          const afford = coins() >= cost;
          const b = button(`fm-btn${afford ? '' : ' poor'}`, `❄️ ${fmt(cost)}`, () => {
            if (!afford || !meta.buyUpgrade(u.id)) {
              b.classList.add('fm-shake'); sfx('back'); setTimeout(() => b.classList.remove('fm-shake'), 340);
              return;
            }
            sfx('confirm');
            if (cb.onReward) { try { cb.onReward('upgrade', { upgrade: u.id }); } catch { /* ignore */ } }
            p.refreshPills(true);
            render();
            confetti(14);
          });
          r.appendChild(b);
        }
        p.list.appendChild(r);
      }

      // sled
      const sr = el('div', 'fm-row fm-up');
      const smid = el('div', 'fm-amid');
      add(smid, el('div', 'fm-an', 'KIZAK'), el('div', 'fm-ad', 'Bir çarpışmayı affeder. Koşuda çift dokunarak kullan.'), el('div', 'fm-ar', `Stok: 🛷 ${meta.sleds()}`));
      add(sr, el('div', 'fm-aico', '🛷'), smid);
      const afford = coins() >= SLED_PACK.price;
      const sb = button(`fm-btn blue${afford ? '' : ' poor'}`, `${SLED_PACK.count}'LÜ ❄️ ${SLED_PACK.price}`, () => {
        if (!afford || !meta.buySled(1)) {
          sb.classList.add('fm-shake'); sfx('back'); setTimeout(() => sb.classList.remove('fm-shake'), 340);
          return;
        }
        sfx('confirm');
        p.refreshPills(true);
        render();
      });
      sr.appendChild(sb);
      p.list.appendChild(sr);

      p.list.appendChild(el('div', 'fm-note', `💎 Kristal: Yeti seni yakalayınca devam etmek için kullanılır (her seferinde iki katı). Şu an: ${meta.crystals}`));
    }

    render();
    return p;
  }

  // ---------------------------------------------------------------------------------------------- letter hunt

  function openHunt() {
    sfx('click');
    const p = openPanel({ id: 'hunt', title: 'GÜNÜN KELİMESİ', pills: ['coins'] });
    const h = meta.letterHunt();
    p.setSub(h.complete ? 'BUGÜN TAMAM!' : `${h.count}/7 HARF`);
    const word = el('div', 'fm-word');
    h.found.forEach((got, i) => word.appendChild(el('div', `fm-chip${got ? ' got' : i === h.nextLetter ? ' next' : ''}`, got || i === h.nextLetter ? WORD[i] : '?')));
    p.list.appendChild(word);
    p.list.appendChild(el('div', 'fm-note', h.complete
      ? 'Bugünkü kelimeyi tamamladın! Yarın yeni bir av seni bekliyor.'
      : `Koşu sırasında F-R-E-E-M-O-N harfleri sırayla belirir. Bir günde yedisini de topla! Sıradaki harf: ${h.letter}`));
    const r = el('div', 'fm-row');
    add(r, el('div', 'fm-aico', '🔤'), add(el('div', 'fm-amid'), el('div', 'fm-an', h.complete ? 'KAZANDIN' : 'ÖDÜL'), el('div', 'fm-ar', rewardLine(h.reward))));
    p.list.appendChild(r);
    const sb = el('div', 'fm-streak');
    add(sb, el('div', 'fl', h.streak > 0 ? '🔥' : '🌱'),
      add(el('div', ''), el('div', 'st', h.streak > 0 ? `${h.streak} günlük seri` : 'Seri yok'), el('div', 'sd', `Her gün tamamla, ödül büyüsün. Seri günü: ${h.streakDay}/7`)));
    p.list.appendChild(sb);
    return p;
  }

  // ---------------------------------------------------------------------------------------------- modal (holiday)

  function closeModal() {
    if (modalEl) { modalEl.remove(); modalEl = null; }
  }
  function openHoliday(hol) {
    closeModal();
    const m = el('div', 'fm-modal');
    const card = el('div', 'fm-mcard');
    const get = button('fm-btn big', `AL ${rewardLine({ coins: hol.coins })}`, () => {
      const r = meta.claimHoliday();
      sfx('confirm');
      if (r && cb.onReward) { try { cb.onReward('holiday', r); } catch { /* ignore */ } }
      confetti(60);
      if (r && refs) fly(get, refs.coinsPill.el, '❄️', 8, () => { refs.coinsPill.set(coins(), true); });
      setTimeout(closeModal, 500);
    });
    add(card, el('div', 'big', hol.emoji), el('div', 'mt', hol.name), el('div', 'mm', hol.msg), get);
    m.appendChild(card);
    host.appendChild(m);
    modalEl = m;
    confetti(50);
  }
  function maybeHoliday() {
    let hol = null;
    try { hol = meta.holiday(); } catch { hol = null; }
    if (!hol || hol.claimed || holidayShown === hol.key) return;
    holidayShown = hol.key;
    openHoliday(hol);
  }

  // ---------------------------------------------------------------------------------------------- mystery boxes

  function closeBoxes() {
    if (boxEl) { boxEl.remove(); boxEl = null; }
  }

  function rewardCard(r) {
    const rare = !!r.rare;
    const c = el('div', `fm-rcard${rare ? ' rare' : ''}`);
    let icon = '❄️';
    let title = r.coins ? `+${fmt(r.coins)} ❄️` : '';
    let subt = rare ? 'NADİR!' : 'Kar tanesi';
    if (r.skin) { icon = '👕'; title = nameOf(SKINS, r.skin); subt = 'YENİ TOP!'; }
    else if (r.trail) { icon = '✨'; title = nameOf(TRAILS, r.trail); subt = 'YENİ İZ!'; }
    else if (r.crystals) { icon = '💎'; title = `+${r.crystals} KRİSTAL`; subt = 'Devam etmek için'; }
    else if (r.sleds) { icon = '🛷'; title = `+${r.sleds} KIZAK`; subt = 'Bir çarpışmayı affeder'; }
    else if (r.converted) { subt = 'Zaten sahiptin: kar tanesine döndü'; }
    if (r.skin || r.trail) {
      const ri = el('div', 'ri');
      ri.appendChild(previewEl(r.skin ? 'skin' : 'trail', r.skin || r.trail));
      c.appendChild(ri);
    } else c.appendChild(el('div', 'ri', icon));
    add(c, el('div', 'rt', title), el('div', 'rs', subt));
    return c;
  }

  function openBoxes(n, onDone) {
    closeBoxes();
    const have = Math.max(0, Math.floor(meta.boxes));
    const total = Math.min(have, Math.max(1, Math.floor(n || have)));
    if (total <= 0) { if (onDone) onDone(); return null; }
    sfx('click');
    const ov = el('div', 'fm-boxov');
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.setAttribute('aria-label', 'Sürpriz Kutu');
    host.appendChild(ov);
    boxEl = ov;
    let idx = 0;
    let busy = false;
    let finished = false;

    function finish() {
      if (finished) return;
      finished = true;
      closeBoxes();
      if (mainOpen) updateMain();
      if (onDone) { try { onDone(); } catch { /* ignore */ } }
    }

    function stage() {
      clear(ov);
      busy = false;
      add(ov, el('div', 'fm-boxt fm-ol', 'SÜRPRİZ KUTU'), el('div', 'fm-boxs', total > 1 ? `${idx + 1} / ${total}` : ''));
      const gift = button('fm-gift', '🎁', () => openOne(gift), 'Kutuyu aç');
      ov.appendChild(gift);
      ov.appendChild(el('div', 'fm-boxs', 'DOKUN VE AÇ!'));
      if (total - idx > 1) {
        ov.appendChild(button('fm-btn blue', `HEPSİNİ AÇ (${total - idx})`, openAll));
      }
    }

    function giveCb(r) {
      if (cb.onReward) { try { cb.onReward('box', r); } catch { /* ignore */ } }
    }

    function openOne(gift) {
      if (busy) return;
      busy = true;
      gift.classList.add('open');
      sfx('click');
      setTimeout(() => {
        if (finished) return;
        const r = meta.openBox();
        if (!r) { finish(); return; }
        giveCb(r);
        sfx('confirm');
        clear(ov);
        add(ov, el('div', 'fm-boxt fm-ol', r.rare ? 'NADİR ÖDÜL!' : 'ÖDÜLÜN'), rewardCard(r));
        confetti(r.rare ? 90 : 36);
        idx++;
        const last = idx >= total;
        ov.appendChild(button('fm-btn big green', last ? 'TAMAM' : 'SIRADAKİ', () => { sfx('confirm'); if (last) finish(); else stage(); }));
        busy = false;
      }, 650);
    }

    function openAll() {
      if (busy) return;
      busy = true;
      sfx('confirm');
      const got = [];
      while (idx < total) {
        const r = meta.openBox();
        if (!r) break;
        giveCb(r);
        got.push(r);
        idx++;
      }
      clear(ov);
      add(ov, el('div', 'fm-boxt fm-ol', 'ÖDÜLLERİN'));
      const lst = el('div', 'fm-sumlist');
      for (const r of got) lst.appendChild(el('span', r.rare ? 'rare' : '', rewardLine(r) || '❄️'));
      ov.appendChild(lst);
      confetti(70);
      ov.appendChild(button('fm-btn big green', 'TAMAM', () => { sfx('confirm'); finish(); }));
      busy = false;
    }

    stage();
    return { close: finish };
  }

  // ============================================================================================ main screen

  function buildMain() {
    const root0 = el('div', 'fm-main fm-hide');
    const r = {};
    r.root = root0;

    // ---- top bar ----
    const top = el('div', 'fm-top');
    r.lvl = button('fm-lvl', '', () => {
      sfx('click');
      const li = meta.levelInfo();
      toast({ icon: '⭐', title: `SEVİYE ${li.level}`, sub: `${fmt(li.cur)} / ${fmt(li.need)} XP · koştukça yükselir`, ms: 2200 });
    }, 'Seviye');
    const lvIn = el('div', 'fm-lvl-in');
    r.lvlNum = el('b', '', '1');
    add(lvIn, el('small', '', 'SVY'), r.lvlNum);
    r.lvl.appendChild(lvIn);
    r.crPill = makePill('💎', 'cr');
    r.coinsPill = makePill('❄️');
    r.crPill.el.setAttribute('role', 'img');
    r.crPill.el.setAttribute('aria-label', 'Kristal');
    add(top, r.lvl, el('div', 'fm-spacer-x'), r.crPill.el, r.coinsPill.el);
    root0.appendChild(top);

    const scroll = el('div', 'fm-scroll');
    scroll.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: true });
    const col = el('div', 'fm-col');

    // ---- hero: logo + mascot ----
    const hero = el('div', 'fm-hero');
    r.hero = hero;
    const logo = el('div', 'fm-logo');
    logo.setAttribute('role', 'img');
    logo.setAttribute('aria-label', 'FREEMON');
    const COL = [['#ff7a8a', '#ff2d55'], ['#ffc457', '#ff8a00'], ['#ffec6a', '#ffc400'], ['#7cf0a2', '#22b86c'], ['#6fd0ff', '#2f7dff'], null, ['#c79bff', '#7a3cf0']];
    WORD.split('').forEach((ch, i) => {
      if (i === 5) {
        const ball = el('span', 'fm-ball');
        setCss(ball, '--i', String(i));
        add(ball, el('i', 'e l'), el('i', 'e r'), el('i', 'n'));
        logo.appendChild(ball);
        return;
      }
      const c = el('span', 'fm-ch', ch);
      c.setAttribute('data-t', ch);
      setCss(c, '--i', String(i));
      setCss(c, '--c1', COL[i][0]);
      setCss(c, '--c2', COL[i][1]);
      logo.appendChild(c);
    });
    r.logo = logo;
    add(hero, logo, el('div', 'fm-tag', 'YUVARLAN · KAÇ · BÜYÜ'));

    const mw = el('div', 'fm-mascot-wrap');
    const mascot = el('button', 'fm-mascot');
    mascot.setAttribute('type', 'button');
    mascot.setAttribute('aria-label', 'Kartopu');
    mascot.style.animationDelay = '-1s';
    add(mascot, add(el('i', 'eye l'), el('i', 'pup')), add(el('i', 'eye r'), el('i', 'pup')), el('i', 'nose'), el('i', 'cheek l'), el('i', 'cheek r'), el('i', 'mouth'));
    const achoo = el('div', 'fm-achoo', 'HAPŞUU!');
    add(mw, mascot, achoo);
    r.mascot = mascot;
    r.achoo = achoo;
    r.mascotWrap = mw;
    hero.appendChild(mw);
    col.appendChild(hero);
    col.appendChild(el('div', 'fm-flex'));

    // ---- mode cards ----
    const modes = el('div', 'fm-modes');
    function modeCard(cls, ico, title, fn) {
      const b = button(`fm-mode ${cls}`, '', () => { sfx('confirm'); if (fn) fn(); });
      const txt = el('div', 'txt');
      const sub = el('div', 'sub', '');
      add(txt, el('div', 'ttl', title), sub);
      add(b, el('div', 'ico', ico), txt);
      return { b, sub };
    }
    const mE = modeCard('endless', '∞', 'YETİ KAÇIŞI', () => cb.onEndless && cb.onEndless());
    r.multBadge = el('div', 'fm-mult', 'x1');
    mE.b.appendChild(r.multBadge);
    const mC = modeCard('cig', '⛰️', 'ÇIĞ', () => cb.onLevels && cb.onLevels());
    mC.b.appendChild(el('div', 'fm-go', '▶'));
    const mD = modeCard('daily', '🏔️', 'GÜNÜN DAĞI', () => cb.onDaily && cb.onDaily());
    mD.b.appendChild(el('div', 'fm-go', '▶'));
    r.subE = mE.sub; r.subC = mC.sub; r.subD = mD.sub;
    add(modes, mE.b, mC.b, mD.b);
    col.appendChild(modes);

    // ---- missions strip ----
    const ms = button('fm-strip fm-ms', '', () => openMissions(), 'Görevler');
    const lbl = el('div', 'lbl', 'GÖREVLER');
    r.mbars = [0, 1, 2].map(() => {
      const bar = el('div', 'fm-mbar');
      const fill = el('i');
      const tx = el('b', '', '');
      add(bar, fill, tx);
      return { bar, fill, tx };
    });
    const mbars = el('div', 'fm-mbars');
    for (const b of r.mbars) mbars.appendChild(b.bar);
    r.stripMult = el('div', 'fm-mult', 'x1');
    add(ms, lbl, mbars, r.stripMult);
    col.appendChild(ms);

    // ---- letter hunt strip ----
    const hs = button('fm-strip fm-hs', '', () => openHunt(), 'Günün kelimesi');
    const hl = el('div', 'lbl', 'GÜNÜN KELİMESİ');
    add(hl, el('small', '', ''));
    r.huntSmall = hl.lastChild;
    r.chips = WORD.split('').map(() => el('div', 'fm-chip', '?'));
    const chips = el('div', 'fm-chips');
    for (const c of r.chips) chips.appendChild(c);
    add(hs, hl, chips);
    col.appendChild(hs);

    // ---- bottom nav ----
    const nav = el('div', 'fm-nav');
    function navBtn(emoji, text, fn) {
      const b = button('fm-nb', '', () => { sfx('click'); fn(); }, text);
      const bdg = el('span', 'fm-bdg off', '');
      add(b, el('span', 'e', emoji), el('span', 't', text), bdg);
      return { b, bdg };
    }
    const nShop = navBtn('👕', 'DOLAP', () => cb.onShop && cb.onShop());
    const nUp = navBtn('⚡', 'GELİŞTİR', () => openUpgrades());
    const nAch = navBtn('🏆', 'BAŞARIM', () => openAchievements());
    const nDaily = navBtn('🎁', 'ÖDÜL', () => openDaily());
    const nSet = navBtn('⚙️', 'AYAR', () => openSettings());
    r.nUp = nUp; r.nAch = nAch; r.nDaily = nDaily;
    add(nav, nShop.b, nUp.b, nAch.b, nDaily.b, nSet.b);
    col.appendChild(nav);

    scroll.appendChild(col);
    root0.appendChild(scroll);
    host.appendChild(root0);

    wireEggs(r);
    refs = r;
    return r;
  }

  function updateMain() {
    const r = refs;
    if (!r) return;
    const li = meta.levelInfo();
    r.lvlNum.textContent = String(li.level);
    setCss(r.lvl, '--p', String(Math.round(li.frac * 100)));
    r.coinsPill.set(coins(), false);
    r.crPill.set(meta.crystals, false);

    const mult = meta.multiplier();
    r.multBadge.textContent = `x${mult}`;
    r.stripMult.textContent = `x${mult}`;
    r.subE.textContent = info.endlessBest > 0
      ? `REKOR ${fmt(info.endlessBest)} · ${fmtDist(info.endlessBestDist)}`
      : 'Yeti seni kovalıyor!';
    const st = Math.max(0, Math.min(3, info.levelStars | 0));
    r.subC.textContent = `DAĞ ${info.level} · ${'⭐'.repeat(st)}${'☆'.repeat(3 - st)}${info.theme ? ` · ${info.theme}` : ''}`;
    r.subD.textContent = info.dailyBest > 0 ? `#${info.dailyNum} · ${fmtTons(info.dailyBest)}` : `#${info.dailyNum} · bugünün dağı`;

    const ms = meta.missions();
    r.mbars.forEach((b, i) => {
      const m = ms[i];
      if (!m) return;
      setCss(b.fill, '--p', `${Math.round((m.value / m.goal) * 100)}%`);
      b.bar.classList.toggle('done', m.done);
      b.tx.textContent = m.done ? '✓' : '';
    });

    const h = meta.letterHunt();
    h.found.forEach((got, i) => {
      const c = r.chips[i];
      c.className = `fm-chip${got ? ' got' : i === h.nextLetter ? ' next' : ''}`;
      c.textContent = got || i === h.nextLetter ? WORD[i] : '?';
    });
    r.huntSmall.textContent = h.complete ? 'TAMAM!' : `${h.count}/7 HARF`;

    const unclaimed = meta.unclaimedCount();
    r.nAch.bdg.textContent = String(unclaimed);
    r.nAch.bdg.classList.toggle('off', unclaimed <= 0);
    const d = meta.daily();
    r.nDaily.bdg.textContent = '!';
    r.nDaily.bdg.classList.toggle('off', !d.available);
    r.nDaily.bdg.classList.toggle('pulse', d.available);
    let afford = false;
    for (const u of UPGRADES) { const c = meta.upgradeCost(u.id); if (c !== null && coins() >= c) { afford = true; break; } }
    r.nUp.bdg.textContent = '!';
    r.nUp.bdg.className = `fm-bdg gold${afford ? '' : ' off'}`;
  }

  // ============================================================================================ easter eggs (UI side)

  let logoTaps = 0;
  let logoTapT = 0;
  let swiped = false;
  const kbuf = [];
  let typed = '';

  function eggToast(icon, title, sub) {
    toast({ icon, title, sub, kind: 'egg', ms: 2600 });
  }

  function logoSpin() {
    if (!refs) return;
    refs.logo.classList.remove('spin', 'squish');
    void refs.logo.offsetWidth;
    refs.logo.classList.add('spin');
    setTimeout(() => refs && refs.logo.classList.remove('spin'), 1250);
    confetti(70);
    sfx('confirm');
  }

  function tapLogo() {
    if (!refs) return;
    const t = Date.now();
    if (t - logoTapT > 1500) logoTaps = 0;
    logoTapT = t;
    logoTaps++;
    if (logoTaps >= 7) {
      logoTaps = 0;
      logoSpin();
      meta.egg('logo'); // first time: secret achievement + rainbow trail (toast comes from the unlock callback)
      return;
    }
    refs.logo.classList.remove('squish', 'spin');
    void refs.logo.offsetWidth;
    refs.logo.classList.add('squish');
    sfx('click');
  }

  function konamiPush(tok) {
    kbuf.push(tok);
    if (kbuf.length > KONAMI.length) kbuf.shift();
    if (kbuf.length < KONAMI.length) return;
    for (let i = 0; i < KONAMI.length; i++) {
      const want = KONAMI[i];
      const got = kbuf[i];
      if (got === want) continue;
      if (got === 'tap' && (want === 'a' || want === 'b')) continue; // swipe version: two taps = B A
      return;
    }
    kbuf.length = 0;
    meta.egg('konami');
    eggToast('🎮', 'HİLE YOK!', 'Konami kodunu buldun... ama hile yok :)');
    confetti(50);
    sfx('confirm');
  }

  function sneeze() {
    if (!refs) return;
    const m = refs.mascot;
    m.classList.remove('press');
    m.classList.remove('sneeze');
    void m.offsetWidth;
    m.classList.add('sneeze');
    refs.achoo.classList.remove('on');
    void refs.achoo.offsetWidth;
    refs.achoo.classList.add('on');
    setTimeout(() => { burst(refs.mascotWrap, '❄️', 16, 110); sfx('confirm'); }, 780);
    setTimeout(() => { m.classList.remove('sneeze'); refs.achoo.classList.remove('on'); }, 1900);
    meta.egg('sneeze');
  }

  function wireEggs(r) {
    // logo: 7 taps
    r.logo.addEventListener('click', (e) => { e.stopPropagation(); if (swiped) { swiped = false; return; } tapLogo(); });

    // hero zone: swipes + taps feed the Konami buffer
    let sx = 0, sy = 0, down = false;
    swiped = false;
    const up = (e) => {
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', cancelSwipe);
      if (!down) return;
      down = false;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      const ax = Math.abs(dx), ay = Math.abs(dy);
      if (Math.max(ax, ay) < 36) { konamiPush('tap'); return; }
      swiped = true; // the click that follows a swipe must not count as a logo tap
      konamiPush(ax > ay ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up'));
    };
    const cancelSwipe = () => {
      down = false;
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', cancelSwipe);
    };
    r.hero.addEventListener('pointerdown', (e) => {
      down = true; swiped = false; sx = e.clientX; sy = e.clientY;
      window.addEventListener('pointerup', up);
      window.addEventListener('pointercancel', cancelSwipe);
    });

    // mascot: 3 s long press
    let lp = 0;
    const cancel = () => { if (lp) { clearTimeout(lp); lp = 0; } r.mascot.classList.remove('press'); };
    r.mascot.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      cancel();
      r.mascot.classList.add('press');
      lp = setTimeout(() => { lp = 0; sneeze(); }, 3000);
    });
    r.mascot.addEventListener('pointerup', (e) => { e.stopPropagation(); cancel(); });
    r.mascot.addEventListener('pointerleave', cancel);
    r.mascot.addEventListener('pointercancel', cancel);
    r.mascot.addEventListener('contextmenu', (e) => e.preventDefault());
    r.mascot.addEventListener('click', (e) => e.stopPropagation());
  }

  const onKey = (e) => {
    if (!e || e.repeat) return;
    if (e.key === 'Escape') {
      if (boxEl) return; // opening a box is not cancellable
      if (modalEl) { closeModal(); return; }
      if (activePanel) { sfx('back'); closePanel(); }
      return;
    }
    if (!mainOpen || activePanel || modalEl || boxEl) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = String(e.key || '');
    const map = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right' };
    if (map[k]) konamiPush(map[k]);
    else if (k.length === 1) {
      const lc = k.toLowerCase();
      if (lc === 'b' || lc === 'a') konamiPush(lc);
      typed = (typed + lc).slice(-WORD.length);
      if (typed === WORD.toLowerCase()) {
        typed = '';
        confetti(110);
        sfx('confirm');
        eggToast('⌨️', 'SİHİRLİ KELİME!', 'FREEMON! Konfeti yağsın.');
        meta.egg('typed');
      }
    }
  };
  if (typeof window !== 'undefined' && window.addEventListener) window.addEventListener('keydown', onKey);

  // ============================================================================================ main timers

  function startMainTimers() {
    stopMainTimers();
    mainTimer = setInterval(() => {
      tick++;
      if (!refs) return;
      if (tick % 2 === 0) {
        setCss(refs.mascot, '--lx', `${Math.round((Math.random() - 0.5) * 8)}px`);
        setCss(refs.mascot, '--ly', `${Math.round((Math.random() - 0.5) * 6)}px`);
      }
      if (tick % 20 === 0 && !activePanel) updateMain();
    }, 1500);
  }
  function stopMainTimers() {
    if (mainTimer) { clearInterval(mainTimer); mainTimer = 0; }
  }

  // ============================================================================================ events from meta

  offs.push(meta.onUnlock((a, extra) => toastAchievement(a, extra)));
  offs.push(meta.on('levelup', (L) => {
    toast({ icon: '⭐', title: `SEVİYE ${L}!`, sub: 'Yeni seviyeye ulaştın', kind: 'gold' });
    if (mainOpen) updateMain();
  }));
  offs.push(meta.on('mission', (m) => toast({ icon: m.icon || '🎯', title: 'GÖREV TAMAM!', sub: m.text })));
  offs.push(meta.on('missionset', (s) => {
    toast({ icon: '✖️', title: `ÇARPAN x${s.multiplier}!`, sub: `GÖREV SETİ TAMAM · ${rewardLine(s.reward)}`, kind: 'gold', ms: 3200 });
    if (cb.onReward) { try { cb.onReward('missions', s.reward); } catch { /* ignore */ } }
    if (mainOpen) { confetti(50); updateMain(); }
  }));
  offs.push(meta.on('letter', (l) => toast({ icon: '🔤', title: `HARF: ${l.letter}`, sub: `FREEMON ${l.count}/7`, ms: 1800 })));
  offs.push(meta.on('hunt', (res) => {
    toast({ icon: '🔤', title: 'KELİME TAMAM!', sub: `GÜNÜN KELİMESİ · ${rewardLine(res.reward)}`, kind: 'gold', ms: 3200 });
    if (cb.onReward) { try { cb.onReward('hunt', res.reward); } catch { /* ignore */ } }
  }));

  // ============================================================================================ public API

  function showMain(i) {
    info = { ...info, ...(i || {}) };
    try { if (meta.refresh) meta.refresh(); } catch { /* ignore */ }
    if (!refs) buildMain();
    closePanel(true);
    closeModal();
    refs.root.classList.remove('fm-hide');
    mainOpen = true;
    updateMain();
    refs.root.classList.remove('enter');
    void refs.root.offsetWidth;
    refs.root.classList.add('enter');
    setTimeout(() => { if (refs) refs.root.classList.remove('enter'); }, 900);
    startMainTimers();
    maybeHoliday();
  }

  function hideMain() {
    mainOpen = false;
    stopMainTimers();
    closePanel(true);
    closeModal();
    if (refs) refs.root.classList.add('fm-hide');
  }

  function showDailyIfAvailable() {
    if (!mainOpen || activePanel || modalEl || boxEl) return false;
    let d = null;
    try { d = meta.daily(); } catch { d = null; }
    if (!d || !d.available) return false;
    openDaily();
    return true;
  }

  function refresh() {
    if (refs && mainOpen) updateMain();
    if (activePanel && activePanel.refreshPills) activePanel.refreshPills(false);
  }

  function isOpen() {
    return !!(mainOpen || activePanel || modalEl || boxEl);
  }

  function destroy() {
    hideMain();
    closeBoxes();
    for (const o of offs) { try { o(); } catch { /* ignore */ } }
    offs.length = 0;
    if (typeof window !== 'undefined' && window.removeEventListener) window.removeEventListener('keydown', onKey);
    toastLayer.remove();
    fxLayer.remove();
    if (refs) { refs.root.remove(); refs = null; }
  }

  return {
    showMain, hideMain, toastAchievement, showDailyIfAvailable, refresh, isOpen,
    // extras
    toast, confetti, openBoxes, openDaily, openAchievements, openMissions, openUpgrades, openHunt, openSettings, closePanel, destroy,
  };
}
