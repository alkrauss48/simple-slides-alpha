<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import ProgressBar from './ProgressBar.vue';
import ProgressLabel from './ProgressLabel.vue';
import SlideArrows from './SlideArrows.vue';
import SlideContent from './SlideContent.vue';
import ProgressType from '../enums/progressType.ts';
import { useRouter } from 'vue-router'
import QueryParams from '../interfaces/queryParams.ts';
import { RouteNames } from '../router/routes.ts';
import Keys from '../constants/keys.ts';
import dataStore from '../store/dataStore.ts'
import slideStore from '../store/slideStore.ts'

const router = useRouter();

const content = computed(() => {
  return dataStore.data[slideStore.index];
});

const showProgressLabel = computed<boolean>(() => {
  return slideStore.progress === ProgressType.Label;
});

const buildQueryParams = () : QueryParams => {
  const query: QueryParams = {
    index: slideStore.index,
  };

  if (showProgressLabel.value) {
    query.progress = ProgressType.Label;
  }

  return query;
};

const incrementContent = (count: number) : void => {
  slideStore.increment(count);

  const query = buildQueryParams();

  router.replace({ query });
};

const bindKeyDown = (event: KeyboardEvent): void => {
  const { key } = event;

  if (router.currentRoute.value.name == RouteNames.Settings) {
    return;
  }

  if (key == Keys.ENTER || key == Keys.SPACE) {
    var next = document.getElementById('next');
    var previous = document.getElementById('previous');

    if (document.activeElement === next || document.activeElement === previous) {
      return;
    }
  }

  if (Keys.INCREMENTORS.includes(key)) {
    incrementContent(1);
  } else if (Keys.DECREMENTORS.includes(key)) {
    incrementContent(-1);
  } else if (Keys.LARGE_INCREMENTORS.includes(key)) {
    incrementContent(5);
  } else if (Keys.LARGE_DECREMENTORS.includes(key)) {
    incrementContent(-5);
  } else if (key === Keys.DOLLAR_SIGN) {
    incrementContent(dataStore.data.length);
  } else if (key === Keys.ZERO) {
    incrementContent(-1 * dataStore.data.length);
  }
};

onMounted(() => window.addEventListener('keydown',  bindKeyDown));
onUnmounted(() => window.removeEventListener('keydown',  bindKeyDown));
</script>

<template>
  <div class="w-full h-[100dvh] flex justify-center items-center">
    <SlideContent :key="content" :content="content" />
    <SlideArrows
      @next="incrementContent(1)"
      @previous="incrementContent(-1)"
    />
    <ProgressLabel v-if="showProgressLabel" />
    <ProgressBar v-else />
  </div>
</template>
