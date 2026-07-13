import type { Metadata } from "next";
import FaqPage from "@/components/resources/FaqPage";
import { faqPageContent } from "@/components/resources/content";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata(
  faqPageContent.title,
  faqPageContent.description,
  "/sss/"
);

export default function SssPage() {
  return <FaqPage />;
}
