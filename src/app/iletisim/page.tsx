import type { Metadata } from "next";
import ContactPage from "@/components/resources/ContactPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata(
  "İletişim",
  "Voxeil ile iletişime geçin — ücretsiz keşif görüşmesi planlayın.",
  "/iletisim/"
);

export default function ContactRoutePage() {
  return <ContactPage />;
}
