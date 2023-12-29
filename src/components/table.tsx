import { useTruthTableStore } from "@/store/truth-table"
import TableLine from "./table-line"

interface Props {
  inputVariables: string[]
}

export default function Table({ inputVariables }: Props) {
  const { table, addValue } = useTruthTableStore()

  return (
    <section className="flex flex-col gap-2">
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
            Saída
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
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
      </div>
    </section>
  )
}
