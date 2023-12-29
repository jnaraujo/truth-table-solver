import { Petrick } from "."

export class PSolver {
  private petrick: Petrick

  constructor(minterms: number[], dontCares: number[], variables: string[]) {
    this.petrick = new Petrick([], [], [], 0, [], "F")

    this.petrick.setMinterms(minterms)
    this.petrick.setDontCares(dontCares)
    this.petrick.setDimension(variables.length)
    this.petrick.setVariableNames(variables)
  }

  public solve() {
    this.petrick.calculateSOPEssentials()
    return this.petrick.getSOPVhdl()
  }
}
