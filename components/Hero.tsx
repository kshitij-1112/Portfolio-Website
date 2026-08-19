"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowDown, FileText } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

type TypeState = { text: string; wordIndex: number; deleting: boolean };

function useTypewriter(words: string[], typingSpeed = 65, pauseMs = 1600) {
  const [state, setState] = useState<TypeState>({ text: "", wordIndex: 0, deleting: false });

  useEffect(() => {
    const currentWord = words[state.wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!state.deleting && state.text.length < currentWord.length) {
      timeout = setTimeout(
        () => setState((s) => ({ ...s, text: currentWord.slice(0, s.text.length + 1) })),
        typingSpeed
      );
    } else if (!state.deleting && state.text.length === currentWord.length) {
      timeout = setTimeout(() => setState((s) => ({ ...s, deleting: true })), pauseMs);
    } else if (state.deleting && state.text.length > 0) {
      timeout = setTimeout(
        () => setState((s) => ({ ...s, text: currentWord.slice(0, s.text.length - 1) })),
        typingSpeed / 1.6
      );
    } else {
      timeout = setTimeout(
        () =>
          setState((s) => ({
            text: "",
            deleting: false,
            wordIndex: (s.wordIndex + 1) % words.length,
          })),
        typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [state, words, typingSpeed, pauseMs]);

  return state.text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center pt-28 pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 font-mono text-xs text-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-mint glow-dot" />
            SYSTEM ONLINE — OPEN TO WORK
          </div>

          <p className="mb-3 font-mono text-sm text-cyan">$ whoami</p>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <div className="mt-5 flex h-9 items-center font-mono text-lg text-ink-dim sm:text-xl">
            <span className="mr-2 text-ink-faint">{">"}</span>
            <span className="text-gradient-cyan font-medium">{typed}</span>
            <span className="terminal-caret" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan to-violet px-6 py-3 font-mono text-sm font-medium text-void transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Get in touch
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover flex items-center gap-2 rounded-xl px-6 py-3 font-mono text-sm text-ink"
            >
              <FileText className="h-4 w-4" />
              View résumé
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {[
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
              { href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
              { href: profile.github, icon: GithubIcon, label: "GitHub" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-ink-faint transition-colors hover:text-cyan"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-line" />
          <motion.div
            className="absolute inset-6 rounded-full border border-dashed border-line-strong"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-14 rounded-full border border-cyan/30"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          />

          <div className="glass-panel relative z-10 flex h-64 w-64 items-center justify-center overflow-hidden rounded-full shadow-[0_0_80px_-10px_rgba(76,243,255,0.35)] sm:h-72 sm:w-72">
            {profile.hasPhoto ? (
              <Image
                src={profile.photoSrc}
                alt={profile.name}
                fill
                sizes="288px"
                className="object-cover"
                priority
              />
            ) : (
              <span className="font-display text-6xl font-semibold text-gradient-cyan">
                KT
              </span>
            )}
          </div>

          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full glass-panel px-4 py-1.5 font-mono text-[11px] text-ink-dim whitespace-nowrap">
            {profile.location}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#experience"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-ink-faint sm:block"
        aria-label="Scroll to experience"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
