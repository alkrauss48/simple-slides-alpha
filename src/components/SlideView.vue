<script setup lang="ts">
import { ref, computed } from 'vue'
import ProgressBar from './ProgressBar.vue';
import ProgressLabel from './ProgressLabel.vue';
import SlideArrows from './SlideArrows.vue';
import SlideContent from './SlideContent.vue';
import ProgressType from '../enums/progressType.ts';
import { useRouter } from 'vue-router'
import QueryParams from '../interfaces/queryParams.ts';
import { RouteNames } from '../router/routes.ts';
import Keys from '../constants/keys.ts';

const router = useRouter();

const props = defineProps<{
  data: string[],
  params: QueryParams,
}>();

const index = ref(props.params.index);

const content = computed(() => {
  return props.data[index.value];
});

const showProgressBar = computed(() => {
  return props.params.progress === ProgressType.Bar;
});

const showProgressLabel = computed<boolean>(() => {
  return props.params.progress === ProgressType.Label;
});

const getNewIndex = (count: number) : number => {
  if (index.value + count < 0) {
    return 0;
  }

  if (index.value + count >= props.data.length) {
    return props.data.length - 1;
  }

  return index.value + count;
};

const incrementContent = (count: number) : void => {
  const newIndex = getNewIndex(count);

  if (index.value === newIndex) {
    return;
  }

  index.value = newIndex;

  const query: QueryParams = {
    index: newIndex,
  };

  if (showProgressLabel.value) {
    query.progress = ProgressType.Label;
  }

  router.replace({ query });
};

window.addEventListener('keydown', (event) : void => {
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
    incrementContent(props.data.length);
  } else if (key === Keys.ZERO) {
    incrementContent(-1 * props.data.length);
  }
});
</script>

<template>
  <div class="w-full h-[100dvh] flex justify-center items-center">
    <SlideContent :key="content" :content="content" />
    <SlideArrows
      @next="incrementContent(1)"
      @previous="incrementContent(-1)"
    />
    <ProgressLabel
      v-if="showProgressLabel"
      :current="index + 1"
      :total="data.length"
    />
    <ProgressBar
      v-if="showProgressBar"
      :current="index + 1"
      :total="data.length"
    />
  </div>
</template>
