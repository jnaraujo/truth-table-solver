import { useTruthTableStore } from "@/store/truth-table-store"
import TableLine from "./table-line"
import { useMemo } from "react"
import { CopyMinus, Plus } from "lucide-react"
import ConfirmDeleteDuplicatesDialog from "./confirm-delete-duplicates-dialog"
import { Button } from "./ui/button"

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
    <section className="flex w-full flex-col gap-2">
      <Top />

      <div className="flex flex-col items-center gap-2">
        {indexTable.map((index) => (
          <TableLine key={index} lineIndex={index} />
        ))}

        <div className="mt-4 flex w-full justify-between">
          <Button
            className="flex gap-2"
            onClick={() => {
              addValue(["0".repeat(variables.length), "0"])
            }}
          >
            <Plus size={22} />
            Adicionar linha
          </Button>

          <ConfirmDeleteDuplicatesDialog onConfirm={removeDuplicateKeys}>
            <Button variant="destructive" className="flex gap-2">
              <CopyMinus size={22} />
              Remover entradas duplicadas
            </Button>
          </ConfirmDeleteDuplicatesDialog>
        </div>
      </div>
    </section>
  )
}

function Top() {
  const variables = useTruthTableStore((s) => s.variables)

  return (
    <div className="flex justify-center gap-8 border-b border-zinc-600 px-1 py-1">
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
    </div>
  )
}
