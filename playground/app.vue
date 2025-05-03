<script setup lang="ts">
import { api } from '../convex/_generated/api'

const { useConvexQuery, useConvexMutation } = useConvexClient()
const { data, isLoading } = useConvexQuery(api.tasks.get, {})

const text = ref('')
const { mutate } = useConvexMutation(api.tasks.addItem)

const createTask = () => {
  mutate({ text: text.value })
}
</script>

<template>
  <div v-if="!isLoading">
    data {{ data }}
    <input v-model="text">
    <button @click="createTask">
      create task
    </button>
  </div>
  <div v-else>
    loading {{ isLoading }}
  </div>
</template>
