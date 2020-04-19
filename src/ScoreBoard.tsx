import { observer } from 'mobx-react'
import * as React from 'react'
import { appViewModel } from './AppViewModel'
import { ScoreEntry } from './highscoreClient'
import classNames from 'classnames'
import { gardenViewModel } from './GardenViewModel'
// import classNames from 'classnames'

export const ScoreBoard = observer(() => {
  return <>
    <label className="label is-large has-text-light" >High Scores</label>
    {
      appViewModel.reloadingScores
        ? <p> Loading... </p>
        : appViewModel.scoreboard.map((s, i) =>
          <Score entry={s} place={i} key={`score-${i}`} />)
    }
  </>
})

const Score = observer((props: {entry: ScoreEntry, place: number}) => {
  const {entry, place} = props
  return <div className="box is-paddingless has-background-light score-entry">
    <div className="columns is-mobile">
      <div className="column is-paddingless is-narrow score-place">
        <p>{place + 1}</p>
      </div>
      <div className="column has-background-white score-data">
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
            Play
          </button>
        </div>
      </div>
    </div>
  </div>
})
