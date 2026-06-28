"use client";

import { forwardRef } from "react";
import { useEditorTilt } from "./useEditorTilt";

const CODE_LINES: Array<Array<[string, string]>> = [
  [["kw", "import"], ["tx", " { useEffect, useRef } "], ["kw", "from"], ["str", " 'react'"]],
  [["kw", "import"], ["tx", " gsap "], ["kw", "from"], ["str", " 'gsap'"]],
  [["kw", "import"], ["tx", " { motion } "], ["kw", "from"], ["str", " 'framer-motion'"]],
  [],
  [["kw", "type"], ["tx", " HeroProps "], ["pn", "= { title: string }"]],
  [],
  [["kw", "export default function"], ["fn", " Hero"], ["pn", "({ title }: HeroProps) {"]],
  [["tx", "  "], ["kw", "const"], ["tx", " ref = useRef<HTMLDivElement>(null)"]],
  [],
  [["tx", "  "], ["fn", "useEffect"], ["pn", "(() => {"]],
  [["tx", "    if (!ref.current) return"]],
  [["tx", "    gsap.from(ref.current, {"]],
  [["tx", "      y: "], ["or", "80"], ["pn", ","]],
  [["tx", "      opacity: "], ["or", "0"], ["pn", ","]],
  [["tx", "      duration: "], ["or", "1.2"], ["pn", ","]],
  [["tx", "      ease: "], ["str", "'power4.out'"], ["pn", ","]],
  [["tx", "    })"]],
  [["tx", "  }, [])"]],
  [],
  [["tx", "  "], ["kw", "return"], ["pn", " ("]],
  [["tx", "    <motion.section ref={ref}>"]],
  [["tx", "      <h1>{title}</h1>"]],
  [["tx", "    </motion.section>"]],
  [["tx", "  )"]],
  [["pn", "}"]],
];

const HeroFinale = forwardRef<HTMLDivElement>((_, ref) => {
  const { ref: editorRef, onMouseMove, onMouseLeave } = useEditorTilt();

  return (
    <div className="hero-finale" ref={ref} aria-hidden="true">
      <div className="hero-finale__inner">
        <div className="hero-finale__content">
          <span className="hero-finale__tag">
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

          <h2 className="hero-finale__title">
            <span className="hero-finale__title-bold">dijital</span>
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
            <a href="#iletisim" className="hero-finale__btn hero-finale__btn--primary">
              Görüşme Planla
              <span aria-hidden="true">→</span>
            </a>
            <a href="#hizmetlerimiz" className="hero-finale__btn hero-finale__btn--ghost">
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
              <span className="hero-editor__filename">Hero.tsx</span>
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
