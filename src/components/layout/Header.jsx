import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import MobileMenu from './MobileMenu'
import logoSrc from '../../assets/logo.svg'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    window.open('https://wa.me/50664494173', '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm'
            : 'bg-white/95'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-joly-verde rounded-sm"
              aria-label="JOLY - Inicio"
            >
              <img
                src={logoSrc}
                alt="JOLY Productos Frescos"
                className="h-9 md:h-10 w-auto"
              />
            </Link>

            {/* Navegación desktop */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `font-montserrat font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-joly-verde ${
                      isActive
                        ? 'bg-joly-verde text-white'
                        : 'text-gray-700 hover:text-joly-verde hover:bg-joly-fondo'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* CTA desktop + hamburger mobile */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleWhatsApp}
                className="hidden md:flex items-center gap-2 bg-joly-dorado text-white font-montserrat font-semibold text-sm px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors focus-visible:outline-2 focus-visible:outline-joly-dorado"
              >
                <MessageCircle className="w-4 h-4" />
                Escribinos
              </button>

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menú de navegación"
                aria-expanded={menuOpen}
                className="md:hidden p-2 rounded-xl text-joly-verde hover:bg-joly-fondo transition-colors focus-visible:outline-2 focus-visible:outline-joly-verde"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Espacio para el header fijo */}
      <div className="h-16 md:h-18" aria-hidden="true" />

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
