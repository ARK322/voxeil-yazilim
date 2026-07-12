import { createSectionMetadata } from "@/lib/section-pages";
import PageShell from "@/components/layout/PageShell";
import Process from "@/components/surec/Process";

export const metadata = createSectionMetadata("surec");

export default function SurecPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Süreç" },
      ]}
    >
      <Process />
    </PageShell>
  );
}
