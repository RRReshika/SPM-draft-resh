'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Est Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 border-2 border-gold-500 rounded-full">
              <span className="text-gold-500 font-serif text-lg tracking-wider">
                Established 1902
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 leading-tight"
          >
            SP Muthiah & Sons
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-gold-400 mb-8 font-serif italic"
          >
            Four Generations of Trust & Quality
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Singapore's premier distributor of authentic Indian food products
            since 1902. Serving 700+ retailers, restaurants, and wholesalers
            across Southeast Asia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gold-500 text-navy-900 rounded-md font-semibold shadow-lg hover:bg-gold-400 transition-colors"
              >
                Explore Our Products
              </motion.button>
            </a>
            <a href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-navy-900 transition-colors"
              >
                Our Heritage
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={32} className="text-gold-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
