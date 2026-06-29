const SITE_NAME = "GeniusSPA"
const PHONE = "+78003023836"

const origin = () =>
  typeof window !== "undefined" ? window.location.origin : "https://geniusspa.ru"

/** Организация — выводится на всех страницах */
export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: origin(),
    logo: `${origin()}/icon.svg`,
    description:
      "Строительство саун, бань, хаммамов, бассейнов и банных комплексов под ключ по всей России.",
    telephone: PHONE,
    areaServed: "RU",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "sales",
      areaServed: "RU",
      availableLanguage: "Russian",
    },
    sameAs: ["https://t.me/geniusspa", "https://wa.me/88003023836"],
  }
}

/** Хлебные крошки */
export function breadcrumbSchema(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${origin()}${item.path}`,
    })),
  }
}

/** Услуга */
export function serviceSchema(opts: {
  name: string
  description: string
  image?: string
  path: string
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    ...(opts.image ? { image: opts.image } : {}),
    url: `${origin()}${opts.path}`,
    areaServed: { "@type": "Country", name: "Россия" },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      telephone: PHONE,
    },
  }
}

/** FAQ-разметка */
export function faqSchema(
  faqs: { q: string; a: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}