<template>
  <div v-if="!isLoading">
    {{ data }}
  </div>
  <div v-else>
    {{ isLoading }}
  </div>
</template>

<script setup lang="ts">
import { api } from '~~/convex/_generated/api'

const { useConvexQuery } = useConvexClient()
const { data, isLoading } = useConvexQuery(api.tasks.get, {})
</script>
