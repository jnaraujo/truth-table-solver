import { create } from "zustand"

interface TruthTableStore {
  table: [string, string][]
  variables: string[]

  isKeyDuplicated(key: string): boolean
  addValue(value: [string, string]): void
  updateValueFromIndex(index: number, value: [string, string]): void
  removeIndex(index: number): void
  clear(): void

  setVariables(variables: string[]): void
}

export const useTruthTableStore = create<TruthTableStore>()((set, get) => ({
  table: [["0000", "0"]],
  variables: ["A", "B", "C", "D"],

  addValue(value: [string, string]) {
    set((state) => {
      const newArr = [...state.table, value]
      return { table: newArr }
    })
  },
  updateValueFromIndex(index: number, value: [string, string]) {
    set((state) => {
      const newArr = [...state.table]

      newArr[index] = value
      return { table: newArr }
    })
  },
  clear() {
    set(() => {
      return { table: [] }
    })
  },
  removeIndex(index: number) {
    set((state) => {
      const newArr = [...state.table]
      newArr.splice(index, 1)
      return { table: newArr }
    })
  },
  isKeyDuplicated(key: string) {
    let founded = false

    for (const item of get().table) {
      if (item[0] === key) {
        if (founded) return true
        founded = true
      }
    }
    return false
  },

  setVariables(variables: string[]) {
    set(() => {
      return { variables }
    })
  },
}))
