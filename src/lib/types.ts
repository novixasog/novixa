export type ProductIcon = 'headphones' | 'watch' | 'battery-charging' | 'smartphone' | 'earbuds';

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
  icon: ProductIcon;
  image?: string; // ruta a imagen del producto en /public/products
  warrantyMonths: number;
  inStock: boolean;
  featured?: boolean;
}

export interface Category {
  slug: string;
  label: string;
  icon: ProductIcon;
}
