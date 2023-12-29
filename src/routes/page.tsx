import {
  PSolver,
  generateTruthTable,
  getDataFromTruthTable,
  setOutputsFor,
} from "@/lib/truth-table"
import { cn } from "@/lib/utils"
import { useTruthTableStore } from "@/store/truth-table"
import { useEffect, useMemo, useState } from "react"

export function Component() {
  const [variablesNames, setVariablesNames] = useState<string>("A, B, C, D")
  const [equation, setEquation] = useState<string>("")

  const { addValue, table, clear } = useTruthTableStore()

  const inputVariables = useMemo(() => {
    return variablesNames.split(",").map((item) => item.trim())
  }, [variablesNames])

  useEffect(() => {
    const generatedTable = generateTruthTable(inputVariables.length)

    const inputList: string[][] = []
    for (const [key, value] of table) {
      inputList.push([key, value || "0"])
    }

    setOutputsFor(inputList, generatedTable)

    const { dontCares, minterms } = getDataFromTruthTable(generatedTable)

    const p = new PSolver(minterms, dontCares, inputVariables)

    setEquation(p.solve())
  }, [inputVariables, table])

  return (
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

      <div className="flex flex-col gap-2 bg-zinc-200">
        <div className="flex gap-6 border-b border-zinc-600">
          <div className="flex gap-2">
            {inputVariables.map((item, index) => (
              <div
                key={item + index}
                className="flex w-28 items-center justify-center"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <div className="flex w-28 items-center justify-center bg-zinc-500 text-zinc-50">
              S
            </div>
          </div>
        </div>

        <form action="" className="flex flex-col gap-2">
          {table.map(([input, output], index) => (
            <TableLine
              key={input + index}
              inputs={input.split("")}
              output={output || "0"}
              lineIndex={index}
            />
          ))}

          <div>
            <button
              type="button"
              className="rounded bg-green-500 px-2 py-1 text-green-50"
              onClick={() => {
                addValue(["0".repeat(inputVariables.length), "0"])
              }}
            >
              Adicionar linha
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

interface TableLineProps {
  inputs: string[]
  output: string

  lineIndex: number
}

function TableLine({
  inputs: initialInputs,
  output: initialOutput,
  lineIndex,
}: TableLineProps) {
  const [inputs, setInputs] = useState<string[]>(initialInputs)
  const [output, setOutput] = useState<string>(initialOutput)
  const { removeIndex, updateValueFromIndex } = useTruthTableStore()

  return (
    <div className="flex gap-6">
      <div className="flex gap-2">
        {inputs.map((value, index) => (
          <div
            key={value + index}
            className="flex w-28 items-center justify-center"
          >
            <TableInput
              value={value as "#" | "0" | "1"}
              onChange={(value) => {
                inputs[index] = value
                setInputs([...inputs])
                updateValueFromIndex(lineIndex, [inputs.join(""), output])
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <div className="flex w-28 items-center justify-center">
          <TableInput
            value={output as "#" | "0" | "1"}
            onChange={(value) => {
              setOutput(value)
              updateValueFromIndex(lineIndex, [inputs.join(""), output])
            }}
          />
        </div>
      </div>

      <div>
        <button
          type="button"
          className="rounded bg-red-500 px-2 py-1 text-red-50"
          onClick={() => {
            removeIndex(lineIndex)
          }}
        >
          Remover
        </button>
      </div>
    </div>
  )
}

interface TableInputProps {
  value: "#" | "0" | "1"
  onChange: (value: string) => void
}
function TableInput({ value, onChange }: TableInputProps) {
  const colors = {
    "#": "bg-orange-200",
    "0": "bg-zinc-300",
    "1": "bg-green-200",
  }

  function nextState(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()

    function nextValue(value: "#" | "0" | "1") {
      if (value === "#") return "0"
      if (value === "0") return "1"
      if (value === "1") return "#"
      return value
    }

    onChange?.(nextValue(value))
  }

  return (
    <button className={cn("w-full", colors[value])} onClick={nextState}>
      {value}
    </button>
  )
}
