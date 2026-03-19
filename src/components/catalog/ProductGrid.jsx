import { useState } from 'react'
import { motion } from 'framer-motion'
import { PackageSearch } from 'lucide-react'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

export default function ProductGrid({ products }) {
  const [selected, setSelected] = useState(null)

  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <PackageSearch className="w-14 h-14 text-joly-gris mb-4" aria-hidden="true" />
        <h3 className="font-lato font-bold text-gray-700 text-xl mb-2">
          No encontramos productos
        </h3>
        <p className="font-montserrat text-joly-taupe text-sm max-w-xs">
          Intentá con otro término de búsqueda o seleccioná una categoría diferente.
        </p>
      </motion.div>
    )
  }

  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        role="list"
        aria-label={`${products.length} producto${products.length !== 1 ? 's' : ''} encontrado${products.length !== 1 ? 's' : ''}`}
      >
        {products.map((product, i) => (
          <div key={product.id} role="listitem">
            <ProductCard
              product={product}
              index={i}
              onClick={() => setSelected(product)}
            />
          </div>
        ))}
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  )
}
