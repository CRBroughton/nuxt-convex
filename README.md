# nuxt-convex

A Nuxt module for seamless integration with Convex.

## Features

- 🔌 Zero-config Convex integration
- 🎯 Auto-imported composables
- 🔄 Type-safe mutations and queries

## Installation

```bash
npm install @crbroughton/nuxt-convex
```

## Setup

1. Add `nuxt-convex` to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@crbroughton/nuxt-convex'],
  runtimeConfig: {
    public: {
      convexUrl: process.env.CONVEX_URL
    }
  }
})
```

2. Add your Convex URL to your `.env` file:

```env
NUXT_PUBLIC_CONVEX_URL=your_convex_deployment_url_here
```
## License

MIT License