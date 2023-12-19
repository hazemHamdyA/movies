export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@unocss/nuxt",
    "@nuxt/image",
    "nuxt-icon",
  ],
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
