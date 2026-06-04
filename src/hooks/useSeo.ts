import { useEffect } from "react"

interface SeoOptions {
  title: string
  description: string
  image?: string
  keywords?: string
  /** Массив JSON-LD объектов (Schema.org) */
  jsonLd?: Record<string, unknown>[]
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", "canonical")
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

function setJsonLd(data: Record<string, unknown>[]) {
  // Удаляем ранее добавленные нашим хуком блоки
  document.head
    .querySelectorAll('script[data-seo-jsonld="true"]')
    .forEach((n) => n.remove())
  data.forEach((obj) => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.setAttribute("data-seo-jsonld", "true")
    script.text = JSON.stringify(obj)
    document.head.appendChild(script)
  })
}

/** Устанавливает уникальные title, meta-теги, canonical и Schema.org разметку */
export function useSeo({ title, description, image, keywords, jsonLd }: SeoOptions) {
  useEffect(() => {
    const url = window.location.href.split("#")[0]
    document.title = title
    setMeta("name", "description", description)
    if (keywords) setMeta("name", "keywords", keywords)
    setMeta("name", "robots", "index, follow")

    // Open Graph
    setMeta("property", "og:title", title)
    setMeta("property", "og:description", description)
    setMeta("property", "og:type", "website")
    setMeta("property", "og:url", url)
    setMeta("property", "og:site_name", "GeniusSPA")
    setMeta("property", "og:locale", "ru_RU")
    if (image) setMeta("property", "og:image", image)

    // Twitter
    setMeta("name", "twitter:card", image ? "summary_large_image" : "summary")
    setMeta("name", "twitter:title", title)
    setMeta("name", "twitter:description", description)
    if (image) setMeta("name", "twitter:image", image)

    setCanonical(url)

    if (jsonLd && jsonLd.length) {
      setJsonLd(jsonLd)
    }

    return () => {
      document.head
        .querySelectorAll('script[data-seo-jsonld="true"]')
        .forEach((n) => n.remove())
    }
  }, [title, description, image, keywords, jsonLd])
}
