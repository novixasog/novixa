export type ProductIcon = 'headphones' | 'watch' | 'battery-charging' | 'smartphone' | 'earbuds' | 'printer';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  price: number; // en COP
  compareAtPrice?: number; // precio tachado, opcional, para mostrar descuento
  shortDescription: string;
  description: string;
  features: string[];
  /** Especificaciones técnicas clave (etiqueta -> valor), para fichas con más detalle técnico */
  specs?: ProductSpec[];
  /** Ítems físicos que incluye la caja/paquete */
  includes?: string[];
  icon: ProductIcon;
  /** Imagen principal de la tarjeta/ficha, ruta dentro de /public (ej: "/products/foo.webp") */
  thumbnail?: string;
  /** Imagen destacada de la ficha de producto (hero), si difiere del thumbnail */
  heroImage?: string;
  /** Galería adicional de imágenes para la ficha de producto */
  gallery?: string[];
  /** Texto corto de promoción activa, ej: "2x1: lleva 2 y paga $149.900" */
  promoNote?: string;
  warrantyMonths?: number;
  /** Texto de garantía cuando no se especifica un número exacto de meses (ej. "por defectos de fabricación") */
  warrantyLabel?: string;
  inStock: boolean;
  featured?: boolean;
  isNew?: boolean;
}

export interface Category {
  slug: string;
  label: string;
  icon: ProductIcon;
}
