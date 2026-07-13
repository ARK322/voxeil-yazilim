"use client";

import "./faq.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaCircleQuestion } from "react-icons/fa6";
import { faqItems } from "@/lib/faq";
import { useHydrationSafeMotion } from "@/lib/use-hydration-safe-motion";

const accordionTransition = {
  duration: 0.55,
  ease: [0.4, 0, 0.2, 1] as const,
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const { canAnimate, shouldReduceMotion } = useHydrationSafeMotion();

  return (
    <section id="sss" className="site-section relative overflow-x-clip">
      <div className="site-container relative">
        <header className="site-section__header">
          <motion.h2
            initial={false}
            animate={canAnimate ? undefined : { opacity: 1, y: 0 }}
            whileInView={canAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="site-section__title"
          >
            Yazılım Hizmetleri SSS
          </motion.h2>
          <motion.p
            initial={false}
            animate={canAnimate ? undefined : { opacity: 1, y: 0 }}
            whileInView={canAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="site-section__desc"
          >
            Proje süreci, backend mimarisi, destek kapsamı ve çalışma modelimiz hakkında en sık sorulan sorular.
          </motion.p>
        </header>

        <div className="max-w-4xl mx-auto space-y-3 text-muted text-sm sm:text-base">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={false}
                animate={canAnimate ? undefined : { opacity: 1, y: 0 }}
                whileInView={canAnimate ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                viewport={{ once: true, margin: "-30px" }}
                className={`site-card overflow-hidden transition-[border-color,box-shadow] duration-500 ${
                  isOpen ? "faq-card--open" : ""
                }`}
              >
                <motion.button
                  type="button"
                  className="faq-trigger flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left"
                  onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  transition={{ duration: 0.2 }}
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
                </motion.button>

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
                      <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
                        transition={
                          shouldReduceMotion
                            ? { duration: 0.2 }
                            : { duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }
                        }
                        className="faq-answer px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5"
                      >
                        <p className="leading-relaxed">{item.answer}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
