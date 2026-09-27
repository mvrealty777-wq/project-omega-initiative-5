/**
 * Сохраняет рекламные метки (utm_*, yclid) и город (city) при первом заходе,
 * чтобы они не терялись при переходах по сайту и попадали в каждую заявку.
 */
const KEY = "gs_attribution"
const TTL_MS = 30 * 24 * 60 * 60 * 1000
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "yclid", "city"] as const

export type Attribution = Partial<Record<(typeof PARAMS)[number], string>> & { landing_url?: string }

function read(): { ts: number; data: Attribution } | null {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed?.ts || Date.now() - parsed.ts > TTL_MS) return null
    return parsed
  } catch {
    return null
  }
}

/** Вызывается один раз при загрузке приложения */
export function captureAttribution(): void {
  if (typeof window === "undefined") return
  try {
    const qs = new URLSearchParams(window.location.search)
    const fresh: Attribution = {}
    PARAMS.forEach((p) => {
      const v = qs.get(p)
      if (v) fresh[p] = v.slice(0, 200)
    })
    if (Object.keys(fresh).length === 0) return
    const prev = read()?.data || {}
    // Новый рекламный переход перезаписывает метки; город сохраняем, если в новом переходе его нет
    const data: Attribution = {
      ...(fresh.utm_source || fresh.yclid ? {} : prev),
      city: fresh.city || prev.city,
      ...fresh,
      landing_url: window.location.href.slice(0, 1000),
    }
    localStorage.setItem(KEY, JSON.stringify({ ts: Date.now(), data }))
  } catch {
    /* localStorage недоступен — просто не сохраняем */
  }
}

export function getAttribution(): Attribution {
  return read()?.data || {}
}

export type CityCode = "msk" | "spb" | "sochi"

const CITY_PHRASE: Record<CityCode, string> = {
  msk: "в Москве и области",
  spb: "в Санкт-Петербурге",
  sochi: "в Сочи",
}

/** Код города из адреса или из сохранённых меток */
export function getCity(): CityCode | null {
  if (typeof window === "undefined") return null
  let c = ""
  try {
    c = new URLSearchParams(window.location.search).get("city") || getAttribution().city || ""
  } catch {
    c = ""
  }
  c = c.toLowerCase()
  return c === "msk" || c === "spb" || c === "sochi" ? c : null
}

/** «в Москве и области» и т.п. — для подстановки в заголовки; пустая строка, если город не задан */
export function cityPhrase(): string {
  const c = getCity()
  return c ? CITY_PHRASE[c] : ""
}
