"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll-to-section";

export default function HashScrollHandler() {
  useEffect(() => {
    // Yenilemede tarayicinin eski scroll konumunu geri yuklemesini engelle
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const hash = window.location.hash.replace("#", "");

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    requestAnimationFrame(() => scrollToSection(hash));
  }, []);

  return null;
}
