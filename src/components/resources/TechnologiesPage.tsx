import PageCta from "@/components/shared/templates/PageCta";
import PageHero from "@/components/shared/templates/PageHero";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import { technologiesPage } from "@/components/resources/content";
import "./technologies-page.css";

type Technology = {
  name: string;
  iconName: string;
};

const technologies: Technology[] = [
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

const stackGroups = [
  {
    title: "Frontend & UI",
    body: "React ekosistemi, TypeScript ve modern CSS ile performanslı, erişilebilir arayüzler.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Veri",
    body: "Ölçeklenebilir API katmanları, güvenli kimlik doğrulama ve veri modelleme.",
    items: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "Microservices"],
  },
  {
    title: "Bulut & DevOps",
    body: "Production ortamları için CI/CD, container orchestration ve izleme altyapısı.",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions"],
  },
];

export default function TechnologiesPage() {
  return (
    <SitePageLayout>
      <section className="site-section relative overflow-x-clip">
        <div className="site-container max-w-5xl mx-auto">
          <PageHero title={technologiesPage.title} description={technologiesPage.hero} />

          <div className="tech-grid-10 grid gap-1.5 sm:gap-3 max-w-full mx-auto mb-10 sm:mb-12">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="site-card site-card--hover p-2 sm:p-3 flex flex-col items-center justify-center aspect-square min-w-0"
              >
                <div className="relative w-8 h-8 sm:w-12 sm:h-12 mb-1.5 sm:mb-3 flex items-center justify-center shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/tech-icons/${tech.iconName}.svg`}
                    alt={`${tech.name} logosu`}
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-muted-secondary text-[10px] sm:text-xs text-center font-medium leading-tight truncate w-full px-0.5">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {stackGroups.map((group) => (
              <article key={group.title} className="site-card p-5 sm:p-6">
                <h2 className="text-lg font-semibold text-white mb-2">{group.title}</h2>
                <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">{group.body}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-orange/25 bg-black/40 px-2.5 py-1 text-xs text-muted-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <PageCta />
        </div>
      </section>
    </SitePageLayout>
  );
}
