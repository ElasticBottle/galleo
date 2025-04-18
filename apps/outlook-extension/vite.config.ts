import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import viteTsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: ["NEXT_PUBLIC_", "VITE_"],
  plugins: [
    mkcert(),
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    TanStackRouterVite({}),
    react(),
  ],
});
