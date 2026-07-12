import { createSectionMetadata } from "@/lib/section-pages";
import PageShell from "@/components/layout/PageShell";
import WhyUs from "@/components/neden-biz/WhyUs";

export const metadata = createSectionMetadata("nedenBiz");

export default function NedenBizPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Neden Biz?" },
      ]}
    >
      <WhyUs />
    </PageShell>
  );
}
