"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaBullseye, FaCode, FaHandshake } from "react-icons/fa";

const aboutContent = {
  h1: "Voxeil Yazılım ve Mühendislik Hakkında",
  intro:
    "Voxeil, Ankara merkezli bir yazılım ve mühendislik şirketidir. Web geliştirme, mobil uygulama, e-ticaret ve dijital dönüşüm alanlarında iş ortaklarımıza uçtan uca yazılım çözümleri sunuyoruz.",
  sections: [
    {
      icon: FaBullseye,
      heading: "Misyonumuz",
      entrance: "left" as const,
      paragraphs: [
        "İşletmelerin dijital dönüşüm yolculuğunda güvenilir teknoloji ortağı olmak. Modern yazılım mühendisliği pratikleri, şeffaf iletişim ve müşteri odaklı yaklaşımla kalıcı değer üretmek.",
      ],
    },
    {
      icon: FaCode,
      heading: "Ne Yapıyoruz?",
      entrance: "up" as const,
      paragraphs: [
        "Kurumsal web siteleri ve web uygulamalarından mobil uygulamalara, e-ticaret platformlarından kurumsal otomasyon sistemlerine kadar geniş bir yelpazede yazılım geliştirme hizmetleri veriyoruz.",
        "AWS, Azure, Next.js, React, TypeScript ve modern DevOps araçları ile ölçeklenebilir, güvenli ve sürdürülebilir dijital ürünler inşa ediyoruz.",
      ],
      list: [
        "Web ve mobil uygulama geliştirme",
        "E-ticaret ve ödeme entegrasyonları",
        "Dijital dönüşüm ve süreç otomasyonu",
        "Bulut altyapısı ve DevOps danışmanlığı",
        "Bakım, izleme ve teknik destek",
      ],
    },
    {
      icon: FaHandshake,
      heading: "Neden Voxeil?",
      entrance: "right" as const,
      paragraphs: [
        "Ankara'da konumlanmış uzman ekibimiz, keşif görüşmesinden proje teslimine kadar her aşamada yanınızda. Sprint bazlı geliştirme metodolojisi, düzenli demo sunumları ve teslim sonrası destek ile uzun vadeli iş ortaklıkları kuruyoruz.",
        "Türkiye genelinde ve yurt dışında uzaktan proje yönetimi ile hizmet veriyoruz. Ankara dışındaki firmalarla da aktif olarak çalışmaktayız.",
      ],
    },
  ],
};

function cardVariants(direction: "left" | "right" | "up", reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } },
    };
  }

  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -36 : direction === "right" ? 36 : 0,
      y: direction === "up" ? 28 : 16,
      scale: direction === "up" ? 0.98 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };
}

function AboutCard({
  section,
  className = "",
  delay = 0,
}: {
  section: (typeof aboutContent.sections)[number];
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();
  const Icon = section.icon;
  const iconPosition = section.entrance === "up" ? "top-4 right-4" : "-bottom-4 -right-4";

  return (
    <motion.article
      variants={cardVariants(section.entrance, !!reducedMotion)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay }}
      whileHover={reducedMotion ? undefined : { y: -4, transition: { duration: 0.25 } }}
      className={`site-card site-card--hover relative overflow-hidden p-5 sm:p-6 h-full ${className}`}
    >
      <motion.div
        className={`absolute ${iconPosition} opacity-10 pointer-events-none`}
        animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <Icon className="text-orange text-[5rem] sm:text-[6rem]" />
      </motion.div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <motion.span
            initial={reducedMotion ? false : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: delay + 0.15, type: "spring", stiffness: 260, damping: 18 }}
            viewport={{ once: true }}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange/30 bg-black/60"
          >
            <Icon className="text-orange text-sm" aria-hidden="true" />
          </motion.span>
          <motion.h3
            initial={reducedMotion ? false : { opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: delay + 0.2 }}
            viewport={{ once: true }}
            className="site-heading"
          >
            {section.heading}
          </motion.h3>
        </div>

        {section.paragraphs.map((paragraph, paragraphIndex) => (
          <motion.p
            key={paragraph.slice(0, 40)}
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: delay + 0.25 + paragraphIndex * 0.08 }}
            viewport={{ once: true }}
            className="text-muted text-sm sm:text-base leading-relaxed mb-3 last:mb-0"
          >
            {paragraph}
          </motion.p>
        ))}

        {section.list ? (
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-4"
          >
            {section.list.map((item, itemIndex) => (
              <motion.li
                key={item}
                variants={{
                  hidden: reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: -14, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      delay: delay + 0.35 + itemIndex * 0.07,
                      ease: [0.22, 1, 0.36, 1] as const,
                    },
                  },
                }}
                whileHover={reducedMotion ? undefined : { x: 4, borderColor: "rgba(232, 101, 48, 0.45)" }}
                className="flex items-start gap-2 rounded-lg border border-orange/20 bg-black/40 px-3 py-2.5 text-sm text-muted-secondary transition-colors"
              >
                <motion.span
                  initial={reducedMotion ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 16, delay: delay + 0.4 + itemIndex * 0.07 }}
                  viewport={{ once: true }}
                  className="text-orange mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  •
                </motion.span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        ) : null}
      </div>
    </motion.article>
  );
}

export default function About() {
  const reducedMotion = useReducedMotion();
  const [mission, services, whyUs] = aboutContent.sections;

  return (
    <section id="hakkimizda" className="site-section relative overflow-x-clip">
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-1/3 h-64 bg-gradient-to-b from-orange/5 via-transparent to-transparent"
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        aria-hidden="true"
      />

      <div className="site-container relative">
        <header className="site-section__header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="site-section__title"
          >
            {aboutContent.h1}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="site-section__desc"
          >
            {aboutContent.intro}
          </motion.p>
        </header>

        <div className="site-section__body max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <AboutCard section={mission} delay={0} />
            <AboutCard section={whyUs} delay={0.08} />
          </div>

          <AboutCard section={services} className="mt-4 sm:mt-5" delay={0.16} />
        </div>
      </div>
    </section>
  );
}
