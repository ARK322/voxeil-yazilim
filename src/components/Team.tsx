"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ahmed Resul KURT",
    role: "UI/UX Tasarımcı & DevOps Mühendisi",
    image: "https://ui-avatars.com/api/?name=Ahmed+Resul+KURT&size=240&background=2c2c2c&color=E86530&bold=true",
    linkedin: "https://www.linkedin.com/in/ahmed-resul-kurt-86bb17234/",
    github: "https://github.com/ARK322",
    instagram: "https://www.instagram.com/aruttrk_/",
  },
  {
    name: "Bülent KOÇ",
    role: "Backend Geliştirici & Uygulama Mimarı",
    image: "https://ui-avatars.com/api/?name=Bulent+KOÇ&size=240&background=2c2c2c&color=E86530&bold=true",
    linkedin: "https://www.linkedin.com/in/bülent-deniz-koç-15a498301/",
    github: "https://github.com/budeko",
    instagram: "https://www.instagram.com/iambudeko",
  },
];

export default function Team() {
  return (
    <section id="ekibimiz" className="site-section relative overflow-x-clip">
      <div className="site-container">
        <header className="site-section__header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="site-section__title"
          >
            Ekibimiz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="site-section__desc"
          >
            Deneyimli ekibimizle yazılım sürecinizin her aşamasında yanınızdayız.
          </motion.p>
        </header>

        <div className="site-section__grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto">
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
                className="relative mb-6 flex items-center justify-center group max-w-full"
                whileHover="hover"
                initial="initial"
              >
                {/* Yuvarlak Resim */}
                <motion.div
                  className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden z-10 shrink-0"
                  variants={{
                    initial: { scale: 1, x: 0 },
                    hover: { scale: 0.85, x: -30 }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover bg-[var(--anthracite)]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=240&background=2c2c2c&color=E86530&bold=true`;
                    }}
                  />
                </motion.div>

                {/* Sosyal Medya İkonları — masaüstü hover */}
                <motion.div
                  className="absolute left-full ml-1 hidden md:flex flex-col gap-3 z-20"
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
                    className="w-14 h-14 site-icon-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 site-icon-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 site-icon-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInstagram className="text-2xl" />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Sosyal Medya — mobil */}
              <div className="flex md:hidden gap-3 mb-4 justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 site-icon-btn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 site-icon-btn"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 site-icon-btn"
                >
                  <FaInstagram className="text-xl" />
                </a>
              </div>

              {/* İsim Kutusu */}
              <div className="px-6 py-4 text-center">
                <p className="text-xl lg:text-2xl font-bold text-white mb-2">
                  {member.name}
                </p>
                <p className="text-muted text-sm lg:text-base">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

