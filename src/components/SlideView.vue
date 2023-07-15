<script setup lang="ts">
import { ref, computed } from 'vue'
import SlideContent from './SlideContent.vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const index = ref(0);

const content = computed(() => {
  return props.data[index.value];
});

const incrementContent = (count: number) => {
  if (index.value + count < 0) {
    index.value = 0;
    return;
  }

  if (index.value + count >= props.data.length) {
    index.value = props.data.length - 1;
    return;
  }

  index.value = index.value + count;
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
    index.value = props.data.length - 1;
  } else if (key === '0') {
    index.value = 0;
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
