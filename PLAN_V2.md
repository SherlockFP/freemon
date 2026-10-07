# PATPAT v2 — Geliştirme Planı

**Hedef:** oyunu 1/10'dan 8/10'a çıkarmak. Oyuna giren biri hemen oynamak istesin, kapattıktan sonra geri gelmek istesin.

**Kaynaklar:**
- Sahibin geri bildirimi (2. tur).
- Kod analizi (6 alt sistem haritası, 2 tasarım eleştirisi).
- Doğrulanmış 61 "oyun hissi" sorunu.
- Temple Run 1/2 ve Roblox "Eat the World / Snowball Simulator / Hole.io" tarzı oyunlardan çıkarılan dersler.

---

## 0. Teşhis: oyun neden 1/10?

| Sorun | Kök neden (kodda) |
|---|---|
| Sıkıcı, amaç yok | ÇIĞ'da kaybetmek imkânsız. Yokuşta ne yaptığın yıldızı etkilemiyor. Hedef hiçbir yerde yazmıyor. |
| Zorluk bazen çok, bazen hiç | Koşu başında top küçük olduğu için 2 çarpışma öldürüyor. Büyüyünce top neredeyse ölümsüz. Engel yoğunluğu parça sınırlarında sıfırlanıyor, koşunun yarısı boş geçiyor. |
| Temple Run gibi değil | Virajlar otomatik dönüyor, dönüş swipe'ı yok. Yeti ekranda hiç görünmüyor. Çarpmak ceza değil, top engelin içinden geçip gidiyor. |
| Yuvarlak yerler buglu | Loop, tirbuşon ve helix'lerde kamera yuvarlanıyor, zemine giriyor, önünü göremiyorsun. Bu yapıların içinde engel yok. |
| Top yere düşüyor | Parça birleşimlerinde ve boşluklarda `surfaceAt` ile iniş toleransı uyuşmuyor. Altında zemin varken bile top düşmeye devam ediyor. |
| Pop-up spam | Her koşudan sonra kutu, zorunlu "kalıcı geliştirme" kartı, başarım ve harf toast'ları çıkıyor. Oyun saçma ödülleri otomatik veriyor. |
| Kontroller kötü | Havada yapılan zıplama kayboluyor (tampon yok). Bir kaydırma 2 şerit atlatıyor. ÇIĞ'da direksiyon 0,3-0,5 sn gecikiyor. |
| Sesler rahatsız | Sert synth sesler var. Aynı ses sık sık tekrarlıyor. İlk ölümden sonra müzik boğuk kalıyor (filtre hatası). |
| Menü kötü | OYNA önce mod seçme ekranı açıyor. Açılışta modal var. Menüde top cansız duruyor. |

---

## 1. YETİ RUSH (ana mod, OYNA ile direkt açılır)

### 1.1 Temel fiiller (her engel tek bir fiil ister, bir bakışta okunur)
| Fiil | Hareket | Ne için |
|---|---|---|
| Şerit | ← → kaydır | Bloklu şeritten kaçmak, kar izini takip etmek |
| Zıpla | ↑ | Alçak kütük, boşluk, rampa ucu, yaratığa basmak |
| Eğil | ↓ | Üstten geçen bar ve lazer. Havadayken ↓ yere çakar, top eğilerek iner. |
| **DÖN** (yeni) | Kavşakta ← → | Temple Run kavşağı. Dönemezsen bariyere çarparsın: ölümcül. |
| **EZ** (yeni) | Yaratığın üstüne düş | Yaratık patlar, top zıplar, kombo artar |

### 1.2 Temple Run kavşakları
- **Kavşak parçası.** Düz yol, keskin bir dönüş (55-64°, track yaw sınırı içinde) ve köşede kırmızı-beyaz bariyer.
- **Uyarı.** Yerde büyük sarı oklar, bükülen kar tanesi çizgisi ve ekranda yön oku (`ui.turnCue`).
- **Dönüş penceresi.** Köşeden yaklaşık 0,9 sn önce açılır, cömerttir. Pencerede yöne doğru yapılan kaydırma şerit değil **dönüştür**. Aynı dokunuşta ikinci bir şerit değişimi yutulur.
- **Kaçırırsan.** Bariyere çarparsın ve koşu biter. Kalkan veya kızak bir kez affeder.
- **Sıklık.** 350 m'den sonra açılır. Başta 25-35 sn'de bir, 3 km'de 12-18 sn'de bir.
- **Köşe öncesi.** Köşeden önceki son 1,2 sn temiz bırakılır. Köşeden sonra 1 sn nefes payı olur.

