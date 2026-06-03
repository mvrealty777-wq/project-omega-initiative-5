// Лавровый венок — обрамляет цифры статистики (400+, 10+, 5 лет)
export function Venok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Левая ветвь */}
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="currentColor">
        <path d="M40 110 C20 80 18 45 38 16" strokeWidth="3" fill="none" />
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const t = i / 5
          const x = 40 - t * 4 - Math.sin(t * 3) * 10
          const y = 108 - t * 90
          return (
            <g key={`l${i}`}>
              <ellipse cx={x - 9} cy={y} rx="7" ry="3.4" transform={`rotate(${-40 - i * 6} ${x - 9} ${y})`} />
              <ellipse cx={x + 7} cy={y - 3} rx="6.5" ry="3.2" transform={`rotate(${30 - i * 4} ${x + 7} ${y - 3})`} />
            </g>
          )
        })}
      </g>
      {/* Правая ветвь (зеркало) */}
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="currentColor" transform="translate(200,0) scale(-1,1)">
        <path d="M40 110 C20 80 18 45 38 16" strokeWidth="3" fill="none" />
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const t = i / 5
          const x = 40 - t * 4 - Math.sin(t * 3) * 10
          const y = 108 - t * 90
          return (
            <g key={`r${i}`}>
              <ellipse cx={x - 9} cy={y} rx="7" ry="3.4" transform={`rotate(${-40 - i * 6} ${x - 9} ${y})`} />
              <ellipse cx={x + 7} cy={y - 3} rx="6.5" ry="3.2" transform={`rotate(${30 - i * 4} ${x + 7} ${y - 3})`} />
            </g>
          )
        })}
      </g>
      {/* Звезда сверху */}
      <path d="M100 6 l3 7 7 1 -5 5 1.5 7 -6.5 -3.5 -6.5 3.5 1.5 -7 -5 -5 7 -1 z" fill="currentColor" />
    </svg>
  )
}
