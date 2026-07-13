import type { ContentBlock } from "@/types/content";

type ContentSectionsProps = {
  sections: ContentBlock[];
};

export default function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <div className="space-y-4 sm:space-y-5">
      {sections.map((section) => (
        <article key={section.heading} className="site-card p-5 sm:p-6">
          <h2 className="site-heading mb-3">{section.heading}</h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed mb-3 last:mb-0">
            {section.body}
          </p>
          {section.bullets?.length ? (
            <ul className="space-y-2 text-sm sm:text-base text-muted-secondary">
              {section.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-orange shrink-0" aria-hidden="true">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}
