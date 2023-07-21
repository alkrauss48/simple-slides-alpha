<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const slidesUrl = ref("");

const back = () => {
  router.back();
}

const go = () => {
  router.push(`/${btoa(slidesUrl.value)}`);
}

</script>

<template>
  <main>
    <button
      @click="back()"
      class="fixed top-6 right-8 text-4xl"
    >✕</button>
    <form
      @submit.prevent="go()"
      class="h-screen flex justify-center items-center"
      action=""
      method="post"
    >
      <div class="flex flex-col">
        <label for="slidesUrl">Slides URL:</label>
        <input
          id="slidesUrl"
          class="border-solid border-2 border-black mr-4"
          name="slidesUrl"
          v-model="slidesUrl"
          required
          type="text"
        />
      </div>
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
