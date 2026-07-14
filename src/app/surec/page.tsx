import type { Metadata } from "next";
import ProcessPage from "@/components/company/process/ProcessPage";
import { getCompanyPage } from "@/components/company/content";
import { pageMetadata } from "@/lib/page-metadata";

const page = getCompanyPage("surec")!;

export const metadata: Metadata = pageMetadata(page.title, page.description, "/surec/");

export default function ProcessRoutePage() {
  return <ProcessPage />;
}
