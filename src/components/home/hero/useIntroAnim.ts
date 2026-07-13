"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";

function revealIntroFallback() {
  gsap.set(".intro-word", { autoAlpha: 1, y: 0, rotateX: 0 });
  gsap.set(".intro-sub, .intro-tagline, .scroll-hint", { autoAlpha: 1, y: 0 });
}

export function useIntroAnim(
  containerRef: RefObject<HTMLDivElement | null>,
  onComplete: () => void
) {
  useGSAP(
    () => {
      gsap.set(".intro-word", { autoAlpha: 0, y: 60, rotateX: -20 });
      gsap.set(".intro-sub, .intro-tagline, .scroll-hint", { autoAlpha: 0, y: 10 });

      const words = gsap.utils.toArray<HTMLElement>(".intro-word");
      const sub = gsap.utils.toArray<HTMLElement>(".intro-sub")[0];
      const tagline = gsap.utils.toArray<HTMLElement>(".intro-tagline")[0];
      const scrollHint = gsap.utils.toArray<HTMLElement>(".scroll-hint")[0];
      const hintDot = gsap.utils.toArray<HTMLElement>(".scroll-hint__dot")[0];

      if (!words.length || !sub || !tagline || !scrollHint || !hintDot) {
        revealIntroFallback();
        onComplete();
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(hintDot, {
            y: 10,
            duration: 0.9,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
          });
          onComplete();
        },
      });

      tl.to(
        words.slice(0, 2),
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.14,
        },
        0.15
      )
        .to(
          words.slice(2),
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.14,
          },
          0.58
        )
        .to(
          sub,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          1.1
        )
        .to(
          tagline,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          1.25
        )
        .to(
          scrollHint,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          1.45
        );
    },
    { scope: containerRef }
  );
}
