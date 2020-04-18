/* eslint-disable no-restricted-globals */

import { observable, action } from 'mobx'
import { ReplayEntry } from './Replay'
import { postScore } from './highscoreClient'


class AppViewModel {
  @observable public playerName = 'test'

  @action
  public gameOver = (wasReplay: boolean, score: number, replay: ReplayEntry[]) => {
    if (!wasReplay) {
      postScore(this.playerName, score, replay)
    }
  }
}

export const appViewModel = new AppViewModel()