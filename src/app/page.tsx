import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

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
      <div className="relative z-10">
        {/* Hero Bölümü */}
        <Hero />

        {/* Hizmetler Bölümü */}
        <Services />

        {/* Neden Biz Bölümü */}
        <WhyUs />
      </div>
    </>
  );
}
