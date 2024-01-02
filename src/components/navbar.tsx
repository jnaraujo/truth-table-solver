export default function Navbar() {
  return (
    <header className="my-2 flex items-center justify-between rounded-2xl bg-orange-50/50 shadow-sm">
      <a href="/">
        <img
          src="/logo.webp"
          alt="Logo"
          width="56"
          height="56"
          className="h-12 w-12 md:h-14 md:w-14"
        />
      </a>

      <nav className="mr-4">
        <ul className="flex gap-4">
          <li>
            <a href="/#tts" className="text-sm text-yellow-900">
              Truth Table Solver
            </a>
          </li>
          <li>
            <a href="/#tips" className="text-sm text-yellow-900">
              Dicas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
