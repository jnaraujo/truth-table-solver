import { router } from "@/routes/router"
import { TooltipProvider } from "./ui/tooltip"
import { Toaster } from "./ui/sonner"
import { RouterProvider } from "@tanstack/react-router"

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
