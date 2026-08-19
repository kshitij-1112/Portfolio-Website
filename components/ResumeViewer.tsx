"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Maximize2 } from "lucide-react";
import { profile } from "@/lib/data";

export default function ResumeViewer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative py-8 sm:py-10">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="glass-panel overflow-hidden rounded-2xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-4">
            <div className="flex items-center gap-3 font-mono text-xs text-ink-dim">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/70" />
              </span>
              resume.pdf
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="flex items-center gap-1.5 font-mono text-xs text-ink-dim transition-colors hover:text-ink"
              >
                <Maximize2 className="h-3.5 w-3.5" />
                {expanded ? "Collapse" : "Expand"}
              </button>
              <a
                href={profile.resumeUrl}
                download
                className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan to-violet px-3 py-1.5 font-mono text-xs font-medium text-void"
              >
                <Download className="h-3.5 w-3.5" />
                Download
              </a>
            </div>
          </div>
          <div className={expanded ? "h-[85vh]" : "h-[420px] sm:h-[520px]"}>
            <iframe
              src={`${profile.resumeUrl}#toolbar=0`}
              title="Kshitij Tiwari — Résumé"
              className="h-full w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
