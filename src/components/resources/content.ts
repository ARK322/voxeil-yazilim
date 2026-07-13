import type { PageContent } from "@/types/content";

export const technologiesPage: PageContent = {
  slug: "teknolojiler",
  title: "Teknoloji Stack",
  description: "Voxeil teknoloji yığını — placeholder içerik.",
  hero: "Modern web, mobil ve bulut teknolojileri ile sürdürülebilir yazılım projeleri geliştiriyoruz.",
  sections: [
    {
      heading: "Frontend",
      body: "React, Next.js, TypeScript ve Tailwind CSS ile performanslı arayüzler.",
      bullets: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      heading: "Backend & Altyapı",
      body: "Node.js, .NET, PostgreSQL, Redis ve container tabanlı deployment.",
      bullets: ["Node.js / .NET", "PostgreSQL", "Docker / Kubernetes", "AWS / Azure"],
    },
  ],
};

export const faqPageContent: PageContent = {
  slug: "sss",
  title: "Sık Sorulan Sorular",
  description: "Voxeil hakkında sık sorulan sorular — placeholder.",
  hero: "Proje süreci, hizmet kapsamı ve destek modelimiz hakkında sık sorulan sorular.",
  sections: [],
};
