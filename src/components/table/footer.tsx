import { useTruthTableStore } from "@/store/truth-table-store"
import { Button } from "../ui/button"
import { CopyMinus, Plus } from "lucide-react"
import ConfirmDeleteDuplicatesDialog from "../confirm-delete-duplicates-dialog"

export default function Footer() {
  const { addValue, variables, removeDuplicateKeys } = useTruthTableStore(
    (s) => {
      return {
        addValue: s.addValue,
        variables: s.variables,
        removeDuplicateKeys: s.removeDuplicateKeys,
      }
    },
  )

  return (
    <div className="mt-2 flex w-full flex-col justify-between gap-2 md:flex-row">
      <Button
        className="flex w-full gap-2 md:w-fit"
        onClick={() => {
          addValue(["0".repeat(variables.length), "0"])
        }}
      >
        <Plus size={22} />
        Adicionar linha
      </Button>

      <ConfirmDeleteDuplicatesDialog onConfirm={removeDuplicateKeys} asChild>
        <Button variant="destructive" className="flex w-full gap-2 md:w-fit">
          <CopyMinus size={22} />
          Remover entradas duplicadas
        </Button>
      </ConfirmDeleteDuplicatesDialog>
    </div>
  )
}