### 1.3 Yuvarlak bölümler (loop, tirbuşon, helix, half-pipe)
- **Kamera.** Pistin önüne bakar (look-ahead). Roll en fazla 25°. Yüksekliği eğime göre artar, near-clip ayarlanır. Top ve önündeki 2 sn'lik yol her zaman görünür kalır.
- **Engeller ve kar taneleri.** Artık bu bölümlerin içinde de var, açıya göre dizilir. Yoğunluk normalin %60-70'i, tek fiil ister.
- **Virajlar.** Normal virajlarda da engel satırları olur, yoğunluk %70.

### 1.4 Denge: tek zorluk bütçesi
- **Bütçe.** `d(s,t)` tek fonksiyondur: mesafe ve süreyle yumuşak artar. Hız, satır sıklığı, desen karmaşıklığı ve kavşak sıklığı hep buradan beslenir.
- **Gerilim döngüsü.** Yaklaşık 20 sn yükselir, ardından 4 sn nefes gelir. Ani zorluk sıçraması olmaz.
- **Adalet kuralları.**
  - Her satırda serbest bir rota garantidir. Şerit başına en az 0,25 sn reaksiyon süresi kalır.
  - İlk 1 km'de art arda iki ölümcül seçim gelmez.
  - Üst üste en fazla 3 "zor" satır gelir.
- **Engel saati zamana bağlıdır.** Parça sınırlarında sıfırlanmaz, boş parça kalmaz.
- **Hız.** 14 m/sn'den başlar. 2 km'de 27, 6 km'de 42 m/sn olur. Tavan 48.
- **Hedef eğri (bot ölçümüyle doğrulanacak).**
  - Hiç dokunmayan oyuncu 15 sn içinde ölür.
  - Rastgele oynayan oyuncu 30 sn içinde ölür.
  - 0,35 sn gecikmeyle oynayan iyi bot 2,5-6 km'de ölür. Ölümsüz olmamalı.

### 1.5 Açlık / erime (yeni çekirdek baskı)
- **Erime.** Top sürekli erir: boyut göstergesi boşalır. Başta yaklaşık 12-15 sn'de bir kademe gider, ileride daha hızlı. Büyük top daha hızlı erir.
- **Beslenme.** Kar yığınları ve kar izleri göstergeyi doldurur. Bu, Temple Run'ın "eğil, coin topla" mikro kararının karşılığı: güvenli şerit mi, kar izi mi?
- **Ölüm.** En küçük boyda tamamen erirsen ekranda **ERİDİN!** yazar ve koşu biter.
- **Denge.** Karın çoğunu toplayan oyuncu boyunu korur. Toplamayan 25-30 sn'de erir.
- **Büyük topun avantajları.** Küçük engelleri ezer (ezmek biraz kar yer), skor çarpanı yükselir.

### 1.6 Yeti (Temple Run maymunları gibi)
- **Başta.** Yeti ekranın altında, ensende durur. 2,5 sn sonra geri çekilir.
- **Tökezleme.** Çit, kütük, yaratık ya da yandan sıyırma topu bir boy küçültür. Yeti 6 sn boyunca ensende kalır. Bu sürede ikinci kez çarparsan **YAKALANDIN**.
- **Kafa kafaya.** Kaya, kulübe, kar aracı, tren veya kayan duvara tam önden çarpmak ölümcüldür (kalkan affeder).

### 1.7 Mario yaratıkları (orijinal mekanik)
- **Kim, nasıl hareket eder.** Biyoma göre penguen, kar tavşanı, mini-yeti, kardan adamcık, ateş böceği ve benzerleri. Şeritte yürür ya da paytak paytak koşar. Bazıları şerit değiştirir, bazıları sürü halinde gelir.
- **Üstüne düşersen (EZ).** Yaratık "puf" diye patlar ve top zıplar (vh 9). Peş peşe ezmek kombo, kar tanesi ve skor getirir.
- **Önden veya yandan değersen.** Tökezlersin (ölümcül değil).
- **Teknik.** Havuzlu ve instanced; `src/runner/critters.js`.

