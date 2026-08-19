"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            index="03"
            command="verify --credentials"
            title="Certifications"
            description="Drag sideways to browse. Each card opens the original issuing platform."
          />
        </div>

        <motion.div
          ref={trackRef}
          className="flex cursor-grab gap-5 overflow-x-auto pb-4 active:cursor-grabbing"
          style={{ scrollbarWidth: "thin" }}
          drag="x"
          dragConstraints={trackRef}
          dragElastic={0.06}
        >
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-panel glass-panel-hover group flex w-[260px] shrink-0 select-none flex-col rounded-2xl p-6"
              draggable={false}
            >
              <div className="flex items-center justify-between">
                <BadgeCheck className="h-6 w-6 text-cyan" strokeWidth={1.75} />
                <ExternalLink className="h-4 w-4 text-ink-faint transition-colors group-hover:text-ink" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug text-ink">
                {cert.name}
              </h3>
              <p className="mt-auto pt-6 font-mono text-xs text-ink-dim">
                {cert.issuer}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
