import { useTruthTableStore } from "@/store/truth-table-store"
import { Wrench } from "lucide-react"
import Cell from "./cell"

export default function Header() {
  const variables = useTruthTableStore((s) => s.variables)

  return (
    <header className="flex justify-center gap-4 border-b border-zinc-600 px-1 py-1">
      {variables.map((item, index) => (
        <Cell key={item + index}>
          <p>{item}</p>
        </Cell>
      ))}
      <Cell>
        <p>Saída</p>
      </Cell>

      <Cell>
        <Wrench size={18} className="text-zinc-500" />
      </Cell>
    </header>
  )
}
