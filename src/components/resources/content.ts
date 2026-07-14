import type { PageContent } from "@/types/content";

export const technologiesPage: PageContent = {
  slug: "teknolojiler",
  title: "Teknoloji Stack",
  description: "Voxeil teknoloji yığını: React, Next.js, TypeScript, Node.js, bulut ve DevOps araçları.",
  hero: "Modern stack ile ölçeklenebilir, güvenli ve sürdürülebilir çözümler geliştiriyoruz.",
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
  description: "Proje süreci, backend mimarisi, destek kapsamı ve çalışma modelimiz hakkında sık sorulan sorular.",
  hero: "Proje süreci, hizmet kapsamı, backend mimarisi ve destek modelimiz hakkında en sık sorulan sorular.",
  sections: [],
};
