import path from "path"
import { defineConfig, splitVendorChunkPlugin } from "vite"
import react from "@vitejs/plugin-react"
import webfontDownload from "vite-plugin-webfont-dl"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), webfontDownload(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
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
        },
      },
    },
  },
})
