export type Language = "en" | "fr"

export const languages = {
  en: "English",
  fr: "Français",
}

export const defaultLanguage: Language = "en"

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      gallery: "Gallery",
      services: "Services",
      production: "Production",
      careers: "Careers",
      jobOpportunities: "Job Opportunities",
      internshipProgram: "Internship Program",
      admin: "Admin",
      adminLogin: "Admin Login",
    },
    // Hero Section
    hero: {
      title: "New Kigali Designers",
      subtitle:
        "Leading clothing production company in Rwanda, masterfully blending traditional African heritage with contemporary fashion innovation",
      exploreCollections: "Explore Our Collections",
      learnStory: "Learn Our Story",
    },
    // Foundation Section
    foundation: {
      title: "Our Foundation",
      description1:
        "New Kigali Designers was founded in 1998, with the vision of being a mass producer for garments products. We have since grown our facility and technologies to serve our customers best.",
      description2:
        "We specialize in promotional materials, uniforms for institutions and we also have our own retail brands sold to the local market. New Kigali Designer is proud of the great achievements over the last 20 years in the industry.",
      description3:
        "We are looking forward to expanding and continue maintaining our position in the market. New Kigali Designers and Outfitters is in the business of Garments Manufacturing.",
      mission: "Our Mission",
      missionDescription:
        "To create exceptional clothing that celebrates African culture while meeting international quality standards, empowering local artisans and promoting sustainable fashion practices.",
      innovationFocus: "Innovation Focus",
      innovationDescription:
        "We continuously invest in cutting-edge production technology and creative design methodologies to deliver innovative, high-quality garments that meet global fashion standards.",
    },
  },
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      gallery: "Galerie",
      services: "Services",
      production: "Production",
      careers: "Carrières",
      jobOpportunities: "Opportunités d'emploi",
      internshipProgram: "Programme de stage",
      admin: "Admin",
      adminLogin: "Connexion Admin",
    },
    // Hero Section
    hero: {
      title: "New Kigali Designers",
      subtitle:
        "Société leader de production de vêtements au Rwanda, fusionnant magistralement le patrimoine africain traditionnel avec l'innovation de la mode contemporaine",
      exploreCollections: "Explorer nos collections",
      learnStory: "Découvrir notre histoire",
    },
    // Foundation Section
    foundation: {
      title: "Notre fondation",
      description1:
        "New Kigali Designers a été fondée en 1998, avec la vision d'être un producteur de masse de produits de vêtements. Nous avons depuis agrandi nos installations et nos technologies pour mieux servir nos clients.",
      description2:
        "Nous sommes spécialisés dans les matériels promotionnels, les uniformes pour les institutions et nous avons également nos propres marques de détail vendues sur le marché local. New Kigali Designer est fier de ses grands succès au cours des 20 dernières années dans l'industrie.",
      description3:
        "Nous attendons avec impatience l'expansion et le maintien de notre position sur le marché. New Kigali Designers and Outfitters est dans le secteur de la fabrication de vêtements.",
      mission: "Notre mission",
      missionDescription:
        "Créer des vêtements exceptionnels qui célèbrent la culture africaine tout en respectant les normes de qualité internationales, en autonomisant les artisans locaux et en promouvant des pratiques de mode durable.",
      innovationFocus: "Axe sur l'innovation",
      innovationDescription:
        "Nous investissons continuellement dans des technologies de production de pointe et des méthodologies de conception créatives pour livrer des vêtements innovants et de haute qualité qui répondent aux normes de la mode mondiale.",
    },
  },
}

export function getTranslation(language: Language, path: string): string {
  const keys = path.split(".")
  let value: any = translations[language]

  for (const key of keys) {
    value = value?.[key]
  }

  return typeof value === "string" ? value : path
}
