import { observable, action } from 'mobx'
import { simulate } from './GameOfLife'
import moment, { Moment } from 'moment'
import { ReplayEntry } from './Replay'
import { appViewModel } from './AppViewModel'

export const gardenSize = 15
export const startMonth = '5'
export const lastMonth = '9'
export type GardenState = number[][]
export type GameState = 'Planning' | 'Simulating' | 'GameOver' | 'Replay'
export const dyingMinimum = 10

export const thisOrPrevious =
  (state: GardenState, prevState: GardenState, row: number, col: number) => {
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
  @observable 'dying1' = 0
  @observable 'dying2' = 0
  @observable 'dying3' = 0

  public applyFrame = () => {
    this.cumulative += this.frame
  }

  public updateFrame = (state: GardenState, prevState: GardenState) => {
    const scores = {
      1: 0,
      2: 0,
      3: 0,
      dying1: 0,
      dying2: 0,
      dying3: 0,
    }
    state.map((row, i) => row.map((_, j) => {
      const { value, isPrev } = thisOrPrevious(state, prevState, i, j)
      scores[value] += 1
      if (isPrev) {
        scores[`dying${value}`] += 1
      }
      return null
    }))
    this['1'] = scores[1]
    this['2'] = scores[2]
    this['3'] = scores[3]
    this['dying1'] = scores['dying1']
    this['dying2'] = scores['dying2']
    this['dying3'] = scores['dying3']
    this.frame = (scores[1] || 1) * (scores[2] || 1) * (scores[3] || 1)
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


class GardenViewModel {
  @observable public garden: number[][] = [[]]
  @observable public previousGarden: number[][] = [[]]
  @observable public helpfulArray: number[] = []
  @observable public selectedFlower = 1
  @observable public isPlanting = false
  @observable public scores = new Scores()
  public day: Moment = moment()
  @observable public dayString = ''
  public inventory = new Inventory()
  @observable public gameState: GameState = 'Planning'
  private replayData: ReplayEntry[] = []
  private currentFrameReplayData: ReplayEntry = new ReplayEntry()
  @observable public doingReplay = false
  private replayFrame = 0

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
    this.gameState = 'Planning'
    this.garden = this.helpfulArray.map(() => new Array<number>(gardenSize).fill(0))
    this.previousGarden = this.helpfulArray.map(() => new Array<number>(gardenSize).fill(0))
    this.scores = new Scores()
    this.setDate(moment(`2020-${startMonth.padStart(2, '0')}-01`))
    this.inventory['1'] = 10
    this.inventory['2'] = 10
    this.inventory['3'] = 10
    this.replayData = []
    this.currentFrameReplayData = new ReplayEntry()
    this.replayFrame = 0
  }

  @action
  public setTile = (row: number, col: number) => {
    const isOk = this.gameState === 'Planning' &&
      (this.selectedFlower === 0 || 
      (this.garden[row][col] === 0 &&
        this.inventory.useFlower(this.selectedFlower)))
    if (isOk) {
      this.garden[row][col] = this.selectedFlower
      this.scores.updateFrame(this.garden, this.previousGarden)
      this.currentFrameReplayData.pushInput(row, col, this.selectedFlower)
    }
  }

  @action
  public startSimulation = () => {
    this.gameState = 'Simulating'
    if (!this.doingReplay) {
      this.replayData.push(this.currentFrameReplayData)
      this.currentFrameReplayData = new ReplayEntry()
    }
    this.stopPlanting()
    this.frame()
  }

  private frame = () => {
    this.simulate()
    if (this.day.format('D') !== '1') {
      window.setTimeout(this.frame, 100)
    } else if (this.day.format('M') === lastMonth) {
      appViewModel.gameOver(this.doingReplay, this.scores.cumulative, this.replayData)
      this.doingReplay = false
      this.gameState = 'GameOver'
    } else if (this.doingReplay) {
      this.replayData[this.replayFrame].applyData(this.garden, this.inventory)
      this.replayFrame += 1
      window.setTimeout(this.frame, 2000)
    } else {
      this.gameState = 'Planning'
    }
  }

  @action
  public simulate = () => {
    this.setDate(this.day.add(1, 'day'))
    this.previousGarden = this.garden
    this.garden = simulate(JSON.parse(JSON.stringify(this.garden)))
    this.scores.updateFrame(this.garden, this.previousGarden)
    this.scores.applyFrame()
    this.giveMoreSeeds(1, this.scores.dying1)
    this.giveMoreSeeds(2, this.scores.dying2)
    this.giveMoreSeeds(3, this.scores.dying3)
  }

  private giveMoreSeeds = (flower: number, dying: number) => {
    if (dying >= dyingMinimum) {
      this.inventory[String(flower)] = this.inventory[String(flower)] + 1
    }
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

  @action
  doReplay = (replay: ReplayEntry[]) => {
    this.resetGarden()
    this.replayData = replay
    this.replayData[0].applyData(this.garden, this.inventory)
    this.replayFrame = 1
    this.doingReplay = true
    window.setTimeout(this.startSimulation, 2000)
  }

  @action
  playStoredReplay = () => {
    this.doReplay(this.replayData)
  }
}

export const gardenViewModel = new GardenViewModel()
window.addEventListener('mouseup', () => gardenViewModel.stopPlanting())