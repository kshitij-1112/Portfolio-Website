"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  TerminalSquare,
  UserRoundCog,
  FolderGit2,
  BadgeCheck,
  MessageSquareText,
} from "lucide-react";

const SECTIONS = [
  { id: "hero", label: "root", icon: TerminalSquare },
  { id: "experience", label: "career", icon: UserRoundCog },
  { id: "projects", label: "builds", icon: FolderGit2 },
  { id: "certifications", label: "creds", icon: BadgeCheck },
  { id: "contact", label: "connect", icon: MessageSquareText },
];

export default function NavDock() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 px-3"
      aria-label="Primary"
    >
      <div className="glass-panel flex items-center gap-1 rounded-2xl px-2 py-2 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.7)]">
        {SECTIONS.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => jumpTo(id)}
              className={`group relative flex items-center gap-2 rounded-xl px-3 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors sm:px-4 ${
                isActive ? "text-void" : "text-ink-dim hover:text-ink"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan to-violet"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <Icon className="relative z-10 h-4 w-4" strokeWidth={2} />
              <span className="relative z-10 hidden sm:inline">{label}</span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
