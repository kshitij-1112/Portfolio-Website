import { Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-faint transition-colors hover:text-cyan">
            <Mail className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-faint transition-colors hover:text-cyan">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-faint transition-colors hover:text-cyan">
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
