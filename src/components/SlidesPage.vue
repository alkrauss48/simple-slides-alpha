<script setup lang="ts">
import { onMounted } from 'vue'
import PreloadContent from './PreloadContent.vue';
import SlideView from './SlideView.vue';
import CogIcon from './icons/CogIcon.vue';
import ProgressType from '../enums/progressType.ts';
import { useRoute } from 'vue-router'
import dataStore from '../store/dataStore.ts'
import slideStore from '../store/slideStore.ts'

const route = useRoute();

const processQueryParams = (): void =>  {
  const indexParam = route.query.index;
  const index = indexParam ? parseInt(indexParam as string) : 0

  const progress = (route.query.progress as ProgressType) ?? ProgressType.Bar;

  slideStore.index = index;
  slideStore.progress = progress;
};

const getSlidesUrl = (): string => {
  if (route.name == 'home') {
    localStorage.setItem('slidesUrl', '');

    return '/instructions.md';
  }

  const url = atob(route.params.slides as string);

  localStorage.setItem('slidesUrl', url);
  return url;
};

onMounted(async () => {
  processQueryParams();
  dataStore.fetchAndProcessData(getSlidesUrl());
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
    <div v-if="dataStore.data.length > 0">
      <PreloadContent />
      <SlideView />
    </div>
  </main>
</template>
