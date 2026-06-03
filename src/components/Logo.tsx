export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md"
        style={{ background: 'linear-gradient(135deg, hsl(145 63% 36%), hsl(145 70% 24%))' }}
      >
        <span className="text-white text-lg font-black leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>G</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-lg tracking-tight text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Genius<span className="text-primary">SPA</span>
        </span>
        <span className="text-[9px] text-muted-foreground tracking-widest uppercase font-medium">Сауны & Хамамы</span>
      </div>
    </div>
  )
}