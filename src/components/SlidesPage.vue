<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PreloadContent from './PreloadContent.vue';
import SlideView from './SlideView.vue';
import { PROGRESS_BAR } from '../constants/progressTypes';
import * as DOMPurify from 'dompurify';
import { marked } from 'marked';
import { useRoute } from 'vue-router'

const data = ref([]);
const params = ref({});
const route = useRoute();

const getQueryParams = () => {
  const indexParam = route.query.index;
  const index = indexParam ? parseInt(indexParam) : 0

  const progress = route.query.progress ?? PROGRESS_BAR;

  return {
    progress,
    index,
  };
};

onMounted(async () => {
  params.value = getQueryParams();

  const slidesUrl = route.name == 'home'
    ? 'instructions.md'
    : atob(route.params.slides);

  const response = await fetch(slidesUrl);

  const body = await response.text();

  const parsedBody = body
    .split("\n\n")
    .map((content) => {
      const parsed = marked.parse(content, {
        headerIds: false,
        mangle: false,
      });

      return DOMPurify.sanitize(parsed);
    });

  data.value = parsedBody;
});
</script>

<template>
  <main>
    <router-link
      to="/settings"
      class="
        fixed top-4 right-8
        text-5xl text-gray-300
        hover:text-gray-500 focus:text-gray-500
      "
    >&#9881;</router-link>
    <div v-if="data.length > 0">
      <PreloadContent :data="data" />
      <SlideView
        :data="data"
        :params="params"
      />
    </div>
  </main>
</template>
