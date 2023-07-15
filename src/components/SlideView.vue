<script setup lang="ts">
import { ref, computed } from 'vue'
import SlideContent from './SlideContent.vue';

const index = ref(0);
const data = ref([
  "Foo<br><br><ul><li>This text Has multiple </li><li>This text Has multiple lines And wants to be centered horizontally and vertically</li></ul>",
  'Second',
  'Third',
]);

const content = computed(() => {
  console.log(`got here ${index.value}`);
  return data.value[index.value];
});

const incrementContent = (count: number) => {
  if (index.value + count < 0) {
    index.value = 0;
    return;
  }

  if (index.value + count >= data.value.length) {
    index.value = data.value.length - 1;
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
