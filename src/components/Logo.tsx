export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="oklch(0.45 0.12 250)"/>
        <path d="M16 14h16v20H16z" fill="oklch(0.68 0.18 45)" opacity="0.2"/>
        <path d="M14 16h12c2.21 0 4 1.79 4 4s-1.79 4-4 4H14V16z" fill="white"/>
        <circle cx="32" cy="32" r="4" fill="oklch(0.68 0.18 45)"/>
        <rect x="14" y="28" width="12" height="2" fill="white" opacity="0.6"/>
      </svg>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Partner
        </span>
      </div>
    </div>
  )
}
