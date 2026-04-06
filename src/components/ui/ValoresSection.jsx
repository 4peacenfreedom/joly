import { motion } from 'framer-motion'

const valores = [
  {
    title: 'Respeto',
    desc: 'Mantener un ambiente interno y externo de armonía y tolerancia.',
  },
  {
    title: 'Compromiso',
    desc: 'Ofrecer la más alta calidad en nuestros productos.',
  },
  {
    title: 'Ética',
    desc: 'Actuar siempre respetando los valores y principios sociales y empresariales.',
  },
  {
    title: 'Compromiso Social',
    desc: 'Comprometidos con el mejoramiento social, económico y ambiental del país.',
  },
]

export default function ValoresSection() {
  return (
    <section className="py-16 px-4 bg-joly-fondo" aria-labelledby="valores-section-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="valores-section-heading"
            className="font-lato font-black text-joly-verde text-3xl sm:text-4xl"
          >
            Nuestros Valores
          </h2>
          <div className="mt-4 flex justify-center">
            <span className="block w-12 h-1 rounded-full bg-joly-dorado" aria-hidden="true" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col p-6 rounded-2xl border border-joly-gris/40 bg-white hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <span
                className="block w-8 h-1 rounded-full bg-joly-dorado mb-4"
                aria-hidden="true"
              />
              <h3 className="font-lato font-bold text-joly-verde text-lg mb-2">
                {v.title}
              </h3>
              <p className="font-montserrat text-sm leading-relaxed" style={{ color: 'rgba(70,76,45,0.80)' }}>
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
