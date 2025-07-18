<script setup lang="ts">
import { ref } from 'vue';
import ScoreTable from './components/ScoreTable.vue';
import ThrownDice from './components/ThrownDice.vue';

const dice = ref<number[]>([-1, 0, 0, 0, 0]);

</script>

<template>
  <main>
    <ScoreTable :dice="dice" />
    <ThrownDice v-model="dice" />
  </main>
</template>

<style scoped>
.buttons {
  margin-top: 5px;
  text-align: right;
}
</style>
