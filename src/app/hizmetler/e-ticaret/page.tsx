import ServicePageContent from "@/components/hizmetler/ServicePageContent";
import { createServiceMetadata } from "@/lib/page-content";

export const metadata = createServiceMetadata("e-ticaret");

export default function ETicaretPage() {
  return <ServicePageContent slug="e-ticaret" />;
}
