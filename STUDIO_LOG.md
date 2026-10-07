# PATPAT Stüdyo Günlüğü

Gece boyunca otomatik geliştirme döngüsü. Her tur:
1. değerlendir (puan + sorular),
2. düzelt (alan başına en önemli 3 iş),
3. kontrol et,
4. push.

Bir mod 8'e ulaşınca, daha yüksek bir çıtaya göre tekrar 1 sayılır.

## Tur 1 — Değerlendirme

| Mod | Puan |
|---|---|
| YETİ RUSH | 7.5 |
| ÇIĞ DAĞLAR | 6.5 |
| KARTOPU ARENA | 6 |
| MACERA | 6.5 |
| Menü / Meta | 7 |
| **Genel** | **7** |

**Ne iyi**
- Rush'ın kombo/rekor sonuç ekranı ve biyom çeşitliliği.
- Adil kaya kuralları.
- ÇIĞ'da 30 dağ, kapı kırma mantığı ve 3 yıldız.
- Sade Arena lobisi.
- Tutarlı ve parlak arayüz.

**Ne gelişmeli**
- Rush ölüm ekranı kalabalık.
- Sonuç ekranında bir sonraki hedef görünmüyor.
- ÇIĞ'ın ilk dağları boş ve yavaş.
- ÇIĞ HUD'unda KOMBO yazısı başka bir öğenin üstüne biniyor.
- Arena'da yeni oyuncuya rehber yok.

**Orijinal fikirler**
- Rush: "Yeti Öfkesi" ölçeri (kıl payı zinciri), hayalet Yeti rakip.
- ÇIĞ: "Sıcak Nokta" risk bölgeleri, dağ sonu "Kar Heykeli" koleksiyonu.
- Arena: "Çığ Olayı", takım kardan adam.
- Macera: "Yeti Defteri".
- Genel: "Kış Pasaportu" rozetleri.

**Tur 1 işleri**
- Runner:
  - Yeti Öfkesi ölçeri.
  - Macera'da her 5. bölümde boss.
- ÇIĞ:
  - Erken dağları doldurma.
  - HUD sadeleştirme.
  - Sıcak Nokta.
- Arena:
  - Onboarding ve rastgele takma ad.
  - Çığ Olayı.
- UI:
  - Ölüm/sonuç ekranı temizliği.
  - Sonraki ödül ilerleme çubuğu.

## Tur 1 — Yapılanlar

Hepsi push edildi.

**Rush**
- YETİ ÖFKESİ ölçeri: 8 kıl payı geçiş ölçeri doldurur, sonra 5 saniye ölümsüzlük, kartopu yağmuru ve 2 kat skor gelir.
- Macera'da her 5. bölüm boss bölümü oldu.

**ÇIĞ**
- Dağ 1-5'te yiyecek yaklaşık 2 katına çıktı ve yiyecek şeritleri eklendi.
- Başlangıç temposu hızlandı.
- KOMBO ile HUD çakışması giderildi.
- Dağ 6'dan itibaren SICAK NOKTA geldi: içinde hızlı eriyorsun ama altın kasa var.

**Arena**
- 🎲 rastgele takma ad.
- İlk maçta ipucu ve yiyeceğe doğru ok.
- ÇIĞ OLAYI: uyarılı çığ dalgası geçer. Kristal ya da derin kar arkasına saklanabilirsin, yolda kalan kütlesinin %35'ini kaybeder.

**Arayüz**
- Ölüm ekranı sadeleşti: başlık, sayaç, skor ve istatistik çipleri.
- SONRAKİ ÖDÜL ilerleme çubuğu eklendi (kilit, seviye ve görev).

Kontrol: tüm modlar sessiz duman testinden geçti. ÇIĞ Dağ 1'i bot kazandı.

## Tur 2 — Değerlendirme

| Mod | Puan |
|---|---|
| YETİ RUSH | 7.5 |
| ÇIĞ DAĞLAR | 6.5 |
| ARENA | 6 |
| MACERA | 7 (+0.5) |
| Menü | 7 |
| **Genel** | **7** |

**Ne iyi**
- Rush'ta biyomlar ve boss gerilimi.
- Macera'nın boss'u ve sandığı.
- ÇIĞ'da yeni bölge sunumu ve prop çeşitliliği.

**Ne gelişmeli**
- Rush'ın üst HUD'u çok kalabalık: KOMBO yazısı skorun üstüne biniyor ve ortada 4-5 bildirim aynı anda çıkıyor.
- ÇIĞ:
  - Dağ 1 hâlâ boş, yiyecekler minik.
  - Bot her dağı zorlanmadan geçiyor: ne karar var ne risk.
  - Ton sayısı anlamsızca şişiyor.
- Arena'da oyuncunun yakınında rakip yok, zemin de yönsüz.
- Sonuç ekranlarında SONRAKİ ÖDÜL ÇIĞ ve Macera'da görünmüyor.

**Orijinal fikirler**
- Rush:
  - "Kar Yankısı": en iyi koşunun hayaleti.
  - "Çığ Kayma Hattı": ritme göre altın şerit.
- ÇIĞ:
  - Heykel yıkım sahneleri.
  - Fırtına Köprüsü: boyut bulmacası.
- Arena:
  - Kar Kalesi: tutulabilir bölge.
  - Bumerang kartopu.
- Macera: Ters Bölüm.
- Menü: Kış Pasaportu.

**Tur 2 işleri**
- Runner:
  - Bildirim kuyruğu (öncelikli, tek orta mesaj).
  - Boss giriş sahnesi.
  - Kar Yankısı hayaleti.
