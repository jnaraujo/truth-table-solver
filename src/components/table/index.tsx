import { useTruthTableStore } from "@/store/truth-table-store"
import Line from "./line"
import Header from "./header"
import Footer from "./footer"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

export default function Table() {
  const table = useTruthTableStore((s) => s.table)

  return (
    <article className="flex w-full flex-col gap-4">
      <div className="max-w-[90vw] overflow-x-auto md:w-full">
        <ScrollArea className="h-[50vh] p-3 md:h-[60vh]">
          <div className="flex flex-col gap-2">
            <Header />

            <div className="flex flex-col items-center gap-2">
              {table.map((_, index) => (
                <Line key={index} lineIndex={index} />
              ))}
            </div>
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <Footer />
    </article>
  )
}
