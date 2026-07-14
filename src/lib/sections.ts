import { serviceNavTabs } from "@/lib/services";
import { solutionsHub } from "@/components/solutions/content";
import { projectsHub } from "@/components/projects/content";

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
  projeler: "projeler",
} as const;

export type SectionId = (typeof sectionAnchors)[keyof typeof sectionAnchors];

export const pagePaths = {
  hizmetler: "/hizmetler/",
  cozumler: "/cozumler/",
  webGelistirme: "/hizmetler/web-gelistirme/",
  mobilUygulama: "/hizmetler/mobil-uygulama/",
  eTicaret: "/hizmetler/e-ticaret/",
  danismanlik: "/hizmetler/danismanlik/",
  bulut: "/hizmetler/bulut/",
  backendMicroservices: "/hizmetler/backend-microservices/",
  hakkimizda: "/hakkimizda/",
  nedenBiz: "/neden-biz/",
  surec: "/surec/",
  ekibimiz: "/ekibimiz/",
  teknolojiler: "/teknolojiler/",
  sss: "/sss/",
  iletisim: "/iletisim/",
} as const;

export type NavLinkItem = {
  label: string;
  id: SectionId;
  href?: string;
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
  description?: string;
  columns: NavMegaColumn[];
};

export type FooterLinkColumn = {
  title: string;
  items: NavLinkItem[];
};

export function getNavGroupItems(group: NavGroup): NavLinkItem[] {
  return group.columns.flatMap((column) => column.items);
}

const sectionPagePaths: Partial<Record<SectionId, string>> = {
  [sectionAnchors.hizmetlerimiz]: pagePaths.hizmetler,
  [sectionAnchors.endustriyelCozumler]: pagePaths.cozumler,
  [sectionAnchors.teknolojiler]: pagePaths.teknolojiler,
  [sectionAnchors.sss]: pagePaths.sss,
  [sectionAnchors.iletisim]: pagePaths.iletisim,
  [sectionAnchors.hakkimizda]: pagePaths.hakkimizda,
  [sectionAnchors.nedenBiz]: pagePaths.nedenBiz,
  [sectionAnchors.surec]: pagePaths.surec,
  [sectionAnchors.ekibimiz]: pagePaths.ekibimiz,
};

export function sectionHref(id: string) {
  return sectionPagePaths[id as SectionId] ?? `/${id}/`;
}

export function navItemHref(item: NavLinkItem) {
  if (item.href) {
    return item.href;
  }
  if (item.serviceTab !== undefined) {
    const tab = serviceNavTabs[item.serviceTab];
    if (tab) {
      return pagePaths.hizmetler;
    }
  }
  return sectionHref(item.id);
}

const serviceFooterItems: NavLinkItem[] = [
  { label: "Web Geliştirme", id: sectionAnchors.hizmetlerimiz, href: pagePaths.webGelistirme },
  { label: "Mobil Uygulama", id: sectionAnchors.hizmetlerimiz, href: pagePaths.mobilUygulama },
  { label: "E-Ticaret Çözümleri", id: sectionAnchors.hizmetlerimiz, href: pagePaths.eTicaret },
  { label: "Danışmanlık & Destek", id: sectionAnchors.hizmetlerimiz, href: pagePaths.danismanlik },
  { label: "Bulut Çözümleri", id: sectionAnchors.hizmetlerimiz, href: pagePaths.bulut },
  {
    label: "Backend & Microservices",
    id: sectionAnchors.hizmetlerimiz,
    href: pagePaths.backendMicroservices,
  },
];

const sectorNavItems: NavLinkItem[] = solutionsHub.items.map((item) => ({
  label: item.title,
  id: sectionAnchors.endustriyelCozumler,
  href: `${solutionsHub.basePath}${item.slug}/`,
}));

const projectNavItems: NavLinkItem[] = projectsHub.items.map((item) => ({
  label: item.title,
  id: sectionAnchors.projeler,
  href: `${projectsHub.basePath}${item.slug}/`,
}));

