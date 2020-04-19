/* eslint-disable no-restricted-globals */

import { observable, action, computed } from 'mobx'
import { ReplayEntry, serializeReplay, deserializeReplay } from './Replay'
import { postScore, ScoreEntry, getScores } from './highscoreClient'
import { gardenViewModel } from './GardenViewModel'


class AppViewModel {
  @observable public playerName = ''
  @observable public scoreboard: ScoreEntry[] = []
  @observable public reloadingScores = false
  @observable public submittingScore = false
  @observable public previousScoreStanding = 0
  @observable public showingGameOverModal = false

  constructor() {
    this.reloadScores()
    this.playerName = localStorage.getItem('playerName') ?? ''
  }

  @action
  public gameOver = async (wasReplay: boolean, score: number, replay: ReplayEntry[]) => {
    if (!wasReplay) {
      this.submittingScore = true
      this.showingGameOverModal = true
      try {
        await postScore(this.playerName, score, serializeReplay(replay))
      } catch (e) {
        console.log('error submitting score', e)
      } finally {
        this.submittingScore = false
      }
    }
    await this.reloadScores()
  }

  @action
  public startGame = () => {
    this.hideGameOverPopup()
  }

  @computed get goodToGo() {
    return this.playerName.length > 0
  }

  public reloadScores = async () => {
    this.reloadingScores = true
    try {
      this.scoreboard = await getScores()
    } catch (e) {
      console.log('error loading scores', e)
    } finally {
      this.reloadingScores = false
    }
  }

  @action setPlayerName = (name: string) => {
    this.playerName = name
    localStorage.setItem('playerName', this.playerName)
  }

  @action hideGameOverPopup = () => {
    this.showingGameOverModal = false
  }

  @action resetName = () => {
    this.playerName = ''
  }

  startReplayIdx = (idx: number) => {
    const score = this.scoreboard[idx]
    if (score) {
      gardenViewModel.doReplay(deserializeReplay(score.replay))
      const elmnt = document.getElementById('game')
      elmnt?.scrollIntoView()
    }
  }
}

export const appViewModel = new AppViewModel()