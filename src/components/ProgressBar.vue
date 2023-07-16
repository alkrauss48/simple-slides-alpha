<script setup lang="ts">

defineProps({
  current: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <aside
    class="progress-bar"
    :style="{width: `${current / total * 100}%`}"
  ></aside>
</template>

<style scoped>
.progress-bar {
  background-color: lightgray;
  position: fixed;
  bottom: 0;
  left: 0;
  height: .5rem;
}
</style>
