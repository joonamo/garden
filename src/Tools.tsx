import { observer } from 'mobx-react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { gardenViewModel } from './GardenViewModel'

export const Tools = observer(() => {
  return <>
    <button type="button" onClick={gardenViewModel.simulate}>simulate!</button> 
    <FlowerSelector flower={1} key={`flower-selector-${1}`} />
    <FlowerSelector flower={2} key={`flower-selector-${2}`} />
    <FlowerSelector flower={3} key={`flower-selector-${3}`} />
  </>
})

const FlowerSelector = observer((props: {flower: number}) => {
  const {flower} = props
  const onClick = () => gardenViewModel.setFlower(flower)
  return <button type="button"
    onClick={onClick}>
    flower {flower} {gardenViewModel.selectedFlower === flower ? 'selected' : ''}
  </button> 
})