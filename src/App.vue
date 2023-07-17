<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PreloadContent from './components/PreloadContent.vue';
import SlideView from './components/SlideView.vue';
import { PROGRESS_BAR } from './constants/progressTypes';
import * as DOMPurify from 'dompurify';
import { marked } from 'marked';

const data = ref([]);
const params = ref({});

const getQueryParams = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const indexParam = urlParams.get('index');
  const index = indexParam ? parseInt(indexParam) : 0

  const progress = urlParams.get('progress') ?? PROGRESS_BAR;

  return {
    slidesUrl: urlParams.get('slides'),
    progress,
    index,
  };
};

onMounted(async () => {
  params.value = getQueryParams();

  const slidesUrl = params.value.slidesUrl ?? 'instructions.md';

  const response = await fetch(slidesUrl);

  const body = await response.text();

  const parsedBody = body
    .split("\n\n")
    .map((content) => {
      const parsed = marked.parse(content);
      return DOMPurify.sanitize(parsed);
    });

  data.value = parsedBody;
});
</script>

<template>
  <div v-if="data.length > 0">
    <PreloadContent :data="data" />
    <SlideView
      :data="data"
      :params="params"
    />
  </div>
</template>
