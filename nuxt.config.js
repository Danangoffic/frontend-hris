export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend-hris',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
    // https://nuxt.com/modules/dotenv
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/guide/setup
    '@nuxtjs/auth-next',
  ],
  // auth nuxt js
  auth: {
    // Options auth with sanctum
    strategies: {
      local: {
        token: {
          property: 'result.access_token',
          global: true,
          required: true,
          type: 'Bearer',
          maxAge: 86400,
        },
        refreshToken: {
          property: 'token',
          data: 'token',
          maxAge: 86400, // Durasi refresh token dalam detik (1 hari)
        },
        user: {
          property: 'result',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get' },
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // proxy: true,
    // credentials: true,
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://1857-103-209-251-38.ngrok-free.app/api',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
}
