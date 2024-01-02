import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useTruthTableStore } from "@/store/truth-table-store"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { useState } from "react"

interface Props {
  children: React.ReactNode
  asChild?: boolean
}

export default function UpdateVariablesDialog({ children, asChild }: Props) {
  const { clear, setVariables, variables } = useTruthTableStore((s) => ({
    clear: s.clear,
    setVariables: s.setVariables,
    variables: s.variables,
  }))

  const [value, setValue] = useState<string>(variables.join(", "))

  const hasDuplicates =
    new Set(value.split(",")).size !== value.split(",").length

  const hasMoreThanFifteenEntries = value.split(",").length > 15

  function handleUpdateVariables() {
    const hasVariablesLengthChanged =
      value.split(",").length !== variables.length

    if (hasVariablesLengthChanged) {
      clear()
    }
    setVariables(value.split(",").map((item) => item.trim()))
  }

  const hasChanged = value !== variables.join(", ")
  const canUpdate = hasChanged && !hasDuplicates && !hasMoreThanFifteenEntries
  return (
    <Dialog>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar variáveis</DialogTitle>
          <DialogDescription>
            Ao editar as variáveis, a{" "}
            <b className="text-red-500">tabela será limpa.</b>
          </DialogDescription>
        </DialogHeader>

        <div>
          <Label htmlFor="variables">Variáveis</Label>
          <Input
            id="variables"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          {hasDuplicates && (
            <p className="mt-2 text-sm text-red-500">
              Não é possível adicionar variáveis duplicadas.
            </p>
          )}

          {hasMoreThanFifteenEntries && (
            <p className="mt-2 text-sm text-red-500">
              Não é possível adicionar mais de 15 variáveis.
            </p>
          )}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={handleUpdateVariables}
              disabled={!canUpdate}
              variant="destructive"
            >
              Editar variáveis
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
