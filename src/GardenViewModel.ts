import { observable, action } from 'mobx'

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
    console.log(JSON.parse(JSON.stringify(this.garden)))
  }
}

export const gardenViewModel = new GardenViewModel()