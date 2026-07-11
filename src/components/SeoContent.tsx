import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function SeoContent() {
  return (
    <section
      id="hakkimizda"
      className="site-section relative overflow-x-clip border-t border-gray-800/30"
      aria-labelledby="seo-content-heading"
    >
      <div className="site-container">
        <header className="site-section__header">
          <h2 id="seo-content-heading" className="site-section__title">
            Ankara Yazılım ve Dijital Dönüşüm Çözümleri
          </h2>
          <p className="site-section__desc">
            Voxeil yazılım şirketi olarak işletmelerin dijital dönüşüm yolculuğunda stratejiden
            canlıya almaya kadar uçtan uca yazılım çözümleri sunuyoruz.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-muted leading-relaxed">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="site-heading text-xl">Yazılım Çözümleri ve Danışmanlık</h3>
              <p>
                Modern web teknolojileri, mobil uygulamalar ve bulut altyapıları ile
                işletmenizin dijital varlığını güçlendiriyoruz. Her projede performans,
                güvenlik ve kullanıcı deneyimini önceliklendirerek ölçeklenebilir yazılım
                mimarileri tasarlıyoruz. Teknik danışmanlık ve sürekli destek hizmetlerimizle
                ekiplerinizin yanında kalıyoruz.
              </p>
              <p>
                E-ticaret platformlarından kurumsal otomasyon sistemlerine, API
                entegrasyonlarından veri odaklı raporlama panellerine kadar geniş bir yelpazede
                çözümler geliştiriyoruz. AWS, Azure ve modern DevOps araçlarıyla projelerinizi
                güvenli ve sürdürülebilir şekilde hayata geçiriyoruz.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="site-heading text-xl">Hizmet Alanlarımız</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                <li>Kurumsal web sitesi ve landing page geliştirme</li>
                <li>iOS ve Android mobil uygulama projeleri</li>
                <li>E-ticaret altyapısı, ödeme ve stok entegrasyonları</li>
                <li>CRM, ERP ve iş süreci otomasyon yazılımları</li>
                <li>Bulut migrasyon, CI/CD ve DevOps danışmanlığı</li>
                <li>Bakım, izleme ve teknik destek hizmetleri</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="site-heading text-xl">Neden Voxeil ile Çalışmalısınız?</h3>
              <p>
                Ankara merkezli uzman ekibimizle projelerinizi baştan sona yönetiyoruz:
                keşif ve analiz, UI/UX tasarım, geliştirme, test ve canlıya alma süreçlerinin
                tamamında yanınızdayız. Şeffaf iletişim, zamanında teslimat ve uzun vadeli
                iş ortaklığı yaklaşımımızla müşterilerimizin dijital hedeflerine ulaşmasını
                sağlıyoruz.
              </p>
              <p>
                Dijital dönüşüm süreciniz için ücretsiz keşif görüşmesi planlayabilir,
                ihtiyaçlarınıza özel bir yol haritası oluşturabiliriz.{" "}
                <Link href="#iletisim" className="site-link text-orange hover:text-orange-hover">
                  İletişim
                </Link>{" "}
                bölümünden bize ulaşın veya{" "}
                <Link href="#hizmetlerimiz" className="site-link text-orange hover:text-orange-hover">
                  hizmetlerimizi
                </Link>{" "}
                inceleyin.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="site-heading text-xl">Sık Sorulan Sorular</h3>
              <div className="space-y-4 text-sm sm:text-base">
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Ankara dışındaki firmalarla da çalışıyor musunuz?
                  </h4>
                  <p>
                    Evet. Ankara merkezli olmamıza rağmen Türkiye genelinde ve yurt dışında
                    uzaktan proje yönetimi ile hizmet veriyoruz.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Proje süreci nasıl işliyor?
                  </h4>
                  <p>
                    Keşif görüşmesi, teknik analiz, tasarım onayı, geliştirme, test ve canlıya
                    alma adımlarından oluşan şeffaf bir süreç izliyoruz.{" "}
                    <Link href="#surec" className="site-link text-orange hover:text-orange-hover">
                      Süreç
                    </Link>{" "}
                    bölümünden detayları inceleyebilirsiniz.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Proje tesliminden sonra destek veriyor musunuz?
                  </h4>
                  <p>
                    Canlıya alma sonrası bakım, güvenlik güncellemeleri ve teknik destek
                    paketleri sunuyoruz. İhtiyacınıza göre SLA kapsamı belirlenir.
                  </p>
                </div>
              </div>
            </div>

            <address className="not-italic text-sm space-y-1 border-t border-gray-800/40 pt-4">
              <strong className="text-white block">{siteConfig.name}</strong>
              <span>{siteConfig.address.full}</span>
              <br />
              <a href={`tel:${siteConfig.phone}`} className="site-link">
                {siteConfig.phoneDisplay}
              </a>
              {" · "}
              <a href={`mailto:${siteConfig.email}`} className="site-link">
                {siteConfig.email}
              </a>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
