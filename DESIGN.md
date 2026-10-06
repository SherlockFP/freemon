# PATPAT (eski adlar: FREEMON, ÇIĞ! — Kartopu)

Oyunun adı PATPAT. İki mod var: **YETİ KAÇIŞI** (sonsuz, RUNNER.md) ve **ÇIĞ** (bölümler, bu belge).

Dikey (portrait), tek parmak, Three.js ile 3D mobil oyun. Capacitor 8 ile Android/iOS.

## Tek cümle
Dağın tepesinden küçücük bir kartopu bırakırsın. Sağa sola sürükleyerek yolundaki her şeyi yutar, büyürsün. En sonda dağın dibindeki kasabaya çarpıp onu yerle bir edersin.

## Neden tutar (araştırma özeti)
- Hole.io 2025'te 121M indirme aldı. "Yut, büyü, daha büyüğünü yut" döngüsü kanıtlanmış.
- 6 saniyede okunur: küçük top, dev top, şehir yıkılıyor. Büyüyen sayı, tırmanan heyecan ve net bir final.
- Smash Fest (İstanbul) ücretli reklam olmadan US #1 oldu. Fizik ve yıkım, ASMR ses ve haptic klip malzemesi oluyor.
- Pixel Flow dersi: basit kanca + gerçek derinlik + baskı altında beceri.

## Bizi klonlardan ayıranlar (orijinal twistler)
1. **Katamari yapışması.** Yutulan her şey topun üstüne yapışır: arabalar, kayakçılar, ağaçlar, kardan adamlar. Top büyüdükçe eskileri karın içine gömülür.
2. **Kütle ataleti.** Top büyüdükçe hızlanır ama zor döner. Oyunun başı rahat, sonu baskı altında beceri ister.
3. **Toprak yamaları ve kırılma.** Çıplak toprakta erirsin. Senden büyük bir şeye çarparsan kopan parçalar küçük kartopları olarak yola saçılır ve geri toplanabilir.
4. **ÇIĞ eşikleri.** Belirli boylarda ekran sarsılır, "ÇIĞ!" yazısı çıkar, arkanda kar dalgası oluşur ve emme alanın büyür.
5. **Rampalar.** Havaya uçarsın. Yere indiğin yerde çevredeki her şeyi yutarsın.
6. **Kasaba finali.** Kasabanın yüzde kaçı yıkıldı? 3 yıldız. Son ekranda dev bir tonaj sayısı görünür.
7. **Günün Dağı.** Herkese aynı seed verilir. Wordle tarzı emoji paylaşımı: `🏔️ ÇIĞ #142 ⚪→⬜ 18.420 ton 🏘️ %94 ⭐⭐⭐`

## Sonraki adımlar (M1+)
- **Son 8 saniye klip.** Canvas `captureStream` ile 9:16 klip kaydı ve tek tuşla paylaşım. Viral döngünün kalbi bu.
- **Skinler.** Köfte, pamuk şeker, disko topu, lahmacun rulo.
- **Dağ temaları.** Uludağ, Palandöken, Erciyes, Alpler, Himalaya. Final kasabaları da temaya göre değişir.
- **Yeti kovalamaca bölümleri.** Kaçan kayakçıyı yakalama bonusu.
- **Arkadaşın hayaleti.** Seed'li deterministik koşu, paylaşılan linkten hayalet yarış.
- **Kalıcı yükseltmeler.** Başlangıç boyu, mıknatıs, erime direnci. Rewarded reklamla 2x tonaj.
- **Game Center / Play Games.** Liderlik tablosu ve arkadaş challenge'ları.

## Teknik kurallar
- Her prop tipi tek `InstancedMesh`. Vertex color + `MeshLambertMaterial` + `flatShading`. Hedef: 100'den az draw call.
- Gölge haritası yok, blob gölge var. DPR en fazla 2, dinamik çözünürlük.
- Modeller: prosedürel (src/props.js) + Kenney CC0 paketleri (public/models, vertex-color'a bake edilmiş, scripts/build-models.mjs). Sesler: prosedürel + Kenney/rubberduck CC0 örnekleri (public/sfx); örnek yüklenemezse prosedürel çalar. Kredi listeleri public/*/CREDITS.txt.
- Görünüm modları (src/shaders.js): NORMAL / ÇİZGİ FİLM / PİKSEL / KARTPOSTAL. Haritalar (src/scenery.js): Güneşli, Kristal Gün, Gün Batımı, Gece, Tipi, Pembe Şafak.
- Update döngüsünde allocation yok. Scratch vektörler ve pool kullanılır.
