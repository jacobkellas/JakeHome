<template>
  <q-toolbar>
    <template v-if="!$q.platform.is.mobile">
      <q-btn
        flat
        stretch
        size="lg"
        class="text-weight-medium"
        @click="$router.push('/')"
      >
        Home
      </q-btn>
      <q-btn-dropdown
        v-if="isAdmin()"
        flat
        stretch
        label="Hayley and Jake Planner"
      >
        <q-item clickable v-close-popup @click="$router.push('/activities')">
          <q-item-section>
            <q-item-label>Activities</q-item-label>
          </q-item-section>
        </q-item>
      </q-btn-dropdown>
    </template>

    <template v-if="$q.platform.is.mobile">
      <q-btn flat round dense icon="menu">
        <q-menu>
          <q-list>
            <q-item clickable v-close-popup @click="$router.push('/')">
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-item v-if="isAdmin()" clickable @click="$router.push('/admin')">
              <q-item-section>Admin</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
              <q-menu>
                <q-list>
                  <q-item
                    clickable
                    v-close-popup
                    @click="$router.push('/planner/addactivity')"
                    >Add Activity</q-item
                  >
                </q-list>
              </q-menu>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn flat stretch size="md" @click="$router.push('/')"> Home </q-btn>
    </template>

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
      dense
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
import { useStore } from '@/store'

const props = defineProps<{
  isAuthenticated: boolean
}>()

const store = useStore()
const $q = useQuasar()
const { login, logout, isAdmin } = authentication()

function toggleDark(): void {
  $q.dark.toggle()
  store.dispatch('setDarkMode', $q.dark.isActive)
}
</script>
