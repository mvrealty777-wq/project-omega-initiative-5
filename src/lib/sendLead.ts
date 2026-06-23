import func2url from "../../backend/func2url.json"

const LEAD_URL = (func2url as Record<string, string>).lead

export interface LeadData {
  name?: string
  phone?: string
  email?: string
  message?: string
  /** Название формы, откуда пришла заявка */
  source: string
  /** Предпочтительный мессенджер для связи */
  messenger?: string
}

/**
 * Отправляет заявку с любой формы на backend (почта + сохранение в БД).
 * Возвращает true при успехе.
 */
export async function sendLead(data: LeadData): Promise<boolean> {
  try {
    const res = await fetch(LEAD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        page_url: typeof window !== "undefined" ? window.location.href : "",
      }),
    })
    return res.ok
  } catch {
    return false
  }
}
