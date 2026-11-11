import { siteData } from "../data/DataSite";

/**
 * Datos estructurados (schema.org en JSON-LD) para que Google entienda qué
 * es el sitio: un estudio jurídico, sus abogados y sus áreas de práctica.
 *
 * Las reseñas de la página NO se marcan a propósito: Google ignora (y puede
 * penalizar) las reseñas que un negocio publica sobre sí mismo.
 *
 * La ubicación y los horarios viven solo acá (no se muestran en la página).
 * Pendiente: `sameAs` con el link de Google Business cuando exista.
 */
export function buildStructuredData(site: URL) {
  const url = new URL("/", site).href;
  const orgId = `${url}#estudio`;
  const { brand, contact, seo, about, practiceAreas } = siteData;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name: `${brand.shortName} Estudio Jurídico`,
        alternateName: brand.fullName,
        inLanguage: "es-AR",
        publisher: { "@id": orgId },
      },
      {
        "@type": "LegalService",
        "@id": orgId,
        name: `${brand.shortName} Estudio Jurídico`,
        legalName: brand.fullName,
        url,
        description: seo.description,
        logo: new URL(seo.logo, site).href,
        image: new URL(seo.ogImage, site).href,
        telephone: `+${contact.whatsappNumber}`,
        email: contact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: seo.location.locality,
          addressRegion: seo.location.region,
          addressCountry: seo.location.country,
        },
        areaServed: [
          { "@type": "City", name: seo.location.locality },
          {
            "@type": "AdministrativeArea",
            name: `Partido de ${seo.location.district}`,
          },
          { "@type": "State", name: seo.location.region },
        ],
        ...(seo.open24Hours && {
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        }),
        knowsLanguage: "es",
        knowsAbout: practiceAreas.map((area) => area.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Áreas de práctica",
          itemListElement: practiceAreas.map((area) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: area.title,
              description: area.description,
            },
          })),
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: `+${contact.whatsappNumber}`,
          email: contact.email,
          availableLanguage: "es",
        },
        employee: about.partners.map((partner) => ({
          "@type": "Person",
          name: partner.name.replace(/^Dra?\.\s*/, ""),
          honorificPrefix: partner.name.match(/^Dra?\./)?.[0],
          jobTitle: partner.role.split("—")[0].replace(/\s+/g, " ").trim(),
          description: partner.bio,
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Universidad de Buenos Aires",
          },
          worksFor: { "@id": orgId },
        })),
      },
    ],
  };
}
