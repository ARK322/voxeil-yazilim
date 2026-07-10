import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/seo/JsonLd";
import Analytics from "@/components/seo/Analytics";
import FacebookPixel from "@/components/seo/FacebookPixel";
import { siteConfig } from "@/lib/site";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: `${siteConfig.name} logosu`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@voxeil",
    creator: "@voxeil",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} className="custom-scrollbar">
      <body className={`${exo2.variable} antialiased overflow-x-clip`}>
        <JsonLd />
        <Navbar />
        {children}
        <Analytics />
        <FacebookPixel />
      </body>
    </html>
  );
}
