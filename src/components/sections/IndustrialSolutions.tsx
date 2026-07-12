"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaIndustry,
  FaHospital,
  FaDollarSign,
  FaGraduationCap,
  FaTruck,
  FaHotel,
} from "react-icons/fa";

const industries = [
  {
    icon: FaIndustry,
    title: "Üretim",
    description: "Endüstri 4.0 çözümleri ile üretim süreçlerinizi dijitalleştirin.",
  },
  {
    icon: FaHospital,
    title: "Sağlık",
    description: "Hasta yönetim sistemleri ve dijital sağlık çözümleri.",
  },
  {
    icon: FaDollarSign,
    title: "Finans",
    description: "Güvenli finansal yazılımlar ve ödeme sistemleri.",
  },
  {
    icon: FaGraduationCap,
    title: "Eğitim",
    description: "E-öğrenme platformları ve okul yönetim sistemleri.",
  },
  {
    icon: FaTruck,
    title: "Lojistik",
    description: "Tedarik zinciri yönetimi ve lojistik takip sistemleri.",
  },
  {
    icon: FaHotel,
    title: "Turizm",
    description: "Rezervasyon sistemleri ve müşteri yönetim platformları.",
  },
];

export default function IndustrialSolutions() {
  return (
    <section id="endustriyel-cozumler" className="site-section relative overflow-x-clip">
      <div className="site-container">
        <header className="site-section__header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="site-section__title"
          >
            Sektörel Yazılım Çözümleri
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="site-section__desc"
          >
            Farklı endüstri kollarına özel yazılım çözümleri sunuyoruz. Sektörünüze
            özgü ihtiyaçlarınızı anlayarak, size en uygun dijital dönüşüm yolunu
            birlikte çiziyoruz.
          </motion.p>
        </header>

        <div className="site-section__grid grid-cols-1 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full h-36 sm:h-44 lg:h-56 mx-auto max-w-sm sm:max-w-none"
          >
            <Image
              src="/shape.webp"
              alt="Endüstriyel dijital dönüşüm illüstrasyonu"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain shape-image-transform"
              unoptimized
            />
          </motion.div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-4 sm:gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="site-card site-card--hover p-3.5 sm:p-5 relative overflow-hidden group"
                >
                  <div className="absolute top-2 right-2 text-5xl sm:text-7xl opacity-10 group-hover:opacity-15 transition-opacity duration-300">
                    <IconComponent className="text-orange" />
                  </div>

                  <p className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 relative z-10">
                    {industry.title}
                  </p>
                  <p className="text-muted text-sm relative z-10">{industry.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
