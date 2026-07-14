"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { navItemHref, type NavGroup, type NavLinkItem } from "@/lib/sections";

const panelTransition = {
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1] as const,
};

const contentTransition = {
  duration: 0.22,
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
    <ul className="flex flex-row items-center justify-center gap-6 2xl:gap-10">
      {groups.map((group) => {
        const isActive = open && activeGroupId === group.id;
        const panelId = `nav-mega-panel-${group.id}`;

        return (
          <li key={group.id}>
            <button
              type="button"
              className={`nav-mega-trigger relative group py-2 inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap text-[1.0625rem] font-medium transition-colors duration-200 ${
                isActive ? "text-orange" : "text-muted-secondary hover:text-orange"
              }`}
              aria-expanded={isActive}
              aria-controls={panelId}
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
  const activeGroup = groups.find((group) => group.id === activeGroupId);

  return (
    <AnimatePresence initial={false}>
      {open && activeGroup ? (
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
            id={`nav-mega-panel-${activeGroup.id}`}
            role="region"
            aria-label={`${activeGroup.label} menüsü`}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={panelTransition}
            className="nav-mega-panel"
          >
            <div className="nav-container py-7 sm:py-9">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeGroup.id}
                  initial={{ y: 8 }}
                  animate={{ y: 0 }}
                  exit={{ y: -6 }}
                  transition={contentTransition}
                >
                  {activeGroup.description ? (
                    <p className="mb-6 max-w-2xl text-sm text-muted leading-relaxed">
                      {activeGroup.description}
                    </p>
                  ) : null}

                  <div
                    className={`nav-mega-grid grid gap-x-10 gap-y-8 lg:gap-x-14 ${
                      activeGroup.columns.length === 1
                        ? "grid-cols-1 max-w-lg"
                        : activeGroup.columns.length === 2
                          ? "grid-cols-1 sm:grid-cols-2"
                          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {activeGroup.columns.map((column, columnIndex) => (
                      <div
                        key={`${activeGroup.id}-${column.title}`}
                        className={`nav-mega-col min-w-0 ${
                          columnIndex > 0 ? "sm:border-l sm:border-border-divider sm:pl-10 lg:pl-14" : ""
                        }`}
                      >
                        <div className="mb-3">
                          <p className="nav-mega-col-title">{column.title}</p>
                          {column.description ? (
                            <p className="mt-1 text-xs text-muted leading-relaxed">
                              {column.description}
                            </p>
                          ) : null}
                        </div>

                        <ul className="space-y-0.5">
                          {column.items.map((item) => (
                            <li
                              key={`${activeGroup.id}-${column.title}-${item.label}-${item.serviceTab ?? ""}`}
                            >
                              <Link
                                href={navItemHref(item)}
                                className="nav-mega-link group/link flex min-h-[38px] items-center gap-2 rounded-md py-1.5 text-sm text-muted-secondary transition-colors hover:text-orange"
                                onClick={(e) => {
                                  onClose();
                                  onSelect(e, item);
                                }}
                              >
                                <span
                                  className="h-px w-0 bg-orange transition-all duration-200 group-hover/link:w-3"
                                  aria-hidden="true"
                                />
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
