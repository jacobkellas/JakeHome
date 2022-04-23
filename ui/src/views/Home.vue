<template>
  <div class="row justify-center">
    <div class="col-md-6 col-sm-9 col-xs-12">
      <q-card class="q-mx-xl q-my-lg">
        <q-card-section>
          <div class="text-h5 text-center">Welcome to Vue Playground!</div>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <div class="text-body1 text-center">Click on the demos above.</div>
          <div v-if="secret" class="text-body1 text-center">{{ secret }}</div>
          <q-btn @click="handleEnv">Test</q-btn>
          <q-btn @click="handleFunction">Test Function</q-btn>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const secret: string = process.env.VUE_APP_TEST_SETTING

function handleEnv(): void {
  console.log(process.env)
}
async function handleFunction(): Promise<void> {
  await fetch('/api/HttpTriggerWithOpenAPICSharp1?name=Jake').then((response) =>
    console.log(response)
  )
}
</script>
