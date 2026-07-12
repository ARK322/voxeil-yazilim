import { createSectionMetadata } from "@/lib/section-pages";
import PageShell from "@/components/layout/PageShell";
import Contact from "@/components/iletisim/Contact";

export const metadata = createSectionMetadata("iletisim");

export default function IletisimPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "İletişim" },
      ]}
    >
      <Contact />
    </PageShell>
  );
}
