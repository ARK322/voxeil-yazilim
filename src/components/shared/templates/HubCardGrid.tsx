import Link from "next/link";
import type { HubContent } from "@/types/content";

type HubCardGridProps = {
  hub: HubContent;
};

export default function HubCardGrid({ hub }: HubCardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {hub.items.map((item) => (
        <Link
          key={item.slug}
          href={`${hub.basePath}${item.slug}/`}
          className="site-card site-card--hover block p-5 sm:p-6 h-full"
        >
          <h2 className="site-heading mb-2">{item.title}</h2>
          <p className="text-muted text-sm leading-relaxed">{item.excerpt}</p>
        </Link>
      ))}
    </div>
  );
}
