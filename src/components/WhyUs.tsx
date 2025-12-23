"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
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
    <div id={`counter-${target}`} className="text-5xl lg:text-6xl font-bold text-[#FF6B35] mb-2 text-center">
      {count}{suffix}
    </div>
  );
}

// Sayaç Bölümü Komponenti
function CounterSection() {
  const stats = [
    { value: 7, suffix: "+", label: "Yıl", description: "Sektördeki deneyimimiz ve uzmanlığımız ile projelerinize değer katıyoruz." },
    { value: 50, suffix: "+", label: "Tamamlanan Proje", description: "Başarıyla tamamladığımız projeler ile müşterilerimize hizmet veriyoruz." },
    { value: 98, suffix: "%", label: "Müşteri Memnuniyeti", description: "Müşterilerimizin memnuniyeti bizim için en önemli önceliktir." },
    { value: 6, suffix: "+", label: "Ekip Üyesi", description: "Uzman ekibimiz ile projelerinizi en iyi şekilde hayata geçiriyoruz." },
  ];

  return (
    <div className="mb-6">
      {/* 4 Kart Yan Yana */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-4 lg:p-5 flex flex-col"
          >
            <AnimatedCounter target={stat.value} suffix={stat.suffix} delay={index * 0.2} />
            <div className="text-gray-400 text-base lg:text-lg font-medium mb-2 text-center" style={{ textShadow: '0 0 10px rgba(255, 107, 53, 0.5), 0 0 20px rgba(255, 107, 53, 0.3)' }}>
              {stat.label}
            </div>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed flex-grow">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

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
      className="relative px-6 lg:px-8 min-h-screen flex flex-col justify-center"
      style={{ paddingTop: '2.55rem', paddingBottom: '2.55rem' }}
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

        {/* Özellikler - %60-%40 2 Satır Tasarımı */}
        <div className="mb-6 space-y-6">
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
                      <div className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-6 lg:p-7 hover:border-[#FF6B35] transition-all duration-300 relative overflow-hidden min-h-[220px] flex flex-col items-center justify-center text-center w-full">
                        {/* Filigran Icon - Sağ Alt Köşe */}
                        <div className="absolute bottom-4 right-4 opacity-10">
                          <IconComponent className="text-[#FF6B35] text-[12rem]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed relative z-10">
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
                      <div className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-6 lg:p-7 hover:border-[#FF6B35] transition-all duration-300 relative overflow-hidden min-h-[220px] flex flex-col items-center justify-center text-center w-full">
                        {/* Filigran Icon - Sağ Alt Köşe */}
                        <div className="absolute bottom-4 right-4 opacity-10">
                          <IconComponent className="text-[#FF6B35] text-[12rem]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed relative z-10">
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

        {/* Sayaçlar - Merdiven Tarzı */}
        <CounterSection />

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
            Kullandığımız Bazı Teknolojiler
          </motion.h3>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 max-w-full">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-[#FF6B35] transition-all duration-300 flex flex-col items-center justify-center aspect-square w-24"
              >
                {/* Logo - Ortada Normal Simge */}
                <div className="relative w-12 h-12 mb-3 flex items-center justify-center">
                  {tech.iconName === 'java' ? (
                    <Image
                      src="/java.png?v=2"
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="w-full h-full filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity object-contain"
                      unoptimized
                    />
                  ) : (
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
                  )}
                </div>
                
                {/* İsim - Altında */}
                <p className="text-gray-300 text-xs text-center font-medium">
                  {tech.name}
                </p>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

