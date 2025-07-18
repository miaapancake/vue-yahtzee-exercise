import { expect, test } from 'vitest'
import {
  chance,
  fullHouse,
  street,
  ofAKind,
  singleScores,
  sum,
  yahtzee,
} from '../src/utils/rules.ts'

test('Singles score correctly', () => {
  const dice = [1, 2, 2, 2, 5]

  const scores = singleScores(dice)

  expect(scores[0].score).toBe(1) // The 1 dice should score 1 point
  expect(scores[1].score).toBe(6) // The 2 dice should score 6 points
  expect(scores[2].score).toBe(0) // The 3 dice should score 0 points
  expect(scores[3].score).toBe(0) // The 4 dice should score 0 points
  expect(scores[4].score).toBe(5) // The 5 dice should score 5 points
  expect(scores[5].score).toBe(0) // The 6 dice should score 5 points
})

test('Of a kind scores correctly', () => {
  const test1 = [1, 1, 1, 2, 2]
  const test2 = [1, 1, 2, 2, 2]
  const test3 = [1, 2, 2, 2, 2]
  const test4 = [1, 2, 3, 4, 5]

  expect(ofAKind(test1, 3, 'Three of a kind').score).toBe(7)
  expect(ofAKind(test2, 3, 'Three of a kind').score).toBe(8)
  expect(ofAKind(test3, 3, 'Three of a kind').score).toBe(9)
  expect(ofAKind(test4, 3, 'Three of a kind').score).toBe(0)

  expect(ofAKind(test1, 4, 'Four of a kind').score).toBe(0)
  expect(ofAKind(test2, 4, 'Four of a kind').score).toBe(0)
  expect(ofAKind(test3, 4, 'Four of a kind').score).toBe(9)
  expect(ofAKind(test4, 4, 'Four of a kind').score).toBe(0)
})

test('Chance scores correctly', () => {
  const test1 = [1, 1, 4, 4, 4]
  const test2 = [1, 1, 1, 4, 4]

  expect(chance(test1).score).toBe(14)
  expect(chance(test2).score).toBe(11)
})

test('Streets score correctly', () => {
  const test1 = [1, 2, 3, 4, 5]
  const test2 = [1, 2, 3, 5, 5]
  const test3 = [1, 2, 5, 5, 5]

  expect(street(test1, 3).score).toBe(30)
  expect(street(test1, 4).score).toBe(40)

  expect(street(test2, 3).score).toBe(30)
  expect(street(test2, 4).score).toBe(0)

  expect(street(test3, 3).score).toBe(0)
  expect(street(test3, 4).score).toBe(0)
})

test('Full house scores correctly', () => {
  const test1 = [1, 1, 4, 4, 4]
  const test2 = [1, 1, 1, 4, 4]
  const test3 = [1, 4, 5, 5, 5]
  const test4 = [1, 2, 3, 4, 5]

  expect(fullHouse(test1).score).toBe(25)
  expect(fullHouse(test2).score).toBe(25)
  expect(fullHouse(test3).score).toBe(0)
  expect(fullHouse(test4).score).toBe(0)
})

test('Chance scores correctly', () => {
  const test1 = [1, 2, 3, 4, 5]
  const test2 = [2, 3, 4, 5, 6]
  const test3 = [1, 1, 1, 1, 1]

  expect(chance(test1).score).toBe(test1.reduce(sum, 0))
  expect(chance(test2).score).toBe(test2.reduce(sum, 0))
  expect(chance(test3).score).toBe(test3.reduce(sum, 0))
})

test('Yahtzee scores correctly', () => {
  const test1 = [1, 1, 1, 1, 1]
  const test2 = [6, 6, 6, 6, 6]
  const test3 = [1, 2, 1, 2, 1]

  expect(yahtzee(test1).score).toBe(50)
  expect(yahtzee(test2).score).toBe(50)
  expect(yahtzee(test3).score).toBe(0)
})
