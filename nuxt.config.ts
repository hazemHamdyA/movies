export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@unocss/nuxt", "@nuxt/image"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  devtools: { enabled: true },
});