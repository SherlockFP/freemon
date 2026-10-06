# YETİ KAÇIŞI: Parkur özellikleri kataloğu
Kaynak: diğer oyunlar (Sonic Dash/Forces, Temple Run 2, Subway Surfers, Alto's Odyssey, Tiny Wings, Trackmania, Mario Kart, SSX, Geometry Dash, Going Balls, Rolling Sky, Crossy Road) üzerine yapılan araştırma. Sonnet ajanı derledi, game director onayladı.

## Motor temelleri (her şey bunlara dayanır)
- **Parça tanımı.** Her parça uzunluk, yaw hızı ψ'(s), pitch θ(s), **roll φ(s)**, genişlik w(s) ve kesit profili C(u) taşır.
- **Çerçeve.** Rotation-minimizing (parallel transport) frame kullanılır, Frenet değil. Roll ayrı bir kanaldır. Şeritler u ofseti olduğu için her yerde geçerli kalır.
- **Kesit profili C(u).** Düz, half-pipe ve tüp profilleri desteklenir. u, profil üzerinde yay uzunluğudur.
- **Hava fazı.** Top havadayken dünya uzayında balistik hareket eder. İnişte `projectToTrack` ile s ± pencere içinde parkura geri bağlanır.
- **Kamera.** Çerçevenin up vektörünü %70, dünya up'ını %30 alarak lag'li takip eder. 360° roll en fazla 1,5 sn sürer. Boost'ta FOV vuruşu var.
- **Loop hızı şartı.** Dipte v² ≥ 5gR gerekir. Boyut ve hız kapısı olarak kullanılır: küçük top hızlanma okları ile girer, yoksa bypass'tan gider.
- **Beat grid.** Parça uzunluğu beat cinsinden tanımlanır. Helix'te engeller s'e göre değil açıya göre dizilir.
- **Kendini kesmeme.** Loop ve tirbuşon bir parkur genişliği kadar yana kayar, giriş ile çıkış çakışmaz.

## Özellikler
Efor S/M/L, klip puanı 1–5.

| # | Özellik | Açıklama | Efor | Klip |
|---|---|---|---|---|
| 1 | **Buzul Girdabı** (helix) | 1–1,5 tur spiral iniş, eğimli (35–60° bank). Kar taneleri beat'e göre "fırıldak" deseninde dizilir. | M | 4 |
| 2 | **Takla Çemberi** (loop) | Tam dikey çember. Hız ve boyut kapısı var: yetmezse tepeden düşersin ve bir katman kaybedersin. | M/L | 5 |
| 3 | **Tirbuşon** (corkscrew) | Parkur ~40 m içinde 360° döner, şeritler etrafında döner. | M | 5 |
| 4 | **Eğik Viraj** (banked S-curves) | Temel his. Kamera en fazla 30° yatar. | S | 2 |
| 5 | **Buz Küveti** (half-pipe) | Duvarlara tırmanılır, oyun alanı 3 şeritten geniştir. | M | 4 |
| 6 | **Buz Tüneli** (tüp) | Kapalı tüp, tavana kadar dönülebilir. Neon gecede ışık şovu olur. | M | 4 |
| 7 | **Cesaret Ayrımı** (fork) | Güvenli ve uzun yol ya da riskli, kısa ve bonuslu yol. | L | 3 |
| 8 | **Buz Rayı** (grind rail) | Raya atla, kay, çıkışta boost al. Tier 4+ top rayı kırar. | M | 4 |
| 9 | **Halat Kayışı** (zip line) | Yeti takip edemez, nefes alma anıdır. | M | 4 |
| 10 | **Çılgın Kızak** (mine-cart) | Raylı ağ ve makaslar. | M | 3 |
| 11 | **Uçurum Atlayışı** | Havada dönüş, açılı iniş bonusu verir. Kötü iniş bir katman götürür. | M | 5 |
| 12 | **Zaman Rampası** (ski jump) | Rampa ucunda 0,35× slow-mo, kamera yandan döner. | S/M | 5 |
| 13 | **Dalga Dalga** (Tiny Wings tepeleri) | Vadide aşağı swipe ile dalış yapılır, tepeden fırlanır. Zincir halinde "fever" moduna girer. | S/M | 3 |
| 14 | **Gezgin Platformlar** | Beat'e senkron kayan veya dönen platformlar. | M | 2 |
| 15 | **Çatlayan Köprü** | Karolar çatlar ve düşer. Gıcırtı sesiyle önceden uyarı verir. | S/M | 4 |
| 16 | **Çığ Kaçışı** | Yeti beat'e göre kaya atar. Gölge halkası 0,7 sn önceden uyarır. | M | 5 |
| 17 | **Hız Okları** (chevrons) | Boost şeridi, FOV vuruşu yapar. | S | 2 |
| 18 | **Zıp Zıp Yayı** (spring) | Havada swipe trick ister, kar taneleri yay şeklinde dizilir. | S | 3 |
| 19 | **Rüzgar Bacası** (updraft) | Yükseğe kaldırır. | M | 3 |
| 20 | **Bayrak Kapıları** (slalom) | Kombo serisi, beat'e göre şerit kayar. | S | 3 |
| 21 | **Kar Bandı / Kayganlık** | Yana iten bant, buzda şerit değişimi yavaşlar. | S | 2 |
| 22 | **Paletli Üstü** (Subway tren çatısı) | Hareketli kar ezicinin çatısına rampayla çıkılır. | L | 4 |
| 23 | **Altın Yayları** (coin arcs) | Zıplama zamanlamasını kar taneleriyle öğretir. | S | 2 |
| 24 | **Teleferik Trafiği** | Beat'e göre şeritleri kesen kızaklar ve teleferikler. | S | 2 |
| 25 | **Ritim Pedleri** | Beat anında zıplatan ped, PERFECT verir. | S | 3 |
| 26 | **Kartal Kanadı** (glider) | Düşük yerçekimi, havada yön verilir. | M | 4 |

## Yapım sırası (eğlence/efor)
1. Roll'lu çerçeve ve eğik virajlar.
2. Buzul Girdabı (helix).
3. Hız okları, yaylar ve kar tanesi yayları.
4. Zaman Rampası ve Uçurum Atlayışı.
5. Dalga Dalga tepeleri.
6. Bayrak kapıları, buz ve çatlayan köprü.
7. Buz Küveti, ardından Buz Tüneli.
8. Buz Rayı ve Halat Kayışı.
9. Takla Çemberi ve Tirbuşon.
10. Çığ Kaçışı (Yeti kaya atar).

Sonra: ayrımlar, paletli üstü, kızak, hareketli platformlar.

## Set parçaları (30–60 sn)
1. **Buzul Girdabı İnişi.** Helix → slalom → Yeti mağarası üstünden zaman rampası → raya geçip köye kayış → hız okları.
2. **Çığ Sokağı.** Hız okları → Yeti'nin kaya yağmuru → çatlayan köprü → kayalı half-pipe → yay ile uçurum finali.
3. **Neon Tüp Koşusu.** Tüp → loop → tirbuşon → ritim pedleri → boşluğa uzanan halat.
4. **Madenci Kızağı.** Makaslı kızak → rüzgar bacası ile kar ezici çatısı → teleferik trafiği → raya atlama.
5. **Yeşil Tepe Sprint** (Sonic bölgesi). Damalı Dalga Dalga tepeleri → trick'li yay → damalı loop → half-pipe → hız okları.
