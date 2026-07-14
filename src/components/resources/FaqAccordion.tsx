"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaCircleQuestion } from "react-icons/fa6";
import { faqItems } from "@/lib/faq";
import { useHydrationSafeMotion } from "@/lib/use-hydration-safe-motion";
import "./faq-page.css";

const accordionTransition = {
  duration: 0.55,
  ease: [0.4, 0, 0.2, 1] as const,
};

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const { shouldReduceMotion } = useHydrationSafeMotion();

  return (
    <div className="max-w-4xl mx-auto space-y-3 text-muted text-sm sm:text-base">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className={`site-card overflow-hidden transition-[border-color,box-shadow] duration-500 ${
              isOpen ? "faq-card--open" : ""
            }`}
          >
            <button
              type="button"
              className="faq-trigger flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left"
              onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="flex items-start gap-3 min-w-0">
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-orange/30 text-orange"
                  aria-hidden="true"
                >
                  <FaCircleQuestion className="text-sm" />
                </span>
                <span className="text-white font-semibold">{item.question}</span>
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={shouldReduceMotion ? { duration: 0.2 } : accordionTransition}
                className="shrink-0 text-orange"
                aria-hidden="true"
              >
                <FaChevronDown />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={shouldReduceMotion ? { duration: 0.2 } : accordionTransition}
                  className="overflow-hidden"
                >
                  <div className="faq-answer px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                    <p className="leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
