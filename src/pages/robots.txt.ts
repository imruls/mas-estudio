import type { APIRoute } from "astro";

// Se genera en el build para tomar el dominio de `site` (astro.config.mjs).
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL("/sitemap.xml", site);
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
};
