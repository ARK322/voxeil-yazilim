import type { Metadata } from "next";
import TechnologiesPage from "@/components/resources/TechnologiesPage";
import { technologiesPage } from "@/components/resources/content";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata(
  technologiesPage.title,
  technologiesPage.description,
  "/teknolojiler/"
);

export default function TechnologiesRoutePage() {
  return <TechnologiesPage />;
}
