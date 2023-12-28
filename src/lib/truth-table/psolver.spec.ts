import { describe, expect, it } from "vitest"
import { PSolver } from "./psolver"

describe("PSolver", () => {
  it("2 variables", () => {
    const p = new PSolver([1, 2], [], ["A", "B"])
    expect(p.solve()).toBe("A'B + AB'")
  })

  it("3 variables", () => {
    const p = new PSolver([3, 4, 5, 6, 7], [], ["A", "B", "C"])

    expect(p.solve()).toBe("BC + A")
  })

  it("3 variables and don't care", () => {
    const p = new PSolver([1, 3], [4, 5, 6, 7], ["A", "B", "C"])

    expect(p.solve()).toBe("C")
  })

  it("4 variables and don't care - 1", () => {
    const p = new PSolver(
      [0, 2, 4, 8, 12],
      [6, 10, 11, 14, 15],
      ["A", "B", "C", "D"],
    )

    expect(p.solve()).toBe("D'")
  })

  it("4 variables and don't care - 2", () => {
    const p = new PSolver([0, 1, 3, 8, 9, 10], [4, 5, 11], ["A", "B", "C", "D"])

    expect(p.solve()).toBe("B'D + AB' + B'C'")
  })
})
