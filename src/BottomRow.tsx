import { observer } from 'mobx-react'
import * as React from 'react'
import { gardenViewModel } from './GardenViewModel'
import { ActionButton } from './ActionButton'

export const BottomRow = observer(() => {
  const { gameState } = gardenViewModel
  return <div className="columns">
    <div className="column">
      <ActionButton
        action={
          gameState === 'Planning'
            ? gardenViewModel.startSimulation
            : gardenViewModel.resetGarden
        }
        text={gameState === 'Planning' ? 'Ready!' : 'New Game'}
        disabled={gameState === 'Simulating'}
      />
    </div>
    {
      gameState !== 'GameOver' ? null : <div className="column">
        <ActionButton
          action={gardenViewModel.playStoredReplay}
          text={'Replay'}
        />
      </div>
    }
  </div>
})
