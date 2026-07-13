import type { Metadata } from "next";
import ContentPage from "@/components/shared/templates/ContentPage";
import { getCompanyPage } from "@/components/company/content";
import { pageMetadata } from "@/lib/page-metadata";

const slug = "hakkimizda";
const page = getCompanyPage(slug)!;

export const metadata: Metadata = pageMetadata(page.title, page.description, "/hakkimizda/");

export default function AboutPage() {
  return <ContentPage page={page} />;
}
