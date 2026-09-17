# MAS — Estudio Jurídico Modugno & Alvarez Schiaffino

Landing institucional del estudio, hecha con [Astro](https://astro.build) y
desplegada en Vercel.

## Comandos

| Comando        | Acción                                                 |
| :------------- | :----------------------------------------------------- |
| `pnpm install` | Instala las dependencias                               |
| `pnpm dev`     | Levanta el servidor de desarrollo en `localhost:4321`  |
| `pnpm build`   | Genera el sitio de producción en `.vercel/output/`     |
| `pnpm preview` | Previsualiza el build local antes de desplegar         |

## Estructura

```text
/
├── docs/                 # documentación del proyecto (marca, copy, roadmap)
├── public/               # favicons y la imagen de Open Graph
└── src/
    ├── assets/           # imágenes que pasan por el optimizador de Astro
    ├── components/       # atoms / molecules / organisms / templates
    ├── data/DataSite.ts  # todo el contenido y los datos de contacto del sitio
    ├── pages/            # rutas (`index.astro` es la única por ahora)
    ├── styles/Style.css  # hoja global con los tokens de diseño
    └── utils/            # helpers compartidos (links de contacto)
```

Notas:

- El contenido no se escribe en los componentes: vive en `src/data/DataSite.ts`.
- Las imágenes van en `src/assets/` para que `<Image />` las optimice.
  `public/` queda solo para lo que el navegador o los scrapers piden por ruta
  fija (favicons, imagen de Open Graph).
- Las fuentes se sirven desde el propio dominio con la API de fonts de Astro
  (ver `fonts` en `astro.config.mjs`); `--font-body` y `--font-heading` salen
  de ahí.
- Los `<script>` de las secciones no importan módulos a propósito: así Astro
  los deja inline y la página no suma pedidos extra.

Más detalle en [`docs/`](./docs), empezando por
[`00-overview.md`](./docs/00-overview.md).
