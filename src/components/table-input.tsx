import { cn } from "@/lib/utils"

interface TableInputProps {
  value: "#" | "0" | "1"
  onChange: (value: string) => void
}
export default function TableInput({ value, onChange }: TableInputProps) {
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
