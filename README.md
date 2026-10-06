# ❄️ FREEMON

**Kartopu ol, büyü, Yeti'den kaç!** Three.js ile yapılmış, telefonda oynanan dikey bir mobil oyun.

## ▶ Hemen oyna
- **GitHub Pages:** https://sherlockfp.github.io/freemon/
- **Render:** https://freemon.onrender.com/

Telefonda linki açman yeterli. Tam ekran için tarayıcı menüsünden "Ana ekrana ekle" seçebilirsin.

## Modlar
| Mod | Ne? |
|---|---|
| 🗺️ **MACERA** | 10 act ve 100 bölüm. Her act ayrı bir dünyada geçer: Karlı Zirve, Çam Ormanı, Yeşil Tepe, Kapadokya, Kasaba, Çöl, Buz Mağarası, Şeker Diyarı, Neon Gece, Volkan. Her act'in sonunda Yeti boss'u var. Her bölümde 3 yıldızlık hedef bulunur. |
| ∞ **YETİ KAÇIŞI** | Sonsuz iniş, Subway Surfers tarzında 3 şeritli. Topun boyutu canın: kar topladıkça büyürsün, çarptıkça küçülürsün, en küçükken çarparsan patlarsın. Kovalayan bir Yeti var, her 600 metrede yeni bir zorluk katmanı açılır. Akış kombosu, kıl payı bonusu ve rekor bayrağı da var. |
| ⛰️ **ÇIĞ** | Katamari tarzı: dağdan yuvarlanıp her şeyi yutarsın, en sonda kasabayı yerle bir edersin. |
| 🏔️ **GÜNÜN DAĞI** | Herkese aynı dağ çıkar, sonucu emoji ile paylaşabilirsin. |

## Kontroller
- **Sağa / sola kaydır:** şerit değiştir.
- **Yukarı kaydır:** zıpla.
- **Aşağı kaydır:** eğil, havadayken yere çakıl.
- **Çift dokun:** kızak kalkanı.
- **ÇIĞ modu:** parmağını sürükleyerek yönlendir.

## Özellikler
- **Parkur:** spiral inişler, loop'lar, tirbuşonlar, kayak atlayışı (slow-mo), half-pipe, buz tüneli, raylar, halatlar ve çöken buz köprüleri.
- **Engeller:** üstüne doğru gelen kar ezicileri, Yeti'nin attığı kayalar, ritme göre kayan duvarlar, rüzgar ve sis.
- **Dünyalar:** 14 dünya. Aralarında Kapadokya, İstanbul Boğazı, Ay (düşük yerçekimi) ve Korsan Koyu var.
- **Kostümler:** 35 top ve 12 iz, 4 nadirlik seviyesinde. Köfte, Simit, İznik Çinisi, Nazar Boncuğu, Kara Sıvı, Kızıl Kaos ve daha fazlası.
- **İlerleme:** günlük ödüller, 59 başarım, görev setleri ve ×30'a kadar çıkan çarpan, sürpriz kutular, FREEMON harf avı, gizli sürprizler.
- **Görünüm:** Normal, Çizgi Film, Piksel ve Kartpostal modları.

## Geliştirme
```bash
npm install
npm run dev          # yerel sunucu (telefondan aynı Wi-Fi ile açılabilir)
npm run build:pages  # docs/ klasörüne derler (GitHub Pages)
```
Mobil (Capacitor 8, Android/iOS) kurulumu için [MOBILE.md](MOBILE.md) dosyasına bak. Tasarım belgeleri: [DESIGN.md](DESIGN.md), [RUNNER.md](RUNNER.md), [TRACK_FEATURES.md](TRACK_FEATURES.md).

## Krediler
- 3D modeller: [Kenney](https://kenney.nl) (CC0).
- Ses efektleri: Kenney ve rubberduck (OpenGameArt) (CC0).
- Müzik, kod ve prosedürel içerik: FREEMON.
