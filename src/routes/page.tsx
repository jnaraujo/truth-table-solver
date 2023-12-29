import Table from "@/components/table"
import TableTop from "@/components/table-top"

export function Component() {
  return (
    <>
      <section className="mx-auto mt-10 w-fit min-w-[50vw] p-4">
        <div className="flex flex-col items-center gap-10">
          <TableTop />
          <Table />
        </div>
      </section>

      <footer className="mt-auto flex h-16 items-center justify-center">
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
