// src/config/site.ts
// ============================================================
// CONFIGURACIÓN CENTRALIZADA — RAVACOR Constructora Ltda.
// Todos los datos del cliente en un solo lugar.
// Los componentes importan desde aquí en vez de hardcodear strings.
// ============================================================

export const siteConfig = {
  // ── Identidad ──────────────────────────────────────────────
  name: 'RAVACOR Servicios Ltda.',
  shortName: 'RAVACOR',
  tagline: 'Construcción, Electricidad, Gasfitería e Interiores',
  description:
    'Construcción, ampliaciones, electricidad, gasfitería, estructuras metálicas e interiores. Mano de obra calificada en Temuco y Región de La Araucanía.',

  // ── URL ────────────────────────────────────────────────────
  siteUrl: 'https://ravacorservicios.cl',

  // ── Contacto ───────────────────────────────────────────────
  phone: '+56985153733',
  phoneDisplay: '+56 9 8515 3733',
  email: 'ravacor@gmail.com',
  whatsapp: '56985153733',
  whatsappMessage: 'Hola, me interesa cotizar un proyecto con RAVACOR',

  address: {
    street: '',
    city: 'Temuco',
    region: 'Región de La Araucanía',
    country: 'CL',
  },

  // ── Redes sociales ─────────────────────────────────────────
  social: {
    instagram: 'https://www.instagram.com/ravacor_temuco',
    facebook: '',  // ← AGREGAR cuando se tenga
  },

  // ── Google Tag Manager ─────────────────────────────────────
  gtmId: '',  // ← AGREGAR cuando se configure

  // ── Servicios ──────────────────────────────────────────────
  services: [
    {
      id: 'ampliaciones',
      title: 'Ampliaciones',
      description:
        'Ampliamos tu hogar con soluciones estructurales sólidas, terminaciones de primer nivel y cumplimiento normativo. Dormitorios, baños, living y más.',
      icon: 'M3 21V10l6-5v16M9 5l6-2v18M15 3l6 2v16M9 12h6M9 16h6M3 14h6M15 14h6',
    },
    {
      id: 'electricidad',
      title: 'Electricidad',
      description:
        'Instalaciones eléctricas domiciliarias e industriales. Tableros, canalizaciones, iluminación y reparaciones con certificación SEC.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      id: 'gasfiteria',
      title: 'Gasfitería',
      description:
        'Instalación y reparación de redes de agua potable, alcantarillado, calefacción y artefactos sanitarios con materiales certificados.',
      icon: 'M5.636 5.636a9 9 0 1012.728 0M12 3v9',
    },
    {
      id: 'estructuras',
      title: 'Estructuras Metálicas',
      description:
        'Diseño y fabricación de galpones, cobertizos, escaleras, portones y estructuras a medida con acero de calidad.',
      icon: 'M4 21V10l8-7 8 7v11M4 10h16M8 21v-7h8v7M2 21h20M7 10v-1M12 10V6M17 10v-1',
    },
    {
      id: 'interiores',
      title: 'Interiores',
      description:
        'Remodelación integral de interiores: cielos, tabiques, pisos, pintura y terminaciones para renovar tus espacios.',
      icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M9 22V12h6v10',
    },
  ],

  // ── Categorías de galería ──────────────────────────────────
  categories: [
    { id: 'todos', label: 'Todos' },
    { id: 'ampliaciones', label: 'Ampliaciones' },
    { id: 'electricidad', label: 'Electricidad' },
    { id: 'gasfiteria', label: 'Gasfitería' },
    { id: 'estructuras', label: 'Estructuras Metálicas' },
    { id: 'interiores', label: 'Interiores' },
  ],

  // ── Stats (sección de números) ─────────────────────────────
  // ← CAMBIAR con datos reales del cliente
  stats: [
    { value: 10, suffix: '+', label: 'Años de Experiencia' },
    { value: 200, suffix: '+', label: 'Proyectos Realizados' },
    { value: 98, suffix: '%', label: 'Clientes Satisfechos' },
    { value: 100, suffix: '%', label: 'Compromiso y Garantía' },
  ],

  // ── Hero slides ────────────────────────────────────────────
  // Las imágenes van en /public/hero/
  // ← CAMBIAR con fotos reales de RAVACOR
  heroSlides: [
    {
      image: '/hero/slide-01.webp',
      title: 'RAVACOR\nConstructora',
      subtitle: '«Construcción y servicios integrales para tu hogar»',
    },
    {
      image: '/hero/slide-02.webp',
      title: 'Ampliaciones',
      subtitle: '«Más espacio para tu familia, con la calidad de siempre»',
    },
    {
      image: '/hero/slide-03.webp',
      title: 'Electricidad',
      subtitle: '«Instalaciones seguras y certificadas»',
    },
    {
      image: '/hero/slide-04.webp',
      title: 'Gasfitería',
      subtitle: '«Soluciones profesionales en agua y gas»',
    },
    {
      image: '/hero/slide-05.webp',
      title: 'Interiores',
      subtitle: '«Renueva tus espacios con terminaciones de primer nivel»',
    },
  ],

  // ── About ──────────────────────────────────────────────────
  about: {
    yearsExperience: '10+',
    description:
      'En <strong style="color: var(--text-heading);">RAVACOR Servicios Ltda.</strong> nos dedicamos a la construcción, reparación y remodelación de viviendas e inmuebles en Temuco y la Región de La Araucanía. Nuestro equipo de profesionales entrega soluciones integrales en ampliaciones, electricidad, gasfitería, estructuras metálicas e interiores con la calidad y compromiso que tu proyecto necesita.',
    features: [
      {
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        title: 'Calidad Garantizada',
        description: 'Trabajamos con materiales certificados y mano de obra calificada para asegurar la durabilidad de cada proyecto.',
      },
      {
        icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
        title: 'Cumplimiento de Plazos',
        description: 'Entregamos en los tiempos acordados. Tu proyecto avanza sin demoras ni sorpresas.',
      },
      {
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
        title: 'Equipo Profesional',
        description: 'Maestros especializados en construcción, electricidad y gasfitería con años de experiencia en terreno.',
      },
      {
        icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
        title: 'Presupuesto Transparente',
        description: 'Cotizaciones detalladas sin costos ocultos. Sabes exactamente qué estás pagando desde el primer día.',
      },
    ],
  },
} as const;

// ── Tipos exportados ─────────────────────────────────────────
export type SiteConfig = typeof siteConfig;
export type Service = (typeof siteConfig.services)[number];
export type Category = (typeof siteConfig.categories)[number];
export type HeroSlide = (typeof siteConfig.heroSlides)[number];
export type Stat = (typeof siteConfig.stats)[number];