import Link from "next/link";

export default function PageCta() {
  return (
    <div className="mt-10 sm:mt-12 text-center">
      <p className="text-muted text-sm sm:text-base mb-4 max-w-xl mx-auto">
        Projeniz için ücretsiz keşif görüşmesi planlayın. İhtiyacınıza uygun yol haritasını birlikte
        çıkaralım.
      </p>
      <Link href="/iletisim/" className="site-btn-primary">
        Görüşme Planla
      </Link>
    </div>
  );
}
