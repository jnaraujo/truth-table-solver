import { useTruthTableStore } from "@/store/truth-table-store"
import { useMemo } from "react"
import Input from "./input"
import { cn } from "@/lib/utils"
import { Trash2 } from "lucide-react"
import Cell from "./cell"
import { toast } from "sonner"

interface Props {
  lineIndex: number
}

export default function Line({ lineIndex }: Props) {
  const removeIndex = useTruthTableStore((s) => s.removeIndex)
  const updateValueFromIndex = useTruthTableStore((s) => s.updateValueFromIndex)
  const tableLength = useTruthTableStore((s) => s.table.length)

  const line = useTruthTableStore((s) => s.table[lineIndex])

  const inputs = useMemo(() => line[0].split(""), [line])
  const output = useMemo(() => line[1], [line])

  const isKeyDuplicated = useTruthTableStore((s) =>
    s.isKeyDuplicated(s.table[lineIndex][0]),
  )

  return (
    <div
      className={cn(
        "group flex h-6 w-full justify-center gap-4 rounded-md px-1",
        {
          "bg-red-100": isKeyDuplicated,
        },
      )}
    >
      {inputs.map((value, index) => (
        <Cell key={index}>
          <Input
            index={index}
            value={value as "#" | "0" | "1"}
            onChange={(value: string, index: number) => {
              const newInputs = [...inputs]
              newInputs[index] = value
              updateValueFromIndex(lineIndex, [newInputs.join(""), output])
            }}
            ariaLabel={`Change input ${index} of line ${lineIndex}`}
          />
        </Cell>
      ))}

      <Cell>
        <Input
          index={inputs.length}
          value={output as "#" | "0" | "1"}
          onChange={(value: string) => {
            updateValueFromIndex(lineIndex, [inputs.join(""), value])
          }}
          ariaLabel={`Change output of line ${lineIndex}`}
        />
      </Cell>

      <Cell>
        <button
          type="button"
          className="rounded px-2 py-1 text-red-500 transition-opacity group-hover:opacity-100 md:opacity-0"
          onClick={() => {
            if (tableLength <= 1) {
              toast.error("Não é possível remover a última linha.", {
                className: "!text-red-600",
                position: "top-right",
                duration: 2000,
              })
              return
            }

            removeIndex(lineIndex)
          }}
          aria-label="Remove line"
        >
          <Trash2 size={20} />
        </button>
      </Cell>
    </div>
  )
}
