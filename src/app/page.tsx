import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sabit Arkaplan */}
      <div className="fixed inset-0 bg-black isometric-dots -z-10">
        {/* Turuncu Parlayan Bölgeler */}
        <div className="glow-orange-top-right"></div>
        <div className="glow-orange-bottom-left"></div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 overflow-x-clip max-w-full">
        {/* Hero Bölümü */}
        <Hero />

        {/* Hizmetler Bölümü */}
        <Services />

        {/* Neden Biz Bölümü */}
        <WhyUs />

        {/* Ekibimiz Bölümü */}
        <Team />

        {/* İletişim Bölümü */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
