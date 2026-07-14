import type { Metadata } from "next";
import WhyUsPage from "@/components/company/why-us/WhyUsPage";
import { getCompanyPage } from "@/components/company/content";
import { pageMetadata } from "@/lib/page-metadata";

const page = getCompanyPage("neden-biz")!;

export const metadata: Metadata = pageMetadata(page.title, page.description, "/neden-biz/");

export default function WhyUsRoutePage() {
  return <WhyUsPage />;
}
