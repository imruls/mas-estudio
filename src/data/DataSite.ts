import alvarezSchiaffinoPhoto from "../assets/partners/alvarez-schiaffino.jpg";
import modugnoPhoto from "../assets/partners/modugno.jpg";

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
  content: string;
  rating: number; // 1-5
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: ImageMetadata; // importada desde src/assets para que <Image> la optimice
}

export interface SiteData {
  brand: {
    shortName: string;
    fullName: string;
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
    ctaEmailLabel: string;
  };
  footer: {
    legalText: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage: string; // ruta en /public: la comparten los scrapers sociales
  };
}

export const siteData: SiteData = {
  brand: {
    shortName: "MAS",
    fullName: "Estudio Jurídico Modugno & Alvarez Schiaffino",
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
    title: "Claridad para decidir. Estrategia para avanzar.",
    subtitle:
      "Cada caso requiere entender primero la situación, conocer las alternativas y evaluar las posibilidades reales. En Estudio jurídico MAS brindamos asesoramiento jurídico estratégico, claro y personalizado, para que nuestros clientes puedan tomar decisiones informadas y avanzar con seguridad.",
    ctaPrimary: "Hacé tu consulta por WhatsApp",
    ctaSecondary: "Conocé nuestras áreas de práctica",
  },

  practiceAreasSection: {
    title: "Áreas prácticas",
    subtitle:
      "Un equipo con experiencia en las áreas del derecho que más impactan tu día a día.",
  },

  practiceAreas: [
    {
      id: "accidentes-transito",
      title: "Accidentes de Tránsito",
      description:
        "Abordamos integralmente los reclamos derivados de accidentes de tránsito, tanto por daños materiales como por lesiones. Gestionamos reclamos ante compañías de seguros, negociaciones extrajudiciales y, cuando resulta necesario, la instancia judicial.",
      icon: "car",
      whatsappMessage:
        "Hola, quiero hacer una consulta sobre un accidente de tránsito.",
    },
    {
      id: "sucesiones",
      title: "Sucesiones",
      description:
        "Analizamos cada situación familiar y patrimonial para orientar el trámite de manera clara y ordenada. Brindamos asesoramiento y acompañamiento durante todo el proceso sucesorio, desde su inicio hasta la inscripción y adjudicación de los bienes.",
      icon: "scroll",
      whatsappMessage: "Hola, quiero hacer una consulta sobre una sucesión.",
    },
    {
      id: "societario-empresarial",
      title: "Sociedades, Marcas y Empresarial",
      description:
        "Asesoramos a emprendedores, empresas y profesionales en las distintas etapas de su actividad. Entendemos que cada negocio necesita un marco legal que acompañe su crecimiento. Brindamos asistencia en materia societaria, contratos, marcas y cuestiones jurídicas vinculadas con el desarrollo y protección de la actividad empresarial.",
      icon: "building",
      whatsappMessage:
        "Hola, quiero hacer una consulta sobre temas societarios/empresariales.",
    },
    {
      id: "inmobiliario",
      title: "Derecho Inmobiliario",
      description:
        "Asesoramos en operaciones y conflictos vinculados con bienes inmuebles. Verificamos la documentación, antecedentes y situación jurídica del inmueble para detectar posibles contingencias y brindar seguridad antes de avanzar. También intervenimos en cuestiones relacionadas con la propiedad y su regularización.",
      icon: "home",
      whatsappMessage:
        "Hola, quiero hacer una consulta sobre derecho inmobiliario.",
    },
    {
      id: "familia",
      title: "Derecho de Familia",
      description:
        "Entendemos que las cuestiones de la vida privada son complejas y delicadas. Escuchamos y asesoramos con el cuidado y calidez humana que requieren las cuestiones de familia. Intervenimos en procesos de divorcio, alimentos, cuidado personal, régimen de comunicación, filiación y demás cuestiones vinculadas a las relaciones familiares, procurando soluciones jurídicas adecuadas a cada familia.",
      icon: "family",
      whatsappMessage:
        "Hola, quiero hacer una consulta sobre derecho de familia.",
    },
  ],

  about: {
    title: "Nosotros",
    description:
      "MAS Estudio es un estudio jurídico orientado a brindar asesoramiento profesional, estratégico y personalizado. Entendemos que detrás de cada consulta jurídica existe una situación concreta que necesita ser comprendida antes de ser abordada. Por eso, analizamos cada caso, explicamos con claridad las alternativas y sus implicancias, y acompañamos a nuestros clientes en la toma de decisiones. Trabajamos desde el conocimiento jurídico, la cercanía y la transparencia, sin generar falsas expectativas y procurando que cada persona comprenda realmente su situación y las posibilidades con las que cuenta.",
    partners: [
      {
        id: "modugno",
        name: "Dr. Maximiliano Modugno",
        role: "Abogado (UBA) — C.A.S.M.",
        bio: "Abogado graduado de la UBA, con posgrado en Derecho de Seguros y actualmente cursando un posgrado en Derecho Penal. Desde 2019 combina experiencia en estudios jurídicos y compañías de seguros. Al frente de su propio estudio, se especializa en Derecho de Seguros, responsabilidad civil y accidentes de tránsito, con un enfoque estratégico y personalizado.",
        photo: modugnoPhoto,
      },
      {
        id: "alvarez-schiaffino",
        name: "Dra. Melissa Alvarez Schiaffino",
        role: "Abogada — C.P.A.C.F. | Universidad de Buenos Aires",
        bio: "Abogada graduada de la UBA con posgrado en Asesoramiento Jurídico de Empresas. Desde 2017 combina experiencia en escribanías, estudios jurídicos y asesoría legal interna de empresas. Ejerce de forma independiente en Derecho Civil, Inmobiliario, Empresarial y Contratos, asesorando a escribanías, emprendedores y profesionales con un enfoque claro, estratégico y cercano.",
        photo: alvarezSchiaffinoPhoto,
      },
    ],
  },

  testimonialsSection: {
    title: "Lo que dicen nuestros clientes",
  },

  testimonials: [
    {
      id: "testimonial-1",
      name: "Lucas Fernández",
      content:
        "Excelente atención y acompañamiento durante todo el reclamo. Me explicaron cada paso y lograron resolver mi caso de manera rápida y profesional.",
      rating: 5,
    },
    {
      id: "testimonial-2",
      name: "Mariana Hollman",
      content:
        "Después del fallecimiento de nuestra mamá no sabíamos cómo resolver la situación laboral con la empresa donde trabaja nuestra mamá. En MAS Estudio nos asesoraron respecto a la liquidación que nos correspondía, nos ayudaron con todo el trámite y nos acompañaron hasta que pudimos cobrar. Estamos muy agradecidas por la atención y por la tranquilidad que nos dieron durante todo el proceso.",
      rating: 5,
    },
    {
      id: "testimonial-3",
      name: "Sofía Martínez",
      content:
        "Mi papá era el titular del vehículo y, después de su fallecimiento, tuve un accidente con el auto que estaba asegurado. No sabía cómo hacer para poder cobrar el seguro porque el vehículo seguía a nombre de mi papá. En MAS Estudio me asesoraron y se ocuparon de la sucesión y de toda la gestión necesaria para poder avanzar con el reclamo ante la compañía. Me acompañaron durante todo el proceso y finalmente pude resolver la situación.",
      rating: 5,
    },
    {
      id: "testimonial-4",
      name: "Martín Di Martino",
      content:
        "La verdad que estoy muy conforme. Me fueron explicando todo desde el principio y no tuve que preocuparme por hacer trámites ni hablar con la compañía.",
      rating: 5,
    },
    {
      id: "testimonial-5",
      name: "Florencia Kraft",
      content:
        "Tenía los papeles de mi casa desordenados y varios trámites pendientes desde hacía años. En MAS Estudio revisaron toda la documentación y me ayudaron a poner todo en regla. Me explicaron cada paso y pude resolver algo que venía postergando hacía muchísimo tiempo.",
      rating: 5,
    },
    {
      id: "testimonial-6",
      name: "Dúo Studio Digital",
      content:
        "Queríamos agradecerte muchísimo por el trabajo que hiciste con el contrato. Lo revisamos juntas y la verdad es que quedó excelente, así que estamos muy contentas con el resultado. Ahora sí vamos a empezar a enviárselo a todos nuestros clientes.",
      rating: 5,
    },
  ],

  contactSection: {
    title: "¿Te quedaron dudas?\nComunicate con nosotros",
    subtitle: "Contanos tu situación y te respondemos a la brevedad.",
    ctaLabel: "WhatsApp",
    ctaEmailLabel: "Email",
  },

  footer: {
    legalText:
      "© 2026 Estudio Jurídico Modugno & Alvarez Schiaffino. Todos los derechos reservados.",
  },

  seo: {
    title: "MAS | Estudio Jurídico Modugno & Alvarez Schiaffino",
    description:
      "Estudio jurídico especializado en accidentes de tránsito, sucesiones, derecho societario, inmobiliario y de familia. Asesoramiento legal serio y cercano.",
    ogImage: "/assets/brand/logo-mas-transparente.png",
  },
};
