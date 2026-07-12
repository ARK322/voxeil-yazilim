import ServicePageContent from "@/components/hizmetler/ServicePageContent";
import { createServiceMetadata } from "@/lib/page-content";

export const metadata = createServiceMetadata("dijital-donusum");

export default function DijitalDonusumPage() {
  return <ServicePageContent slug="dijital-donusum" />;
}
