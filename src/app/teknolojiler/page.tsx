import type { Metadata } from "next";
import ContentPage from "@/components/shared/templates/ContentPage";
import { technologiesPage } from "@/components/resources/content";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata(
  technologiesPage.title,
  technologiesPage.description,
  "/teknolojiler/"
);

export default function TechnologiesPage() {
  return <ContentPage page={technologiesPage} />;
}
