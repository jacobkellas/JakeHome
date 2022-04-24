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
          <q-btn color="primary" @click="getUserInfo">Test</q-btn>
          <q-btn color="primary" @click="handleFunction">Test Function</q-btn>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
async function handleFunction(): Promise<void> {
  await fetch('/api/HttpTriggerWithOpenAPICSharp1?name=Jake').then((response) =>
    console.log(response)
  )
}
async function getUserInfo(): Promise<void> {
  const response = await fetch('/.auth/me')
  console.log(response)
  const payload = await response.json()
  console.log(payload)
}
</script>
