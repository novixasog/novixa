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
];

export const categories: Category[] = [
  { slug: 'audifonos', label: 'Audífonos', icon: 'headphones' },
  { slug: 'smartwatches', label: 'Smartwatches', icon: 'watch' },
  { slug: 'accesorios', label: 'Accesorios', icon: 'battery-charging' },
  { slug: 'celulares', label: 'Celulares', icon: 'smartphone' },
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
