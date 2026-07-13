import HubCardGrid from "./HubCardGrid";
import PageHero from "./PageHero";
import SitePageLayout from "./SitePageLayout";
import type { HubContent } from "@/types/content";

type HubPageProps = {
  hub: HubContent;
  title?: string;
  intro?: string;
};

export default function HubPage({ hub, title, intro }: HubPageProps) {
  return (
    <SitePageLayout>
      <section className="site-section">
        <div className="site-container max-w-4xl mx-auto">
          <PageHero title={title ?? hub.title} description={intro ?? hub.intro} />
          <HubCardGrid hub={hub} />
        </div>
      </section>
    </SitePageLayout>
  );
}
