"use client";

import { forwardRef } from "react";

const TRUST_CARDS = [
  {
    id: "kesif",
    title: "keşif & analiz",
    stat: "Projem gecikir mi?",
    desc: "CI/CD süreçlerimizle her aşamayı şeffaf yönetiyoruz.",
  },
  {
    id: "mimari",
    title: "mimari & tasarım",
    stat: "Teknik borç oluşur mu?",
    desc: "Clean code ve modern stack ile temiz mimari kuruyoruz.",
  },
  {
    id: "deploy",
    title: "deployment & operasyon",
    stat: "Bakım zor olur mu?",
    desc: "7/24 izlenebilir altyapı ile kesintisiz destek sunuyoruz.",
  },
  {
    id: "scalability",
    title: "ölçekleme & büyüme",
    stat: "İletişim kopar mı?",
    desc: "Anlık takip paneli ile süreci birlikte yönetiyoruz.",
  },
] as const;

const HeroCTA = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="hero-cta" ref={ref} aria-hidden="true">
      <div className="hero-cta__split">
        <div className="trust-cards">
          {TRUST_CARDS.map((card) => (
            <div key={card.id} className="trust-card">
              <p className="trust-card__title">{card.title}</p>
              <p className="trust-card__stat">{card.stat}</p>
              <p className="trust-card__desc">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="hero-cta__copy">
          <h2 className="hero-cta__heading">Dijital Geleceğinizi İnşa Ediyoruz.</h2>
          <p className="hero-cta__body">
            Karmaşık yazılım projelerini, yüksek performanslı backend mimarileri ve
            kullanıcı odaklı arayüzlerle işinize değer katan dijital ürünlere
            dönüştürüyoruz.
          </p>
        </div>
      </div>
    </div>
  );
});

HeroCTA.displayName = "HeroCTA";
export default HeroCTA;
