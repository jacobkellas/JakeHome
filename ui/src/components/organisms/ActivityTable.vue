<template>
  <q-table
    class="q-px-lg"
    title="Activities"
    :rows="props.activities"
    :columns="columns"
    row-key="id"
    ><template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn dense round flat @click="editRow(props)" icon="edit"></q-btn>
        <q-btn dense round flat @click="deleteRow(props)" icon="delete"></q-btn>
      </q-td>
    </template>
    <template v-slot:top-right>
      <q-btn
        color="primary"
        label="Add Activity"
        no-caps
        @click="addActivity"
      />
    </template>
  </q-table>
  <ActivityDialog
    :show-add-activity="showAddActivity"
    @close-dialog="handleCloseDialog"
    @save-activity="handleSaveActivity"
  />
</template>

<script setup lang="ts">
import { Activity } from '@/models/Activity'
import { Ref, ref } from 'vue'
import ActivityDialog from '@/components/molecules/ActivityDialog.vue'

const props = defineProps<{
  activities: Activity[]
}>()
const emit = defineEmits<{
  (e: 'saveActivity', activity: Activity): void
}>()

const showAddActivity: Ref<boolean> = ref(false)

const columns = [
  { name: 'id', label: 'ID', field: 'id' },
  { name: 'name', label: 'Name', field: 'name' },
  {
    name: 'description',
    label: 'Description',
    field: 'description',
  },
  { name: 'cost', label: 'Cost', field: 'cost' },
  {
    name: 'actions',
    label: 'Actions',
    field: 'actions',
  },
]

function editRow(props: any) {
  console.log('editRow', props)
}

function deleteRow(props: any) {
  console.log('deleteRow', props)
}

function addActivity() {
  showAddActivity.value = true
}

function handleCloseDialog() {
  showAddActivity.value = false
}

function handleSaveActivity(activity: Activity) {
  emit('saveActivity', activity)
}
</script>
