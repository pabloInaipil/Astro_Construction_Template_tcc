// src/data/projects.ts
// ============================================================
// FUENTE ÚNICA DE DATOS — Catálogo de proyectos RAVACOR.
// Importado por:
//   - ProjectGallery.astro (página principal)
//   - ServiceProjects.astro (páginas de servicio)
//
// Las rutas de src deben coincidir con archivos en /public/proyectos/
// ============================================================

export interface ProjectImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  location?: string;
}

export interface Project {
  category: string;
  images: ProjectImage[];
}

export const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'ampliaciones', label: 'Ampliaciones' },
  { id: 'electricidad', label: 'Electricidad' },
  { id: 'estructuras', label: 'Estructuras Metálicas' },
  { id: 'interiores', label: 'Interiores' },
];

export const projects: Project[] = [

  // ========================
  // AMPLIACIONES — Proyecto 1
  // ========================
  {
    category: 'ampliaciones',
    images: [
      {
        src: '/proyectos/ampliaciones/ampliaciones-01.webp',
        alt: 'Ampliación vivienda fachada',
        title: 'Ampliación de Vivienda',
        description: 'Ampliación exterior con revestimiento de madera y terminaciones de alto estándar.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones-02.webp',
        alt: 'Ampliación avance de obra',
        title: 'Avance de Obra',
        description: 'Etapa de montaje de estructura y revestimiento exterior.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones-03.webp',
        alt: 'Ampliación terminaciones',
        title: 'Terminaciones Exteriores',
        description: 'Revestimiento de fachada con acabado en madera y pintura.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // AMPLIACIONES — Proyecto 2
  // ========================
  {
    category: 'ampliaciones',
    images: [
      {
        src: '/proyectos/ampliaciones/ampliaciones-04.webp',
        alt: 'Segundo piso ampliación',
        title: 'Ampliación Segundo Piso',
        description: 'Construcción de segundo piso con estructura resistente y terminaciones exteriores.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones-05.webp',
        alt: 'Ampliación fachada lateral',
        title: 'Fachada Lateral',
        description: 'Vista lateral de ampliación con revestimiento y ventanas.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones-06.webp',
        alt: 'Ampliación fachada frontal',
        title: 'Fachada Frontal Terminada',
        description: 'Ampliación finalizada con acabado exterior completo.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // AMPLIACIONES — Proyecto 3
  // ========================
  {
    category: 'ampliaciones',
    images: [
      {
        src: '/proyectos/ampliaciones/ampliaciones-07.webp',
        alt: 'Ampliación techumbre',
        title: 'Ampliación con Techumbre',
        description: 'Estructura de techumbre para ampliación de vivienda con cubierta resistente.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones-08.webp',
        alt: 'Ampliación estructura',
        title: 'Estructura en Progreso',
        description: 'Avance de obra con estructura de madera y metalcom.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones-09.webp',
        alt: 'Ampliación detalle',
        title: 'Detalle Constructivo',
        description: 'Detalle de uniones y encuentros estructurales.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // AMPLIACIONES — Proyecto 4
  // ========================
  {
    category: 'ampliaciones',
    images: [
      {
        src: '/proyectos/ampliaciones/ampliaciones-10.webp',
        alt: 'Ampliación exterior terminada',
        title: 'Ampliación Exterior Terminada',
        description: 'Proyecto de ampliación completado con todas las terminaciones.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones-11.webp',
        alt: 'Ampliación vista general',
        title: 'Vista General',
        description: 'Vista panorámica de la ampliación integrada a la vivienda existente.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones-12.webp',
        alt: 'Ampliación detalle fachada',
        title: 'Detalle de Fachada',
        description: 'Terminación de fachada con revestimiento y pintura.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // AMPLIACIONES — Proyecto 5 (solo webp)
  // ========================
  {
    category: 'ampliaciones',
    images: [
      {
        src: '/proyectos/ampliaciones/ampliaciones-13.webp',
        alt: 'Ampliación proyecto adicional',
        title: 'Proyecto Ampliación Residencial',
        description: 'Ampliación residencial con materiales de primera calidad.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones-14.webp',
        alt: 'Ampliación avance',
        title: 'Avance de Proyecto',
        description: 'Etapa intermedia de construcción con avance de terminaciones.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones-15.webp',
        alt: 'Ampliación acabados',
        title: 'Acabados Finales',
        description: 'Terminaciones finales de ampliación con acabado profesional.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones-16.webp',
        alt: 'Ampliación entregada',
        title: 'Proyecto Entregado',
        description: 'Ampliación completamente terminada y entregada al cliente.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // ELECTRICIDAD — Proyecto 1
  // ========================
  {
    category: 'electricidad',
    images: [
      {
        src: '/proyectos/electricidad/electricidad-01.webp',
        alt: 'Tablero eléctrico',
        title: 'Instalación de Tablero Eléctrico',
        description: 'Montaje y conexión de tablero eléctrico domiciliario con protecciones certificadas.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/electricidad/electricidad-02.webp',
        alt: 'Canalización eléctrica',
        title: 'Canalización Eléctrica',
        description: 'Instalación de canalizaciones y ductos para cableado eléctrico.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/electricidad/electricidad-03.webp',
        alt: 'Conexiones eléctricas',
        title: 'Conexiones y Empalmes',
        description: 'Trabajo de conexiones eléctricas con materiales certificados SEC.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // ELECTRICIDAD — Proyecto 2
  // ========================
  {
    category: 'electricidad',
    images: [
      {
        src: '/proyectos/electricidad/electricidad-04.webp',
        alt: 'Instalación eléctrica interior',
        title: 'Instalación Interior',
        description: 'Cableado y canalización eléctrica en interior de vivienda.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/electricidad/electricidad-05.webp',
        alt: 'Trabajo eléctrico exterior',
        title: 'Instalación Exterior',
        description: 'Trabajos eléctricos en exteriores con protección adecuada.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/electricidad/electricidad-06.webp',
        alt: 'Reparación eléctrica',
        title: 'Reparación Eléctrica',
        description: 'Diagnóstico y reparación de fallas eléctricas domiciliarias.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // ELECTRICIDAD — Proyecto 3
  // ========================
  {
    category: 'electricidad',
    images: [
      {
        src: '/proyectos/electricidad/electricidad-07.webp',
        alt: 'Poste eléctrico',
        title: 'Instalación de Poste',
        description: 'Montaje de poste y conexión eléctrica exterior.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/electricidad/electricidad-08.webp',
        alt: 'Tendido eléctrico',
        title: 'Tendido Eléctrico',
        description: 'Instalación de tendido y conexión a red eléctrica.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/electricidad/electricidad-09.webp',
        alt: 'Medidor eléctrico',
        title: 'Instalación de Medidor',
        description: 'Montaje y conexión de medidor eléctrico certificado.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/electricidad/electricidad-10.webp',
        alt: 'Empalme eléctrico',
        title: 'Empalme Eléctrico',
        description: 'Conexión de empalme eléctrico domiciliario.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // ESTRUCTURAS METÁLICAS — Proyecto 1
  // ========================
  {
    category: 'estructuras',
    images: [
      {
        src: '/proyectos/estructurasmetalicas/estructurasmetalicas-01.webp',
        alt: 'Estructura metálica galpón',
        title: 'Estructura de Galpón',
        description: 'Fabricación y montaje de estructura metálica para galpón con perfiles de acero.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/estructurasmetalicas/estructurasmetalicas-02.webp',
        alt: 'Estructura metálica avance',
        title: 'Avance de Montaje',
        description: 'Etapa de montaje de estructura metálica con soldaduras certificadas.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/estructurasmetalicas/estructurasmetalicas-03.webp',
        alt: 'Estructura metálica techumbre',
        title: 'Techumbre Metálica',
        description: 'Instalación de cerchas y correas metálicas para techumbre.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/estructurasmetalicas/estructurasmetalicas-04.webp',
        alt: 'Estructura metálica detalle',
        title: 'Detalle de Uniones',
        description: 'Detalle de uniones soldadas y apernadas en estructura de acero.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // ESTRUCTURAS METÁLICAS — Proyecto 2
  // ========================
  {
    category: 'estructuras',
    images: [
      {
        src: '/proyectos/estructurasmetalicas/estructurasmetalicas-05.webp',
        alt: 'Cobertizo metálico',
        title: 'Cobertizo Metálico',
        description: 'Fabricación e instalación de cobertizo con estructura de acero y cubierta.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/estructurasmetalicas/estructurasmetalicas-06.webp',
        alt: 'Estructura metálica interior',
        title: 'Estructura Interior',
        description: 'Vista interior de estructura metálica con vigas y pilares de acero.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/estructurasmetalicas/estructurasmetalicas-07.webp',
        alt: 'Estructura metálica terminada',
        title: 'Estructura Terminada',
        description: 'Proyecto de estructura metálica completado y listo para uso.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/estructurasmetalicas/estructurasmetalicas-08.webp',
        alt: 'Estructura metálica vista general',
        title: 'Vista General',
        description: 'Panorámica de estructura metálica terminada con cubierta instalada.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // INTERIORES — Proyecto 1 (Pisos)
  // ========================
  {
    category: 'interiores',
    images: [
      {
        src: '/proyectos/interiores/interiores-01.webp',
        alt: 'Instalación piso flotante',
        title: 'Instalación de Piso Flotante',
        description: 'Instalación profesional de piso flotante con terminaciones impecables.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-02.webp',
        alt: 'Piso flotante terminado',
        title: 'Piso Flotante Terminado',
        description: 'Piso flotante instalado con rodapié y juntas de dilatación.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-03.webp',
        alt: 'Detalle piso madera',
        title: 'Detalle de Acabado',
        description: 'Acabado de piso con textura madera natural de alta resistencia.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // INTERIORES — Proyecto 2 (Remodelación)
  // ========================
  {
    category: 'interiores',
    images: [
      {
        src: '/proyectos/interiores/interiores-04.webp',
        alt: 'Remodelación baño',
        title: 'Remodelación de Baño',
        description: 'Remodelación integral de baño con cerámicas y grifería nueva.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-05.webp',
        alt: 'Remodelación interior',
        title: 'Remodelación Interior',
        description: 'Trabajos de remodelación con pintura, cielo y terminaciones.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-06.webp',
        alt: 'Acabado interior',
        title: 'Acabados Interiores',
        description: 'Terminaciones de calidad en muros, cielos y molduras.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // INTERIORES — Proyecto 3 (Pisos y escaleras)
  // ========================
  {
    category: 'interiores',
    images: [
      {
        src: '/proyectos/interiores/interiores-07.webp',
        alt: 'Piso de madera',
        title: 'Piso de Madera Natural',
        description: 'Instalación de piso de madera natural con pulido y vitrificado.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-08.webp',
        alt: 'Escalera interior',
        title: 'Escalera de Madera',
        description: 'Construcción de escalera con peldaños de madera y barandas.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-09.webp',
        alt: 'Detalle escalera',
        title: 'Detalle de Escalera',
        description: 'Terminación de peldaños con madera barnizada.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // INTERIORES — Proyecto 4 (Pintura y muros)
  // ========================
  {
    category: 'interiores',
    images: [
      {
        src: '/proyectos/interiores/interiores-10.webp',
        alt: 'Pintura interior',
        title: 'Pintura Interior',
        description: 'Preparación y pintura de muros interiores con acabado profesional.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-11.jpg',
        alt: 'Cielo interior',
        title: 'Cielo Americano',
        description: 'Instalación de cielo americano con terminaciones prolijas.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-12.jpg',
        alt: 'Tabiquería',
        title: 'Tabiquería Interior',
        description: 'Construcción de tabiques divisorios con estructura y revestimiento.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // INTERIORES — Proyecto 5
  // ========================
  {
    category: 'interiores',
    images: [
      {
        src: '/proyectos/interiores/interiores-13.jpg',
        alt: 'Remodelación cocina',
        title: 'Remodelación de Cocina',
        description: 'Remodelación integral con cerámicas, muebles y grifería.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-14.jpg',
        alt: 'Piso cerámico',
        title: 'Piso Cerámico',
        description: 'Instalación de cerámicas de piso con diseño moderno.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-15.jpg',
        alt: 'Terminaciones interiores',
        title: 'Terminaciones',
        description: 'Detalles finales de remodelación interior.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // INTERIORES — Proyecto 6
  // ========================
  {
    category: 'interiores',
    images: [
      {
        src: '/proyectos/interiores/interiores-16.jpg',
        alt: 'Trabajo interior',
        title: 'Remodelación Habitación',
        description: 'Remodelación de habitación con piso, pintura y cielo nuevo.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-17.jpg',
        alt: 'Muro interior',
        title: 'Revestimiento de Muros',
        description: 'Aplicación de revestimientos y terminaciones en muros.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-18.jpg',
        alt: 'Acabado interior',
        title: 'Acabado Final',
        description: 'Terminaciones finales con molduras y pintura.',
        location: 'Temuco',
      },
    ],
  },

  // ========================
  // INTERIORES — Proyecto 7
  // ========================
  {
    category: 'interiores',
    images: [
      {
        src: '/proyectos/interiores/interiores-19.jpg',
        alt: 'Proyecto interior',
        title: 'Proyecto Remodelación Completa',
        description: 'Remodelación completa de espacio interior residencial.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-20.jpg',
        alt: 'Interior remodelado',
        title: 'Espacio Remodelado',
        description: 'Vista del espacio interior completamente remodelado.',
        location: 'Temuco',
      },
      {
        src: '/proyectos/interiores/interiores-21.jpg',
        alt: 'Interior entregado',
        title: 'Proyecto Entregado',
        description: 'Interior terminado y entregado al cliente.',
        location: 'Temuco',
      },
    ],
  },
];