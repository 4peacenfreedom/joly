import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail } from 'lucide-react'
import logoClaro from '../../assets/logo_claro.svg'
import BrandDivider from '../ui/BrandDivider'
import WhatsAppIcon from '../ui/WhatsAppIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-joly-verde text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Columna 1 — Marca */}
          <div>
            <img
              src={logoClaro}
              alt="JOLY Productos Frescos"
              className="h-10 w-auto mb-4"
            />
            <p className="font-montserrat text-white/70 text-sm leading-relaxed">
              Empresa costarricense dedicada a los productos frescos precortados,
              ensaladas preparadas y comida lista. Calidad y frescura en cada entrega.
            </p>
            <p className="font-montserrat italic text-joly-dorado text-sm mt-3">
              calidad y frescura
            </p>
          </div>

          {/* Columna 2 — Navegación */}
          <div>
            <h3 className="font-lato font-bold text-white text-base uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <nav aria-label="Navegación del pie de página">
              <ul className="flex flex-col gap-2">
                {[
                  { to: '/', label: 'Inicio' },
                  { to: '/catalogo', label: 'Catálogo de Productos' },
                  { to: '/nosotros', label: 'Nosotros' },
                  { to: '/contacto', label: 'Contacto' },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="font-montserrat text-white/70 text-sm hover:text-joly-dorado transition-colors focus-visible:outline-2 focus-visible:outline-joly-dorado rounded-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Columna 3 — Contacto */}
          <div>
            <h3 className="font-lato font-bold text-white text-base uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-joly-dorado mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <a
                    href="tel:+50664494173"
                    className="font-montserrat text-white/80 text-sm hover:text-white transition-colors block focus-visible:outline-2 focus-visible:outline-joly-dorado rounded-sm"
                  >
                    6449-4173
                  </a>
                  <a
                    href="tel:+50687633342"
                    className="font-montserrat text-white/80 text-sm hover:text-white transition-colors block focus-visible:outline-2 focus-visible:outline-joly-dorado rounded-sm"
                  >
                    8763-3342
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-joly-dorado mt-0.5 shrink-0" aria-hidden="true" />
                <address className="font-montserrat text-white/70 text-sm not-italic leading-relaxed">
                  500 metros este del Minisuper Piedra Azul,<br />
                  planta a mano derecha con portones grises,<br />
                  Santiago, Paraíso, Cartago
                </address>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-joly-dorado mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href="mailto:gcoronado@productosjoly.com"
                  className="font-montserrat text-white/80 text-sm hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-joly-dorado rounded-sm"
                >
                  gcoronado@productosjoly.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/50664494173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-montserrat text-sm font-semibold text-[#25D366] hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-[#25D366] rounded-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <BrandDivider className="mb-6 opacity-30" />

        {/* Copyright */}
        <p className="font-montserrat text-white/40 text-xs text-center">
          © {year} JOLY. Todos los derechos reservados.
          <span className="mx-2">·</span>
          Cartago, Costa Rica
        </p>
      </div>
    </footer>
  )
}
