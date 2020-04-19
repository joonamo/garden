import { observer } from 'mobx-react'
import * as React from 'react'
import { gardenViewModel } from './GardenViewModel'

export const Calendar = observer(() => ( 
  <div className="columns is-mobile">
    <div className="column">
      <h4 className="title is-4 is-small">{gardenViewModel.dayString}</h4>
    </div>
    <div className="column has-text-right">
      <h4 className="title is-4 is-small">
        {gardenViewModel.endDate.diff(gardenViewModel.day, 'month')} months left
      </h4>
    </div>
  </div>
))
