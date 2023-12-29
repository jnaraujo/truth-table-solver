import Table from "@/components/table"
import {
  PSolver,
  generateTruthTable,
  getDataFromTruthTable,
  setOutputsFor,
} from "@/lib/truth-table"
import { useTruthTableStore } from "@/store/truth-table"
import { useEffect, useMemo, useState } from "react"

export function Component() {
  const [variablesNames, setVariablesNames] = useState<string>("A, B, C, D")
  const [equation, setEquation] = useState<string>("")

  const { table, clear } = useTruthTableStore()

  const inputVariables = useMemo(() => {
    return variablesNames.split(",").map((item) => item.trim())
  }, [variablesNames])

  useEffect(() => {
    setEquation(handleSolveEquation(inputVariables, table))
  }, [inputVariables, table])

  return (
    <>
      <section className="m-4 flex flex-col gap-10">
        <div className="flex gap-12">
          <form className="flex gap-2">
            <label htmlFor="inputVariables">Variávels de entrada:</label>
            <input
              type="text"
              className="border border-zinc-600"
              id="inputVariables"
              value={variablesNames}
              onChange={(e) => {
                const value = e.target.value
                if (value.split(",").length !== inputVariables.length) {
                  clear()
                }
                setVariablesNames(value)
              }}
            />
          </form>

          <div className="flex gap-2 bg-zinc-200 px-2">
            Equação: <output>{equation}</output>
          </div>
        </div>

        <Table inputVariables={inputVariables} />
      </section>

      <footer className="flex h-16 items-center justify-center">
        <p className="text-center">
          <a
            href="https://github.com/jnaraujo/truth-table-solver"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Código fonte do projeto.
          </a>
          <br />O código do algoritmo de Petrick foi baseado no código de{" "}
          <a
            href="https://github.com/charlie-coleman/main-website/blob/master/experiments/kmap/ts/petrick.ts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Charlie Coleman
          </a>
          .
        </p>
      </footer>
    </>
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
