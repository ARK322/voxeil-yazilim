import ContentSections from "./ContentSections";
import PageCta from "./PageCta";
import PageHero from "./PageHero";
import SitePageLayout from "./SitePageLayout";
import type { PageContent } from "@/types/content";

type ContentPageProps = {
  page: PageContent;
};

export default function ContentPage({ page }: ContentPageProps) {
  return (
    <SitePageLayout>
      <section className="site-section">
        <div className="site-container max-w-4xl mx-auto">
          <PageHero title={page.title} description={page.hero} />
          <ContentSections sections={page.sections} />
          <PageCta />
        </div>
      </section>
    </SitePageLayout>
  );
}
