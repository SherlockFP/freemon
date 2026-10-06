# YETİ KAÇIŞI: sonsuz iniş (2. mod)

## v2 (kullanıcı geri bildirimi: oyun döngüsü sıkıcı, tam Temple Run / Subway Surfers gibi olsun)
- **Yokuş aşağı sonsuz koşu.** Dağdan inen bir pist var, virajlar ve uçurumlar var.
- **3 şerit.** Sağa/sola swipe şerit değiştirir, yukarı swipe zıplatır, aşağı swipe havadayken yere çakar.
- **Engel desenleri.** Engeller 1-2 şeridi kapatır, sürekli şerit değiştirmek gerekir. Alçak engellerin üstünden zıplanır, "tren" gibi uzun blokerler ve hareketli engeller de var.
- **BOYUT = CAN.** Topun 5 boyutu var. 3 kar yığını toplarsan 1 boyut büyürsün.
  - Çarparsan bir katman kopar: top gerçekçi şekilde küçülür, kar parçaları saçılır, yavaşlarsın.
  - En küçük boyuttayken çarparsan **PATLARSIN**.
- **Büyük olmanın avantajı ve bedeli.**
  - Büyük top daha hızlıdır. Skor çarpanı x2'den x5'e çıkar.
  - Dayanıklılığı boyutundan düşük engelleri kırar geçer: çit 1, kasa 2, kütük 3, çam 4. Kaya ve kulübe (5) asla kırılmaz.
  - Ama ağırlaşır, şerit değişimi yavaşlar.
- **Kovalayan YETİ.** 8 m boyunda, kükreyerek arkandan koşar.
  - Her çarpışmada 11 m yaklaşır. Tam hızda gidersen uzaklaşırsın.
  - Seni yakalarsa oyun biter. Alttaki gösterge ne kadar yakın olduğunu gösterir.
