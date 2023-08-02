<script setup lang="ts">
import { computed, CSSProperties } from 'vue'

const props = defineProps<{
  current: number,
  total: number,
}>();

const percentage = computed<number>(() => {
  return props.current / props.total * 100;
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
