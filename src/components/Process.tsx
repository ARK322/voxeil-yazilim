"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaClipboardList,
  FaPaintBrush,
  FaCode,
  FaCheckDouble,
  FaRocket,
} from "react-icons/fa";

const processSteps: Array<{
  id: number;
  title: string;
  description: string;
  icon: IconType;
}> = [
  {
    id: 1,
    title: "Analiz ve Planlama",
    description:
      "İhtiyaçlarınızı belirliyor, teknik gereksinimleri çıkarıyor ve yol haritasını oluşturuyoruz.",
    icon: FaClipboardList,
  },
  {
    id: 2,
    title: "Tasarım ve UI/UX",
    description:
      "Çözümün görsel arayüzünü ve kullanıcı deneyimi akışlarını kurguluyoruz.",
    icon: FaPaintBrush,
  },
  {
    id: 3,
    title: "Geliştirme (Sprint)",
    description:
      "Next.js ve modern teknoloji yığınımızı kullanarak modüler ve ölçeklenebilir kod yazıyoruz.",
    icon: FaCode,
  },
  {
    id: 4,
    title: "Test ve QA",
    description:
      "Performans, güvenlik ve işlevsellik testlerini gerçekleştirerek hatasız bir teslimat sağlıyoruz.",
    icon: FaCheckDouble,
  },
  {
    id: 5,
    title: "Yayına Alma ve Destek",
    description:
      "Projenizi canlıya alıyor ve ihtiyaç durumunda teknik destek süreçlerimize devam ediyoruz.",
    icon: FaRocket,
  },
];

export default function Process() {
  return (
    <section id="surec" className="site-section relative overflow-x-clip">
      <div className="site-container">
        <header className="site-section__header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="site-section__title"
          >
            Süreç
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="site-section__desc"
          >
            Projeye başladığımız andan canlıya almaya kadar her adımı şeffaf ve disiplinli
            bir metodolojiyle yönetiyoruz.
          </motion.p>
        </header>

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-[#FF6B35]/60 via-[#FF6B35]/20 to-transparent sm:left-6"
            aria-hidden="true"
          />

          <ol className="relative flex flex-col gap-6 sm:gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  className="relative flex gap-4 sm:gap-6"
                >
                  <div className="relative z-10 flex shrink-0 flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FF6B35]/35 bg-black shadow-[0_0_20px_rgba(255,107,53,0.15)] sm:h-12 sm:w-12">
                      <Icon className="text-sm text-[#FF6B35] sm:text-base" aria-hidden="true" />
                    </div>
                  </div>

                  <article className="min-w-0 flex-1 rounded-xl border border-gray-800 bg-black p-5 backdrop-blur-sm transition-colors duration-300 hover:border-[#FF6B35]/40 sm:p-6">
                    <div className="mb-2 flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="font-mono text-xs font-semibold tracking-widest text-[#FF6B35]/80">
                        {String(step.id).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-bold text-white sm:text-xl">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                      {step.description}
                    </p>
                  </article>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
