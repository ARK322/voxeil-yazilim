import ServicePageContent from "@/components/hizmetler/ServicePageContent";
import { createServiceMetadata } from "@/lib/page-content";

export const metadata = createServiceMetadata("mobil-uygulama");

export default function MobilUygulamaPage() {
  return <ServicePageContent slug="mobil-uygulama" />;
}
