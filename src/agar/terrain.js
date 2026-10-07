// KARTOPU ARENA - seeded terrain: ice patches (slippery), deep-snow zones (slow, slow mass gain) and snow-drift ramps (launch).
// Both host and clients generate the same layout from one integer seed, so only the seed travels over the network.
export const NICE = 30, NDEEP = 26, NRAMP = 18;

export function mulberry(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

export class Terrain {
  constructor(R) {
    this.R = R;
    this.ice = new Float32Array(NICE * 3);
    this.deep = new Float32Array(NDEEP * 3);
    this.ramp = new Float32Array(NRAMP * 3);
  }

  gen(seed) {
    const rnd = mulberry(seed | 0), R = this.R;
    const fill = (arr, n, rLo, rHi, edge) => {
      for (let i = 0; i < n; i++) {
        const r = rLo + rnd() * (rHi - rLo);
        const a = rnd() * 6.2832, d = Math.sqrt(rnd()) * (R - edge - r);
        arr[i * 3] = Math.cos(a) * d; arr[i * 3 + 1] = Math.sin(a) * d; arr[i * 3 + 2] = r;
      }
    };
    fill(this.ice, NICE, 35, 95, 40);
    fill(this.deep, NDEEP, 30, 75, 40);
    fill(this.ramp, NRAMP, 7, 11, 30);
    // keep the very centre (storm start) free of ramps
    for (let i = 0; i < NRAMP; i++) if (Math.hypot(this.ramp[i * 3], this.ramp[i * 3 + 1]) < 40) this.ramp[i * 3] += 80;
  }

  /** 0 = plain snow, 1 = ice, 2 = deep snow */
  zone(x, z) {
    const ice = this.ice;
    for (let i = 0; i < NICE; i++) { const dx = x - ice[i * 3], dz = z - ice[i * 3 + 1], r = ice[i * 3 + 2]; if (dx * dx + dz * dz < r * r) return 1; }
    const dp = this.deep;
    for (let i = 0; i < NDEEP; i++) { const dx = x - dp[i * 3], dz = z - dp[i * 3 + 1], r = dp[i * 3 + 2]; if (dx * dx + dz * dz < r * r) return 2; }
    return 0;
  }

  /** index of the ramp under (x,z) with a ball radius r, or -1 */
  rampAt(x, z, r) {
    const rp = this.ramp;
    for (let i = 0; i < NRAMP; i++) { const dx = x - rp[i * 3], dz = z - rp[i * 3 + 1], q = rp[i * 3 + 2] + r * 0.3; if (dx * dx + dz * dz < q * q) return i; }
    return -1;
  }
}
