export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@unocss/nuxt",
    "@nuxt/image",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  image: {
    provider: "ipx",
    presets: {
      default: {
        modifiers: {
          format: "webp",
          loading: "lazy",
          quality: "100",
        },
      },
    },
  },
});
