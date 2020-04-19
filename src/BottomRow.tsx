import { observer } from 'mobx-react'
import * as React from 'react'
import { gardenViewModel } from './GardenViewModel'
import { ActionButton } from './ActionButton'
import { appViewModel } from './AppViewModel'

export const BottomRow = observer(() => {
  const { gameState } = gardenViewModel
  return <div className="columns">
    {
      gameState !== 'GameOver' ? 
        <div className="column">
          <ActionButton
            action={gardenViewModel.startSimulation}
            text={
              !gardenViewModel.hasPlantedAny 
                ? 'Plant some flowers!'
                : 'Ready!'}
            disabled={
              !appViewModel.goodToGo ||
              gameState === 'Simulating' ||
              !gardenViewModel.hasPlantedAny}
            loading={gameState === 'Simulating'}
          />
        </div> 
      :
        <>
          <div className="column">
            <ActionButton
              action={gardenViewModel.resetGarden}
              text={'New Game'}
            />
          </div>
          <div className="column">
            <ActionButton
              action={gardenViewModel.playStoredReplay}
              text={'Replay'}
            />
          </div>
        </>
    }
  </div>
})
