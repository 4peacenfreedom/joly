import { motion } from 'framer-motion'
import { Package, Scissors } from 'lucide-react'
import { categories } from '../../data/categories'
import CategoryBadge from '../ui/CategoryBadge'

export default function ProductCard({ product, onClick, index = 0 }) {
  const category = categories.find((c) => c.slug === product.category)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalle de ${product.name}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-joly-gris/50 border-l-4 border-l-joly-dorado cursor-pointer hover:shadow-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-joly-verde flex flex-col sm:flex-row"
    >
      {/* Imagen */}
      <div className="relative sm:w-44 md:w-48 shrink-0 overflow-hidden bg-joly-fondo aspect-square sm:aspect-auto">
        <img
          src={product.image}
          alt={`${product.name} — ${product.shortDescription}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badge categoría sobre imagen en mobile */}
        <div className="absolute top-2 left-2 sm:hidden">
          <CategoryBadge name={category?.name ?? product.category} />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Badge desktop */}
        <div className="hidden sm:block">
          <CategoryBadge name={category?.name ?? product.category} />
        </div>

        <h3 className="font-lato font-bold text-joly-verde text-lg leading-tight group-hover:text-joly-dorado transition-colors">
          {product.name}
        </h3>

        <p className="font-montserrat text-gray-600 text-sm leading-relaxed line-clamp-2 flex-1">
          {product.shortDescription}
        </p>

        <div className="border-t border-joly-gris/50 pt-2 flex flex-col gap-1 mt-auto">
          {product.presentations && (
            <div className="flex items-center gap-1.5 text-xs font-montserrat text-joly-taupe">
              <Package className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{product.presentations}</span>
            </div>
          )}
          {product.cutTypes && product.cutTypes.length > 0 && (
            <div className="flex items-start gap-1.5 text-xs font-montserrat text-joly-taupe">
              <Scissors className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
              <span className="line-clamp-1">{product.cutTypes.join(' · ')}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end mt-1">
          <span className="text-xs font-montserrat font-semibold text-joly-dorado group-hover:underline">
            Ver detalle →
          </span>
        </div>
      </div>
    </motion.article>
  )
}
