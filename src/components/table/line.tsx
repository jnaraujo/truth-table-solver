import { useTruthTableStore } from "@/store/truth-table-store"
import Input from "./input"
import { cn } from "@/lib/utils"
import { Trash2 } from "lucide-react"
import Cell from "./cell"

interface Props {
  lineIndex: number
}

export default function Line({ lineIndex }: Props) {
  const removeIndex = useTruthTableStore((s) => s.removeIndex)
  const updateValueFromIndex = useTruthTableStore((s) => s.updateValueFromIndex)
  const { inputs, output } = useTruthTableStore((s) => {
    return {
      inputs: s.table[lineIndex][0].split(""),
      output: s.table[lineIndex][1],
    }
  })
  const isKeyDuplicated = useTruthTableStore((s) =>
    s.isKeyDuplicated(s.table[lineIndex][0]),
  )

  return (
    <div
      className={cn(
        "group flex h-8 w-full justify-center gap-8 rounded-md px-1",
        {
          "bg-red-100": isKeyDuplicated,
        },
      )}
    >
      <div className="flex gap-2">
        {inputs.map((value, index) => (
          <Cell key={index}>
            <Input
              index={index}
              value={value as "#" | "0" | "1"}
              onChange={(value, index) => {
                const newInputs = [...inputs]
                newInputs[index] = value
                updateValueFromIndex(lineIndex, [newInputs.join(""), output])
              }}
              ariaLabel={`Change input ${index} of line ${lineIndex}`}
            />
          </Cell>
        ))}

        <Cell className="ml-8">
          <Input
            index={inputs.length}
            value={output as "#" | "0" | "1"}
            onChange={(newOutput) => {
              updateValueFromIndex(lineIndex, [inputs.join(""), newOutput])
            }}
            ariaLabel={`Change output of line ${lineIndex}`}
          />
        </Cell>
      </div>

      <div className="flex w-14 items-center justify-center md:w-20">
        <button
          type="button"
          className="rounded px-2 py-1 text-red-500 transition-opacity group-hover:opacity-100 md:opacity-0"
          onClick={() => {
            removeIndex(lineIndex)
          }}
          aria-label="Remove line"
        >
          <Trash2 size={22} />
        </button>
      </div>
    </div>
  )
}