### 1.8 Otomatik buff kartları (3 kart seçimi kaldırılıyor)
- **Ne zaman.** Her 45-60 sn'de ve her 600 m checkpoint'inde rastgele bir kart uçarak gelir. Oyun **durmaz**.
- **Süre.** **1:30**. HUD'da ikon ve geri sayım halkası görünür. Aynı anda en fazla 3 kart aktif olur.
- **Havuz.**
  - Mıknatıs
  - Çift kar
  - Kabuk (bir çarpışmayı affeder)
  - Akış
  - Altın yağmuru
  - Yay (süper zıplama)
  - Donma (erime durur)
  - Yeti Kovucu
  - Dev Top

### 1.9 Temple Run bağımlılık kancaları
1. **Anında başlangıç ve anında tekrar.** Tek dokunuş yeterli. Tekrar oynarken geri sayım 1 sn'den kısa.
2. **Görev setleri.** Aynı anda 3 görev olur. Set bitince kalıcı skor çarpanı +1 artar. Menüde ve sonuç ekranında görünür.
3. **Pistte ödüller.** Kar tanesi (coin) ve nadir 💎.
4. **BENİ KURTAR.** Ölünce 💎 ile devam edebilirsin: 1, 2, 4, 8.
5. **Mağaza yükseltmeleri.** Güç süreleri kar tanesiyle yükseltilir. Coin'in bir anlamı olur.
6. **Rekor bayrağı.** Pistte rekor bayrağı ve mesafe kilometre taşları var. "Rekora 120 m!" uyarısı çıkar.
7. **Günlük meydan okuma** ve günlük seri rozeti (pop-up değil, rozet).
8. **Hedef gösteren kilitli ödüller.** Örneğin "1.250 ❄️ → Kızıl Kaos kostümü".

### 1.10 Görsel ve harita
- **Kayalar baştan yapılıyor.**
  - Küçük kaya zıplanır, büyük kaya şeridi kapatır. İkisi şekil ve renkle hemen ayırt edilir.
  - Kar üstünde koyu taş ve kırmızı uyarı şeridi olur, beyaz üstünde beyaz kalmaz.
- **Biyomlar.** Her biyoma kendi engel, yaratık ve süs setleri eklenir:
  - Çöl: kaktüs, akrep.
  - Volkan: lav topu, ateş böceği.
  - Şeker diyarı: lolipop, jöle.
  - Neon: lazer, robot.
  - Buz mağarası: sarkıt, fok.
- **Okunabilirlik.** Engeller zeminle kontrastlı, siluetleri net olur.

### 1.11 Hatalar
- **Top yere düşüyor.** Altında katı zemin varken top yüzeye oturtulacak. Parça birleşimlerinde ve boşluk kenarlarında `surfaceAt` tutarlı olacak. Alt adımlar (substep) ve iniş toleransı düzeltilecek.
- **Müzik boğuk kalıyor.** Duck durumu sıfırlanmıyor, sıfırlanacak.
- **Bölge önceki koşudan sızıyor.** `inZone` her koşuda sıfırlanacak.
- **Revive sorunları.** Revive iki kez ödeme alıyor ve ikinci revive menüye atıyor, ikisi de düzeltilecek.
- **Kontroller.**
  - Zıplama tamponu: 0,15 sn.
  - Kaydırma başına tek şerit.
  - Flick son 120 ms'ye göre ölçülecek.
  - Havada ↓ kaydırma yere çakar ve top eğilerek iner.

---

## 2. ÇIĞ SONSUZ (Roblox "Eat the World" / Hole.io / Snowball Simulator hissi)

### 2.1 Döngü
Dağdan sonsuza dek inersin. Yolundaki küçük şeyler **gözle görülür şekilde içine çekilir** ve topa yapışır. Büyüdükçe hızlanırsın, harita genişler, daha büyük şeyler yenebilir hale gelir. Durmadan yemen gerekir, yoksa erirsin.

