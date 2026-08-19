"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, GraduationCap } from "lucide-react";
import { experience, education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Timeline() {
  const [openId, setOpenId] = useState<string | null>(experience[0]?.id ?? null);

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          index="01"
          command="cat career_log.json"
          title="Career log"
          description="A chronological trace of where I've worked and what shipped while I was there. Expand an entry for the full detail."
        />

        <div className="relative border-l border-line pl-8 sm:pl-10">
          {experience.map((entry, i) => {
            const isOpen = openId === entry.id;
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative mb-6 last:mb-0"
              >
                <span
                  className={`absolute -left-[41px] top-6 h-3 w-3 rounded-full border-2 border-void sm:-left-[49px] ${
                    isOpen ? "bg-cyan glow-dot text-cyan" : "bg-ink-faint"
                  }`}
                />

                <button
                  onClick={() => setOpenId(isOpen ? null : entry.id)}
                  className="glass-panel glass-panel-hover w-full rounded-2xl px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-cyan">
                        {entry.period}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl font-semibold text-ink sm:text-2xl">
                        {entry.role}
                      </h3>
                      <p className="mt-0.5 text-sm text-ink-dim">{entry.org}</p>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1 shrink-0 text-ink-faint"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </div>

                  {!isOpen && (
                    <p className="mt-3 text-sm text-ink-dim">{entry.summary}</p>
                  )}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                          {entry.bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-sm leading-relaxed text-ink-dim"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: experience.length * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[41px] top-6 h-3 w-3 rounded-full border-2 border-void bg-ink-faint sm:-left-[49px]" />
            <div className="glass-panel flex items-center gap-4 rounded-2xl px-5 py-5 sm:px-6">
              <GraduationCap className="h-6 w-6 shrink-0 text-violet" strokeWidth={1.75} />
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-violet">
                  {education.period}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                  {education.degree}
                </h3>
                <p className="mt-0.5 text-sm text-ink-dim">{education.school}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
