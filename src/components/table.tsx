import { useTruthTableStore } from "@/store/truth-table-store"
import TableLine from "./table-line"
import { useMemo } from "react"
import { CopyMinus, Plus } from "lucide-react"
import ConfirmDeleteDuplicatesDialog from "./confirm-delete-duplicates-dialog"

export default function Table() {
  const { addValue, tableLength, variables, removeDuplicateKeys } =
    useTruthTableStore((s) => {
      return {
        addValue: s.addValue,
        tableLength: s.table.length,
        variables: s.variables,
        removeDuplicateKeys: s.removeDuplicateKeys,
      }
    })

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

        <div className="flex justify-between">
          <button
            type="button"
            className="flex gap-1 rounded bg-green-500 px-2 py-1 text-zinc-50 transition-colors hover:bg-green-600"
            onClick={() => {
              addValue(["0".repeat(variables.length), "0"])
            }}
          >
            <Plus />
            Adicionar linha
          </button>

          <ConfirmDeleteDuplicatesDialog onConfirm={removeDuplicateKeys}>
            <button
              type="button"
              className="flex gap-2 rounded bg-red-500 px-2 py-1 text-zinc-50 transition-colors hover:bg-red-600"
            >
              <CopyMinus />
              Remover entradas duplicadas
            </button>
          </ConfirmDeleteDuplicatesDialog>
        </div>
      </div>
    </section>
  )
}
