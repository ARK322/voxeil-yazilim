"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaShoppingCart, FaLightbulb, FaCloud } from "react-icons/fa";
import { SERVICE_TAB_EVENT } from "@/lib/services";
import { parseNavHash } from "@/lib/scroll-to-section";

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
    description: "Yazılım ihtiyaçlarınızda uzman danışmanlık ve sürekli destek hizmetleri. Teknoloji yol haritanızı birlikte çizelim.",
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

  useEffect(() => {
    const onTabChange = (event: Event) => {
      const tabIndex = (event as CustomEvent<{ tabIndex: number }>).detail.tabIndex;
      if (typeof tabIndex === "number" && tabIndex >= 0 && tabIndex < services.length) {
        setActiveService(tabIndex);
      }
    };

    window.addEventListener(SERVICE_TAB_EVENT, onTabChange);
    return () => window.removeEventListener(SERVICE_TAB_EVENT, onTabChange);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const target = parseNavHash(hash);
    if (target?.serviceTab !== undefined) {
      setActiveService(target.serviceTab);
    }
  }, []);

  return (
    <section id="hizmetlerimiz" className="site-section site-section--plain-bg relative z-20 overflow-x-clip">
      <div className="site-container">
        <header className="site-section__header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="site-section__title"
          >
            Yazılım Geliştirme Hizmetlerimiz
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

          <div className="relative lg:min-h-[320px]">
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
                    y: isActive ? 0 : 12,
                    scale: isActive ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`${
                    isActive ? "relative lg:absolute lg:inset-0" : "hidden lg:block lg:absolute lg:inset-0"
                  } ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
                >
                  <div className="site-card service-panel overflow-hidden rounded-lg p-4 sm:p-6 lg:p-7 h-full">
                    <div className="service-panel__grid grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 h-full min-h-0">
                      <div className="relative flex min-h-0 flex-col justify-center overflow-hidden lg:col-span-3">
                        <div
                          className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden"
                          aria-hidden="true"
                        >
                          <IconComponent className="service-panel__icon text-orange shrink-0" />
                        </div>

                        <div className="relative z-10 min-w-0 pr-0 lg:pr-4">
                          <p className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-white mb-2 sm:mb-3">
                            {service.title}
                          </p>
                          <p className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex min-h-0 flex-col justify-center gap-2.5 sm:gap-3 lg:col-span-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="service-panel__feature rounded-lg border border-orange/30 bg-black/80 p-3.5 sm:p-4 transition-colors duration-300 hover:border-orange/50"
                          >
                            <p className="text-muted-secondary text-sm sm:text-base font-medium flex items-center gap-2.5 min-w-0">
                              <span className="text-orange shrink-0 text-lg leading-none" aria-hidden="true">
                                •
                              </span>
                              <span className="min-w-0 break-words">{feature}</span>
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
            className="mt-6 sm:mt-8 space-y-4 text-muted leading-relaxed"
          >
            <p className="text-sm sm:text-base max-w-3xl mx-auto text-center">
              E-ticaret platformlarından kurumsal otomasyon sistemlerine, API entegrasyonlarından
              veri odaklı raporlama panellerine kadar geniş bir yelpazede çözümler geliştiriyoruz.
              AWS, Azure ve modern DevOps araçlarıyla yazılımınızı güvenli ve sürdürülebilir
              şekilde hayata geçiriyoruz.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm sm:text-base max-w-4xl mx-auto">
              {[
                "Kurumsal web sitesi ve landing page geliştirme",
                "iOS ve Android mobil uygulama geliştirme",
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
