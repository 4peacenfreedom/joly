export default function BrandDivider({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 w-full ${className}`} aria-hidden="true">
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #f0a047)' }} />
      <div className="flex gap-1.5 items-center">
        <span className="w-3 h-3 rounded-full bg-joly-dorado opacity-90" />
        <span className="w-2 h-2 rounded-full bg-joly-dorado opacity-60" />
        <span className="w-1.5 h-1.5 rounded-full bg-joly-dorado opacity-40" />
        <span className="w-1 h-1 rounded-full bg-joly-dorado opacity-20" />
      </div>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #f0a047)' }} />
    </div>
  )
}
