# Kshitij Tiwari — Portfolio

A dark, terminal/HUD-styled portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

Full deployment instructions (Windows 11 + Netlify, step by step) are in **`DEPLOYMENT_GUIDE.md`**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
app/                 Next.js App Router entry (layout, page, global styles)
components/          All UI sections (Hero, Timeline, Projects, Certifications, ContactForm, etc.)
lib/data.ts          ALL your content lives here — name, experience, projects, skills, certs
public/resume.pdf    Your resume, embedded in the in-page viewer and linked for download
public/images/       Add your photo here (see "Add your photo" below)
```

## Editing your content

Everything text-based — job history, project descriptions, skills, certifications, social
links — lives in **`lib/data.ts`**. Edit that one file and every section updates automatically.

## Add your photo

The hero currently shows a glowing "KT" monogram placeholder. To use a real photo:

1. Create a folder `public/images/` and drop your photo in as `kshitij.jpg` (a square image,
   at least 600x600px, works best).
2. Open `lib/data.ts` and change:
   ```ts
   hasPhoto: false,
   ```
   to
   ```ts
   hasPhoto: true,
   ```
3. Save — the hero will automatically swap in your photo.

## Design system

- **Palette:** near-black background (#06070c), cyan (#4cf3ff) and violet (#9b6bff) neon
  accents used only on interactive/active states, mint (#5fffb0) for status indicators.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/terminal text).
- **Signature motif:** terminal-prompt section headers (`> cat career_log.json`) and a
  floating command-dock for navigation — a nod to the cybersecurity/dev-console identity.

## Tech stack

- Next.js 16 (App Router, static export)
- Tailwind CSS v4
- Framer Motion
- lucide-react (icons)
- Netlify Forms (contact form — no backend needed)
