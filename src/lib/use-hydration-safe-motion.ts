"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Framer Motion + SSR: useReducedMotion() sunucuda null, istemcide media query
 * okuyabildiği için initial stilleri hydration'da uyuşmaz.
 *
 * `canAnimate` mount sonrası açılır; `initial` asla "hidden"a dönmez — böylece
 * mount sonrası içerik görünmez kalmaz.
 */
export function useHydrationSafeMotion() {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldReduceMotion = mounted && Boolean(reducedMotion);
  const canAnimate = mounted && !shouldReduceMotion;

  return {
    mounted,
    shouldReduceMotion,
    canAnimate,
    /** @deprecated use canAnimate — kept for gradual migration */
    skipInitialMotion: !canAnimate,
  };
}
