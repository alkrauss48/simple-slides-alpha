<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SlideView from './components/SlideView.vue';

const data = ref([]);
const params = ref({});

const getQueryParams = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const indexParam = urlParams.get('index');
  const index = indexParam ? parseInt(indexParam) : 0;

  return {
    slidesUrl: urlParams.get('slides'),
    index,
  };
};

onMounted(async () => {
  params.value = getQueryParams();

  if (!params.value.slidesUrl) {
    return;
  }

  const response = await fetch(params.value.slidesUrl);

  const body = await response.text();

  const parsedBody = body.split("\n\n");

  data.value = parsedBody;
});
</script>

<template>
  <SlideView
    v-if="data.length > 0"
    :data="data"
    :index="params.index"
  />
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
