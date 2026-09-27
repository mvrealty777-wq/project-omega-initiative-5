import type React from "react"
import { Link } from "react-router-dom"

interface Props {
  id: string
  /** Тёмный фон (белый текст) */
  dark?: boolean
  className?: string
  /** id формы, если чекбокс стоит вне <form> (связь через атрибут form) */
  form?: string
  /** Управляемый режим — для квизов, где кнопка без <form> */
  checked?: boolean
  onCheckedChange?: (v: boolean) => void
}

/**
 * Обязательный чекбокс согласия на обработку персональных данных (152-ФЗ, ред. с 01.09.2025).
 * Ставится ВНУТРИ <form>: атрибут required не даёт отправить форму без галочки.
 */
export function ConsentCheckbox({ id, dark, className = "", form, checked, onCheckedChange }: Props) {
  const text = dark ? "text-white/70" : "text-muted-foreground"
  const link = dark ? "text-white underline" : "text-primary underline"
  return (
    <label htmlFor={id} className={`flex items-start gap-2 cursor-pointer select-none text-[11px] leading-snug ${text} ${className}`}>
      <input
        id={id}
        type="checkbox"
        required
        form={form}
        {...(checked !== undefined ? { checked, onChange: (e: React.ChangeEvent<HTMLInputElement>) => onCheckedChange?.(e.target.checked) } : {})}
        className="mt-0.5 h-4 w-4 flex-shrink-0 accent-green-600"
      />
      <span>
        Даю{" "}
        <Link to="/consent" target="_blank" className={link}>
          согласие на обработку персональных данных
        </Link>{" "}
        и принимаю{" "}
        <Link to="/privacy" target="_blank" className={link}>
          политику конфиденциальности
        </Link>
      </span>
    </label>
  )
}
