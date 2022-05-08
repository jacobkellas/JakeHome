<template>
  <q-input v-model="model" :rules="rules" />
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  rules: ((val: string) => boolean | string)[]
}>()
const emit = defineEmits(['update:modelValue'])
const store = useStore()

const model = computed({
  get(): string {
    return props.modelValue
  },
  set(value: string) {
    store.dispatch('incrementCount')
    return emit('update:modelValue', value)
  },
})
</script>
