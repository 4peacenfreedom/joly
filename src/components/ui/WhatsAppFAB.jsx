import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFAB() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 1000)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleClick = () => {
    const url = 'https://wa.me/50664494173?text=' + encodeURIComponent('Hola JOLY 👋, me interesa conocer sus productos. ¿Podrían darme información?')
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            className="bg-gray-800 text-white text-sm font-montserrat px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap"
          >
            Chateá con nosotros
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Contactar a JOLY por WhatsApp"
        animate={pulse ? { scale: [1, 1.15, 1] } : { scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.button>
    </div>
  )
}
