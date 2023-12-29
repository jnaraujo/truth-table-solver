import Header from "@/components/header"
import Table from "@/components/table"

export function Component() {
  return (
    <>
      <div className="mx-auto mt-10 flex w-full max-w-screen-sm flex-col items-center gap-4 p-4">
        <Header />
        <main className="w-full">
          <Table />
        </main>
      </div>

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
