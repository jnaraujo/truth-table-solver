import { beforeEach, describe, expect, it } from "vitest"
import { Petrick } from "./petrick"

describe("Petrick", () => {
  let p = new Petrick([], [], [], 0, [], "F// ")
  beforeEach(() => {
    p = new Petrick([], [], [], 0, [], "F")
  })

  it("2 variables", () => {
    /**
     * A B | F
     * 0 0 | 0
     * 0 1 | 1
     * 1 0 | 1
     * 1 1 | 0
     */
    p.setMinterms([1, 2])
    p.setDimension(2)
    p.setVariableNames(["A", "B"])

    p.calculateSOPEssentials()

    expect(p.getSOPGeneric()).toBe("A'B + AB'")
  })

  it("3 variables", () => {
    p.setDimension(3)
    p.setVariableNames(["A", "B", "C"])
    p.setMinterms([3, 4, 5, 6, 7])

    p.calculateSOPEssentials()

    expect(p.getSOPGeneric()).toBe("BC + A")
  })

  it("3 variables and don't care", () => {
    p.setDimension(3)
    p.setVariableNames(["A", "B", "C"])
    p.setMinterms([1, 3])
    p.setDontCares([4, 5, 6, 7])

    p.calculateSOPEssentials()

    expect(p.getSOPGeneric()).toBe("C")
  })

  it("4 variables and don't care - 1", () => {
    p.setDimension(4)
    p.setVariableNames(["A", "B", "C", "D"])
    p.setMinterms([0, 2, 4, 8, 12])
    p.setDontCares([6, 10, 11, 14, 15])

    p.calculateSOPEssentials()

    expect(p.getSOPGeneric()).toBe("D'")
  })

  it("4 variables and don't care - 2", () => {
    p.setDimension(4)
    p.setVariableNames(["A", "B", "C", "D"])
    p.setMinterms([0, 1, 3, 8, 9, 10])
    p.setDontCares([4, 5, 11])

    p.calculateSOPEssentials()

    expect(p.getSOPGeneric()).toBe("B'D + AB' + B'C'")
  })
})
