import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { aboutPageContent } from "@/lib/page-content";
import { serviceRoutes } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: aboutPageContent.metaTitle,
  description: aboutPageContent.metaDescription,
  alternates: {
    canonical: "/hakkimizda/",
  },
  openGraph: {
    title: aboutPageContent.metaTitle,
    description: aboutPageContent.metaDescription,
    url: `${siteConfig.url}/hakkimizda/`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <PageShell narrow
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Hakkımızda" },
      ]}
    >
      <article>
        <header className="mb-10">
          <h1 className="site-section__title text-left mb-4">{aboutPageContent.h1}</h1>
          <p className="text-muted text-lg leading-relaxed">{aboutPageContent.intro}</p>
        </header>

        <div className="space-y-10 text-muted leading-relaxed">
          {aboutPageContent.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mb-4">
                  {paragraph}
                </p>
              ))}
              {section.list ? (
                <ul className="list-disc list-inside space-y-2 text-muted-secondary">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-12 pt-8 border-t border-gray-800/50">
          <h2 className="text-xl font-semibold text-white mb-4">Hizmetlerimiz</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {serviceRoutes.map((route) => (
              <li key={route.href}>
                <Link href={route.href} className="site-link text-base">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/iletisim/" className="site-btn-primary text-center">
            Bizimle İletişime Geçin
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className="site-btn-ghost text-center"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <address className="mt-8 not-italic text-muted-secondary text-sm">
          <strong className="text-white block mb-2">{siteConfig.legalName}</strong>
          {siteConfig.address.full}
          <br />
          <a href={`mailto:${siteConfig.email}`} className="site-link">
            {siteConfig.email}
          </a>
        </address>
      </article>
    </PageShell>
  );
}
