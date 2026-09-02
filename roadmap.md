# Roadmap de Desarrollo — MAS Estudio Jurídico

## Cómo usar este roadmap

Está pensado para avanzar **una fase a la vez** con Claude Code, validar el
resultado antes de pasar a la siguiente, e iterar dentro de una fase todas
las veces que haga falta antes de seguir. No conviene pedirle a Claude Code
"armá toda la web" de una — se pierde control sobre el detalle de cada
sección.

Cada fase tiene:
- **Objetivo:** qué se logra en esa fase.
- **Depende de:** qué fase(s) previa(s) tiene que estar terminada.
- **Archivos involucrados:** dónde va a tocar código Claude Code.
- **Tareas:** desglose concreto.
- **Prompt sugerido:** un punto de partida de texto para pedírselo a Claude
  Code (ajustar según cómo vaya derivando la conversación).
- **Criterios de aceptación (DoD):** cómo saber que la fase está lista.
- **Posibles puntos de iteración:** qué es lo más probable que haya que
  retocar antes de dar por cerrada la fase.

Todas las fases referencian el contenido y las decisiones ya definidas en
`00-overview.md`, `01-diseno-y-marca.md`, `02-contenido-copy.md` y
`03-estructura-tecnica.md`. Este roadmap no repite esa información, solo la
secuencia en la que aplicarla.

---

## Fase 0 — Setup del proyecto

**Objetivo:** tener el proyecto Astro corriendo localmente, vacío pero con
la estructura de carpetas lista.

**Depende de:** nada, es el punto de partida.

**Archivos involucrados:** raíz del proyecto, `astro.config.mjs`,
`package.json`, `/src`.

**Tareas:**
- [x] Crear el proyecto con `pnpm create astro@latest` (plantilla mínima,
      TypeScript strict).
- [x] Configurar `astro.config.mjs` para deploy en Vercel.
- [x] Crear la estructura de carpetas de Atomic Design definida en
      `03-estructura-tecnica.md` (`/components/atoms`, `/molecules`,
      `/organisms`, `/templates`, `/data`, `/styles`).
- [x] Copiar `assets/logo-mas-transparente.png` y
      `assets/isotipo-mas-transparente.png` a `src/assets/brand/` (ya
      tienen fondo transparente, no requieren procesamiento).
- [x] Generar el set de favicons a partir de `isotipo-mas-transparente.png`.
- [x] Verificar que `pnpm dev` levante una página en blanco sin errores.

**Prompt sugerido:**
> "Iniciá un proyecto Astro + TypeScript con pnpm. Armá la estructura de
> carpetas de Atomic Design que está en `03-estructura-tecnica.md`. Copiá
> `logo-mas-transparente.png` e `isotipo-mas-transparente.png` a
> `src/assets/brand/` y generá los favicons a partir del isotipo (ya tiene
> fondo transparente)."

**Criterios de aceptación:**
- El proyecto corre con `pnpm dev` sin errores.
- La estructura de carpetas coincide con la especificada.
- El favicon aparece en la pestaña del navegador.

**Puntos de iteración:** si el logo pixela al reducirlo a tamaño favicon
(por venir de un PNG y no de un vector), puede convenir generar una versión
vectorizada/simplificada solo para ese uso puntual.

---

## Fase 1 — Fundaciones de diseño (tokens y `Style.css`)

**Objetivo:** tener el sistema visual base (colores, tipografía, espaciados)
funcionando, antes de construir ningún componente visual.

**Depende de:** Fase 0.

**Archivos involucrados:** `src/styles/Style.css`, `src/layouts/` (import
de Google Fonts).

**Tareas:**
- [x] Importar Playfair Display + Inter (Google Fonts).
- [x] Declarar `:root` con las variables de color de `01-diseno-y-marca.md`.
- [x] Declarar variables de espaciado y breakpoints como comentario de
      referencia (Astro/CSS no tiene variables de media query nativas, pero
      documentar los valores usados: 480px / 768px / 1024px / 1280px).
- [x] Reset/normalize básico.
- [x] Estilos base de `body`, `h1`-`h3`, `p`, `a` usando las variables.
- [x] Crear una página de prueba temporal (`/styleguide` o similar) que
      muestre la paleta, la tipografía en sus distintos tamaños y un botón
      de ejemplo, solo para validar visualmente el sistema. (Se borra antes
      de producción o se deja oculta, a definir.)

