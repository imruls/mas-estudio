// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://estudiomas.com.ar',
  adapter: vercel(),

  /* Fuentes servidas desde el propio dominio (API de fonts de Astro): evita
     el CSS bloqueante de Google Fonts y sus dos preconnect, y deja que el
     <Font /> del layout emita el @font-face + el preload del woff2.
     Los cssVariable son los mismos tokens que usa Style.css, así que no se
     declaran en :root. */
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: ['400 700'], // variable: un solo @font-face para todo el rango
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Playfair Display',
      cssVariable: '--font-heading',
      weights: ['500 600'], // idem, Playfair también es variable
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
