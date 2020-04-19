import { observer } from 'mobx-react'
import * as React from 'react'
import { gardenViewModel } from './GardenViewModel'
import classNames from 'classnames'

const showHelp = () => {
  const elmnt = document.getElementById('how-to-play')
  elmnt?.scrollIntoView()
}

export const Tools = observer(() => {
  return <>
    <label className="label is-large has-text-light">Tool</label>
    <div className="field has-addons is-hidden-tablet is-fullwidth">
      <FlowerSelector
        flower={0}
        image="assets/shovel.png"
        key={`flower-selector-${0}`} />
      <FlowerSelector flower={1} key={`flower-selector-${1}`} />
      <FlowerSelector flower={2} key={`flower-selector-${2}`} />
      <FlowerSelector flower={3} key={`flower-selector-${3}`} />
    </div>

    <div className="field is-hidden-tablet is-fullwidth">
      <div className="control">
        <button
          className={classNames(
            'button',
            'is-fullwidth',
            'is-info',
            'is-small',
          )}
          onClick={showHelp}
        >
          How to play?
        </button>
      </div>
    </div>

    <div className="field is-hidden-mobile">
      <FlowerSelector
        flower={0}
        image="assets/shovel.png"
        key={`flower-selector-${0}`} />
      <FlowerSelector flower={1} key={`flower-selector-${1}`} />
      <FlowerSelector flower={2} key={`flower-selector-${2}`} />
      <FlowerSelector flower={3} key={`flower-selector-${3}`} />
    </div>
  </>
})

const FlowerSelector = observer((props: { flower: number, image?: string }) => {
  const { flower, image } = props
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
        <img src={image ?? `assets/flower-${flower}.png`} alt={`Plant flower ${flower}`} />
      </span>
      <span>
        {gardenViewModel.inventory[String(flower)]}
      </span>
    </button>
  </div>
})