import { Outlet } from "@tanstack/react-router"

export default function Root() {
  return (
    <div className="flex min-h-[100svh] flex-col bg-zinc-50 font-sans">
      <Outlet />
    </div>
  )
}