**Prompt sugerido:**
> "Creá `Style.css` con las variables de color y tipografía definidas en
> `01-diseno-y-marca.md`. Agregá un reset básico y estilos base de
> tipografía. Armá una página temporal `/styleguide` que muestre la paleta
> de colores, los tamaños de H1/H2/H3/párrafo y un botón, para poder
> validar el sistema visual antes de construir las secciones reales."

**Criterios de aceptación:**
- La página `/styleguide` muestra correctamente los 5 colores de la paleta,
  la tipografía cargando (Playfair Display en títulos, Inter en cuerpo), y
  un botón de ejemplo.
- Los colores coinciden exactamente con los hex de `01-diseno-y-marca.md`.

**Puntos de iteración:** este es el momento más barato para ajustar tamaños
de fuente, pesos, contraste de colores (por ejemplo si el Dorado Estudio se
lee poco sobre Marfil) — antes de que esas decisiones se repliquen en 7
secciones distintas.

---

## Fase 2 — Datos (`DataSite.ts`)

**Objetivo:** centralizar todo el copy y la data estructurada del sitio,
para que las secciones se construyan consumiendo datos y no texto
hardcodeado.

**Depende de:** Fase 0 (no depende de Fase 1).

**Archivos involucrados:** `src/data/DataSite.ts`, `src/utils/whatsapp.ts`
(o similar, para el helper de links).

**Tareas:**
- [x] Crear las interfaces TypeScript definidas en `03-estructura-tecnica.md`
      (`PracticeArea`, `Testimonial`, `Partner`, `SiteData`).
- [x] Completar `siteData` con todo el copy real de `02-contenido-copy.md`
      (hero, 5 áreas de práctica, "Nosotros", 4 testimonios placeholder,
      contacto, SEO).
- [x] Marcar explícitamente con comentarios `// TODO: placeholder` los
      testimonios y las fotos de los socios, como está indicado en
      `02-contenido-copy.md`.
- [x] Crear `buildWhatsAppLink(number, message)` que arme la URL
      `https://wa.me/...` con el texto URL-encoded.

**Prompt sugerido:**
> "Creá `src/data/DataSite.ts` con las interfaces de `03-estructura-tecnica.md`
> y completá `siteData` con el contenido de `02-contenido-copy.md` texto por
> texto, sin resumir ni parafrasear. Marcá los testimonios y las fotos de
> los socios como placeholder con un comentario TODO. Creá también el
> helper `buildWhatsAppLink()`."

**Criterios de aceptación:**
- `DataSite.ts` compila sin errores de tipos.
- Todo el copy de `02-contenido-copy.md` está presente (ningún texto
  inventado ni faltante).
- `buildWhatsAppLink()` genera URLs válidas y correctamente encodeadas
  (probar con un mensaje que tenga tildes y espacios).

**Puntos de iteración:** es más fácil corregir texto acá, en un archivo de
datos plano, que después de que ya esté "quemado" dentro de componentes
`.astro`.

---

## Fase 3 — Layout base (`MainLayout`, `Navbar`, `Footer`, botón flotante)

**Objetivo:** tener el "esqueleto" de la página funcionando: header, footer
y el botón de WhatsApp flotante, con navegación funcional, antes de meter
contenido de las secciones intermedias.

**Depende de:** Fases 1 y 2.

**Archivos involucrados:** `src/layouts/MainLayout.astro`,
`src/components/organisms/Navbar.astro`,
`src/components/organisms/Footer.astro`,
`src/components/molecules/WhatsAppFloatingButton.astro`,
`src/components/molecules/NavLink.astro`.

**Tareas:**
- [x] `MainLayout.astro`: estructura HTML base + meta tags SEO (usando
      `siteData.seo`, con el dominio placeholder) + import de `Style.css`.
- [x] `Navbar`: logo completo en desktop, isotipo en mobile, links a cada
      sección (anclas `#servicios`, `#nosotros`, etc.), CTA de WhatsApp,
      menú hamburguesa responsive por debajo de 768px.
- [x] `Footer`: nombre completo del estudio, línea legal, email y WhatsApp
      como links rápidos.
- [x] `WhatsAppFloatingButton`: fixed bottom-right, ícono de WhatsApp,
      mensaje general de `siteData.contact.defaultWhatsappMessage`.
- [x] Crear `index.astro` mínimo que solo use `MainLayout` con un `<main>`
      vacío, para poder ver Navbar + Footer + botón flotante funcionando
      de punta a punta.

