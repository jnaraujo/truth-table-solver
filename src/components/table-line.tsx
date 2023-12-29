import { useTruthTableStore } from "@/store/truth-table-store"
import { useCallback, useMemo } from "react"
import TableInput from "./table-input"
import { cn } from "@/lib/utils"
import { Trash2 } from "lucide-react"

interface Props {
  lineIndex: number
}

export default function TableLine({ lineIndex }: Props) {
  const removeIndex = useTruthTableStore((s) => s.removeIndex)
  const updateValueFromIndex = useTruthTableStore((s) => s.updateValueFromIndex)
  const isKeyDuplicated = useTruthTableStore((s) => s.isKeyDuplicated)
  const line = useTruthTableStore((s) => s.table[lineIndex])

  const inputs = useMemo(() => {
    return line[0].split("")
  }, [line])

  const output = useMemo(() => {
    return line[1]
  }, [line])

  const handleOnInputChange = useCallback(
    (value: string, index: number) => {
      const newInputs = [...inputs]
      newInputs[index] = value
      updateValueFromIndex(lineIndex, [newInputs.join(""), output])
    },
    [inputs, lineIndex, output, updateValueFromIndex],
  )

  const handleOnOutputChange = useCallback(
    (newOutput: string) => {
      updateValueFromIndex(lineIndex, [inputs.join(""), newOutput])
    },
    [inputs, lineIndex, updateValueFromIndex],
  )

  return (
    <div
      className={cn("group flex gap-8 rounded-sm px-1", {
        "bg-red-200": isKeyDuplicated(line[0]),
      })}
    >
      <div className="flex gap-2">
        {inputs.map((value, index) => (
          <div key={index} className="flex w-28 items-center justify-center">
            <TableInput
              index={index}
              value={value as "#" | "0" | "1"}
              onChange={handleOnInputChange}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <div className="flex w-28 items-center justify-center">
          <TableInput
            index={0}
            value={output as "#" | "0" | "1"}
            onChange={handleOnOutputChange}
          />
        </div>
      </div>

      <button
        type="button"
        className="w-10 rounded px-2 py-1 text-red-500 opacity-0 transition-opacity group-hover:opacity-100"
        onClick={() => {
          removeIndex(lineIndex)
        }}
      >
        <Trash2 />
      </button>
    </div>
  )
}
