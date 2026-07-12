"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaCircleQuestion } from "react-icons/fa6";
import { faqItems } from "@/lib/faq";

const accordionSpring = { type: "spring" as const, stiffness: 320, damping: 32, mass: 0.8 };

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  return (
    <section id="sss" className="site-section relative overflow-x-clip">
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-1/4 h-72 bg-gradient-to-b from-orange/4 via-transparent to-transparent"
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        aria-hidden="true"
      />

      <div className="site-container relative">
        <header className="site-section__header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="site-section__title"
          >
            Yazılım Hizmetleri SSS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="site-section__desc"
          >
            Proje süreci, destek kapsamı ve çalışma modelimiz hakkında en sık sorulan sorular.
          </motion.p>
        </header>

        <div className="max-w-4xl mx-auto space-y-3 text-muted text-sm sm:text-base">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                viewport={{ once: true, margin: "-30px" }}
                layout={!reducedMotion}
                animate={
                  isOpen && !reducedMotion
                    ? {
                        boxShadow: "0 0 28px rgba(232, 101, 48, 0.18)",
                        borderColor: "rgba(232, 101, 48, 0.55)",
                      }
                    : {
                        boxShadow: "0 0 0px rgba(232, 101, 48, 0)",
                        borderColor: "var(--border)",
                      }
                }
                className="site-card overflow-hidden"
              >
                <motion.button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left"
                  onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  whileHover={reducedMotion ? undefined : { backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                  whileTap={reducedMotion ? undefined : { scale: 0.995 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="flex items-start gap-3 min-w-0">
                    <motion.span
                      animate={
                        isOpen && !reducedMotion
                          ? { scale: 1.08, backgroundColor: "rgba(232, 101, 48, 0.18)" }
                          : { scale: 1, backgroundColor: "rgba(232, 101, 48, 0.08)" }
                      }
                      transition={{ duration: 0.25 }}
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-orange/30 text-orange"
                      aria-hidden="true"
                    >
                      <FaCircleQuestion className="text-sm" />
                    </motion.span>
                    <span className="text-white font-semibold">{item.question}</span>
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={reducedMotion ? { duration: 0.2 } : accordionSpring}
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
                      initial={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={reducedMotion ? { duration: 0.2 } : accordionSpring}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={reducedMotion ? false : { opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reducedMotion ? undefined : { opacity: 0, y: -4 }}
                        transition={{ duration: 0.25, delay: reducedMotion ? 0 : 0.05 }}
                        className="border-t border-orange/15 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5"
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
