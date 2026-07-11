"use client";

import { forwardRef } from "react";
import { useEditorTilt } from "./useEditorTilt";

const CODE_LINES: Array<Array<[string, string]>> = [
  [["kw", "import"], ["tx", " { SoftwareCompany, Project } "], ["kw", "from"], ["str", " '@voxeil/core'"]],
  [["kw", "import"], ["tx", " { Innovation } "], ["kw", "from"], ["str", " '@voxeil/methods'"]],
  [],
  [["kw", "interface"], ["tx", " CompanyManifest "], ["pn", "{"]],
  [["tx", "  vision: "], ["str", "'Dijital dünyanıza hoşgeldiniz'"], ["pn", ";"]],
  [["tx", "  purpose: "], ["str", "'İsteklerinizi gerçeğe dönüştür'"], ["pn", ";"]],
  [["tx", "  location: "], ["str", "'Ankara / Remote'"], ["pn", ";"]],
  [["pn", "}"],],
  [],
  [["kw", "const"], ["tx", " voxeil"], ["pn", ": "], ["tx", "CompanyManifest "], ["pn", "= {"],],
  [["tx", "  vision: "], ["str", "'Sınırları aşan çözümler'"], ["pn", ","],],
  [["tx", "  core: "], ["str", "'Tasarım + Yazılım + Otomasyon'"], ["pn", ","],],
  [["tx", "  status: "], ["str", "'Projeler için hazır'"], ["pn", ","],],
  [["pn", "};"],],
  [],
  [["kw", "async function"], ["fn", " initializeTransformation"], ["pn", "() {"],],
  [["tx", "  "], ["kw", "const"], ["tx", " project = "], ["kw", "await"], ["tx", " Innovation.init(voxeil);"],],
  [["tx", "  "], ["kw", "if"], ["pn", "("], ["tx", "project.isReady"], ["pn", ") {"],],
  [["tx", "    console.log("], ["str", "'Keşif görüşmesi başladı...'"], ["pn", ");"],],
  [["tx", "    "], ["kw", "return"], ["tx", " project.start();"],],
  [["tx", "  }"],],
  [["pn", "}"], ["tx", " // 2026: Yeni ufuklar açıyoruz"]],
];

const HeroFinale = forwardRef<HTMLDivElement>((_, ref) => {
  const { ref: editorRef, onMouseMove, onMouseLeave } = useEditorTilt();

  return (
    <div className="hero-finale" ref={ref}>
      <div className="hero-finale__inner">
        <div className="hero-finale__content">
          {/* SEO/A11y iyileştirmesi: aria-label — görsel etiket metni indekslenebilir kalır */}
          <span
            className="hero-finale__tag"
            aria-label="Hizmet alanları: Yazılım, Tasarım, Otomasyon"
          >
            <span className="hero-finale__tag-icon" aria-hidden="true">
              ✨
            </span>
            Yazılım
            <span className="hero-finale__tag-sep" aria-hidden="true">
              •
            </span>
            Tasarım
            <span className="hero-finale__tag-sep" aria-hidden="true">
              •
            </span>
            Otomasyon
          </span>

          {/* SEO/A11y iyileştirmesi: aria-label — animasyon öncesi tam başlık metni erişilebilir */}
          <h2
            className="hero-finale__title"
            aria-label="Dijital dönüşümünüzü birlikte başlatalım"
          >
            <span className="hero-finale__title-bold">Dijital</span>
            <br />
            <span className="hero-finale__title-bold">dönüşümünüzü</span>
            <br />
            <span className="hero-finale__title-light">birlikte başlatalım</span>
          </h2>

          <p className="hero-finale__body">
            30 dakikalık bir keşif görüşmesi ile başlayalım. Size özel bir yol haritası
            çıkaralım.
          </p>

          <div className="hero-finale__actions">
            <a href="#iletisim" className="site-btn-primary">
              Görüşme Planla
              <span aria-hidden="true">→</span>
            </a>
            <a href="#hizmetlerimiz" className="site-btn-ghost whitespace-nowrap">
              Hizmetlerimiz
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="hero-finale__status">
            <span className="hero-finale__status-dot" aria-hidden="true" />
            Şu anda yeni projeler kabul ediyoruz
            <span className="hero-finale__status-sep">|</span>
            Ankara · Remote
          </p>
        </div>

        <div className="hero-finale__editor" aria-hidden="true">
          <div
            className="hero-editor hero-editor--console"
            ref={editorRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <div className="hero-editor__bar">
              <span className="hero-editor__filename">VoxeilEngine.tsx</span>
            </div>
            <div className="hero-editor__code">
              <div className="hero-editor__glare" aria-hidden="true" />
              {CODE_LINES.map((line, i) => (
                <span key={i} className="hero-editor__line">
                  {line.length === 0
                    ? "\u00A0"
                    : line.map(([cls, txt], j) => (
                        <span key={j} className={`hero-editor__${cls}`}>
                          {txt}
                        </span>
                      ))}
                </span>
              ))}
            </div>
            <div className="hero-editor__status">
              <span>
                <span className="hero-editor__status-branch">⎇</span> main
              </span>
              <span>TypeScript React</span>
              <span>UTF-8</span>
              <span>Ln 22, Col 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

HeroFinale.displayName = "HeroFinale";
export default HeroFinale;
