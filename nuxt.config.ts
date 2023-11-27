// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Game Planer',
      link: [
        { rel: 'icon', type: 'image/png', href: '/Cafe.png' } // これを追記する
      ]
    }
  },
  modules: ['@nuxt/ui', '@nuxtjs/color-mode', 'nuxt-icon'],
  typescript: {
    typeCheck: true,
    strict: true
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  colorMode: {
    classSuffix: ''
  }
});
