/**
 * Невидимая Яндекс SmartCaptcha для всех форм.
 * Ключ клиента — публичный, вставить в SMARTCAPTCHA_CLIENT_KEY (консоль Yandex Cloud → SmartCaptcha).
 * Пока ключ пустой, капча выключена и формы работают как раньше.
 */
export const SMARTCAPTCHA_CLIENT_KEY = ""

declare global {
  interface Window {
    smartCaptcha?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => number
      execute: (id?: number) => void
      reset: (id?: number) => void
    }
  }
}

let loading: Promise<void> | null = null
let widgetId: number | null = null
let resolver: ((t: string) => void) | null = null

function load(): Promise<void> {
  if (loading) return loading
  loading = new Promise((resolve, reject) => {
    const s = document.createElement("script")
    s.src = "https://smartcaptcha.yandexcloud.net/captcha.js?render=onload"
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error("captcha load failed"))
    document.head.appendChild(s)
  })
  return loading
}

/** Возвращает токен капчи или "" (если ключ не задан или капча не загрузилась). */
export async function getCaptchaToken(): Promise<string> {
  if (!SMARTCAPTCHA_CLIENT_KEY || typeof window === "undefined") return ""
  try {
    await load()
    if (!window.smartCaptcha) return ""
    if (widgetId === null) {
      const el = document.createElement("div")
      el.style.display = "none"
      document.body.appendChild(el)
      widgetId = window.smartCaptcha.render(el, {
        sitekey: SMARTCAPTCHA_CLIENT_KEY,
        invisible: true,
        hideShield: true,
        callback: (token: string) => { resolver?.(token); resolver = null },
      })
    }
    const token = await new Promise<string>((resolve) => {
      resolver = resolve
      window.smartCaptcha!.execute(widgetId!)
      setTimeout(() => { if (resolver) { resolver = null; resolve("") } }, 60000)
    })
    window.smartCaptcha.reset(widgetId!)
    return token
  } catch {
    return ""
  }
}
