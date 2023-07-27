<script setup lang="ts">

const emit = defineEmits<{
  (e: 'next'): void
  (e: 'previous'): void
}>();

</script>

<template>
  <section>
    <button
      id="previous"
      type="button"
      @click="emit('previous')"
      title="Go back 1 slide"
      class="
        fixed bottom-6 left-6
        w-0 h-0
        border-r-[30px] border-y-[20px]
        border-y-transparent border-r-gray-200
      "></button>
    <button
      id="next"
      type="button"
      @click="emit('next')"
      title="Go forward 1 slide"
      class="
        fixed bottom-6 right-6
        w-0 h-0
        border-l-[30px] border-y-[20px]
        border-y-transparent border-l-gray-200
      "></button>
  </section>
</template>
