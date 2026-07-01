# NOVIXA — E-commerce Frontend

Plataforma de e-commerce de NOVIXA construida con **Astro + TypeScript + Tailwind CSS**, desplegada en **Cloudflare Pages**. Mobile-first, dark theme, optimizada para conversión vía WhatsApp.

## Stack

- **Astro 4** (SSR con adapter de Cloudflare)
- **Tailwind CSS** con tokens de marca NOVIXA
- **TypeScript estricto**
- **lucide-astro** para iconografía
- Despliegue automático: GitHub → Cloudflare Pages

## 1. Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## 2. Subir a GitHub

Si aún no tienes el repo creado:

```bash
git init
git add .
git commit -m "feat: NOVIXA e-commerce frontend inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/novixa.git
git push -u origin main
```

Si el repo ya existe y solo quieres actualizar código:

```bash
git add .
git commit -m "feat: actualiza plataforma NOVIXA"
git push
```

## 3. Conectar con Cloudflare Pages (una sola vez)

1. Entra al [dashboard de Cloudflare](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Selecciona el repositorio `novixa`.
3. Configuración de build:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. En **Environment variables**, agrega:
   - `PUBLIC_WHATSAPP_NUMBER` → el número real de WhatsApp Business de NOVIXA (formato `57XXXXXXXXXX`, sin `+` ni espacios).
   - `PUBLIC_SITE_URL` → tu dominio real, ej. `https://novixa.com`.
5. Click en **Save and Deploy**.

A partir de aquí, **cada `git push` a `main` dispara un deploy automático** en Cloudflare Pages. No necesitas volver a tocar la configuración.

## 4. Variables de entorno importantes

| Variable | Dónde se usa | Descripción |
|---|---|---|
| `PUBLIC_WHATSAPP_NUMBER` | `src/lib/whatsapp.ts` | Número de WhatsApp Business (NOVIXA AI) que recibe todos los mensajes pre-cargados |
| `PUBLIC_SITE_URL` | `src/components/seo/SEO.astro` | Dominio real, usado para URLs canónicas, OpenGraph y Schema.org |

⚠️ **Antes de tu primer deploy real**, reemplaza el número de WhatsApp de prueba en `src/lib/whatsapp.ts` (`FALLBACK_NUMBER`) y en `wrangler.toml`, o simplemente configura la variable de entorno en Cloudflare como se indica arriba (tiene prioridad).

## 5. Estructura del proyecto

```
src/
├── components/
│   ├── ui/          # Button, ProductIcon (átomos reutilizables)
│   ├── layout/       # Navbar, Footer, WhatsappFloatButton
│   ├── product/      # ProductCard, TrustBadges
│   └── seo/          # SEO.astro (metadatos + Schema.org)
├── data/
│   └── products.ts   # Catálogo (mock hoy, listo para migrar a CMS/API)
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   ├── types.ts       # Tipos TS del dominio
│   ├── utils.ts        # cn(), formatCOP()
│   └── whatsapp.ts     # Generación de links de WhatsApp contextuales
└── pages/
    ├── index.astro
    ├── 404.astro
    └── productos/[slug].astro
```

## 6. Próximos pasos sugeridos

- **Imágenes reales de producto**: hoy las tarjetas usan íconos de marca como placeholder visual. Cuando tengas fotos reales, agrégalas en `src/assets/products/` y reemplaza `<ProductIcon>` por `<Image>` de `astro:assets` en `ProductCard.astro` y `[slug].astro`.
- **Catálogo dinámico**: migrar `src/data/products.ts` a fetch desde un CMS (ej. Cloudflare D1, Sanity, o una hoja de cálculo vía API) sin tocar los componentes, ya que consumen la interfaz `Product`.
- **Analytics**: agregar Cloudflare Web Analytics (gratis, sin impacto en performance) desde el dashboard de Cloudflare Pages.
- **Dominio propio**: conectar `novixa.com` en **Custom domains** dentro de la configuración del proyecto en Cloudflare Pages.

## 7. Comandos útiles

```bash
npm run build      # build de producción
npm run preview    # sirve el build localmente
npx astro check    # valida tipos TypeScript en todo el proyecto
```
