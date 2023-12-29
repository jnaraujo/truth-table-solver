import { Outlet } from "react-router-dom"

export default function Root() {
  return (
    <main className="flex min-h-[100svh] flex-col bg-zinc-50 font-sans">
      <Outlet />
    </main>
  )
}
