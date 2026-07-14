import type { Metadata } from "next";
import AboutPage from "@/components/company/about/AboutPage";
import { getCompanyPage } from "@/components/company/content";
import { pageMetadata } from "@/lib/page-metadata";

const page = getCompanyPage("hakkimizda")!;

export const metadata: Metadata = pageMetadata(page.title, page.description, "/hakkimizda/");

export default function AboutRoutePage() {
  return <AboutPage />;
}
