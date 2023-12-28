export function generateTruthTable(n: number, defaultOutput = 0) {
  const table = new Map<string, string | number>()
  const max = Math.pow(2, n)

  for (let i = 0; i < max; i++) {
    const binary = i.toString(2)
    const padding = "0".repeat(n - binary.length)
    const key = padding + binary
    table.set(key, defaultOutput)
  }

  return table
}

export function setOutputsFor(
  inputs: (string | number)[][],
  table: Map<string, string | number>,
) {
  for (const key of table.keys()) {
    const binary = key.split("")

    for (const expression of inputs) {
      let doesMatch = true

      const binaryInput = String(expression[0]).split("")
      const output = expression[1]

      for (let i = 0; i < binaryInput.length; i++) {
        const char = binaryInput[i]

        if (char !== "#" && char !== binary[i]) {
          doesMatch = false
          break
        }
      }

      if (doesMatch) {
        table.set(key, output)
      }
    }
  }
}