### 2.2 Emme (görünür çekim)
- **Menzil.** Emme yarıçapı yaklaşık `r·1.6 + 1` m. Bu menzile giren ve yenebilir olan prop (`prop.r ≤ r·0.9`) 0,15-0,35 sn boyunca topa doğru uçar.
- **Animasyon.** Prop uçarken küçülür ve döner, sonra topa yapışır (katamari).
- **Geri bildirim.** Her yutuşta minik "pop" sesi ve kombo var. Mıknatıs buff'ı menzili ×2 yapar.
- **Engeller.** Prop yenebilecek kadar küçük değilse çarparsın ve kar kaybedersin. Kopan parçalar yola saçılır, geri toplanabilir.

### 2.3 Bölge kademeleri: harita büyür ("3x3 → 4x4")
| Kademe | Top yarıçapı | Pist genişliği | Yiyecek | Engel |
|---|---|---|---|---|
| 1 Kartopu | < 1,5 m | 28 m | çakıl, çalı, penguen, insan, kayakçı | kaya, çam |
| 2 Çığ | 1,5-3 | 40 m | kardan adam, kızak, araba, geyik, kulübe | otobüs, dev çam |
| 3 Mega Çığ | 3-6 | 56 m | otobüs, kamyon, dağ evi, ev | apartman, kayalık |
| 4 Felaket | 6-10 | 80 m | apartman, otel, teleferik | saat kulesi |
| 5 Kıyamet | 10+ | 110 m | kuleler, köyler | dağ kayaları |

- **Geçiş.** Kademe atlayınca **YENİ BÖLGE!** banner'ı çıkar, kamera uzaklaşır ve pist 60 m içinde yumuşakça genişler.
- **Yeni bölgede.** Yeni yiyecek seti açılır ve "jackpot" kasabalar çıkar.

### 2.4 Hız ve ağırlık
- **Hız.** Ağırlaştıkça hızlanırsın: `hız = 12 + 3.4·√r` (tavan).
- **Direksiyon.** Parmağı doğrudan takip eder (yaklaşık 0,1 sn). Büyüyünce biraz ağırlaşır ama gecikmez.

### 2.5 Açlık ve baskı
- **Erime.** Sürekli erirsin. Boyut göstergesi ve uyarı var. Minimum boya inersen **ERİDİN!** yazar ve oyun biter.
- **Ritim.** Her yaklaşık 400 m'de bir olay gelir:
  - Kasaba (jackpot)
  - Boyut kapısı ("⛔ 6 m": kırarsan bonus, kıramazsan büyük kayıp)
  - Altın kartopu
- **Yavaşlarsan.** 3 sn'den uzun süre yavaş kalırsan arkadan çığ dalgası yaklaşır.
- **Skor.** Ton ve mesafe. En iyi skor kaydedilir. Görevler sayılır.

### 2.6 Hatalar
- **"Yiyemiyorsun" hatası.** `eatRatio`, `contactK`, cigplus `_clear`, kısmi config değişiklikleri ve kademe uyumsuzluğu incelenecek.
- **Kasabada kilitlenme.** `slowT` üzerine yazılıyor.
- **Dev buff yarıçapı kalıcı şişiriyor.** Dev buff bitince bile yarıçap büyük kalıyor (ratchet).
- **Ters kapı.** Kaçınılamayan ters kapı kaldırılacak.

---

## 3. Menü, akış, ses, geri gelme

### 3.1 Ana menü (sıfırdan)
- **Ortada kartopu.** Dokununca **zıplar**: squash ve stretch, yumuşak bir "pof" sesi, kar tozu. 10 dokunuşta gizli sürpriz çıkar.
- **OYNA.** Büyük buton, **YETİ RUSH**'ı direkt başlatır. Mod seçme ekranı yok.
- **Küçük butonlar.** ⛰️ ÇIĞ SONSUZ · 🗺️ MACERA · 👕 Dolap · 📜 Görevler · ⚙️ Ayarlar.
- **Kompakt bilgi şeridi.** Rekor mesafe, 3 görev, çarpan ve günlük seri rozeti.
- **Açılış.** Modal yok. Günlük ödül pop-up yerine butonda rozet olarak durur.

### 3.2 Sonuç ekranı
- **TEKRAR.** Büyük buton, tek dokunuşla 0,5 sn içinde yeni koşu.
- **Gösterilenler.** Mesafe, skor ve rekor. Görev ilerlemesi. Bir sonraki kilitli ödüle ne kadar kaldığı.
- **Kaldırılanlar.** Zorunlu kart, otomatik "kazandın" kutuları ve harf/başarım pop-up'ları. Ödüller sessizce sayaçlara eklenir.

