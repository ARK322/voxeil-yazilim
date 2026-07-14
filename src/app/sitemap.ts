import type { MetadataRoute } from "next";
import { serviceSlugs } from "@/components/services/content";
import { sectorSlugs } from "@/components/solutions/content";
import { projectSlugs } from "@/components/projects/content";
import { siteConfig } from "@/lib/site";

const staticPaths = [
  "/",
  "/hizmetler/",
  "/cozumler/",
  "/hakkimizda/",
  "/neden-biz/",
  "/surec/",
  "/ekibimiz/",
  "/teknolojiler/",
  "/sss/",
  "/iletisim/",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const dynamicPaths = [
    ...serviceSlugs.map((slug) => `/hizmetler/${slug}/`),
    ...sectorSlugs.map((slug) => `/cozumler/sektorel/${slug}/`),
    ...projectSlugs.map((slug) => `/projeler/${slug}/`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
