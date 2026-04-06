import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Award, Clock, Grid3X3 } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/catalog/ProductCard'
import ProductModal from '../components/catalog/ProductModal'
import { useState } from 'react'
import logoClaro from '../assets/logo_claro.svg'
import ValoresSection from '../components/ui/ValoresSection'

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'JOLY',
  description: 'Empresa costarricense de productos frescos precortados, ensaladas y comida preparada.',
  url: 'https://www.jolyfreshproduct.com',
  telephone: ['+50664494173', '+50687633342'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '500 metros este del Minisuper Piedra Azul, Santiago, Paraíso',
    addressLocality: 'Cartago',
    addressCountry: 'CR',
  },
  sameAs: ['https://www.facebook.com/joly', 'https://www.instagram.com/joly'],
}

const valores = [
  {
    icon: Leaf,
    title: 'Frescura',
    desc: 'Seleccionamos y procesamos nuestros productos el mismo día para garantizar la máxima frescura.',
  },
  {
    icon: Award,
    title: 'Calidad',
    desc: 'Estándares rigurosos de selección y proceso en cada producto que sale de nuestra planta.',
  },
  {
    icon: Clock,
    title: 'Puntualidad',
    desc: 'Cumplimos con los tiempos de entrega acordados porque sabemos que su negocio no puede esperar.',
  },
  {
    icon: Grid3X3,
    title: 'Variedad',
    desc: 'Más de 34 productos en 5 categorías para cubrir todas las necesidades de su negocio.',
  },
]

// Productos destacados — uno por cada categoría + más visuales
const featuredSlugs = [
  'ensalada-premium',
  'pico-de-gallo',
  'mix-de-vegetales',
  'zanahoria',
  'gallo-pinto',
  'ensalada-joly',
]
const featuredProducts = featuredSlugs
  .map((slug) => products.find((p) => p.slug === slug))
  .filter(Boolean)

export default function Home() {
const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <>
      <Helmet>
        <title>JOLY | Productos Frescos Precortados | Calidad y Frescura | Cartago, Costa Rica</title>
        <meta
          name="description"
          content="JOLY ofrece ensaladas frescas, vegetales precortados y comida preparada de calidad para restaurantes y hogares en Costa Rica. Pedidos: 6449-4173."
        />
        <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
      </Helmet>

      <main id="main-content">
        {/* ── HERO ─────────────────────────────────── */}
        <section
          className="relative min-h-[88vh] flex items-center justify-center overflow-hidden"
          aria-label="Sección principal"
        >
          {/* Fondo decorativo */}
          <div className="absolute inset-0 bg-joly-verde" aria-hidden="true">
            {/* Arcos decorativos */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <circle cx="0" cy="0" r="300" fill="none" stroke="#ceccd2" strokeWidth="1" />
              <circle cx="0" cy="0" r="450" fill="none" stroke="#ceccd2" strokeWidth="1" />
              <circle cx="800" cy="600" r="300" fill="none" stroke="#ceccd2" strokeWidth="1" />
              <circle cx="800" cy="600" r="450" fill="none" stroke="#ceccd2" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center mb-8"
            >
              <img src={logoClaro} alt="JOLY" className="h-24 sm:h-32 md:h-40 w-auto" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-montserrat text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Productos frescos, pre cortados, procesados, ensaladas preparadas, comidas preparadas,
              mieles, conservas y encurtidos elaborados con altos estándares de calidad e inocuidad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/catalogo"
                className="inline-flex items-center justify-center gap-2 bg-joly-dorado text-white font-montserrat font-bold px-8 py-4 rounded-full text-base hover:opacity-90 transition-all hover:gap-3 focus-visible:outline-2 focus-visible:outline-white"
              >
                Ver Catálogo Completo
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="https://wa.me/50664494173"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-montserrat font-semibold px-8 py-4 rounded-full text-base hover:bg-white/10 transition-all focus-visible:outline-2 focus-visible:outline-white"
              >
                Consultarnos
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── PRODUCTOS DESTACADOS ─────────────────── */}
        <section className="py-16 px-4 bg-joly-fondo" aria-labelledby="featured-heading">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
              <div>
                <h2 id="featured-heading" className="font-lato font-black text-joly-verde text-3xl sm:text-4xl mb-2">
                  Productos Destacados
                </h2>
                <p className="font-montserrat text-joly-taupe text-sm">
                  Una muestra de lo que tenemos para ofrecer
                </p>
              </div>
              <Link
                to="/catalogo"
                className="font-montserrat font-semibold text-joly-dorado text-sm hover:underline focus-visible:outline-2 focus-visible:outline-joly-dorado rounded whitespace-nowrap"
              >
                Ver todos los productos →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {featuredProducts.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── ¿POR QUÉ JOLY? ──────────────────────── */}
        <section className="py-16 px-4 bg-joly-verde" aria-labelledby="valores-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="valores-heading" className="font-lato font-black text-white text-3xl sm:text-4xl mb-3">
                ¿Por qué elegir JOLY?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {valores.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/10 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-full bg-joly-dorado/20 flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6 text-joly-dorado" aria-hidden="true" />
                  </div>
                  <h3 className="font-lato font-bold text-white text-xl mb-2">{v.title}</h3>
                  <p className="font-montserrat text-white/70 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALORES ──────────────────────────────── */}
        <ValoresSection />

        {/* ── CONTACTO / CTA ───────────────────────── */}
        <section
          className="py-16 px-4"
          style={{ background: 'linear-gradient(135deg, #464c2d 0%, #2d3018 100%)' }}
          aria-labelledby="cta-heading"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 id="cta-heading" className="font-lato font-black text-white text-3xl sm:text-4xl mb-4">
                ¿Listo para hacer su pedido?
              </h2>
              <p className="font-montserrat text-white/70 text-base mb-8 max-w-lg mx-auto">
                Contáctenos por WhatsApp o por teléfono. Atendemos restaurantes, sodas,
                supermercados, hoteles y hogares en toda Costa Rica.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="https://wa.me/50664494173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-montserrat font-bold px-8 py-4 rounded-full text-white text-base hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-[#25D366]"
                  style={{ backgroundColor: '#25D366' }}
                >
                  WhatsApp: 6449-4173
                </a>
                <a
                  href="tel:+50687633342"
                  className="inline-flex items-center gap-2 font-montserrat font-semibold border-2 border-white/30 text-white px-8 py-4 rounded-full text-base hover:bg-white/10 transition-all focus-visible:outline-2 focus-visible:outline-white"
                >
                  Llamar: 8763-3342
                </a>
              </div>

              <p className="font-montserrat text-white/40 text-sm">
                📍 500 metros este del Minisuper Piedra Azul, Santiago, Paraíso, Cartago, Costa Rica
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  )
}
