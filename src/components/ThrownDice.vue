<script lang="ts" setup>
import { Dices } from 'lucide-vue-next';
import Die from './Die.vue';
const dice = defineModel<Array<number>>({ required: true });

function roll() {
  const rolls = [];
  for (let i = 0; i < 5; i++) {
    rolls.push(1 + Math.round(Math.random() * 5))
  }
  dice.value = rolls.sort();
}
</script>

<template>
  <div class="thrown-dice">
    <div v-if="dice.length > 0" class="dice">
      <Die class="die" v-for="die in dice" :value="die" />
    </div>
    <button class="throw-button" @pointerup="roll">
      <Dices style="width: 32px; height: 32px;" />
      <span>Roll</span>
    </button>
  </div>
</template>

<style scoped>
.thrown-dice {
  text-align: center;
}

.dice {
  display: block;
}

.die {
  display: inline-block;
  width: 3rem;
  height: 3rem;
}

.throw-button {
  display: inline-flex;
  gap: 5px;
  width: auto;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  background-color: #2a2a2a;
  cursor: pointer;
  color: white;
  padding: 10px;
  font-size: 1rem;
  box-sizing: border-box;

  &:hover {
    background-color: #2d2d2d;
  }
}
</style>
