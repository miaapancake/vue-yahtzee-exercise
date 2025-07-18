<script lang="ts" setup>
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Square } from 'lucide-vue-next';

const props = defineProps<{ value: number }>();
</script>

<template>
  <div>
    <Square class="icon" v-if="props.value <= 0 || props.value >= 7" />
    <Dice1 class="icon" v-else-if="props.value == 1" />
    <Dice2 class="icon" v-else-if="props.value == 2" />
    <Dice3 class="icon" v-else-if="props.value == 3" />
    <Dice4 class="icon" v-else-if="props.value == 4" />
    <Dice5 class="icon" v-else-if="props.value == 5" />
    <Dice6 class="icon" v-else-if="props.value == 6" />
  </div>
</template>

<style scoped>
.icon {
  width: 100%;
  height: 100%;
}
</style>
