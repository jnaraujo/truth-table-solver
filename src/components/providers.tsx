import { router } from "@/routes/router"
import { Toaster } from "react-hot-toast"
import { RouterProvider } from "react-router-dom"

export default function Providers() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}
