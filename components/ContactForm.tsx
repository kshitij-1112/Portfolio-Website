"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

type Status = "idle" | "submitting" | "success" | "error";

function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({ "form-name": "contact", ...values }),
      });
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          index="04"
          command="mail --compose --to kshitij"
          title="Connect & message"
          description="Sends straight to my inbox — no middleman, no scheduling link required. I read every message."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="glass-panel flex flex-col gap-5 rounded-2xl p-7"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-cyan">
                Direct channels
              </p>
              <p className="mt-2 text-sm text-ink-dim">
                Prefer your own client? Reach me directly here.
              </p>
            </div>
            {[
              { href: `mailto:${profile.email}`, icon: Mail, label: profile.email },
              { href: profile.linkedin, icon: LinkedinIcon, label: profile.linkedinLabel },
              { href: profile.github, icon: GithubIcon, label: profile.githubLabel },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-line px-4 py-3 text-sm text-ink-dim transition-colors hover:border-cyan/40 hover:text-ink"
              >
                <Icon className="h-4 w-4 shrink-0 text-cyan" />
                <span className="truncate font-mono">{label}</span>
              </a>
            ))}
          </motion.div>

          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel flex flex-col gap-5 rounded-2xl p-7 sm:p-8"
          >
            {/* Required for Netlify's static form detection */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" onChange={() => {}} />
              </label>
            </p>

            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-ink-dim">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={values.name}
                onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-cyan/50"
                placeholder="Ada Lovelace"
              />
            </div>

            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-ink-dim">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={values.email}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-cyan/50"
                placeholder="you@domain.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-ink-dim">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                className="mt-2 w-full resize-none rounded-xl border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-cyan/50"
                placeholder="Let's talk about..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-violet px-6 py-3 font-mono text-sm font-medium text-void transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 font-mono text-xs text-mint">
                <CheckCircle2 className="h-4 w-4" /> Message sent — I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 font-mono text-xs text-red-400">
                <AlertCircle className="h-4 w-4" /> Something went wrong —
                email me directly at {profile.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
