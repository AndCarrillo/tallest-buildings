export default defineNuxtConfig({
  // Módulos de Nuxt
  modules: ["@nuxt/content", "@nuxt/image"],

  // Configuración de la aplicación
  app: {
    head: {
      title: "Catálogo de Edificios Más Altos",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Catálogo académico con Nuxt Content - Explora los edificios más altos del mundo",
        },
        { name: "author", content: "Andrea Carrillo" },
        { property: "og:title", content: "Catálogo de Edificios Más Altos" },
        {
          property: "og:description",
          content: "Explora arquitectura emblemática del mundo",
        },
        { property: "og:type", content: "website" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Raleway:400,300,600",
        },
        { rel: "stylesheet", href: "/css/normalize.css" },
        { rel: "stylesheet", href: "/css/skeleton.css" },
        { rel: "icon", type: "image/x-icon", href: "/icons/favicon.ico" },
      ],
    },
  },

  // Configuración de Nitro para pre-renderizado optimizado
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  // Configuración de Nuxt Content
  content: {
    highlight: {
      theme: "github-light",
    },
  },

  // Variables de runtime (para producción)
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || "http://localhost:3000",
    },
  },

  // Fecha de compatibilidad
  compatibilityDate: "2025-09-26",
});
