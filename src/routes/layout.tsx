import { Outlet } from "react-router-dom"

export default function Root() {
  return (
    <main className="min-h-[100svh] bg-zinc-50 font-sans">
      <Outlet />
    </main>
  )
}
