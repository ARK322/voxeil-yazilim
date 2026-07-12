import ServicePageContent from "@/components/hizmetler/ServicePageContent";
import { createServiceMetadata } from "@/lib/page-content";

export const metadata = createServiceMetadata("web-gelistirme");

export default function WebGelistirmePage() {
  return <ServicePageContent slug="web-gelistirme" />;
}
