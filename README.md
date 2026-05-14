# Align Landing Page

The marketing site for Align — lives at `realign.day`. The app itself lives at `app.realign.day` (separate Vercel project, same Supabase backend).

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Supabase (for waitlist signups)
- Fraunces + Inter Tight via `next/font/google`
- Vercel hosting

## Setup (one-time, ~15 minutes)

### 1. Get the files onto your Mac

Put this entire folder at `/Users/deannavisperas/Downloads/align-landing/`.

Open Terminal and `cd` into it:

```bash
cd /Users/deannavisperas/Downloads/align-landing
```

### 2. Install dependencies

```bash
npm install
```

Wait for it to finish (~1 min).

### 3. Copy SVG assets into the public folder

You already have all the marketing SVGs in `/mnt/user-data/outputs/`.
Copy these into `public/`:

```bash
# From your Downloads folder (or wherever you saved them):
cp ~/Downloads/align-icon.svg public/
cp ~/Downloads/align-favicon.svg public/
cp ~/Downloads/align-logo-wordmark.svg public/
cp ~/Downloads/card-week-zoomed.svg public/
cp ~/Downloads/card-braindump.svg public/
cp ~/Downloads/card-calendar.svg public/
cp ~/Downloads/half-iphone-braindump.svg public/
cp ~/Downloads/google-mockup-b-sidebyside.svg public/
cp ~/Downloads/early-access-compact-3-empty.svg public/
```

Also save the hero photo as `public/hero-laptop.png`.

### 4. Create `.env.local`

```bash
cp .env.example .env.local
```

Then open `.env.local` and fill in your Supabase keys (you already have these from the app — same project).

### 5. Run the SQL migration on Supabase

Open the Supabase dashboard → SQL Editor → paste in the contents of `sql/001_waitlist.sql` → click Run.

This creates the `waitlist` table and security policies.

### 6. Start the dev server

```bash
npm run dev
```

Open http://localhost:3000 — the landing page should load.

## Deploying to Vercel

### 1. Push to a new GitHub repo

```bash
cd /Users/deannavisperas/Downloads/align-landing
git init
git add .
git commit -m "Initial landing page"
gh repo create align-landing --public --source=. --push
```

(If you don't have `gh` installed: create the repo on github.com, then `git remote add origin <url>` and `git push -u origin main`.)

### 2. Connect to Vercel

- Go to vercel.com → New Project
- Import the `align-landing` GitHub repo
- In Environment Variables, add:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Click Deploy

### 3. Connect realign.day

- Vercel project → Settings → Domains → Add `realign.day`
- Follow the DNS instructions Vercel gives you (you'll add A and CNAME records at Porkbun)
- Wait 5-30 minutes for DNS to propagate

### 4. Move the app to app.realign.day

- Go to the existing `align-app` Vercel project
- Settings → Domains → Add `app.realign.day`
- Add the CNAME record at Porkbun

Done. realign.day → landing, app.realign.day → app.

## How to update content

Almost everything is in `/components/` as React components. To change copy, just open the component file and edit the text.

If you ever need help making changes, ask Claude — paste the file path and what you want changed.

## Project structure

```
align-landing/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout + SEO metadata
│   ├── globals.css           # Tailwind + global styles
│   ├── sitemap.ts            # Auto-generated sitemap
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── google-data-use/page.tsx
│   ├── about/page.tsx        # Features, Why bother, Pricing, FAQ
│   └── api/
│       └── waitlist/route.ts # POST /api/waitlist
├── components/
│   ├── SiteHeader.tsx        # Nav bar
│   ├── Logo.tsx              # Wordmark SVG
│   ├── Hero.tsx              # Hero with laptop bg
│   ├── SomeoneYoureNot.tsx
│   ├── BrainDumpSection.tsx
│   ├── FeaturesGrid.tsx
│   ├── CalendarAttached.tsx
│   ├── TestimonialSection.tsx
│   ├── EarlyAccess.tsx       # Email form
│   └── SiteFooter.tsx
├── lib/
│   └── supabase.ts
├── public/                   # Static assets (SVGs, hero image, manifest)
├── sql/
│   └── 001_waitlist.sql      # Migration to run on Supabase
└── package.json
```
