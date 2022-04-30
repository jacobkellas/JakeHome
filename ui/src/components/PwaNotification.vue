<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
let registration: ServiceWorkerRegistration | null

function updateAvailable(this: any) {
  registration = this
  notify()
}

function refreshPage() {
  if (!registration || !registration.waiting) {
    return
  }
  registration.waiting.postMessage({ type: 'SKIP_WAITING' })
}

function notify() {
  $q.notify({
    message: 'An update has been found.',
    color: 'primary',
    actions: [
      {
        label: 'Update',
        handler: () => {
          refreshPage()
        },
      },
      {
        label: 'Dismiss',
      },
    ],
  })
}

onBeforeMount(() => {
  document.addEventListener('swUpdated', updateAvailable)
})
</script>
