import type { HubContent, PageContent } from "@/types/content";

export const solutionsHub: HubContent = {
  title: "Yazılım Çözümleri",
  description: "Sektörel yazılım çözümleri ve dikey uygulamalar — placeholder.",
  intro:
    "Farklı sektörler için özelleştirilmiş yazılım çözümleri geliştiriyoruz. Sektörel sayfalar placeholder içerik taşır.",
  basePath: "/cozumler/sektorel/",
  items: [
    { slug: "uretim", title: "Üretim", excerpt: "Üretim planlama, IoT entegrasyonu ve operasyon panelleri." },
    { slug: "saglik", title: "Sağlık", excerpt: "Hasta yönetimi, randevu ve klinik süreç otomasyonları." },
    { slug: "finans", title: "Finans", excerpt: "Ödeme altyapıları, raporlama ve uyumluluk sistemleri." },
    { slug: "egitim", title: "Eğitim", excerpt: "LMS, öğrenci portalleri ve eğitim yönetim platformları." },
    { slug: "lojistik", title: "Lojistik", excerpt: "Depo, filo ve teslimat takip yazılımları." },
    { slug: "turizm", title: "Turizm", excerpt: "Rezervasyon, kanal yönetimi ve misafir deneyimi çözümleri." },
  ],
};

export const sectorPages: Record<string, PageContent> = {
  uretim: {
    slug: "uretim",
    title: "Üretim Yazılım Çözümleri",
    description: "Üretim sektörü yazılım çözümleri — placeholder.",
    hero: "Üretim hatları, stok ve kalite süreçlerinizi dijitalleştiren özel yazılımlar.",
    sections: [
      {
        heading: "Çözüm alanları",
        body: "ERP entegrasyonları, üretim izleme ve saha uygulamaları.",
        bullets: ["Üretim planlama", "IoT veri toplama", "Kalite kontrol panelleri"],
      },
    ],
  },
  saglik: {
    slug: "saglik",
    title: "Sağlık Yazılım Çözümleri",
    description: "Sağlık sektörü yazılım çözümleri — placeholder.",
    hero: "Klinik ve sağlık kurumları için güvenli, KVKK uyumlu yazılım altyapıları.",
    sections: [
      {
        heading: "Odak alanlar",
        body: "Randevu, hasta kayıt ve operasyonel süreç yönetimi.",
        bullets: ["Hasta portalı", "Randevu sistemi", "Raporlama"],
      },
    ],
  },
  finans: {
    slug: "finans",
    title: "Finans Yazılım Çözümleri",
    description: "Finans sektörü yazılım çözümleri — placeholder.",
    hero: "Güvenli ödeme, mutabakat ve finansal raporlama sistemleri.",
    sections: [
      {
        heading: "Hizmetler",
        body: "Fintech entegrasyonları ve kurumsal finans panelleri.",
        bullets: ["Ödeme gateway", "Mutabakat", "Risk raporlama"],
      },
    ],
  },
  egitim: {
    slug: "egitim",
    title: "Eğitim Yazılım Çözümleri",
    description: "Eğitim sektörü yazılım çözümleri — placeholder.",
    hero: "Okul, kurs ve kurumsal eğitim platformları.",
    sections: [
      {
        heading: "Platform özellikleri",
        body: "Öğrenme yönetimi ve içerik dağıtım altyapıları.",
        bullets: ["LMS", "Canlı ders entegrasyonu", "Sertifikasyon"],
      },
    ],
  },
  lojistik: {
    slug: "lojistik",
    title: "Lojistik Yazılım Çözümleri",
    description: "Lojistik sektörü yazılım çözümleri — placeholder.",
    hero: "Depo, filo ve son mil teslimat operasyonlarını yöneten yazılımlar.",
    sections: [
      {
        heading: "Operasyonel çözümler",
        body: "Gerçek zamanlı takip ve rota optimizasyonu.",
        bullets: ["WMS", "Filo takibi", "Teslimat bildirimleri"],
      },
    ],
  },
  turizm: {
    slug: "turizm",
    title: "Turizm Yazılım Çözümleri",
    description: "Turizm sektörü yazılım çözümleri — placeholder.",
    hero: "Otel, acente ve rezervasyon kanalları için entegre çözümler.",
    sections: [
      {
        heading: "Dijital kanallar",
        body: "Rezervasyon motoru ve kanal yönetimi.",
        bullets: ["Booking engine", "Channel manager", "Misafir CRM"],
      },
    ],
  },
};

export const sectorSlugs = Object.keys(sectorPages);

export function getSector(slug: string) {
  return sectorPages[slug] ?? null;
}
