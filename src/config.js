// All gameplay tuning lives here so balancing never means hunting through systems.
export const CFG = {
  trackW: 28,          // playable width at the top of the slope (m)
  trackWEnd: 50,       // ...and at the bottom, just before town
  townW: 70,           // playable width in the finale town
  grade: 0.3,          // vertical drop per meter downhill
  flattenLen: 45,      // slope → town transition length

  startR: 0.55,        // starting snowball radius (m)
  minR: 0.4,
  eatRatio: 0.9,       // prop.radius <= r * eatRatio → swallowed
  growK: 0.85,         // volume gained per swallowed prop (fraction of its bounding volume)
  // Expected radius at slope progress 0, .25, .5, .75, 1 — matches the food tier schedule in world.js.
  expectedR: [0.6, 2.4, 4.4, 7, 9.5],
  bandUp: 3,           // brake when bigger than expected: growth × (expected/r)^bandUp
  bandDown: 1.2,       // catch-up when smaller: growth × (expected/r)^bandDown
  bandMin: 0.3,
  bandMax: 2.0,
  passiveGrow: 0.003,  // radius gained per meter rolled on fresh snow (scaled by 1/r)
  contactK: 0.7,       // props are smaller than their bounding sphere; scale contact distance

  baseSpeed: 12,       // m/s
  sizeSpeed: 3.4,      // + sizeSpeed * sqrt(r)
  maxSpeed: 26,
  accel: 5,
  steerSens: 1.1,      // full-screen swipe = steerSens * current track width
  steerStiff: 46,      // lateral spring; divided by mass factor
  steerMass: 0.32,     // how much bigger balls resist steering

  smashRatio: 2.0,     // prop.radius <= r * smashRatio → it shatters on impact instead of blocking
  smashLoss: 0.14,     // fraction of volume lost smashing through something
  momentumTime: 0.25,  // after a smash, further smashes are free for this long
  bumpLoss: 0.18,      // fraction of volume lost bouncing off something huge
  patchMelt: 0.15,     // fraction of radius per second lost on bare ground (scaled)
  gravity: 24,

  // Size thresholds → "ÇIĞ" milestones. Each one widens destruction in the town.
  milestones: [1.4, 2.6, 4.2, 6.5, 9.5],
  milestoneNames: ['BÜYÜYOR!', 'ÇIĞ!', 'MEGA ÇIĞ!', 'FELAKET!', 'KIYAMET!'],

  snowDensity: 0.45,   // t/m³ — turns radius into the big tonnage number
  comboWindow: 0.9,    // s between swallows to keep a combo alive

  townReachK: 1.15,    // town reach = r * K + C (+ half the building's radius)
  townReachC: 2,
  destroyRatio: 1.25,  // a building falls when its radius <= r * destroyRatio
  starThresholds: [0.3, 0.6, 0.85], // fraction of town destroyed
  viewAhead: 260,      // render window ahead of the ball (m)
  viewBehind: 40,
};

// Tons per prop (the number-goes-up candy). Unlisted props fall back to tier.
export const MASS = {
  pebble: 0.02, bush_small: 0.01, penguin: 0.03, rabbit: 0.004, gift: 0.005, traffic_cone: 0.004,
  person: 0.08, skier: 0.09, snowman: 0.3, sled: 0.02, bench: 0.06, fence: 0.05, pine_small: 0.15,
  car: 1.4, car_blue: 1.5, snowmobile: 0.4, deer: 0.25, kiosk: 3, pine: 1.2, yeti: 0.6, boulder: 18,
  cabin: 45, bus: 12, lift_pylon: 9, truck: 15, pine_big: 6,
  hotel: 4200, gondola_station: 900, water_tower: 700, rock_big: 1600,
  house: 160, house_tall: 260, shop: 120, apartment: 2400, clocktower: 1300, barn: 140,
  chunk: 0.05,
  k_sedan: 1.3, k_sports: 1.2, k_suv: 2, k_taxi: 1.3, k_police: 1.5, k_van: 2.2, k_ambulance: 3, k_pickup: 1.9, k_tractor: 3.5,
  k_truck: 9, k_delivery: 7, k_garbage_truck: 12, k_firetruck: 14, k_snowman: 0.3, k_snowman_hat: 0.35, k_tent: 0.1, k_canoe: 0.05,
};
export const TIER_MASS = [0.02, 0.1, 1.5, 20, 1000];

// Turkish callouts for swallowing notable things.
export const LABEL = {
  person: 'İNSAN', skier: 'KAYAKÇI', snowman: 'KARDAN ADAM', penguin: 'PENGUEN', deer: 'GEYİK',
  car: 'ARABA', car_blue: 'ARABA', snowmobile: 'KAR MOTORU', kiosk: 'KULÜBE', yeti: 'YETİ',
  boulder: 'KAYA', cabin: 'DAĞ EVİ', bus: 'OTOBÜS', lift_pylon: 'TELEFERİK DİREĞİ',
  truck: 'KAR KÜREME', pine_big: 'DEV ÇAM', pine: 'ÇAM', hotel: 'OTEL', gondola_station: 'TELEFERİK',
  water_tower: 'SU KULESİ', rock_big: 'KAYALIK',
  k_sedan: 'ARABA', k_sports: 'SPOR ARABA', k_suv: 'CİP', k_taxi: 'TAKSİ', k_police: 'POLİS ARABASI', k_van: 'MİNİBÜS',
  k_ambulance: 'AMBULANS', k_pickup: 'KAMYONET', k_tractor: 'TRAKTÖR', k_truck: 'KAMYON', k_delivery: 'KARGO KAMYONU',
  k_garbage_truck: 'ÇÖP KAMYONU', k_firetruck: 'İTFAİYE', k_snowman: 'KARDAN ADAM', k_snowman_hat: 'KARDAN ADAM',
  cp_snowman: 'KARDAN ADAM ORDUSU', k_tent: 'ÇADIR', k_canoe: 'KANO', k_sled: 'KIZAK', k_gingerbread: 'ZENCEFİLLİ ADAM', k_pine_a_big: 'DEV ÇAM', k_pine_b_big: 'DEV ÇAM',
};
