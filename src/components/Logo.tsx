export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <span className="text-2xl text-primary">✦</span>
        <span className="text-xl font-semibold tracking-widest uppercase ml-1" style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.15em' }}>Genius<span className="text-primary">SPA</span></span>
      </div>
    </div>
  )
}
