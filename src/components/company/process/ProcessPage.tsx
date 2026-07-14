import type { IconType } from "react-icons";
import {
  FaCheckDouble,
  FaClipboardList,
  FaCode,
  FaComments,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";
import PageCta from "@/components/shared/templates/PageCta";
import PageHero from "@/components/shared/templates/PageHero";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import { getCompanyPage } from "@/components/company/content";

const page = getCompanyPage("surec")!;

const processSteps: Array<{
  id: number;
  title: string;
  description: string;
  deliverables: string[];
  icon: IconType;
}> = [
  {
    id: 1,
    title: "Analiz ve Planlama",
    description:
      "İş hedeflerinizi, kullanıcı senaryolarını ve teknik kısıtları birlikte netleştiririz. Kapsam, öncelikler, riskler ve ilk yol haritası bu fazda oluşur.",
    deliverables: [
      "Keşif notları ve kapsam özeti",
      "Önceliklendirilmiş backlog taslağı",
      "Teknik yaklaşım ve zaman tahmini",
    ],
    icon: FaClipboardList,
  },
  {
    id: 2,
    title: "Tasarım ve UI/UX",
    description:
      "Bilgi mimarisi, akışlar ve arayüz kararlarını somutlaştırırız. Onaylanan tasarımlar geliştirmeye geçmeden önce net ve test edilebilir hale gelir.",
    deliverables: [
      "Kullanıcı akışları ve wireframe",
      "Yüksek sadakatli UI tasarımları",
      "Bileşen ve stil kararları",
    ],
    icon: FaPaintBrush,
  },
  {
    id: 3,
    title: "Geliştirme (Sprint)",
    description:
      "Next.js ve modern stack ile kısa sprintlerde geliştirme yaparız. Her sprint sonunda çalışan bir çıktı ve görünür ilerleme hedeflenir.",
    deliverables: [
      "Sprint planı ve demo",
      "Modüler, gözden geçirilmiş kod",
      "Ortam ve dağıtım altyapısı",
    ],
    icon: FaCode,
  },
  {
    id: 4,
    title: "Test ve QA",
    description:
      "İşlevsellik, performans ve güvenlik kontrollerini sistematik yürütürüz. Yayın öncesi kritik senaryoların doğrulanması teslimatın parçasıdır.",
    deliverables: [
      "Test senaryoları ve bulgu listesi",
      "Performans / güvenlik kontrolü",
      "Yayın kontrol listesi",
    ],
    icon: FaCheckDouble,
  },
  {
    id: 5,
    title: "Yayına Alma ve Destek",
    description:
      "Canlıya almayı planlı ve güvenli şekilde gerçekleştiririz. İzleme, bakım ve iyileştirme ile ürünü sonrası da sahiplenmeye devam ederiz.",
    deliverables: [
      "Canlıya alma planı",
      "İzleme ve alarm kurulumu",
      "Bakım / destek modeli",
    ],
    icon: FaRocket,
  },
];

const workingNotes = [
  {
    icon: FaComments,
    title: "İletişim ritmi",
    body: "Kısa senkronlar, sprint demo’ları ve yazılı durum güncellemeleri ile ilerlemeyi sürekli görünür tutarız.",
  },
  {
    icon: FaClipboardList,
    title: "Değişiklik yönetimi",
    body: "Yeni istekler backlog’a alınır, etki analizi yapılır ve öncelikler birlikte yeniden sıralanır. Kapsam sürprizi olmaz.",
  },
];

export default function ProcessPage() {
  return (
    <SitePageLayout>
      <section className="site-section relative overflow-x-clip">
        <div className="site-container max-w-5xl mx-auto">
          <PageHero title={page.title} description={page.hero} />

          <div className="space-y-8 sm:space-y-10">
            <div className="relative mx-auto max-w-3xl">
              <div
                className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-orange/60 via-orange/20 to-transparent sm:left-6"
                aria-hidden="true"
              />

              <ol className="relative flex flex-col gap-4 sm:gap-5">
                {processSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.id} className="relative flex gap-4 sm:gap-6">
                      <div className="relative z-10 flex shrink-0 flex-col items-center">
                        <div className="site-glow-ring flex h-10 w-10 items-center justify-center rounded-full border border-orange/35 bg-black sm:h-12 sm:w-12">
                          <Icon className="text-sm text-orange sm:text-base" aria-hidden="true" />
                        </div>
                      </div>

                      <article className="site-card site-card--hover min-w-0 flex-1 p-5 sm:p-6">
                        <div className="mb-2 flex flex-wrap items-center gap-2 sm:gap-3">
                          <span className="font-mono text-xs font-semibold tracking-widest text-orange/80">
                            {String(step.id).padStart(2, "0")}
                          </span>
                          <h2 className="text-lg font-bold text-white sm:text-xl">{step.title}</h2>
                        </div>
                        <p className="text-sm leading-relaxed text-muted sm:text-base mb-4">
                          {step.description}
                        </p>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-orange/80 mb-2">
                            Çıktılar
                          </p>
                          <ul className="space-y-1.5">
                            {step.deliverables.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm text-muted-secondary"
                              >
                                <span className="text-orange mt-0.5 shrink-0" aria-hidden="true">
                                  •
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
              {workingNotes.map((note) => {
                const Icon = note.icon;
                return (
                  <article key={note.title} className="site-card p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange/30 bg-black/60">
                        <Icon className="text-orange text-sm" aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-semibold text-white">{note.title}</h3>
                    </div>
                    <p className="text-muted text-sm sm:text-base leading-relaxed">{note.body}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <PageCta />
        </div>
      </section>
    </SitePageLayout>
  );
}
