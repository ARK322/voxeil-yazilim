# Voxeil Yazılım

Ankara merkezli yazılım şirketi kurumsal web sitesi. Next.js 16, standalone build.

## Geliştirme

```bash
npm install
npm run dev
```

http://localhost:3000

## Production (Docker)

```bash
docker compose up -d --build
```

Uygulama `127.0.0.1:3000` üzerinde çalışır. Reverse proxy bu porta yönlendirilmelidir.

## Deploy notları

1. Projeyi sunucuya yükle (git clone veya dosya transferi)
2. `docker compose up -d --build`
3. Domain → reverse proxy → `http://127.0.0.1:3000`
4. SSL sertifikası panel veya Let's Encrypt ile aktif edilsin
5. `www` → apex yönlendirmesi `src/proxy.ts` ile 301 olarak yapılır

## Scriptler

- `npm run build` — production build (prebuild otomatik tech icon sync)
- `npm run sync:icons` — tech ikonlarını `public/tech-icons/` altına senkronize eder
