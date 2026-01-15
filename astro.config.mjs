import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  // Add your custom domain here
  site: "https://quantumintelligencesociety.org",
  // Ensure the base path is root
  base: "/",
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    react(),
  ],
});