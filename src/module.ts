// File: src/module.ts
import { fileURLToPath } from 'node:url'
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  convexUrl: string
}

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    convexUrl: string
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-convex',
    configKey: 'convex',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    convexUrl: '',
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    // Make convexUrl optional during build
    if (process.env.NODE_ENV !== 'production') {
      nuxt.options.runtimeConfig.public.convexUrl = options.convexUrl || 'development-url'
    }
    else {
      nuxt.options.runtimeConfig.public.convexUrl = options.convexUrl
    }

    // Register plugin
    addPlugin(resolve(runtimeDir, 'plugin'))

    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolve(runtimeDir, 'composables'))
    })
  },
})
