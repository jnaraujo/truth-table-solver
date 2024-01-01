import { useTruthTableStore } from "@/store/truth-table-store"
import Line from "./line"

export default function Lines() {
  const table = useTruthTableStore((s) => s.table)
  return (
    <div className="flex flex-col items-center gap-2">
      {table.map((_, index) => (
        <Line key={index} lineIndex={index} />
      ))}
    </div>
  )
}
