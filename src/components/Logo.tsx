export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="oklch(0.45 0.12 250)"/>
        <path d="M14 34V14l16 10-16 10z" fill="white" opacity="0.9"/>
        <path d="M30 14v20l-8-5 8-5V14z" fill="oklch(0.68 0.18 45)"/>
        <circle cx="34" cy="24" r="3" fill="oklch(0.68 0.18 45)"/>
      </svg>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Neo Contoso
        </span>
      </div>
    </div>
  )
}
