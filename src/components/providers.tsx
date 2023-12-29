import { router } from "@/routes/router"
import { RouterProvider } from "react-router-dom"
import { TooltipProvider } from "./ui/tooltip"
import { Toaster } from "./ui/sonner"

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
