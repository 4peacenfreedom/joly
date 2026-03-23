import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'
import BrandDivider from '../components/ui/BrandDivider'
import WhatsAppIcon from '../components/ui/WhatsAppIcon'

const contactItems = [
  {
    icon: Phone,
    title: 'Teléfonos',
    content: (
      <div className="flex flex-col gap-1">
        <a
          href="tel:+50664494173"
          className="font-montserrat text-gray-700 hover:text-joly-verde transition-colors focus-visible:outline-2 focus-visible:outline-joly-verde rounded"
        >
          6449-4173
        </a>
        <a
          href="tel:+50687633342"
          className="font-montserrat text-gray-700 hover:text-joly-verde transition-colors focus-visible:outline-2 focus-visible:outline-joly-verde rounded"
        >
          8763-3342
        </a>
      </div>
    ),
  },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    content: (
      <a
        href="https://wa.me/50664494173"
        target="_blank"
        rel="noopener noreferrer"
        className="font-montserrat text-[#25D366] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-[#25D366] rounded"
      >
        +506 6449-4173
      </a>
    ),
  },
  {
    icon: MapPin,
    title: 'Dirección',
    content: (
      <address className="font-montserrat text-gray-700 text-sm not-italic leading-relaxed">
        500 metros este del Minisuper Piedra Azul,<br />
        planta a mano derecha con portones grises,<br />
        Santiago, Paraíso, Cartago
      </address>
    ),
  },
]

export default function Contact() {
  const handleWhatsApp = () => {
    const msg = 'Hola JOLY 👋, me gustaría obtener información sobre sus productos y servicios.'
    window.open(`https://wa.me/50664494173?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Helmet>
        <title>Contacto | JOLY | Productos Frescos Cartago, Costa Rica</title>
        <meta
          name="description"
          content="Contactá a JOLY para pedidos de productos frescos precortados. Teléfonos: 6449-4173 y 8763-3342. Santiago, Paraíso, Cartago, Costa Rica."
        />
      </Helmet>

      <main id="main-content" className="min-h-screen bg-joly-fondo">
        {/* Hero */}
        <section className="bg-joly-verde text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-montserrat text-joly-dorado text-sm uppercase tracking-widest mb-2">
                Estamos para servirle
              </p>
              <h1 className="font-lato font-black text-white text-4xl sm:text-5xl mb-4">
                Contacto
              </h1>
              <p className="font-montserrat text-white/70 text-lg max-w-xl leading-relaxed">
                Contáctenos por WhatsApp, teléfono o visítenos en nuestras instalaciones en Santiago, Paraíso, Cartago.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Info + Mapa */}
        <section className="py-16 px-4" aria-labelledby="contact-info-heading">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Info de contacto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 id="contact-info-heading" className="font-lato font-black text-joly-verde text-2xl sm:text-3xl mb-6">
                Información de Contacto
              </h2>

              <div className="flex flex-col gap-5 mb-8">
                {contactItems.map(({ icon: Icon, title, content }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-joly-verde/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-joly-verde" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-gray-500 text-xs uppercase tracking-wider mb-1">
                        {title}
                      </h3>
                      {content}
                    </div>
                  </div>
                ))}
              </div>

              <BrandDivider className="mb-6" />

              {/* WhatsApp CTA grande */}
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-3 font-montserrat font-bold text-white text-base py-4 px-6 rounded-2xl hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-[#25D366]"
                style={{ backgroundColor: '#25D366' }}
              >
                <WhatsAppIcon className="w-6 h-6" />
                Escribir por WhatsApp
              </button>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <a
                  href="tel:+50664494173"
                  className="flex items-center justify-center gap-2 font-montserrat font-semibold text-joly-verde text-sm py-3 px-4 rounded-xl border-2 border-joly-verde/30 hover:border-joly-verde transition-colors focus-visible:outline-2 focus-visible:outline-joly-verde"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  6449-4173
                </a>
                <a
                  href="tel:+50687633342"
                  className="flex items-center justify-center gap-2 font-montserrat font-semibold text-joly-verde text-sm py-3 px-4 rounded-xl border-2 border-joly-verde/30 hover:border-joly-verde transition-colors focus-visible:outline-2 focus-visible:outline-joly-verde"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  8763-3342
                </a>
              </div>
            </motion.div>

            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-lato font-black text-joly-verde text-2xl sm:text-3xl mb-6">
                Cómo Llegar
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-md border border-joly-gris/50 aspect-video">
                <iframe
                  title="Ubicación de JOLY en Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1019.870752245718!2d-83.80536476156307!3d9.860964175457012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2scr!4v1774289013543!5m2!1ses!2scr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="font-montserrat text-joly-taupe text-xs mt-2 text-center">
                📍 500 metros este del Minisuper Piedra Azul, Santiago, Paraíso, Cartago
              </p>
            </motion.div>
          </div>
        </section>

        {/* Horario / nota */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-lato font-bold text-joly-verde text-2xl mb-3">
              ¿Cómo hacer un pedido?
            </h2>
            <p className="font-montserrat text-gray-600 text-base leading-relaxed mb-6">
              Explorá nuestro catálogo, encontrá los productos que necesitás, y contactanos por
              WhatsApp indicando la cantidad y presentación que deseás. Coordinamos la entrega
              según tu ubicación y necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/catalogo"
                className="inline-flex items-center justify-center gap-2 bg-joly-verde text-white font-montserrat font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-joly-verde"
              >
                Ver Catálogo
              </a>
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 font-montserrat font-bold px-6 py-3 rounded-full text-white hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-[#25D366]"
                style={{ backgroundColor: '#25D366' }}
              >
                <WhatsAppIcon className="w-4 h-4" />
                Hacer Pedido
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
