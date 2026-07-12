"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { mainNavItems, sectionPages } from "@/lib/section-pages";
import { siteConfig } from "@/lib/site";

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

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMobileMenu();

    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const showMobileMenu = isMobileMenuOpen;

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 pt-[var(--safe-top)]"
      aria-label="Ana navigasyon"
    >
      <div className="bg-black backdrop-blur-md border-b border-white/5">
        <div
          className={`nav-container relative grid grid-cols-[1fr_auto] items-center py-4 sm:py-5 xl:grid-cols-[auto_1fr_auto] xl:py-6 ${
            showMobileMenu ? "pb-[max(1rem,var(--safe-bottom))]" : ""
          }`}
        >
          <div className="col-start-1 row-start-1 m-0 shrink-0 leading-none">
            <Link
              href="/"
              className="block transition-opacity hover:opacity-80"
              onClick={handleLogoClick}
              aria-label={`${siteConfig.brandName} ana sayfa`}
            >
              {/* SEO: H1 metin içeriği — logo görseli dekoratif */}
              <span className="sr-only">Voxeil Yazılım ve Mühendislik</span>
              <Image
                src="/logo.svg"
                alt=""
                width={150}
                height={50}
                className="h-11 w-auto"
                priority
                unoptimized
                aria-hidden="true"
              />
            </Link>
          </div>

          <button
            type="button"
            className="col-start-2 row-start-1 shrink-0 flex items-center justify-center min-w-[44px] min-h-[44px] text-muted-secondary hover:text-orange transition-colors rounded-lg xl:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-nav-menu"
            aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>

          <div
            id="primary-nav-menu"
            className={`col-span-2 xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:flex xl:justify-center ${
              showMobileMenu ? "row-start-2 pt-2" : "hidden xl:block"
            }`}
          >
            <ul
              className={`flex ${
                showMobileMenu
                  ? "flex-col gap-1"
                  : "xl:flex-row xl:items-center xl:justify-center xl:gap-12"
              }`}
            >
              {mainNavItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={showMobileMenu ? { opacity: 0, y: -8 } : false}
                  animate={showMobileMenu ? { opacity: 1, y: 0 } : undefined}
                  transition={
                    showMobileMenu ? { delay: index * 0.05, duration: 0.2 } : undefined
                  }
                >
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={
                      showMobileMenu
                        ? "flex min-h-[44px] items-center w-full py-2 text-muted-secondary hover:text-orange border-b border-border/60 text-[0.9375rem] font-medium transition-colors"
                        : linkClassName
                    }
                  >
                    {item.label}
                    {!showMobileMenu && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <Link
            href={sectionPages.iletisim.path}
            onClick={closeMobileMenu}
            className={`site-btn-ghost whitespace-nowrap ${
              showMobileMenu
                ? "col-span-2 row-start-3 mt-4 block w-full text-center xl:col-start-3 xl:col-span-1 xl:row-start-1 xl:mt-0 xl:w-auto"
                : "hidden xl:inline-flex col-start-3 row-start-1 shrink-0"
            }`}
          >
            Bize Ulaşın
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden fixed inset-0 top-[calc(var(--safe-top)+4.5rem)] z-[-1] bg-black/40"
            aria-hidden="true"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
