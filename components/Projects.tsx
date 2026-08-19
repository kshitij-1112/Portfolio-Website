"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="02"
          command="ls ./projects --detail"
          title="Selected builds"
          description="A rotating console of what I've shipped — pick an entry to inspect it. Each one traded off different constraints."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Tab list */}
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {projects.map((project, i) => {
              const isActive = project.id === activeId;
              return (
                <motion.button
                  key={project.id}
                  onClick={() => setActiveId(project.id)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`glass-panel-hover relative shrink-0 rounded-xl border px-5 py-4 text-left transition-colors lg:shrink ${
                    isActive
                      ? "border-cyan/50 bg-panel-raised"
                      : "border-line bg-transparent"
                  }`}
                  style={{ minWidth: "220px" }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs ${
                        isActive ? "text-cyan" : "text-ink-faint"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-sm font-medium leading-snug ${
                        isActive ? "text-ink" : "text-ink-dim"
                      }`}
                    >
                      {project.name}
                    </span>
                  </div>
                  {isActive && (
                    <motion.span
                      layoutId="project-active-bar"
                      className="absolute inset-y-2 left-0 w-[2px] rounded-full bg-gradient-to-b from-cyan to-violet"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Active detail card */}
          <div className="relative min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel flex h-full flex-col rounded-2xl p-7 sm:p-9"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-violet">
                  {active.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {active.name}
                </h3>

                {active.metric && (
                  <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full glass-panel px-3 py-1 font-mono text-xs text-mint">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    {active.metric}
                  </div>
                )}

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-dim sm:text-base">
                  {active.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {active.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-dim"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  {active.href ? (
                    <a
                      href={active.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-violet px-5 py-2.5 font-mono text-sm font-medium text-void transition-transform hover:scale-[1.03]"
                    >
                      {active.hrefLabel ?? "View project"}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-2.5 font-mono text-sm text-ink-dim">
                      {active.hrefLabel ?? "Private / team project"}
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
