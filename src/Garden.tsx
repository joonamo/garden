import { observer } from 'mobx-react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { gardenViewModel, thisOrPrevious } from './GardenViewModel'
import './styles/sass/garden.scss'
import classNames from 'classnames'

export const Garden = observer((props: { overlay?: React.ReactNode | undefined}) => {
  const { overlay } = props
  return <div className="garden-container">
    <div className="garden">
      {gardenViewModel.garden.map((_, i) => <GardenRow row={i} key={`garden-row-${i}`} />)}
    </div>
    {
      overlay && 
      <div className="garden-overlay">
        <div className="garden-overlay-content">
          {overlay}
        </div>
      </div>
    }
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
  const { value, isPrev } = thisOrPrevious(
    gardenViewModel.garden,
    gardenViewModel.previousGarden,
    row,
    col)
  const clickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>,
  ) => {
    e.preventDefault()
    gardenViewModel.startPlanting()
    gardenViewModel.setTile(row, col)
  }
  const enterHandler = () => {
    if (gardenViewModel.isPlanting) {
      gardenViewModel.setTile(row, col)
    }
  }
  // const n = countNeighbors(gardenViewModel.garden, row, col)
  return <div className={classNames(
    'garden-tile',
    row === 0 ? 'hide-border-left' : null,
    col === 0 ? 'hide-border-top' : null,
    )}
  >
    <div
      className={
        classNames(
          'garden-tile-content',
          value > 0 ? `flower-${value}` : null,
          isPrev ? 'withering' : null,
        )
      }
      onMouseDown={clickHandler}
      onMouseEnter={enterHandler}
      onTouchStart={clickHandler}
      >
      {/* {`${n[1]},${n[2]},${n[3]}`} */}
    </div>
  </div>
})