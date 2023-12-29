import { cn } from "@/lib/utils"

export default function Cell({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn("flex w-14 items-center justify-center md:w-20", className)}
    >
      {children}
    </div>
  )
}
