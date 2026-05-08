// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Prerender routes for static export (GitHub Pages compatible):
// every page below is rendered to plain HTML at build time so the site can be
// served from any static host without an SSR runtime.
//
// BASE_URL is set by the CI workflow to match the GitHub Pages subpath
// (e.g. /agency-launchpad/). Defaults to / for local builds.
const base = process.env.BASE_URL ?? "/";
const routerBasepath = base.replace(/\/$/, "");

export default defineConfig({
  // Disable the Cloudflare Workers adapter — this site deploys to GitHub Pages
  // (static HTML), not Cloudflare. The adapter renames dist/server/server.js to
  // dist/server/index.js, which breaks TanStack Start's prerender step.
  cloudflare: false,
  vite: { base },
  tanstackStart: {
    server: { entry: "server" },
    router: { basepath: routerBasepath },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      pages: [
        { path: "/" },
        { path: "/contact" },
      ],
    },
  },
});
