"use client";

import { useEffect } from "react";
import { parseNavHash, scrollToNavTarget } from "@/lib/scroll-to-section";

export default function HashScrollHandler() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const hash = window.location.hash.replace("#", "");

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const target = parseNavHash(hash);
    if (!target) {
      window.scrollTo(0, 0);
      return;
    }

    const cancelRetry = scrollToNavTarget(target.sectionId, target.serviceTab);
    return cancelRetry;
  }, []);

  return null;
}
