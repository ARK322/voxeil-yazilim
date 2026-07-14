"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { parseNavHash } from "@/lib/scroll-to-section";
import { pagePaths, sectionAnchors } from "@/lib/sections";

const hashRedirects: Record<string, string> = {
  [sectionAnchors.hizmetlerimiz]: pagePaths.hizmetler,
  [sectionAnchors.endustriyelCozumler]: pagePaths.cozumler,
  [sectionAnchors.teknolojiler]: pagePaths.teknolojiler,
  [sectionAnchors.sss]: pagePaths.sss,
  [sectionAnchors.iletisim]: pagePaths.iletisim,
  [sectionAnchors.hakkimizda]: pagePaths.hakkimizda,
  [sectionAnchors.nedenBiz]: pagePaths.nedenBiz,
  [sectionAnchors.surec]: pagePaths.surec,
  [sectionAnchors.ekibimiz]: pagePaths.ekibimiz,
};

export default function HashScrollHandler() {
  const router = useRouter();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const hash = window.location.hash.replace("#", "");

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const redirect = hashRedirects[hash];
    if (redirect) {
      router.replace(redirect);
      return;
    }

    const target = parseNavHash(hash);
    if (target?.sectionId === sectionAnchors.hizmetlerimiz) {
      router.replace(pagePaths.hizmetler);
      return;
    }

    window.scrollTo(0, 0);
  }, [router]);

  return null;
}
