"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useCallback, useEffect, useRef, useState } from "react";
import HeroBridge from "./HeroBridge";
import HeroCTA from "./HeroCTA";
import HeroFinale from "./HeroFinale";
import { useIntroAnim } from "./useIntroAnim";
import { useHeroScrollHeight } from "./useHeroScrollHeight";
import { useScrollAnim } from "./useScrollAnim";
import "./hero.css";

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_SCROLL_QUERY = "(min-width: 768px)";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null!);
  const bridgeRef = useRef<HTMLDivElement>(null!);
  const ctaRef = useRef<HTMLDivElement>(null!);
  const heroFinaleRef = useRef<HTMLDivElement>(null!);

  const [isIntroDone, setIsIntroDone] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIsIntroDone(true);
  }, []);

  useGSAP(
    () => {
      gsap.set(".intro-word", { autoAlpha: 0, y: 60, rotateX: -20 });
      gsap.set(".intro-sub, .intro-tagline, .scroll-hint", { autoAlpha: 0, y: 10 });
      gsap.set(".hero-finale", { autoAlpha: 0, visibility: "hidden" });
      gsap.set(".hero-bridge", { visibility: "hidden", autoAlpha: 0 });
      gsap.set(".hero-bridge__step", { autoAlpha: 0, y: 48 });
      gsap.set(".hero-cta", { visibility: "hidden", autoAlpha: 0 });
      gsap.set(".trust-card", { autoAlpha: 0, x: -56, y: 0 });
      gsap.set(".hero-cta__copy", { autoAlpha: 0, y: 12 });
    },
    { scope: containerRef }
  );

  useHeroScrollHeight(containerRef);
  useIntroAnim(containerRef, handleIntroComplete);

  useScrollAnim(containerRef, isIntroDone, {
    bridgeRef,
    ctaRef,
    heroFinaleRef,
    debug: process.env.NODE_ENV === "development" && false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia(DESKTOP_SCROLL_QUERY);
    let lenis: Lenis | null = null;

    const syncScrollTrigger = () => {
      ScrollTrigger.update();
    };

    const onTicker = (time: number) => {
      lenis?.raf(time * 1000);
    };

    const onScrollTriggerRefresh = () => {
      lenis?.resize();
    };

    const initLenis = () => {
      if (!desktopQuery.matches || lenis) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis.on("scroll", syncScrollTrigger);
      ScrollTrigger.addEventListener("refresh", onScrollTriggerRefresh);
      gsap.ticker.add(onTicker);
      gsap.ticker.lagSmoothing(0);

      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    const destroyLenis = () => {
      if (!lenis) return;

      lenis.off("scroll", syncScrollTrigger);
      ScrollTrigger.removeEventListener("refresh", onScrollTriggerRefresh);
      gsap.ticker.remove(onTicker);
      lenis.destroy();
      lenis = null;

      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    const onBreakpointChange = () => {
      if (desktopQuery.matches) {
        initLenis();
      } else {
        destroyLenis();
      }
    };

    if (desktopQuery.matches) {
      initLenis();
    }

    desktopQuery.addEventListener("change", onBreakpointChange);

    return () => {
      desktopQuery.removeEventListener("change", onBreakpointChange);
      destroyLenis();
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-root" aria-label="Hero bölümü">
      <div className="hero-sticky">
        <div className="hero-intro" aria-hidden={isIntroDone}>
          <div className="intro-line">
            <span className="intro-word intro-word--white">SİZ</span>
            <span className="intro-word intro-word--white">DÜŞÜNÜN</span>
          </div>
          <div className="intro-line">
            <span className="intro-word intro-word--orange">BİZ</span>
            <span className="intro-word intro-word--orange">KODLAYALIM</span>
          </div>
          <p className="intro-sub">
            Ürününüzü hayal edin. Biz mimariyi tasarlayalım, kodu yazar ve sahaya alırız.
          </p>
          <p className="intro-tagline">
            Voxeil — Ankara Yazılım Şirketi | Dijital Dönüşüm
          </p>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <div className="scroll-hint__mouse">
            <div className="scroll-hint__dot" />
          </div>
          <span className="scroll-hint__label">scroll</span>
        </div>

        <HeroBridge ref={bridgeRef} />
        <HeroCTA ref={ctaRef} />
        <HeroFinale ref={heroFinaleRef} />
      </div>
    </div>
  );
}
