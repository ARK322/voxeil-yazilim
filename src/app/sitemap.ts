import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { staticRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.href === "/" ? "/" : route.href}`,
    lastModified,
    changeFrequency: route.changefreq,
    priority: route.priority,
  }));
}
