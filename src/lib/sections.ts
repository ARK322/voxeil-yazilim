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

export type NavMegaColumn = {
  title: string;
  description?: string;
  items: NavLinkItem[];
};

export type NavGroup = {
  id: string;
  label: string;
  /** Panel üst açıklaması */
  description?: string;
  /** Mega menü panelindeki sütunlar — yalnızca bu gruba ait */
  columns: NavMegaColumn[];
};

export type FooterLinkColumn = {
  title: string;
  items: NavLinkItem[];
};

export function getNavGroupItems(group: NavGroup): NavLinkItem[] {
  return group.columns.flatMap((column) => column.items);
}

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
    columns: [
      {
        title: "Genel",
        description: "Tüm hizmetlerimize genel bakış.",
        items: [{ label: "Tüm Hizmetler", id: sectionAnchors.hizmetlerimiz }],
      },
      {
        title: "Uygulama Geliştirme",
        description: "Web, mobil ve e-ticaret projeleri.",
        items: [
          { label: "Web Geliştirme", id: sectionAnchors.hizmetlerimiz, serviceTab: 0 },
          { label: "Mobil Uygulama", id: sectionAnchors.hizmetlerimiz, serviceTab: 1 },
          { label: "E-Ticaret Çözümleri", id: sectionAnchors.hizmetlerimiz, serviceTab: 2 },
        ],
      },
      {
        title: "Danışmanlık & Altyapı",
        description: "Teknik destek, bulut ve DevOps.",
        items: [
          { label: "Danışmanlık & Destek", id: sectionAnchors.hizmetlerimiz, serviceTab: 3 },
          { label: "Bulut Çözümleri", id: sectionAnchors.hizmetlerimiz, serviceTab: 4 },
        ],
      },
    ],
  },
  {
    id: "sirket",
    label: "Şirket",
    description: "Sürecimiz, ekibimiz ve Voxeil hakkında bilgi edinin.",
    columns: [
      {
        title: "Süreç",
        description: "Projeye nasıl başlıyoruz?",
        items: [{ label: "Proje Süreci", id: sectionAnchors.surec }],
      },
      {
        title: "Kurumsal",
        description: "Voxeil'i tanıyın.",
        items: [
          { label: "Neden Voxeil?", id: sectionAnchors.nedenBiz },
          { label: "Hakkımızda", id: sectionAnchors.hakkimizda },
        ],
      },
      {
        title: "Ekip",
        description: "Projelerinizi kimler yürütüyor?",
        items: [{ label: "Ekibimiz", id: sectionAnchors.ekibimiz }],
      },
    ],
  },
  {
    id: "cozumler",
    label: "Çözümler",
    description: "Sektörel yazılım, teknoloji yığını ve sık sorulan sorular.",
    columns: [
      {
        title: "Sektörler",
        description: "Endüstriye özel yazılım çözümleri.",
        items: [{ label: "Sektörel Yazılım", id: sectionAnchors.endustriyelCozumler }],
      },
      {
        title: "Teknoloji",
        description: "Kullandığımız stack ve araçlar.",
        items: [{ label: "Teknoloji Stack", id: sectionAnchors.teknolojiler }],
      },
      {
        title: "Destek",
        description: "Sık sorulan sorular ve yanıtlar.",
        items: [{ label: "SSS", id: sectionAnchors.sss }],
      },
    ],
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
