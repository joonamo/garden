import { GardenState, Inventory } from './GardenViewModel'

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

