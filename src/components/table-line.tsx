import { useTruthTableStore } from "@/store/truth-table"
import { useState } from "react"
import TableInput from "./table-input"

interface Props {
  inputs: string[]
  output: string

  lineIndex: number
}

export default function TableLine({
  inputs: initialInputs,
  output: initialOutput,
  lineIndex,
}: Props) {
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
                const newInputs = [...inputs]
                newInputs[index] = value
                setInputs(newInputs)
                updateValueFromIndex(lineIndex, [newInputs.join(""), output])
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <div className="flex w-28 items-center justify-center">
          <TableInput
            value={output as "#" | "0" | "1"}
            onChange={(newOutput) => {
              setOutput(newOutput)
              updateValueFromIndex(lineIndex, [inputs.join(""), newOutput])
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
