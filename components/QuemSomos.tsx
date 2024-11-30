'use client'

import { motion } from 'framer-motion'
import { CarouselDemo } from './carrousel'

export default function QuemSomos() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cosa siamo</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
            Azienda nata nel 2005 per facilitare la vita delle persone e l&apos;accesso al credito.
            L&apos;attuale consulenza finanziaria è diventata sempre più utile negli ultimi giorni.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Com enumera oferta de produtos e soluções das mais variadas instituições bancárias, 
              fazendo com que o Cliente necessite de um profissional competente.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Saiba Mais
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CarouselDemo />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

