// src/config/site.ts
// ============================================================
// CONFIGURACIÓN CENTRALIZADA — MGI Estructuras Metálicas
// Todos los datos del cliente en un solo lugar.
// Los componentes importan desde aquí en vez de hardcodear strings.
// ============================================================

export const siteConfig = {
  // ── Identidad ──────────────────────────────────────────────
  name: 'MGI Estructuras Metálicas',
  shortName: 'MGI',
  tagline: 'Galpones, Casas, Rejas y Portones en Acero',
  description:
    'Fabricación e instalación de estructuras metálicas: galpones, naves industriales, casas, rejas, portones y más. Calidad, experiencia y cumplimiento garantizado en Santiago y todo Chile.',

  // ── URL ────────────────────────────────────────────────────
  // ← CAMBIAR al dominio real cuando esté configurado en Cloudflare
  siteUrl: 'https://mgi-estructuras.pages.dev',

  // ── Contacto ───────────────────────────────────────────────
  phone: '+56987680364',
  phoneDisplay: '+56 9 8768 0364',
  email: 'metalicomiguel@yahoo.es',
  whatsapp: '56987680364', // sin + ni espacios
  whatsappMessage: 'Hola, me interesa cotizar un proyecto de estructuras metálicas',

  address: {
    street: '',               // ← CAMBIAR si tiene dirección física
    city: 'Santiago',
    region: 'Región Metropolitana',
    country: 'CL',
  },

  // ── Redes sociales ─────────────────────────────────────────
  // ← CAMBIAR cuando se tengan las URLs reales
  social: {
    instagram: 'https://www.instagram.com/mgi_estructuras', // ← CAMBIAR al perfil real
    facebook: 'https://www.facebook.com/mgi.estructuras',  // ← CAMBIAR al perfil real
  },

  // ── Google Tag Manager ─────────────────────────────────────
  // Dejar vacío si aún no tiene. Cuando se configure, poner el ID aquí.
  gtmId: '',

  // ── Servicios ──────────────────────────────────────────────
  // Usado en: Services.astro, Contact.astro (<select>), footer
  services: [
    {
      id: 'galpones',
      title: 'Galpones y Naves',
      description:
        'Diseño y construcción de galpones industriales y naves de almacenamiento con estructura de acero de alta resistencia.',
      // Icono SVG path — galpón/bodega
      icon: 'M3 21h18M4 21V10l8-7 8 7v11M9 21v-6h6v6M2 10h2M20 10h2',
    },
    {
      id: 'casas',
      title: 'Casas Metálicas',
      description:
        'Construcción de viviendas con estructura metálica: livianas, resistentes y con terminaciones de primer nivel.',
      // Icono SVG path — casa
      icon: 'M3 21V10l6-5v16M9 5l6-2v18M15 3l6 2v16M9 12h6M9 16h6M3 14h6M15 14h6',
    },
    {
      id: 'rejas',
      title: 'Rejas y Cierres',
      description:
        'Rejas de seguridad, cierres perimetrales y protecciones metálicas a medida para hogares y empresas.',
      // Icono SVG path — reja/seguridad
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4',
    },
    {
      id: 'portones',
      title: 'Portones',
      description:
        'Portones correderos, batientes y automatizados. Fabricación en acero con acabados a elección del cliente.',
      // Icono SVG path — portón/puerta
      icon: 'M3 21V8l4-4h10l4 4v13M3 8h18M9 8v13M15 8v13M9 12h6M9 16h6',
    },
  ],

  // ── Categorías de galería ──────────────────────────────────
  // Usado en: ProjectGallery.astro (filtro de categorías)
  categories: [
    { id: 'todos', label: 'Todos' },
    { id: 'galpones', label: 'Galpones' },
    { id: 'casas', label: 'Casas' },
    { id: 'rejas', label: 'Rejas y Cierres' },
    { id: 'portones', label: 'Portones' },
  ],

  // ── Stats (sección de números) ─────────────────────────────
  // ← CAMBIAR con datos reales del cliente
  stats: [
    { value: 15, suffix: '+', label: 'Años de Experiencia' },
    { value: 300, suffix: '+', label: 'Proyectos Realizados' },
    { value: 98, suffix: '%', label: 'Clientes Satisfechos' },
    { value: 100, suffix: '%', label: 'Compromiso y Garantía' },
  ],

  // ── Hero slides ────────────────────────────────────────────
  // Las imágenes van en /public/hero/
  // ← CAMBIAR con fotos reales de MGI
  heroSlides: [
    {
      image: '/hero/slide-01.jpg',
      title: 'MGI\nEstructuras Metálicas',
      subtitle: '«Fabricamos tu proyecto con la solidez del acero»',
    },
    {
      image: '/hero/slide-02.jpg',
      title: 'Galpones',
      subtitle: '«Fabricamos tu proyecto con la solidez del acero»',
    },
    {
      image: '/hero/slide-03.jpg',
      title: 'Casas Metálicas',
      subtitle: '«Fabricamos tu proyecto con la solidez del acero»',
    },
    {
      image: '/hero/slide-04.jpg',
      title: 'Rejas y Cierres',
      subtitle: '«Fabricamos tu proyecto con la solidez del acero»',
    },
    {
      image: '/hero/slide-05.jpg',
      title: 'Portones',
      subtitle: '«Fabricamos tu proyecto con la solidez del acero»',
    },
  ],

  // ── About ──────────────────────────────────────────────────
  about: {
    yearsExperience: '15+',
    description:
      'En <strong style="color: var(--text-heading);">MGI Estructuras Metálicas</strong> nos especializamos en la fabricación e instalación de estructuras de acero para proyectos residenciales, comerciales e industriales. Nuestro equipo de profesionales trabaja junto a cada cliente para materializar sus proyectos con la calidad y solidez que solo el acero puede ofrecer.',
    features: [
      {
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        title: 'Calidad Certificada',
        description: 'Materiales de primera calidad con soldaduras certificadas y acabados profesionales.',
      },
      {
        icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
        title: 'Cumplimiento de Plazos',
        description: 'Entregamos en los tiempos acordados. Tu proyecto avanza sin demoras ni sorpresas.',
      },
      {
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
        title: 'Equipo Profesional',
        description: 'Maestros soldadores, proyectistas y supervisores con años de experiencia en terreno.',
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
