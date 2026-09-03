# MAS Estudio Jurídico — Landing Page

## Resumen del proyecto

Landing page de una página (one-pager) para un estudio jurídico boutique, con menos
de 2 años operando de forma independiente. Dos socios: **Modugno & Alvarez
Schiaffino**.

**Objetivo de la web:** transmitir seriedad, formalidad y confianza, sin perder
un aire moderno. Todo el tráfico del sitio debe converger en **WhatsApp** (no
hay formularios de contacto ni backend de envío de mails).

## Cliente

- Nombre comercial corto: **MAS**
- Nombre completo: **Estudio Jurídico Modugno & Alvarez Schiaffino**
- Más de 2 años trabajando de forma independiente
- Sin oficina física, sin redes sociales
- Canales de contacto: Email y WhatsApp únicamente

## Stack técnico

- **Framework:** Astro
- **Lenguaje:** TypeScript
- **Gestor de paquetes:** pnpm
- **Hosting:** Vercel
- **Metodología de componentes:** Atomic Design
- **Estilos:** un único fichero `Style.css` (con variables CSS para la paleta)
- **Contenido:** un único fichero `DataSite.ts` con toda la info del sitio

## Secciones de la landing (en orden)

1. Navbar
2. Hero
3. Servicios (áreas de práctica)
4. Reseñas
5. Nosotros
6. Contacto
7. Botón flotante de WhatsApp (persistente en todas las secciones)

## Archivos de esta especificación

| Archivo | Contenido |
|---|---|
| `00-overview.md` | Este archivo. Resumen general del proyecto |
| `01-diseno-y-marca.md` | Paleta de colores, tipografía, logo/isotipo, tono de marca |
| `02-contenido-copy.md` | Todo el copy real de cada sección |
| `03-estructura-tecnica.md` | Estructura de carpetas, `DataSite.ts`, integración de WhatsApp, SEO |
| `04-plan-implementacion.md` | Checklist de pasos sugeridos para Claude Code |
| `assets/logo-mas.png` | Logo completo, versión original (fondo marfil opaco) |
| `assets/isotipo-mas.jpeg` | Isotipo solo, versión original (fondo marfil opaco) |
| `assets/logo-mas-transparente.png` | **Logo completo, fondo transparente (usar esta en el proyecto)** |
| `assets/isotipo-mas-transparente.png` | **Isotipo solo, fondo transparente (usar esta en el proyecto)** |

## Pendientes / decisiones abiertas

- **Dominio:** aún no está comprado. Se usa un placeholder en metadata SEO
  (`estudiomas.com.ar`) que debe reemplazarse cuando se defina el real.
- ~~**Isotipo/logo transparente:** pendiente de procesar~~ → **Resuelto.**
  Ya se cuenta con `assets/logo-mas-transparente.png` y
  `assets/isotipo-mas-transparente.png`, ambos con transparencia real. Son
  los archivos a usar en el proyecto (los `.png`/`.jpeg` sin "transparente"
  en el nombre quedan como respaldo del diseño original).
- **Fotos de los socios y de "Nosotros":** no hay fotos reales todavía. Se
  usan placeholders (ver `03-estructura-tecnica.md`).
- **Reseñas:** son testimonios de placeholder, no reales. Deben marcarse
  claramente en el código (comentario `// TODO: reemplazar por reseña real`)
  para que se reemplacen antes de publicar en producción.
