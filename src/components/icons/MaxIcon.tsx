// Иконка мессенджера МАКС (стилизованная буква M в круге)
export function MaxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M5 17.5V7.5c0-.6.74-.87 1.12-.4L11 13l4.88-5.9c.38-.47 1.12-.2 1.12.4v10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
