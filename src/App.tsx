import { observer } from 'mobx-react'
import * as React from 'react'
import { Garden } from './Garden'
import { Tools } from './Tools'
import { gardenViewModel } from './GardenViewModel'

@observer
class App extends React.Component {
  public render() {
    return (<>
      <section className="section">
        <div className="container">
          <div>
            <h1> Garden of Life </h1>
            <p>Score: {JSON.stringify(gardenViewModel.scores)}</p>
            <p>Day: {gardenViewModel.day}</p>
            <Tools/>
            <Garden />
          </div>
        </div>
      </section>
    </>
    )
  }
}

export default App
