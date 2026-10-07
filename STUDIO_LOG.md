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
