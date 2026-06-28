"use client";

import { forwardRef } from "react";

const BRIDGE_WORDS = ["Strateji.", "Tasarım.", "Uygulama."] as const;

const HeroBridge = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="hero-bridge" ref={ref} aria-hidden="true">
      <div className="hero-bridge__inner">
        {BRIDGE_WORDS.map((word) => (
          <p key={word} className="hero-bridge__step">
            {word}
          </p>
        ))}
      </div>
    </div>
  );
});

HeroBridge.displayName = "HeroBridge";
export default HeroBridge;
