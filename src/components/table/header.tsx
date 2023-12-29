import { useTruthTableStore } from "@/store/truth-table-store"
import { Wrench } from "lucide-react"

export default function Header() {
  const variables = useTruthTableStore((s) => s.variables)

  return (
    <header className="flex justify-center gap-8 border-b border-zinc-600 px-1 py-1">
      <div className="flex gap-2">
        {variables.map((item, index) => (
          <p
            key={item + index}
            className="flex w-14 items-center justify-center md:w-20"
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <p className="flex w-14 items-center justify-center md:w-20">Saída</p>
      </div>

      <div className="flex w-14 items-center justify-center md:w-20">
        <Wrench size={18} className="text-zinc-500" />
      </div>
    </header>
  )
}
