/* eslint-disable no-restricted-globals */

import { observable, action, computed } from 'mobx'
import { ReplayEntry, serializeReplay } from './Replay'
import { postScore, ScoreEntry, getScores } from './highscoreClient'


class AppViewModel {
  @observable public playerName = ''
  @observable public scoreboard: ScoreEntry[] = []
  @observable public reloadingScores = false

  constructor() {
    this.reloadScores()
  }

  @action
  public gameOver = async (wasReplay: boolean, score: number, replay: ReplayEntry[]) => {
    if (!wasReplay) {
      await postScore(this.playerName, score, serializeReplay(replay))
    }
    await this.reloadScores()
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
    this.playerName = name.slice(0, 10)
  }
}

export const appViewModel = new AppViewModel()