"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaRocket, FaLightbulb, FaBullseye, FaHandshake } from "react-icons/fa";
const features = [
  {
    icon: FaRocket,
    title: "Hızlı Teslimat",
    description: "İhtiyaçlarınızı zamanında ve kaliteli bir şekilde teslim ediyoruz. Hızlı geliştirme süreçleri ile işinizi hızlandırıyoruz.",
  },
  {
    icon: FaLightbulb,
    title: "Yenilikçi Çözümler",
    description: "En güncel teknolojiler ve modern yaklaşımlarla, size özel çözümler geliştiriyoruz.",
  },
  {
    icon: FaBullseye,
    title: "Odaklanmış Yaklaşım",
    description: "Her iş ortağına özel, detaylı analiz ve strateji ile hedeflerinize ulaşmanızı sağlıyoruz.",
  },
  {
    icon: FaHandshake,
    title: "Güvenilir Ortaklık",
    description: "Uzun vadeli iş birlikleri kurarak, sürekli destek ve danışmanlık hizmeti sunuyoruz.",
  },
];

// Animasyonlu Sayaç Komponenti
function AnimatedCounter({ target, suffix, delay }: { target: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${target}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasStarted, target]);

  useEffect(() => {
    if (!hasStarted) return;

    const timer = setTimeout(() => {
      let current = 0;
      const increment = target / 60;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCount(Math.floor(current));
      }, 16);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [hasStarted, target, delay]);

  return (
    <div id={`counter-${target}`} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange mb-2 text-center site-glow-text">
      {count}{suffix}
    </div>
  );
}

// Sayaç Bölümü Komponenti
function CounterSection() {
  const stats = [
    { value: 7, suffix: "+", label: "Yıl Deneyim", description: "Sektördeki deneyimimiz ve uzmanlığımız ile iş ortaklarımıza değer katıyoruz." },
    { value: 50, suffix: "+", label: "Mutlu Müşteri", description: "Farklı sektörlerden firmalarla uzun vadeli yazılım iş birlikleri yürütüyoruz." },
    { value: 98, suffix: "%", label: "Müşteri Memnuniyeti", description: "Müşterilerimizin memnuniyeti bizim için en önemli önceliktir." },
    { value: 15, suffix: "+", label: "Teknik Uzmanlık", description: "Modern stack ve kanıtlanmış yöntemlerle güvenilir çözümler üretiyoruz." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="site-card p-4 lg:p-5 flex flex-col"
          >
            <AnimatedCounter target={stat.value} suffix={stat.suffix} delay={index * 0.2} />
            <div className="text-muted text-base lg:text-lg font-medium mb-2 text-center site-glow-text">
              {stat.label}
            </div>
            <p className="text-muted-secondary text-sm lg:text-base leading-relaxed flex-grow">
              {stat.description}
            </p>
          </motion.div>
        ))}
    </div>
  );
}

export default function WhyUs() {
  return (
    <section id="neden-biz" className="site-section relative overflow-x-clip">
      <div className="site-container">
        <header className="site-section__header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="site-section__title"
          >
            Neden Biz?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="site-section__desc"
          >
            Ankara merkezli uzman ekibimizle yazılım ihtiyaçlarınızı baştan sona yönetiyoruz: keşif ve analiz,
            UI/UX tasarım, geliştirme, test ve canlıya alma süreçlerinin tamamında yanınızdayız.
            Şeffaf iletişim, zamanında teslimat ve uzun vadeli iş ortaklığı yaklaşımımızla
            dijital hedeflerinize ulaşmanızı sağlıyoruz.
          </motion.p>
        </header>

        <div className="site-section__body">
          <div className="space-y-6">
          {[0, 2].map((groupStart) => {
            const isFirstRow = groupStart === 0;
            return (
              <motion.div
                key={groupStart}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: groupStart * 0.1 }}
                viewport={{ once: true }}
                className="w-full flex flex-col lg:flex-row gap-6 items-stretch"
              >
                {/* İlk kart - İlk satırda %60, ikinci satırda %40 */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: groupStart * 0.1 + 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full ${isFirstRow ? 'lg:w-[60%]' : 'lg:w-[40%]'} flex`}
                >
                  {(() => {
                    const feature = features[groupStart];
                    const IconComponent = feature.icon;
                    return (
                      <div className="site-card site-card--hover p-6 lg:p-7 relative overflow-hidden min-h-[220px] flex flex-col items-center justify-center text-center w-full">
                        {/* Filigran Icon - Sağ Alt Köşe */}
                        <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 opacity-10 pointer-events-none overflow-hidden">
                          <IconComponent className="text-orange text-[5rem] sm:text-[8rem] lg:text-[12rem]" />
                        </div>
                        <p className="text-xl sm:text-2xl font-bold text-white mb-3 relative z-10">
                          {feature.title}
                        </p>
                        <p className="text-muted text-base sm:text-lg leading-relaxed relative z-10">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })()}
                </motion.div>

                {/* İkinci kart - İlk satırda %40, ikinci satırda %60 */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: groupStart * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className={`w-full ${isFirstRow ? 'lg:w-[40%]' : 'lg:w-[60%]'} flex`}
                >
                  {(() => {
                    const feature = features[groupStart + 1];
                    const IconComponent = feature.icon;
                    return (
                      <div className="site-card site-card--hover p-6 lg:p-7 relative overflow-hidden min-h-[220px] flex flex-col items-center justify-center text-center w-full">
                        {/* Filigran Icon - Sağ Alt Köşe */}
                        <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 opacity-10 pointer-events-none overflow-hidden">
                          <IconComponent className="text-orange text-[5rem] sm:text-[8rem] lg:text-[12rem]" />
                        </div>
                        <p className="text-xl sm:text-2xl font-bold text-white mb-3 relative z-10">
                          {feature.title}
                        </p>
                        <p className="text-muted text-base sm:text-lg leading-relaxed relative z-10">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })()}
                </motion.div>
              </motion.div>
            );
          })}
          </div>

          <CounterSection />
        </div>
      </div>
    </section>
  );
}
