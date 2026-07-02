import type { Product, Category } from '@/lib/types';

// Catálogo de prueba tomado del Documento Maestro de NOVIXA.
// Reemplaza / amplía este arreglo cuando conectes un CMS o API real.
export const products: Product[] = [
  {
    slug: 'ultrapods-max-5-3',
    name: 'Ultrapods Max 5.3',
    category: 'audifonos',
    categoryLabel: 'Audífonos',
    price: 179800,
    shortDescription: 'Bluetooth 5.3, sonido Hi-Res y hasta 30h de batería con el estuche.',
    description:
      'Audífonos inalámbricos Ultrapods Max 5.3: sonido Hi-Res con graves profundos y claros, control táctil para música y llamadas, y micrófono HD que filtra el ruido para que te escuchen nítido. Ligeros, cómodos y resistentes al sudor, se adaptan a tu entrenamiento, tu jornada de trabajo o tu música favorita. Compatibles con iOS y Android, y disponibles en 5 colores para que elijas el que va contigo.',
    features: [
      'Bluetooth 5.3: conexión estable y rápida',
      'Sonido Hi-Res con graves profundos y claros',
      'Control táctil para música y llamadas',
      'Batería de hasta 30 horas con el estuche',
      'Micrófono HD: llamadas nítidas y sin ruido',
      'Resistentes al sudor, ideales para entrenar',
      'Compatibles con iOS y Android',
      'Disponibles en 5 colores: blanco, negro, rosado, azul y verde',
    ],
    specs: [
      { label: 'Conectividad', value: 'Bluetooth 5.3' },
      { label: 'Batería', value: 'Hasta 6h por carga · 30h con estuche' },
      { label: 'Resistencia', value: 'Al sudor y salpicaduras' },
      { label: 'Compatibilidad', value: 'iOS y Android' },
      { label: 'Colores disponibles', value: 'Blanco, Negro, Rosado, Azul, Verde' },
    ],
    includes: ['2 audífonos Ultrapods Max 5.3', '1 estuche de carga con pantalla LED', '1 cable de carga USB'],
    icon: 'earbuds',
    thumbnail: '/products/ultrapods-thumb.webp',
    heroImage: '/products/ultrapods-hero.webp',
    gallery: ['/products/ultrapods-hero.webp', '/products/ultrapods-promo.webp', '/products/ultrapods-lifestyle.webp'],
    promoNote: '2x1: lleva 2 unidades y paga solo $149.900',
    warrantyMonths: 6,
    inStock: true,
    featured: true,
    isNew: true,
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
