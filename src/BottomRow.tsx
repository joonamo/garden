import { observer } from 'mobx-react'
import * as React from 'react'
import { gardenViewModel } from './GardenViewModel'
import { ActionButton } from './ActionButton'

export const BottomRow = observer(() => {
  return <div className="columns">
    <div className="column">
      <ActionButton
        action={gardenViewModel.startSimulation}
        text="Ready!"
        disabled={!gardenViewModel.interactive}
        />
    </div>
  </div>
})
