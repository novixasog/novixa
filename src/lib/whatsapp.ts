import { formatCOP } from '@/lib/utils';
import type { Product } from '@/lib/types';

// Número de WhatsApp Business de NOVIXA AI, formato internacional sin "+" ni espacios.
// En producción se lee de la variable de entorno PUBLIC_WHATSAPP_NUMBER (ver wrangler.toml).
const FALLBACK_NUMBER = '573054675738';

function getWhatsappNumber(): string {
  return import.meta.env.PUBLIC_WHATSAPP_NUMBER || FALLBACK_NUMBER;
}

/** Genera un link wa.me con un mensaje de texto libre pre-cargado. */
export function generateWhatsappLink(message: string): string {
  const number = getWhatsappNumber();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Link genérico para el botón flotante (sin contexto de producto). */
export function generateGeneralWhatsappLink(): string {
  return generateWhatsappLink(
    'Hola NOVIXA 👋, quiero conocer más sobre sus productos y cómo comprar.'
  );
}

/** Link contextual con el producto que el usuario está viendo, para cierre de venta por NOVIXA AI. */
export function generateProductWhatsappLink(product: Pick<Product, 'name' | 'price'>): string {
  const message = `Hola NOVIXA 👋, quiero más información sobre *${product.name}* (${formatCOP(
    product.price
  )}). ¿Está disponible?`;
  return generateWhatsappLink(message);
}

/** Link con intención directa de compra, para el CTA principal de la ficha de producto. */
export function generateBuyWhatsappLink(product: Pick<Product, 'name' | 'price'>): string {
  const message = `Hola NOVIXA 👋, quiero *comprar* el/la *${product.name}* (${formatCOP(
    product.price
  )}). ¿Cómo continúo con el pedido?`;
  return generateWhatsappLink(message);
}
