<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <Toolbar />
    </q-header>
    <q-page-container>
      <router-view :key="$route.fullPath"></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import Toolbar from '@/components/Toolbar.vue'
</script>