- ÇIĞ:
  - Erken dağlarda büyük prop'lar.
  - Güvenli/riskli yol ayrımları.
  - Okunur boyut göstergesi.
- Arena:
  - Oyuncu çevresinde yoğunluk.
  - Zemin kontrastı ve akış.
  - İlk 30 sn koruması.
- UI:
  - KOMBO satırını küçültme.
  - ÇIĞ ve Macera sonuçlarına SONRAKİ ÖDÜL.
  - Daha koyu sonuç arka planı.
  - Kış Pasaportu.

## Tur 2 — Yapılanlar

Hepsi push edildi.

**Rush**
- Öncelikli bildirim kuyruğu: ortada aynı anda tek mesaj gösterilir, mesafe bildirimleri üst kenara taşındı.
- Boss bölümlerinde "BOSS!" girişi, bar ve kutlama eklendi.
- **Kar Yankısı**: en iyi koşunun hayaleti. Onu geçersen "REKORU GEÇTİN!" çıkar.

**ÇIĞ**
- Dağ 1-5'te daha iri yiyecekler var.
- Kenarlara kardan adam, çit ve kulübe gibi simgesel nesneler eklendi.
- Dekor yoğunlaştı.
- Dağ 2'den itibaren GÜVENLİ/RİSKLİ ✦ yol ayrımları geldi.
- Dağ 6 ve sonrasında kapılar zorlaştı.
- Boyut artık çap olarak gösteriliyor (Ø m).

**Arena**
- Doğunca etrafına yiyecek ve av/avcı botlar konuyor.
- Zemin artık damalı, bölgeler ve kristal kuleler var.
- 30 sn koruma eklendi.
- "İLK YEMEK!" ve "SIRA 31 → 24!" bildirimleri.

**Arayüz**
- KOMBO ve skor çarpanı tek satıra indi.
- SONRAKİ ÖDÜL artık Macera ve ÇIĞ sonuçlarında da var.
- Arka plan daha koyu.
- **Kış Pasaportu**: 16 damga.

Kontrol sonucu: bot ÇIĞ Dağ 1'i kazandı, tüm modlar hatasız.

**Tur 3 için not**
- ÇIĞ'da kapı gereksinimi "⛔ 0 m" görünüyor.
- Hız birimi "km/s" yazıyor.
- "YENİ BÖLGE!" yazısı HUD'un üstüne biniyor.
- Ön plandaki ağaçlar görüşü kapatıyor.
- Rush'ta "KAÇ!" ve "BÜYÜDÜN" yazıları hâlâ yolun üstünde.

## Tur 3 — Yapılanlar

Hepsi push edildi.

**Rush**
- Orta ekran mesajları (KAÇ!, BOSS YENİLDİ vb.) artık ekranın %21 yüksekliğinde çıkıyor, yol açık kalıyor.
- "BÜYÜDÜN xN" yazısı kaldırıldı.
- Yeni: **Çığ Kayma Hattı**. Müziğin ritmine göre parlayan altın şeritte vuruşları tutturdukça "RİTİM xN" zinciri kuruluyor ve %12'ye kadar hız kazanılıyor.

