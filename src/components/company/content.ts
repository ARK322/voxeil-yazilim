import type { PageContent } from "@/types/content";

export const companyPages: Record<string, PageContent> = {
  hakkimizda: {
    slug: "hakkimizda",
    title: "Hakkımızda",
    description: "Voxeil Yazılım ve Mühendislik hakkında — placeholder içerik.",
    hero: "Ankara merkezli yazılım ve mühendislik ekibimizle dijital dönüşüm projeleri yürütüyoruz.",
    sections: [
      {
        heading: "Biz kimiz?",
        body: "Web, mobil ve bulut altyapısı odaklı yazılım geliştirme şirketiyiz. Placeholder metin.",
      },
      {
        heading: "Nasıl çalışıyoruz?",
        body: "Şeffaf iletişim, sprint bazlı teslimat ve uzun vadeli iş ortaklığı modeli.",
        bullets: ["Keşif ve analiz", "Düzenli demo", "Canlıya alma desteği"],
      },
    ],
  },
  "neden-biz": {
    slug: "neden-biz",
    title: "Neden Voxeil?",
    description: "Voxeil'i tercih etme nedenleri — placeholder.",
    hero: "Hızlı teslimat, modern teknoloji yığını ve müşteri odaklı süreç yönetimi.",
    sections: [
      {
        heading: "Farkımız",
        body: "Teknik derinlik ile iş hedeflerini aynı masada buluşturuyoruz.",
        bullets: ["Modern stack", "Ölçeklenebilir mimari", "Teslim sonrası destek"],
      },
    ],
  },
  surec: {
    slug: "surec",
    title: "Proje Süreci",
    description: "Yazılım proje sürecimiz — placeholder.",
    hero: "Keşiften canlıya almaya kadar disiplinli ve şeffaf bir metodoloji.",
    sections: [
      {
        heading: "Adımlar",
        body: "Her projede izlediğimiz temel fazlar.",
        bullets: ["Analiz", "Tasarım", "Geliştirme", "Test", "Yayına alma"],
      },
    ],
  },
  ekibimiz: {
    slug: "ekibimiz",
    title: "Ekibimiz",
    description: "Voxeil yazılım ekibi — placeholder.",
    hero: "UI/UX, backend, DevOps ve mimari uzmanlıklarını bir araya getiren ekip.",
    sections: [
      {
        heading: "Ekip yapısı",
        body: "Projelerinize doğrudan katılan çekirdek geliştirici ve danışman kadrosu.",
      },
    ],
  },
};

export const companySlugs = Object.keys(companyPages);

export function getCompanyPage(slug: string) {
  return companyPages[slug] ?? null;
}
