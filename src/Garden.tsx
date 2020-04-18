import { observer } from 'mobx-react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { gardenViewModel } from './GardenViewModel'
import './styles/sass/garden.scss'
import classNames from 'classnames'
// import { countNeighbors } from './GameOfLife'

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
  const currentValue = gardenViewModel.garden[row][col]
  const clickHandler = () => gardenViewModel.setTile(row, col, 1 - currentValue)
  return <div className="garden-tile">
    <div
      className={
        classNames('garden-tile-content', currentValue > 0 ? `flower-${currentValue}` : null)
      }
      onClick={clickHandler}>
      {/* {`${countNeighbors(gardenViewModel.garden, row, col)}`} */}
    </div>
  </div>
})