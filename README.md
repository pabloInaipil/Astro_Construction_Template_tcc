# TodoCasa Construcciones — Landing Page

Landing page profesional para TodoCasa Construcciones, desarrollada con Astro 5 + Tailwind CSS v4.

## Stack

- **Astro 5** — Static Site Generator
- **Tailwind CSS v4** — Estilos (via `@tailwindcss/vite`)
- **Netlify** — Deploy, formularios y headers
- **TypeScript** — Tipado

## Setup

```bash
npm install
npm run dev        # → http://localhost:4321
npm run build      # Build producción → dist/
npm run preview    # Preview del build
```

## Estructura

```
todocasa/
├── public/
│   ├── proyectos/          ← Fotos de proyectos por categoría
│   │   ├── ampliaciones/
│   │   ├── quinchos/
│   │   ├── terrazas/
│   │   └── piscinas/
│   ├── logo.png            ← Logo (reemplazar con el real)
│   ├── og-image.jpg        ← Imagen para redes sociales (1200x630)
│   ├── favicon.svg
│   ├── favicon-32x32.png
│   └── apple-touch-icon.png
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Stats.astro
│   │   ├── Services.astro        ← 4 servicios
│   │   ├── ProjectGallery.astro  ← Galería con carrusel + filtro
│   │   ├── About.astro
│   │   ├── CtaBanner.astro
│   │   └── Contact.astro         ← Formulario Netlify
│   ├── layouts/
│   │   └── Layout.astro          ← SEO, nav, footer, theme toggle
│   ├── pages/
│   │   ├── index.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css            ← Tailwind v4 + paleta + dark mode
├── astro.config.mjs
├── netlify.toml
├── package.json
└── tsconfig.json
```

## Personalización rápida

### 1. Logo e imágenes
- Reemplazar `public/logo.png` con el logo real del cliente
- Reemplazar `public/og-image.jpg` con imagen branded (1200x630)
- Agregar fotos en `public/proyectos/{categoria}/`

### 2. Datos de contacto (buscar y reemplazar)
- `+56912345678` → Número real
- `contacto@todocasa.cl` → Email real
- `https://todocasa.cl` → Dominio real
- URLs de Instagram, Facebook, WhatsApp

### 3. Proyectos
Editar el array `projects` en `src/components/ProjectGallery.astro`

### 4. Paleta de colores
Editar `src/styles/global.css` → bloque `@theme { ... }`

## Deploy en Netlify

1. Push a GitHub
2. Conectar repositorio en Netlify
3. Config automática desde `netlify.toml`
4. Formulario se detecta con `data-netlify="true"`

## Características

- ✅ Tema claro/oscuro con persistencia
- ✅ SEO completo (meta, Open Graph, JSON-LD LocalBusiness)
- ✅ Galería con carrusel por proyecto (swipe, flechas, dots)
- ✅ Filtro por categoría (Ampliaciones, Quinchos, Terrazas, Piscinas)
- ✅ Formulario Netlify con honeypot anti-spam
- ✅ Botón WhatsApp flotante
- ✅ Scroll reveal animations (IntersectionObserver)
- ✅ Responsive mobile-first
- ✅ Página 404 personalizada
- ✅ Headers de seguridad (CSP, X-Frame, etc.)
- ✅ Cache inmutable para assets estáticos

---

Desarrollado por [DatAImpulsa](https://dataimpulsa.cl)
