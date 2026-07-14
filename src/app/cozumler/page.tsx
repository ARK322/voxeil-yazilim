import type { Metadata } from "next";
import SolutionsPage from "@/components/solutions/SolutionsPage";
import { solutionsHub } from "@/components/solutions/content";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata(
  solutionsHub.title,
  solutionsHub.description,
  "/cozumler/"
);

export default function CozumlerPage() {
  return <SolutionsPage />;
}
