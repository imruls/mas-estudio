# Plan de Implementación (checklist sugerido para Claude Code)

Orden sugerido de trabajo, pensado para ir viendo resultado incremental.

## 1. Setup inicial
- [ ] Crear proyecto Astro + TypeScript con `pnpm create astro@latest`
- [ ] Configurar estructura de carpetas de Atomic Design (`01-diseno-y-marca.md` /
      `03-estructura-tecnica.md`)
- [ ] Copiar `assets/logo-mas.png` y `assets/isotipo-mas.jpeg` a `src/assets/brand/`
- [ ] Procesar el isotipo con fondo transparente y generar favicons

## 2. Fundaciones de diseño
- [ ] Cargar tipografías (Playfair Display + Inter) vía Google Fonts
- [ ] Crear `Style.css` con variables de color y tipografía (`01-diseno-y-marca.md`)
- [ ] Definir estilos base y utilidades (contenedores, espaciados, breakpoints)

## 3. Datos
- [ ] Crear `DataSite.ts` con el esquema definido en `03-estructura-tecnica.md`
- [ ] Completar `siteData` con el copy de `02-contenido-copy.md`
- [ ] Crear el helper `buildWhatsAppLink()` para armar links de WhatsApp con
      mensaje pre-cargado

## 4. Componentes atómicos
- [ ] `Button`, `Badge`, `SectionTitle`, `Icon`, `StarRating`

## 5. Componentes moleculares
- [ ] `NavLink`, `ServiceCard`, `TestimonialCard`, `ContactCard`,
      `WhatsAppFloatingButton`

## 6. Secciones (organisms)
- [ ] `Navbar` (con logo desktop / isotipo mobile + menú hamburguesa)
- [ ] `Hero`
- [ ] `ServiciosSection` (grilla de 5 `ServiceCard`)
- [ ] `ReseñasSection` (4 `TestimonialCard` placeholder)
- [ ] `NosotrosSection` (texto + 2 placeholders de foto de socios)
- [ ] `ContactoSection` (CTA WhatsApp + email, sin formulario)
- [ ] `Footer`
- [ ] `WhatsAppFloatingButton` fijo en `MainLayout`

## 7. Ensamblado
- [ ] `MainLayout.astro` con SEO/meta tags (usando placeholders de dominio)
- [ ] `index.astro` ensamblando todas las secciones en el orden definido

## 8. Responsive y pulido
- [ ] Revisar mobile-first en las 3 resoluciones clave (mobile, tablet, desktop)
- [ ] Revisar contraste de colores (texto sobre Marfil/Arena/Azul Noche)
- [ ] Revisar que todos los links de WhatsApp abran con el número y mensaje correctos

## 9. Antes de producción (recordatorios)
- [ ] Reemplazar testimonios placeholder por reseñas reales
- [ ] Reemplazar fotos placeholder de los socios por fotos reales
- [ ] Actualizar dominio real en SEO/metadata una vez comprado
- [ ] Verificar el número de WhatsApp en formato E.164 antes de publicar