- **Güçlendirmeler.** Kask (bir çarpışmayı affeder), Mıknatıs (kar tanelerini çeker), Roket (hız + her şeyi kır).
- **Kalanlar korunur.** Ritim (beat'e kilitli sallanan kütükler), biyom değişimi ve müzik stilleri aynen duruyor.

---
(Aşağısı v1 tasarımı; sözleşmeler hâlâ geçerli.)

# SONSUZ PARKUR: Kartopu Koşusu (2. mod)

Game director notu. Mevcut ÇIĞ modu (bölüm bazlı, dağdan inip kasaba yıkma) aynen kalıyor. Bu mod onun yanına geliyor.
Mantık: ÇIĞ kısa ve tatmin edici seanslar için. SONSUZ ise "bir el daha" bağımlılığı, skor ve paylaşım için.

## Tek cümle
Kartopu gökyüzünde süzülen bir parkurda sonsuza dek yuvarlanır. Engeller müziğin ritmiyle hareket eder, dünya her birkaç yüz metrede bir değişir. Düşersen biter.

## Referanslar ve farkımız
- **Going Balls** (Supersonic): havada asılı parkur ve top fiziği, kenardan düşme. Biz bölüm değil sonsuz akış yapıyoruz.
- **Temple Run / Subway Surfers**: hız sürekli artar, yön değişen yol, swipe ile zıplama.
- **Ritim oyunları** (Beat Saber / Geometry Dash hissi): engeller beat'e kilitli.
  - Toplanan kar taneleri melodiyi nota nota çalar.
  - Beat anında basılan pad "PERFECT!" verir.
- **Bizim twistimiz (boyut):**
  - Topladıkça büyürsün. Büyükken buz duvarlarını ve kasaları kırarsın ama ağırlaşırsın ve dar kapılardan geçemezsin.
  - Sıcak bölgeler (çöl güneşi, lav) seni eritir.
  - Boyut hem güç hem risk.

## Kovalayan ÇIĞ
Temple Run'daki maymunlar yerine oyunun adı arkandan gelir: dev bir kar dalgası.
- Engele kafa atarsan, sendeleyip yavaşlarsan çığ yaklaşır. Kamera arkada beyaz duvarı görür ve gümbürtü sesi artar.
- Tam hızda gidersen çığ geride kalır.
- Kısa aralıkla iki sendeleme yaparsan çığ seni yutar ve oyun biter.
- "Kaçış" hissi ve ad uyumu bedava gelir. Klipte de çok iyi görünür: arkada çığ, önde beat'e oynayan çekiçler.

## Kontroller (tek başparmak)
- Sağa sola sürükle: şerit içinde kayma (mevcut ÇIĞ kontrolüyle aynı his).
- Hızlı yukarı fiske (swipe up): zıplama, kısa cooldown'lu.
- Rampalar ve zıplama pad'leri seni otomatik uçurur.

## Döngü
1. Hız 9 m/s'den başlar, her biyomda artar (tavan ~26 m/s). Müzik BPM'i de birlikte artar (96'dan 150'ye).
2. Parkur parçaları sonsuz üretilir:
   - düz, sola/sağa viraj, dar köprü, boşluk + rampa, iki şeritli bölünme, delikli altıgen platform, basamaklı iniş, slalom, kapı.
3. Engeller (beat senkron):
   - süpürge kol, sarkaç çekiç, kayan duvar, dönen haç, yandan iten piston, kırılabilir kasa/buz duvarı, boyut kapısı, erime bölgesi.
4. Toplanabilirler:
   - kar tanesi (❄️ para + nota).
   - kar yığını (büyütür).
   - yıldız (x2 çarpan, 10 sn).
5. Her biyom sonunda portal halkası:
   - dünya değişir (gökyüzü, zemin, aşağıdaki manzara, müzik stili).
   - hız bir kademe artar.
6. Düşme veya ölümcül darbe olunca oyun biter. Bir kez "DEVAM" hakkı var (ileride rewarded reklam).
7. Skor = mesafe × çarpan + toplananlar. En iyi skor kaydedilir, ❄️ dolaba (skinler) gider.

## Biyomlar (döngü)
| # | Biyom | Aşağıdaki manzara | Müzik stili |
|---|---|---|---|
| 1 | Karlı Zirve | karlı vadi, çamlar | çan/pluck, majör pentatonik |
| 2 | Çam Ormanı | yeşil orman, göl | marimba |
| 3 | Kasaba | renkli evler, yollar, arabalar (ekteki görsel gibi) | pop synth |
| 4 | Çöl Kanyonu | kum tepeleri, kaktüs, kanyon | **Hicaz makamı + darbuka (düm-tek)** |
| 5 | Şeker Diyarı | pembe tepeler, şeker kamışları | chiptune |
| 6 | Neon Gece | grid zemin, neon kuleler | synthwave |
| 7 | Volkan | lav nehirleri, kara kayalar | minör, ağır davul |

## Teknik mimari (`src/runner/`)
Top fiziği **parkur-yerel koordinatlarda** çalışır:
- `s`: parkur boyunca yay uzunluğu (m).
- `u`: yanal ofset, + sağ.
- `h`: yüzeyden yükseklik.

Viraj, eğim ve dünya dönüşümü parkurun işi. Böylece fizik basit ve sağlam kalır.

| Dosya | Sahibi | Görev |
|---|---|---|
| `track.js` | Sonnet ajanı | Sonsuz yol üretimi, mesh (altıgen karo, kenar, ray), yerel↔dünya dönüşümü, yüzey sorguları |
| `obstacles.js` | Sonnet ajanı (track ile aynı) | Engel/pickup/pad yerleşimi, beat senkron animasyon, yerel koordinatta çarpışma olayları |
| `biomes.js` | Sonnet ajanı | Biyom tanımları, parkurun etrafındaki/altındaki dünya, gökyüzü/sis/ışık geçişleri, beat pulse |
| `music.js` | Sonnet ajanı | Prosedürel ritim müziği, beat saati, pickup notaları, biyom stilleri |
| `runner.js` | Claude (director) | Mod kontrolcüsü: top fiziği, kamera, input (swipe jump), skor, HUD, ölüm/devam, entegrasyon |

### Ortak sözleşmeler (API)
```js
// track.js
export class Track {
  constructor(scene, { seed, palette })        // palette(s) → { tileA, tileB, edge, rail, glow } hex
  ensure(sAhead); trim(sBehind);
  frame(s, out)        // out.pos/tan/right/up : THREE.Vector3
  toWorld(s, u, h, out)
  halfWidth(s)         // solid half width at s (0 in a gap)
  surfaceAt(s, u)      // height of solid surface at (s,u) relative to path (0 flat, >0 ramps, -Infinity = nothing → fall)
  curvature(s)         // signed yaw rate (rad/m), + = turning right
  pieceAt(s); pieces; onPiece = (piece) => {}; group; dispose();
}
// obstacles.js
export class Obstacles {
  constructor(scene, track, { seed })
  spawn(piece, difficulty /*0..1*/, biomeId)
  update(dt, beat /*{beat, phase, bpm, time}*/, ball /*{s,u,h,r,vs,vu,vh,size}*/)
  collide(ball, events /*array to push into*/)
  trim(sBehind); dispose();
}
// biomes.js
export const BIOMES; export function biomeAt(s) /* → { biome, index, t, next } */;
export class Environment { constructor(scene, track); update(dt, camera, ball, beat); dispose(); }
// music.js
export const music = { init(), start(styleId, bpm), stop(), setStyle(id), setBpm(bpm), setIntensity(x),
  beat /* getter → { beat, phase, bpm, time } */, note(), perfect(), duck(on), setMuted(m), suspend(), resume() };
```
