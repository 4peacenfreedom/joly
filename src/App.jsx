import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppFAB from './components/ui/WhatsAppFAB'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen bg-joly-fondo">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppFAB />
      </div>
    </HelmetProvider>
  )
}
