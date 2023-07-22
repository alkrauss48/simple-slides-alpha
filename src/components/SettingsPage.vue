<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const slidesUrl = ref(localStorage.getItem('slidesUrl'));

const back = () => {
  router.back();
}

const go = () => {
  router.push(`/${btoa(slidesUrl.value)}`);
}

</script>

<template>
  <main>
    <router-link
      to="/"
      class="
        px-4 py-2
        fixed top-6 left-8
        bg-black text-white border-solid border-2 border-black
        hover:bg-white hover:text-black
      ">Home</router-link>
    <button
      @click="back()"
      class="fixed top-6 right-8 text-4xl"
    >✕</button>
    <form
      @submit.prevent="go()"
      class="h-[100dvh] flex flex-col justify-center items-center"
      action=""
      method="post"
    >
        <p class="w-64 mb-8">Enter the URL to your markdown file below, and then click present.</p>
        <label for="slidesUrl">URL to your slides:</label>
        <textarea
          id="slidesUrl"
          class="w-64 p-2 my-4 border-solid border-2 border-black"
          name="slidesUrl"
          v-model="slidesUrl"
          rows="4"
          required
          placeholder="https://example.com/your-presentation.md"
          ></textarea>
      <button
        class="
          p-4 border-solid border-2 border-black
          bg-black text-white
          hover:text-black hover:bg-white
        "
        type="submit"
      >Present</button>
    </form>
  </main>
</template>
