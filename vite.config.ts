import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Deploy base path. On GitHub Pages this project is served under
  // /deepscrape-web/, so assets AND the client-side router (see App.tsx, which
  // reads import.meta.env.BASE_URL) are anchored here. When a custom domain is
  // attached the site moves to the domain root — change this to "/" and rebuild.
  base: "/deepscrape-web/",
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: true,
  },
});
