import { create } from "zustand"

interface TruthTableStore {
  table: [string, string][]

  addValue(value: [string, string]): void
  updateValueFromIndex(index: number, value: [string, string]): void
  findValue(value: string): [string, string] | undefined
  removeKey(key: string): void
  removeIndex(index: number): void
  clear(): void
}

export const useTruthTableStore = create<TruthTableStore>()((set, get) => ({
  table: [["0000", "0"]],

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
  findValue(key: string) {
    const found = get().table.find((item) => item[0] === key)
    return found
  },
  removeKey(key: string) {
    set((state) => {
      const newArr = [...state.table]
      const index = newArr.findIndex((item) => item[0] === key)
      newArr.splice(index, 1)
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
}))
