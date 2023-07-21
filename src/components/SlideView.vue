<script setup lang="ts">
import { ref, computed } from 'vue'
import ProgressBar from './ProgressBar.vue';
import ProgressLabel from './ProgressLabel.vue';
import SlideArrows from './SlideArrows.vue';
import SlideContent from './SlideContent.vue';
import { PROGRESS_BAR, PROGRESS_LABEL } from '../constants/progressTypes';
import { useRouter } from 'vue-router'

const router = useRouter();

const props = defineProps<{
  data: Array,
  params: object,
}>();

const index = ref<number>(props.params.index);

const content = computed<string>(() => {
  return props.data[index.value];
});

const showProgressBar = computed<boolean>(() => {
  return props.params.progress === PROGRESS_BAR;
});

const showProgressLabel = computed<boolean>(() => {
  return props.params.progress === PROGRESS_LABEL;
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

  const query = {
    index: newIndex,
  };

  if (showProgressLabel.value) {
    query.progress = PROGRESS_LABEL;
  }

  router.replace({ query });
};

window.addEventListener('keydown', (event) : void => {
  const { key } = event;

  if (key == "Enter" || key == " ") {
    var next = document.getElementById('next');
    var previous = document.getElementById('previous');

    if (document.activeElement === next || document.activeElement === previous) {
      return;
    }
  }

  const incrementors = [
    "Enter",
    " ",
    "ArrowDown",
    "ArrowRight",
    "j",
    "l",
  ];

  const decrementors = [
    "Backspace",
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
