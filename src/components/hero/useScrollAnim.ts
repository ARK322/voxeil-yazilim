"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimOptions {
  heroFinaleRef: RefObject<HTMLDivElement | null>;
  bridgeRef: RefObject<HTMLDivElement | null>;
  ctaRef: RefObject<HTMLDivElement | null>;
  debug?: boolean;
}

/**
 * Scroll timeline (0 → 1) — fazlar çakışmaz, her biri giriş → bekle → çıkış:
 *
 * 0.00–0.07  intro çıkış
 * 0.08–0.25  faz 2 giriş (3 kelime)
 * 0.25–0.36  faz 2 bekleme
 * 0.36–0.45  faz 2 çıkış
 * 0.47–0.62  faz 3 kart + metin girişi
 * 0.62–0.65  faz 3 bekleme
 * 0.65–0.74  faz 3 çıkış
 * 0.72–1.00  faz 4 finale (giriş ~0.72–0.86, bekleme ~0.86–1.00)
 */
export function useScrollAnim(
  containerRef: RefObject<HTMLDivElement | null>,
  isIntroDone: boolean,
  options: UseScrollAnimOptions
) {
  const { heroFinaleRef, bridgeRef, ctaRef, debug = false } = options;

  useGSAP(
    () => {
      // Teknik doğrulama: intro tamamlanmadan ScrollTrigger kurulmaz; isIntroDone değişince yeniden tetiklenir
      if (!isIntroDone) return;

      const root = containerRef.current;
      const heroFinale = heroFinaleRef.current;
      const bridgeLayer = bridgeRef.current;
      const ctaLayer = ctaRef.current;

      if (!root || !heroFinale || !bridgeLayer || !ctaLayer) return;

      const isMobile = window.innerWidth < 768;

      const introWords = gsap.utils.toArray<HTMLElement>(".intro-word");
      const introSub = gsap.utils.toArray<HTMLElement>(".intro-sub")[0];
      const introTagline = gsap.utils.toArray<HTMLElement>(".intro-tagline")[0];
      const scrollHint = gsap.utils.toArray<HTMLElement>(".scroll-hint")[0];
      const bridgeSteps = gsap.utils.toArray<HTMLElement>(".hero-bridge__step");
      const trustCards = gsap.utils.toArray<HTMLElement>(".trust-card");
      const ctaCopy = ctaLayer.querySelector<HTMLElement>(".hero-cta__copy");

      const finaleContent = heroFinale.querySelector<HTMLElement>(".hero-finale__content");
      const finaleEditor = heroFinale.querySelector<HTMLElement>(".hero-finale__editor");

      if (
        !introWords.length ||
        !introSub ||
        !introTagline ||
        !scrollHint ||
        !bridgeSteps.length ||
        !trustCards.length ||
        !ctaCopy ||
        !finaleContent ||
        !finaleEditor
      ) {
        return;
      }

      gsap.set(heroFinale, { autoAlpha: 0, visibility: "hidden", pointerEvents: "none" });
      gsap.set(finaleEditor, { x: isMobile ? 0 : 40, y: 32, scale: 0.96 });

      gsap.set(bridgeLayer, { visibility: "hidden", autoAlpha: 0 });
      gsap.set(bridgeSteps, { autoAlpha: 0, y: 40 });

      gsap.set(ctaLayer, { visibility: "hidden", autoAlpha: 0 });

      /* 2×2 grid: her kart kendi köşesinden girer (↖ ↗ ↙ ↘) */
      const cardOffset = isMobile ? 18 : 26;
      const cardCorners = [
        { x: -cardOffset, y: -cardOffset },
        { x: cardOffset, y: -cardOffset },
        { x: -cardOffset, y: cardOffset },
        { x: cardOffset, y: cardOffset },
      ];
      trustCards.forEach((card, i) => {
        const corner = cardCorners[i] ?? cardCorners[0];
        gsap.set(card, { autoAlpha: 0, x: corner.x, y: corner.y });
      });

      gsap.set(ctaCopy, { autoAlpha: 0, x: isMobile ? 0 : 28, y: isMobile ? 16 : 0 });

      const ctaHoldAt = isMobile ? 0.52 : 0.54;
      const finaleInAt = isMobile ? 0.7 : 0.72;

      const tl = gsap.timeline({ defaults: { ease: "none" }, paused: true });

      /* ── Faz 1: intro çıkış ── */
      tl.to(
        [...introWords].reverse(),
        { autoAlpha: 0, y: -40, stagger: 0.012, ease: "power2.in", duration: 0.035 },
        0
      ).to([introSub, introTagline, scrollHint], { autoAlpha: 0, duration: 0.025, ease: "power1.in" }, 0.01);

      /* ── Faz 2: köprü ── */
      tl.addLabel("bridgeIn", 0.08)
        .set(bridgeLayer, { visibility: "visible" }, "bridgeIn")
        .to(bridgeLayer, { autoAlpha: 1, ease: "power2.out", duration: 0.04 }, "bridgeIn+=0.01")
        .to(
          bridgeSteps,
          { autoAlpha: 1, y: 0, stagger: 0.045, ease: "power3.out", duration: 0.055 },
          "bridgeIn+=0.02"
        )
        .addLabel("bridgeHold", 0.3)
        .to(
          bridgeSteps,
          { autoAlpha: 0, y: -20, stagger: 0.025, ease: "power2.in", duration: 0.04 },
          "bridgeHold+=0.08"
        )
        .to(bridgeLayer, { autoAlpha: 0, ease: "power1.in", duration: 0.035 }, "bridgeHold+=0.14")
        .set(bridgeLayer, { visibility: "hidden" }, "bridgeHold+=0.18");

      /* ── Faz 3: split güven ── */
      tl.addLabel("ctaIn", 0.47)
        .set(ctaLayer, { visibility: "visible", pointerEvents: "auto" }, "ctaIn")
        .to(ctaLayer, { autoAlpha: 1, ease: "power2.out", duration: 0.035 }, "ctaIn+=0.01")
        .to(
          trustCards,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            stagger: 0.035,
            ease: "power3.out",
            duration: 0.05,
          },
          "ctaIn+=0.02"
        )
        .to(
          ctaCopy,
          { autoAlpha: 1, x: 0, y: 0, ease: "power2.out", duration: 0.055 },
          "ctaIn+=0.09"
        )
        .addLabel("ctaHold", ctaHoldAt);

      trustCards.forEach((card, i) => {
        const corner = cardCorners[i] ?? cardCorners[0];
        tl.to(
          card,
          {
            autoAlpha: 0,
            x: corner.x,
            y: corner.y,
            ease: "power2.in",
            duration: 0.038,
          },
          `ctaHold+=${0.08 + i * 0.022}`
        );
      });

      tl.to(ctaCopy, { autoAlpha: 0, x: isMobile ? 0 : 16, y: -8, ease: "power2.in", duration: 0.035 }, "ctaHold+=0.12")
        .to(ctaLayer, { autoAlpha: 0, ease: "power1.in", duration: 0.03 }, "ctaHold+=0.16")
        .set(ctaLayer, { visibility: "hidden", pointerEvents: "none" }, "ctaHold+=0.2");

      /* ── Faz 4: finale ── */
      tl.addLabel("finaleIn", finaleInAt)
        .set(heroFinale, { visibility: "visible", pointerEvents: "auto" }, "finaleIn")
        .to(heroFinale, { autoAlpha: 1, ease: "power2.out", duration: 0.07 }, "finaleIn+=0.01")
        .to(
          finaleEditor,
          { x: 0, y: 0, scale: 1, ease: "power3.out", duration: 0.12 },
          "finaleIn+=0.1"
        );

      const st = ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        scrub: isMobile ? 1.6 : 1.5,
        animation: tl,
        invalidateOnRefresh: true,
        markers: debug,
      });

      // Performans iyileştirmesi: intro bittikten sonra timeline senkronu + ScrollTrigger ölçümü
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        tl.progress(st.progress);
      });

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);

      return () => {
        st.kill();
        tl.kill();
        window.removeEventListener("resize", onResize);
      };
    },
    {
      scope: containerRef,
      dependencies: [isIntroDone, debug],
      revertOnUpdate: true,
    }
  );
}
