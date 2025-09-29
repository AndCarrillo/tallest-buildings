export default defineNuxtConfig({
  // Módulos de Nuxt
  modules: ["@nuxt/content"],

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
        { rel: "icon", type: "image/png", href: "/icons/favicon.png" },
        { rel: "canonical", href: "https://tu-dominio.com" }, // Actualizar con tu dominio
      ],
    },
  },

  // Configuración de CSS global
  css: [
    // Aquí puedes agregar archivos CSS globales si necesitas
    // '~/assets/css/global.css'
  ],

  // Configuración de Nitro para pre-renderizado
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml"], // Opcional: pre-renderizar sitemap
    },
  },

  // Configuración de Nuxt Content
  content: {
    // Configuraciones específicas del módulo content si necesitas
    highlight: {
      // Configuración de resaltado de sintaxis
      theme: "github-light",
    },
  },

  // Variables de runtime (para producción)
  runtimeConfig: {
    // Variables privadas (solo disponibles en el servidor)
    // apiSecret: '123',

    // Variables públicas (expuestas al cliente)
    public: {
      // apiBase: '/api'
    },
  },

  // Fecha de compatibilidad
  compatibilityDate: "2025-09-26",
});
