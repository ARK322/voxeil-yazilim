"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import SocialLinks from "@/components/layout/SocialLinks";
import TrustBadges from "@/components/TrustBadges";
import {
  serviceFooterLabels,
  footerLinks,
  sectionHref,
  sectionAnchors,
} from "@/lib/sections";
import { siteConfig } from "@/lib/site";

const socialTextLinks = [
  { href: siteConfig.social.facebook, label: "Facebook" },
  { href: siteConfig.social.youtube, label: "YouTube" },
  { href: siteConfig.social.linkedin, label: "LinkedIn" },
  { href: siteConfig.social.instagram, label: "Instagram" },
] as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50">
      <div className="nav-container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 lg:col-span-1"
            >
              <Link href="/" className="inline-block transition-opacity hover:opacity-80">
                <Image
                  src="/logo.svg"
                  alt={siteConfig.logoAlt}
                  width={150}
                  height={50}
                  className="h-10 w-auto mb-4"
                  unoptimized
                />
              </Link>
              <p className="text-white font-semibold text-sm">{siteConfig.legalName}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {siteConfig.footerDescription}
              </p>
              <Link href={sectionHref(sectionAnchors.hakkimizda)} className="text-sm site-link">
                Hakkımızda
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <p className="footer-col-title">Yazılım Hizmetleri</p>
              <ul className="space-y-2">
                {serviceFooterLabels.map((label) => (
                  <li key={label}>
                    <Link
                      href={sectionHref(sectionAnchors.hizmetlerimiz)}
                      className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="footer-col-title">Hızlı Linkler</p>
              <ul className="space-y-2">
                {footerLinks.map((route) => (
                  <li key={route.id}>
                    <Link
                      href={sectionHref(route.id)}
                      className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                    >
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <p className="footer-col-title">Bize Ulaşın</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#FF6B35] text-sm mt-1 flex-shrink-0" />
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    {siteConfig.address.full}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-[#FF6B35] text-sm" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-[#FF6B35] text-sm" />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
              </ul>
              <SocialLinks className="flex flex-wrap gap-4 mt-6" />
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
                {socialTextLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="text-gray-500 hover:text-[#FF6B35] transition-colors text-xs"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 py-6 space-y-2">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} {siteConfig.brandName} — {siteConfig.legalName}. Tüm
            hakları saklıdır.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-xs"
          >
            {siteConfig.address.full} ·{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-[#FF6B35] transition-colors"
            >
              {siteConfig.email}
            </a>{" "}
            ·{" "}
            <a href={`tel:${siteConfig.phone}`} className="hover:text-[#FF6B35] transition-colors">
              {siteConfig.phoneDisplay}
            </a>
          </motion.p>
          <TrustBadges />
        </div>
      </div>
    </footer>
  );
}
