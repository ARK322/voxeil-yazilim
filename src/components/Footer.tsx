"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import SocialLinks from "@/components/SocialLinks";
import TrustBadges from "@/components/TrustBadges";
import { siteConfig } from "@/lib/site";

const footerLinkClass =
  "text-gray-400 hover:text-[#FF6B35] transition-colors text-sm leading-relaxed";

const footerMotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
} as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50">
      <div className="nav-container">
        <div className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            <motion.div {...footerMotionProps} className="footer-col">
              <div className="footer-col-head footer-col-head--logo">
                <Link href="/" className="inline-block transition-opacity hover:opacity-80">
                  <Image
                    src="/logo.svg"
                    alt={siteConfig.brandName}
                    width={150}
                    height={50}
                    className="h-10 w-auto"
                    unoptimized
                  />
                </Link>
              </div>
            </motion.div>

            <motion.div
              {...footerMotionProps}
              transition={{ ...footerMotionProps.transition, delay: 0.05 }}
              className="footer-col"
            >
              <div className="footer-col-head">
                <p className="footer-col-title">{siteConfig.legalName}</p>
              </div>
              <div className="footer-col-body">
                <p className="footer-col-text">{siteConfig.footerDescription}</p>
              </div>
            </motion.div>

            <motion.div
              {...footerMotionProps}
              transition={{ ...footerMotionProps.transition, delay: 0.1 }}
              className="footer-col"
            >
              <div className="footer-col-head">
                <p className="footer-col-title">Hızlı Linkler</p>
              </div>
              <ul className="footer-col-body">
                <li>
                  <Link href="#hizmetlerimiz" className={footerLinkClass}>
                    Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link href="#surec" className={footerLinkClass}>
                    Süreç
                  </Link>
                </li>
                <li>
                  <Link href="#neden-biz" className={footerLinkClass}>
                    Neden Biz?
                  </Link>
                </li>
                <li>
                  <Link href="#ekibimiz" className={footerLinkClass}>
                    Ekibimiz
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              {...footerMotionProps}
              transition={{ ...footerMotionProps.transition, delay: 0.15 }}
              className="footer-col"
            >
              <div className="footer-col-head">
                <p className="footer-col-title">Bize Ulaşın</p>
              </div>
              <div className="footer-col-body">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#FF6B35] text-sm mt-1 flex-shrink-0" />
                  <span className="footer-col-text">{siteConfig.address.full}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#FF6B35] text-sm flex-shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className={footerLinkClass}>
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#FF6B35] text-sm flex-shrink-0" />
                  <a href={`tel:${siteConfig.phone}`} className={footerLinkClass}>
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
                <SocialLinks className="flex flex-wrap gap-4 pt-2" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 py-5 space-y-2">
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
