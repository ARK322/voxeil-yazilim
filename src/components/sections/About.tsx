"use client";

import { motion } from "framer-motion";

const aboutContent = {
  h1: "Voxeil Yazılım ve Mühendislik Hakkında",
  intro:
    "Voxeil, Ankara merkezli bir yazılım ve mühendislik şirketidir. Web geliştirme, mobil uygulama, e-ticaret ve dijital dönüşüm alanlarında iş ortaklarımıza uçtan uca yazılım çözümleri sunuyoruz.",
  sections: [
    {
      heading: "Misyonumuz",
      paragraphs: [
        "İşletmelerin dijital dönüşüm yolculuğunda güvenilir teknoloji ortağı olmak. Modern yazılım mühendisliği pratikleri, şeffaf iletişim ve müşteri odaklı yaklaşımla kalıcı değer üretmek.",
      ],
    },
    {
      heading: "Ne Yapıyoruz?",
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
      heading: "Neden Voxeil?",
      paragraphs: [
        "Ankara'da konumlanmış uzman ekibimiz, keşif görüşmesinden proje teslimine kadar her aşamada yanınızda. Sprint bazlı geliştirme metodolojisi, düzenli demo sunumları ve teslim sonrası destek ile uzun vadeli iş ortaklıkları kuruyoruz.",
        "Türkiye genelinde ve yurt dışında uzaktan proje yönetimi ile hizmet veriyoruz. Ankara dışındaki firmalarla da aktif olarak çalışmaktayız.",
      ],
    },
  ],
};

export default function About() {
  return (
    <section id="hakkimizda" className="site-section relative overflow-x-clip">
      <div className="site-container max-w-4xl">
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

        <div className="site-section__body space-y-10 text-muted leading-relaxed">
          {aboutContent.sections.map((section) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">{section.heading}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mb-4">
                  {paragraph}
                </p>
              ))}
              {section.list ? (
                <ul className="list-disc list-inside space-y-2 text-muted-secondary">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
