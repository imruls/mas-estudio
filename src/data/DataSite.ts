export interface NavLink {
  label: string;
  href: string;
}

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
  bio: string; // TODO: bio placeholder, reemplazar por texto real del socio/a
  isBioPlaceholder: boolean;
  photo: string; // path a placeholder hasta tener foto real
  isPlaceholderPhoto: boolean;
}

export interface SiteData {
  brand: {
    shortName: string;
    fullName: string;
    logo: string;
    navbarLogo: string;
    isotipo: string;
  };
  contact: {
    email: string;
    phone: string; // formato mostrado: "11-3489-6440"
    whatsappNumber: string; // formato E.164 sin '+': "5491134896440"
    defaultWhatsappMessage: string;
  };
  navbar: {
    links: NavLink[];
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  practiceAreasSection: {
    title: string;
    subtitle: string;
  };
  practiceAreas: PracticeArea[];
  about: {
    title: string;
    description: string;
    partners: Partner[];
  };
  testimonialsSection: {
    title: string;
  };
  testimonials: Testimonial[];
  contactSection: {
    title: string;
    subtitle: string;
    ctaLabel: string;
  };
  whatsappFloatingButton: {
    message: string;
  };
  footer: {
    fullName: string;
    legalText: string;
  };
  seo: {
    title: string;
    description: string;
    url: string; // placeholder hasta tener dominio real
    ogImage: string;
  };
}

export const siteData: SiteData = {
  brand: {
    shortName: "MAS",
    fullName: "Estudio Jurídico Modugno & Alvarez Schiaffino",
    logo: "/assets/brand/logo-mas-transparente.png",
    navbarLogo: "/assets/brand/logo-mas-navbar.png",
    isotipo: "/assets/brand/isotipo-mas-transparente.png",
  },

  contact: {
    email: "e.juridicomas@gmail.com",
    phone: "11-3489-6440",
    whatsappNumber: "5491134896440",
    defaultWhatsappMessage: "Hola, quiero hacer una consulta legal.",
  },

  navbar: {
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Servicios", href: "#servicios" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Reseñas", href: "#resenas" },
      { label: "Contacto", href: "#contacto" },
    ],
  },

  hero: {
    title: "Asesoramiento legal serio, cercano y a tu medida",
    subtitle:
      "En MAS Estudio Jurídico combinamos experiencia y trato personalizado para acompañarte en cada etapa de tu caso, con la claridad y confianza que merecés.",
    ctaPrimary: "Hacé tu consulta por WhatsApp",
    ctaSecondary: "Conocé nuestras áreas de práctica",
  },

  practiceAreasSection: {
    title: "Áreas de práctica",
    subtitle:
      "Un equipo con experiencia en las áreas del derecho que más impactan tu día a día.",
  },

  practiceAreas: [
    {
      id: "accidentes-transito",
      title: "Accidentes de Tránsito",
      description:
        "Te asesoramos y representamos ante siniestros viales, gestionando reclamos por daños y perjuicios para que obtengas la compensación que te corresponde.",
      icon: "car",
      whatsappMessage:
        "Hola, quiero hacer una consulta sobre un accidente de tránsito.",
    },
    {
      id: "sucesiones",
      title: "Sucesiones",
      description:
        "Acompañamos todo el proceso sucesorio —desde el inicio del trámite hasta la partición de bienes— con un trato cercano en momentos difíciles.",
      icon: "scroll",
      whatsappMessage: "Hola, quiero hacer una consulta sobre una sucesión.",
    },
    {
      id: "societario-empresarial",
      title: "Sociedades, Marcas y Empresarial",
      description:
        "Constitución de sociedades, registro de marcas y asesoramiento legal integral para que tu empresa o emprendimiento crezca con respaldo jurídico sólido.",
      icon: "building",
      whatsappMessage:
        "Hola, quiero hacer una consulta sobre temas societarios/empresariales.",
    },
    {
      id: "inmobiliario",
      title: "Derecho Inmobiliario",
      description:
        "Compraventas, alquileres, boletos y escrituras: revisamos y redactamos contratos para que tu operación inmobiliaria sea segura y sin sorpresas.",
      icon: "home",
      whatsappMessage:
        "Hola, quiero hacer una consulta sobre derecho inmobiliario.",
    },
    {
      id: "familia",
      title: "Derecho de Familia",
      description:
        "Divorcios, alimentos, régimen de visitas y otras cuestiones familiares, abordadas con la sensibilidad y firmeza que cada caso necesita.",
      icon: "family",
      whatsappMessage:
        "Hola, quiero hacer una consulta sobre derecho de familia.",
    },
  ],

