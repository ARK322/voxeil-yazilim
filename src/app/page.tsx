import HeroSection from "@/components/hero/HeroSection";
import SectionDivider from "@/components/layout/SectionDivider";
import HashScrollHandler from "@/components/layout/HashScrollHandler";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/components/sections/Services"));
const Process = dynamic(() => import("@/components/sections/Process"));
const IndustrialSolutions = dynamic(() => import("@/components/sections/IndustrialSolutions"));
const WhyUs = dynamic(() => import("@/components/sections/WhyUs"));
const About = dynamic(() => import("@/components/sections/About"));
const Team = dynamic(() => import("@/components/sections/Team"));
const Technologies = dynamic(() => import("@/components/sections/Technologies"));
const Faq = dynamic(() => import("@/components/sections/Faq"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <>
      <HashScrollHandler />

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
        <About />

        <SectionDivider />
        <Team />

        <SectionDivider />
        <Technologies />

        <SectionDivider />
        <Faq />

        <SectionDivider />
        <Contact />

        <Footer />
      </div>
    </>
  );
}
