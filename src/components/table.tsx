import { useTruthTableStore } from "@/store/truth-table-store"
import TableLine from "./table-line"
import { useMemo } from "react"

export default function Table() {
  const tableLength = useTruthTableStore((s) => s.table.length)

  const indexTable = useMemo(() => {
    return Array.from({
      length: tableLength,
    }).map((_, index) => index)
  }, [tableLength])

  return (
    <section className="flex flex-col gap-2">
      <div className="flex gap-8 border-b border-zinc-600 px-1 py-1">
        <Variables />
        <div className="flex gap-2">
          <div className="flex w-28 items-center justify-center">Saída</div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {indexTable.map((index) => (
          <TableLine key={index} lineIndex={index} />
        ))}

        <div>
          <AddNewLineButton />
        </div>
      </div>
    </section>
  )
}

function Variables() {
  const variables = useTruthTableStore((s) => s.variables)

  return (
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
  )
}

function AddNewLineButton() {
  const { addValue, variables } = useTruthTableStore()

  return (
    <button
      type="button"
      className="rounded bg-green-500 px-2 py-1 text-green-50"
      onClick={() => {
        addValue(["0".repeat(variables.length), "0"])
      }}
    >
      Adicionar linha
    </button>
  )
}
