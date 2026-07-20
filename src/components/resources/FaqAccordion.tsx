"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaCircleQuestion } from "react-icons/fa6";
import { faqItems } from "@/lib/faq";
import { useHydrationSafeMotion } from "@/lib/use-hydration-safe-motion";
import { CompanyIcon } from "@/components/company/CompanyShell";
import "./faq-page.css";

const accordionTransition = {
  duration: 0.55,
  ease: [0.4, 0, 0.2, 1] as const,
};

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const { shouldReduceMotion } = useHydrationSafeMotion();

  return (
    <div className="faq-list">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className={`faq-item${isOpen ? " faq-item--open" : ""}`}
          >
            <button
              type="button"
              className="faq-trigger"
              onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="faq-trigger__main">
                <CompanyIcon Icon={FaCircleQuestion} />
                <span className="faq-trigger__q">{item.question}</span>
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={shouldReduceMotion ? { duration: 0.2 } : accordionTransition}
                className="faq-trigger__chevron"
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
                  <div className="faq-answer">
                    <p>{item.answer}</p>
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
