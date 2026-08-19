"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  command,
  title,
  description,
}: {
  index: string;
  command: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12 sm:mb-16"
    >
      <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-cyan mb-4">
        <span className="text-ink-faint">{index}</span>
        <span className="h-px w-8 bg-line-strong" />
        <span className="text-ink-dim">
          ~/kshitij <span className="text-violet">$</span> {command}
          <span className="terminal-caret" />
        </span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-ink-dim leading-relaxed">{description}</p>
      ) : null}
    </motion.div>
  );
}
