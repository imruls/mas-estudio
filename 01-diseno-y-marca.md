# Diseño y Marca

## Tono / personalidad de marca

Serio, formal, confiable — pero moderno. Nada de imágenes de stock genéricas
tipo "martillo de juez" o "biblioteca polvorienta". Preferir composiciones
limpias, mucho espacio en blanco (whitespace), tipografía como protagonista
del diseño (en línea con la referencia de estructura/tipografía que le gusta
al cliente).

## Logo

- **Logo completo:** `assets/logo-mas-transparente.png` (fondo transparente,
  ya procesado) — usar en el Hero y/o en el footer, y en el navbar desktop
  si el espacio lo permite.
- **Isotipo (balanza sola):** `assets/isotipo-mas-transparente.png` (fondo
  transparente, ya procesado) — usar como base para el favicon, como ícono
  en el navbar mobile (donde el logo completo no entra), y como elemento
  decorativo sutil (marca de agua, separador de sección) si el diseño lo
  pide.
  - Quedan también `assets/logo-mas.png` y `assets/isotipo-mas.jpeg` como
    respaldo del diseño original (fondo marfil opaco), por si se necesita
    ese fondo sólido en algún contexto puntual (por ejemplo, compartir el
    isotipo como imagen suelta fuera del sitio).
  - No hace falta ningún procesamiento adicional de recorte: las versiones
    transparentes ya están listas para usarse directamente como favicon y
    en el navbar.

## Uso del nombre de marca (corto vs. completo)

| Contexto | Nombre a usar |
|---|---|
| Logo / Navbar | **MAS** (o el isotipo solo, si el espacio es reducido) |
| `<title>` de la página / SEO | **MAS \| Estudio Jurídico Modugno & Alvarez Schiaffino** |
| Footer | **Estudio Jurídico Modugno & Alvarez Schiaffino** |
| Sección "Nosotros" | Nombre completo, mencionando a ambos socios por apellido |
| Copy conversacional (botones, CTAs) | **MAS** |

## Paleta de colores

Extraída del isotipo:

| Nombre | Hex | Uso |
|---|---|---|
| Marfil | `#FBF7F2` | Fondo principal |
| Arena | `#F1EAE0` | Fondos de sección alternados, tarjetas |
| Dorado Estudio | `#A8896A` | Acentos, íconos, líneas divisorias |
| Dorado Profundo | `#8B6D4F` | Texto de acento, estados hover |
| Azul Noche | `#16273A` | Texto principal, botones primarios, header |

Variables CSS sugeridas (ver detalle de implementación en
`03-estructura-tecnica.md`):

```css
:root {
  --color-marfil: #FBF7F2;
  --color-arena: #F1EAE0;
  --color-dorado-estudio: #A8896A;
  --color-dorado-profundo: #8B6D4F;
  --color-azul-noche: #16273A;
  --color-blanco: #FFFFFF;
}
```

No se agregan colores fuera de esta paleta salvo un blanco puro auxiliar
(`#FFFFFF`) para contrastes puntuales (por ejemplo, texto sobre el botón de
WhatsApp si se usa el verde de marca de WhatsApp — a evaluar si se respeta el
verde oficial de WhatsApp o se usa el Azul Noche para mantener consistencia
de marca; se sugiere usar el Azul Noche o el Dorado Estudio para no romper la
paleta, salvo en el ícono del botón flotante donde el verde ayuda al
reconocimiento inmediato).

## Tipografía

Propuesta (el cliente está abierto a sugerencias):

- **Títulos / Headings:** `Playfair Display` (serif elegante, con buen
  contraste de trazos — transmite formalidad y jerarquía, muy en línea con
  estudios jurídicos de gama alta).
- **Cuerpo de texto / UI:** `Inter` (sans-serif neutra, muy legible en
  pantalla, buen soporte de pesos variables).

Alternativa si se busca un serif más suave/editorial para los títulos:
`Cormorant Garamond`. Ambas se importan vía Google Fonts.

Jerarquía sugerida:

| Elemento | Fuente | Peso |
|---|---|---|
| H1 (Hero) | Playfair Display | 600 |
| H2 (títulos de sección) | Playfair Display | 500 |
| H3 (subtítulos, nombres de servicios) | Playfair Display | 500 |
| Body / párrafos | Inter | 400 |
| Botones / CTAs | Inter | 600, letter-spacing leve |
| Navbar | Inter | 500 |

## Referencias de diseño (input del cliente)

- **ertolanavajasyasoc.com.ar** → tomar la estructura general y el enfoque
  tipográfico (no las imágenes).
- **estudiojuridicocr.com.ar** → tomar el tratamiento de la sección de áreas
  de práctica (cómo se listan y jerarquizan los servicios).
- **dbsv.com.ar** → tomar el criterio de modernidad y el estilo de imágenes,
  adaptado a un estudio boutique (no reproducir literalmente, es un estudio
  grande con otro presupuesto de fotografía).
- **estudiolgg.com** y **gmenendez.com** → referencias generales de tono,
  sin indicación puntual de qué tomar de cada una; usarlas como contexto
  adicional de "cómo se ven estudios jurídicos serios" al momento de tomar
  decisiones de layout no especificadas acá.
