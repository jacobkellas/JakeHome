<template>
  <q-dialog :model-value="props.showAddActivity" persistent>
    <q-card class="add-activity q-mx-xl q-my-lg">
      <q-card-section class="row">
        <div class="text-h5">Add Activity</div>
        <q-space />
        <q-btn
          icon="close"
          flat
          round
          dense
          v-close-popup
          @click="handleClose"
        />
      </q-card-section>
      <q-card-section>
        <q-input label="Name" v-model="activity.name" />
        <q-input label="Description" v-model="activity.description" />
        <q-input label="Cost" v-model="activity.cost" />
      </q-card-section>
      <q-card-section>
        <q-btn @click="handleSave" color="primary">Save</q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { Activity } from '@/models/Activity'

const props = defineProps<{
  showAddActivity: boolean
}>()
const emit = defineEmits<{
  (e: 'closeDialog'): void
  (e: 'saveActivity', activity: Activity): void
}>()
let activity: Activity = new Activity()

function handleClose() {
  emit('closeDialog')
}

function handleSave() {
  emit('saveActivity', activity)
  emit('closeDialog')
}
</script>

<style scoped>
.add-activity {
  width: 100%;
  min-width: 200px;
}
</style>
