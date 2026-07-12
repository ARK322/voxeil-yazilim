"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import type { NavLinkItem } from "@/lib/sections";
import { sectionHref } from "@/lib/sections";

type NavDropdownProps = {
  label: string;
  items: readonly NavLinkItem[];
  onHome: boolean;
  onSelect: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
};

export default function NavDropdown({
  label,
  items,
  onHome,
  onSelect,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <li ref={rootRef} className="relative">
      <button
        type="button"
        className="text-muted-secondary hover:text-orange transition-colors duration-200 text-[1.0625rem] font-medium relative group py-2 inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <FaChevronDown
          className={`w-2.5 h-2.5 opacity-70 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
      </button>

      {open && (
        <ul
          id={menuId}
          role="menu"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[13.5rem] rounded-lg border border-white/10 bg-black/95 backdrop-blur-md py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] z-50"
        >
          {items.map((item) => (
            <li key={`${item.label}-${item.id}`} role="none">
              <Link
                href={sectionHref(item.id, onHome)}
                role="menuitem"
                className="block px-3.5 py-2 text-sm text-muted-secondary hover:text-orange hover:bg-white/5 transition-colors"
                onClick={(e) => {
                  setOpen(false);
                  onSelect(e, item.id);
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
