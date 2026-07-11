# Voxeil.com — SEO Kod Düzeltme Raporu

**Tarih:** 11 Temmuz 2026  
**Kapsam:** Seobility denetim maddeleri, gereksiz kod temizliği, tek sayfa site optimizasyonu

---

## Yapılan Kod Düzeltmeleri

### 1. Görünür H1 (Seobility: "No H1 detected")

| Önce | Sonra |
|------|-------|
| `page.tsx` içinde clip/sr-only gizli `<h1>` | Navbar logosu `<h1>` içinde, `alt={siteConfig.title}` ile görünür başlık |

**Dosyalar:** `Navbar.tsx`, `page.tsx`, `globals.css` (`.site-primary-h1` kaldırıldı)

---

### 2. Yinelenen Başlıklar (Duplicate headings)

| Sorun | Çözüm |
|-------|-------|
| Hizmet sekmesi butonu + kart içi `<h3>` aynı metni tekrarlıyordu | Kart başlığı `<p>` yapıldı; `role="tabpanel"` + `aria-labelledby` eklendi |

**Dosya:** `Services.tsx`

---

### 3. Başlık Hiyerarşisi (Heading structure)

| Sorun | Çözüm |
|-------|-------|
| İletişim bölümünde `h2` → `p` → `h3` atlama | Sol sütun "İletişim Bilgileri" `<h3>` yapıldı (`h2` → `h3` → `h3`) |

**Dosya:** `Contact.tsx`

---

### 4. Apple Touch Icon

| Önce | Sonra |
|------|-------|
| Geçersiz/kopya `public/apple-touch-icon.png` | Dinamik `src/app/apple-icon.tsx` (180×180 PNG, Next.js otomatik servis eder) |

**Dosyalar:** `apple-icon.tsx` eklendi, `layout.tsx` icons sadeleştirildi, eski PNG silindi

---

### 5. 404 Sayfası

- `src/app/not-found.tsx` eklendi
- `robots: { index: false }` — rastgele URL'ler indekslenmez
- Türkçe kullanıcı arayüzü + ana sayfaya dönüş linki

---

### 6. Gereksiz Kod Temizliği

| Kaldırılan | Açıklama |
|------------|----------|
| `.site-primary-h1` CSS | Artık kullanılmıyor |
| `.hero-root--loading` CSS | Hiçbir bileşende referans yoktu |
| `public/apple-touch-icon.png` | Sahte PNG yerine dinamik ikon |
| `page.tsx` → `siteConfig` import | Kullanılmıyordu |
| Exo 2 font ağırlıkları 100–900 → 400–800 | 4 gereksiz font dosyası yüklemesi azaltıldı |

---

### 7. Sosyal Paylaşım Görseli (OG Image)

| Önce | Sonra |
|------|-------|
| `og:image` ve `twitter:image` olarak SVG logo (Facebook/X/LinkedIn SVG desteklemez) | `src/app/opengraph-image.tsx` — 1200×630 dinamik PNG, Next.js meta etiketlerini otomatik ekler |

---

### 8. Lint Temizliği

- `Contact.tsx` — kullanılmayan `catch (e)` parametresi kaldırıldı
- Kalan tek uyarı: `Team.tsx` içindeki `<img>` (bilinçli — harici avatar fallback'i için `onError` kullanılıyor)

---

### 9. Önceki Oturumlardan (zaten yapılmış)

- Sitemap yalnızca `https://voxeil.com/` (anchor URL'ler kaldırıldı)
- `poweredByHeader: false` (X-Powered-By kaldırıldı)
- Marka SEO: Voxeil + yazılım şirketi odaklı metadata
- Spline kaldırıldı, tech ikonları lokal
- Middleware: www → non-www + HTTP → HTTPS 301
- `middleware.ts` → `proxy.ts` (Next.js 16 uyumluluğu)
- FAQ soruları `<h4>` değil `<p>` (SeoContent)
- Hero CTA/Finale başlıkları `<p>` (gizli h2 yok)

---

## Kod Dışı / Manuel Yapılması Gerekenler

### Cloudflare Redirect Kuralları (www + HTTPS)

Middleware kodda mevcut ancak **Cloudflare edge** önce yanıt veriyorsa denetim araçları middleware'i görmeyebilir.

**Cloudflare Dashboard → Rules → Redirect Rules:**

```
www.voxeil.com/*  →  https://voxeil.com/${1}  (301)
http://voxeil.com/*  →  https://voxeil.com/${1}  (301)
```

**SSL/TLS:** Full (strict)  
**Always Use HTTPS:** Açık

---

### Yanıt Süresi (~0.43s)

Kod optimizasyonları yapıldı (font azaltma, dinamik import, lokal ikonlar). Ek kazanım için:

- Cloudflare cache (static assets)
- Standalone build + hızlı origin
- Görsel sıkıştırma (shape.webp vb.)

---

### Backlink Skoru (%27)

Bu tamamen **dış SEO** çalışmasıdır; kod değişikliğiyle çözülmez:

- LinkedIn, Google Business, sektör dizinleri
- Basın / blog içerikleri
- Sosyal profillerden site linki

---

## Başlık Yapısı (Güncel)

```
h1  Navbar logo alt: "Voxeil | Ankara Yazılım Şirketi"
h2  Hizmetlerimiz
h2  Süreç
h2  Endüstriyel Çözümler
  h3  Kart başlıkları (benzersiz)
h2  Neden Biz?
  h3  Özellik kartları
h2  Ekibimiz
  h3  Üye isimleri
h2  Teknolojiler
h2  Ankara Yazılım ve Dijital Dönüşüm Çözümleri
  h3  Alt bölümler + SSS
h2  İletişim
  h3  İletişim Bilgileri
  h3  Hızlı İletişim Formu
```

---

## Deploy Sonrası Kontrol Listesi

- [ ] `https://voxeil.com` — sayfa kaynağında `<h1>` görünür mü?
- [ ] `<link rel="apple-touch-icon"` 180×180 PNG dönüyor mu?
- [ ] `www.voxeil.com` → `voxeil.com` 301
- [ ] `http://` → `https://` 301
- [ ] `/rastgele-url` → 404 + noindex
- [ ] Seobility yeniden taraması (deploy sonrası 24–48 saat)

---

## Özet

| Kategori | Durum |
|----------|-------|
| H1 | ✅ Düzeltildi (navbar) |
| Yinelenen başlıklar | ✅ Düzeltildi (Services) |
| Başlık hiyerarşisi | ✅ Düzeltildi (Contact) |
| Apple touch icon | ✅ Düzeltildi |
| 404 / noindex | ✅ Eklendi |
| X-Powered-By | ✅ Kodda kapalı (deploy gerekli) |
| Sitemap | ✅ Sadece ana URL |
| www/HTTPS redirect | ⚠️ Cloudflare + middleware |
| Yanıt süresi | ⚠️ Kısmen (infra/cache) |
| Backlink | ❌ Kod dışı |