### 3.3 Ses
- **Seviye ve ton.** Genel efekt seviyesi düşer. Sert synth sesler yumuşatılır (lowpass, kısa ve yuvarlak zarflar). Tiz ses olmaz.
- **Tekrar sınırı.** Kar tanesi, kıl payı ve yazı sesleri hız sınırlı çalar. Kar tanesi sesi notadan notaya çok yumuşak geçer.
- **Müzik.** Biraz kısık ve yorucu değil. Boğuk kalma hatası düzeltilecek.

### 3.4 HUD
- **Göstergeler.** Buff ikonları ve geri sayım, açlık/boyut göstergesi, dönüş oku, ezme kombosu.
- **Yerleşim.** Hepsi ekranın üst ve alt kenarında olur. Engellerin okunduğu orta şerit boş kalır.
- **Kaldırılanlar.** Beyaz tam ekran flaş yok. Uçan yazılar saniyede en fazla 1 tane.

---

## 4. Uygulama planı (Sonnet ajanları, ayrık dosya sahipliği)

**Dalga 1 (paralel):**
| Paket | Sahip olduğu dosyalar | İş |
|---|---|---|
| A runner-core | runner.js, goals.js, perks.js, input.js | dönüş girişi/ölüm, açlık, yaratık ezme, oto buff, düşme hatası, kamera (yuvarlak bölümler), kontroller, revive/müzik hataları |
| B runner-gen | track.js, obstacles.js, biomes.js, **critters.js (yeni)** | kavşak parçası ve uyarıları, virajda ve loop'ta engel, denge bütçesi, yaratıklar, kayalar, biyom setleri, `surfaceAt` tutarlılığı |
| C cig-endless | main.js, world.js, config.js, cigplus.js, ball.js, props.js, scenery.js | sonsuz chunk üretimi, emme, bölge kademeleri, hız, açlık, olaylar, yiyememe/kilitlenme hataları, `startCigEndless`, OYNA'nın direkt YETİ RUSH açması |
| D ui-menu-audio | ui.js, menus.js, index.html, style.css, meta.js, save.js, shop.js, audio.js, sfx.js, runner/music.js | yeni menü (zıplayan top), sonuç ekranı, HUD API'leri, pop-up temizliği, ses, görev/seri/hedef |

**Dalga 2:** her mod için bir entegrasyon ve denge ajanı. Uçtan uca bağlama, bot ölçümleriyle ince ayar, hata avı.

**Dalga 3:** QA ajanı. Sessiz headless regresyon (iki mod, MACERA, menü), derleme. Ardından commit, `docs/` derlemesi ve push.

Her dalga sonunda derleme ve kısa sessiz test geçerse commit ve push yapılır.

### Sözleşmeler (paketler arası API)
- `ui.buffAdd(id, icon, name, secs)` · `ui.buffTick(list)` · `ui.buffRemove(id)`
- `ui.turnCue(dir, urgency)` · `ui.hunger(frac, warn)` · `ui.stompCombo(n)` · `ui.cigHud({tons, dist, tierName, frac})`
- `track.junctionAt(s)` döndürür: `{ s0, s, dir }` ya da `null`. `piece.junction`.
- Yaratık olayı: `{ type: 'critter', id, stomp }` → `obstacles.killCritter(id)`.
- `main.js`: `startEndless()` (YETİ RUSH) ve `startCigEndless()`. Menü bunları çağırır.

### Kurallar
- Testler sessiz yapılır: headless, `--mute-audio`, görünür tarayıcı yok.
- İşlemciyi yormamak için testler düşük öncelikte ve tek tek çalışır.
- Ajanlar git'e dokunmaz. Commit ve push'u yönetici yapar.
- Türkçe metinler doğal olmalı. Update döngülerinde allocation yapılmaz. `?debug` kancaları çalışır durumda kalır.

### İleride (onay gerekirse)
- Ek Kenney CC0 model paketleri: yaratık ve biyom süsleri.
- Karakter yetenekleri (TR2 tarzı).
- Arkadaş hayaleti.
