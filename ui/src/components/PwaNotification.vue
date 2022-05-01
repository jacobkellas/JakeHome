<script setup lang="ts">
import wb from '@/registerServiceWorker'
import { onBeforeMount } from 'vue'
import { Workbox } from 'workbox-window'
import { Notify } from 'quasar'

let $wb: Workbox | null

function alert() {
  console.log('creating alert')
  Notify.create({
    message: 'An update is available',
    color: 'primary',
    actions: [
      {
        label: 'Update',
        color: 'white',
        handler: async () => await $wb!.messageSW({ type: 'SKIP_WAITING' }),
      },
      { label: 'Dismiss', color: 'white', handler: () => {} },
    ],
  })
}

onBeforeMount(() => {
  $wb = wb
  $wb!.addEventListener('waiting', () => {
    console.log('heard waiting')
    alert()
  })
})
</script>
