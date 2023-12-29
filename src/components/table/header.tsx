import { useTruthTableStore } from "@/store/truth-table-store"
import { Wrench } from "lucide-react"
import Cell from "./cell"

export default function Header() {
  const variables = useTruthTableStore((s) => s.variables)

  return (
    <header className="flex justify-center gap-4 border-b border-zinc-300 px-1 py-1">
      {variables.map((item, index) => (
        <Cell key={item + index}>
          <p className="text-sm font-medium text-zinc-500">{item}</p>
        </Cell>
      ))}
      <Cell>
        <p className="text-sm font-medium text-zinc-500">Saída</p>
      </Cell>

      <Cell>
        <Wrench size={16} className="text-zinc-500" />
      </Cell>
    </header>
  )
}
