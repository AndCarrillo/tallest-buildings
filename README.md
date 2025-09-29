# 🏗️ Tallest Buildings Catalog

Una aplicación web moderna construida con **Nuxt.js 3** que presenta los 12 rascacielos más altos del mundo, sus ciudades y las firmas de arquitectura que los crearon.

![Nuxt.js](https://img.shields.io/badge/Nuxt.js-3.12.4-00C58E.svg?style=flat&logo=nuxtdotjs)
![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D.svg?style=flat&logo=vuedotjs)
![License](https://img.shields.io/badge/License-Academic-blue.svg)

## 🌆 Características

- **📱 Diseño Responsivo:** Optimizado para escritorio y móviles
- **🎨 Tema Ecológico:** Paleta de colores armoniosa con verdes y tonos naturales
- **🏢 Catálogo Completo:** 12 rascacielos, 11 ciudades, 6 firmas de arquitectura
- **🔍 Navegación Intuitiva:** Enlaces cruzados entre edificios, ciudades y arquitectos
- **📊 Datos Estructurados:** Información detallada en formato JSON
- **⚡ Renderizado Híbrido:** SSG/SSR con Nuxt.js 3

## 🏗️ Arquitectura del Proyecto

```
proyecto-edificios/
├── components/global/       # Componentes globales
│   ├── HeaderView.vue      # Navegación principal
│   └── FooterView.vue      # Pie de página
├── content/                # Contenido en Markdown y JSON
│   ├── architects-md/      # Perfiles de arquitectos (6 firmas)
│   ├── cities-md/          # Información de ciudades (11 ciudades)
│   ├── buildings-md/       # Detalles de edificios (12 rascacielos)
│   └── buildings_json.json # Datos estructurados
├── pages/                  # Rutas de la aplicación
│   ├── index.vue          # Página principal minimalista
│   ├── architects-md/     # Páginas dinámicas de arquitectos
│   ├── cities-md/         # Páginas dinámicas de ciudades
│   ├── buildings-md/      # Páginas dinámicas de edificios
│   └── buildings_json/    # Listado y detalles JSON
├── public/                # Recursos estáticos
│   ├── images/           # Imágenes de edificios, ciudades y arquitectos
│   └── css/             # Estilos CSS personalizados
└── nuxt.config.ts        # Configuración de Nuxt.js
```

## 🏢 Datos Incluidos

### Rascacielos (Top 12 Mundial)

1. **Burj Khalifa** (828m) - Dubái, EAU
2. **Merdeka 118** (679m) - Kuala Lumpur, Malasia
3. **Shanghai Tower** (632m) - Shanghái, China
4. **Makkah Royal Clock Tower** (601m) - La Meca, Arabia Saudí
5. **Ping An Finance Center** (599m) - Shenzhen, China
6. **Lotte World Tower** (555m) - Seúl, Corea del Sur
7. **One World Trade Center** (541m) - Nueva York, EE.UU.
8. **Guangzhou CTF Finance Centre** (530m) - Cantón, China
9. **Tianjin CTF Finance Centre** (530m) - Tianjin, China
10. **CITIC Tower** (528m) - Pekín, China
11. **TAIPEI 101** (508m) - Taipéi, Taiwán
12. **Shanghai World Financial Center** (492m) - Shanghái, China

### Firmas de Arquitectura

- **Skidmore, Owings & Merrill** - Chicago, EE.UU.
- **Kohn Pedersen Fox** - Nueva York, EE.UU.
- **Fender Katsalidis Architects** - Melbourne, Australia
- **Dar al-Handasah + SL Rasch** - Beirut, Líbano / Stuttgart, Alemania
- **Gensler** - San Francisco, EE.UU.
- **C.Y. Lee & Partners** - Taipéi, Taiwán

## 🎨 Diseño y UX

- **Paleta Ecológica:** Forest Green, Sage Green, Stone Gray
- **Tipografía:** Raleway para legibilidad óptima
- **Layout:** Grid responsivo con Skeleton CSS
- **Navegación:** Enlaces cruzados inteligentes
- **Hero Section:** Imagen principal con overlay de gradiente
- **Estadísticas:** Resumen visual en la página principal

## 🚀 Instalación y Uso

```bash
# Clonar repositorio
git clone https://github.com/AndCarrillo/tallest-buildings.git
cd tallest-buildings

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview
```

## 📱 Rutas Principales

- `/` - Página principal con hero y estadísticas
- `/buildings_json` - Listado completo de edificios (JSON)
- `/buildings_json/[num]` - Detalles de edificio específico
- `/cities_index` - Listado de ciudades
- `/cities-md/[slug]` - Detalles de ciudad con edificios y arquitectos
- `/architects_index` - Listado de firmas de arquitectura
- `/architects-md/[slug]` - Perfil de firma arquitectónica

## 🛠️ Tecnologías Utilizadas

- **Frontend:** Nuxt.js 3.12.4, Vue.js 3
- **Contenido:** Nuxt Content (Markdown + JSON)
- **Estilos:** CSS Variables, Skeleton Framework
- **Optimización:** SSG, Tree Shaking, Code Splitting
- **Control de Versiones:** Git, GitHub

## 📈 Optimizaciones Implementadas

- ✅ **Diseño minimalista** en página principal sin scroll
- ✅ **Navegación cruzada** entre edificios ↔ ciudades ↔ arquitectos
- ✅ **Mapeo corregido** de arquitectos en páginas de ciudades
- ✅ **Paleta de colores armonizada** en toda la aplicación
- ✅ **Componentes responsive** para todos los dispositivos
- ✅ **Footer armonizado** con el header y tema general

## 🤝 Contribuciones

Este es un proyecto académico desarrollado por **Andrea Carrillo** como parte de estudios de desarrollo web con Nuxt.js.

## 📄 Licencia

Proyecto académico - © 2025 Andrea Carrillo

---

⭐ **¡Dale una estrella si te gusta el proyecto!** ⭐
