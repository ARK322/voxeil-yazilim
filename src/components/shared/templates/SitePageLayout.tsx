import Footer from "@/components/layout/footer/Footer";
import SiteBackground from "@/components/layout/background/SiteBackground";

type SitePageLayoutProps = {
  children: React.ReactNode;
};

export default function SitePageLayout({ children }: SitePageLayoutProps) {
  return (
    <>
      <SiteBackground />

      <div className="relative z-10 overflow-x-clip max-w-full min-h-dvh pt-[calc(var(--safe-top)+var(--nav-height))]">
        {children}
        <Footer />
      </div>
    </>
  );
}
