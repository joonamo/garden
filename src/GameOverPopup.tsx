import * as React from 'react'
import { appViewModel } from './AppViewModel'
import { gardenViewModel } from './GardenViewModel'
import { ActionButton } from './ActionButton'
import { observer } from 'mobx-react'

export const GameOverPopup = observer(() => {

  return <>
    <div className="dummy" />
    <div className="box">
      <h1 className="title is-1"> Game Over! </h1>
      <p>Your score was {gardenViewModel.scores.cumulative}</p>
      {
        appViewModel.submittingScore 
          ? <p>Submitting score...</p>
          : <p>Your score placed {appViewModel.previousScoreStanding} in the leaderboards!</p>
      }
      <ActionButton
        action={appViewModel.hideGameOverPopup}
        text="OK"
      />
    </div>
    <div className="dummy" />
  </>
})