<script setup lang="ts">

defineProps({
  current: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <aside class="
    [ text-white bg-gray-400 ]
    [ fixed bottom-0 right-0 ]
    [ h-8 w-24 ]
    [ flex justify-center items-center ]
  ">
    <p>{{ current }} / {{ total }}</p>
  </aside>
</template>
