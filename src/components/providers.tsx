import { router } from "@/routes/router"
import { Toaster } from "react-hot-toast"
import { RouterProvider } from "react-router-dom"
import { TooltipProvider } from "./ui/tooltip"

export default function Providers() {
  return (
    <>
      <TooltipProvider delayDuration={300}>
        <RouterProvider router={router} />
      </TooltipProvider>

      <Toaster />
    </>
  )
}
