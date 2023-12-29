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
      className={cn("flex w-10 items-center justify-center md:w-12", className)}
    >
      {children}
    </div>
  )
}
