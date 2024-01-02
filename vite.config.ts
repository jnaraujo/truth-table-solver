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
  build: {
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("react-router-dom") ||
            id.includes("@remix-run") ||
            id.includes("react-router")
          ) {
            return "@react-router"
          }

          if (id.includes("react") || id.includes("react-dom")) {
            return "react"
          }
        },
      },
    },
  },
})
