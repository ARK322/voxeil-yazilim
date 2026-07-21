import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { siteConfig } from "@/lib/site";

const socialItems = [
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: siteConfig.social.github, label: "GitHub", icon: FaGithub },
] as const;

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className = "flex gap-3" }: SocialLinksProps) {
  return (
    <div className={className}>
      {socialItems.map(({ href, label, icon: Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer me"
          className="site-icon-btn footer-social-btn"
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
