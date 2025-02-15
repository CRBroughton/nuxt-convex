import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },

  compatibilityDate: '2025-02-15',

  convex: {
    convexUrl: 'http://127.0.0.1:3210',
  },
})
