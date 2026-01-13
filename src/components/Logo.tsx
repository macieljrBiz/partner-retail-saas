import logoImage from './Logo.png'

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={logoImage} alt="Neo Contoso Logo" width="48" height="48" />
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Neo Contoso
        </span>
      </div>
    </div>
  )
}
