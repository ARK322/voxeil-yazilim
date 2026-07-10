import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { siteConfig } from "@/lib/site";

const socialItems = [
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: siteConfig.social.github, label: "GitHub", icon: FaGithub },
  { href: siteConfig.social.instagram, label: "Instagram", icon: FaInstagram },
  { href: siteConfig.social.facebook, label: "Facebook", icon: FaFacebook },
  { href: siteConfig.social.x, label: "X (Twitter)", icon: FaXTwitter },
  { href: siteConfig.social.youtube, label: "YouTube", icon: FaYoutube },
] as const;

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className = "flex gap-4" }: SocialLinksProps) {
  return (
    <div className={className}>
      {socialItems.map(({ href, label, icon: Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer me"
          className="site-icon-btn w-12 h-12"
          aria-label={label}
        >
          <Icon className="text-xl" />
        </a>
      ))}
    </div>
  );
}
