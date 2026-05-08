# Deploying to GitHub Pages

This site is configured to deploy as static HTML to GitHub Pages via GitHub
Actions. Every route (`/`, `/about`, `/contact`) is prerendered to its own
HTML file at build time, so no server runtime is needed.

## One-time setup

1. Push this repo to GitHub (any name).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.

That's it. The workflow at `.github/workflows/deploy.yml` runs on every push
to `main`, builds the site, and publishes it.

## Local build

```bash
bun install
bun run build
```

The static output is written to `dist/client/` (or `dist/` depending on the
build environment). You can preview it with any static file server, e.g.:

```bash
bunx serve dist/client
```

## Deploying under a project subpath

If your site is published at `https://<user>.github.io/<repo>/` (instead of a
custom domain or `<user>.github.io` root), Vite's `base` needs to match the
subpath. Add this to the build step in `.github/workflows/deploy.yml`:

```yaml
      - name: Build (static prerender)
        run: bun run build
        env:
          BASE_URL: /<repo>/
```

…and override `base` in `vite.config.ts` if you go that route. For a custom
domain or the root user/org page, no change is needed.

## Custom domain

Add a `public/CNAME` file containing your domain (e.g. `lanternhilladvisory.com`)
and set the DNS records GitHub Pages requires. The file is copied into the
build output automatically.

## Notes

- `public/.nojekyll` prevents GitHub Pages from hiding files starting with `_`.
- The workflow copies `index.html` to `404.html` so deep-link refreshes still
  load the correct page.
- The contact form opens the visitor's email client via `mailto:` — there is
  no backend, which is what makes the static deploy possible.
