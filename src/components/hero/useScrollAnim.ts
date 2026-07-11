"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== "undefined") {
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });
}

interface UseScrollAnimOptions {
  heroFinaleRef: RefObject<HTMLDivElement | null>;
  bridgeRef: RefObject<HTMLDivElement | null>;
  ctaRef: RefObject<HTMLDivElement | null>;
  debug?: boolean;
}

function safeRefresh() {
  if (window.scrollY > 20) return;
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

/**
 * Scroll timeline (0 → 1) — fazlar çakışmaz, her biri giriş → bekle → çıkış:
 *
 * 0.00–0.07  intro çıkış
 * 0.08–0.25  faz 2 giriş (3 kelime)
 * 0.25–0.36  faz 2 bekleme
 * 0.36–0.45  faz 2 çıkış
 * 0.47–0.58  faz 3 kart + metin girişi
 * 0.58–0.74  faz 3 bekleme (ortada dur)
 * 0.74–0.86  faz 3 çıkış
 * 0.87–0.95  faz 4 finale giriş
 * 0.95–1.00  faz 4 bekleme (ortada dur)
 */
export function useScrollAnim(
  containerRef: RefObject<HTMLDivElement | null>,
  isIntroDone: boolean,
  options: UseScrollAnimOptions
) {
  const { heroFinaleRef, bridgeRef, ctaRef, debug = false } = options;

  useGSAP(
    () => {
      if (!isIntroDone) return;

      const root = containerRef.current;
      const heroFinale = heroFinaleRef.current;
      const bridgeLayer = bridgeRef.current;
      const ctaLayer = ctaRef.current;
      const stickyEl = root?.querySelector<HTMLElement>(".hero-sticky");

      if (!root || !heroFinale || !bridgeLayer || !ctaLayer || !stickyEl) return;

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

      // Faz 3 tam ortada beklesin, çıkış bitsin, sonra finale gelsin — çakışma yok
      const ctaHoldAt = isMobile ? 0.6 : 0.58;
      const ctaExitAt = isMobile ? 0.76 : 0.74;
      const finaleInAt = isMobile ? 0.89 : 0.87;

      const tl = gsap.timeline({ defaults: { ease: "none" }, paused: true });

      tl.to(
        [...introWords].reverse(),
        { autoAlpha: 0, y: -40, stagger: 0.012, ease: "power2.in", duration: 0.035 },
        0
      ).to([introSub, introTagline, scrollHint], { autoAlpha: 0, duration: 0.025, ease: "power1.in" }, 0.01);

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
        .addLabel("ctaHold", ctaHoldAt)
        .addLabel("ctaExit", ctaExitAt);

      trustCards.forEach((card, i) => {
        const corner = cardCorners[i] ?? cardCorners[0];
        tl.to(
          card,
          {
            autoAlpha: 0,
            x: corner.x,
            y: corner.y,
            ease: "power2.in",
            duration: 0.04,
          },
          `ctaExit+=${i * 0.02}`
        );
      });

      tl.to(ctaCopy, { autoAlpha: 0, x: isMobile ? 0 : 16, y: -8, ease: "power2.in", duration: 0.04 }, "ctaExit+=0.04")
        .to(ctaLayer, { autoAlpha: 0, ease: "power1.in", duration: 0.035 }, "ctaExit+=0.08")
        .set(ctaLayer, { visibility: "hidden", pointerEvents: "none" }, "ctaExit+=0.12");

      tl.addLabel("finaleIn", finaleInAt)
        .set(heroFinale, { visibility: "visible", pointerEvents: "auto" }, "finaleIn")
        .to(heroFinale, { autoAlpha: 1, ease: "power2.out", duration: 0.07 }, "finaleIn+=0.01")
        .to(
          finaleEditor,
          { x: 0, y: 0, scale: 1, ease: "power3.out", duration: 0.12 },
          "finaleIn+=0.1"
        )
        .addLabel("finaleHold", ">")
        .to({}, { duration: isMobile ? 0.14 : 0.12 }, "finaleHold");

      const st = ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        pin: stickyEl,
        pinSpacing: false,
        pinReparent: isMobile,
        anticipatePin: 1,
        scrub: isMobile ? 1 : 1.2,
        animation: tl,
        invalidateOnRefresh: false,
        markers: debug,
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        window.scrollTo(0, 0);
        tl.progress(window.scrollY <= 5 ? 0 : st.progress);
      });

      const onHeightUpdated = () => safeRefresh();

      window.addEventListener("hero:height-updated", onHeightUpdated);

      return () => {
        st.kill();
        tl.kill();
        window.removeEventListener("hero:height-updated", onHeightUpdated);
      };
    },
    {
      scope: containerRef,
      dependencies: [isIntroDone, debug],
      revertOnUpdate: true,
    }
  );
}
