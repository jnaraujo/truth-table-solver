import { cn } from "@/lib/utils"

interface TableInputProps {
  value: "#" | "0" | "1"
  index: number
  onChange: (value: string, index: number) => void
}
export default function TableInput({
  value,
  onChange,
  index,
}: TableInputProps) {
  const colors = {
    "#": "bg-orange-100",
    "0": "bg-zinc-100",
    "1": "bg-green-100",
  }

  function nextState(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    function nextValue(value: "#" | "0" | "1") {
      if (value === "#") return "0"
      if (value === "0") return "1"
      if (value === "1") return "#"
      return value
    }
    onChange?.(nextValue(value), index)
  }

  return (
    <button
      className={cn("w-full", colors[value])}
      onClick={nextState}
      aria-label="Change value"
    >
      {value}
    </button>
  )
}
