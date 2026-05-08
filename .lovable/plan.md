
## Lantern Hill Advisory — Landing Site

A small, refined 3-page marketing site styled per the brief: warm off-white background, deep forest green accents, serif headings, generous whitespace, minimal animation. Statically prerendered so it can be dropped onto GitHub Pages.

### Pages

- `/` Home — Header, hero with lantern mark, positioning paragraph, three Focus Area cards, philosophy + 3 principles, closing CTA, footer
- `/about` — Intro, firm description, "What We Help With" (3 cols), founder section
- `/contact` — Heading, intro copy, form (Name, Email, Organization, Message) that opens the user's email client via `mailto:lanternhilladvisory@gmail.com` on submit, plus visible email fallback

### Branding & assets

- Copy uploaded logos into `src/assets/`:
  - `lantern-header.png` (horizontal lockup) → site header
  - `lantern-mark.png` (icon only) → hero accent + footer mark
- Add `public/favicon.png` from the lantern mark
- Alt text per the brief

### Design system (`src/styles.css`)

Replace tokens with the brand palette (oklch equivalents of):
- `--background` warm off-white `#F8F7F2`
- `--foreground` charcoal `#1F2421`
- `--primary` deep forest green `#00693E` / `--primary-foreground` off-white
- `--accent` dark evergreen `#0B2E22`
- `--muted` soft green-gray `#E8EFEA` / `--muted-foreground` `#66706A`
- `--border` `#D9DED9`
- Fonts: Libre Baskerville (headings) + Inter (body) loaded via Google Fonts in `__root.tsx` head; expose as Tailwind `font-serif` / `font-sans`
- Subtle hover: link color shift, card border darken, button bg darken — no parallax/blobs

### Components (`src/components/`)

- `SiteHeader.tsx` — sticky off-white bar, thin bottom border, logo left, nav right; mobile sheet menu
- `SiteFooter.tsx` — small lantern mark, name, descriptor, email, nav links, copyright
- `SiteLayout.tsx` — wraps page content with header/footer
- `FocusCard.tsx` — thin-border card, heading + body
- `ContactForm.tsx` — labeled inputs, on submit builds `mailto:` URL with subject/body and opens it; shows confirmation message after

### Routes

- `src/routes/__root.tsx` — add Google Fonts links and per-site meta defaults
- `src/routes/index.tsx` — replace placeholder with home; add route-specific `head()` (title, description, og)
- `src/routes/about.tsx` — new
- `src/routes/contact.tsx` — new
- Each route wraps content in `<SiteLayout>`

### GitHub Pages deployment

Configure static prerendering and a deploy workflow:

1. `vite.config.ts` — enable TanStack Start prerender for `/`, `/about`, `/contact` so the build emits static HTML for every route.
2. Add `public/.nojekyll` (prevents GH Pages from hiding files starting with `_`).
3. Add `public/404.html` (copy of index shell) so deep-link refreshes work on GH Pages.
4. Set Vite `base` via env var so the site works at both `username.github.io/repo/` and a custom domain (default `/`).
5. Add `.github/workflows/deploy.yml` — on push to `main`: `bun install`, `bun run build`, upload `dist/` to GitHub Pages via official `actions/deploy-pages`.
6. Add a short `DEPLOY.md` with the two manual steps you'll need to do once: enable Pages → "GitHub Actions" in repo settings, and (optional) set a `BASE_PATH` repo variable if not deploying at root.

### Out of scope

- No backend, no Lovable Cloud, no analytics, no blog, no testimonials, no stock photos, no animations beyond gentle hovers.

### Technical notes

- TanStack Start's prerender option produces static HTML per listed route; combined with `.nojekyll` + `404.html` fallback this is fully GH-Pages compatible.
- Form uses `window.location.href = \`mailto:...?subject=...&body=...\`` — works without any backend.
- All colors defined as semantic tokens; components use `bg-background`, `text-primary`, etc. — no hardcoded hex in JSX.
