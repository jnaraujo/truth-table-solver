import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const Component = await import("./home/index.tsx")
      return {
        Component: Component.default,
      }
    },
  },
])
