import type { HubContent, ProjectContent } from "@/types/content";

export const projectsHub: HubContent = {
  title: "Projeler",
  description: "Seçili yazılım projelerimiz — placeholder içerik.",
  intro:
    "Web, mobil ve kurumsal yazılım projelerinden örnekler. Detay sayfaları placeholder metin içerir; içerikler düzenlenecek.",
  basePath: "/projeler/",
  items: [
    {
      slug: "kurumsal-web-platformu",
      title: "Kurumsal Web Platformu",
      excerpt: "Çok dilli kurumsal site ve içerik yönetimi altyapısı.",
    },
    {
      slug: "mobil-saha-uygulamasi",
      title: "Mobil Saha Uygulaması",
      excerpt: "Saha ekipleri için offline destekli mobil uygulama.",
    },
    {
      slug: "e-ticaret-entegrasyonu",
      title: "E-Ticaret Entegrasyonu",
      excerpt: "Ödeme, kargo ve stok senkronizasyonu projesi.",
    },
  ],
};

export const projectPages: Record<string, ProjectContent> = {
  "kurumsal-web-platformu": {
    slug: "kurumsal-web-platformu",
    title: "Kurumsal Web Platformu",
    description: "Kurumsal web platformu projesi — placeholder.",
    hero: "Marka kimliğine uygun, SEO odaklı kurumsal web sitesi ve admin paneli.",
    sector: "Kurumsal",
    stack: ["Next.js", "TypeScript", "Headless CMS"],
    outcome: "Sayfa yükleme süresinde iyileşme ve içerik güncelleme süresinde kısalma.",
    sections: [
      {
        heading: "Proje kapsamı",
        body: "Tasarım, frontend geliştirme ve içerik yönetim entegrasyonu.",
        bullets: ["Responsive tasarım", "Çok dilli yapı", "SEO altyapısı"],
      },
    ],
  },
  "mobil-saha-uygulamasi": {
    slug: "mobil-saha-uygulamasi",
    title: "Mobil Saha Uygulaması",
    description: "Mobil saha uygulaması projesi — placeholder.",
    hero: "Saha operasyonlarını dijitalleştiren iOS ve Android uygulaması.",
    sector: "Lojistik",
    stack: ["React Native", "Node.js", "PostgreSQL"],
    outcome: "Saha raporlama süresinde ölçülebilir azalma.",
    sections: [
      {
        heading: "Öne çıkan özellikler",
        body: "Offline veri senkronizasyonu ve konum tabanlı görev yönetimi.",
        bullets: ["Offline mod", "GPS takibi", "Push bildirim"],
      },
    ],
  },
  "e-ticaret-entegrasyonu": {
    slug: "e-ticaret-entegrasyonu",
    title: "E-Ticaret Entegrasyonu",
    description: "E-ticaret entegrasyon projesi — placeholder.",
    hero: "Pazar yeri, ödeme ve kargo sistemleri ile entegre e-ticaret altyapısı.",
    sector: "Perakende",
    stack: ["Next.js", "Stripe", "REST API"],
    outcome: "Sipariş işleme sürecinin otomasyonu.",
    sections: [
      {
        heading: "Entegrasyonlar",
        body: "Ödeme gateway, kargo ve stok sistemleri ile çift yönlü senkronizasyon.",
        bullets: ["Ödeme", "Kargo API", "Stok senkronizasyonu"],
      },
    ],
  },
};

export const projectSlugs = Object.keys(projectPages);

export function getProject(slug: string) {
  return projectPages[slug] ?? null;
}
