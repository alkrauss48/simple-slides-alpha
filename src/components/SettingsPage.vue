<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import { VisualMode, isDarkMode } from '../enums/visualMode.ts';
import { getVisualMode, setVisualMode } from '../utils/handleVisualMode.ts';

const router = useRouter();
const visualMode = getVisualMode();

const slidesUrl = ref<string>(localStorage.getItem('slidesUrl') ?? '');
const darkMode = ref<boolean>(isDarkMode(visualMode));

const back = () => {
  router.back();
};

const go = () => {
  if (!slidesUrl.value) {
    return;
  }

  router.push(`/${btoa(slidesUrl.value)}`);
};

watch(darkMode, async (newValue: boolean) => {
  const newMode = newValue ? VisualMode.Dark : VisualMode.Light;

  setVisualMode(newMode);
});
</script>

<template>
  <main>
    <router-link
      to="/"
      class="button fixed top-6 left-8"
      >Home</router-link>
    <button
      id="close"
      @click="back()"
      class="fixed top-6 right-8 text-4xl"
    >✕</button>
    <form
      @submit.prevent="go()"
      class="h-[100dvh] flex flex-col justify-center items-center"
      action=""
      method="post"
    >
        <div class="flex mb-8">
          <input type="checkbox" id="darkMode" v-model="darkMode">
          <label class="ml-4 font-bold" for="darkMode">Dark Mode?</label>
        </div>
        <hr class="border-1 border-black">
        <p class="w-64 mb-8">Enter the URL to your markdown file below, and then click present.</p>
        <label for="slidesUrl">URL to your slides:</label>
        <textarea
          id="slidesUrl"
          class="w-64 p-2 my-4 border-solid border-2 border-black text-black"
          name="slidesUrl"
          v-model="slidesUrl"
          rows="4"
          required
          placeholder="https://example.com/your-presentation.md"
          ></textarea>
      <button
        class="button"
        type="submit"
      >Present</button>
    </form>
  </main>
</template>
