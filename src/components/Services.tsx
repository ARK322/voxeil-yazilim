"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaShoppingCart, FaLightbulb, FaCloud } from "react-icons/fa";

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

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="hizmetlerimiz" className="site-section relative z-20 overflow-x-clip">
      <div className="site-container">
        <header className="site-section__header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="site-section__title"
          >
            Hizmetlerimiz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="site-section__desc"
          >
            Voxeil yazılım şirketi olarak stratejiden canlıya almaya kadar uçtan uca yazılım çözümleri
            sunuyoruz. Modern web teknolojileri, mobil uygulamalar ve bulut altyapıları ile
            işletmenizin dijital varlığını güçlendiriyoruz.
          </motion.p>
        </header>

        <div className="site-section__body">
          <div
            className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:snap-none sm:gap-3 lg:flex-nowrap lg:justify-between lg:gap-4"
            role="tablist"
            aria-label="Hizmet seçimi"
          >
            {services.map((service, index) => (
              <button
                key={service.id}
                type="button"
                role="tab"
                id={`service-tab-${service.id}`}
                aria-controls={`service-panel-${service.id}`}
                aria-selected={activeService === index}
                onClick={() => setActiveService(index)}
                className={`site-btn-tab shrink-0 snap-start min-w-[42%] max-w-[70%] sm:min-w-0 sm:max-w-none sm:w-[calc(33.333%-0.5rem)] lg:w-auto lg:flex-1 px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm lg:text-base leading-snug lg:px-6 ${
                  activeService === index
                    ? "site-btn-tab--active"
                    : ""
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div className="relative lg:min-h-[480px] lg:h-[480px]">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isActive = activeService === index;
              return (
                <motion.div
                  key={service.id}
                  id={`service-panel-${service.id}`}
                  role="tabpanel"
                  aria-labelledby={`service-tab-${service.id}`}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : activeService > index ? 100 : -100,
                    scale: isActive ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`${
                    isActive ? "relative lg:absolute lg:inset-0" : "hidden lg:block lg:absolute lg:inset-0"
                  } ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
                >
                  <div className="site-card rounded-lg p-5 sm:p-8 lg:p-12 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-12 h-full">
                      <div className="relative flex flex-col justify-center lg:col-span-3">
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
                          <IconComponent className="text-orange text-[6rem] sm:text-[10rem] lg:text-[400px]" />
                        </div>

                        <div className="relative z-10">
                          <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                            {service.title}
                          </p>
                          <p className="text-muted text-base sm:text-xl leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center gap-3 sm:gap-4 lg:col-span-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-r from-black to-black/95 rounded-lg p-4 sm:p-5 border border-orange/30 hover:border-orange/50 transition-all duration-300 pl-6 sm:pl-8"
                          >
                            <p className="text-muted-secondary text-base sm:text-lg font-medium flex items-center">
                              <span className="text-orange mr-3 text-xl">•</span>
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-14 space-y-6 text-muted leading-relaxed"
          >
            <p className="text-sm sm:text-base max-w-3xl mx-auto text-center">
              E-ticaret platformlarından kurumsal otomasyon sistemlerine, API entegrasyonlarından
              veri odaklı raporlama panellerine kadar geniş bir yelpazede çözümler geliştiriyoruz.
              AWS, Azure ve modern DevOps araçlarıyla projelerinizi güvenli ve sürdürülebilir
              şekilde hayata geçiriyoruz.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm sm:text-base max-w-4xl mx-auto">
              {[
                "Kurumsal web sitesi ve landing page geliştirme",
                "iOS ve Android mobil uygulama projeleri",
                "E-ticaret altyapısı, ödeme ve stok entegrasyonları",
                "CRM, ERP ve iş süreci otomasyon yazılımları",
                "Bulut migrasyon, CI/CD ve DevOps danışmanlığı",
                "Bakım, izleme ve teknik destek hizmetleri",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-orange mt-0.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
