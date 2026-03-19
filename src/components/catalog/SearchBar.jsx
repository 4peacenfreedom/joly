import { Search, X } from 'lucide-react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="product-search" className="sr-only">Buscar productos</label>
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-joly-taupe pointer-events-none"
        aria-hidden="true"
      />
      <input
        id="product-search"
        type="search"
        placeholder="Buscar productos o ingredientes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-9 pr-9 py-2.5 rounded-full border border-joly-gris bg-white font-montserrat text-sm text-gray-700 placeholder-joly-taupe focus:outline-none focus:border-joly-verde focus:ring-2 focus:ring-joly-verde/20 transition-all"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label="Limpiar búsqueda"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-joly-taupe hover:text-gray-700 transition-colors focus-visible:outline-2 focus-visible:outline-joly-verde rounded-full"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
