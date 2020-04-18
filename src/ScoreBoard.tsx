import { observer } from 'mobx-react'
import * as React from 'react'
import { appViewModel } from './AppViewModel'

export const ScoreBoard = observer(() => {
  return <>
    <label className="label is-large has-text-light" > High Scores </label>
    {
      appViewModel.reloadingScores
        ? <p> Loading... </p>
        : appViewModel.scoreboard.map((s, i) =>
          <p key={`score-${i}`}>
            {`${i + 1} ${s.player}: ${s.score}`}
          </p>)
    }
  </>
})
