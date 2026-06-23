import { useEffect, useState, useCallback } from "react"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"
import func2url from "../../backend/func2url.json"

const LEADS_URL = (func2url as Record<string, string>)["leads-list"]
const PWD_KEY = "admin_leads_pwd"

interface Lead {
  id: number
  name: string
  phone: string
  email: string
  message: string
  source: string
  page_url: string
  messenger: string
  created_at: string
  email_sent: boolean
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default function AdminLeads() {
  const [password, setPassword] = useState<string>(() => localStorage.getItem(PWD_KEY) || "")
  const [input, setInput] = useState("")
  const [authed, setAuthed] = useState(false)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const load = useCallback(async (pwd: string) => {
    setLoading(true)
    setError("")
    try {
      const res = await fetch(LEADS_URL, { headers: { "X-Admin-Password": pwd } })
      if (res.status === 401) {
        setError("Неверный пароль")
        setAuthed(false)
        localStorage.removeItem(PWD_KEY)
        setPassword("")
        return
      }
      if (!res.ok) {
        setError("Не удалось загрузить заявки")
        return
      }
      const data = await res.json()
      setLeads(data.leads || [])
      setAuthed(true)
      localStorage.setItem(PWD_KEY, pwd)
    } catch {
      setError("Ошибка соединения")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (password) load(password)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setPassword(input)
    load(input)
  }

  const handleLogout = () => {
    localStorage.removeItem(PWD_KEY)
    setPassword("")
    setAuthed(false)
    setLeads([])
  }

  if (!authed) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-secondary/30 px-4">
        <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-xl border border-border p-7 w-full max-w-sm">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            style={{ background: "hsl(145 63% 32% / 0.1)" }}>
            <Icon name="Lock" className="w-6 h-6 text-primary" fallback="Lock" />
          </div>
          <h1 className="text-xl font-black text-foreground mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Заявки с сайта
          </h1>
          <p className="text-sm text-muted-foreground mb-5">Введите пароль администратора</p>
          <Input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Пароль"
            className="h-11 rounded-xl mb-3"
            autoFocus
          />
          {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
          <button type="submit" disabled={loading} className="btn-green w-full justify-center text-sm">
            {loading ? "Проверяем..." : "Войти"}
          </button>
        </form>
      </main>
    )
  }

  const newCount = leads.length

  return (
    <main className="min-h-screen bg-secondary/30">
      <header className="bg-white border-b border-border sticky top-0 z-10">
        <div className="container mx-auto max-w-5xl px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "hsl(145 63% 32% / 0.1)" }}>
              <Icon name="Inbox" className="w-5 h-5 text-primary" fallback="Mail" />
            </span>
            <div>
              <h1 className="text-lg font-black text-foreground leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Заявки с сайта
              </h1>
              <p className="text-xs text-muted-foreground">Всего: {newCount}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => load(password)} disabled={loading}
              className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors">
              <Icon name="RefreshCw" className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} fallback="RotateCw" />
              Обновить
            </button>
            <button onClick={handleLogout}
              className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors">
              <Icon name="LogOut" className="w-4 h-4" fallback="X" />
              Выйти
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-5xl px-4 py-6">
        {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

        {leads.length === 0 && !loading ? (
          <div className="text-center py-20">
            <Icon name="InboxIcon" className="w-14 h-14 text-muted-foreground/40 mx-auto mb-4" fallback="Inbox" />
            <p className="text-muted-foreground">Заявок пока нет</p>
          </div>
        ) : (
          <div className="space-y-3">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-white rounded-2xl border border-border shadow-sm p-5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, hsl(145 63% 36%), hsl(145 70% 26%))", fontFamily: "Montserrat, sans-serif" }}>
                      {(lead.name || "?").charAt(0).toUpperCase()}
                    </span>
                    <div>
                      <p className="font-bold text-foreground" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {lead.name || "Без имени"}
                      </p>
                      <p className="text-xs text-muted-foreground">{formatDate(lead.created_at)}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    lead.email_sent ? "text-primary bg-primary/10" : "text-amber-700 bg-amber-100"
                  }`}>
                    <Icon name={lead.email_sent ? "MailCheck" : "MailWarning"} className="w-3.5 h-3.5" fallback="Mail" />
                    {lead.email_sent ? "Отправлено на почту" : "Только в базе"}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  {lead.phone && (
                    <a href={`tel:${lead.phone}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                      <Icon name="Phone" className="w-4 h-4 text-primary flex-shrink-0" fallback="Phone" />
                      {lead.phone}
                    </a>
                  )}
                  {lead.email && (
                    <a href={`mailto:${lead.email}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                      <Icon name="Mail" className="w-4 h-4 text-primary flex-shrink-0" fallback="Mail" />
                      {lead.email}
                    </a>
                  )}
                  {lead.messenger && (
                    <span className="flex items-center gap-2 text-foreground">
                      <Icon name="MessageCircle" className="w-4 h-4 text-primary flex-shrink-0" fallback="MessageCircle" />
                      {lead.messenger}
                    </span>
                  )}
                  {lead.source && (
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Tag" className="w-4 h-4 text-primary flex-shrink-0" fallback="Tag" />
                      {lead.source}
                    </span>
                  )}
                </div>

                {lead.message && (
                  <p className="mt-3 text-sm text-muted-foreground bg-secondary/50 rounded-xl p-3 whitespace-pre-line">
                    {lead.message}
                  </p>
                )}

                {lead.page_url && (
                  <a href={lead.page_url} target="_blank" rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="ExternalLink" className="w-3.5 h-3.5" fallback="Link" />
                    Страница заявки
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
