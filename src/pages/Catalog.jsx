import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useProducts } from '../hooks/useProducts'
import ProductGrid from '../components/catalog/ProductGrid'
import CategoryFilter from '../components/catalog/CategoryFilter'
import SearchBar from '../components/catalog/SearchBar'
import BrandDivider from '../components/ui/BrandDivider'

export default function Catalog() {
  const { products, search, setSearch, activeCategory, setActiveCategory, counts } = useProducts()

  return (
    <>
      <Helmet>
        <title>Catálogo de Productos | JOLY | Vegetales Frescos Precortados Costa Rica</title>
        <meta
          name="description"
          content="Explorá el catálogo completo de JOLY: ensaladas, vegetales precortados, mixtos y comida preparada. Calidad y frescura garantizada."
        />
      </Helmet>

      <main id="main-content" className="min-h-screen bg-joly-fondo">
        {/* Header de la página */}
        <section className="bg-joly-verde text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-montserrat text-joly-dorado text-sm uppercase tracking-widest mb-2">
                JOLY — Catálogo 2025
              </p>
              <h1 className="font-lato font-black text-white text-3xl sm:text-4xl md:text-5xl mb-3">
                Nuestros Productos
              </h1>
              <p className="font-montserrat text-white/70 text-base max-w-lg">
                34 productos frescos — ensaladas, vegetales precortados, mixtos y comida preparada.
                Calidad y frescura en cada presentación.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filtros y búsqueda */}
        <section className="sticky top-16 md:top-18 z-20 bg-white/95 backdrop-blur-md border-b border-joly-gris/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between overflow-hidden">
            <CategoryFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              counts={counts}
            />
            <div className="w-full sm:w-auto sm:min-w-72">
              <SearchBar value={search} onChange={setSearch} />
            </div>
          </div>
        </section>

        {/* Grid de productos */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-4">
            <p className="font-montserrat text-joly-taupe text-sm">
              {products.length === 0
                ? 'Sin resultados'
                : `${products.length} producto${products.length !== 1 ? 's' : ''}`}
            </p>
            {(search || activeCategory !== 'all') && (
              <button
                onClick={() => { setSearch(''); setActiveCategory('all') }}
                className="font-montserrat text-joly-dorado text-sm hover:underline focus-visible:outline-2 focus-visible:outline-joly-dorado rounded"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          <ProductGrid products={products} />
        </section>

        <BrandDivider className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8" />
      </main>
    </>
  )
}
