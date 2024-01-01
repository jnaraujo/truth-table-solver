import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout.tsx"
import Home from "./page.tsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])
