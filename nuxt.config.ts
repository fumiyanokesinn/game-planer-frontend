const isProduction = process.env.NODE_ENV == 'production';
const href = isProduction
  ? '/game-planer-frontend/favicon.ico' // 本番用
  : '/favicon.ico'; // 開発用
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Game Planer',
      link: [
        { rel: 'icon', type: 'image/x-icon', href } // これを追記する
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
    preference: 'light'
  }
});
