import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/shared/templates/ContentPage";
import { getSector, sectorSlugs } from "@/components/solutions/content";
import { pageMetadata } from "@/lib/page-metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sectorSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSector(slug);
  if (!page) return {};
  return pageMetadata(page.title, page.description, `/cozumler/sektorel/${slug}/`);
}

export default async function SectorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSector(slug);
  if (!page) notFound();
  return <ContentPage page={page} />;
}
