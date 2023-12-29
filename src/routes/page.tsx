import Table from "@/components/table"
import TableTop from "@/components/table-top"

export function Component() {
  return (
    <>
      <section className="mx-auto flex w-fit min-w-[50vw] flex-col items-center gap-10 rounded-md bg-zinc-100 p-4">
        <TableTop />
        <Table />
      </section>

      <footer className="flex h-16 items-center justify-center">
        <p className="text-center">
          <a
            href="https://github.com/jnaraujo/truth-table-solver"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Código fonte do projeto.
          </a>
          <br />O código do algoritmo de Petrick foi baseado no código de{" "}
          <a
            href="https://github.com/charlie-coleman/main-website/blob/master/experiments/kmap/ts/petrick.ts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Charlie Coleman
          </a>
          .
        </p>
      </footer>
    </>
  )
}
