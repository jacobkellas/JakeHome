<template>
  <div class="row justify-center q-mt-lg">
    <div class="col-md-8 col-sm-9 col-xs-12">
      <q-table
        class="q-px-lg"
        title="Activities"
        :rows="activities"
        :columns="columns"
        row-key="id"
        ><template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn dense round flat @click="editRow(props)" icon="edit"></q-btn>
            <q-btn
              dense
              round
              flat
              @click="deleteRow(props)"
              icon="delete"
            ></q-btn>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { Activity } from '@/models/Activity'

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

const activities: Activity[] = [
  {
    id: '1',
    name: 'Running',
    description: 'Running is fun',
    cost: 'low',
  },
]

function editRow(props: any) {
  console.log('editRow', props)
}

function deleteRow(props: any) {
  console.log('deleteRow', props)
}

function addActivity() {
  console.log('addActivity')
}
</script>
