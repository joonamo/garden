import { observable, action } from 'mobx'
import { simulate } from './GameOfLife'
import moment, { Moment } from 'moment'

export const gardenSize = 15
export const startMonth = 4
export const lastMonth = 8

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
    this.frame = Math.round(Math.log10((scores[1] || 1) * (scores[2] || 1) * (scores[3] || 1)))
  }
}

export class Inventory {
  @observable '1' = 0
  @observable '2' = 0
  @observable '3' = 0

  public useFlower = (flower: number) => {
    const strFlower = String(flower)
    if (this[strFlower] > 0) {
      this[strFlower]--
      return true
    }
    return false
  }
}

export type gardenState = number[][]

class GardenViewModel {
  @observable public garden: number[][] = [[]]
  @observable public previousGarden: number[][] = [[]]
  @observable public helpfulArray: number[] = []
  @observable public selectedFlower = 1
  @observable public isPlanting = false
  @observable public scores = new Scores()
  public day: Moment = moment()
  @observable public dayString = ''
  @observable public interactive = true
  public inventory = new Inventory()

  constructor() {
    this.helpfulArray = new Array(gardenSize).map((_, i) => i)
    this.resetGarden()
  }

  @action
  public setDate = (date: moment.MomentInput) => {
    this.day = moment(date)
    this.dayString = this.day.format('dddd MMMM Do')
  }

  @action
  public resetGarden = () => {
    this.garden = this.helpfulArray.map(() => new Array<number>(gardenSize).fill(0))
    this.previousGarden = this.helpfulArray.map(() => new Array<number>(gardenSize).fill(0))
    this.scores = new Scores()
    this.setDate(moment().set('month', startMonth).startOf('month'))
    this.inventory['1'] = 20
    this.inventory['2'] = 20
    this.inventory['3'] = 20
  }

  @action
  public setTile = (row: number, col: number) => {
    const isOk = this.interactive &&
      (this.selectedFlower === 0 || this.inventory.useFlower(this.selectedFlower))
    if (isOk) {
      this.garden[row][col] = this.selectedFlower
      this.scores.updateFrame(this.garden, this.previousGarden)
    }
  }

  public startSimulation = () => {
    this.interactive = false
    this.stopPlanting()
    this.simulate()
    if (this.day.format('D') !== '1') {
      window.setTimeout(this.startSimulation, 300)
    } else {
      this.interactive = true
    }
  }

  @action
  public simulate = () => {
    this.setDate(this.day.add(1, 'day'))
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