import { cn } from "@/lib/utils"

interface Props {
  value: "#" | "0" | "1"
  index: number
  onChange: (value: string, index: number) => void
  ariaLabel?: string
}

const colors = {
  "#": "text-orange-500",
  "0": "text-zinc-500",
  "1": "text-green-500",
}

export default function Input({ value, onChange, index, ariaLabel }: Props) {
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
      className={cn("w-full text-sm", colors[value])}
      onClick={nextState}
      aria-label={ariaLabel}
    >
      {value}
    </button>
  )
}
