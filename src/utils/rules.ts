const DICE_NAMES = ['Ones', 'Twos', 'Threes', 'Fours', 'Fives', "Six's"]

export interface Score {
  name: string
  score: number
}

function unique<T>(value: T, index: number, array: T[]): boolean {
  return array.indexOf(value) == index
}

function sum(prev: number, current: number): number {
  return prev + current
}

export function uniqueCounts(dice: number[]): number[] {
  const counts: { [index: number]: number } = {}

  for (const die of dice) {
    if (counts[die] != undefined) counts[die] += 1
    else counts[die] = 1
  }

  return Object.values(counts).sort()
}

export function singleScores(dice: number[]): Score[] {
  const scores: Score[] = []

  for (let i = 0; i <= 5; i++) {
    const score = {
      name: DICE_NAMES[i],
      score: dice.filter((x: number): boolean => x == i + 1).reduce(sum, 0),
    }

    scores.push(score)
  }

  return scores
}

export function street(dice: number[], min: number): Score {
  let maxInARow = 0
  let currentInARow = 1
  let prevDie = -1

  const uniqueDice = dice.filter(unique)

  for (const die of uniqueDice) {
    if (die == prevDie + 1) {
      currentInARow += 1
    } else {
      if (currentInARow > maxInARow) maxInARow = currentInARow
      currentInARow = 1
    }
    prevDie = die
  }
  if (maxInARow < currentInARow) maxInARow = currentInARow

  return {
    name: min > 3 ? 'Big Street' : 'Small Street',
    score: maxInARow >= min ? min * 10 : 0,
  }
}

export function chance(dice: number[]): Score {
  return {
    name: 'Chance',
    score: dice.reduce(sum),
  }
}

export function yahtzee(dice: number[]): Score {
  return {
    name: 'Yahtzee',
    score: dice.filter(unique).length == 1 ? 50 : 0,
  }
}

export function fullHouse(dice: number[]): Score {
  const [a, b] = uniqueCounts(dice)
  return {
    name: 'Full House',
    score: a == 2 && b == 3 ? 25 : 0,
  }
}

export function ofAKind(dice: number[], min: number, name: string): Score {
  return {
    name,
    score: uniqueCounts(dice).find((x: number): boolean => x >= min) ? dice.reduce(sum, 0) : 0,
  }
}
