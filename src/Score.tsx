import { observer } from 'mobx-react'
import * as React from 'react'
import { gardenViewModel } from './GardenViewModel'

export const Score = observer(() => ( 
  <h2 className="title is-2 is-small">
    Score: {gardenViewModel.scores.cumulative.toLocaleString('en-GB')}
  </h2>
))
