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
    <q-btn
      v-if="isAdmin()"
      flat
      stretch
      label="Admin"
      @click="$router.push('/admin')"
    />
    <q-space />
    <q-btn
      v-if="!props.isAuthenticated"
      flat
      stretch
      label="Login"
      @click="login"
    />
    <q-btn
      v-if="props.isAuthenticated"
      flat
      stretch
      label="Logout"
      @click="logout"
    />
    <q-btn flat round @click="toggleDark">
      <q-icon :name="$q.dark.isActive ? 'light_mode' : 'brightness_3'" />
    </q-btn>
  </q-toolbar>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { authentication } from '@/composables/authentication'

const props = defineProps<{
  isAuthenticated: boolean
}>()

const $q = useQuasar()
const { login, logout, isAdmin } = authentication()

function toggleDark(): void {
  $q.dark.toggle()
}
</script>
