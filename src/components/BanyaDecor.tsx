// Атмосферный банный декор: полупрозрачные венички, кадушки и облачка пара.
// Рисуется фоном страницы под контентом (pointer-events: none).

function Venik({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 130" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* ручка */}
      <rect x="36" y="70" width="8" height="55" rx="4" fill="hsl(30 45% 45%)" />
      <rect x="34" y="80" width="12" height="4" rx="2" fill="hsl(30 50% 35%)" />
      <rect x="34" y="92" width="12" height="4" rx="2" fill="hsl(30 50% 35%)" />
      {/* листва */}
      <g fill="hsl(145 50% 38%)">
        <ellipse cx="40" cy="38" rx="30" ry="40" />
      </g>
      <g fill="hsl(145 55% 45%)">
        <ellipse cx="28" cy="34" rx="12" ry="20" transform="rotate(-25 28 34)" />
        <ellipse cx="52" cy="34" rx="12" ry="20" transform="rotate(25 52 34)" />
        <ellipse cx="40" cy="24" rx="11" ry="22" />
      </g>
      <g fill="hsl(145 45% 32%)" opacity="0.6">
        <ellipse cx="33" cy="50" rx="9" ry="16" transform="rotate(-15 33 50)" />
        <ellipse cx="47" cy="50" rx="9" ry="16" transform="rotate(15 47 50)" />
      </g>
    </svg>
  )
}

function Kadushka({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 110 90" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* тело кадушки */}
      <path d="M14 22 L96 22 L88 84 Q55 92 22 84 Z" fill="hsl(32 48% 58%)" />
      {/* клёпки */}
      <g stroke="hsl(32 40% 42%)" strokeWidth="2" opacity="0.5">
        <line x1="34" y1="24" x2="30" y2="84" />
        <line x1="55" y1="24" x2="55" y2="88" />
        <line x1="76" y1="24" x2="80" y2="84" />
      </g>
      {/* обручи */}
      <rect x="12" y="30" width="86" height="7" rx="3" fill="hsl(32 35% 38%)" />
      <rect x="16" y="68" width="78" height="7" rx="3" fill="hsl(32 35% 38%)" />
      {/* верхний ободок */}
      <ellipse cx="55" cy="22" rx="42" ry="9" fill="hsl(32 52% 64%)" />
      <ellipse cx="55" cy="22" rx="33" ry="6" fill="hsl(32 30% 30%)" />
      {/* ковшик */}
      <ellipse cx="55" cy="20" rx="14" ry="4" fill="hsl(35 45% 50%)" />
      <rect x="66" y="6" width="6" height="20" rx="3" fill="hsl(30 45% 45%)" transform="rotate(20 66 6)" />
    </svg>
  )
}

export function BanyaDecor() {
  return (
    <div className="banya-decor" aria-hidden="true">
      {/* Облачка пара */}
      <div className="steam-cloud" style={{ top: "8%", left: "6%", width: 160, height: 160, animationDelay: "0s" }} />
      <div className="steam-cloud" style={{ top: "30%", right: "4%", width: 220, height: 220, animationDelay: "3s" }} />
      <div className="steam-cloud" style={{ top: "55%", left: "10%", width: 180, height: 180, animationDelay: "6s" }} />
      <div className="steam-cloud" style={{ top: "78%", right: "12%", width: 200, height: 200, animationDelay: "2s" }} />
      <div className="steam-cloud" style={{ top: "92%", left: "40%", width: 240, height: 240, animationDelay: "5s" }} />

      {/* Венички */}
      <Venik className="banya-sway" style={{ top: "12%", right: "7%", width: 90, opacity: 0.16 }} />
      <Venik className="banya-sway" style={{ top: "44%", left: "3%", width: 110, opacity: 0.14, animationDelay: "2s" }} />
      <Venik className="banya-sway" style={{ top: "70%", right: "5%", width: 80, opacity: 0.16, animationDelay: "4s" }} />
      <Venik className="banya-sway" style={{ top: "88%", left: "8%", width: 100, opacity: 0.13, animationDelay: "1s" }} />

      {/* Кадушки */}
      <Kadushka className="banya-float" style={{ top: "22%", left: "5%", width: 120, opacity: 0.15 }} />
      <Kadushka className="banya-float" style={{ top: "60%", right: "8%", width: 140, opacity: 0.14, animationDelay: "3s" }} />
      <Kadushka className="banya-float" style={{ top: "84%", right: "30%", width: 110, opacity: 0.13, animationDelay: "5s" }} />
    </div>
  )
}
