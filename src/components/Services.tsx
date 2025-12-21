"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaCode, FaMobileAlt, FaShoppingCart, FaLightbulb, FaCloud, FaIndustry, FaHospital, FaDollarSign, FaGraduationCap, FaTruck, FaHotel } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: FaCode,
    title: "Web Geliştirme",
    description: "Modern ve responsive web siteleri ile dijital varlığınızı güçlendirin. Kullanıcı deneyimini ön planda tutan, performans odaklı çözümler sunuyoruz.",
    features: [
      "Responsive Tasarım",
      "SEO Optimizasyonu",
      "Hızlı Yükleme",
      "Güvenli Altyapı",
    ],
  },
  {
    id: 2,
    icon: FaMobileAlt,
    title: "Mobil Uygulama",
    description: "iOS ve Android platformları için yenilikçi mobil uygulamalar geliştiriyoruz. Hedef kitlenize her an ulaşın.",
    features: [
      "iOS & Android",
      "Native Performans",
      "Kullanıcı Dostu Arayüz",
      "App Store Optimizasyonu",
    ],
  },
  {
    id: 3,
    icon: FaShoppingCart,
    title: "E-Ticaret Çözümleri",
    description: "Güvenli ve kullanıcı dostu e-ticaret platformları ile satışlarınızı artırın. Ödeme entegrasyonları ve stok yönetimi dahil.",
    features: [
      "Güvenli Ödeme",
      "Stok Yönetimi",
      "Sipariş Takibi",
      "Müşteri Paneli",
    ],
  },
  {
    id: 4,
    icon: FaLightbulb,
    title: "Danışmanlık & Destek",
    description: "Yazılım projelerinizde uzman danışmanlık ve sürekli destek hizmetleri. Teknoloji yol haritanızı birlikte çizelim.",
    features: [
      "Teknik Danışmanlık",
      "7/24 Destek",
      "Proje Yönetimi",
      "Bakım & Güncelleme",
    ],
  },
  {
    id: 5,
    icon: FaCloud,
    title: "Bulut Çözümleri",
    description: "Ölçeklenebilir bulut altyapıları ile işinizi büyütün. AWS, Azure ve özel bulut çözümleri sunuyoruz.",
    features: [
      "AWS & Azure",
      "Ölçeklenebilirlik",
      "Yedekleme",
      "Güvenlik",
    ],
  },
];

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

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll animasyonları - bant aşağı kayar, içerik yukarı kayar
  const contentY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const bandY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      ref={containerRef}
      id="hizmetlerimiz"
      className="relative py-20 px-6 lg:px-8 min-h-screen flex flex-col justify-center"
      style={{ marginTop: '6rem' }}
    >
      {/* Hizmetler Bölümü */}
      <div className="mx-auto w-full mb-32" style={{ maxWidth: 'calc(1280px * 0.94)' }}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold text-white text-center mb-6"
        >
          Hizmetlerimiz
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg text-center mb-16 max-w-3xl mx-auto"
        >
          Dijital dönüşüm yolculuğunuzda size en uygun çözümleri sunuyoruz. 
          Modern teknolojiler ve uzman ekibimizle projelerinizi hayata geçiriyoruz.
        </motion.p>

        {/* Butonlar */}
        <div className="flex justify-between gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`flex-1 px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 ${
                activeService === index
                  ? "bg-[#FF6B35] text-white shadow-lg shadow-[#FF6B35]/50"
                  : "bg-[#2c2c2c]/50 text-gray-300 hover:bg-[#2c2c2c] hover:text-white"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Kart Galerisi */}
        <div className="relative h-[480px] overflow-hidden">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={false}
                animate={{
                  opacity: activeService === index ? 1 : 0,
                  x: activeService === index ? 0 : activeService > index ? 100 : -100,
                  scale: activeService === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute inset-0 ${
                  activeService === index ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <div className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-8 lg:p-12 h-full">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 h-full">
                    {/* Sol Bölge - Başlık, Metin ve Filigran Logo (%60) */}
                    <div className="relative flex flex-col justify-center lg:col-span-3">
                      {/* Filigran Logo Arkaplan */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <IconComponent className="text-[#FF6B35] text-[400px]" />
                      </div>
                      
                      <div className="relative z-10">
                        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-xl leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Sağ Bölge - Özellikler (%40) */}
                    <div className="flex flex-col justify-center gap-4 lg:col-span-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-r from-black/90 to-black/70 rounded-lg p-5 border border-[#FF6B35]/30 hover:border-[#FF6B35]/50 transition-all duration-300 pl-8"
                        >
                          <p className="text-gray-300 text-lg font-medium flex items-center">
                            <span className="text-[#FF6B35] mr-3 text-xl">•</span>
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Endüstriyel Çözümler Bölümü */}
      <motion.div
        style={{ y: contentY, maxWidth: 'calc(1280px * 0.94)' }}
        className="mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Sol Sütun - Başlık ve Açıklama */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
            >
              Endüstriyel Çözümler
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg leading-relaxed mb-6"
            >
              Farklı endüstri kollarına özel yazılım çözümleri sunuyoruz. Sektörünüze
              özgü ihtiyaçlarınızı anlayarak, size en uygun dijital dönüşüm yolunu
              birlikte çiziyoruz.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative w-full h-64"
            >
              <Image
                src="/shape.webp"
                alt="Shape"
                fill
                className="object-contain"
                style={{ transform: 'rotate(-30deg) scale(1.62)' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </motion.div>
          </div>

          {/* Sağ Sütun - Endüstri Kartları (2 şer sütun) */}
          <div className="grid grid-cols-2 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-6 relative overflow-hidden group hover:border-[#FF6B35] transition-all duration-300"
                >
                  {/* Soluk Simge Arkaplanı - Turuncu tonlu */}
                  <div className="absolute top-2 right-2 text-7xl opacity-10 group-hover:opacity-15 transition-opacity duration-300">
                    <IconComponent className="text-[#FF6B35]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 text-sm relative z-10">
                    {industry.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

