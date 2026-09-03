# Especificación Técnica

## Stack

- Astro (SSG, sin backend)
- TypeScript
- pnpm
- Deploy: Vercel
- Sin dependencias de UI pesadas (no React/Vue salvo que se necesite algo
  puntual de interactividad, resoluble con Astro islands si hiciera falta)

## Estructura de carpetas (Atomic Design)

```
/src
  /assets
    /brand
      logo-mas-transparente.png    (versión a usar en el sitio)
      isotipo-mas-transparente.png (versión a usar en el sitio)
      favicon.ico / favicon.svg    (generados a partir del isotipo transparente)
  /components
    /atoms
      Button.astro
      Badge.astro
      SectionTitle.astro
      Icon.astro
      StarRating.astro
    /molecules
      NavLink.astro
      ServiceCard.astro
      TestimonialCard.astro
      ContactCard.astro
      WhatsAppFloatingButton.astro
    /organisms
      Navbar.astro
      Hero.astro
      ServiciosSection.astro
      ReseñasSection.astro
      NosotrosSection.astro
      ContactoSection.astro
      Footer.astro
    /templates
      MainLayout.astro
  /data
    DataSite.ts
  /pages
    index.astro
  /styles
    Style.css
```

## `DataSite.ts` — esquema e implementación

Un único fichero centraliza todo el contenido del sitio (copy, áreas de
práctica, testimonios, datos de contacto), para que actualizar texto no
implique tocar componentes.

```typescript
// src/data/DataSite.ts

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string; // nombre de ícono, ej: "car", "scroll", "building", "home", "family"
  whatsappMessage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  context: string; // ej: "Cliente de Sucesiones"
  content: string;
  rating: number; // 1-5
  isPlaceholder: boolean; // true = reemplazar antes de producción
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  photo: string; // path a placeholder hasta tener foto real
  isPlaceholderPhoto: boolean;
}

export interface SiteData {
  brand: {
    shortName: string;
    fullName: string;
    logo: string;
    isotipo: string;
  };
  contact: {
    email: string;
    phone: string; // formato mostrado: "11-3489-6440"
    whatsappNumber: string; // formato E.164 sin '+': "5491134896440"
    defaultWhatsappMessage: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  practiceAreas: PracticeArea[];
  about: {
    title: string;
    description: string;
    partners: Partner[];
  };
  testimonials: Testimonial[];
  seo: {
    title: string;
    description: string;
    url: string; // placeholder hasta tener dominio
  };
}

export const siteData: SiteData = {
  // completar con el copy de 02-contenido-copy.md
};
```

El contenido real (textos del hero, las 5 áreas, los 4 testimonios
placeholder, datos de "Nosotros", contacto y SEO) está detallado y listo
para copiar en `02-contenido-copy.md`.

## Integración de WhatsApp (sin formularios)

Toda conversión del sitio apunta a WhatsApp mediante links `wa.me` con
mensaje pre-cargado y URL-encoded:

```
https://wa.me/{whatsappNumber}?text={mensaje codificado}
```

- Número base: `5491134896440` (código país 54 + 9 para móvil AR + área 11 +
  número, sin guiones ni el 0/15).
- Cada `ServiceCard` arma su propio link con el `whatsappMessage`
  correspondiente a esa área de práctica (helper `buildWhatsAppLink()` en
  un util compartido, para no repetir lógica de encoding en cada
  componente).
- El botón flotante y el CTA del Hero usan el mensaje general definido en
  `contact.defaultWhatsappMessage`.
- No implementar ningún formulario ni endpoint de envío de mail: no hace
  falta backend ni servicio tipo Formspree/Web3Forms para este proyecto.

## Favicon / isotipo

- Ya se cuenta con `assets/isotipo-mas-transparente.png` (fondo
  transparente, no requiere procesamiento adicional).
- Generar a partir de ese archivo el set estándar de favicons (favicon.ico,
  apple-touch-icon, favicon-32x32, favicon-16x16).
- Usar el mismo archivo en el navbar mobile, donde el logo completo no
  entra por espacio.
- Usar `assets/logo-mas-transparente.png` en el Hero/Footer/navbar desktop.

## Estilos (`Style.css`)

Único archivo de estilos globales, sin CSS-in-JS ni frameworks de utilidades
(a menos que el proyecto lo requiera más adelante). Organización sugerida
dentro del archivo:

1. `:root` con variables de color (paleta completa, ver
   `01-diseno-y-marca.md`) y variables de tipografía/espaciado.
2. Reset/normalize básico.
3. Estilos base (body, headings, links).
4. Utilidades (contenedores, secciones, espaciados).
5. Estilos por componente, agrupados con comentarios (`/* Navbar */`,
   `/* Hero */`, etc.), respetando la nomenclatura de los componentes de
   `/components`.

## Responsive

- Mobile-first.
- Breakpoints sugeridos: `480px` (mobile grande), `768px` (tablet),
  `1024px` (desktop), `1280px` (desktop grande).
- Navbar colapsa a menú hamburguesa por debajo de `768px`, mostrando el
  isotipo en vez del logo completo.
- `ServiceCard` en grilla de 1 columna (mobile) → 2 (tablet) → 3 (desktop).

## Deploy

- Repositorio conectado a Vercel, build command estándar de Astro
  (`pnpm build`), output estático.
- Variables de entorno: ninguna necesaria por ahora (no hay backend/API keys
  al no usar formularios).
