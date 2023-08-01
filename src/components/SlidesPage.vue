<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PreloadContent from './PreloadContent.vue';
import SlideView from './SlideView.vue';
import CogIcon from './icons/CogIcon.vue';
import ProgressType from '../enums/progressType.ts';
import QueryParams from '../interfaces/queryParams.ts';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { useRoute } from 'vue-router'

const data = ref<string[]>([]);

const route = useRoute();

const getQueryParams = (): QueryParams =>  {
  const indexParam = route.query.index;
  const index = indexParam ? parseInt(indexParam as string) : 0

  const progress = (route.query.progress as ProgressType) ?? ProgressType.Bar;

  const queryParams: QueryParams = {
    index,
    progress,
  };

  return queryParams;
};

const params = ref<QueryParams>(getQueryParams());

const getSlidesUrl = () : string => {
  if (route.name == 'home') {
    localStorage.setItem('slidesUrl', '');

    return 'instructions.md';
  }

  const url = atob(route.params.slides as string);

  localStorage.setItem('slidesUrl', url);
  return url;
};

onMounted(async () => {
  const slidesUrl = getSlidesUrl();

  const response = await fetch(slidesUrl);

  const body = await response.text();

  const parsedBody = body
    .split("\n\n")
    .map((content) => content.split("\r\n"))
    .flat()
    .filter((content) => content.trim().length > 0)
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
        fixed top-6 right-8
        text-5xl text-gray-300/50
        hover:text-gray-300 focus:text-gray-300
      "
      ><CogIcon /></router-link>
    <div v-if="data.length > 0">
      <PreloadContent :data="data" />
      <SlideView
        :data="data"
        :params="params"
      />
    </div>
  </main>
</template>
