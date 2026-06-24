"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  "Hizmetlerimiz",
  "Neden Biz?",
  "Ekibimiz",
  "İletişim",
] as const;

const idMap: Record<(typeof menuItems)[number], string> = {
  Hizmetlerimiz: "hizmetlerimiz",
  "Neden Biz?": "neden-biz",
  Ekibimiz: "ekibimiz",
  İletişim: "iletisim",
};

const NAV_OFFSET = 80;

function getHref(item: string) {
  const targetId =
    idMap[item as (typeof menuItems)[number]] ??
    item.toLowerCase().replace(/\s+/g, "-");
  return `#${targetId}`;
}

const linkClassName =
  "text-gray-300 hover:text-[#FF6B35] transition-all duration-300 text-base font-medium relative group py-2 inline-block cursor-pointer whitespace-nowrap";

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

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    closeMobileMenu();

    const targetId = href.replace("#", "");
    const scrollToTarget = (element: HTMLElement) => {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - NAV_OFFSET;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    };

    const element = document.getElementById(targetId);

    if (element) {
      scrollToTarget(element);
    } else {
      setTimeout(() => {
        const retryElement = document.getElementById(targetId);
        if (retryElement) scrollToTarget(retryElement);
      }, 300);
    }
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 w-full max-w-[100vw] overflow-x-clip">
      <div className="bg-black/80 backdrop-blur-sm border-b border-gray-800/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 xl:px-8">
          <div className="flex h-14 sm:h-16 xl:h-20 items-center min-w-0">
            {/* Logo — solda */}
            <div className="shrink-0 xl:w-1/4">
              <Link
                href="/"
                className="transition-opacity hover:opacity-80"
                onClick={closeMobileMenu}
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto sm:h-12"
                  priority
                />
              </Link>
            </div>

            {/* Masaüstü menü — xl altında hamburger */}
            <div className="hidden xl:flex w-1/2 justify-center min-w-0">
              <ul className="flex items-center gap-6 2xl:gap-8">
                {menuItems.map((item) => {
                  const href = getHref(item);
                  return (
                    <li key={item} className="shrink-0">
                      <a
                        href={href}
                        onClick={(e) => handleSmoothScroll(e, href)}
                        className={linkClassName}
                      >
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B35] transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Masaüstü CTA */}
            <div className="hidden xl:flex w-1/4 justify-start pl-4 shrink-0">
              <a
                href="#iletisim"
                onClick={(e) => handleSmoothScroll(e, "#iletisim")}
                className="px-5 py-2.5 bg-[#FF6B35] text-white rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 hover:bg-[#FF7B45] hover:shadow-lg hover:shadow-[#FF6B35]/50 hover:scale-105 active:scale-100 cursor-pointer inline-block"
              >
                Bize Ulaşın
              </a>
            </div>

            {/* Mobil / tablet hamburger */}
            <button
              type="button"
              className="xl:hidden ml-auto shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 text-gray-300 hover:text-[#FF6B35] transition-colors rounded-lg"
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
      </div>

      {/* Mobil açılır menü */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="xl:hidden overflow-hidden bg-black/95 backdrop-blur-md border-b border-gray-800/50"
          >
            <ul className="flex flex-col px-4 sm:px-6 pt-2 pb-4 gap-1">
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
                      className="block w-full py-3 text-gray-300 hover:text-[#FF6B35] border-b border-gray-800/60 text-base font-medium transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            <div className="px-4 sm:px-6 pb-5">
              <a
                href="#iletisim"
                onClick={(e) => handleSmoothScroll(e, "#iletisim")}
                className="block w-full text-center px-4 py-3 bg-[#FF6B35] text-white rounded-lg font-medium text-sm transition-all duration-300 hover:bg-[#FF7B45] active:scale-[0.98]"
              >
                Bize Ulaşın
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
