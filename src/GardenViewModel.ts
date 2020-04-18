import { observable, action } from 'mobx'
import { simulate } from './GameOfLife'

export const thisOrPrevious =
  (state: gardenState, prevState: gardenState, row: number, col: number) => {
    let value = state[row][col]
    const prevValue = prevState[row][col]
    let isPrev = false
    if (value === 0 && prevValue > 0) {
      isPrev = true
      value = prevValue
    }
    return { value, isPrev }
  }

export class Scores {
  @observable cumulative = 0
  @observable frame = 0
  @observable '1' = 0
  @observable '2' = 0
  @observable '3' = 0

  public applyFrame = () => {
    this.cumulative += this.frame
  }

  public updateFrame = (state: gardenState, prevState: gardenState) => {
    const scores = {
      1: 0,
      2: 0,
      3: 0,
    }
    state.map((row, i) => row.map((_, j) => {
      const { value } = thisOrPrevious(state, prevState, i, j)
      scores[value] += 1
      return null
    }))
    this['1'] = scores[1]
    this['2'] = scores[2]
    this['3'] = scores[3]
    this.frame = (scores[1] || 1) * (scores[2] || 1) * (scores[3] || 1)
  }
}

export type gardenState = number[][]

export const gardenSize = 20
export const simulationLength = 30
class GardenViewModel {
  @observable public garden: number[][] = [[]]
  @observable public previousGarden: number[][] = [[]]
  @observable public helpfulArray: number[] = []
  @observable public selectedFlower = 1
  @observable public isPlanting = false
  @observable public scores = new Scores()
  @observable public day = 0
  @observable public interactive = true

  constructor() {
    this.helpfulArray = new Array(gardenSize).map((_, i) => i)
    this.resetGarden()
  }

  @action
  public resetGarden = () => {
    this.garden = this.helpfulArray.map(() => new Array<number>(gardenSize).fill(0))
    this.previousGarden = this.helpfulArray.map(() => new Array<number>(gardenSize).fill(0))
    this.scores = new Scores()
    this.day = 0
  }

  @action
  public setTile = (row: number, col: number) => {
    if (this.interactive) {
      this.garden[row][col] = this.selectedFlower
      this.scores.updateFrame(this.garden, this.previousGarden)
    }
  }

  public startSimulation = () => {
    this.interactive = false
    this.stopPlanting()
    this.simulate()
    if (this.day % simulationLength !== 0) {
      window.setTimeout(this.startSimulation, 300)
    } else {
      this.interactive = true
    }
  }

  @action
  public simulate = () => {
    this.day++
    this.scores.applyFrame()
    this.previousGarden = this.garden
    this.garden = simulate(JSON.parse(JSON.stringify(this.garden)))
    this.scores.updateFrame(this.garden, this.previousGarden)
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