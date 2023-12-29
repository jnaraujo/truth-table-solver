import {
  PSolver,
  generateTruthTable,
  getDataFromTruthTable,
  setOutputsFor,
} from "@/lib/truth-table"
import { useTruthTableStore } from "@/store/truth-table-store"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export default function TableTop() {
  const [equation, setEquation] = useState<string>("")

  const { table, clear, variables, setVariables } = useTruthTableStore()

  useEffect(() => {
    setEquation(handleSolveEquation(variables, table))
  }, [variables, table])

  return (
    <div className="flex gap-12">
      <form className="flex gap-2">
        <label htmlFor="inputVariables">Variávels de entrada:</label>
        <input
          type="text"
          className="border border-zinc-600"
          id="inputVariables"
          value={variables}
          onChange={(e) => {
            const value = e.target.value
            if (value.split(",").length !== variables.length) {
              clear()
            }
            setVariables(value.split(",").map((item) => item.trim()))
          }}
        />
      </form>

      <Tooltip>
        <TooltipTrigger>
          <div
            className="group/equation flex gap-2 hover:cursor-pointer active:cursor-default"
            onClick={() => {
              navigator.clipboard.writeText(equation)
              toast.success("Equação copiada para a área de transferência.", {
                position: "top-right",
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
