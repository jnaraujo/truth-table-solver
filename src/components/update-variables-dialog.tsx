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

  function handleUpdateVariables() {
    if (value.split(",").length !== variables.length) {
      clear()
    }
    setVariables(value.split(",").map((item) => item.trim()))
  }

  const hasChanged = value !== variables.join(", ")
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
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={handleUpdateVariables}
              disabled={!hasChanged || hasDuplicates}
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
