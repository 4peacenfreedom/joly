import { useRef } from 'react'
import { categories } from '../../data/categories'

export default function CategoryFilter({ activeCategory, onCategoryChange, counts }) {
  const scrollRef = useRef(null)

  const all = { id: 0, name: 'Todos', slug: 'all', icon: '✨' }
  const items = [all, ...categories]

  return (
    <div
      ref={scrollRef}
      className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap"
      role="group"
      aria-label="Filtrar por categoría"
    >
      {items.map((cat) => {
        const isActive = activeCategory === cat.slug
        const count = cat.slug === 'all'
          ? Object.values(counts || {}).reduce((a, b) => a + b, 0)
          : (counts?.[cat.slug] ?? 0)

        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.slug)}
            aria-pressed={isActive}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-montserrat font-semibold whitespace-nowrap transition-all duration-200 shrink-0 focus-visible:outline-2 focus-visible:outline-joly-verde ${
              isActive
                ? 'bg-joly-verde text-white shadow-md'
                : 'bg-white text-gray-600 border border-joly-gris hover:border-joly-verde hover:text-joly-verde'
            }`}
          >
            <span aria-hidden="true">{cat.icon}</span>
            {cat.name}
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                isActive ? 'bg-white/20 text-white' : 'bg-joly-gris text-gray-600'
              }`}
            >
              {count}
            </span>
          </button>
        )
      })}
    </div>
  )
}
