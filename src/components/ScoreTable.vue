<script lang="ts" setup>
import { chance, fullHouse, street, ofAKind, singleScores, yahtzee, type Score } from '@/utils/rules';
import { computed } from 'vue';


const props = defineProps<{
  dice: number[]
}>();


const scores = computed(() => {
  const scoreList: Score[] = [];

  scoreList.push(...singleScores(props.dice));
  scoreList.push(ofAKind(props.dice, 3, "Three of a kind"));
  scoreList.push(ofAKind(props.dice, 4, "Four of a kind"));
  scoreList.push(street(props.dice, 3));
  scoreList.push(street(props.dice, 4));
  scoreList.push(fullHouse(props.dice));
  scoreList.push(chance(props.dice));
  scoreList.push(yahtzee(props.dice));

  if (props.dice[0] == -1) {
    scoreList.forEach(s => s.score = 0);
  }

  return scoreList;
});

</script>
<template>
  <table>
    <thead>
      <tr>
        <td></td>
        <td>Score</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="score in scores">
        <td>{{ score.name }}</td>
        <td>{{ score.score }}</td>
      </tr>
    </tbody>
  </table>

</template>
