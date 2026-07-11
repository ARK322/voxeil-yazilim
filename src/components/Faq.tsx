"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqItems } from "@/lib/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="sss" className="site-section relative overflow-x-clip">
      <div className="site-container">
        <header className="site-section__header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="site-section__title"
          >
            Sık Sorulan Sorular
          </motion.h2>
        </header>

        <div className="max-w-4xl mx-auto space-y-4 text-muted text-sm sm:text-base">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="site-card overflow-hidden"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-white font-semibold">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-orange"
                  aria-hidden="true"
                >
                  <FaChevronDown />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 sm:px-6 sm:pb-6 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
