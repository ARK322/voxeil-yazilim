import {
  FaCloud,
  FaCode,
  FaDatabase,
} from "react-icons/fa";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import {
  CompanyBlock,
  CompanyCta,
  CompanyHero,
  CompanyIcon,
} from "@/components/company/CompanyShell";
import { technologiesPage } from "@/components/resources/content";
import "@/components/company/company.css";
import "@/components/company/company-sections.css";
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
    Icon: FaCode,
  },
  {
    title: "Backend & Veri",
    body: "Ölçeklenebilir API katmanları, güvenli kimlik doğrulama ve veri modelleme.",
    items: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "Microservices"],
    Icon: FaDatabase,
  },
  {
    title: "Bulut & DevOps",
    body: "Production ortamları için CI/CD, container orchestration ve izleme altyapısı.",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions"],
    Icon: FaCloud,
  },
];

export default function TechnologiesPage() {
  return (
    <SitePageLayout>
      <article className="company-page">
        <div className="company-shell">
          <CompanyHero
            title={technologiesPage.title}
            lead={technologiesPage.hero}
            meta={[
              { label: "Frontend & UI", Icon: FaCode },
              { label: "Backend & Veri", Icon: FaDatabase },
              { label: "Bulut & DevOps", Icon: FaCloud },
            ]}
          />

          <CompanyBlock
            title="Kullandığımız teknolojiler"
            intro="Projenin ihtiyacına göre doğru aracı seçeriz — gösteriş için değil, sürdürülebilir sonuç için."
            titleId="tech-grid"
          >
            <div className="tech-grid-10">
              {technologies.map((tech) => (
                <div key={tech.name} className="tech-cell">
                  <div className="tech-cell__icon">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/tech-icons/${tech.iconName}.svg`}
                      alt={`${tech.name} logosu`}
                      width={40}
                      height={40}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="tech-cell__name">{tech.name}</p>
                </div>
              ))}
            </div>
          </CompanyBlock>

          <CompanyBlock
            title="Stack yaklaşımımız"
            intro="Her katmanda kanıtlanmış araçlarla hızlı, bakımı kolay sistemler kurarız."
            titleId="tech-groups"
          >
            <div className="company-grid-3">
              {stackGroups.map((group) => (
                <div key={group.title} className="company-item company-item--rule">
                  <div className="company-item__head">
                    <CompanyIcon Icon={group.Icon} />
                    <h3>{group.title}</h3>
                  </div>
                  <p>{group.body}</p>
                  <ul className="tech-tags">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CompanyBlock>

          <CompanyCta
            text="Stack seçimini projenize göre netleştirmek için ücretsiz keşif görüşmesi planlayın."
            secondaryHref="/surec/"
            secondaryLabel="Proje süreci"
          />
        </div>
      </article>
    </SitePageLayout>
  );
}
