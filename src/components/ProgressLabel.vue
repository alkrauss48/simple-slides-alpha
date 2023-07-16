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
  <aside class="progress-label">
    <p>{{ current }} / {{ total }}</p>
  </aside>
</template>

<style scoped>
.progress-label {
  color: white;
  background-color: lightgray;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 6rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
