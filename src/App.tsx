import { observer } from 'mobx-react'
import * as React from 'react'
import { Garden } from './Garden'
import { Tools } from './Tools'
import { Calendar } from './Calendar'
import { Score } from './Score'
import { BottomRow } from './BottomRow'

@observer
class App extends React.Component {
  public render() {
    return (<>
      <section className="section">
        <div className="container">
          <div >
            <h1 className="title is-1"> Convay&#39;s Garden Life </h1>
            <div className="columns box is-paddingless">
              <div className="column has-background-info">
                <Tools />
              </div>

              <div className="column has-background-light is-three-fifths">
                <div className="columns">
                  <div className="column">
                    <Calendar />
                  </div>
                  <div className="column has-text-right">
                    <Score />
                  </div>
                </div>
                <Garden />
                <BottomRow />
              </div>

              <div className="column has-background-success">
                <h3 className="title is-3"> Highscores </h3>
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
