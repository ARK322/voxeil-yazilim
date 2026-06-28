import HeroSection from "@/components/hero/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import Services from "@/components/Services";
import Process from "@/components/Process";
import IndustrialSolutions from "@/components/IndustrialSolutions";
import WhyUs from "@/components/WhyUs";
import Technologies from "@/components/Technologies";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sabit Arkaplan */}
      <div className="fixed inset-0 isometric-dots -z-10">
        {/* Turuncu Parlayan Bölgeler */}
        <div className="glow-orange-top-left"></div>
        <div className="glow-orange-bottom-right"></div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 overflow-x-clip max-w-full">
        <HeroSection />

        <SectionDivider />
        <Services />

        <SectionDivider />
        <Process />

        <SectionDivider />
        <IndustrialSolutions />

        <SectionDivider />
        <WhyUs />

        <SectionDivider />
        <Team />

        <SectionDivider />
        <Technologies />

        <SectionDivider />
        <Contact />

        <Footer />
      </div>
    </>
  );
}