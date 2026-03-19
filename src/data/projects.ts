// src/data/projects.ts
// Catálogo centralizado de proyectos.
// Importado por ProjectGallery.astro (página principal) y ServiceProjects.astro (páginas de servicio).

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

export const projects: Project[] = [
  {
    category: 'ampliaciones',
    images: [
      {
        src: '/proyectos/ampliaciones/ampliaciones.webp',
        alt: 'Ampliación estructura inicial',
        title: 'Ampliación Dormitorio + Baño',
        description: 'Ampliación de 25m² con estructura metalcom, aislación térmica y terminaciones de alto estándar.',
        location: 'Puente Alto, Santiago',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones2.webp',
        alt: 'Ampliación avance de obra',
        title: 'Avance de Obra — Estructura',
        description: 'Montaje de estructura metalcom con aislación térmica e impermeabilización.',
        location: 'Puente Alto, Santiago',
      },
      {
        src: '/proyectos/ampliaciones/ampliacione3.webp',
        alt: 'Ampliación terminada exterior',
        title: 'Exterior Terminado',
        description: 'Vista exterior con revestimiento de fibrocemento y ventanas de termopanel.',
        location: 'Puente Alto, Santiago',
      },
      {
        src: '/proyectos/ampliaciones/ampliacione4.webp',
        alt: 'Ampliación terminada interior',
        title: 'Interior Terminado',
        description: 'Dormitorio con piso flotante, cielo americano y baño completo.',
        location: 'Puente Alto, Santiago',
      },
    ],
  },
  {
    category: 'ampliaciones',
    images: [
      {
        src: '/proyectos/ampliaciones/ampliaciones3.webp',
        alt: 'Living comedor estructura',
        title: 'Ampliación Living Comedor',
        description: 'Extensión de 30m² con ventanales de termopanel, piso flotante y cielo americano.',
        location: 'La Florida, Santiago',
      },
      {
        src: '/proyectos/ampliaciones/ampliaciones4.webp',
        alt: 'Living comedor avance',
        title: 'Avance — Estructura Metálica',
        description: 'Montaje de estructura y cubierta con aislación térmica.',
        location: 'La Florida, Santiago',
      },
    ],
  },
  {
    category: 'quinchos',
    images: [
      {
        src: '/proyectos/quinchos/quinchos_header.webp',
        alt: 'Quincho estructura madera',
        title: 'Quincho Familiar con Parrilla',
        description: 'Quincho cerrado de 35m² con parrilla de ladrillo refractario, mesón de granito y cielo de madera nativa.',
        location: 'Peñalolén, Santiago',
      },
      {
        src: '/proyectos/quinchos/quinchos.webp',
        alt: 'Quincho interior terminado',
        title: 'Interior — Mesón y Parrilla',
        description: 'Mesón de granito con lavaplatos integrado y campana de acero inoxidable.',
        location: 'Peñalolén, Santiago',
      },
      {
        src: '/proyectos/quinchos/quincho-02c.jpg',
        alt: 'Quincho vista completa',
        title: 'Vista Completa del Quincho',
        description: 'Quincho terminado con iluminación cálida, piso de porcelanato y bar lateral.',
        location: 'Peñalolén, Santiago',
      },
    ],
  },
  {
    category: 'terrazas',
    images: [
      {
        src: '/proyectos/terrazas/terrazas_header.webp',
        alt: 'Terraza estructura metálica',
        title: 'Pérgola Metálica Jardín',
        description: 'Pérgola decorativa con estructura de acero pintado al horno y enredaderas.',
        location: 'Lo Barnechea, Santiago',
      },
      {
        src: '/proyectos/terrazas/terraza1.webp',
        alt: 'Pérgola detalle estructura',
        title: 'Detalle Estructura de Acero',
        description: 'Perfiles de acero soldados y pintados al horno con acabado mate.',
        location: 'Lo Barnechea, Santiago',
      },
      {
        src: '/proyectos/terrazas/terraza-02c.jpg',
        alt: 'Pérgola terminada',
        title: 'Pérgola Terminada',
        description: 'Vista final con enredaderas y mobiliario de exterior integrado.',
        location: 'Lo Barnechea, Santiago',
      },
    ],
  },
  {
    category: 'piscinas',
    images: [
      {
        src: '/proyectos/piscinas/piscinas_header.webp',
        alt: 'Piscina excavación',
        title: 'Piscina Residencial 8x4m',
        description: 'Piscina de hormigón proyectado con revestimiento en palmeta, iluminación subacuática y deck perimetral.',
        location: 'La Reina, Santiago',
      },
      {
        src: '/proyectos/piscinas/piscinas.webp',
        alt: 'Piscina estructura hormigón',
        title: 'Estructura de Hormigón',
        description: 'Hormigón proyectado con malla de acero y sistema de filtración integrado.',
        location: 'La Reina, Santiago',
      },
      {
        src: '/proyectos/piscinas/piscina-01c.jpg',
        alt: 'Piscina revestimiento',
        title: 'Revestimiento en Palmeta',
        description: 'Instalación de palmeta cerámica antideslizante en interior y bordes.',
        location: 'La Reina, Santiago',
      },
      {
        src: '/proyectos/piscinas/piscina-01d.jpg',
        alt: 'Piscina terminada',
        title: 'Piscina Terminada',
        description: 'Vista final con deck de madera, iluminación y paisajismo.',
        location: 'La Reina, Santiago',
      },
    ],
  },
  {
    category: 'piscinas',
    images: [
      {
        src: '/proyectos/piscinas/piscinas1.webp',
        alt: 'Piscina jacuzzi obra gruesa',
        title: 'Piscina con Jacuzzi Integrado',
        description: 'Piscina temperada con zona de jacuzzi, cascada decorativa y cerco de vidrio templado.',
        location: 'Chicureo, Santiago',
      },
      {
        src: '/proyectos/piscinas/piscinas2.webp',
        alt: 'Piscina jacuzzi avance',
        title: 'Avance — Jacuzzi y Cascada',
        description: 'Montaje de sistema de jacuzzi con cascada de agua temperada.',
        location: 'Chicureo, Santiago',
      },
      {
        src: '/proyectos/piscinas/piscina-02c.jpg',
        alt: 'Piscina jacuzzi terminada',
        title: 'Piscina + Jacuzzi Terminada',
        description: 'Vista final con cerco de vidrio templado y paisajismo premium.',
        location: 'Chicureo, Santiago',
      },
    ],
  },
];
