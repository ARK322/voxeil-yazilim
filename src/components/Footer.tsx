"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50">
      <div className="mx-auto w-full px-6 lg:px-8" style={{ maxWidth: 'calc(1280px * 0.94)' }}>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Logo ve Açıklama */}
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
                  alt="Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto mb-4"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dijital dönüşüm yolculuğunuzda yanınızdayız. Modern teknolojiler ve uzman ekibimizle 
                projelerinizi hayata geçiriyoruz.
              </p>
            </motion.div>

            {/* Hızlı Linkler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Hızlı Linkler</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#hizmetlerimiz" className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                    Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link href="#neden-biz" className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                    Neden Biz?
                  </Link>
                </li>
                <li>
                  <Link href="#ekibimiz" className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                    Ekibimiz
                  </Link>
                </li>
                <li>
                  <Link href="#iletisim" className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                    İletişim
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* İletişim */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">İletişim</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-[#FF6B35] text-sm" />
                  <a href="mailto:info@voxeil.com" className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                    info@voxeil.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-[#FF6B35] text-sm" />
                  <a href="tel:+905551234567" className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                    +90 (555) 123 45 67
                  </a>
                </li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://linkedin.com/company/voxeil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF7B45] transition-colors"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://github.com/voxeil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF7B45] transition-colors"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://instagram.com/voxeil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF7B45] transition-colors"
                >
                  <FaInstagram className="text-lg" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tüm Hakları Saklıdır */}
        <div className="border-t border-gray-800/50 py-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} Voxeil Yazılım. Tüm hakları saklıdır.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}


