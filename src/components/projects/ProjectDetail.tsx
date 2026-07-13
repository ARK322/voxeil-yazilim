import ContentSections from "@/components/shared/templates/ContentSections";
import PageCta from "@/components/shared/templates/PageCta";
import PageHero from "@/components/shared/templates/PageHero";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import type { ProjectContent } from "@/types/content";

type ProjectDetailProps = {
  page: ProjectContent;
};

export default function ProjectDetail({ page }: ProjectDetailProps) {
  return (
    <SitePageLayout>
      <section className="site-section">
        <div className="site-container max-w-4xl mx-auto">
          <PageHero title={page.title} description={page.hero} />

          {(page.sector || page.stack?.length || page.outcome) && (
            <div className="site-card p-5 sm:p-6 mb-6 space-y-4">
              {page.sector ? (
                <p className="text-sm">
                  <span className="text-muted-secondary">Sektör: </span>
                  <span className="text-foreground">{page.sector}</span>
                </p>
              ) : null}
              {page.stack?.length ? (
                <div>
                  <p className="text-muted-secondary text-sm mb-2">Teknoloji</p>
                  <div className="flex flex-wrap gap-2">
                    {page.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-orange/20 bg-black/40 px-3 py-1 text-xs text-muted-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              {page.outcome ? (
                <p className="text-sm text-muted leading-relaxed">
                  <span className="text-foreground font-medium">Sonuç: </span>
                  {page.outcome}
                </p>
              ) : null}
            </div>
          )}

          <ContentSections sections={page.sections} />
          <PageCta />
        </div>
      </section>
    </SitePageLayout>
  );
}
