import type { IconType } from "react-icons";
import {
  FaCheckDouble,
  FaClipboardList,
  FaCode,
  FaComments,
  FaPaintBrush,
  FaRocket,
  FaSyncAlt,
} from "react-icons/fa";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import {
  CompanyBlock,
  CompanyCta,
  CompanyHero,
  CompanyIcon,
} from "@/components/company/CompanyShell";
import { getCompanyPage } from "@/components/company/content";
import "@/components/company/company.css";
import "@/components/company/company-sections.css";

const page = getCompanyPage("surec")!;

const processSteps: Array<{
  id: number;
  title: string;
  description: string;
  deliverables: string[];
  Icon: IconType;
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
    Icon: FaClipboardList,
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
    Icon: FaPaintBrush,
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
    Icon: FaCode,
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
    Icon: FaCheckDouble,
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
    Icon: FaRocket,
  },
];

const workingNotes = [
  {
    title: "İletişim ritmi",
    body: "Kısa senkronlar, sprint demo’ları ve yazılı durum güncellemeleri ile ilerlemeyi sürekli görünür tutarız.",
    Icon: FaComments,
  },
  {
    title: "Değişiklik yönetimi",
    body: "Yeni istekler backlog’a alınır, etki analizi yapılır ve öncelikler birlikte yeniden sıralanır.",
    Icon: FaSyncAlt,
  },
];

export default function ProcessPage() {
  return (
    <SitePageLayout>
      <article className="company-page">
        <div className="company-shell">
          <CompanyHero
            title={page.title}
            lead={page.hero}
            meta={[
              { label: "Keşiften canlıya", Icon: FaClipboardList },
              { label: "Sprint bazlı", Icon: FaCode },
              { label: "Görünür çıktılar", Icon: FaCheckDouble },
            ]}
          />

          <CompanyBlock
            title="Adım adım süreç"
            intro="Her fazın amacı, çalışma biçimi ve somut çıktıları aşağıda."
            titleId="process-steps"
          >
            <ol className="process-steps">
              {processSteps.map((step) => (
                <li key={step.id} className="process-step">
                  <div>
                    <div className="process-step__mark">
                      <CompanyIcon Icon={step.Icon} size="md" />
                      <p className="process-step__index">
                        {String(step.id).padStart(2, "0")}
                      </p>
                    </div>
                    <h3 className="process-step__title">{step.title}</h3>
                  </div>
                  <p className="process-step__body">{step.description}</p>
                  <div>
                    <p className="process-step__deliver-label">Çıktılar</p>
                    <ul className="process-step__deliver">
                      {step.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </CompanyBlock>

          <CompanyBlock title="Nasıl ilerleriz?" titleId="process-notes">
            <div className="company-grid-2">
              {workingNotes.map((note) => (
                <div key={note.title} className="company-item company-item--rule">
                  <div className="company-item__head">
                    <CompanyIcon Icon={note.Icon} />
                    <h3>{note.title}</h3>
                  </div>
                  <p>{note.body}</p>
                </div>
              ))}
            </div>
          </CompanyBlock>

          <CompanyCta
            text="Süreci projenize uyarlamak için ücretsiz keşif görüşmesi planlayın."
            secondaryHref="/neden-biz/"
            secondaryLabel="Neden Voxeil?"
          />
        </div>
      </article>
    </SitePageLayout>
  );
}
