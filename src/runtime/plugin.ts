import { createConvexVue } from '@convex-vue/core'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  if (!config.public.convexUrl) {
    console.error('Convex URL is not configured. Please add it to your nuxt.config.ts')
    throw new Error('Missing Convex URL configuration')
  }

  const convex = createConvexVue({
    convexUrl: config.public.convexUrl,
  })

  nuxtApp.vueApp.use(convex)

  return {
    provide: {
      convex,
    },
  }
})
