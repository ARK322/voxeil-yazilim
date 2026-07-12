import HeroSection from "@/components/hero/HeroSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 isometric-dots -z-10">
        <div className="glow-orange-top-left" />
        <div className="glow-orange-bottom-right" />
      </div>

      <div className="relative z-10 overflow-x-clip max-w-full">
        <HeroSection />
        <Footer />
      </div>
    </>
  );
}
