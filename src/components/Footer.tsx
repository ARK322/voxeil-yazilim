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
      <div className="site-container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
                  alt={`${siteConfig.name} logosu`}
                  width={150}
                  height={50}
                  className="h-10 w-auto mb-4"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dijital dönüşüm yolculuğunuzda yanınızdayız. Modern teknolojiler ve uzman
                ekibimizle yazılım çözümleri sunuyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
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
                    href="#hakkimizda"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    Hakkımızda
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

        <div className="border-t border-gray-800/50 py-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
