export const SERVICE_SECTION_ID = "hizmetlerimiz";

export const serviceNavTabs = [
  { slug: "web", label: "Web Geliştirme", tabIndex: 0 },
  { slug: "mobil", label: "Mobil Uygulama", tabIndex: 1 },
  { slug: "eticaret", label: "E-Ticaret Çözümleri", tabIndex: 2 },
  { slug: "danismanlik", label: "Danışmanlık & Destek", tabIndex: 3 },
  { slug: "bulut", label: "Bulut Çözümleri", tabIndex: 4 },
] as const;

export const SERVICE_TAB_EVENT = "voxeil:service-tab";

export function serviceTabHash(slug: string) {
  return `hizmet-${slug}`;
}

export function dispatchServiceTab(tabIndex: number) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(SERVICE_TAB_EVENT, { detail: { tabIndex } })
  );
}

export function parseServiceHash(hash: string): number | null {
  const match = serviceNavTabs.find((tab) => serviceTabHash(tab.slug) === hash);
  return match?.tabIndex ?? null;
}

export function getServiceTabByIndex(tabIndex: number) {
  return serviceNavTabs.find((tab) => tab.tabIndex === tabIndex);
}
