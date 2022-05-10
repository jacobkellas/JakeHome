<template>
  <div class="row justify-center q-mt-lg">
    <div class="col-md-8 col-sm-9 col-xs-12">
      <ActivityTable
        :activities="activities"
        @save-activity="handleSaveActivity"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Activity } from '@/models/Activity'
import ActivityTable from '@/components/organisms/ActivityTable.vue'

const activities: Activity[] = [
  {
    id: '1',
    name: 'Running',
    description: 'Running is fun',
    cost: 'low',
  },
]

function handleSaveActivity(activity: Activity) {
  activities.push(activity)
}
</script>
