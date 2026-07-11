"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import SocialLinks from "@/components/SocialLinks";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50">
      <div className="nav-container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1.1fr] gap-8 lg:gap-16 xl:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Link href="/" className="inline-block transition-opacity hover:opacity-80">
                <Image
                  src="/logo.svg"
                  alt={`${siteConfig.title}`}
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:justify-self-center"
            >
              <p className="footer-col-title">Hızlı Linkler</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#surec"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    Süreç
                  </Link>
                </li>
                <li>
                  <Link
                    href="#teknolojiler"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    Teknolojiler
                  </Link>
                </li>
                <li>
                  <Link
                    href="#endustriyel-cozumler"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    Endüstriyel Çözümler
                  </Link>
                </li>
                <li>
                  <Link
                    href="#hizmetlerimiz"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link
                    href="#neden-biz"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    Neden Biz?
                  </Link>
                </li>
                <li>
                  <Link
                    href="#ekibimiz"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    Ekibimiz
                  </Link>
                </li>
                <li>
                  <Link
                    href="#iletisim"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:justify-self-end"
            >
              <p className="footer-col-title">Bize Ulaşın</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#FF6B35] text-sm mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{siteConfig.address.full}</span>
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
        </div>
      </div>
    </footer>
  );
}
