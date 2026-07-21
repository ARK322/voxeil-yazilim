"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import SocialLinks from "@/components/layout/footer/SocialLinks";
import TrustBadges from "@/components/layout/trust-badges/TrustBadges";
import {
  footerLinkColumns,
  navItemHref,
  sectionHref,
  sectionAnchors,
  type NavLinkItem,
} from "@/lib/sections";
import { scrollToNavTarget } from "@/lib/scroll-to-section";
import { siteConfig } from "@/lib/site";

const footerLinkClass =
  "text-muted hover:text-orange transition-colors text-sm leading-normal";

export default function Footer() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const handleFooterLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavLinkItem
  ) => {
    if (item.href) return;
    if (!onHome) return;
    e.preventDefault();
    scrollToNavTarget(item.id, item.serviceTab);
  };

  return (
    <footer className="relative border-t border-border-divider">
      <div className="nav-container">
        <div className="py-8">
          <div className="footer-grid">
            {/* 1 — Marka (2 birim genişlik) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="footer-col-head">
                <Link href="/" className="inline-block transition-opacity hover:opacity-80">
                  <Image
                    src="/logo.svg"
                    alt={siteConfig.logoAlt}
                    width={150}
                    height={50}
                    className="h-9 w-auto"
                    unoptimized
                  />
                </Link>
              </div>
              <div className="footer-brand-copy">
                <p className="footer-col-title">{siteConfig.legalName}</p>
                <p className="footer-col-text">{siteConfig.footerDescription}</p>
              </div>
            </motion.div>

            {/* 2–4 — Hizmetler + Kurumsal + Keşfet */}
            {footerLinkColumns.map((column, index) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * (index + 1) }}
                viewport={{ once: true }}
              >
                <div className="footer-col-head">
                  <p className="footer-col-title">{column.title}</p>
                </div>
                <ul className="footer-col-list">
                  {column.items.map((item) => (
                    <li key={`${column.title}-${item.label}-${item.serviceTab ?? ""}`}>
                      <Link
                        href={navItemHref(item)}
                        onClick={(e) => handleFooterLink(e, item)}
                        className={footerLinkClass}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* 5 — İletişim */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="footer-col-head">
                <p className="footer-col-title">İletişim</p>
              </div>
              <ul className="footer-col-list">
                <li>
                  <FaMapMarkerAlt className="footer-icon" aria-hidden="true" />
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-orange transition-colors text-sm footer-address"
                  >
                    {siteConfig.address.full}
                  </a>
                </li>
                <li>
                  <FaEnvelope className="footer-icon" aria-hidden="true" />
                  <a href={`mailto:${siteConfig.email}`} className={footerLinkClass}>
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <FaPhone className="footer-icon" aria-hidden="true" />
                  <a href={`tel:${siteConfig.phone}`} className={footerLinkClass}>
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
              </ul>
              <Link
                href={sectionHref(sectionAnchors.iletisim)}
                className="inline-block mt-4 text-sm leading-normal text-orange hover:text-orange-hover transition-colors"
              >
                Teklif / Keşif görüşmesi →
              </Link>
              <SocialLinks className="flex flex-wrap gap-3.5 mt-4" />
            </motion.div>
          </div>
        </div>

        <div className="border-t border-border-divider py-4 space-y-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-subtle text-sm"
          >
            © {new Date().getFullYear()} {siteConfig.brandName} — {siteConfig.legalName}. Tüm
            hakları saklıdır.
          </motion.p>
          <TrustBadges />
        </div>
      </div>
    </footer>
  );
}
