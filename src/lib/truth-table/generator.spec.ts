import { describe, expect, it } from "vitest"
import { generateTruthTable, setOutputsFor } from "./generator"

describe("generator", () => {
  it("should generate a truth table", () => {
    const table = generateTruthTable(3)

    expect(table.size).toBe(8)
    for (const key of table.keys()) {
      expect(table.get(key)).toBe("0")
    }
  })

  it("should set outputs for one input for 3 bits", () => {
    const table = generateTruthTable(3)
    const inputs = [["#1#", "1"]]

    setOutputsFor(inputs, table)

    expect(table.get("000")).toBe("0")
    expect(table.get("001")).toBe("0")
    expect(table.get("010")).toBe("1")
    expect(table.get("011")).toBe("1")
    expect(table.get("100")).toBe("0")
    expect(table.get("101")).toBe("0")
    expect(table.get("110")).toBe("1")
    expect(table.get("111")).toBe("1")
  })

  it("should set outputs for 2 inputs for 3 bits", () => {
    const table = generateTruthTable(3)
    const inputs = [
      ["#1#", "1"],
      ["0#0", "#"],
    ]

    setOutputsFor(inputs, table)

    expect(table.get("000")).toBe("#")
    expect(table.get("001")).toBe("0")
    expect(table.get("010")).toBe("#")
    expect(table.get("011")).toBe("1")
    expect(table.get("100")).toBe("0")
    expect(table.get("101")).toBe("0")
    expect(table.get("110")).toBe("1")
    expect(table.get("111")).toBe("1")
  })

  it("should set outputs for 2 inputs for 5 bits", () => {
    const table = generateTruthTable(5)
    const inputs = [
      ["#0000", "1"],
      ["1111#", "1"],
    ]

    setOutputsFor(inputs, table)

    for (const key of table.keys()) {
      if (key.endsWith("0000")) {
        expect(table.get(key)).toBe("1")
      } else if (key.startsWith("1111")) {
        expect(table.get(key)).toBe("1")
      } else {
        expect(table.get(key)).toBe("0")
      }
    }
  })
})
