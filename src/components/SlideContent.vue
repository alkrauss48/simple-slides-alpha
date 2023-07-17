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
  <div
    class="
      typography
      [ h-4/5 w-4/5 text-center ]
      [ flex justify-center items-center ]
    "
    ref="slideContent"
    v-html="content"
  ></div>
</template>
