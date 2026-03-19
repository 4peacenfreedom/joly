import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function MobileMenu({ isOpen, onClose }) {
  // Cerrar con Escape
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const handleWhatsApp = () => {
    window.open('https://wa.me/50664494173', '_blank', 'noopener,noreferrer')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Panel deslizante */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
            style={{ backgroundColor: '#464c2d' }}
          >
            {/* Header del menú */}
            <div className="flex items-center justify-between p-5 border-b border-white/20">
              <span className="font-lato font-bold text-white text-lg tracking-wide">JOLY</span>
              <button
                onClick={onClose}
                aria-label="Cerrar menú"
                className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links de navegación */}
            <nav className="flex-1 flex flex-col p-5 gap-1" aria-label="Navegación móvil">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `font-montserrat font-semibold text-base px-4 py-3 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-white ${
                      isActive
                        ? 'bg-joly-dorado text-white'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Botón WhatsApp */}
            <div className="p-5 border-t border-white/20">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-montserrat font-semibold py-3 px-4 rounded-xl hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-white"
              >
                <MessageCircle className="w-5 h-5" />
                Escribinos por WhatsApp
              </button>
              <p className="text-white/50 text-xs text-center font-montserrat mt-3">
                calidad y frescura
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
