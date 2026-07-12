import { createSectionMetadata } from "@/lib/section-pages";
import PageShell from "@/components/layout/PageShell";
import IndustrialSolutions from "@/components/endustriyel-cozumler/IndustrialSolutions";

export const metadata = createSectionMetadata("endustriyelCozumler");

export default function EndustriyelCozumlerPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Endüstriyel Çözümler" },
      ]}
    >
      <IndustrialSolutions />
    </PageShell>
  );
}
