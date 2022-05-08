<template>
  <p>{{ message }}</p>
  <q-btn color="primary" @click="handleFunction">Test Function</q-btn>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

const message = computed(() => store.getters.getMessage)

async function handleFunction(): Promise<void> {
  await fetch('/api/HttpTriggerWithOpenAPICSharp1?name=Jake')
    .then((response) => response.text())
    .then((data) => {
      store.dispatch('setMessage', data)
    })
}
</script>
