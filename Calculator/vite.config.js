import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, ""),
  build: {
    outDir: "../dist",
  },
  server: {
    port: 8080,
  },
});
