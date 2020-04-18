import { observer } from 'mobx-react'
import * as React from 'react'
import { gardenViewModel } from './GardenViewModel'
import classNames from 'classnames'

export const Tools = observer(() => {
  return <>
    <label className="label is-large has-text-light">Tool</label>
    <div className="field">
      <FlowerSelector flower={0} key={`flower-selector-${0}`} />
      <FlowerSelector flower={1} key={`flower-selector-${1}`} />
      <FlowerSelector flower={2} key={`flower-selector-${2}`} />
      <FlowerSelector flower={3} key={`flower-selector-${3}`} />
    </div>
  </>
})

const FlowerSelector = observer((props: { flower: number }) => {
  const { flower } = props
  const onClick = () => gardenViewModel.setFlower(flower)
  return <div className="control">
    <button
      className={classNames(
        'button',
        gardenViewModel.selectedFlower === flower ? 'is-success' : 'is-primary',
        'scaling-button',
        'is-fullwidth',
        )}
      onClick={onClick}>
      <span className="icon is-left">
        <img src={`assets/flower-${flower}.png`} />
      </span>
      <span>
        {gardenViewModel.inventory[String(flower)]}
      </span>
    </button>
  </div>
})