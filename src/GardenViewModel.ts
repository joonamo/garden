import { observable, action } from 'mobx'
import { simulate } from './GameOfLife'

export const gardenSize = 20
class GardenViewModel {
  @observable public garden: number[][] = [[]]
  @observable public helpfulArray: number[] = []

  constructor() {
    this.helpfulArray = new Array(gardenSize).map((_, i) => i)
    this.resetGarden()
  }

  @action
  public resetGarden = () => {
    this.garden = this.helpfulArray.map(() => new Array<number>(gardenSize).fill(0))
  }

  @action
  public setTile = (row: number, col: number, val: number) => {
    this.garden[row][col] = val
  }

  @action
  public simulate = () => {
    this.garden = simulate(this.garden)
  }
}

export const gardenViewModel = new GardenViewModel()