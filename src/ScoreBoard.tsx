import { observer } from 'mobx-react'
import * as React from 'react'
import { appViewModel } from './AppViewModel'
import { ScoreEntry } from './highscoreClient'
import classNames from 'classnames'
import { gardenViewModel } from './GardenViewModel'
// import classNames from 'classnames'

export const ScoreBoard = observer(() => {
  return <>
    <h4 className="title is-4 has-text-light">High Scores</h4>
    <h6 className="subtitle is-6 has-text-light">
      {
        appViewModel.reloadingScores
          ? 'Loading...'
          : 'Click for replay!'
      }
    </h6>
    {
      appViewModel.goodToGo
        ? appViewModel.scoreboard.map((s, i) =>
          <Score entry={s} place={i} key={`score-${i}`} />)
        : null
    }
  </>
})

const Score = observer((props: { entry: ScoreEntry, place: number }) => {
  const { entry, place } = props
  return <div className="box has-background-white score-entry">
    <div className="columns is-mobile">
      <div className="column is-paddingless is-narrow score-place">
        <p>{place + 1}</p>
      </div>
      <div className="column score-data">
        <p>{entry.player}</p>
        <p>{entry.score.toLocaleString('en-GB')}</p>
        <div className="control play-tag">
          <button
            className=
            {classNames(
              'button',
              'is-marginless',
              'is-primary',
              'is-small',
            )}
            onClick={() => appViewModel.startReplayIdx(place)}
            disabled={
              gardenViewModel.gameState === 'Simulating' ||
              gardenViewModel.doingReplay
            }
          >
            Show
          </button>
        </div>
      </div>
    </div>
  </div>
})
