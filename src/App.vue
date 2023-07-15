<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SlideView from './components/SlideView.vue';

const data = ref([]);

onMounted(async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const slideUrl = urlParams.get('slides');

  if (!slideUrl) {
    return;
  }

  const response = await fetch(slideUrl);

  const body = await response.text();

  const parsedBody = body.split("\n\n");

  data.value = parsedBody;
});
</script>

<template>
  <SlideView v-if="data.length > 0" :data="data"/>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
