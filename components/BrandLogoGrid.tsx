'use client';

import { motion } from 'framer-motion';
import { partnerBrands } from '@/lib/brands';

export default function BrandLogoGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 font-serif mb-4">
            Trusted Partner Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We distribute premium products from India's most respected brands
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {partnerBrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-lg font-bold text-primary-800 mb-2">
                {brand.name}
              </h3>
              <p className="text-xs text-gray-500">{brand.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
