<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    count: number
    label?: string
    step?: number
  }>(),
  {
    label: 'Counter',
    step: 1,
  },
)

const emit = defineEmits<{
  change: [value: number]
  reset: []
}>()

const doubled = computed(() => props.count * 2)
const isZero = computed(() => props.count === 0)

function increment() {
  emit('change', props.count + props.step)
}

function decrement() {
  emit('change', props.count - props.step)
}
</script>

<template>
  <section
    class="mx-auto max-w-xs w-full rounded-2xl border border-gray-200 p-6 text-center font-sans shadow-sm"
  >
    <h2 class="label mb-4 text-base font-semibold text-slate-700">{{ label }}</h2>

    <div class="flex items-center justify-center gap-4">
      <button
        type="button"
        aria-label="Decrement"
        class="h-10 w-10 flex justify-center items-center cursor-pointer rounded border border-emerald-500 bg-white text-xl text-emerald-500 transition-colors hover:bg-emerald-500 hover:text-white"
        @click="decrement"
      >
        <span class="w-5 h-5 flex items-center justify-center">−</span>
      </button>

      <output class="value min-w-12 text-3xl tabular-nums text-slate-700">{{ count }}</output>

      <button
        type="button"
        aria-label="Increment"
        class="h-10 w-10 flex justify-center items-center cursor-pointer rounded border border-emerald-500 bg-white text-xl text-emerald-500 transition-colors hover:bg-emerald-500 hover:text-white"
        @click="increment"
      >
        <span class="w-5 h-5 flex items-center justify-center">+</span>
      </button>
    </div>

    <p class="derived mt-4 text-sm text-gray-500">Doubled count: {{ doubled }}</p>

    <button
      type="button"
      class="reset mt-4 cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-1.5 text-slate-700 transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
      :disabled="isZero"
      @click="emit('reset')"
    >
      Reset count
    </button>
  </section>
</template>
