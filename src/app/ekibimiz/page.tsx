import type { Metadata } from "next";
import TeamPage from "@/components/company/team/TeamPage";
import { getCompanyPage } from "@/components/company/content";
import { pageMetadata } from "@/lib/page-metadata";

const page = getCompanyPage("ekibimiz")!;

export const metadata: Metadata = pageMetadata(page.title, page.description, "/ekibimiz/");

export default function TeamRoutePage() {
  return <TeamPage />;
}
