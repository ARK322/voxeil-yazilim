import HeroSection from "@/components/home/hero/HeroSection";
import SectionDivider from "@/components/home/section-divider/SectionDivider";
import SiteBackground from "@/components/layout/background/SiteBackground";
import HashScrollHandler from "@/components/layout/hash-scroll/HashScrollHandler";
import Footer from "@/components/layout/footer/Footer";
import Services from "@/components/home/services/Services";
import Process from "@/components/home/process/Process";
import IndustrialSolutions from "@/components/home/industrial-solutions/IndustrialSolutions";
import WhyUs from "@/components/home/why-us/WhyUs";
import About from "@/components/home/about/About";
import Team from "@/components/home/team/Team";
import Technologies from "@/components/home/technologies/Technologies";
import Faq from "@/components/home/faq/Faq";
import Contact from "@/components/home/contact/Contact";

export default function Home() {
  return (
    <>
      <HashScrollHandler />

      <SiteBackground />

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
