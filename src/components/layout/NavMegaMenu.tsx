"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { navItemHref, type NavGroup, type NavLinkItem } from "@/lib/sections";

const panelTransition = {
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1] as const,
};

type NavMegaMenuTriggersProps = {
  groups: readonly NavGroup[];
  open: boolean;
  activeGroupId: string | null;
  onToggleGroup: (groupId: string) => void;
};

type NavMegaMenuPanelProps = {
  groups: readonly NavGroup[];
  open: boolean;
  activeGroupId: string | null;
  onClose: () => void;
  onHome: boolean;
  onSelect: (e: React.MouseEvent<HTMLAnchorElement>, item: NavLinkItem) => void;
};

export function NavMegaMenuTriggers({
  groups,
  open,
  activeGroupId,
  onToggleGroup,
}: NavMegaMenuTriggersProps) {
  return (
    <ul className="flex flex-row items-center justify-center gap-10">
      {groups.map((group) => {
        const isActive = open && activeGroupId === group.id;

        return (
          <li key={group.id}>
            <button
              type="button"
              className={`nav-mega-trigger relative group py-2 inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap text-[1.0625rem] font-medium transition-colors duration-200 ${
                isActive ? "text-orange" : "text-muted-secondary hover:text-orange"
              }`}
              aria-expanded={isActive}
              aria-controls="nav-mega-panel"
              aria-haspopup="true"
              onClick={() => onToggleGroup(group.id)}
            >
              {group.label}
              <FaChevronDown
                className={`w-2.5 h-2.5 opacity-70 transition-transform duration-200 ${
                  isActive ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-orange transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
                aria-hidden="true"
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function NavMegaMenuPanel({
  groups,
  open,
  activeGroupId,
  onClose,
  onHome,
  onSelect,
}: NavMegaMenuPanelProps) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="nav-mega-backdrop"
            aria-label="Menüyü kapat"
            onClick={onClose}
          />

          <motion.div
            id="nav-mega-panel"
            role="region"
            aria-label="Site navigasyon menüsü"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={panelTransition}
            className="nav-mega-panel"
          >
            <div className="nav-container py-8 sm:py-10">
              <div className="nav-mega-grid grid grid-cols-3 gap-8 lg:gap-12">
                {groups.map((group) => {
                  const isHighlighted = activeGroupId === group.id;

                  return (
                    <div
                      key={group.id}
                      className={`nav-mega-col min-w-0 rounded-xl border p-5 lg:p-6 transition-colors duration-200 ${
                        isHighlighted
                          ? "border-orange/35 bg-orange/[0.04]"
                          : "border-white/8 bg-white/[0.02]"
                      }`}
                    >
                      <div className="mb-4 border-b border-white/8 pb-4">
                        <p className="text-white font-semibold text-base lg:text-lg">
                          {group.label}
                        </p>
                        {group.description ? (
                          <p className="mt-1.5 text-sm text-muted leading-relaxed">
                            {group.description}
                          </p>
                        ) : null}
                      </div>

                      <ul className="space-y-0.5">
                        {group.items.map((item) => (
                          <li key={`${group.id}-${item.label}-${item.serviceTab ?? ""}`}>
                            <Link
                              href={navItemHref(item, onHome)}
                              className="nav-mega-link flex min-h-[40px] items-center rounded-lg px-2.5 py-2 text-sm text-muted-secondary transition-colors hover:bg-white/5 hover:text-orange"
                              onClick={(e) => {
                                onClose();
                                onSelect(e, item);
                              }}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
