import { create } from "zustand"

interface TruthTableStore {
  table: [string, string][]
  variables: string[]

  isKeyDuplicated(key: string): boolean
  removeDuplicateKeys(): void
  addValue(value: [string, string]): void
  updateValueFromIndex(index: number, value: [string, string]): void
  removeIndex(index: number): void
  canRemoveIndex(): boolean
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
  removeDuplicateKeys() {
    set((state) => {
      const newArr = [...state.table]
      const newMap = new Map<string, string>()

      for (const item of newArr) {
        newMap.set(item[0], item[1])
      }

      return { table: [...newMap] }
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
  canRemoveIndex() {
    return get().table.length > 1
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
