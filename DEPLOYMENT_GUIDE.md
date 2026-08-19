# Deployment Guide — Windows 11 + Netlify

This guide walks you from a zipped project folder to a live website, assuming a
fresh Windows 11 machine with nothing developer-related installed yet. Follow it top to
bottom; every step is required unless marked optional.

Estimated time: 30–45 minutes the first time.

---

## Part 1 — Install the tools you need

You need two things: **Node.js** (to run and build the project) and, optionally,
**Git** + a code editor (to make edits comfortably). Skip the optional ones if you just
want to deploy as-is.

### 1.1 Install Node.js

1. Go to **https://nodejs.org** in your browser.
2. Download the **LTS** version (the button labeled "Recommended for Most Users").
3. Run the downloaded `.msi` installer.
4. Click through the installer accepting the defaults. When you reach the
   "Tools for Native Modules" checkbox, you can leave it **unchecked** — this
   project doesn't need it.
5. Finish the installer, then **restart your computer** (this ensures Node is
   properly added to your PATH).
6. Open **PowerShell** (press `Win`, type `PowerShell`, hit Enter) and confirm the
   install:
   ```powershell
   node -v
   npm -v
   ```
   You should see version numbers (e.g. `v22.x.x` and `10.x.x`). If you see an
   error instead, restart your machine again before continuing.

### 1.2 (Optional but recommended) Install Visual Studio Code

1. Go to **https://code.visualstudio.com**.
2. Download and run the Windows installer.
3. Accept the defaults. This gives you a proper code editor for tweaking
   `lib/data.ts` or any styling later.

### 1.3 (Optional, only needed for Git-based Netlify deploys) Install Git

1. Go to **https://git-scm.com/download/win**.
2. Download and run the installer, accepting all defaults.
3. Confirm in PowerShell:
   ```powershell
   git --version
   ```

---

## Part 2 — Get the project onto your machine

1. Extract the project zip you received (e.g. `kshitij-portfolio-source.zip`) into a
   folder you'll remember, for example `C:\Users\<you>\Projects\kshitij-portfolio`.
2. Open PowerShell and navigate into that folder:
   ```powershell
   cd "C:\Users\<you>\Projects\kshitij-portfolio"
   ```
   (Type `cd ` then drag the extracted folder into the PowerShell window to
   auto-fill the path, then press Enter.)

---

## Part 3 — Install dependencies and run it locally

1. Install all packages the project depends on:
   ```powershell
   npm install
   ```
   This takes 1–2 minutes and creates a `node_modules` folder — that's expected
   and normal; it's never uploaded anywhere.
2. Start the local development server:
   ```powershell
   npm run dev
   ```
3. Open your browser to **http://localhost:3000** — your portfolio should load.
4. Leave this running while you make any edits; the page auto-refreshes.
   Press `Ctrl + C` in PowerShell when you want to stop it.

### Personalize before deploying

- Open `lib/data.ts` in VS Code to edit any text (roles, project descriptions,
  certification links, socials).
- To add your real photo instead of the "KT" placeholder, see the **"Add your
  photo"** section in `README.md`.
- To swap the résumé, replace `public/resume.pdf` with your own file of the
  same name.

---

## Part 4 — Build the production version

Once you're happy with the local preview:

```powershell
npm run build
```

This generates a fully static site inside a new **`out/`** folder. That folder
is everything Netlify needs to serve — plain HTML, CSS, and JS.

---

## Part 5 — Deploy to Netlify

You have two options. **Option A** is the fastest way to get live right now.
**Option B** sets up automatic redeploys whenever you push changes to GitHub —
worth it if you'll keep editing the site.

### Option A — Drag-and-drop deploy (fastest, no Git required)

1. Go to **https://app.netlify.com** and sign up / log in (email, GitHub, or
   Google all work).
2. On your Netlify dashboard, find the **"Deploys"** area — there's a large drop
   zone that says something like *"Drag and drop your site output folder here."*
3. Open **File Explorer**, navigate into your project folder, and drag the
   **`out`** folder (the one created in Part 4) directly onto that drop zone.
