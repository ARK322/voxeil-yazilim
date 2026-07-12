import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type SectionMeta = {
  path: string;
  title: string;
  description: string;
};

export const sectionPages = {
  hizmetler: {
    path: "/hizmetler/",
    title: "Yazılım Geliştirme Hizmetlerimiz | Voxeil",
    description:
      "Web geliştirme, mobil uygulama, e-ticaret, bulut ve dijital dönüşüm hizmetleri. Ankara merkezli Voxeil yazılım şirketi.",
  },
  surec: {
    path: "/surec/",
    title: "Yazılım Proje Sürecimiz | Voxeil",
    description:
      "Analiz, tasarım, geliştirme, test ve canlıya alma adımlarıyla şeffaf yazılım proje süreci. Voxeil Ankara yazılım şirketi.",
  },
  endustriyelCozumler: {
    path: "/endustriyel-cozumler/",
    title: "Sektörel Yazılım Çözümleri | Voxeil",
    description:
      "Üretim, sağlık, finans, eğitim, lojistik ve turizm sektörlerine özel yazılım çözümleri. Voxeil Ankara.",
  },
  nedenBiz: {
    path: "/neden-biz/",
    title: "Neden Voxeil Yazılım? | Ankara Yazılım Şirketi",
    description:
      "Hızlı teslimat, yenilikçi çözümler ve güvenilir yazılım ortaklığı. Ankara merkezli Voxeil ekibi.",
  },
  ekibimiz: {
    path: "/ekibimiz/",
    title: "Voxeil Yazılım Ekibi | Ankara",
    description:
      "Voxeil Yazılım ve Mühendislik ekibi: UI/UX, DevOps, backend ve mimari uzmanları.",
  },
  teknolojiler: {
    path: "/teknolojiler/",
    title: "Yazılım Teknolojilerimiz | Voxeil",
    description:
      "React, Next.js, TypeScript, AWS, Azure, Docker ve modern yazılım teknolojileri stack'i.",
  },
  sss: {
    path: "/sss/",
    title: "Yazılım Hizmetleri SSS | Voxeil",
    description:
      "Voxeil yazılım hizmetleri hakkında sık sorulan sorular: proje süreci, destek, Ankara dışı çalışma.",
  },
  iletisim: {
    path: "/iletisim/",
    title: "Ankara Yazılım Şirketi İletişim | Voxeil",
    description:
      "Voxeil ile iletişime geçin. Ankara Çankaya. Telefon: +90 (530) 401 06 75. Ücretsiz keşif görüşmesi.",
  },
} as const satisfies Record<string, SectionMeta>;

export function createSectionMetadata(key: keyof typeof sectionPages): Metadata {
  const page = sectionPages[key];
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteConfig.url}${page.path}`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
  };
}

export const mainNavItems = [
  { label: "Hizmetlerimiz", href: sectionPages.hizmetler.path },
  { label: "Süreç", href: sectionPages.surec.path },
  { label: "Neden Biz?", href: sectionPages.nedenBiz.path },
  { label: "Ekibimiz", href: sectionPages.ekibimiz.path },
] as const;

export const sectionRoutes = [
  { href: sectionPages.hizmetler.path, label: "Hizmetlerimiz", priority: 0.9 },
  { href: sectionPages.surec.path, label: "Süreç", priority: 0.7 },
  { href: sectionPages.endustriyelCozumler.path, label: "Endüstriyel Çözümler", priority: 0.7 },
  { href: sectionPages.nedenBiz.path, label: "Neden Biz?", priority: 0.7 },
  { href: sectionPages.ekibimiz.path, label: "Ekibimiz", priority: 0.7 },
  { href: sectionPages.teknolojiler.path, label: "Teknolojiler", priority: 0.6 },
  { href: sectionPages.sss.path, label: "SSS", priority: 0.6 },
  { href: sectionPages.iletisim.path, label: "İletişim", priority: 0.8 },
] as const;
