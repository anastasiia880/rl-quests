<script setup lang="ts">
withDefaults(defineProps<{ msg?: string }>(), {
  msg: 'Hello Vue',
})
</script>

<template>
  <h1 class="hello-vue">{{ msg }}</h1>
</template>

<style scoped>
.hello-vue {
  font-family: system-ui, sans-serif;
  color: #42b883;
  text-align: center;
}
</style>
