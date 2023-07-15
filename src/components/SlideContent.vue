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
  <div id="slideContent" ref="slideContent" v-html="content">
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
  text-align: center;
}

#slideContent li {
  text-align: left;
}

#slideContent .textFitted {
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

#slideContent img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
