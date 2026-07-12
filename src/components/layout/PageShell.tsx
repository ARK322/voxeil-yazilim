import Link from "next/link";
import Footer from "@/components/layout/Footer";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageShellProps = {
  children: React.ReactNode;
  breadcrumbs: BreadcrumbItem[];
  /** Metin odaklı sayfalar (hakkımızda, hizmet detay) için dar layout */
  narrow?: boolean;
};

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-secondary">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-orange transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-muted">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function PageShell({ children, breadcrumbs, narrow = false }: PageShellProps) {
  return (
    <>
      <div className="fixed inset-0 isometric-dots -z-10">
        <div className="glow-orange-top-left" />
        <div className="glow-orange-bottom-right" />
      </div>

      <main className="relative z-10 pt-28 sm:pt-32 pb-16 overflow-x-clip">
        {narrow ? (
          <div className="site-container max-w-4xl">
            <Breadcrumbs items={breadcrumbs} />
            {children}
          </div>
        ) : (
          <>
            <div className="site-container mb-8">
              <Breadcrumbs items={breadcrumbs} />
            </div>
            {children}
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
