<template>
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
  <q-btn flat stretch label="Login" @click="handleLogin" />
  <q-btn flat stretch label="Logout" @click="handleLogout" />
  <q-btn
    flat
    stretch
    :label="$q.dark.isActive ? 'light' : 'dark'"
    @click="toggleDark"
  />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'

const $q = useQuasar()

function toggleDark(): void {
  $q.dark.toggle()
}
function handleLogin(): void {
  window.location.href = '/.auth/login/aad'
}
function handleLogout(): void {
  window.location.href = '/.auth/logout'
}
</script>
