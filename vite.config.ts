import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import Unfonts from "unplugin-fonts/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      fontsource: {
        families: [
          {
            name: "Inter Variable",
            weights: [400, 500],
          },
        ],
      },
    }),
  ],
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
          if (id.includes("@tanstack/react-router")) {
            return "tanstack-router"
          }

          if (id.includes("react") || id.includes("react-dom")) {
            return "react"
          }
        },
      },
    },
  },
})