4. Netlify uploads it and gives you a live URL within seconds, e.g.
   `random-name-123.netlify.app`.
5. To use a nicer subdomain, go to **Site configuration → Site details → Change
   site name** and set something like `kshitij-tiwari.netlify.app`.

> ⚠️ With this method, the contact form ("Connect & Message") needs one extra
> step to activate — see **Part 6** below, since Netlify only detects the form
> if it's redeployed through their build system at least once, OR you can
> enable it manually as described there.

### Option B — Continuous deployment via GitHub (recommended long-term)

1. Create a free GitHub account at **https://github.com** if you don't have one.
2. In PowerShell, from your project folder, initialize Git and push:
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio"
   ```
3. Create a new empty repository on GitHub (click the **+** icon top-right →
   **New repository**). Name it e.g. `kshitij-portfolio`. Do **not** initialize
   it with a README (you already have one).
4. GitHub will show you commands like these — run them in PowerShell (GitHub
   fills in your exact username/repo):
   ```powershell
   git remote add origin https://github.com/<your-username>/kshitij-portfolio.git
   git branch -M main
   git push -u origin main
   ```
5. Back in Netlify: **Add new site → Import an existing project → Deploy with
   GitHub**. Authorize Netlify to access your GitHub account, then select the
   `kshitij-portfolio` repository.
6. Netlify auto-detects the build settings from `netlify.toml` already in the
   project:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`

   Leave these as detected and click **Deploy site**.
7. Every time you `git push` new changes, Netlify automatically rebuilds and
   redeploys the live site.

---

## Part 6 — Activate the contact form (Netlify Forms)

The "Connect & Message" form is already wired for **Netlify Forms** — no
backend, email service, or API key needed. It just needs Netlify to "see" it
once during a build:

- **If you deployed via Option B (GitHub)**, this happens automatically — the
  form is detected on the first build, and Netlify will start routing
  submissions to your Netlify dashboard **and** email you at the address on
  your Netlify account.
- **If you deployed via Option A (drag-and-drop)**, form detection still works
  the same way as long as you dragged the `out` folder produced by `npm run
  build` (not a manually edited copy) — Netlify scans the HTML for the
  `data-netlify="true"` form on deploy.
- To confirm it's active: go to your site in Netlify → **Forms** tab. You
  should see a form named **"contact"** listed after your first deploy.
- To get emailed when someone submits: **Forms → Form notifications → Add
  notification → Email notification**, and enter
  `kshitij11tiwari@gmail.com`.
- Test it by filling out the form on your live site — the submission should
  appear in the Forms tab within a few seconds.

---

## Part 7 — (Optional) Custom domain

1. In Netlify: **Site configuration → Domain management → Add a domain**.
2. Enter a domain you own (e.g. from Namecheap, GoDaddy, Google Domains).
3. Netlify will show you DNS records to add at your domain registrar (usually
   just changing nameservers or adding a couple of records). Follow their
   on-screen instructions — this varies slightly by registrar.
4. HTTPS is issued automatically by Netlify once DNS propagates (can take a
   few minutes to a few hours).

---

## Troubleshooting

**`npm install` fails or hangs**
Restart PowerShell as Administrator and try again. If you're on a corporate
network with a proxy, you may need to configure npm's proxy settings.

**`npm run dev` says "port 3000 already in use"**
Something else is using that port. Run `npm run dev -- -p 3001` to use port
3001 instead.

**Fonts or icons look wrong locally**
Make sure you have an internet connection — fonts load from Google Fonts at
runtime (not build time), so they need connectivity in the browser.

**The contact form isn't showing up in Netlify's Forms tab**
Double-check you deployed the `out/` folder produced by `npm run build`
(Option A), or that your GitHub-connected build actually succeeded (Option B —
check the "Deploys" log for errors). The form has to be present in the
*built* HTML, not just the source code, for Netlify to detect it.

**I want to change colors/fonts**
Open `app/globals.css` — the `@theme inline` block near the top defines every
color and font used across the site as named tokens (`--color-cyan`,
`--font-display`, etc.).

---

You're done — your portfolio should now be live, personalized, and
receiving messages straight to your inbox.
