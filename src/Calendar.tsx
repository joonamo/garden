import { observer } from 'mobx-react'
import * as React from 'react'
import { gardenViewModel } from './GardenViewModel'

export const Calendar = observer(() => ( 
  <h4 className="title is-4 is-small">{gardenViewModel.dayString}</h4>
))
