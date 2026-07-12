import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  trailingSlash: true,
  // Self-hosted (Docker/Hestia): image optimizer 400 veriyor; public assets doğrudan servis edilsin
  images: {
    unoptimized: true,
  },
  async redirects() {
    const sectionRedirects = [
      ["hizmetler", "hizmetlerimiz"],
      ["hakkimizda", "hakkimizda"],
      ["surec", "surec"],
      ["endustriyel-cozumler", "endustriyel-cozumler"],
      ["neden-biz", "neden-biz"],
      ["ekibimiz", "ekibimiz"],
      ["teknolojiler", "teknolojiler"],
      ["sss", "sss"],
      ["iletisim", "iletisim"],
    ] as const;

    const serviceSlugs = [
      "web-gelistirme",
      "mobil-uygulama",
      "e-ticaret",
      "dijital-donusum",
    ] as const;

    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.voxeil.com" }],
        destination: "https://voxeil.com/:path*",
        permanent: true,
      },
      ...sectionRedirects.flatMap(([path, hash]) => [
        {
          source: `/${path}`,
          destination: `/#${hash}`,
          permanent: true,
        },
        {
          source: `/${path}/`,
          destination: `/#${hash}`,
          permanent: true,
        },
      ]),
      ...serviceSlugs.flatMap((slug) => [
        {
          source: `/hizmetler/${slug}`,
          destination: "/#hizmetlerimiz",
          permanent: true,
        },
        {
          source: `/hizmetler/${slug}/`,
          destination: "/#hizmetlerimiz",
          permanent: true,
        },
      ]),
    ];
  },
};

export default nextConfig;
