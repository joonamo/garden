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
          <div >
            <h1 className="title is-1"> Garden of Life </h1>
            <div className="columns box is-paddingless has-background-info">
              <div className="column is-narrow">
                  <Tools />
                  {/* <p>Score: {JSON.stringify(gardenViewModel.scores)}</p> */}
                  <p>Day: {gardenViewModel.day}</p>
              </div>

              <div className="column has-background-light">
                <Garden />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
  }
}

export default App
