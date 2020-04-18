import { observer } from 'mobx-react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { gardenViewModel } from './GardenViewModel'
import classNames from 'classnames'

export const Tools = observer(() => {
  return <>
    <div className="field">
      <label className="label is-large has-text-light">Tool</label>
      <FlowerSelector flower={0} key={`flower-selector-${0}`} />
      <FlowerSelector flower={1} key={`flower-selector-${1}`} />
      <FlowerSelector flower={2} key={`flower-selector-${2}`} />
      <FlowerSelector flower={3} key={`flower-selector-${3}`} />
    </div>
    <div className="field">
      <label className="label is-large has-text-light">Control</label>
      <ActionButton action={gardenViewModel.simulate} text="step" />
      <ActionButton
        action={gardenViewModel.startSimulation}
        text="READY"
        disabled={!gardenViewModel.interactive} />
    </div>
  </>
})

const FlowerSelector = observer((props: { flower: number }) => {
  const { flower } = props
  const onClick = () => gardenViewModel.setFlower(flower)
  return <div className="control is-expanded">
    <button
      className={classNames(
        'button',
        gardenViewModel.selectedFlower === flower ? 'is-success' : 'is-primary',
        'scaling-button',
        'is-fullwidth')}
      onClick={onClick}>
      <span className="icon">
        <img src={`assets/flower-${flower}.png`} />
      </span>
    </button>
  </div>
})

const ActionButton = observer((props: { action: () => void, text: string, disabled?: boolean }) => {
  return <div className="control is-expanded">
    <button
      className={classNames(
        'button',
        'is-danger',
        'scaling-button',
        'is-fullwidth')}
      onClick={props.action}
      disabled={props.disabled}>
      {props.text}
    </button>
  </div>
}) 