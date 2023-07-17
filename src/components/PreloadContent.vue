<script setup lang="ts">

defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <aside class="absolute right-[200%] w-0 h-0 overflow-hidden" aria-hidden="true">
    <div
      v-for="(slide, index) in data"
      :key="index"
      class="absolute top-0 left-0"
      v-html="slide"
    ></div>
  </aside>
</template>
