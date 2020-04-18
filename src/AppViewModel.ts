/* eslint-disable no-restricted-globals */

import { observable } from 'mobx'


class AppViewModel {
  @observable public score = 0
}

export const appViewModel = new AppViewModel()