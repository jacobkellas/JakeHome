<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <Toolbar :isAuthenticated="isUserAuthenticated" />
    </q-header>
    <q-page-container>
      <router-view :key="$route.fullPath"></router-view>
    </q-page-container>
    <q-footer>
      <div class="text-body1 text-center">{{ VERSION }}</div>
    </q-footer>
  </q-layout>
  <PwaNotification />
</template>

<script setup lang="ts">
import Toolbar from '@/components/molecules/Toolbar.vue'
import PwaNotification from '@/components/atoms/PwaNotification.vue'
import { useQuasar } from 'quasar'
import { onBeforeMount, computed, ref } from 'vue'
import { authentication } from '@/composables/authentication'
import { useStore } from '@/store'
import { VERSION } from '@/constants/app'

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
