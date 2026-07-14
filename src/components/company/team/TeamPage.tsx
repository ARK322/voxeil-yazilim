import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import PageCta from "@/components/shared/templates/PageCta";
import PageHero from "@/components/shared/templates/PageHero";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import { getCompanyPage } from "@/components/company/content";

const page = getCompanyPage("ekibimiz")!;

const teamMembers = [
  {
    name: "Ahmed Resul KURT",
    role: "UI/UX Tasarımcı & DevOps Mühendisi",
    bio: "Ürün arayüzlerini kullanıcı odaklı tasarlar; aynı zamanda dağıtım, izleme ve altyapı süreçlerini güvenli ve tekrarlanabilir hale getirir. Tasarım ile operasyonu aynı dilde konuşturur.",
    focus: ["UI/UX tasarım", "DevOps & CI/CD", "Bulut altyapısı", "Ürün deneyimi"],
    image:
      "https://ui-avatars.com/api/?name=Ahmed+Resul+KURT&size=240&background=2c2c2c&color=E86530&bold=true",
    linkedin: "https://www.linkedin.com/in/ahmed-resul-kurt-86bb17234/",
    github: "https://github.com/ARK322",
    instagram: "https://www.instagram.com/aruttrk_/",
  },
  {
    name: "Bülent KOÇ",
    role: "Backend Geliştirici & Uygulama Mimarı",
    bio: "Ölçeklenebilir backend sistemleri, API tasarımları ve uygulama mimarisi odaklı çalışır. İş kurallarını temiz, bakımı kolay ve uzun ömürlü teknik kararlarla hayata geçirir.",
    focus: ["Backend mimari", "API & entegrasyon", "Veri modelleme", "Performans"],
    image:
      "https://ui-avatars.com/api/?name=Bulent+KOÇ&size=240&background=2c2c2c&color=E86530&bold=true",
    linkedin: "https://www.linkedin.com/in/bülent-deniz-koç-15a498301/",
    github: "https://github.com/budeko",
    instagram: "https://www.instagram.com/iambudeko",
  },
];

const collaboration = [
  {
    title: "Doğrudan erişim",
    body: "Projelerinize aracı katman olmadan çekirdek ekip katılır. Teknik kararlar ve ilerleme şeffaf şekilde paylaşılır.",
  },
  {
    title: "Ortak sahiplenme",
    body: "Tasarım, mimari ve operasyonu silolar halinde değil; aynı hedefe kilitlenmiş küçük bir ekip olarak yürütürüz.",
  },
  {
    title: "Uzun vadeli destek",
    body: "Canlıya alma bir bitiş değil başlangıçtır. İzleme, iyileştirme ve bakımda da aynı ekiple çalışmaya devam edersiniz.",
  },
];

export default function TeamPage() {
  return (
    <SitePageLayout>
      <section className="site-section relative overflow-x-clip">
        <div className="site-container max-w-5xl mx-auto">
          <PageHero title={page.title} description={page.hero} />

          <div className="space-y-10 sm:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-4 flex items-center justify-center max-w-full">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden z-10 shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover bg-[var(--anthracite)]"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 mb-4 justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 site-icon-btn"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 site-icon-btn"
                      aria-label={`${member.name} GitHub`}
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 site-icon-btn"
                      aria-label={`${member.name} Instagram`}
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                  </div>

                  <div className="px-2 sm:px-4">
                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-1">{member.name}</h2>
                    <p className="text-orange text-sm lg:text-base mb-3">{member.role}</p>
                    <p className="text-muted text-sm lg:text-base leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <ul className="flex flex-wrap justify-center gap-2">
                      {member.focus.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-lg border border-orange/25 bg-black/40 px-2.5 py-1 text-xs text-muted-secondary"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5 text-center sm:text-left">
                Birlikte nasıl çalışırız?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {collaboration.map((item) => (
                  <article key={item.title} className="site-card p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-muted text-sm sm:text-base leading-relaxed">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <PageCta />
        </div>
      </section>
    </SitePageLayout>
  );
}