/** Header mega menü — 4 grup */
export const navGroups: NavGroup[] = [
  {
    id: "hizmetler",
    label: "Hizmetler",
    description: "Web, mobil, e-ticaret ve bulut altyapısı hizmetlerimiz.",
    columns: [
      {
        title: "Uygulama Geliştirme",
        description: "Web, mobil ve e-ticaret projeleri.",
        items: [
          { label: "Web Geliştirme", id: sectionAnchors.hizmetlerimiz, href: pagePaths.webGelistirme },
          { label: "Mobil Uygulama", id: sectionAnchors.hizmetlerimiz, href: pagePaths.mobilUygulama },
          { label: "E-Ticaret Çözümleri", id: sectionAnchors.hizmetlerimiz, href: pagePaths.eTicaret },
        ],
      },
      {
        title: "Altyapı & Danışmanlık",
        description: "Teknik destek, bulut ve backend sistemleri.",
        items: [
          { label: "Danışmanlık & Destek", id: sectionAnchors.hizmetlerimiz, href: pagePaths.danismanlik },
          { label: "Bulut Çözümleri", id: sectionAnchors.hizmetlerimiz, href: pagePaths.bulut },
          {
            label: "Backend & Microservices",
            id: sectionAnchors.hizmetlerimiz,
            href: pagePaths.backendMicroservices,
          },
        ],
      },
    ],
  },
  {
    id: "cozumler",
    label: "Çözümler",
    description: "Endüstriye özel yazılım çözümleri ve sektörel uygulamalar.",
    columns: [
      {
        title: "Sektörler",
        description: "Dikey yazılım çözümlerimiz.",
        items: sectorNavItems.slice(0, 4),
      },
      {
        title: "Diğer Sektörler",
        description: "Kalan sektör sayfalarına hızlı erişim.",
        items: sectorNavItems.slice(4),
      },
    ],
  },
  {
    id: "kurumsal",
    label: "Kurumsal",
    description: "Voxeil'i tanıyın — ekip, süreç ve çalışma modelimiz.",
    columns: [
      {
        title: "Voxeil",
        description: "Kimiz, nasıl çalışıyoruz?",
        items: [
          { label: "Hakkımızda", id: sectionAnchors.hakkimizda, href: pagePaths.hakkimizda },
          { label: "Neden Voxeil?", id: sectionAnchors.nedenBiz, href: pagePaths.nedenBiz },
          { label: "Proje Süreci", id: sectionAnchors.surec, href: pagePaths.surec },
          { label: "Ekibimiz", id: sectionAnchors.ekibimiz, href: pagePaths.ekibimiz },
        ],
      },
    ],
  },
  {
    id: "projeler",
    label: "Projeler",
    description: "Seçili yazılım projelerimizden örnekler.",
    columns: [
      {
        title: "Referanslar",
        description: "Web, mobil ve kurumsal projeler.",
        items: projectNavItems,
      },
    ],
  },
] as const;

/** Footer link sütunları (Marka + bu 3 + İletişim = 5 sütun lg'de) */
export const footerLinkColumns: FooterLinkColumn[] = [
  {
    title: "Hizmetler",
    items: serviceFooterItems,
  },
  {
    title: "Kurumsal",
    items: [
      { label: "Hakkımızda", id: sectionAnchors.hakkimizda, href: pagePaths.hakkimizda },
      { label: "Neden Voxeil?", id: sectionAnchors.nedenBiz, href: pagePaths.nedenBiz },
      { label: "Proje Süreci", id: sectionAnchors.surec, href: pagePaths.surec },
      { label: "Ekibimiz", id: sectionAnchors.ekibimiz, href: pagePaths.ekibimiz },
    ] satisfies NavLinkItem[],
  },
  {
    title: "Keşfet",
    items: [
      { label: "Endüstriyel Çözümler", id: sectionAnchors.endustriyelCozumler, href: pagePaths.cozumler },
      { label: "Teknoloji Stack", id: sectionAnchors.teknolojiler, href: pagePaths.teknolojiler },
      { label: "SSS", id: sectionAnchors.sss, href: pagePaths.sss },
    ] satisfies NavLinkItem[],
  },
] as const;
