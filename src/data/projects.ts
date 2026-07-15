// src/data/projects.ts
// ============================================================
// FUENTE ÚNICA DE DATOS — Catálogo de proyectos.
// Importado por:
//   - ProjectGallery.astro (página principal)
//   - ServiceProjects.astro (páginas de servicio)
//
// Para agregar un proyecto: copia un bloque y edita los campos.
// Las rutas de src deben coincidir con archivos en /public/proyectos/
// ============================================================

export interface ProjectImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  location?: string;
  /** Dimensiones intrínsecas del archivo (evita CLS y el warning de PageSpeed) */
  width?: number;
  height?: number;
}

export interface Project {
  category: string;
  images: ProjectImage[];
}

export const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'ampliaciones', label: 'Ampliaciones' },
  { id: 'quinchos', label: 'Quinchos' },
  { id: 'terrazas', label: 'Terrazas' },
  { id: 'piscinas', label: 'Piscinas' },
];

export const projects: Project[] = [
  // ========================
  // AMPLIACIONES
  // ========================
  {
    category: 'ampliaciones',
    images: [
      {
        src: '/proyectos/ampliaciones/ampliaciones.webp',
        width: 720,
        height: 960,
        alt: 'Ampliación terraza techada',
        title: 'Construcción de Terraza Techada',
        description: 'Estructura metálica negra con cubierta de policarbonato translúcido, revestimiento de muro en piedra, piso cerámico tipo madera e iluminación colgante.',
        location: 'Puente Alto, Santiago',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones2.webp',
        width: 900,
        height: 506,
        alt: 'Ampliación avance de obra',
        title: 'Avance de Obra — Terminaciones de Terraza',
        description: 'Etapa final de ampliación exterior. Contempla instalación de piso cerámico, revestimiento texturizado en pilares y cielo falso con iluminación LED empotrada.',
        location: 'Puente Alto, Santiago',
      },
      {
        src: '/proyectos/ampliaciones/ampliacione3.webp',
        width: 510,
        height: 382,
        alt: 'Ampliación terminada exterior',
        title: 'Exterior Terminado',
        description: 'Vista exterior con revestimiento de fibrocemento y ventanas de termopanel.',
        location: 'Puente Alto, Santiago',
      },
      {
        src: '/proyectos/ampliaciones/ampliacione4.webp',
        width: 400,
        height: 250,
        alt: 'Ampliación terminada exterior',
        title: 'Terraza con Pérgola de Madera Tradicional',
        description: 'Construcción de sólido cobertizo de madera adosado a la vivienda. Cuenta con un diseño de vigas y entramado superior para generar sombra parcial, además de piso cerámico de exterior, ideal para ampliar las áreas de descanso hacia el jardín.',
        location: 'Puente Alto, Santiago',
      },
    ],
  },
  {
    category: 'ampliaciones',
    images: [
      {
        src: '/proyectos/ampliaciones/ampliaciones3.webp',
        width: 745,
        height: 720,
        alt: 'Estructura metálica ampliación',
        title: 'Sistema Constructivo Metalcom',
        description: 'Visualización arquitectónica que demuestra nuestro sistema de construcción. A la izquierda, la sólida estructura de perfiles de acero galvanizado; a la derecha, el proyecto terminado con aislación y revestimientos exteriores de alto estándar (imagen referencial).',
        location: 'La Florida, Santiago',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones4.webp',
        width: 675,
        height: 900,
        alt: 'Ampliación avance estructura metálica',
        title: 'Avance — Estructura Metálica',
        description: 'Primera etapa de montaje para cobertizo exterior. Armado, escuadra y fijación de perfilería de acero galvanizado (tipo Metalcon) previo a la instalación de la techumbre.',
        location: 'La Florida, Santiago',
      },
    ],
  },

  // ========================
  // QUINCHOS
  // Archivos: quichos1.webp, quinchos2.jpg, quinchos3.webp, quinchos4.webp
  // ========================
  {
    category: 'quinchos',
    images: [
      {
        src: '/proyectos/quinchos/quinchos4.webp',
        width: 563,
        height: 751,
        alt: 'Quincho vista general',
        title: 'Quincho Familiar con Parrilla',
        description: 'Transformación de patio en una moderna zona de estar y relajación. Cuenta con un cobertizo metálico con techo translúcido para aprovechar la luz natural, terminaciones de piso elegantes y mobiliario de exterior cómodo.',
        location: 'Las Condes, Santiago',
      },
      {
        src: '/proyectos/quinchos/quinchos2.jpg',
        width: 1260,
        height: 692,
        alt: 'Quincho detalle parrilla',
        title: 'Detalle Parrilla y Mesón',
        description: 'Parrilla de ladrillo refractario con mesón de granito integrado.',
        location: 'Las Condes, Santiago',
      },
      {
        src: '/proyectos/quinchos/quichos1.webp',
        width: 960,
        height: 960,
        alt: 'Quincho mesón y bar',
        title: 'Bar Integrado',
        description: 'Mesón de granito con lavaplatos y estantería de madera nativa.',
        location: 'Las Condes, Santiago',
      },
      {
        src: '/proyectos/quinchos/quinchos3.webp',
        width: 736,
        height: 911,
        alt: 'Quincho terminado nocturno',
        title: 'Vista Nocturna',
        description: 'Iluminación LED cálida integrada en cielo de madera.',
        location: 'Las Condes, Santiago',
      },
    ],
  },

  // ========================
  // TERRAZAS
  // Archivos: terraza1.webp, terraza3.webp, terraza-edi-1.webp, terrazas-header.webp
  // ========================
  {
    category: 'terrazas',
    images: [
      {
        src: '/proyectos/terrazas/terraza-edi-1.webp',
        width: 736,
        height: 977,
        alt: 'Terraza techada vista general',
        title: 'Proyecto de Quincho y Terraza Integral Moderna',
        description: 'Espacio multifuncional de alto nivel. Cuenta con un moderno cobertizo metálico con iluminación LED empotrada, zona de quincho totalmente equipada con isla de bar, parrilla incorporada y horno de pizza. Muro decorativo de piedra laja y piso de concreto pulido de alto tránsito.',
        location: 'Vitacura, Santiago',
      },
      {
        src: '/proyectos/terrazas/terrazas-header.webp',
        width: 1280,
        height: 853,
        alt: 'Terraza techada zona descanso',
        title: 'Terraza Mirador y Zona de Descanso',
        description: 'Un espacio diseñado para disfrutar del entorno. Combina la calidez de una pérgola de madera con entramado textil, mobiliario de exterior en ratán sintético y elegantes terminaciones en piedra y acero, logrando un ambiente que es rústico y moderno a la vez.',
        location: 'Vitacura, Santiago',
      },
    ],
  },
  {
    category: 'terrazas',
    images: [
      {
        src: '/proyectos/terrazas/terraza3.webp',
        width: 201,
        height: 251,
        alt: 'Pérgola vista general',
        title: 'Cobertizo Metálico Jardín',
        description: 'Moderno cobertizo de diseño ejecutado con estructura metálica negra mate y vigas de madera noble en tono cálido. Incluye sistema de iluminación LED de color cálido integrado para uso nocturno y pavimento de concreto pulido, ideal para terrazas.',
        location: 'Lo Barnechea, Santiago',
      },
      {
        src: '/proyectos/terrazas/terraza1.webp',
        width: 400,
        height: 361,
        alt: 'Pérgola detalle estructura',
        title: 'Terraza Exterior con Pérgola de Madera',
        description: 'Construcción de cobertizo tipo pérgola con sólidas vigas de madera tratada y entramado superior para un eficiente control de sombra. El proyecto incluye pilares con bases protectoras, instalación de ventilador de techo y piso cerámico de exterior, creando un ambiente fresco y acogedor.',
        location: 'Lo Barnechea, Santiago',
      },
    ],
  },

  // ========================
  // PISCINAS
  // ========================
  {
    category: 'piscinas',
    images: [
      {
        src: '/proyectos/piscinas/piscinas_header.webp',
        width: 1280,
        height: 719,
        alt: 'Piscina excavación',
        title: 'Piscina Residencial 8x4m',
        description: 'Piscina de hormigón proyectado con revestimiento en palmeta, iluminación subacuática y deck perimetral.',
        location: 'La Reina, Santiago',
      },
      {
        src: '/proyectos/piscinas/piscinas.webp',
        width: 736,
        height: 535,
        alt: 'Piscina Deck de madera',
        title: 'Proyecto de Piscina Moderna con Deck de Madera',
        description: 'Construcción integral de área de piscina. Destaca el pavimento de deck de madera, cierre perimetral de seguridad en cristal templado sin perfiles a la vista, y muros decorativos que combinan acabados lisos con listones de madera e iluminación cálida.',
        location: 'La Reina, Santiago',
      },
    ],
  },
  {
    category: 'piscinas',
    images: [
      {
        src: '/proyectos/piscinas/piscinas1.webp',
        width: 1530,
        height: 1530,
        alt: 'Piscina jacuzzi obra gruesa',
        title: 'Piscina con Jacuzzi Integrado',
        description: 'Piscina temperada con zona de jacuzzi, cascada decorativa y cerco de vidrio templado.',
        location: 'Chicureo, Santiago',
      },
      {
        src: '/proyectos/piscinas/piscinas2.webp',
        width: 736,
        height: 414,
        alt: 'Piscina jacuzzi avance',
        title: 'Avance — Jacuzzi y Cascada',
        description: 'Montaje de sistema de jacuzzi con cascada de agua temperada.',
        location: 'Chicureo, Santiago',
      },
    ],
  },
];