"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { NavMegaMenuPanel, NavMegaMenuTriggers } from "@/components/layout/navbar/NavMegaMenu";
import { navGroups, sectionAnchors, sectionHref, navItemHref, getNavGroupItems, type NavLinkItem } from "@/lib/sections";
import { scrollToNavTarget } from "@/lib/scroll-to-section";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeMegaGroupId, setActiveMegaGroupId] = useState<string | null>(null);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setOpenAccordion(null);
  }, []);

  const closeMegaMenu = useCallback(() => {
    setMegaMenuOpen(false);
    setActiveMegaGroupId(null);
  }, []);

  const toggleMegaGroup = useCallback(
    (groupId: string) => {
      if (megaMenuOpen && activeMegaGroupId === groupId) {
        closeMegaMenu();
        return;
      }
      setMegaMenuOpen(true);
      setActiveMegaGroupId(groupId);
    },
    [megaMenuOpen, activeMegaGroupId, closeMegaMenu]
  );

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

  useEffect(() => {
    if (!megaMenuOpen) return;

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMegaMenu();
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [megaMenuOpen, closeMegaMenu]);

  useEffect(() => {
    closeMegaMenu();
  }, [pathname, closeMegaMenu]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavLinkItem
  ) => {
    if (item.href) {
      closeMobileMenu();
      closeMegaMenu();
      return;
    }

    if (!onHome) {
      closeMobileMenu();
      return;
    }

    e.preventDefault();
    closeMobileMenu();
    closeMegaMenu();
    scrollToNavTarget(item.id, item.serviceTab);
  };

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    href?: string
  ) => {
    if (href) {
      closeMobileMenu();
      closeMegaMenu();
      return;
    }

    if (!onHome) return;

    e.preventDefault();
    closeMobileMenu();
    closeMegaMenu();
    scrollToNavTarget(sectionId as NavLinkItem["id"]);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMobileMenu();
    closeMegaMenu();

    if (onHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const contactHref = sectionHref(sectionAnchors.iletisim);
  const showMobileMenu = isMobileMenuOpen;

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 pt-[var(--safe-top)]"
      aria-label="Ana navigasyon"
    >
      <div className="nav-shell relative">
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
            className="col-start-2 row-start-1 justify-self-end shrink-0 flex items-center justify-center min-w-[44px] min-h-[44px] text-muted-secondary hover:text-orange transition-colors rounded-lg xl:hidden"
            onClick={() => {
              closeMegaMenu();
              setIsMobileMenuOpen((open) => !open);
            }}
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
            {/* Desktop: mega menü tetikleyicileri */}
            <div className="hidden xl:flex xl:justify-center">
              <NavMegaMenuTriggers
                groups={navGroups}
                open={megaMenuOpen}
                activeGroupId={activeMegaGroupId}
                onToggleGroup={toggleMegaGroup}
              />
            </div>

            {/* Mobile: accordion */}
            <ul className={`flex flex-col gap-1 xl:hidden ${showMobileMenu ? "" : "hidden"}`}>
              {navGroups.map((group, index) => {
                const isOpen = openAccordion === group.id;

                return (
                  <motion.li
                    key={group.id}
                    initial={showMobileMenu ? { opacity: 0, y: -8 } : false}
                    animate={showMobileMenu ? { opacity: 1, y: 0 } : undefined}
                    transition={
                      showMobileMenu ? { delay: index * 0.05, duration: 0.2 } : undefined
                    }
                    className="border-b border-border/60"
                  >
                    <button
                      type="button"
                      className="flex min-h-[44px] w-full items-center justify-between py-2 text-muted-secondary hover:text-orange text-[0.9375rem] font-medium transition-colors"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenAccordion((current) =>
                          current === group.id ? null : group.id
                        )
                      }
                    >
                      {group.label}
                      <FaChevronDown
                        className={`w-3 h-3 opacity-70 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pb-2"
                        >
                          {getNavGroupItems(group).map((item) => (
                            <li key={`${group.id}-${item.label}-${item.serviceTab ?? ""}`}>
                              <Link
                                href={navItemHref(item)}
                                onClick={(e) => handleNavClick(e, item)}
                                className="flex min-h-[40px] items-center pl-3 text-sm text-muted-secondary hover:text-orange transition-colors"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}

              {showMobileMenu && (
                <motion.li
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navGroups.length * 0.05 + 0.05, duration: 0.2 }}
                  className="pt-4 mt-2"
                >
                  <Link
                    href={contactHref}
                    onClick={(e) => handleSectionClick(e, sectionAnchors.iletisim, contactHref)}
                    className="site-btn-primary w-full"
                  >
                    Bize Ulaşın
                  </Link>
                </motion.li>
              )}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex col-start-3 row-start-1 shrink-0 items-center">
            <Link
              href={contactHref}
              onClick={(e) => handleSectionClick(e, sectionAnchors.iletisim, contactHref)}
              className="site-btn-ghost whitespace-nowrap"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>

        <NavMegaMenuPanel
          groups={navGroups}
          open={megaMenuOpen}
          activeGroupId={activeMegaGroupId}
          onClose={closeMegaMenu}
          onHome={onHome}
          onSelect={handleNavClick}
        />
      </div>

      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="nav-mobile-backdrop xl:hidden fixed inset-0 top-[calc(var(--safe-top)+4.5rem)] z-[-1]"
            aria-hidden="true"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
