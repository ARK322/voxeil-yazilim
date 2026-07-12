import { createSectionMetadata } from "@/lib/section-pages";
import PageShell from "@/components/layout/PageShell";
import Faq from "@/components/sss/Faq";

export const metadata = createSectionMetadata("sss");

export default function SssPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "SSS" },
      ]}
    >
      <Faq />
    </PageShell>
  );
}