**Prompt sugerido:**
> "Con el Style.css y el DataSite.ts ya armados, construí el Navbar, el
> Footer y el WhatsAppFloatingButton según `03-estructura-tecnica.md`. El
> Navbar debe mostrar el logo completo en desktop y el isotipo en mobile,
> con menú hamburguesa responsive. Armá un `index.astro` mínimo con
> MainLayout para poder ver estos tres elementos funcionando."

**Criterios de aceptación:**
- El Navbar cambia correctamente a menú hamburguesa en mobile.
- El botón flotante de WhatsApp abre el link correcto con el mensaje
  general.
- El Footer muestra el nombre completo del estudio y los datos de
  contacto.
- No hay contenido de las secciones intermedias todavía — es esperado.

**Puntos de iteración:** comportamiento del menú mobile (animación de
apertura, si tapa contenido al abrirse), z-index del botón flotante
respecto al menú mobile abierto (no deberían superponerse mal).

---

## Fase 4 — Sección Hero

**Objetivo:** primera sección de contenido real, la más visible del sitio.

**Depende de:** Fase 3.

**Archivos involucrados:** `src/components/organisms/Hero.astro`.

**Tareas:**
- [x] Título y subtítulo desde `siteData.hero`.
- [x] CTA primario (WhatsApp) y CTA secundario (scroll a Servicios).
- [x] Composición visual: definir si el Hero lleva el logo completo grande,
      una imagen/ilustración relacionada a la balanza, o se mantiene solo
      tipográfico (más alineado a la referencia de "estructura/tipografía"
      que le gustó al cliente).
- [x] Insertar en `index.astro` dentro de `<main>`.

**Prompt sugerido:**
> "Construí el Hero según el copy de `siteData.hero`. Priorizá una
> composición tipográfica limpia (en línea con la referencia de
> ertolanavajasyasoc.com.ar que está en `01-diseno-y-marca.md`), con el CTA
> de WhatsApp bien visible arriba del pliegue en mobile."

**Criterios de aceptación:**
- El Hero se ve completo sin scroll en desktop (o casi completo).
- El CTA de WhatsApp es el elemento con más jerarquía visual después del
  título.
- Responsive correcto en las 3 resoluciones clave.

**Puntos de iteración:** este es el punto donde más vale la pena iterar
varias veces — probar con y sin elemento gráfico del isotipo de fondo,
ajustar tamaño de tipografía del H1, revisar que el subtítulo no compita en
peso visual con el título.

---

## Fase 5 — Sección Servicios (áreas de práctica)

**Objetivo:** mostrar las 5 áreas de práctica con jerarquía clara,
inspirado en el tratamiento que le gustó al cliente de
estudiojuridicocr.com.ar.

**Depende de:** Fase 3 (se puede hacer en paralelo con Fase 4 si se prefiere).

**Archivos involucrados:**
`src/components/organisms/ServiciosSection.astro`,
`src/components/molecules/ServiceCard.astro`,
`src/components/atoms/Icon.astro`.

**Tareas:**
- [x] `ServiceCard`: ícono, título, descripción, y CTA de WhatsApp
      específico por área (usando `buildWhatsAppLink` + el
      `whatsappMessage` de cada `PracticeArea`).
- [x] `ServiciosSection`: título + bajada de sección, grilla de 5
      `ServiceCard` (1 col mobile → 2 col tablet → 3 col desktop, con la
      quinta card centrada o en su propia fila, a resolver visualmente).
- [x] Elegir/generar set de íconos para las 5 áreas (auto/tránsito,
      pergamino/documento, edificio/empresa, casa, familia) — usar una
      librería de íconos ligera (ej. Lucide) en tono línea, coherente con
      el estilo elegante de la marca.
- [x] Insertar en `index.astro`.

**Prompt sugerido:**
> "Construí la sección de Servicios iterando sobre `siteData.practiceAreas`.
> Cada ServiceCard debe tener ícono, título, descripción y un botón de
> WhatsApp que abra con el mensaje específico de esa área. Usá una grilla
> responsive de 1/2/3 columnas."

**Criterios de aceptación:**
- Las 5 áreas se muestran con su copy exacto de `DataSite.ts`.
- Cada botón de WhatsApp de cada card abre con el mensaje correcto y
  distinto para cada área (verificar los 5 links).
- La grilla se reacomoda correctamente en los 3 breakpoints.

**Puntos de iteración:** estilo de los íconos (deben sentirse parte de la
misma familia visual, no íconos genéricos de stock que rompan la
elegancia), y cómo queda visualmente la quinta card "suelta" en el grid.

---

## Fase 6 — Sección Reseñas

