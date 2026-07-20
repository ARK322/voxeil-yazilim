"use client";

import { motion } from "framer-motion";
import { FaComments, FaGithub, FaHandshake, FaHeadset, FaInstagram, FaLinkedin } from "react-icons/fa";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import {
  CompanyBlock,
  CompanyCta,
  CompanyHero,
  CompanyIcon,
} from "@/components/company/CompanyShell";
import { getCompanyPage } from "@/components/company/content";
import { useHydrationSafeMotion } from "@/lib/use-hydration-safe-motion";
import "@/components/company/company.css";
import "./team.css";

const page = getCompanyPage("ekibimiz")!;

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  focus: string[];
  image: string;
  linkedin: string;
  github: string;
  instagram: string;
  align: "start" | "end";
};

const teamMembers: TeamMember[] = [
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
    align: "start",
  },
  {
    name: "Ahmed Resul KURT",
    role: "UI/UX Tasarımcı & DevOps Mühendisi",
    bio: "Ürün arayüzlerini kullanıcı odaklı tasarlar; aynı zamanda dağıtım, izleme ve altyapı süreçlerini güvenli ve tekrarlanabilir hale getirir.",
    focus: ["UI/UX tasarım", "DevOps & CI/CD", "Bulut altyapısı", "Ürün deneyimi"],
    image:
      "https://ui-avatars.com/api/?name=Ahmed+Resul+KURT&size=240&background=2c2c2c&color=E86530&bold=true",
    linkedin: "https://www.linkedin.com/in/ahmed-resul-kurt-86bb17234/",
    github: "https://github.com/ARK322",
    instagram: "https://www.instagram.com/aruttrk_/",
    align: "end",
  },
];

const collaboration = [
  {
    title: "Doğrudan erişim",
    body: "Projelerinize aracı katman olmadan çekirdek ekip katılır. Teknik kararlar ve ilerleme şeffaf şekilde paylaşılır.",
    Icon: FaComments,
  },
  {
    title: "Ortak sahiplenme",
    body: "Tasarım, mimari ve operasyonu silolar halinde değil; aynı hedefe kilitlenmiş küçük bir ekip olarak yürütürüz.",
    Icon: FaHandshake,
  },
  {
    title: "Uzun vadeli destek",
    body: "Canlıya alma bir bitiş değil başlangıçtır. İzleme, iyileştirme ve bakımda da aynı ekiple çalışmaya devam edersiniz.",
    Icon: FaHeadset,
  },
];

const socialLinks = (member: TeamMember) =>
  [
    { href: member.linkedin, label: "LinkedIn", Icon: FaLinkedin },
    { href: member.github, label: "GitHub", Icon: FaGithub },
    { href: member.instagram, label: "Instagram", Icon: FaInstagram },
  ] as const;

function TeamMemberRow({
  member,
  index,
  canAnimate,
}: {
  member: TeamMember;
  index: number;
  canAnimate: boolean;
}) {
  const fromX = member.align === "start" ? -24 : 24;
  const avatarShift = member.align === "start" ? -28 : 28;
  const popFromX = member.align === "start" ? -18 : 18;

  return (
    <motion.article
      className={`team-row team-row--${member.align}`}
      initial={canAnimate ? { opacity: 0, x: fromX, y: 16 } : false}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="team-avatar-wrap" whileHover="hover" initial="initial">
        <motion.div
          className="team-avatar"
          variants={{
            initial: { scale: 1, x: 0 },
            hover: { scale: 0.86, x: avatarShift },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={member.image}
            alt={member.name}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=240&background=2c2c2c&color=E86530&bold=true`;
            }}
          />
        </motion.div>

        <motion.div
          className="team-social-pop"
          variants={{
            initial: { opacity: 0, x: popFromX },
            hover: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.28, delay: 0.06 }}
        >
          {socialLinks(member).map(({ href, label, Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="site-icon-btn"
              aria-label={`${member.name} ${label}`}
              variants={{
                initial: { opacity: 0, scale: 0.75 },
                hover: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.2, delay: 0.08 + i * 0.05 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="text-xl" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <div className="team-copy">
        <h2 className="team-copy__name">{member.name}</h2>
        <p className="team-copy__role">{member.role}</p>
        <p className="team-copy__bio">{member.bio}</p>
        <ul className="team-tags">
          {member.focus.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="team-social-mobile">
          {socialLinks(member).map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="site-icon-btn"
              aria-label={`${member.name} ${label}`}
            >
              <Icon className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function TeamPage() {
  const { canAnimate } = useHydrationSafeMotion();

  return (
    <SitePageLayout>
      <article className="company-page">
        <div className="company-shell">
          <CompanyHero
            title={page.title}
            lead={page.hero}
            meta={["Backend & mimari", "UI/UX & DevOps", "Doğrudan iletişim"]}
          />

          <CompanyBlock
            title="Kimlerle çalışıyorsunuz?"
            intro="Daireye gelince LinkedIn, GitHub ve Instagram balonları açılır."
            titleId="team-members"
          >
            <div className="team-stage">
              {teamMembers.map((member, index) => (
                <TeamMemberRow
                  key={member.name}
                  member={member}
                  index={index}
                  canAnimate={canAnimate}
                />
              ))}
            </div>
          </CompanyBlock>

          <CompanyBlock
            title="Birlikte nasıl çalışırız?"
            titleId="team-collab"
          >
            <div className="company-grid-3">
              {collaboration.map((item) => (
                <div key={item.title} className="company-item company-item--rule">
                  <div className="company-item__head">
                    <CompanyIcon Icon={item.Icon} />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </CompanyBlock>

          <CompanyCta
            text="Ekibimizle tanışmak veya projeniz için keşif görüşmesi planlamak ister misiniz?"
            secondaryHref="/hakkimizda/"
            secondaryLabel="Hakkımızda"
          />
        </div>
      </article>
    </SitePageLayout>
  );
}
