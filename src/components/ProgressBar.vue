<script setup lang="ts">

defineProps<{
  current: number,
  total: number,
}>();
</script>

<template>
  <aside
    class="bg-gray-300 fixed bottom-0 left-0 h-2"
    :style="{width: `${current / total * 100}%`}"
  ></aside>
</template>