**ÇIĞ**
- "⛔ 0 m" hatası düzeldi.
- Hız birimi artık km/sa.
- Kameranın önündeki ağaçlar gizleniyor.
- Yeni: **Heykel Yıkımı** (Dağ 3'ten itibaren, 3-5 dev heykel):
  - Hepsini kırınca HEYKEL SERİSİ bonusu geliyor.
  - Yeni bir 3. yıldız görevi eklendi.

**Arena**
- Yeni: **Kar Kalesi**. Haritada 3 kale var:
  - 5 sn tek başına durunca ele geçiriyorsun ve kütle kazanıyorsun.
  - Senden büyük biri gelirse kaleyi kaybedebilirsin.
- Sıralamada yükselince satırın parlıyor.
- 5 dakikada bir özet gösteriliyor.

**Arayüz**
- "YENİ BÖLGE" bandı HUD'un altına indi ve küçüldü.
- Ekranda aynı anda en fazla 2 bildirim görünüyor.

Kontrol: tüm modlar hatasız, bot ÇIĞ Dağ 1'i kazandı.

## Tur 4 — Değerlendirme

| Mod | Puan |
|---|---|
| Rush | 7.5 |
| ÇIĞ | 6.5 |
| Arena | 6 |
| Macera | 7 |
| Menü | 7 |
| **Genel** | **7** |

Skorlar sabit kaldı. En büyük engel ekranın üstündeki kalabalık: KOMBO, güç kartları, ritim kartı ve hayalet yazısı üst üste biniyor.

**Gelişmeli**
- Rush'ta 2,2 km'deki düşüşün adil olup olmadığı kontrol edilmeli.
- ÇIĞ:
  - Dağ 3'te dev kapı kartı ekranı kaplıyor.
  - Erime uçurumu var.
  - Erken dağlar hâlâ boş.
- Arena:
  - Hiçbir şey yapmayan oyuncu 45. saniyede öldü.
  - Doğulan alan boş ve bembeyaz.
- Menü:
  - Pasaport Ayarlar'ın içine gömülü.
  - Alt menü, görev panelinin üstüne biniyor.

**Yeni fikirler**
- Rush: Yeti Yemi.
- ÇIĞ: Çığ Sörfü, Kar Dönüşümü.
- Arena: Kartopu Sürüsü, Buz Kırığı.
- Menü: Mevsim Atlası, sezon bandı.

**Tur 4 işleri**
- HUD baştan düzenlenecek: tek üst slot, küçük çipler.
- Rush'ta düşüş adaleti ve ritim parıltısı.
- ÇIĞ'da küçük kapı çipi, erime dengesi ve yer işaretleri.
- Arena'da 60 sn güvenlik, kalabalık başlangıç ve renkli zemin.
- Ana menüde pasaport ve menü düzeltmeleri.

## Tur 4 — Yapılanlar

Hepsi push edildi.

**HUD (Rush)**
- Üst kısım sabit bir düzene geçti: skor, altında [KOMBO] [xN] çipleri, en altta ince barlar.
- Buff ikonu tek slottan, sağ üstten gösteriliyor.
- Bildirimler tek şeritte, aynı anda en fazla 1 tane.
- Ekranın %22'sinin altına hiçbir şey taşmıyor, yol temiz.

**Rush**
- 2,2 km'deki düşüş adil hale getirildi: altıgen deliklerde orta şerit artık hep sağlam.
- Delik ve boşluklardan önce hıza göre en az 1-1,5 sn uyarı süresi var, ok bantları eklendi.
- Ritim şeridi parlak kenar çizgileriyle görünür oldu.
- Bot 3,6 km'yi düşmeden geçti.

**ÇIĞ**
- Kapı tabelası küçüldü.
- HUD tek satıra indi.
- Kapı öncesine "kar yağışı" kurtarma alanı eklendi, ayrıca "BÜYÜMEN LAZIM!" uyarısı.
- Her yaklaşık 150 m'de yer işareti kümeleri var.
- Erken dağlarda kamera daha yakın.

**Arena**
- 60 sn koruma.
- Bir kalenin yanında, yemek halkası ve botlarla doğuyorsun.
- Pastel zemin ve kaleler arası yollar.

**Menü**
- Ana ekrana 🛂 Pasaport butonu geldi.
- Alt menü artık başka öğelerin üstüne binmiyor.
- "Görünüm: NORMAL" ve "Yeni damga: …!" metinleri düzeltildi.

## Tur 5 — Değerlendirme

| Mod | Puan |
|---|---|
| Rush | 7.7 (+0.2) |
| ÇIĞ | 6.7 (+0.2) |
| Arena | 6 |
| Macera | 7 |
| Menü | 7.2 |
| **Genel** | **7.1** |

**Ne iyi**
- Rush HUD'u artık okunur.
- Sonuç ekranı güçlü.
- ÇIĞ Dağ 12 görsel olarak zengin.
- Macera temiz.

**Ne gelişmeli**
- Rush:
  - Biyom adı iki kez yazıyor.
  - Soluk "DİKKAT!" ve "ÇİT! GÜÇ!" yazıları duruyor.
  - Ortadaki "1" yazısının ne olduğu belli değil.
- Sonuç ekranında konfeti kartların üstüne biniyor, görev yazıları kırpılıyor.
- ÇIĞ:
  - Yıkılan nesnelerin parçaları ekranı kaplıyor.
  - Bant ile tabela çakışıyor.
  - Etap yazısı çelişkili.
- Arena:
  - 60. saniyede oyuncu hâlâ son sırada.
  - Zemin boş.
  - HUD 4 kart.
- Menü:
  - Alt menü hizası bozuk.
  - Pasaport bulunması zor.
  - Görev paneli kesik.

**Yeni fikirler**
- Rush: Yeti Aynası, Ritimde Kırılan Köprü.
- ÇIĞ: Gizli Kar Tüneli, Ekip Topu.
- Arena: Küçülen Harita Fırtınası, Takım Boyası.
- Macera: Yıldız Haritası.
- Menü: Günlük Kar Küresi.

## Tur 5 — Yapılanlar

Hepsi push edildi.

**Rush**
- Yolun üstündeki "ÇİT! GÜÇ!" ve "DİKKAT!" yazıları kaldırıldı, tekrar eden biyom yazısı silindi.
- Takılı kalan geri sayım rakamı temizlendi.
- Boyut göstergesine "BOYUT" etiketi eklendi.
- Ezme kombosu artık küçük bir çip olarak gösteriliyor.
- Macera Bölüm 1'e başlangıç rehberi eklendi.

**ÇIĞ**
- Kırılan nesnelerin parçaları daha az, daha küçük, kısa ömürlü ve kameradan uzakta.
- Bant ve çığ uyarısı kapı tabelası geçene kadar bekliyor.
- Etap bildirimi kısa "✓ ETAP n" oldu.
- Kamera büyük topta geri çekiliyor.

**Arena**
- İlk 90 sn'de yiyecek akışları, daha çok av botu ve botların yavaş büyümesi.
- Rengarenk zemin, belirgin kaleler, büyük pellet'ler.
- HUD tek karta indi, liderlik tablosunda ilk 5 ve sen görünüyorsun.
- Yeni: **Küçülen Fırtına Alanı**, her yaklaşık 5 dakikada bir.

**Arayüz ve Menü**
- Konfeti kartların arkasına alındı, görev satırları kırpılmıyor.
- Üst butonlar tek tipe getirildi.
- Alt menü 6 sütunlu düzgün bir ızgara oldu ve 🛂 PASAPORT butonu eklendi.
- Yeni: **Günlük Kar Küresi**: günde bir kez salla, ödül kazan.

**Tur 6 için not**
- Menüde ✨ satırı hâlâ boş bir çerçeve.
- Görev panelinin altında "0/100" yazısı kesik.

## Tur 6 — Yapılanlar

Hepsi push edildi.

**Rush**
- İlk dakika artık önceden planlı:
  - 14. saniyede rampa zıplaması ve kar tanesi yayı.
  - 19. saniyede 4 yaratıklık geçit.
  - 30. saniyede ilk buff kartı.
  - İlk kavşak 640 m'de ve geniş pencereli.
- Yeni: **Balık Yemi 🐟**. Yeti yakındayken yemi bırakırsan 3 sn durup yer. Yakalanmak üzereyken kendiliğinden kullanılır.

**ÇIĞ**
- Yeni: **Gizli Kar Tüneli** (Dağ 4'ten itibaren). Çatlak buz duvarını kırınca altın kasalı bir bonus yol açılıyor, buna bağlı yeni bir 3. yıldız görevi de var.
- Yeni: **Ekip Topu**. 3 kardan adamı hızlıca yutunca topun üstüne mini bir kardan adam biniyor; kombo süresine ve skora +%10 ekliyor.

**Macera**
- Yeni: **Gizli Rota**. Her 15 yıldızda bir bonus bölüm açılıyor (6 tane). Haritada mor dallar olarak görünüyor ve üstte "12/15 ★ → Gizli Rota 1" ilerlemesi yazıyor.

**Arena**
- Yeni: **Takım Boyası**. Tuttuğun kalenin çevresi senin rengine boyanıyor ve oradaki yiyecekler sana %20 fazla değer veriyor.
- Küçülen alanın adı "BUZ ÇEMBERİ" oldu.

**Menü**
- Ana ekrandaki boş ✨ satırı ve kesik "0/100" sorunu düzeldi. Satır artık "Pembe İz kilidi 0/100" gösteriyor.

## Tur 7 — Değerlendirme

| Mod | Puan |
|---|---|
| Rush | 7.8 |
| ÇIĞ | 6.8 |
| Arena | 6.2 |
| Macera | 7.1 |
| Menü | 7.4 |
| **Genel** | **7.2** |

Genel puan istikrarlı yükseliyor (7 → 7.2).

**Ne iyi**
- Rush'ın ilk dakikası net ve heyecanlı.
- Ölüm ekranı mükemmel.
- ÇIĞ Dağ 18 manzarası zengin.
- Arena renkli.
- Macera haritası okunur.

**Gelişmeli**
- Rush:
  - Kombo çok hızlı şişiyor: 15. saniyede x15 oluyor.
  - Biyom geçişleri sert.
  - Ölüm ekranında "1.200 / 0" hatası var ve bir satır kırpılıyor.
- ÇIĞ:
  - Dağ 4'te bant ve uyarı mesajları üst üste biniyor.
  - "EKİP TOPU" yazısı yerde kalıyor.
  - Soluk karın üstünde yazı kontrastı düşük.
- Arena:
  - Büyük çatılar oyuncuyu ve yiyeceği gizliyor.
  - Büyüme hissi ölçülmeli.
- Menü:
  - İki "x1" rozeti birbirine karışıyor.
  - Macera'da kilitli düğümler hiçbir şey anlatmıyor.

**Yeni fikirler**
- Rush: Çığ Rüzgârı.
- ÇIĞ: Domino Çam, Isınan Top.
- Arena: Pelet Fırtınası, Sürü Modu.
- Macera: Yıldız Fırtınası.
- Menü: Yeti Pazarı, Dostlar Duvarı.

## Tur 7 — Yapılanlar

Hepsi push edildi.

**Rush**
- Kombo artık kazanılarak büyüyor:
  - Çarpan AKIŞ'a bağlı; x10, x25 ve x50 için gerçek beceri gerekiyor.
  - Kar tanesi toplamak artık akış kazandırmıyor.
  - İlk dakikada akışa tavan var.
- Biyom geçişleri yaklaşık 120 m boyunca yumuşak geçiyor.
- Yeni: **Çığ Rüzgârı**. 1,5 km'den itibaren uyarılı yan rüzgâr esiyor, karşı yönlendirme yapman gerekiyor. Rüzgâr bölgesinde ölümcül engel yok.

**ÇIĞ**
- Tüm mesajlar tek öncelikli kuyruktan geçiyor, ekranda aynı anda tek mesaj oluyor.
- Yutma etiketi sadece ilk kez yenen nesne türünde çıkıyor.
- Yazıların çevresinde koyu kontur var.
- Yeni: **Domino Çam**. Çam sırasını devirince zincirleme bonus geliyor.

**Arena**
- Oyuncuyu ve yemi gizleyen büyük yapılar şeffaflaşıyor, boyutları sınırlandı.
- Büyüme testi (bot): 60 sn'de kütle 120'ye ulaştı, sıra #15.
- Yeni: **Pelet Yağmuru**. Uyarıdan sonra 8 sn boyunca değerli yem yağıyor.

**Menü**
- Hedefi sıfır olan satırlar gizlendi ("1.200 / 0" hatası düzeldi).
- Çarpan çipi artık "✖️ ×N ÇARPAN" diye yazıyor; görev rozeti alınabilir ödül sayısını gösteriyor.
- Macera haritasında sonraki 3 bölüm ad ve ikonla görünüyor, mevcut bölümde avatar var.
- Yeni: **Yeti Pazarı**. Haftalık değişen 3 teklif.

Kontrol: Rush'ta bot 2,6 km'yi hatasız koştu; tüm modlar sorunsuz.

## Tur 8 — Yapılanlar

Hepsi push edildi.

**Ses**
- Ritim pedleri müzikle aynı tonda (G pentatonik) ve art arda bastıkça notalar yükseliyor.
- Rüzgâr yumuşak bir esinti sesiyle geliyor.
- Büyük anlarda müzik hafifçe kısılıyor.
- ÇIĞ, Arena ve menüye çok hafif bir ortam müziği eklendi.
- Arena'da eksik olan ses türleri tamamlandı.

**Rush**
- Her mekanik ilk kez karşına çıktığında üst kısımda kısa bir ipucu görünüyor. Ezme ve rampa ipuçlarında kısa bir ağır çekim de var.

**ÇIĞ**
- Her boss'un artık kendine özgü bir dövüşü var:
  - Yeti kartopu atıyor ve üstüne hücum ediyor.
  - Robot lazer çizgisi çekiyor ve dron kırıntıları bırakıyor.
  - Golem şok dalgası halkaları ve buz kayaları gönderiyor.
- Her dövüş 2 fazlı: boss %50 canda öfkeleniyor. Özel saldırısından sonra kısa bir "AÇIK!" hasar penceresi açılıyor.
- ÇIĞ mekaniklerine ilk karşılaşma ipuçları eklendi.

**Macera**
- Yeni: **Yıldız Fırtınası**. Her gün 3 bölüm ⭐x2 veriyor; bu ekstra yıldızlar Gizli Rota kilitlerine sayılıyor.

**Menü**
- Yeni: **BUGÜN** şeridi. Günün etkinlikleri (Kar Küresi, Yıldız Fırtınası, Yeti Pazarı, Günün Dağı) burada ve tek dokunuşla açılıyor.

Kontrol: bot boss dağları 5, 10 ve 15'i kazandı, tüm modlar hatasız çalıştı.

## Tur 9 — Değerlendirme

| Mod | Puan |
|---|---|
| Rush | 7.8 |
| ÇIĞ | 7.2 (+0.4) |
| Arena | 6.4 |
| Macera | 7.1 |
| Menü | 7.3 |
| **Genel** | **7.4** |

Puan istikrarlı yükseliyor: 7 → 7.4.

**Ne iyi**
- Rush'ın sunumu.
- ÇIĞ ortamlarının zenginliği.
- Arena'da takım renkleri.
- Güçlü marka görünümü.

**Gelişmeli**
- Rush'ta kombo hâlâ hızlı şişiyor.
- Rush ve ÇIĞ'da üst üste binen bildirimler var (ETAP, kapı ve rakip mesajları aynı anda çıkıyor).
- Arena'da kaya kümeleri hâlâ opak.
- Menü:
  - BUGÜN şeridi kesik görünüyor.
  - Ana ekran kalabalık.
  - Test sırasında MACERA butonu haritayı açmadı.

**Yeni fikirler**
- Rush: Fırtına Tüneli kombosu.
- ÇIĞ:
  - Ters Çığ: çığı kovala.
  - Boss Tuzağı.
- Arena:
  - Kar Kralı Tacı.
  - Gizli Yuva.
- Macera:
  - Yeti Günlüğü.
  - Bölüm Mutasyonu.
- Menü: Dönen Vitrin Kostümü.

## Tur 9 — Yapılanlar

Hepsi push edildi.

**Arayüz**
- Tek bir duyuru sıralayıcısı var. Ekranda aynı anda tek orta mesaj ve tek üst bildirim çıkıyor.
- Mesajlar öncelik sırasına göre geliyor, aralarında en az 1,2 sn boşluk var, aynı mesaj tekrar edilmiyor ve "hayalet" yazı kalmıyor.
- ÇIĞ HUD'u ekranın %13'üne indi.

**Rush**
- Kombo şişmesinin kaynağı arayüzdeki tahmin sayacıydı. Artık gerçek beceri sayacı kullanılıyor: en fazla 0,7 sn'de +1 artıyor ve isabet alınca kırılıyor.
- Yeni: **Fırtına Tüneli**. Her km'nin son 100 m'sini hasarsız geçersen "TEMİZ GEÇİŞ!" alırsın, kombo ikiye katlanır.

**ÇIĞ**
- Tüm yazılar mesaj kuyruğundan geçiyor.
- İpucu sadece Dağ 1-2'de gösteriliyor.
- Yeni: **Ters Çığ** (Dağ 7, 14, 21…). Çığ önden kaçıyor, sen onu kovalayıp yakalıyorsun.

**Arena**
- Kayalar, kristaller ve kale duvarları oyuncunun önündeyse şeffaflaşıyor.
- Kendi topunun altında altın renkli bir halka ve ▼ işareti var.
- Yeni: **Kar Kralı Tacı**. Liderin başında taç oluyor; onu yiyen +%25 bonus alıyor, botlar da krala saldırıyor.

**Menü**
- BUGÜN kaydırmalı bir karusel oldu.
- Görevler tek satıra katlanabiliyor.
- Aynı anda tek dikkat rozeti gösteriliyor.
- Yeni: **Vitrin**. 3 günde bir değişen, %15 indirimli bir kostüm.

**Kontrolde bulunan ve düzeltilen hatalar**
- Ana menü açılırken çöküyordu (görev özeti satırı tanımlanmadan önce kullanılıyordu).
- ÇIĞ'daki "Kardan adam ordusu" mesajı çöküyordu.

Bot ÇIĞ Dağ 5, 7 (Ters Çığ) ve 14'ü kazandı.

**Tur 10 için not**
- BUGÜN çiplerindeki yazılar çok küçük ve okunmuyor.

## Tur 10 — Yapılanlar

**Menü**
- BUGÜN çipleri artık okunur: koyu yazı, beyaz/altın zemin, 12,5 px.
- Yeni: **Yeti Günlüğü**. Macera bölümleri ve ÇIĞ dağları bitirildikçe açılan 10 sayfalık hikâye defteri.

**ÇIĞ**
- Yeni: **Boss Tuzakları**. Her boss'un arenasında 2 tuzak var:
  - Yeti buz çukuruna düşüyor.
  - Robotun lazeri aynadan kendisine yansıyor.
  - Golem'in üstüne buz sarkıtları düşüyor.
- Tuzak isabeti boss'a %25 hasar veriyor ve 3,5 sn sersemletiyor.

**Arena**
- Yeni: **Gizli Yuva**. 8 kar yuvası var; küçük top 5 sn saklanabiliyor.
- Performans: minimap önbellekte tutuluyor, gereksiz matris güncellemeleri ve ekran (DOM) yazımları kaldırıldı. Düşük kalitede ağır efektler kapanıyor.
- Çığ damgası hatası düzeltildi.

**Rush**
- Performans: her karede yapılan ekran (DOM) ve yazı güncellemeleri azaltıldı.
- Yeni: **Koşu özeti**. Ölünce 1 sn'lik bir şerit koşudaki önemli anları gösteriyor (kombo zirvesi, rekor, boss, ölüm nedeni).

**Kontrol**
- Tüm modlar hatasız çalıştı.
- Boss dağlarını (5, 14) ve Ters Çığ dağını (7) bot kazandı.

**Not**
- GitHub bir süre 500 hatası verdi; birikmiş commit'ler sonradan push edildi.

## Tur 11 — Değerlendirme

| Mod | Puan |
|---|---|
| Rush | 7.9 |
| ÇIĞ | 7.4 |
| Arena | 6.9 (+0.5) |
| Macera | 7.1 |
| Menü | 7.4 |
| **Genel** | **7.4** |

Hiçbir modda hata yok. Arena botu 60 saniyede kütle 34'ten 91'e çıktı ve sırası 35'ten 14'e yükseldi.

**Ana sorun:** yeni özellikler oyun içinde görünmüyor. Boss tuzakları, Ters Çığ'daki kovalamaca, ölüm özeti, taç ve yuvalar fark edilmiyor. Görünmeyen özelliği oyuncu keşfedemez.

**Diğer sorunlar**
- Boss ekranında yazılar üst üste biniyor.
- Macera'daki Günlük butonu ve fırtına bandı sönük duruyor.
- Günlük'ün kilitli sayfaları hiçbir şey vaat etmiyor.

**Yeni fikirler**
- Rush: Yeti Radyosu.
- ÇIĞ: Çığ Dansı, Boss Ganimeti.
- Arena: Görüş Fırtınası, Takım Bayrağı.
- Macera: Yeti Postası.
- Menü: Mevsim Teması, Rozet Rafı.

## Tur 11 — Yapılanlar

**ÇIĞ**
- Boss artık daha küçük ve kenara kayıyor; boss dövüşünde kamera geri çekiliyor.
- Tuzaklar büyüdü ve nabız gibi atan halkalarla, 🧊/🪞/❄ ikonlarıyla işaretlendi.
- Yeti hücum ederken buza çıkıyor. Testte tuzak, Yeti'nin 169 canının 42'sini götürdü.
- Ters Çığ'da "🏔 ÇIĞ: N m ↑" çipi gösteriliyor.
- Boss dövüşü sırasında ipucu satırı gizleniyor.

**Rush**
- Ölüm anı yeniden yapıldı: önce donma ve zoom, ardından ölüm nedeni kartı geliyor.
- Koşu özeti şeridi büyütüldü.
- Yeni: **Yeti Radyosu**. Her km'de gökyüzünün tonu değişiyor ve istasyon adı çıkıyor ("📻 Gün Batımı FM").

**Arena**
- "KORUMA BİTTİ" gibi bildirimler artık üstte.
- Yuva, kale, kristal ve kral ilk kez göründüğünde açıklama etiketi çıkıyor.
- Kralın üstünde altın bir ışın var; kral ekran dışındaysa kenarda ok gösteriliyor.
- Botlar sohbette laf atıyor.

**Macera ve Menü**
- Günlük butonu artık hap şeklinde.
- Fırtına bandı okunur hale geldi.
- Kilitli bölümler gri ad ve 🔒 ile gösteriliyor.
- Kilitli günlük sayfaları için önizleme var.
- Görev kartı başlangıçta kapalı geliyor.
- Ekranda tek rozet gösteriliyor.
- Yeni: **Mevsim Teması**. Ay'a göre menü rengi ve parçacıklar değişiyor.

**Tur 12 için not**
- Ters Çığ'da büyük beyaz çığ şekilleri kameranın önünde, sol altta görünüyor. Çığ topun önünde olmalı.

## Tur 12 — Yapılanlar

**Rush.** 1,2 km'den sonra 3 yeni engel geliyor:
- **Kartopu Topçusu**: yolun kenarındaki kardan adam, çizgili şeride kartopu atıyor.
- **Buz Kapısı**: buz çubuğu ritme göre inip kalkıyor.
- **Penguen Kızağı**: penguenler şeritler arasında kayıyor.

Her biri için ilk karşılaşmada ipucu gösteriliyor.

**ÇIĞ**
- Ters Çığ'da duvar artık hep topun önünde kalıyor.
- Yeni: **Boss Ganimeti**. Boss yenilince parlak bir küre düşüyor; onu yakalarsan boss'a özel iz ya da kostüm kazanıyorsun:
  - Yeti: Şimşek izi.
  - Robot: Robot kostümü.
  - Golem: Ateş izi.

**Arena**
- Yeni: **Beyaz Fırtına**. 25 sn boyunca görüş daralıyor, oyuncular birbirini pusuya düşürebiliyor.
- Tüm olaylar tek bir yönetici tarafından sırayla açılıyor, iki olay arasında en az 40 sn sakinlik oluyor.

**Menü**
- Yeni: **Yeti Postası**. Her gün komik bir kartpostal ve ❄️ kuponu geliyor.
- Yeni: **Rozet Rafı**. Pasaportta mod başına kupa rafları ve açılmaya en yakın 3 başarım var.

**Kontrol:** Rush 2,6 km hatasız; boss dağları 5 ve 14 ile Ters Çığ (7) bot tarafından kazanıldı; tüm modlar hatasız.

## Tur 13 — Değerlendirme

| Mod | Puan |
|---|---|
| Rush | 7.9 |
| ÇIĞ | 7.4 |
| Arena | 6.5 |
| Menü | 7.2 |
| **Genel** | **7.3** |

**Gelişmeli**
- Rush'ın yeni engellerinden Topçu ve Kızak 2,8 km boyunca hiç görülmedi. Buz Kapısı'nın çubuğu zor okunuyor.
- Rozet Rafı boş cam kutulardan oluşuyor ve başlıkları okunmuyor.
- Küçük yazılardaki kontur (stroke) okunurluğu bozuyor: çiplerde ve kartpostalda.
- ✉ ikonu bir çipin üstüne biniyor.
- Boss dövüşü çok kolay: bot 53 saniyede bitirdi.
- Ganimet küresi görünmüyor.
- Arena'nın ilk dakikasında av anı yok.

**Yeni fikirler**
- Rush: Kar Sürüsü (kurtarılan penguenler).
- ÇIĞ: Çığ Eşliği (seri bonusu), Kardan Adam Tahtı.
- Arena: Kartopu Güreşi, Mevsim Boss Topu.
- Macera: Yeti Haritası, Dağ Misafiri.
- Menü: Kar Küresi Koleksiyonu, Arkadaş Postası.

## Tur 13 — Yapılanlar

**Rush**
- Yeni engeller garantili geliyor: Topçu 1,3 km'de, Buz Kapısı 1,6 km'de, Kızak 2 km'de. Sonrasında her 400-700 m'de bir tekrar çıkıyorlar.
- Buz Kapısı artık neon renkte ve ritimle yanıp sönüyor.
- Yeni: **Kar Sürüsü**. Kurtardığın penguenler (en fazla 5) arkandan sıra halinde geliyor; her biri çarpana +0,1 ekliyor.

**ÇIĞ**
- Boss'lar zorlaştı. Hasar penceresi dışında yapılan vuruş artık ×0,15 hasar veriyor. Ölçülen dövüş süresi: Dağ 5'te 34 sn, Dağ 10'da 43 sn.
- Ganimet küresi büyüdü, üstünde ışın var ve HUD'da ok ile mesafe gösteriliyor.
- Yeni: **Çığ Eşliği**. Art arda kazanılan her dağ başlangıç boyutuna +%5 ekliyor, en fazla +%25. Testte bulunan bir çökme hatası (plan nesnesinin donmuş olması) düzeltildi.
- "YENİ BÖLGE!" ve dağ adı artık alt alta, ortalanmış görünüyor.

**Arena**
- Doğunca yakınında garantili 3 küçük av botu oluyor, ilkinin üstünde "🎯 av" yazıyor.
- Top küçükken kamera daha yakından çekiyor.
- Yeni: **BOSS TOPU**. Her ~5 dakikada dev bir top geliyor:
  - Hızlanarak çarpınca hasar alıyor.
  - Yenilince 260 değerli pelet saçıyor.

**Arayüz ve Menü**
- Küçük yazılardaki kontur kaldırıldı; artık koyu zemin üstünde net görünüyorlar.
- ✉ butonu kürenin yanına taşındı.
- Rozet Rafı'nda kilitli kupalar gri siluet olarak görünüyor.
- Kartpostal yazısı okunur hale geldi ve kartpostala kar tanesi uçuşu eklendi.
- Aynı damga bildirimi bir oturumda yalnızca bir kez çıkıyor.

**Kontrol**
- Rush 2,68 km hatasız ilerledi.
- Boss dağları 5 ve 14 ile Ters Çığ (7) bot tarafından kazanıldı.
- Tüm modlar hatasız.

## Tur 14 — Yapılanlar

**İlk deneyim (FTUE)**
- Oyunu ilk kez açan oyuncu 2 sn'lik "DOKUN VE OYNA" ekranından doğrudan YETİ RUSH'a giriyor.
- İlk koşudan sonra:
  - "İLK KOŞUN!" kutlaması ve +60 ❄️ veriliyor.
  - İlk kostüm hedefi gösteriliyor.
  - 3 adımlık bir tanıtım turu var (atlanabilir).
- Ana menünün ikincil sistemleri (BUGÜN, Küre, Posta, Pasaport) 2-3 koşu boyunca kademeli olarak "YENİ!" etiketiyle açılıyor.
- Eski oyuncular bu akıştan etkilenmiyor.

**ÇIĞ**
- Yeni: **Kardan Adam Tahtı**. Yan alanda 5 bloklu bir kardan adam kulesi duruyor:
  - Çarpınca bloklar zincirleme devriliyor.
  - Taçlı blok düşerse "TAHT YIKILDI!" bonusu veriyor.
  - Bu tahtı yıkmak yeni bir 3. yıldız görevi.

**Arena**
- Yeni: **Kartopu Güreşi**. Benzer boydaki iki top kafa kafaya çarpışırsa 6 sn'lik bir itişme düellosu başlıyor.
  - Halkadan çıkan kütlesinin %30'unu kaybediyor.
  - Oyun akışında kimin kazandığı yazıyor.

**Kontrol**
- İlk açılış ekranı çalışıyor ve Rush'ı başlatıyor.
- Bulunan yan etki düzeltildi: açılış ekranı varken başka bir mod başlatılırsa Rush artık araya girmiyor.
- Boss dağları ve Ters Çığ kazanıldı.

## Tur 15 — Değerlendirme ve acil düzeltme

| Mod | Puan |
|---|---|
| İlk deneyim | 7.8 |
| Rush | 7.9 |
| ÇIĞ | 7.4 |
| Arena | 6.8 |
| Menü | 7.3 |
| **Genel** | **7.4** |

**Acil düzeltme (push edildi)**
- ÇIĞ'da ilk buff alındığında oyun çöküyordu. Tur 9'daki kuyruk değişikliğinden kalan, artık var olmayan bir fonksiyon çağrılıyordu. Düzeltildi; Dağ 3, 4 ve 9 hatasız kazanıldı.
- Rush'taki çarpan çipinde "x3.4500000000000006" yazıyordu, artık "x3.5" gösteriliyor.

**Gelişmeli**
- Boss etiketi HP çubuğunun üstüne biniyor.
- Arena'da ÇIĞ'a ait "YENİ BÖLGE" bandı ortada çıkıyor.
- Tahtın silüeti okunmuyor.
- Arena'da kütle kaybettikten sonra toparlanma hissi zayıf.
- Dönen oyuncunun rekor satırında "—" görünüyor.

## Tur 15 — Yapılanlar

**ÇIĞ**
- Boss çubuğu tek blok halinde: ad üstte, can değeri çubuğun içinde.
- Boss dövüşü sürerken bölge bantları bekletiliyor.
- Kardan Adam Tahtı kolay seçiliyor: bloklarda yüz ve renkli kontur var, en üstte altın taç, 70 m'lik ışık sütunu ve 👑 ikonu duruyor.
- Ordu mesajı artık sırayla gösteriliyor.

**Arena**
- Boyut bandı artık üstte küçük bir bildirim olarak çıkıyor.
- Yeni: **Toparlan**. Büyük kayıptan sonra 4 sn kalkan ve yakınında yem çıkıyor.
- Yeni: **İntikam**. Seni yiyen oyuncu 20 sn boyunca haritada işaretli kalıyor; onu geri yersen bonus kazanıyorsun.

**Rush**
- Tüm yazılar elden geçirildi: ortada aynı anda tek büyük yazı oluyor.
- Kanon sayacı artık bir çip olarak gösteriliyor.
- Uzun bildirimler kısaltıldı.
- Yeni: **Yeti Ekmeği 🥐**. Yeti çok yaklaşınca 3 sn çöreği kokluyor.

**Menü**
- Rush rekoru gerçek değeriyle gösteriliyor, örneğin "1.462 m".
- Kademeli açılma tüm modları sayıyor.
- İlk koşularda "Daha fazlası N koşu sonra açılıyor ✨" ipucu çıkıyor.

**Kontrolde bulunanlar** (push edilmeden önce düzeltildi)
- Ordu mesajı yine olmayan bir fonksiyonu çağırıyordu; bu sefer oyunla gerçek bağlantı kuruldu.
- Kendi düzeltmemdeki bir yorum satırı bir kod satırını bozmuştu; düzeltildi.

**Test**: ÇIĞ Dağ 3, 4, 5, 7, 9 ve 14 bot tarafından hatasız kazanıldı.

## Tur 16 — Hata avı + değerlendirme

Hiç çalışma zamanı hatası bulunmadı. Test edilenler:
- Rush 3 km.
- ÇIĞ 11 dağ ve 4 boss.
- Arena 120 sn.
- Macera 3 bölüm.
- Tüm menü butonları.

| Mod | Puan |
|---|---|
| Rush | **8.0** |
| ÇIĞ | 7.5 |
| Arena | 7.0 |
| Macera | 7.3 |
| Menü | 7.3 |
| **Genel** | **7.6** |

**🎯 Rush 8'e ulaştı.** Kurala göre çıta yeniden ayarlanıyor: artık Subway Surfers ve Temple Run 2 gibi en çok kazanan oyunlarla kıyaslanacak ve oyun 1'den başlıyormuş gibi değerlendirilecek.

Bu oyunlarda olup bizde eksik olanlar:
- yetenekli karakterler
- sezon ve olay koleksiyonları
- arkadaş skor tablosu
- daha cilalı görseller

**Gelişmeli**
- ÇIĞ:
  - Dağ 20-30 boss'larında erime ölümü var.
  - Sonuç durumlarının adları tutarsız.
- Arena: ilk dakikadan sonra büyüme yavaşlıyor.
- Menü:
  - "+" ve "🎁!" ikonları ne işe yaradığı belli olmayan, açıklamasız ikonlar.
  - Kilitli özellikler hiç görünmüyor.
