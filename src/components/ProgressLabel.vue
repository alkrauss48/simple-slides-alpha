<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  current: number,
  total: number,
}>();

const label = computed<string>(() => {
  return `${props.current} / ${props.total}`;
});
</script>

<template>
  <aside class="
    [ text-black bg-gray-300 ]
    [ fixed bottom-0 left-1/2 -ml-12 ]
    [ h-8 w-24 ]
    [ flex justify-center items-center ]
  ">
    <p>{{ label }}</p>
  </aside>
</template>
