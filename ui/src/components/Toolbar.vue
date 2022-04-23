<template>
  <q-toolbar>
    <q-btn
      flat
      stretch
      size="lg"
      class="text-weight-medium"
      @click="$router.push('/')"
    >
      Vue Playground
    </q-btn>
    <q-btn flat stretch label="V-Model Demo" @click="$router.push('/vmodel')" />
    <q-space />
    <q-btn
      flat
      stretch
      :label="$q.dark.isActive ? 'light' : 'dark'"
      @click="toggleDark"
    />
  </q-toolbar>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'

const $q = useQuasar()

function toggleDark() {
  $q.dark.toggle()
}
</script>
