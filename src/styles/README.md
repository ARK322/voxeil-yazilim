# CSS Mimarisi

## Klasör yapısı

```
app/globals.css              ← token + reset + utility

components/shared/
├── shared.css               ← primitive CSS barrel
├── buttons/buttons.css
├── cards/cards.css
├── sections/sections.css
├── forms/forms.css
└── templates/               ← sayfa şablonları (CSS yok)
    ├── SitePageLayout.tsx
    ├── ContentPage.tsx
    ├── HubPage.tsx
    └── …

components/layout/           ← layout bileşenleri + kendi CSS
components/home/             ← ana sayfa bölümleri + kendi CSS
```

## Nereye ne yazılır?

| Ne | Nerede |
|---|---|
| Renk değeri (token) | `globals.css` |
| Renk kullanımı (hangi component hangi rengi alır) | `components/shared/<name>/*.css` |
| Shared component boyutu (padding, font-size, varyant) | `components/shared/<name>/*.css` |
| Component'e özel konum (margin, flex pozisyonu, z-index) | component'in kendi CSS'i |

**Kural:** Hiçbir CSS dosyasında hardcoded renk (`#hex`, `rgb()`, `rgba()`, `hsl()`, `hsla()`) olmamalı — hepsi `globals.css` içindeki token'a `var(--x)` ile referans vermeli. İstisna: yalnızca `globals.css` `:root` token tanımları.

| Soru | Cevap |
|------|-------|
| CSS değişkeni (`--orange`)? | `globals.css` |
| Paylaşımlı UI primitive? | `components/shared/<component-adı>/` |
| Sayfa şablonu (React)? | `components/shared/templates/` |
| Tek component'e özel stil? | Component klasöründeki `.css` |

Import: `@/components/shared/templates/ContentPage`  
Global primitive CSS: `@/components/shared/shared.css` ( `app/layout.tsx` )

## Shared class nereye gider?

- `.site-btn-*` → `src/components/shared/buttons/buttons.css`
- `.site-card*` → `src/components/shared/cards/cards.css`
- `.site-section*` → `src/components/shared/sections/sections.css`
- `.site-input` → `src/components/shared/forms/forms.css`

Varyant örneği: `.site-btn-primary--md` (hero butonları için orta font boyutu)
