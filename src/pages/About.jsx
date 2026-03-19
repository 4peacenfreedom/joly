import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Leaf, Award, Heart, Users } from 'lucide-react'
import BrandDivider from '../components/ui/BrandDivider'

const valores = [
  {
    icon: Leaf,
    title: 'Frescura Garantizada',
    desc: 'Procesamos y empacamos el mismo día para entregarle productos en su punto óptimo de frescura.',
  },
  {
    icon: Award,
    title: 'Calidad Superior',
    desc: 'Seleccionamos cuidadosamente cada vegetal, aplicando estrictos controles de calidad en todo el proceso.',
  },
  {
    icon: Heart,
    title: 'Pasión por el Detalle',
    desc: 'Cada corte, cada mezcla, cada empaque es trabajado con dedicación para superar sus expectativas.',
  },
  {
    icon: Users,
    title: 'Servicio Personalizado',
    desc: 'Entendemos que cada cliente tiene necesidades únicas. Nos adaptamos para servirle mejor.',
  },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>Nosotros | JOLY | Empresa Costarricense de Productos Frescos</title>
        <meta
          name="description"
          content="Conocé la historia y valores de JOLY, empresa costarricense dedicada a los productos frescos precortados con calidad y frescura desde Cartago."
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
                Nuestra historia
              </p>
              <h1 className="font-lato font-black text-white text-4xl sm:text-5xl mb-4">
                Nosotros
              </h1>
              <p className="font-montserrat text-white/70 text-lg max-w-2xl leading-relaxed">
                Somos JOLY, una empresa costarricense comprometida con ofrecer productos
                frescos de la más alta calidad a restaurantes, sodas, supermercados, hoteles
                y hogares de todo el país.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-16 px-4" aria-labelledby="historia-heading">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 id="historia-heading" className="font-lato font-black text-joly-verde text-3xl sm:text-4xl mb-4">
                  Calidad y frescura<br />desde Cartago
                </h2>
                <p className="font-montserrat text-gray-600 text-base leading-relaxed mb-4">
                  JOLY nació con una visión clara: llevar productos frescos precortados directamente
                  desde el campo hasta las cocinas de Costa Rica. Ubicados en Cartago, en el corazón
                  agrícola del país, trabajamos de cerca con productores locales para garantizar la
                  trazabilidad y frescura de cada producto.
                </p>
                <p className="font-montserrat text-gray-600 text-base leading-relaxed mb-4">
                  Nuestra planta de procesamiento opera bajo estrictos estándares de higiene y calidad.
                  Cada vegetal es seleccionado, lavado, cortado y empacado con cuidado para que llegue
                  en perfectas condiciones a su destino.
                </p>
                <p className="font-montserrat text-gray-600 text-base leading-relaxed">
                  Hoy ofrecemos más de 34 productos en 5 categorías, atendiendo a clientes en todo
                  el Gran Área Metropolitana y más allá. Nuestro slogan lo dice todo:{' '}
                  <em className="font-semibold text-joly-verde">calidad y frescura</em>.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-joly-verde rounded-2xl p-8 text-white"
              >
                <h3 className="font-lato font-bold text-2xl mb-6">En números</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { num: '34+', label: 'Productos frescos' },
                    { num: '5', label: 'Categorías' },
                    { num: '100%', label: 'Origen Costa Rica' },
                    { num: 'Diario', label: 'Procesamiento fresco' },
                  ].map(({ num, label }) => (
                    <div key={label} className="text-center">
                      <p className="font-lato font-black text-joly-dorado text-3xl">{num}</p>
                      <p className="font-montserrat text-white/70 text-sm mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <BrandDivider className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-4" />

        {/* Valores */}
        <section className="py-16 px-4 bg-white" aria-labelledby="valores-heading">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 id="valores-heading" className="font-lato font-black text-joly-verde text-3xl sm:text-4xl mb-3">
                Nuestros Valores
              </h2>
              <p className="font-montserrat text-joly-taupe text-base">
                Los principios que guían cada decisión en JOLY.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valores.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 p-6 rounded-2xl border border-joly-gris/50 bg-joly-fondo"
                >
                  <div className="w-11 h-11 rounded-full bg-joly-verde/10 flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-joly-verde" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-lato font-bold text-joly-verde text-lg mb-1">{v.title}</h3>
                    <p className="font-montserrat text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Misión */}
        <section
          className="py-16 px-4"
          style={{ background: 'linear-gradient(135deg, #464c2d 0%, #2d3018 100%)' }}
          aria-labelledby="mision-heading"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="mision-heading" className="font-lato font-black text-white text-3xl sm:text-4xl mb-4">
              Nuestra Misión
            </h2>
            <p className="font-montserrat text-white/80 text-lg leading-relaxed">
              Facilitar la labor en la cocina de nuestros clientes ofreciendo productos frescos
              precortados de excelente calidad, entregados con puntualidad y trato personalizado,
              contribuyendo al éxito de sus negocios y al bienestar de sus familias.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
