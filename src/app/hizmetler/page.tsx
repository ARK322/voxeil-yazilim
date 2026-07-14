import type { Metadata } from "next";
import ServicesPage from "@/components/services/ServicesPage";
import { servicesHub } from "@/components/services/content";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata(
  servicesHub.title,
  servicesHub.description,
  "/hizmetler/"
);

export default function HizmetlerPage() {
  return <ServicesPage />;
}
