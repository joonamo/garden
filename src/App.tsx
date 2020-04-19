import { observer } from 'mobx-react'
import * as React from 'react'
import { Garden } from './Garden'
import { Tools } from './Tools'
import { Calendar } from './Calendar'
import { Score } from './Score'
import { BottomRow } from './BottomRow'
import { ScoreBoard } from './ScoreBoard'
import { HowToPlay } from './HowToPlay'
import { appViewModel } from './AppViewModel'
import { NameEntry } from './NameEntry'
import { GameOverPopup } from './GameOverPopup'

@observer
class App extends React.Component {
  public render() {
    return (<>
      <section className="section">
        <div className="container">
          <div >
            <h1 className="title is-1" id="title"> Conway&#39;s Garden Life </h1>
            <div className="columns box is-paddingless has-background-info">
              <div className="column">
                <Tools />
              </div>

              <div className="column has-background-light is-three-fifths" id="game">
                <Score />
                <Garden
                  overlay={
                    !appViewModel.goodToGo ? <NameEntry />
                      : appViewModel.showingGameOverModal ? <GameOverPopup />
                        : undefined
                  }
                />
                <Calendar />
                <BottomRow />
              </div>

              <div className="column">
                <ScoreBoard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="box" id="how-to-play">
            <HowToPlay />
          </div>
        </div>
      </section>

      <section className="section in-memoriam has-text-grey-light">
        <p>Created by{' '}
          <a href="https://joonamo.com">Joonamo</a>
          {' '}for{' '}
          <a href="https://ldjam.com/events/ludum-dare/46/conways-garden-life">Ludum Dare 46</a></p>
        <p>In memoriam John Conway 1937 - 2020</p>
      </section>
    </>
    )
  }
}

export default App
