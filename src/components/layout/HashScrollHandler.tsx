"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll-to-section";

export default function HashScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    requestAnimationFrame(() => scrollToSection(hash));
  }, []);

  return null;
}
