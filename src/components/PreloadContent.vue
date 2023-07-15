<script setup lang="ts">

defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <aside id="preload" aria-hidden="true">
    <div
      v-for="(slide, index) in data"
      :key="index"
      v-html="slide"
    ></div>
  </aside>
</template>

<style scoped>
#preload {
  position: absolute;
  right: 200%
}

#preload .slide {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
