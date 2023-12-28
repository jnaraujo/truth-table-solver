import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout.tsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: () => import("./page.tsx"),
      },
    ],
  },
])
