import HeroSection from "@/components/hero/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import Services from "@/components/Services";
import SeoContent from "@/components/SeoContent";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Process = dynamic(() => import("@/components/Process"));
const IndustrialSolutions = dynamic(() => import("@/components/IndustrialSolutions"));
const WhyUs = dynamic(() => import("@/components/WhyUs"));
const Team = dynamic(() => import("@/components/Team"));
const Technologies = dynamic(() => import("@/components/Technologies"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 isometric-dots -z-10">
        <div className="glow-orange-top-left" />
        <div className="glow-orange-bottom-right" />
      </div>

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
        <SeoContent />

        <SectionDivider />
        <Contact />

        <Footer />
      </div>
    </>
  );
}
