<script setup lang="ts">
import { ref, computed } from 'vue'
import SlideContent from './SlideContent.vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const index = ref(props.index);

const content = computed(() => {
  return props.data[index.value];
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

document.addEventListener('keydown', function(event) {
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
  <div id="slide">
    <SlideContent :key="content" :content="content" />
  </div>
</template>

<style scoped>
#slide {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
