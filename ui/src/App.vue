<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <Toolbar :isAuthenticated="isUserAuthenticated" />
    </q-header>
    <q-page-container>
      <router-view :key="$route.fullPath"></router-view>
    </q-page-container>
  </q-layout>
  <PwaNotification />
</template>

<script setup lang="ts">
import Toolbar from '@/components/Toolbar.vue'
import PwaNotification from '@/components/PwaNotification.vue'
import { useQuasar } from 'quasar'
import { onBeforeMount, computed, ref } from 'vue'
import { authentication } from '@/composables/authentication'
import { useStore } from '@/store'

const $q = useQuasar()
const { getUser, isAuthenticated } = authentication()
const store = useStore()
const isUserAuthenticated = ref(computed(() => isAuthenticated()))

onBeforeMount(async () => {
  const darkMode = store.getters.getDarkMode
  if (darkMode && !$q.dark.isActive) {
    $q.dark.toggle()
  }
  const user = await getUser()
  if (user) {
    store.dispatch('updateUserInfo', user)
  }
})
</script>
