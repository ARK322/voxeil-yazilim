import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Voxeil Yazılım - Yazılım Portfolyo",
  description: "Profesyonel yazılım çözümleri ve hizmetleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="custom-scrollbar">
      <body
        className={`${exo2.variable} antialiased overflow-x-clip`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
