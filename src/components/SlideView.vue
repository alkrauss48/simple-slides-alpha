<script setup lang="ts">
import { ref, computed } from 'vue'
import ProgressBar from './ProgressBar.vue';
import ProgressLabel from './ProgressLabel.vue';
import SlideContent from './SlideContent.vue';
import { PROGRESS_BAR, PROGRESS_LABEL } from '../constants/progressTypes';

const props = defineProps<{
  data: Array,
  params: object,
}>();

const index = ref(props.params.index);

const content = computed(() => {
  return props.data[index.value];
});

const showProgressBar = computed(() => {
  return props.params.progress === PROGRESS_BAR;
});

const showProgressLabel = computed(() => {
  return props.params.progress === PROGRESS_LABEL;
});

const getNewIndex = (count: number) => {
  if (index.value + count < 0) {
    return 0;
  }

  if (index.value + count >= props.data.length) {
    return props.data.length - 1;
  }

  return index.value + count;
};

const incrementContent = (count: number) => {
  const newIndex = getNewIndex(count);

  if (index.value === newIndex) {
    return;
  }

  index.value = newIndex;

  const url = new URL(location.href);
  url.searchParams.set('index', newIndex);
  history.replaceState(null, '', url)
};

window.addEventListener('keydown', function(event) {
  const { key } = event;

  const incrementors = [
    "ArrowDown",
    "ArrowRight",
    "j",
    "l",
  ];

  const decrementors = [
    "ArrowUp",
    "ArrowLeft",
    "k",
    "h",
  ];

  if (incrementors.includes(key)) {
    incrementContent(1);
  } else if (decrementors.includes(key)) {
    incrementContent(-1);
  } else if (key === 'f') {
    incrementContent(5);
  } else if (key === 'b') {
    incrementContent(-5);
  } else if (key === '$') {
    incrementContent(props.data.length);
  } else if (key === '0') {
    incrementContent(-1 * props.data.length);
  }
});
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <SlideContent :key="content" :content="content" />
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
