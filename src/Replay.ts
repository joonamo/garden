import { GardenState, Inventory } from './GardenViewModel'

export type serializedReplay = number[][][]

export class ReplayEntry {
  data: number[][] = []

  public pushInput = (row: number, col: number, flower: number) => {
    this.data.push([row, col, flower])
  }

  public applyData = (garden: GardenState, inventory: Inventory) => {
    this.data.forEach(element => {
      const [ row, col, flower ] = element
      garden[row][col] = flower
      if (flower > 0) {
        inventory.useFlower(flower)
      }
    })
  }
}

export const serializeReplay = (data: ReplayEntry[]): serializedReplay =>
  data.map(entry => entry.data)
export const deserializeReplay = (data: serializedReplay): ReplayEntry[] =>
  data.map(entry => {
    const o = new ReplayEntry()
    o.data = entry
    return o
  })