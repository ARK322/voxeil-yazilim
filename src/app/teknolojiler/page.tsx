import { createSectionMetadata } from "@/lib/section-pages";
import PageShell from "@/components/layout/PageShell";
import Technologies from "@/components/teknolojiler/Technologies";

export const metadata = createSectionMetadata("teknolojiler");

export default function TeknolojilerPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Teknolojiler" },
      ]}
    >
      <Technologies />
    </PageShell>
  );
}
