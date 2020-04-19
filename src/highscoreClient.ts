import { serializedReplay } from './Replay'
import moment from 'moment'
import CryptoJS from 'crypto-js'

export interface ScoreEntry {
  score: number
  player: string
  replay: serializedReplay
}

export const postScore = async (player: string, score: number, replay: serializedReplay) => {
  const time = moment().toISOString()
  const secret = process.env.REACT_APP_GAME_SECRET
  const gameId = process.env.REACT_APP_GAME_ID as string
  const toValidate = `${gameId}-${score}-${player}-${time}-${secret}`
  const validation = CryptoJS.MD5(toValidate).toString()
  return await fetch(
    process.env.REACT_APP_SCORE_URL + `/game/${encodeURIComponent(gameId)}/score`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        player,
        score,
        time,
        validation,
        meta: {
          replay,
        },
      }),
    },
  )
}

export const getScores = async (): Promise<ScoreEntry[]> => {
  const gameId = process.env.REACT_APP_GAME_ID as string
  const data = await (await fetch(
    process.env.REACT_APP_SCORE_URL + `/game/${encodeURIComponent(gameId)}/scores?distinct=true`,
  )).json()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((e: any) => ({
    score: e.score,
    player: e.player,
    replay: e.meta?.replay ?? [],
  }))
}