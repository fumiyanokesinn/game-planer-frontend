const isProduction = process.env.NODE_ENV == 'production';
const href = isProduction
  ? '/lol-loser/favicon.ico' // 本番用
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
  // 拡張機能
  modules: ['@nuxt/ui', '@nuxtjs/color-mode', 'nuxt-icon'],
  // typescriptの設定
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
  // 背景色の初期値
  colorMode: {
    preference: 'light'
  },

  runtimeConfig: {
    // サーバーサイドの環境変数
    riotApiKey: 'RGAPI-7e48db8c-d6c2-4bf5-ae89-8835e0bba5cd',
    public: {
      // サーバー＋クライアントサイドの環境変数
    }
  }
});
