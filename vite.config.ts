import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import webfontDownload from "vite-plugin-webfont-dl"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), webfontDownload()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