  about: {
    title: "Nosotros",
    description:
      "MAS Estudio Jurídico nace de la unión de Modugno & Alvarez Schiaffino, dos abogados con más de dos años de trayectoria trabajando de forma independiente antes de unir fuerzas bajo una misma identidad. Creemos en un ejercicio del derecho cercano, transparente y a la altura de cada desafío legal que enfrentan nuestros clientes. Combinamos rigor técnico con un trato humano, acompañándote de principio a fin en cada proceso.",
    partners: [
      {
        id: "modugno",
        name: "Dr. Modugno",
        role: "Socio Fundador",
        // TODO: bio placeholder, reemplazar por texto real del socio
        bio: "Abogado especializado en accidentes de tránsito y derecho societario, con más de dos años de trayectoria asesorando a particulares y empresas. Se caracteriza por un enfoque estratégico y un seguimiento cercano de cada caso hasta su resolución.",
        isBioPlaceholder: true,
        // TODO: reemplazar por foto real del socio (placeholder de banco de imágenes)
        photo: "/assets/partners/modugno.jpg",
        isPlaceholderPhoto: true,
      },
      {
        id: "alvarez-schiaffino",
        name: "Dra. Alvarez Schiaffino",
        role: "Socia Fundadora",
        // TODO: bio placeholder, reemplazar por texto real de la socia
        bio: "Abogada con amplia experiencia en sucesiones, derecho de familia e inmobiliario. Su trabajo se distingue por un trato humano y una comunicación clara, acompañando a sus clientes en los momentos más sensibles de sus procesos legales.",
        isBioPlaceholder: true,
        // TODO: reemplazar por foto real de la socia (placeholder de banco de imágenes)
        photo: "/assets/partners/alvarez-schiaffino.jpg",
        isPlaceholderPhoto: true,
      },
    ],
  },

  testimonialsSection: {
    title: "Lo que dicen nuestros clientes",
  },

  testimonials: [
    {
      id: "testimonial-1",
      // TODO: reseña placeholder, reemplazar por testimonio real (nombre ficticio)
      name: "Marcela González",
      context: "Cliente de Sucesiones",
      content:
        "Me sentí acompañado en todo momento, explicaron cada paso con mucha claridad.",
      rating: 5,
      isPlaceholder: true,
    },
    {
      id: "testimonial-2",
      // TODO: reseña placeholder, reemplazar por testimonio real (nombre ficticio)
      name: "Julián López",
      context: "Cliente de Derecho Inmobiliario",
      content: "Excelente atención y mucha rapidez para resolver mi situación.",
      rating: 5,
      isPlaceholder: true,
    },
    {
      id: "testimonial-3",
      // TODO: reseña placeholder, reemplazar por testimonio real (nombre ficticio)
      name: "Romina Fernández",
      context: "Cliente de Derecho de Familia",
      content: "Profesionalismo y calidez humana, algo difícil de encontrar.",
      rating: 5,
      isPlaceholder: true,
    },
    {
      id: "testimonial-4",
      // TODO: reseña placeholder, reemplazar por testimonio real (nombre ficticio)
      name: "Sebastián Pérez",
      context: "Cliente de Accidentes de Tránsito",
      content:
        "Resolvieron mi caso de forma ágil y siempre estuvieron disponibles para mis dudas.",
      rating: 5,
      isPlaceholder: true,
    },
  ],

  contactSection: {
    title: "¿Hablamos?",
    subtitle:
      "Contanos tu situación y te respondemos a la brevedad. Sin formularios, directo a WhatsApp.",
    ctaLabel: "Escribinos por WhatsApp",
  },

  whatsappFloatingButton: {
    message: "Hola, quiero hacer una consulta legal.",
  },

  footer: {
    fullName: "Estudio Jurídico Modugno & Alvarez Schiaffino",
    legalText:
      "© 2026 Estudio Jurídico Modugno & Alvarez Schiaffino. Todos los derechos reservados.",
  },

  seo: {
    title: "MAS | Estudio Jurídico Modugno & Alvarez Schiaffino",
    description:
      "Estudio jurídico especializado en accidentes de tránsito, sucesiones, derecho societario, inmobiliario y de familia. Asesoramiento legal serio y cercano.",
    url: "https://estudiomas.com.ar",
    ogImage: "/assets/brand/logo-mas-transparente.png",
  },
};
