<script setup lang="ts">
import { ref, onMounted } from 'vue'
// @ts-ignore
import textfit from '../utils/textFit.js';

defineProps<{
  content: string,
}>();

const slideContent = ref<HTMLDivElement>();

const runTextFit = () : void => {
  textfit(slideContent.value, {
    maxFontSize: 500,
  });
};

const openAllLinksInNewTab = () : void => {
    document
      .querySelectorAll(".slide-content a")
      .forEach((element) => {
        element.setAttribute("target", "_blank");
      });
};

window.addEventListener('resize', () : void => {
  runTextFit();
});

onMounted(() : void => {
  runTextFit();
  openAllLinksInNewTab();
});
</script>

<template>
  <div
    class="
      slide-content typography
      [ h-4/5 w-4/5 text-center ]
      [ flex justify-center items-center ]
    "
    ref="slideContent"
    v-html="content"
  ></div>
</template>
