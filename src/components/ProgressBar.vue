<script setup lang="ts">
import { computed, CSSProperties } from 'vue'
import dataStore from '../store/dataStore.ts'

const props = defineProps<{
  current: number,
}>();

const percentage = computed<number>(() => {
  if (dataStore.data.length === 0) {
    return 0;
  }

  return props.current / dataStore.data.length * 100;
});

const percentageLabel = computed<string>(() => {
  return `${percentage.value}%`;
});

const style = computed<CSSProperties>(() => {
  return {
    width: percentageLabel.value,
  };
});
</script>

<template>
  <aside
    class="bg-gray-400/50 fixed bottom-0 left-0 h-2"
    :style="style"
  ></aside>
</template>
