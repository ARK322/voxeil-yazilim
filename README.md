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

Uygulama `127.0.0.1:3000` üzerinde çalışır. Hestia/Nginx reverse proxy bu porta yönlendirilmelidir.

## Hestia Panel

1. Projeyi sunucuya yükle (git clone veya dosya transferi)
2. `docker compose up -d --build`
3. Web domain → Nginx proxy → `http://127.0.0.1:3000`
4. SSL sertifikasını Hestia üzerinden al (Let's Encrypt)

## Scriptler

- `npm run build` — production build (prebuild otomatik tech icon sync)
- `npm run sync:icons` — tech ikonlarını `public/tech-icons/` altına senkronize eder
