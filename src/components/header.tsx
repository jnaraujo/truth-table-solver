import { useTruthTableStore } from "@/store/truth-table-store"
import { useEffect, useState } from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { toast } from "sonner"
import UpdateVariablesDialog from "./update-variables-dialog"
import useTableSolver from "@/hooks/useTableSolver"

export default function Header() {
  const [equation, setEquation] = useState<string>("")
  const table = useTruthTableStore((s) => s.table)
  const variables = useTruthTableStore((s) => s.variables)
  const { solve } = useTableSolver()

  useEffect(() => {
    solve(variables, table).then(({ equation }) => {
      setEquation(equation)
    })
  }, [variables, table, solve])

  return (
    <header className="flex min-h-24 w-full flex-col gap-4 md:min-h-20">
      <div className="flex">
        <UpdateVariablesDialog>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="group flex justify-start gap-2 hover:cursor-pointer active:cursor-default">
                <p className="shrink-0 text-sm text-zinc-500">
                  Variáveis de entrada:{" "}
                </p>
                <p className="line-clamp-2 flex rounded-md bg-zinc-200 px-2 font-mono text-sm leading-6 transition-colors group-hover:bg-zinc-300">
                  {variables.join(", ")}
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
            className="group flex justify-start gap-2 hover:cursor-pointer active:cursor-default"
            onClick={() => {
              navigator.clipboard.writeText(equation)
              toast.success("Equação copiada para a área de transferência.", {
                className: "!text-green-600",
                position: "top-right",
                duration: 2000,
              })
            }}
          >
            <p className="shrink-0 text-sm text-zinc-500">Equação de Saída: </p>
            <p className="line-clamp-2 rounded-md bg-zinc-200 px-2 font-mono text-sm leading-6 transition-colors group-hover:bg-zinc-300">
              {equation}
            </p>
          </div>
        </TooltipTrigger>
        <TooltipContent>Clique para copiar</TooltipContent>
      </Tooltip>
    </header>
  )
}
