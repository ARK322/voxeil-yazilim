import type { Metadata, Viewport } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import "@/components/shared/shared.css";
import "@/components/layout/layout.css";
import Navbar from "@/components/layout/navbar/Navbar";
import RouteScrollRecovery from "@/components/layout/hash-scroll/RouteScrollRecovery";
import { siteConfig } from "@/lib/site";
import { getJsonLdGraph } from "@/lib/json-ld";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Voxeil Yazılım ve Mühendislik",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
    types: {
      "application/xml": "/sitemap.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: "/logo.svg", alt: siteConfig.logoAlt }],
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
  icons: {
    icon: "/favicon.ico",
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} className="custom-scrollbar">
      <head>
        {/* SEO: JSON-LD head içinde — tarayıcı ve audit araçları için erişilebilir */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLdGraph()) }}
        />
      </head>
      <body className={`${exo2.variable} subpixel-antialiased overflow-x-clip`}>
        <RouteScrollRecovery />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
