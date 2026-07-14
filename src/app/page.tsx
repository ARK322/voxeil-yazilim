import HeroSection from "@/components/home/hero/HeroSection";
import SiteBackground from "@/components/layout/background/SiteBackground";
import HashScrollHandler from "@/components/layout/hash-scroll/HashScrollHandler";
import Footer from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <>
      <HashScrollHandler />

      <SiteBackground />

      <div className="relative z-10 overflow-x-clip max-w-full">
        <HeroSection />
        <Footer />
      </div>
    </>
  );
}
