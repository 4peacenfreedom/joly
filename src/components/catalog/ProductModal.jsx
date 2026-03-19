import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Package, Scissors, Check } from 'lucide-react'
import { categories } from '../../data/categories'
import CategoryBadge from '../ui/CategoryBadge'
import WhatsAppIcon from '../ui/WhatsAppIcon'

export default function ProductModal({ product, onClose }) {
  const closeButtonRef = useRef(null)
  const category = product ? categories.find((c) => c.slug === product.category) : null

  // Focus trap y Escape
  useEffect(() => {
    if (!product) return

    closeButtonRef.current?.focus()

    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  const handleWhatsApp = () => {
    const message = `Hola JOLY 👋, me interesa conocer más sobre *${product.name}*. ¿Podrían darme información sobre precios y disponibilidad?`
    const url = `https://wa.me/50664494173?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-label={`Detalle de ${product.name}`}
              className="relative bg-white w-full max-w-4xl max-h-[92vh] sm:max-h-[85vh] rounded-t-3xl sm:rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Botón cerrar */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Cerrar"
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full shadow text-gray-500 hover:text-gray-800 hover:shadow-md transition-all focus-visible:outline-2 focus-visible:outline-joly-verde"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Badge JOLY arriba derecha (desktop) */}
              <div className="absolute top-4 left-4 z-10 hidden sm:block">
                <span className="font-lato font-black text-joly-verde text-sm tracking-widest uppercase">JOLY</span>
              </div>

              {/* Contenido */}
              <div className="flex flex-col sm:flex-row overflow-auto flex-1">
                {/* Imagen */}
                <div className="sm:w-5/12 shrink-0 bg-joly-fondo">
                  <div className="aspect-square sm:aspect-auto sm:h-full w-full">
                    <img
                      src={product.image}
                      alt={`${product.name} — ${product.shortDescription}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col gap-4">
                  <div>
                    <h2 className="font-lato font-black text-joly-verde text-2xl sm:text-3xl leading-tight mb-2">
                      {product.name}
                    </h2>
                    <CategoryBadge name={category?.name ?? product.category} />
                  </div>

                  {/* Descripción */}
                  <div>
                    <h3 className="font-montserrat font-semibold text-gray-500 text-xs uppercase tracking-wider mb-1.5">
                      Descripción
                    </h3>
                    <p className="font-montserrat text-gray-700 text-sm sm:text-base leading-relaxed">
                      {product.fullDescription}
                    </p>
                  </div>

                  {/* Ingredientes */}
                  {product.ingredients && product.ingredients.length > 0 && (
                    <div>
                      <h3 className="font-montserrat font-semibold text-gray-500 text-xs uppercase tracking-wider mb-2">
                        Ingredientes
                      </h3>
                      <ul className="flex flex-wrap gap-2">
                        {product.ingredients.map((ing) => (
                          <li
                            key={ing}
                            className="flex items-center gap-1.5 bg-joly-fondo border border-joly-gris px-3 py-1 rounded-full text-sm font-montserrat text-gray-700"
                          >
                            <Check className="w-3 h-3 text-joly-verde shrink-0" aria-hidden="true" />
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Cortes */}
                  {product.cutTypes && product.cutTypes.length > 0 && (
                    <div>
                      <h3 className="font-montserrat font-semibold text-gray-500 text-xs uppercase tracking-wider mb-2">
                        <Scissors className="w-3 h-3 inline mr-1" aria-hidden="true" />
                        Cortes disponibles
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {product.cutTypes.map((cut) => (
                          <span
                            key={cut}
                            className="bg-joly-gris/50 text-joly-verde font-montserrat font-semibold text-xs px-3 py-1 rounded-full"
                          >
                            {cut}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Presentaciones */}
                  {product.presentations && (
                    <div className="flex items-start gap-2">
                      <Package className="w-4 h-4 text-joly-dorado mt-0.5 shrink-0" aria-hidden="true" />
                      <div>
                        <span className="font-montserrat font-semibold text-gray-500 text-xs uppercase tracking-wider block mb-0.5">
                          Presentaciones
                        </span>
                        <span className="font-montserrat text-gray-700 text-sm">{product.presentations}</span>
                      </div>
                    </div>
                  )}

                  {/* CTA WhatsApp */}
                  <div className="mt-auto pt-2">
                    <button
                      onClick={handleWhatsApp}
                      className="w-full flex items-center justify-center gap-2 font-montserrat font-bold text-white py-3.5 px-6 rounded-xl hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-[#25D366] text-base"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      Consultar por WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
