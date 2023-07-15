<script setup lang="ts">
import { ref, onMounted } from 'vue'
import textfit from 'textfit';

const slideContent = ref(null)

const runTextFit = () => {
  textfit(slideContent.value, { maxFontSize: 500 });
}

onMounted(runTextFit);

addEventListener("resize", runTextFit)
</script>

<template>
  <div id="slide">
    <div ref="slideContent" style="width:90%;height:90%">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
    </div>
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
