import Header from "./header"
import Footer from "./footer"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import Lines from "./lines"

export default function Table() {
  return (
    <article className="flex w-full flex-col gap-4">
      <div className="max-w-[90vw] overflow-x-auto md:w-full">
        <ScrollArea className="h-[50vh] p-3 md:h-[60vh]">
          <div className="flex flex-col gap-2">
            <Header />

            <Lines />
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <Footer />
    </article>
  )
}
