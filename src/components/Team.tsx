"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ahmed Resul KURT",
    role: "DevOps",
    image: "https://ui-avatars.com/api/?name=Ahmed+Resul+KURT&size=240&background=2c2c2c&color=FF6B35&bold=true",
    linkedin: "https://linkedin.com/in/ahmet-resul-kurt",
    github: "https://github.com/ahmet-resul-kurt",
    instagram: "https://instagram.com/ahmet_resul_kurt",
  },
  {
    name: "Bülent KOÇ",
    role: "Full-Stack dicks Product Architects",
    image: "https://ui-avatars.com/api/?name=Bulent+KOÇ&size=240&background=2c2c2c&color=FF6B35&bold=true",
    linkedin: "https://linkedin.com/in/bulent-koc",
    github: "https://github.com/bulent-koc",
    instagram: "https://instagram.com/bulent_koc",
  },
  {
    name: "Hakan ADİYAMAN",
    role: "Mobile App Developer",
    image: "https://ui-avatars.com/api/?name=Hakan+ADİYAMAN&size=240&background=2c2c2c&color=FF6B35&bold=true",
    linkedin: "https://linkedin.com/in/hakan-adiyaman",
    github: "https://github.com/hakan-adiyaman",
    instagram: "https://instagram.com/hakan_adiyaman",
  },
];

export default function Team() {
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
      id="ekibimiz"
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
          Ekibimiz
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg text-center mb-16 max-w-3xl mx-auto"
        >
          Deneyimli ve tutkulu ekibimizle, projelerinizi en iyi şekilde hayata geçiriyoruz.
        </motion.p>

        {/* Ekip Üyeleri */}
        <motion.div
          style={{ y: contentY }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Resim Dairesi ve Sosyal Medya */}
              <motion.div 
                className="relative mb-6 flex items-center justify-center group"
                whileHover="hover"
                initial="initial"
              >
                {/* Yuvarlak Resim */}
                <motion.div
                  className="relative w-52 h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden z-10"
                  variants={{
                    initial: { scale: 1, x: 0 },
                    hover: { scale: 0.85, x: -30 }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover bg-[#2c2c2c]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=240&background=2c2c2c&color=FF6B35&bold=true`;
                    }}
                  />
                </motion.div>

                {/* Sosyal Medya İkonları */}
                <motion.div
                  className="absolute left-full ml-1 flex flex-col gap-3 z-20"
                  variants={{
                    initial: { opacity: 0, x: -20 },
                    hover: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF7B45] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF7B45] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF7B45] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInstagram className="text-2xl" />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* İsim Kutusu */}
              <div className="px-6 py-4 text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm lg:text-base">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

