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
