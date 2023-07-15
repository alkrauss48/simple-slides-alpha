<script setup lang="ts">
import { ref, onMounted } from 'vue'
import textfit from 'textfit';

defineProps({
  content: {
    type: String,
    required: false,
  },
});

const slideContent = ref(null)

const runTextFit = () => {
  textfit(slideContent.value, {
    maxFontSize: 500,
  });
}

onMounted(runTextFit);
</script>

<template>
  <div id="slideContent" ref="slideContent">
    <p v-html="content"></p>
  </div>
</template>

<style>
#slideContent {
  height: 90%;
  width: 90%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

#slideContent * {
  margin: 0;
  text-align: left;
}
</style>
