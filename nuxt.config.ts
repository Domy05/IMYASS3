// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true }
// })

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {    //MAKES IT AVAILABLE TO THE FRONTEND
    public: {
      API_BASE: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:1337/api' //LOADS THE CONTENT FROM THE ENV FILE
    }
  }
})