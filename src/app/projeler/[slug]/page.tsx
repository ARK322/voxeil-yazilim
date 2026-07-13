import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { getProject, projectSlugs } from "@/components/projects/content";
import { pageMetadata } from "@/lib/page-metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getProject(slug);
  if (!page) return {};
  return pageMetadata(page.title, page.description, `/projeler/${slug}/`);
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getProject(slug);
  if (!page) notFound();
  return <ProjectDetail page={page} />;
}
