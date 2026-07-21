<script setup lang="ts">
withDefaults(defineProps<{ msg?: string }>(), {
  msg: 'Hello Vue',
})
</script>

<template>
  <h1 class="hello-vue text-center font-sans text-4xl font-bold text-emerald-500">{{ msg }}</h1>
</template>
