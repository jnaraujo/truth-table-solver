import { cn } from "@/lib/utils"

interface Props {
  className?: string
}
export default function UsageTip({ className }: Props) {
  return (
    <section
      id="tips"
      className={cn(
        "mx-auto grid grid-cols-1 items-center gap-2 rounded-2xl bg-orange-50 p-6 shadow-md md:grid-cols-[1fr_200px] md:py-4",
        className,
      )}
    >
      <div className="space-y-1">
        <h2 className="text-lg font-medium text-yellow-900">
          Ei! Algumas dicas rápidas... ✌️
        </h2>
        <p className="text-sm text-yellow-700">
          1. Essa tabela não está completa por um motivo: você pode definir{" "}
          <a
            className="font-medium text-yellow-500 underline"
            href="https://en.wikipedia.org/wiki/Don%27t-care_term"
            target="_blank"
            rel="noreferrer"
          >
            don't cares
          </a>{" "}
          tanto na entrada quanto na saída. Basta clicar em uma{" "}
          <code className="rounded-md bg-yellow-700/10 px-1">célula</code> para
          mudar o valor.
        </p>
        <p className="text-sm text-yellow-700">
          2. Quando a{" "}
          <code className="rounded-md bg-red-100 px-1">
            linha estiver vermelha
          </code>
          , significa que você tem uma entrada duplicada. Você pode remover
          clicando em{" "}
          <code className="rounded-md bg-yellow-700/10 px-1">
            Remover entradas duplicadas
          </code>
          .
        </p>
      </div>

      <img
        src="/cat.svg"
        className="w-60 justify-self-center md:w-40 md:justify-self-end"
        width="160"
        height="160"
        loading="lazy"
        alt="Cat playing with a rocket"
      />
    </section>
  )
}
