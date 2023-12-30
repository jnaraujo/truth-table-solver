export default function Footer() {
  return (
    <footer className="mt-auto flex h-16 items-center justify-center">
      <p className="text-center text-sm">
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
        <br />
        <a
          href="https://storyset.com/cute"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Cute illustrations by Storyset
        </a>
      </p>
    </footer>
  )
}
