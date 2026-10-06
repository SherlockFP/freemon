// One-thumb relative drag steering + keyboard fallback for desktop testing.
export class Input {
  constructor(el) {
    this.dx = 0;
    this.down = false;
    this.pointerId = null;
    this.lastX = 0;
    this.keys = { left: false, right: false };
    this.tapHandlers = [];
    this.jumpQueued = false;
    this.swipe = { x: 0, y: 0, t: 0, used: false, lx: 0, ly: 0 };
    this.laneQueued = 0;   // endless mode: discrete lane changes (Subway Surfers style)
    this.diveQueued = false;
    this.doubleTapQueued = false; // endless mode: activate the sled shield
    this.lastTapT = 0;

    el.addEventListener('pointerdown', (e) => {
      if (this.pointerId !== null) return;
      this.pointerId = e.pointerId;
      this.down = true;
      this.lastX = e.clientX;
      this.swipe.x = e.clientX; this.swipe.y = e.clientY; this.swipe.t = performance.now(); this.swipe.used = false;
      this.swipe.lx = e.clientX; this.swipe.ly = e.clientY;
      try { el.setPointerCapture(e.pointerId); } catch { /* ignore */ }
    });
    el.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.pointerId) return;
      const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : null;
      const x = evs && evs.length ? evs[evs.length - 1].clientX : e.clientX;
      this.dx += x - this.lastX;
      this.lastX = x;
      // Quick upward flick = jump (endless mode). Vertical must clearly dominate so steering never triggers it.
      const sw = this.swipe;
      if (!sw.used) {
        const up = sw.y - e.clientY, side = Math.abs(e.clientX - sw.x);
        if (up > 38 && up > side * 1.3 && performance.now() - sw.t < 280) { sw.used = true; this.jumpQueued = true; }
        if (-up > 38 && -up > side * 1.3 && performance.now() - sw.t < 280) { sw.used = true; this.diveQueued = true; }
      }
      // Lane swipes: every ~40 px of mostly-horizontal travel is one lane, so one long drag can cross two lanes.
      const lx = x - sw.lx, ly = e.clientY - sw.ly;
      if (Math.abs(lx) > 40 && Math.abs(lx) > Math.abs(ly) * 1.2) {
        this.laneQueued = Math.max(-2, Math.min(2, this.laneQueued + Math.sign(lx)));
        sw.lx = x; sw.ly = e.clientY;
      }
    });
    const up = (e) => {
      if (e.pointerId !== this.pointerId) return;
      this.pointerId = null;
      this.down = false;
      // A tap = short press with little travel; two taps within 300 ms = double-tap.
      const sw = this.swipe, now = performance.now();
      if (now - sw.t < 220 && Math.abs(e.clientX - sw.x) < 14 && Math.abs(e.clientY - sw.y) < 14) {
        if (now - this.lastTapT < 300) { this.doubleTapQueued = true; this.lastTapT = 0; } else this.lastTapT = now;
      }
      for (const h of this.tapHandlers) h(e);
    };
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('lostpointercapture', up);
    el.addEventListener('contextmenu', (e) => e.preventDefault());

    // iOS still pinch-zooms despite the viewport meta; kill gestures outright.
    for (const t of ['gesturestart', 'gesturechange', 'gestureend']) document.addEventListener(t, (e) => e.preventDefault());
    document.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') this.keys.left = true;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') this.keys.right = true;
      if ((e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') && !e.repeat) this.jumpQueued = true;
      if ((e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') && !e.repeat) this.diveQueued = true;
      if (!e.repeat && (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A')) this.laneQueued = Math.max(-2, this.laneQueued - 1);
      if (!e.repeat && (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D')) this.laneQueued = Math.min(2, this.laneQueued + 1);
    });
    // Losing focus mid-press must not leave a key "held".
    window.addEventListener('blur', () => { this.keys.left = this.keys.right = false; this.dx = 0; this.pointerId = null; this.down = false; });
    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') this.keys.left = false;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') this.keys.right = false;
    });
  }

  onRelease(fn) { this.tapHandlers.push(fn); }

  consumeDx() {
    const v = this.dx;
    this.dx = 0;
    return v;
  }

  consumeJump() {
    const j = this.jumpQueued;
    this.jumpQueued = false;
    return j;
  }

  consumeLane() {
    const l = this.laneQueued;
    this.laneQueued = 0;
    return l;
  }

  consumeDoubleTap() {
    const d = this.doubleTapQueued;
    this.doubleTapQueued = false;
    return d;
  }

  consumeDive() {
    const d = this.diveQueued;
    this.diveQueued = false;
    return d;
  }

  keyAxis() {
    return (this.keys.right ? 1 : 0) - (this.keys.left ? 1 : 0);
  }
}
