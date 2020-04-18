/* eslint-disable no-restricted-globals */

import { observable, action } from 'mobx'
import { ReplayEntry, serializeReplay } from './Replay'
import { postScore, ScoreEntry, getScores } from './highscoreClient'


class AppViewModel {
  @observable public playerName = 'test'
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
}

export const appViewModel = new AppViewModel()