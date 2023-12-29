import {
  PSolver,
  generateTruthTable,
  getDataFromTruthTable,
  setOutputsFor,
} from "@/lib/truth-table"
import { useTruthTableStore } from "@/store/truth-table-store"
import { useEffect, useState } from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { toast } from "sonner"
import UpdateVariablesDialog from "./update-variables-dialog"

export default function TableTop() {
  const [equation, setEquation] = useState<string>("")

  const { table, variables } = useTruthTableStore((s) => ({
    table: s.table,
    variables: s.variables,
  }))

  useEffect(() => {
    setEquation(handleSolveEquation(variables, table))
  }, [variables, table])

  return (
    <div className="flex w-full justify-between gap-12">
      <div className="flex">
        <UpdateVariablesDialog>
          <Tooltip>
            <TooltipTrigger>
              <div
                className="group flex gap-2 hover:cursor-pointer active:cursor-default"
                onClick={() => {}}
              >
                Variávels de entrada:{" "}
                <p className="rounded-md bg-zinc-200 px-2 transition-colors group-hover:bg-zinc-300">
                  {variables}
                </p>
              </div>
            </TooltipTrigger>
            <TooltipContent>Clique para editar as variáveis</TooltipContent>
          </Tooltip>
        </UpdateVariablesDialog>
      </div>

      <Tooltip>
        <TooltipTrigger>
          <div
            className="group/equation flex gap-2 hover:cursor-pointer active:cursor-default"
            onClick={() => {
              navigator.clipboard.writeText(equation)
              toast.success("Equação copiada para a área de transferência.", {
                className: "!text-green-600",
                position: "top-right",
                duration: 2000,
              })
            }}
          >
            Equação de Saída:{" "}
            <output>
              <pre className="rounded-md bg-zinc-200 px-2 transition-colors group-hover/equation:bg-zinc-300">
                {equation}
              </pre>
            </output>
          </div>
        </TooltipTrigger>
        <TooltipContent>Clique para copiar</TooltipContent>
      </Tooltip>
    </div>
  )
}

function handleSolveEquation(inputVariables: string[], table: string[][]) {
  const generatedTable = generateTruthTable(inputVariables.length)

  const inputList: string[][] = []
  for (const [key, value] of table) {
    inputList.push([key, value || "0"])
  }

  setOutputsFor(inputList, generatedTable)

  const { dontCares, minterms } = getDataFromTruthTable(generatedTable)

  const p = new PSolver(minterms, dontCares, inputVariables)

  return p.solve()
}
