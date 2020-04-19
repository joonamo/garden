/* eslint-disable no-restricted-globals */

import { observer } from 'mobx-react'
import * as React from 'react'
import { gardenViewModel } from './GardenViewModel'
import { ActionButton } from './ActionButton'
import { appViewModel } from './AppViewModel'

const confirmRestart = () => {
  if (gardenViewModel.gameState === 'GameOver') {
    gardenViewModel.resetGarden()
  } else {
    if (confirm(
      'Are you sure you want to restart? You will lose your game!',
    )) {
      gardenViewModel.resetGarden()
    }
  }
}

export const BottomRow = observer(() => {
  const { gameState } = gardenViewModel
  const mainDisable = !appViewModel.goodToGo ||
    gameState === 'Simulating'
  return <div className="columns">
    <div className="column">
      <ActionButton
        action={confirmRestart}
        text={gameState === 'GameOver' ? 'New Game' : 'Reset'}
        disabled={mainDisable}
        styleOverride={gameState === 'GameOver' ? 'is-primary' : undefined}
      />
    </div>
    {
      gameState !== 'GameOver' ? 
        <div className="column">
          <ActionButton
            action={gardenViewModel.startSimulation}
            text={
              !gardenViewModel.hasPlantedAny 
                ? 'Plant some flowers!'
                : 'Ready!'}
            disabled={mainDisable || !gardenViewModel.hasPlantedAny}
            loading={gameState === 'Simulating'}
            styleOverride="is-primary"
          />
        </div> 
      :
        <div className="column">
          <ActionButton
            action={gardenViewModel.playStoredReplay}
            text={'Replay'}
          />
        </div>
    }
  </div>
})
