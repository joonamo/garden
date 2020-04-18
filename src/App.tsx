import { observer } from 'mobx-react'
import * as React from 'react'
import { appViewModel } from './AppViewModel'
import { Garden } from './Garden'
import { gardenViewModel } from './GardenViewModel'

@observer
class App extends React.Component {
  public render() {
    return (<>
      <section className="section">
        <div className="container">
          <div>
            <h1> Garden of Life </h1>
            <p>Score: {appViewModel.score}</p>
            <Garden />
            <button type="button" onClick={gardenViewModel.simulate}>simulate!</button> 
          </div>
        </div>
      </section>
    </>
    )
  }
}

export default App
