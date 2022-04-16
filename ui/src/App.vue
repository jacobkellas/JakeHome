<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  setup() {
    return {
      leftDrawerOpen: ref(false),
    }
  },
}
</script>
