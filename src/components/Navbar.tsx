"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

const menuItems = [
  "Hizmetlerimiz",
  "Süreç",
  "Neden Biz?",
  "Ekibimiz",
] as const;

const idMap: Record<(typeof menuItems)[number], string> = {
  Hizmetlerimiz: "hizmetlerimiz",
  Süreç: "surec",
  "Neden Biz?": "neden-biz",
  Ekibimiz: "ekibimiz",
};

const FALLBACK_NAV_OFFSET = 92;

function getHref(item: string) {
  const targetId =
    idMap[item as (typeof menuItems)[number]] ??
    item.toLowerCase().replace(/\s+/g, "-");
  return `#${targetId}`;
}

function getNavOffset() {
  const nav = document.querySelector("nav");
  return nav?.offsetHeight ?? FALLBACK_NAV_OFFSET;
}

function getScrollBehavior(): ScrollBehavior {
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return coarsePointer || reducedMotion ? "auto" : "smooth";
}

const linkClassName =
  "text-muted-secondary hover:text-orange transition-colors duration-200 text-[1.0625rem] font-medium relative group py-2 inline-block cursor-pointer whitespace-nowrap";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    document.body.style.overflow = "hidden";

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };

    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  const scrollToElement = (element: HTMLElement) => {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - getNavOffset();

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: getScrollBehavior(),
    });
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    closeMobileMenu();

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      scrollToElement(element);
    } else {
      setTimeout(() => {
        const retryElement = document.getElementById(targetId);
        if (retryElement) scrollToElement(retryElement);
      }, 300);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMobileMenu();

    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: getScrollBehavior() });
    }
  };

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 pt-[var(--safe-top)]"
      aria-label="Ana navigasyon"
    >
      <div className="bg-black backdrop-blur-md border-b border-white/5">
        <div className="nav-container flex w-full items-center py-4 sm:py-5 xl:py-6">
          <h1 className="m-0 shrink-0 leading-none">
            <Link
              href="/"
              className="block transition-opacity hover:opacity-80"
              onClick={handleLogoClick}
            >
              <Image
                src="/logo.svg"
                alt={siteConfig.title}
                width={150}
                height={50}
                className="h-11 w-auto"
                priority
              />
            </Link>
          </h1>

          <div className="hidden xl:flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-12">
              {menuItems.map((item) => {
                const href = getHref(item);

                return (
                  <li key={item}>
                    <a
                      href={href}
                      onClick={(e) => handleSmoothScroll(e, href)}
                      className={linkClassName}
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hidden xl:flex shrink-0">
            <a
              href="#iletisim"
              onClick={(e) => handleSmoothScroll(e, "#iletisim")}
              className="site-btn-ghost whitespace-nowrap"
            >
              Bize Ulaşın
            </a>
          </div>

          <button
            type="button"
            className="xl:hidden shrink-0 flex items-center justify-center min-w-[44px] min-h-[44px] text-muted-secondary hover:text-orange transition-colors rounded-lg ml-auto"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="xl:hidden overflow-hidden bg-black backdrop-blur-md border-b border-white/5"
          >
            <div className="nav-container pb-[max(1rem,var(--safe-bottom))]">
              <ul className="flex flex-col pt-2 gap-1">
                {menuItems.map((item, index) => {
                  const href = getHref(item);
                  return (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <a
                        href={href}
                        onClick={(e) => handleSmoothScroll(e, href)}
                        className="flex min-h-[44px] items-center w-full py-2 text-muted-secondary hover:text-orange border-b border-border/60 text-[0.9375rem] font-medium transition-colors"
                      >
                        {item}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="pt-4">
                <a
                  href="#iletisim"
                  onClick={(e) => handleSmoothScroll(e, "#iletisim")}
                  className="site-btn-ghost block w-full text-center"
                >
                  Bize Ulaşın
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
