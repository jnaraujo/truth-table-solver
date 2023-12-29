import { useTruthTableStore } from "@/store/truth-table-store"
import TableLine from "./table-line"
import { useMemo } from "react"

export default function Table() {
  const tableLength = useTruthTableStore((s) => s.table.length)
  const variables = useTruthTableStore((s) => s.variables)
  const addValue = useTruthTableStore((s) => s.addValue)

  const indexTable = useMemo(() => {
    return Array.from({
      length: tableLength,
    }).map((_, index) => index)
  }, [tableLength])

  return (
    <section className="flex flex-col gap-2">
      <div className="flex gap-8 border-b border-zinc-600 px-1 py-1">
        <div className="flex gap-2">
          {variables.map((item, index) => (
            <div
              key={item + index}
              className="flex w-28 items-center justify-center"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="flex w-28 items-center justify-center">Saída</div>
        </div>
        <div className="w-10" />
      </div>

      <div className="flex flex-col gap-2">
        {indexTable.map((index) => (
          <TableLine key={index} lineIndex={index} />
        ))}

        <div>
          <button
            type="button"
            className="rounded bg-green-500 px-2 py-1 text-green-50"
            onClick={() => {
              addValue(["0".repeat(variables.length), "0"])
            }}
          >
            Adicionar linha
          </button>
        </div>
      </div>
    </section>
  )
}
