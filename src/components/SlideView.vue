<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
