<template>
  <q-input v-model="model" :rules="rules" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  textValue: string
  rules: ((val: string) => boolean | string)[]
}>()
const emit = defineEmits(['input'])

const model = computed({
  get(): string {
    return props.textValue
  },
  set(value: string) {
    return emit('input', value)
  },
})
</script>
