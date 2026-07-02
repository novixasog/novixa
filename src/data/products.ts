import type { Product, Category } from '@/lib/types';

// Catálogo de prueba tomado del Documento Maestro de NOVIXA.
// Reemplaza / amplía este arreglo cuando conectes un CMS o API real.
export const products: Product[] = [
  {
    slug: 'audifonos-bluetooth-pro',
    name: 'ULTRAPODS MAX 5.3',
    category: 'audifonos',
    categoryLabel: 'Audífonos',
    price: 149900,
    compareAtPrice: 179800,
    shortDescription: 'Sonido HI-FI con Bluetooth 5.3 y batería de 30 horas.',
    description:
      'ULTRAPODS MAX 5.3: El sonido que te conecta. Disfruta de audio inmersivo con tecnología HI-FI, control táctil intuitivo y micrófono HD para llamadas cristalinas. Compatible con iOS y Android, con batería de hasta 30 horas de uso continuo.',
    features: [
      'Bluetooth 5.3 - Conexión estable y rápida',
      'Sonido HI-FI - Graves profundos y claros',
      'Control táctil - Controla música con toques',
      'Batería 30H - Hasta 30 horas de autonomía',
      'Micrófono HD - Llamadas nítidas sin ruidos',
      'Compatible con iOS y Android',
    ],
    image: '/products/ultrapods-max-5-3.png',
    icon: 'headphones',
    warrantyMonths: 6,
    inStock: true,
    featured: true,
  },
  {
    slug: 'smartwatch-fit-2-0',
    name: 'Smartwatch Fit 2.0',
    category: 'smartwatches',
    categoryLabel: 'Smartwatches',
    price: 150000,
    shortDescription: 'Monitor de ritmo cardíaco y resistente al agua.',
    description:
      'Tu entrenador de muñeca: monitorea tu ritmo cardíaco, tus rutinas y tu sueño en tiempo real. Resistente al agua para que no tengas que quitártelo ni en la ducha ni en el entrenamiento más intenso.',
    features: [
      'Monitor de ritmo cardíaco 24/7',
      'Resistente al agua (IP68)',
      'Notificaciones de llamadas y mensajes',
      'Más de 10 modos deportivos',
      'Batería de hasta 7 días de uso continuo',
    ],
    icon: 'watch',
    warrantyMonths: 6,
    inStock: true,
    featured: true,
  },
  {
    slug: 'powerbank-magsafe',
    name: 'Powerbank MagSafe',
    category: 'accesorios',
    categoryLabel: 'Accesorios',
    price: 80000,
    shortDescription: 'Carga inalámbrica rápida con 10.000 mAh.',
    description:
      'Carga tu celular sin cables, se adhiere magnéticamente y cabe en cualquier bolsillo. Con 10.000 mAh de capacidad, te alcanza para más de un día completo fuera de casa.',
    features: [
      'Carga inalámbrica magnética rápida',
      'Capacidad de 10.000 mAh',
      'Compatible con la mayoría de celulares modernos',
      'Indicador LED de nivel de batería',
      'Diseño ultradelgado, cabe en cualquier bolsillo',
    ],
    icon: 'battery-charging',
    warrantyMonths: 3,
    inStock: true,
    featured: true,
  },
  {
    slug: 'pocketprint-mini-impresora',
    name: 'PocketPrint — Mini Impresora Térmica',
    category: 'impresoras',
    categoryLabel: 'Impresoras',
    price: 99000,
    shortDescription: 'Imprime fotos, notas y etiquetas desde tu celular, sin tinta.',
    description:
      'PocketPrint es tu mini impresora térmica portátil: imprime tus mejores momentos donde quieras, sin necesidad de tinta ni cartuchos. Se conecta por Bluetooth a tu Android o iPhone en segundos y te deja imprimir fotos, notas de estudio, listas, etiquetas y stickers al instante. Ligera y recargable, es la compañera perfecta para estudiantes que quieren organizar sus apuntes o para guardar recuerdos en papel sin depender de una impresora tradicional.',
    features: [
      'Conexión Bluetooth rápida y estable',
      'Tecnología térmica sin tinta: más económica y ecológica',
      'Compatible con Android e iPhone',
      'Ligera y portátil, cabe en cualquier bolso',
      'Batería recargable de larga duración',
      'Ideal para estudiantes: notas, listas y etiquetas de estudio',
      'Perfecta para imprimir fotos, stickers y recuerdos al instante',
    ],
    specs: [
      { label: 'Conectividad', value: 'Bluetooth' },
      { label: 'Tecnología de impresión', value: 'Térmica, sin tinta' },
      { label: 'Compatibilidad', value: 'Android e iOS' },
      { label: 'Batería', value: 'Recargable vía USB' },
      { label: 'Papel', value: 'Rollo térmico incluido' },
    ],
    includes: ['1 impresora PocketPrint', '1 rollo de papel térmico', '1 cable USB', '1 manual de usuario'],
    icon: 'printer',
    thumbnail: '/products/pocketprint-thumb.webp',
    heroImage: '/products/pocketprint-hero.webp',
    gallery: ['/products/pocketprint-hero.webp', '/products/pocketprint-spec.webp'],
    warrantyLabel: 'Garantía por defectos de fabricación',
    inStock: true,
    featured: true,
    isNew: true,
  },
];

export const categories: Category[] = [
  { slug: 'audifonos', label: 'Audífonos', icon: 'earbuds' },
  { slug: 'smartwatches', label: 'Smartwatches', icon: 'watch' },
  { slug: 'accesorios', label: 'Accesorios', icon: 'battery-charging' },
  { slug: 'impresoras', label: 'Impresoras', icon: 'printer' },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(current: Product, limit = 3): Product[] {
  return products.filter((p) => p.slug !== current.slug).slice(0, limit);
}
