import type { APIRoute } from "astro";

// Sitemap a mano: el sitio es de una sola página, no hace falta
// @astrojs/sitemap. Si se suman páginas, agregarlas a `paths`.
const paths = ["/"];

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10); // fecha del build
  const urls = paths
    .map(
      (path) =>
        `  <url>\n    <loc>${new URL(path, site)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
