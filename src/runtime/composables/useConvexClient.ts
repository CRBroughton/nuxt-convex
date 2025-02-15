import { useConvexMutation, useConvexQuery } from '@convex-vue/core'

export function useConvexClient() {
  const isClient = import.meta.client
  if (!isClient) {
    return {
      useConvexQuery: () => ({ data: null, isLoading: true }),
      useConvexMutation: () => ({
        isLoading: true,
        error: true,
        mutate: () => Promise.resolve(null),
      }),
    }
  }
  return {
    useConvexQuery,
    useConvexMutation,
  }
}
