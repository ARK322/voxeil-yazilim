export const sectionAnchors = {
  hizmetlerimiz: "hizmetlerimiz",
  surec: "surec",
  endustriyelCozumler: "endustriyel-cozumler",
  nedenBiz: "neden-biz",
  hakkimizda: "hakkimizda",
  ekibimiz: "ekibimiz",
  teknolojiler: "teknolojiler",
  sss: "sss",
  iletisim: "iletisim",
} as const;

export function sectionHref(id: string, onHome = false) {
  return onHome ? `#${id}` : `/#${id}`;
}

export const mainNavItems = [
  { label: "Hizmetlerimiz", id: sectionAnchors.hizmetlerimiz },
  { label: "Süreç", id: sectionAnchors.surec },
  { label: "Neden Biz?", id: sectionAnchors.nedenBiz },
  { label: "Ekibimiz", id: sectionAnchors.ekibimiz },
] as const;

export const serviceFooterLabels = [
  "Web Geliştirme",
  "Mobil Uygulama",
  "E-Ticaret",
  "Dijital Dönüşüm",
] as const;

export const footerLinks = [
  { id: sectionAnchors.hizmetlerimiz, label: "Hizmetlerimiz" },
  { id: sectionAnchors.surec, label: "Süreç" },
  { id: sectionAnchors.endustriyelCozumler, label: "Endüstriyel Çözümler" },
  { id: sectionAnchors.nedenBiz, label: "Neden Biz?" },
  { id: sectionAnchors.hakkimizda, label: "Hakkımızda" },
  { id: sectionAnchors.ekibimiz, label: "Ekibimiz" },
  { id: sectionAnchors.teknolojiler, label: "Teknolojiler" },
  { id: sectionAnchors.sss, label: "SSS" },
  { id: sectionAnchors.iletisim, label: "İletişim" },
] as const;
