import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Voxeil Yazılım ve Mühendislik",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center px-6 text-center">
      <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-4">
        404
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Sayfa bulunamadı
      </h1>
      <p className="text-muted max-w-md mb-8">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <Link href="/" className="site-btn-ghost">
        Ana sayfaya dön
      </Link>
    </main>
  );
}
