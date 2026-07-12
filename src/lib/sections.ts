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

export type SectionId = (typeof sectionAnchors)[keyof typeof sectionAnchors];

export type NavLinkItem = {
  label: string;
  id: SectionId;
};

export function sectionHref(id: string, onHome = false) {
  return onHome ? `#${id}` : `/#${id}`;
}

/** Yazılım şirketi nav grupları — header dropdown + mobil accordion */
export const navGroups = [
  {
    id: "hizmetler",
    label: "Hizmetler",
    items: [
      { label: "Tüm Hizmetler", id: sectionAnchors.hizmetlerimiz },
      { label: "Web Geliştirme", id: sectionAnchors.hizmetlerimiz },
      { label: "Mobil Uygulama", id: sectionAnchors.hizmetlerimiz },
      { label: "E-Ticaret Çözümleri", id: sectionAnchors.hizmetlerimiz },
      { label: "Danışmanlık & Destek", id: sectionAnchors.hizmetlerimiz },
      { label: "Bulut Çözümleri", id: sectionAnchors.hizmetlerimiz },
    ] satisfies NavLinkItem[],
  },
  {
    id: "sirket",
    label: "Şirket",
    items: [
      { label: "Proje Süreci", id: sectionAnchors.surec },
      { label: "Neden Voxeil?", id: sectionAnchors.nedenBiz },
      { label: "Hakkımızda", id: sectionAnchors.hakkimizda },
      { label: "Ekibimiz", id: sectionAnchors.ekibimiz },
    ] satisfies NavLinkItem[],
  },
  {
    id: "cozumler",
    label: "Çözümler",
    items: [
      { label: "Sektörel Yazılım", id: sectionAnchors.endustriyelCozumler },
      { label: "Teknoloji Stack", id: sectionAnchors.teknolojiler },
      { label: "SSS", id: sectionAnchors.sss },
    ] satisfies NavLinkItem[],
  },
] as const;

/**
 * Footer link sütunları (Marka + bu 2 + İletişim = 4 sütun).
 * Şirket altında süreç/ekip + sektörel/teknoloji birleşik — yazılım firması sitemap.
 */
export const footerLinkColumns = [
  {
    title: "Hizmetler",
    items: [
      { label: "Web Geliştirme", id: sectionAnchors.hizmetlerimiz },
      { label: "Mobil Uygulama", id: sectionAnchors.hizmetlerimiz },
      { label: "E-Ticaret", id: sectionAnchors.hizmetlerimiz },
      { label: "Danışmanlık & Destek", id: sectionAnchors.hizmetlerimiz },
      { label: "Bulut Çözümleri", id: sectionAnchors.hizmetlerimiz },
    ] satisfies NavLinkItem[],
  },
  {
    title: "Şirket",
    items: [
      { label: "Proje Süreci", id: sectionAnchors.surec },
      { label: "Neden Voxeil?", id: sectionAnchors.nedenBiz },
      { label: "Hakkımızda", id: sectionAnchors.hakkimizda },
      { label: "Ekibimiz", id: sectionAnchors.ekibimiz },
      { label: "Sektörel Yazılım", id: sectionAnchors.endustriyelCozumler },
      { label: "Teknoloji Stack", id: sectionAnchors.teknolojiler },
      { label: "SSS", id: sectionAnchors.sss },
    ] satisfies NavLinkItem[],
  },
] as const;
