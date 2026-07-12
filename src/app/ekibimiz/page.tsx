import { createSectionMetadata } from "@/lib/section-pages";
import PageShell from "@/components/layout/PageShell";
import Team from "@/components/ekibimiz/Team";

export const metadata = createSectionMetadata("ekibimiz");

export default function EkibimizPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Ekibimiz" },
      ]}
    >
      <Team />
    </PageShell>
  );
}
