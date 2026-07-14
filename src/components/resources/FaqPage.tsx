import FaqAccordion from "@/components/resources/FaqAccordion";
import PageCta from "@/components/shared/templates/PageCta";
import PageHero from "@/components/shared/templates/PageHero";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import { faqPageContent } from "@/components/resources/content";

export default function FaqPage() {
  return (
    <SitePageLayout>
      <section className="site-section relative overflow-x-clip">
        <div className="site-container max-w-5xl mx-auto">
          <PageHero title={faqPageContent.title} description={faqPageContent.hero} />
          <FaqAccordion />
          <PageCta />
        </div>
      </section>
    </SitePageLayout>
  );
}
