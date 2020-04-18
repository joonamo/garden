class NeighbourReport {
  public 1 = 0
  public 2 = 0
  public 3 = 0
}

const countRowNeighbors = (row: number[], col: number, notThis: boolean = false) => {
  return [
    (row[col - 1] ?? 0),
    (notThis ? 0 : (row[col] ?? 0)),
    (row[col + 1] ?? 0),
  ]
}

export const countNeighbors = (state: number[][], row: number, col: number): NeighbourReport => {
  const prevRow = state[row - 1] ?? []
  const thisRow = state[row]
  const nextRow = state[row + 1] ?? []
  return countRowNeighbors(prevRow, col).concat(
    countRowNeighbors(thisRow, col, true)).concat(
    countRowNeighbors(nextRow, col)).reduce(
      (prev, curr) => ({
        ...prev,
        [curr]: (prev[curr] ?? 0) + 1,
      }),
      new NeighbourReport(),
    )
}

const handleDead = (neighbors: NeighbourReport): number => {
  return neighbors[1] === 3 ? 1 :
    neighbors[2] === 3 ? 2 :
    neighbors[3] === 3 ? 3 :
    0
}

const handleAlive = (me: number, neighbors: NeighbourReport): number => {
  switch (neighbors[me]) {
    case 0:
    case 1:
      return 0
    case 2:
    case 3:
      return me
    default:
      return 0
  }
}

export const simulate = (state: number[][]): number[][] => {
  return state.map((row, rowI) => 
    row.map((me, i) => {
      const neighbors = countNeighbors(state, rowI, i)
      return me === 0
        ? handleDead(neighbors)
        : handleAlive(me, neighbors)
    }),
  )
}