import { sectionRoutes } from "@/lib/section-pages";

export const serviceRoutes = [
  {
    href: "/hizmetler/web-gelistirme/",
    label: "Web Geliştirme",
  },
  {
    href: "/hizmetler/mobil-uygulama/",
    label: "Mobil Uygulama",
  },
  {
    href: "/hizmetler/e-ticaret/",
    label: "E-Ticaret",
  },
  {
    href: "/hizmetler/dijital-donusum/",
    label: "Dijital Dönüşüm",
  },
] as const;

export { sectionRoutes };

export const staticRoutes = [
  { href: "/", label: "Ana Sayfa", priority: 1.0, changefreq: "monthly" as const },
  { href: "/hakkimizda/", label: "Hakkımızda", priority: 0.8, changefreq: "monthly" as const },
  ...sectionRoutes.map((route) => ({
    href: route.href,
    label: route.label,
    priority: route.priority,
    changefreq: "monthly" as const,
  })),
  ...serviceRoutes.map((route) => ({
    href: route.href,
    label: route.label,
    priority: 0.9,
    changefreq: "monthly" as const,
  })),
];
