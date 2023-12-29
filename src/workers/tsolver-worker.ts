/* eslint-disable no-case-declarations */
import {
  PSolver,
  generateTruthTable,
  getDataFromTruthTable,
  setOutputsFor,
} from "@/lib/truth-table"

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

self.onmessage = function (e) {
  const { type, payload } = e.data

  switch (type) {
    case "solve":
      const { inputVariables, table } = payload as {
        inputVariables: string[]
        table: string[][]
      }

      const result = handleSolveEquation(inputVariables, table)

      self.postMessage({
        type: "solve",
        payload: {
          equation: result,
        },
      })
      break
  }
}
