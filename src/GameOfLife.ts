const countRowNeighbors = (row: number[], col: number, notThis: boolean = false) => {
  // console.log(JSON.stringify(row), col, row[col - 1] ?? 0, row[col], row[col + 1] ?? 0)
  return (row[col - 1] ?? 0) + 
    (notThis ? 0 : (row[col] ?? 0))
    + (row[col + 1] ?? 0)
}

export const countNeighbors = (state: number[][], row: number, col: number ) => {
  const prevRow = state[row - 1] ?? []
  const thisRow = state[row]
  const nextRow = state[row + 1] ?? []
  return countRowNeighbors(prevRow, col) + 
    countRowNeighbors(thisRow, col, true) +
    countRowNeighbors(nextRow, col) 
}

const handleDead = (neighbors: number): number => {
  return neighbors === 3 ? 1 : 0
}

const handleAlive = (neighbors: number): number => {
  switch (neighbors) {
    case 0:
    case 1:
      return 0
    case 2:
    case 3:
      return 1
    default:
      return 0
  }
}

export const simulate = (state: number[][]): number[][] => {
  return state.map((row, rowI) => 
    row.map((v, i) => {
      const neighbors = countNeighbors(state, rowI, i)
      return v === 0
        ? handleDead(neighbors)
        : handleAlive(neighbors)
    }),
  )
}