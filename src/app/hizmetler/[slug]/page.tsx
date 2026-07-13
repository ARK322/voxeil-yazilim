import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/shared/templates/ContentPage";
import { getService, serviceSlugs } from "@/components/services/content";
import { pageMetadata } from "@/lib/page-metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getService(slug);
  if (!page) return {};
  return pageMetadata(page.title, page.description, `/hizmetler/${slug}/`);
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getService(slug);
  if (!page) notFound();
  return <ContentPage page={page} />;
}
