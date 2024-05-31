import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  runtimeConfig: {
    replicateApiToken: process.env.NUXT_REPLICATE_API_TOKEN || ' '
  },
  nitro: {
    preset: 'vercel-edge'
  },
  sourcemap: {
    server: false,
    client: false
  },
  build: {
    transpile: ['vuetify']
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
})
function defineNuxtConfig(arg0: { runtimeConfig: { replicateApiToken: any }; nitro: { preset: string }; sourcemap: { server: boolean; client: boolean }; build: { transpile: string[] }; modules: ((_options: any, nuxt: any) => void)[]; vite: { vue: { template: { transformAssetUrls: any } } } }) {
  throw new Error('Function not implemented.')
}

