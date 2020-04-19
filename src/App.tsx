import { observer } from 'mobx-react'
import * as React from 'react'
import { Garden } from './Garden'
import { Tools } from './Tools'
import { Calendar } from './Calendar'
import { Score } from './Score'
import { BottomRow } from './BottomRow'
import { ScoreBoard } from './ScoreBoard'
import { HowToPlay } from './HowToPlay'

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
                <Score />
                <Garden />
                <Calendar />
                <BottomRow />
              </div>

              <div className="column has-background-success">
                <ScoreBoard />
              </div>
            </div>
          </div>
          <div className="box">
            <HowToPlay />
          </div>
        </div>

        
      </section>
    </>
    )
  }
}

export default App
