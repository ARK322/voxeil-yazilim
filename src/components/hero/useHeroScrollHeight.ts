"use client";

import { useEffect, type RefObject } from "react";

const MOBILE_QUERY = "(max-width: 767px)";
const DESKTOP_SCROLL_VH = 8.6;
const MOBILE_SCROLL_VH = 9.2;

function getLockedViewportHeight() {
  return Math.round(window.visualViewport?.height ?? window.innerHeight);
}

function applyHeroScrollHeight(root: HTMLElement) {
  const mobile = window.matchMedia(MOBILE_QUERY).matches;
  const multiplier = mobile ? MOBILE_SCROLL_VH : DESKTOP_SCROLL_VH;
  const vhPx = getLockedViewportHeight();

  root.style.setProperty("--hero-vh-px", `${vhPx}px`);
  root.style.setProperty("--hero-scroll-height", `${Math.round(vhPx * multiplier)}px`);
}

export function useHeroScrollHeight(containerRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    applyHeroScrollHeight(root);

    let lastWidth = window.innerWidth;

    const safeUpdate = () => {
      applyHeroScrollHeight(root);
      window.dispatchEvent(new Event("hero:height-updated"));
    };

    const onResize = () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      safeUpdate();
    };

    const onOrientationChange = () => {
      window.setTimeout(() => {
        lastWidth = window.innerWidth;
        safeUpdate();
      }, 300);
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onOrientationChange);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onOrientationChange);
    };
  }, [containerRef]);
}
