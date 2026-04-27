// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.theintelligenceagency.com",
  integrations: [
    starlight({
      title: "JsonAnalytix Docs",
      description:
        "Public documentation for the @jsonanalytix/* monorepo: packages, playbooks, prompts, observability, and operations.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/jsonanalytix",
        },
      ],
      // Pagefind ships built-in with Starlight; left at default (enabled).
      // IA sidebar is fleshed out in T1 (P21). For T0 baseline we ship the
      // Starlight default auto-generated sidebar so `pnpm build` succeeds.
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: { directory: "getting-started" },
        },
      ],
    }),
  ],
});
