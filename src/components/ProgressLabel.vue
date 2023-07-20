<script setup lang="ts">

defineProps<{
  current: number,
  total: number,
}>();
</script>

<template>
  <aside class="
    [ text-white bg-gray-400 ]
    [ fixed bottom-0 left-1/2 -ml-12 ]
    [ h-8 w-24 ]
    [ flex justify-center items-center ]
  ">
    <p>{{ current }} / {{ total }}</p>
  </aside>
</template>
