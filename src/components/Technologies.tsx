"use client";

import { motion } from "framer-motion";

const SIMPLE_ICONS_CDN = "https://cdn.jsdelivr.net/npm/simple-icons";

type Technology = {
  name: string;
  iconName: string;
  /** Simple Icons'tan kaldırılan markalar için eski paket sürümü */
  iconVersion?: string;
};

const technologies: Technology[] = [
  { name: "React", iconName: "react" },
  { name: "Next.js", iconName: "nextdotjs" },
  { name: "TypeScript", iconName: "typescript" },
  { name: "JavaScript", iconName: "javascript" },
  { name: "Node.js", iconName: "nodedotjs" },
  { name: "Python", iconName: "python" },
  { name: "Java", iconName: "java", iconVersion: "6.20.0" },
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

function getTechIconSrc(tech: Technology) {
  const version = tech.iconVersion ?? "9";
  return `${SIMPLE_ICONS_CDN}@${version}/icons/${tech.iconName}.svg`;
}

export default function Technologies() {
  return (
    <section id="teknolojiler" className="site-section relative overflow-x-clip">
      <div className="site-container">
        <header className="site-section__header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="site-section__title"
          >
            Kullandığımız Bazı Teknolojiler
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="site-section__desc"
          >
            Modern stack ile ölçeklenebilir, güvenli ve sürdürülebilir çözümler geliştiriyoruz.
          </motion.p>
        </header>

        <div className="tech-grid-10 grid gap-2 sm:gap-4 max-w-full mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="site-card site-card--hover p-2.5 sm:p-4 flex flex-col items-center justify-center aspect-square min-w-0"
              >
                <div className="relative w-8 h-8 sm:w-12 sm:h-12 mb-1.5 sm:mb-3 flex items-center justify-center shrink-0">
                  <img
                    src={getTechIconSrc(tech)}
                    alt={tech.name}
                    className="w-full h-full filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-subtle text-xs">${tech.name.charAt(0)}</div>`;
                      }
                    }}
                  />
                </div>
                <p className="text-muted-secondary text-[10px] sm:text-xs text-center font-medium leading-tight truncate w-full px-0.5">{tech.name}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
