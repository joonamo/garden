import { observable, action } from 'mobx'
import { simulate } from './GameOfLife'

export const gardenSize = 20
class GardenViewModel {
  @observable public garden: number[][] = [[]]
  @observable public helpfulArray: number[] = []
  @observable public selectedFlower = 1
  @observable public isPlanting = false

  constructor() {
    this.helpfulArray = new Array(gardenSize).map((_, i) => i)
    this.resetGarden()
  }

  @action
  public resetGarden = () => {
    this.garden = this.helpfulArray.map(() => new Array<number>(gardenSize).fill(0))
  }

  @action
  public setTile = (row: number, col: number) => {
    this.garden[row][col] = this.selectedFlower
  }

  @action
  public simulate = () => {
    this.garden = simulate(JSON.parse(JSON.stringify(this.garden)))
  }

  @action
  public setFlower = (flower: number) => {
    this.selectedFlower = flower
  }

  @action
  public startPlanting = () => {
    this.isPlanting = true
  }

  @action
  public stopPlanting = () => {
    this.isPlanting = false
  }
}

export const gardenViewModel = new GardenViewModel()
window.addEventListener('mouseup', () => gardenViewModel.stopPlanting())