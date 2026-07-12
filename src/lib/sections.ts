import { serviceNavTabs, serviceTabHash } from "@/lib/services";

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
  /** Hizmetler bölümünde açılacak sekme (0–4) */
  serviceTab?: number;
};

export type NavGroup = {
  id: string;
  label: string;
  /** Mega menü sütun açıklaması */
  description?: string;
  items: NavLinkItem[];
};

export type FooterLinkColumn = {
  title: string;
  items: NavLinkItem[];
};

export function sectionHref(id: string, onHome = false) {
  return onHome ? `#${id}` : `/#${id}`;
}

export function navItemHref(item: NavLinkItem, onHome = false) {
  if (item.serviceTab !== undefined) {
    const tab = serviceNavTabs[item.serviceTab];
    if (tab) {
      const hash = serviceTabHash(tab.slug);
      return onHome ? `#${hash}` : `/#${hash}`;
    }
  }
  return sectionHref(item.id, onHome);
}

const serviceNavItems: NavLinkItem[] = [
  { label: "Tüm Hizmetler", id: sectionAnchors.hizmetlerimiz },
  ...serviceNavTabs.map((tab) => ({
    label: tab.label,
    id: sectionAnchors.hizmetlerimiz,
    serviceTab: tab.tabIndex,
  })),
];

const serviceFooterItems: NavLinkItem[] = serviceNavTabs.map((tab) => ({
  label: tab.label,
  id: sectionAnchors.hizmetlerimiz,
  serviceTab: tab.tabIndex,
}));

/** Yazılım şirketi nav grupları — header mega menü + mobil accordion */
export const navGroups: NavGroup[] = [
  {
    id: "hizmetler",
    label: "Hizmetler",
    description: "Web, mobil, e-ticaret ve bulut altyapısı hizmetlerimiz.",
    items: serviceNavItems,
  },
  {
    id: "sirket",
    label: "Şirket",
    description: "Sürecimiz, ekibimiz ve Voxeil hakkında bilgi edinin.",
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
    description: "Sektörel yazılım, teknoloji yığını ve sık sorulan sorular.",
    items: [
      { label: "Sektörel Yazılım", id: sectionAnchors.endustriyelCozumler },
      { label: "Teknoloji Stack", id: sectionAnchors.teknolojiler },
      { label: "SSS", id: sectionAnchors.sss },
    ] satisfies NavLinkItem[],
  },
] as const;

/**
 * Footer link sütunları (Marka + bu 2 + İletişim = 4 sütun).
 */
export const footerLinkColumns: FooterLinkColumn[] = [
  {
    title: "Hizmetler",
    items: serviceFooterItems,
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
