import { useEffect, useRef } from "react"
import Worker from "../workers/tsolver-worker?worker"

export default function useTableSolver() {
  const worker = useRef<Worker | null>(null)

  useEffect(() => {
    if (worker.current) return

    worker.current = new Worker()
  }, [])

  function solve(inputVariables: string[], table: string[][]) {
    return new Promise<{
      equation: string
    }>((resolve) => {
      worker.current?.postMessage({
        type: "solve",
        payload: { inputVariables, table },
      })

      worker.current?.addEventListener("message", (event) => {
        if (event.data.type !== "solve") return

        resolve({
          equation: event.data.payload.equation,
        })
      })
    })
  }

  return { solve }
}
