<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import HelloVue from './components/HelloVue.vue'
import CounterCard from './components/CounterCard.vue'

const count = ref(0)
const history = ref<number[]>([])

const parity = computed(() => (count.value % 2 === 0 ? 'even' : 'odd'))

watch(count, (value) => {
  history.value = [...history.value, value].slice(-3)
})

function handleChange(value: number) {
  count.value = value
}

function handleReset() {
  count.value = 0
}
</script>

<template>
  <main class="flex min-h-screen w-full flex-col items-center gap-10 px-4 py-16 font-sans">
    <HelloVue />

    <CounterCard
      :count="count"
      label="Counter"
      :step="1"
      @change="handleChange"
      @reset="handleReset"
    />

    <div class="flex flex-col items-center gap-4">
      <p class="status text-center text-slate-700">
        Parent state: <strong>{{ count }}</strong> ({{ parity }})
      </p>

      <p v-if="history.length" class="history text-center text-sm text-gray-500">
        Recent values: {{ history.join(' → ') }}
      </p>
    </div>
  </main>
</template>
