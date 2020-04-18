import { observer } from 'mobx-react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { gardenViewModel } from './GardenViewModel'
import './styles/sass/garden.scss'

export const Garden = observer(() => {
  return <div className="garden">
    {gardenViewModel.garden.map((_, i) => <GardenRow row={i} key={`garden-row-${i}`} />)}
  </div>
})

const GardenRow = observer((props: { row: number }) => {
  const { row } = props
  return <div className="garden-row">
    {(gardenViewModel.garden[row] ?? []).map(
      (_, i) => <GardenTile row={row} col={i} key={`garden-tile-${row}-${i}`} />)
    }
  </div>
})
const GardenTile = observer((props: { row: number, col: number }) => {
  const { row, col } = props
  return <div className="garden-tile">
    <div className="garden-tile-content">
      {gardenViewModel.garden[row][col]}
    </div>
  </div>
})