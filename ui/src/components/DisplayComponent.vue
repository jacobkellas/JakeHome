<template>
  <q-card class="q-mx-xl q-my-lg">
    <div class="row">
      <div class="col q-mx-lg">
        <h3>Number of inputs: {{ count }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col q-mx-lg">
        <h5>{{ vmodel.input1 }}</h5>
        <InputComponentVmodel v-model="vmodel.input1" :rules="rules" />
      </div>
      <div class="col q-mx-lg">
        <h5>{{ vmodel.input2 }}</h5>
        <InputComponentVmodel v-model="vmodel.input2" :rules="rules" />
      </div>
      <div class="col q-mx-lg">
        <h5>{{ vmodel.input3 }}</h5>
        <InputComponentVmodel v-model="vmodel.input3" :rules="rules" />
      </div>
    </div>
    <div class="row q-pb-xl">
      <div class="col q-mx-lg">
        <h5>{{ model.input1 }}</h5>
        <InputComponent
          :text-value="model.input1"
          @input="handleInput1"
          :rules="rules"
        />
      </div>
      <div class="col q-mx-lg">
        <h5>{{ model.input2 }}</h5>
        <InputComponent
          :text-value="model.input2"
          @input="handleInput2"
          :rules="rules"
        />
      </div>
      <div class="col q-mx-lg">
        <h5>{{ model.input3 }}</h5>
        <InputComponent
          :text-value="model.input3"
          @input="handleInput3"
          :rules="rules"
        />
      </div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useStore } from '@/store'
import { InputModel } from '@/models'
import InputComponentVmodel from '@/components/InputComponentVmodel.vue'
import InputComponent from '@/components/InputComponent.vue'

const store = useStore()
const count = computed(() => store.getters.getCount)
const rules = [(val: string) => !!val || 'Field is required']

const vmodel = reactive(new InputModel('input1', 'input2', 'input3'))
const model = reactive(new InputModel('input1', 'input2', 'input3'))

function handleInput1(value: string): void {
  model.input1 = value
  store.dispatch('incrementCount')
}
function handleInput2(value: string): void {
  model.input2 = value
  store.dispatch('incrementCount')
}
function handleInput3(value: string): void {
  model.input3 = value
  store.dispatch('incrementCount')
}
</script>
