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
  /** Дополнительный комментарий / ответы квиза */
  comment?: string
}

/**
 * Отправляет цель в Яндекс.Метрику
 */
declare global {
  interface Window { ym?: (id: number, action: string, goal: string) => void }
}

function reachGoal(goalName: string) {
  if (typeof window !== "undefined" && window.ym) {
    window.ym(110154500, "reachGoal", goalName)
  }
}

/**
 * Определяет название цели по источнику формы
 */
function getGoalName(source: string): string {
  if (source.includes("Квиз")) return "quiz_lead"
  if (source.includes("Шапка") || source.includes("шапка")) return "header_callback"
  if (source.includes("Футер") || source.includes("футер")) return "footer_callback"
  if (source.includes("Первый экран")) return "hero_lead"
  if (source.includes("Портфолио")) return "portfolio_lead"
  if (source.includes("Цены") || source.includes("Прайс")) return "pricing_lead"
  if (source.includes("замерщик") || source.includes("Замер")) return "surveyor_lead"
  if (source.includes("Контакт")) return "contact_lead"
  return "form_lead"
}

/**
 * Отправляет заявку с любой формы на backend (почта + сохранение в БД).
 * Автоматически фиксирует цель в Яндекс.Метрике.
 * Возвращает true при успехе.
 */
export async function sendLead(data: LeadData): Promise<boolean> {
  // Цель в Метрику — сразу, не ждём ответа сервера
  reachGoal(getGoalName(data.source))
  reachGoal("any_lead")

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