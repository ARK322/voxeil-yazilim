import type { PageContent } from "@/types/content";

export const companyPages: Record<string, PageContent> = {
  hakkimizda: {
    slug: "hakkimizda",
    title: "Hakkımızda",
    description:
      "Voxeil Yazılım ve Mühendislik: Ankara merkezli yazılım stüdyosu. Misyon, vizyon, değerler, hizmet alanları ve kurucu ekip.",
    hero: "Ankara merkezli yazılım ve mühendislik stüdyomuzla web, mobil, e-ticaret, bulut ve dijital dönüşüm projelerinde uçtan uca çözümler üretiyoruz.",
    sections: [],
  },
  "neden-biz": {
    slug: "neden-biz",
    title: "Neden Voxeil?",
    description:
      "Hızlı teslimat, modern stack, şeffaf sprint süreci ve uzun vadeli ortaklık ile Voxeil'i tercih etme nedenleri.",
    hero: "Teknik derinlik ile iş hedeflerinizi aynı masada buluşturuyoruz: zamanında teslimat, ölçülebilir çıktı ve teslim sonrası destek.",
    sections: [],
  },
  surec: {
    slug: "surec",
    title: "Proje Süreci",
    description:
      "Keşiften canlıya almaya Voxeil yazılım proje süreci: analiz, tasarım, sprint geliştirme, test, yayına alma ve destek.",
    hero: "Her projeyi keşiften canlıya almaya kadar şeffaf, sprint bazlı ve ölçülebilir bir metodolojiyle yönetiyoruz.",
    sections: [],
  },
  ekibimiz: {
    slug: "ekibimiz",
    title: "Ekibimiz",
    description:
      "Voxeil çekirdek ekibi: backend mimarisi, UI/UX ve DevOps. Doğrudan iletişim, ortak sahiplenme ve uzun vadeli destek.",
    hero: "Küçük, odaklanmış bir çekirdek ekiple doğrudan iletişim kurar; tasarım, mimari ve operasyonu aynı masa etrafında yürütürüz.",
    sections: [],
  },
};

export const companySlugs = Object.keys(companyPages);

export function getCompanyPage(slug: string) {
  return companyPages[slug] ?? null;
}
