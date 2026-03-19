export default function CategoryBadge({ name, className = '' }) {
  return (
    <span className={`category-badge ${className}`}>
      {name}
    </span>
  )
}