**Objetivo:** mostrar los 4 testimonios placeholder con buen tratamiento
visual, dejando explícito en el código que son de placeholder.

**Depende de:** Fase 3.

**Archivos involucrados:**
`src/components/organisms/ReseñasSection.astro`,
`src/components/molecules/TestimonialCard.astro`,
`src/components/atoms/StarRating.astro`.

**Tareas:**
- [x] `StarRating`: componente simple que recibe un número 1-5 y pinta
      estrellas con el Dorado Estudio.
- [x] `TestimonialCard`: cita, nombre/iniciales, contexto (área de
      práctica), rating.
- [x] `ReseñasSection`: título de sección + grilla o carrusel de las 4
      `TestimonialCard` (a decidir si carrusel/slider o grilla estática
      según cuánto espacio ocupen en mobile).
- [x] Insertar en `index.astro`.

**Prompt sugerido:**
> "Construí la sección de Reseñas con los 4 testimonios placeholder de
> `siteData.testimonials`. Usá StarRating para el puntaje. Si en mobile
> las 4 cards ocupan demasiado alto, proponeme un carrusel simple en vez
> de grilla."

**Criterios de aceptación:**
- Se muestran los 4 testimonios con su rating correspondiente.
- El código conserva el flag/comentario de placeholder para cada
  testimonio (para no perder de vista que hay que reemplazarlos).

**Puntos de iteración:** grilla estática vs. carrusel en mobile; si se opta
por carrusel, decidir si es automático o solo swipe manual (recomendado:
solo manual, para no restar seriedad con animaciones automáticas
llamativas).

---

## Fase 7 — Sección Nosotros

**Objetivo:** presentar el estudio y a los dos socios con placeholders de
foto, transmitiendo trayectoria y confianza.

**Depende de:** Fase 3.

**Archivos involucrados:**
`src/components/organisms/NosotrosSection.astro`,
`src/components/molecules/ContactCard.astro` (si se reutiliza para las
tarjetas de socio, o crear `PartnerCard.astro` puntual).

**Tareas:**
- [ ] Texto institucional desde `siteData.about.description`.
- [ ] Dos bloques de socio, cada uno con imagen placeholder (silueta/avatar
      genérico, no una foto de stock de una persona real), nombre y rol.
- [ ] Insertar en `index.astro`.

**Prompt sugerido:**
> "Construí la sección Nosotros con el texto institucional de
> `siteData.about`. Los dos socios se muestran con un placeholder de foto
> genérico (silueta), nombre y rol, dejando comentado un TODO para
> reemplazar por la foto real."

**Criterios de aceptación:**
- El texto institucional coincide con `02-contenido-copy.md`.
- Los dos placeholders de foto son visualmente neutros (no fotos de bancos
  de imágenes de personas reales, para evitar confusión de que son los
  socios reales).

**Puntos de iteración:** balance entre texto y espacio de fotos —si el
texto institucional se siente muy largo/corto una vez maquetado, ajustar.

---

## Fase 8 — Sección Contacto

**Objetivo:** cierre fuerte de conversión, reforzando WhatsApp como único
canal, sin formularios.

**Depende de:** Fase 3.

**Archivos involucrados:**
`src/components/organisms/ContactoSection.astro`.

**Tareas:**
- [ ] Título y bajada desde `siteData`.
- [ ] Botón grande de WhatsApp (mensaje general).
- [ ] Email como link secundario (`mailto:`).
- [ ] Celular mostrado como texto (no clickeable a formulario, opcionalmente
      clickeable a `tel:` para mobile).
- [ ] Insertar en `index.astro`.

**Prompt sugerido:**
> "Construí la sección Contacto: CTA grande de WhatsApp como elemento
> principal, y el email/celular como datos secundarios. No agregar ningún
> formulario."

**Criterios de aceptación:**
- El botón de WhatsApp es el elemento dominante de la sección.
- No existe ningún `<form>` en el código de esta sección.

**Puntos de iteración:** si conviene fusionar visualmente esta sección con
el Footer (dado que ambos muestran datos de contacto) o mantenerlas
claramente separadas.

---

## Fase 9 — Integración final de `index.astro`

**Objetivo:** ensamblar todas las secciones en el orden definitivo y
revisar la experiencia de scroll completa.

**Depende de:** Fases 4 a 8 completas.

**Archivos involucrados:** `src/pages/index.astro`.

**Tareas:**
- [ ] Orden final: Navbar → Hero → Servicios → Reseñas → Nosotros →
      Contacto → Footer → WhatsAppFloatingButton.
