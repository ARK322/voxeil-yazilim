"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaRocket, FaLightbulb, FaBullseye, FaHandshake } from "react-icons/fa";

const features = [
  {
    icon: FaRocket,
    title: "Hızlı Teslimat",
    description: "Projelerinizi zamanında ve kaliteli bir şekilde teslim ediyoruz. Hızlı geliştirme süreçleri ile işinizi hızlandırıyoruz.",
  },
  {
    icon: FaLightbulb,
    title: "Yenilikçi Çözümler",
    description: "En güncel teknolojiler ve modern yaklaşımlarla, size özel çözümler geliştiriyoruz.",
  },
  {
    icon: FaBullseye,
    title: "Odaklanmış Yaklaşım",
    description: "Her projeye özel, detaylı analiz ve strateji ile hedeflerinize ulaşmanızı sağlıyoruz.",
  },
  {
    icon: FaHandshake,
    title: "Güvenilir Ortaklık",
    description: "Uzun vadeli iş birlikleri kurarak, sürekli destek ve danışmanlık hizmeti sunuyoruz.",
  },
];

const technologies = [
  { name: "React", iconName: "react" },
  { name: "Next.js", iconName: "nextdotjs" },
  { name: "TypeScript", iconName: "typescript" },
  { name: "JavaScript", iconName: "javascript" },
  { name: "Node.js", iconName: "nodedotjs" },
  { name: "Python", iconName: "python" },
  { name: "Java", iconName: "java" },
  { name: "C#", iconName: "csharp" },
  { name: "PHP", iconName: "php" },
  { name: "Go", iconName: "go" },
  { name: "Rust", iconName: "rust" },
  { name: "Vue.js", iconName: "vuedotjs" },
  { name: "Angular", iconName: "angular" },
  { name: "Svelte", iconName: "svelte" },
  { name: "Tailwind CSS", iconName: "tailwindcss" },
  { name: "Bootstrap", iconName: "bootstrap" },
  { name: "Material-UI", iconName: "mui" },
  { name: "MongoDB", iconName: "mongodb" },
  { name: "PostgreSQL", iconName: "postgresql" },
  { name: "MySQL", iconName: "mysql" },
  { name: "Redis", iconName: "redis" },
  { name: "Firebase", iconName: "firebase" },
  { name: "AWS", iconName: "amazonaws" },
  { name: "Azure", iconName: "microsoftazure" },
  { name: "Docker", iconName: "docker" },
  { name: "Kubernetes", iconName: "kubernetes" },
  { name: "Git", iconName: "git" },
  { name: "GitHub", iconName: "github" },
  { name: "GitLab", iconName: "gitlab" },
  { name: "GraphQL", iconName: "graphql" },
  { name: "Express", iconName: "express" },
  { name: "Django", iconName: "django" },
  { name: "Flask", iconName: "flask" },
  { name: "Laravel", iconName: "laravel" },
  { name: "Spring", iconName: "spring" },
  { name: "TensorFlow", iconName: "tensorflow" },
  { name: "Pandas", iconName: "pandas" },
  { name: "Numpy", iconName: "numpy" },
];

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll animasyonları
  const contentY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      id="neden-biz"
      className="relative py-20 px-6 lg:px-8 min-h-screen flex flex-col justify-center"
    >
      <div className="mx-auto w-full" style={{ maxWidth: 'calc(1280px * 0.94)' }}>
        {/* Başlık ve Açıklama */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold text-white text-center mb-6"
        >
          Neden Biz?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg text-center mb-16 max-w-3xl mx-auto"
        >
          Deneyimli ekibimiz ve modern teknolojilerle, dijital dönüşüm yolculuğunuzda 
          yanınızdayız. Müşteri memnuniyetini ön planda tutarak, kaliteli çözümler sunuyoruz.
        </motion.p>

        {/* Özellikler Grid - 4 Kart Yan Yana */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-[#FF6B35] transition-all duration-300 relative overflow-hidden min-h-[320px] flex flex-col items-center justify-center text-center"
              >
                {/* Filigran Icon - Sağ Alt Köşe */}
                <div className="absolute bottom-4 right-4 opacity-10">
                  <IconComponent className="text-[#FF6B35] text-9xl" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Teknoloji Logoları */}
        <motion.div
          style={{ y: contentY }}
          className="mt-12"
        >
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-white text-center mb-8"
          >
            Kullandığımız Teknolojiler
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-[#FF6B35] transition-all duration-300 flex flex-col items-center justify-center aspect-square min-w-0"
              >
                {/* Logo - Ortada Normal Simge */}
                <div className="relative w-12 h-12 mb-3 flex items-center justify-center">
                  <img
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${tech.iconName}.svg`}
                    alt={tech.name}
                    className="w-full h-full filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-500 text-xs">${tech.name.charAt(0)}</div>`;
                      }
                    }}
                  />
                </div>
                
                {/* İsim - Altında */}
                <p className="text-gray-300 text-xs text-center font-medium">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

