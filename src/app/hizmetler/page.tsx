import { createSectionMetadata } from "@/lib/section-pages";
import PageShell from "@/components/layout/PageShell";
import Services from "@/components/hizmetler/Services";

export const metadata = createSectionMetadata("hizmetler");

export default function HizmetlerPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Hizmetlerimiz" },
      ]}
    >
      <Services />
    </PageShell>
  );
}