- [ ] Verificar que los anchors del Navbar (`#servicios`, `#nosotros`, etc.)
      apunten a los `id` reales de cada sección.
- [ ] Revisar transiciones entre secciones (alternancia de fondos Marfil /
      Arena para generar ritmo visual, según se definió en la paleta).
- [ ] Eliminar la página `/styleguide` de la Fase 1.

**Prompt sugerido:**
> "Ensamblá todas las secciones en `index.astro` en el orden definitivo.
> Verificá que los anchors del Navbar funcionen y alterná los fondos
> Marfil/Arena entre secciones para dar ritmo visual."

**Criterios de aceptación:**
- Scroll completo de la página sin errores visuales ni de consola.
- Todos los anchors del Navbar llevan a la sección correcta.

**Puntos de iteración:** ritmo de alternancia de fondos, espaciado vertical
entre secciones (que no se sientan ni muy pegadas ni con demasiado aire).

---

## Fase 10 — Responsive & QA visual

**Objetivo:** garantizar que todo el sitio se vea y funcione bien en los 3
breakpoints clave.

**Depende de:** Fase 9.

**Tareas:**
- [ ] Revisar mobile (< 480px), tablet (768px) y desktop (1280px) sección
      por sección.
- [ ] Revisar que el botón flotante de WhatsApp no tape CTAs ni texto
      importante en mobile.
- [ ] Revisar contraste de texto sobre cada color de fondo de la paleta.
- [ ] Probar los 6 links de WhatsApp (5 áreas + 1 general) desde un celular
      real si es posible.

**Prompt sugerido:**
> "Revisá el sitio completo en mobile, tablet y desktop. Corregí cualquier
> solapamiento, desborde de texto o problema de contraste que encuentres."

**Criterios de aceptación:**
- Sin scroll horizontal en ningún breakpoint.
- Sin elementos superpuestos.
- Los 6 links de WhatsApp abren correctamente con su mensaje respectivo.

---

## Fase 11 — SEO y performance

**Objetivo:** dejar el sitio optimizado para su lanzamiento (aun con el
dominio placeholder).

**Depende de:** Fase 9.

**Tareas:**
- [ ] Verificar meta tags (`title`, `description`, Open Graph) en
      `MainLayout`.
- [ ] Optimizar imágenes (logo, isotipo, placeholders) en formatos livianos
      (WebP donde aplique).
- [ ] Verificar que el sitio buildee correctamente con `pnpm build` sin
      warnings.
- [ ] Revisar performance básica (Lighthouse) y corregir lo que sea de bajo
      esfuerzo/alto impacto.

**Prompt sugerido:**
> "Revisá el build de producción con `pnpm build`, optimizá las imágenes de
> marca y corroborá que los meta tags de SEO estén completos según
> `siteData.seo`."

**Criterios de aceptación:**
- `pnpm build` sin errores ni warnings relevantes.
- Meta tags presentes y correctos (con el placeholder de dominio marcado
  para reemplazar).

---

## Fase 12 — Pre-lanzamiento

**Objetivo:** checklist final antes de conectar el dominio real y publicar.

**Depende de:** todas las fases anteriores.

**Tareas:**
- [ ] Reemplazar los 4 testimonios placeholder por reseñas reales (cuando
      el cliente las provea).
- [ ] Reemplazar las 2 fotos placeholder de los socios por fotos reales.
- [ ] Actualizar `siteData.seo.url` con el dominio real una vez comprado.
- [ ] Doble verificación del número de WhatsApp en formato E.164.
- [ ] Deploy a Vercel y prueba end-to-end en el dominio (o subdominio de
      Vercel) final.

**Criterios de aceptación:**
- Cero contenido placeholder visible en producción.
- Sitio funcionando en la URL de Vercel (o dominio final si ya está
  conectado).

---

## Resumen visual del orden de fases

```
Fase 0  → Setup
Fase 1  → Style.css (tokens)
Fase 2  → DataSite.ts
Fase 3  → Layout (Navbar / Footer / WhatsApp flotante)
Fase 4  → Hero
Fase 5  → Servicios
Fase 6  → Reseñas
Fase 7  → Nosotros
Fase 8  → Contacto
Fase 9  → Integración final (index.astro)
Fase 10 → Responsive & QA
Fase 11 → SEO & performance
Fase 12 → Pre-lanzamiento
```

Las Fases 4 a 8 (las secciones de contenido) son independientes entre sí y
se pueden reordenar o iterar en paralelo si se prefiere, siempre que la
Fase 3 (layout base) ya esté cerrada.
