import func2url from "../../backend/func2url.json"
import { getAttribution } from "./attribution"

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
 * Отправляет цель клика (телефон, мессенджеры и т.п.) в Яндекс.Метрику.
 * Используется на href="tel:"/wa.me/t.me/max.ru — вызывать в onClick, ссылка при этом продолжает работать штатно.
 */
export function trackClick(goalName: string) {
  reachGoal(goalName)
  // Уведомление в МАКС/Telegram о клике по телефону или мессенджеру
  if (goalName === "phone_click" || goalName.startsWith("messenger_")) {
    try {
      fetch(LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: goalName, ...getAttribution(), page_url: window.location.href }),
        keepalive: true,
      }).catch(() => {})
    } catch {
      /* не мешаем переходу по ссылке */
    }
  }
}

/**
 * Проверяет, что в телефоне есть хотя бы 10 цифр (защита от пустых и мусорных заявок).
 */
export function isValidPhone(phone: string | undefined | null): boolean {
  const digits = (phone || "").replace(/\D/g, "")
  return digits.length >= 10
}

/**
 * Цели Яндекс.Метрики по источнику формы.
 * Порядок важен: первое совпадение побеждает. Список всех целей — в docs/metrika-goals.md.
 */
const GOAL_RULES: [RegExp, string][] = [
  [/Квиз/i, "quiz_lead"],
  [/Шапка/i, "header_callback"],
  [/Футер/i, "footer_callback"],
  [/Финальный CTA/i, "final_cta_lead"],
  [/Первый экран/i, "hero_lead"],
  [/Заявка с направления/i, "service_hero_lead"],
  [/Портфолио/i, "portfolio_lead"],
  [/Цены|Прайс|Запросить расч/i, "pricing_lead"],
  [/замерщик|Замер/i, "surveyor_lead"],
  [/3D/i, "project3d_lead"],
  [/Оборудован|Бренды|Схема оборудования/i, "equipment_lead"],
  [/Контакт/i, "contact_lead"],
  [/Готовы реализовать|Процесс|Под ключ/i, "section_lead"],
  [/Перезвоните/i, "callback_lead"],
]

function getGoalName(source: string): string {
  for (const [re, goal] of GOAL_RULES) if (re.test(source)) return goal
  return "form_lead"
}

/** Микро-цели (открыл форму, начал квиз) — для обучения Директа, пока заявок мало */
const microSent = new Set<string>()
export function trackMicro(goalName: "form_open" | "quiz_start" | "quiz_contacts") {
  // quiz_start и quiz_contacts — не чаще раза за визит, form_open — каждый раз
  if (goalName !== "form_open") {
    if (microSent.has(goalName)) return
    microSent.add(goalName)
  }
  reachGoal(goalName)
}

/**
 * Отправляет заявку с любой формы на backend (БД + уведомление в Telegram).
 * К заявке добавляются рекламные метки (utm_*, yclid) и город из attribution.ts.
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
        ...getAttribution(),
        page_url: typeof window !== "undefined" ? window.location.href : "",
      }),
    })
    return res.ok
  } catch {
    return false
  }
}