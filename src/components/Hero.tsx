"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Sayaç kutusu komponenti
function CounterBox({ target, label, delay, hasStarted }: { target: number; label: string; delay: number; hasStarted: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasStarted) return;

    const timer = setTimeout(() => {
      let current = 0;
      const increment = target / 60; // 60 frame'de tamamlansın
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCount(Math.floor(current));
      }, 16); // ~60fps

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [hasStarted, target, delay]);

  // Sayı formatı
  const formatCount = () => {
    if (label === "Müşteri Memnuniyeti") {
      return `${count}%`;
    } else if (label === "Yıl") {
      return `${count}+`;
    } else {
      return `${count}+`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={hasStarted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center"
    >
      <div className="text-4xl font-bold text-[#FF6B35] mb-2">
        {formatCount()}
      </div>
      <div className="text-gray-400 text-sm">
        {label}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // İlk tasarım animasyonları (0-0.5 arası kaybolur)
  const firstDesignOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const firstDesignScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const firstDesignY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);

  // İkinci tasarım animasyonları (0.5-1 arası gelir)
  const secondDesignOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const secondDesignX = useTransform(scrollYProgress, [0.5, 1], [50, 0]);

  // Sayaç değerleri
  const [hasStarted, setHasStarted] = useState(false);
  const targetCounters = [7, 50, 98, 15];
  const counterLabels = ["Yıl", "Tamamlanan Proje", "Müşteri Memnuniyeti", "Ödül ve Sertifikalar"];

  // İkinci tasarım görünür olduğunda sayaçları başlat
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.5 && !hasStarted) {
        setHasStarted(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, hasStarted]);

  // Sayfa yüklendiğinde scroll'u en üste al
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        height: "200vh",
      }}
    >
      {/* Sticky Wrapper - Scroll sırasında pinned kalır */}
      <div
        style={{
          position: "sticky",
          top: "80px",
          height: "calc(100vh - 80px)",
          minHeight: "calc(100vh - 80px)",
          zIndex: 10,
        }}
      >
        {/* İlk Tasarım - Scroll 0-0.5 arası görünür */}
        <motion.div
          style={{
            opacity: firstDesignOpacity,
            scale: firstDesignScale,
            y: firstDesignY,
            pointerEvents: "none",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Laptop 1 Resmi */}
            <div className="relative z-10 w-full max-w-4xl h-[50vh]">
              <Image
                src="/laptop1.avif"
                alt="Laptop"
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center bg-[#2c2c2c]/50 rounded-lg border border-gray-800"><p class="text-gray-500">laptop1.avif</p></div>';
                  }
                }}
              />
            </div>

            {/* Sol Üst - SİZ DÜŞÜNÜN */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-24 left-24 lg:left-48 z-20"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)' }}>
                SİZ DÜŞÜNÜN
              </h2>
            </motion.div>

            {/* Sağ Alt - BİZ KODLAYALIM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-20 right-10 lg:right-20 z-20"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-[#FF6B35]" style={{ textShadow: '0 0 20px rgba(255, 107, 53, 0.5), 0 0 40px rgba(255, 107, 53, 0.3)' }}>
                BİZ KODLAYALIM
              </h2>
            </motion.div>
          </div>
        </motion.div>

        {/* İkinci Tasarım - Scroll 0.5-1 arası gelir */}
        <motion.div
          style={{
            opacity: secondDesignOpacity,
            x: secondDesignX,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center" style={{ minHeight: "calc(100vh - 80px)" }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
              {/* Sol - Laptop 2 Resmi */}
              <div className="lg:col-span-4 relative w-full h-[90vh] lg:h-[100vh]">
                <Image
                  src="/laptop2.avif"
                  alt="Laptop"
                  fill
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center bg-[#2c2c2c]/50 rounded-lg border border-gray-800"><p class="text-gray-500">laptop2.avif</p></div>';
                    }
                  }}
                />
              </div>

              {/* Orta - Metin ve Buton */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">
                  Dijital Dönüşümünüzü
                  <br />
                  <span className="text-[#FF6B35]">Birlikte Başlatalım</span>
                </h1>
                <p className="text-gray-400 text-lg text-center max-w-md">
                  Profesyonel yazılım çözümleri ile işinizi bir adım öne taşıyın.
                  Hayalinizdeki projeyi gerçeğe dönüştürelim.
                </p>
                <button className="px-8 py-4 bg-[#FF6B35] text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#FF7B45] hover:shadow-lg hover:shadow-[#FF6B35]/50 hover:scale-105 active:scale-100">
                  Hemen Başlayın
                </button>
              </div>

              {/* Sağ - Sayaç Kutuları */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {targetCounters.map((target, index) => (
                  <CounterBox
                    key={index}
                    target={target}
                    label={counterLabels[index]}
                    delay={index * 0.1}
                    hasStarted={hasStarted}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator - Ortada Alt Kısımda */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"
              />
            </div>
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-[#FF6B35]"
              >
                <path
                  d="M10 15L5 10L6.41 8.59L10 12.17L13.59 8.59L15 10L10 15Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
