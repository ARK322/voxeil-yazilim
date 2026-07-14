import type { HubContent, PageContent } from "@/types/content";

export const servicesHub: HubContent = {
  title: "Yazılım Geliştirme Hizmetleri",
  description:
    "Web, mobil, e-ticaret, backend ve bulut altyapısı hizmetlerimizi keşfedin. Uçtan uca yazılım geliştirme ve danışmanlık.",
  intro:
    "Voxeil olarak stratejiden canlıya almaya kadar uçtan uca yazılım geliştirme, danışmanlık ve DevOps hizmetleri sunuyoruz. Modern web teknolojileri, mobil uygulamalar ve bulut altyapıları ile işletmenizin dijital varlığını güçlendiriyoruz.",
  basePath: "/hizmetler/",
  items: [
    {
      slug: "web-gelistirme",
      title: "Web Geliştirme",
      excerpt: "Kurumsal web siteleri, web uygulamaları ve landing page projeleri.",
    },
    {
      slug: "mobil-uygulama",
      title: "Mobil Uygulama",
      excerpt: "iOS ve Android için native ve cross-platform mobil uygulamalar.",
    },
    {
      slug: "e-ticaret",
      title: "E-Ticaret Çözümleri",
      excerpt: "Ödeme entegrasyonları, stok yönetimi ve müşteri paneli altyapıları.",
    },
    {
      slug: "danismanlik",
      title: "Danışmanlık & Destek",
      excerpt: "Teknik danışmanlık, proje yönetimi ve sürekli destek hizmetleri.",
    },
    {
      slug: "bulut",
      title: "Bulut Çözümleri",
      excerpt: "AWS, Azure, CI/CD ve ölçeklenebilir bulut mimarileri.",
    },
    {
      slug: "backend-microservices",
      title: "Backend & Microservices",
      excerpt: "API tasarımı, microservices mimarisi ve sistem modernizasyonu.",
    },
  ],
};

export const servicePages: Record<string, PageContent> = {
  "web-gelistirme": {
    slug: "web-gelistirme",
    title: "Web Geliştirme",
    description: "Kurumsal web sitesi ve web uygulaması geliştirme hizmetleri — placeholder.",
    hero: "Next.js, React ve TypeScript ile performanslı, SEO uyumlu web projeleri geliştiriyoruz.",
    sections: [
      {
        heading: "Ne sunuyoruz?",
        body: "Kurumsal web sitelerinden SaaS panellerine kadar modern web çözümleri. Placeholder metin.",
        bullets: ["Responsive arayüz", "SEO altyapısı", "Performans optimizasyonu", "Güvenli deployment"],
      },
      {
        heading: "Kimler için?",
        body: "Dijital varlığını güçlendirmek isteyen KOBİ'ler, start-up'lar ve kurumsal ekipler.",
      },
    ],
  },
  "mobil-uygulama": {
    slug: "mobil-uygulama",
    title: "Mobil Uygulama",
    description: "iOS ve Android mobil uygulama geliştirme — placeholder.",
    hero: "Kullanıcı odaklı mobil uygulamalar ile hedef kitlenize her an ulaşın.",
    sections: [
      {
        heading: "Geliştirme kapsamı",
        body: "MVP'den mağaza yayınına kadar uçtan uca mobil proje yönetimi.",
        bullets: ["iOS & Android", "API entegrasyonu", "Push bildirim", "Store optimizasyonu"],
      },
    ],
  },
  "e-ticaret": {
    slug: "e-ticaret",
    title: "E-Ticaret Çözümleri",
    description: "E-ticaret platformu ve entegrasyon hizmetleri — placeholder.",
    hero: "Güvenli ödeme, stok ve sipariş yönetimi ile satış kanallarınızı dijitalleştirin.",
    sections: [
      {
        heading: "Çözüm alanları",
        body: "B2C ve B2B e-ticaret altyapıları, pazar yeri entegrasyonları.",
        bullets: ["Ödeme sistemleri", "Kargo entegrasyonu", "Admin paneli", "Raporlama"],
      },
    ],
  },
  danismanlik: {
    slug: "danismanlik",
    title: "Danışmanlık & Destek",
    description: "Yazılım danışmanlığı ve teknik destek — placeholder.",
    hero: "Teknoloji yol haritanızı birlikte çizelim; sprint bazlı danışmanlık ve bakım desteği sunalım.",
    sections: [
      {
        heading: "Hizmet kapsamı",
        body: "Mevcut ekip ve altyapınıza uygun danışmanlık modeli.",
        bullets: ["Teknik analiz", "Kod review", "Proje yönetimi", "7/24 destek paketleri"],
      },
    ],
  },
  bulut: {
    slug: "bulut",
    title: "Bulut Çözümleri",
    description: "Bulut migrasyon ve DevOps hizmetleri — placeholder.",
    hero: "AWS ve Azure üzerinde ölçeklenebilir, güvenli ve sürdürülebilir altyapılar kuruyoruz.",
    sections: [
      {
        heading: "Altyapı hizmetleri",
        body: "Container, CI/CD ve izleme altyapısı ile production hazırlığı.",
        bullets: ["Cloud migrasyon", "Kubernetes", "CI/CD pipeline", "Monitoring & alerting"],
      },
    ],
  },
  "backend-microservices": {
    slug: "backend-microservices",
    title: "Backend & Microservices",
    description: "Backend geliştirme ve microservices mimarisi — placeholder.",
    hero: "REST/GraphQL API, event-driven mimari ve legacy modernizasyon projeleri.",
    sections: [
      {
        heading: "Teknik odak",
        body: "Ölçeklenebilir sunucu tarafı sistemler ve servis sınırları tasarımı.",
        bullets: ["API tasarımı", "Microservices geçişi", "Mesaj kuyrukları", "Veri migrasyonu"],
      },
    ],
  },
};

export const serviceSlugs = Object.keys(servicePages);

export function getService(slug: string) {
  return servicePages[slug] ?? null;
}
