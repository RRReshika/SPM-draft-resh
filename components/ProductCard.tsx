'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/products';
import { Award } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Own Brand Badge */}
      {product.isOwnBrand && (
        <div className="absolute top-4 right-4 z-10 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <Award size={14} />
          SPM Brand
        </div>
      )}

      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs uppercase tracking-wider text-gold-500 font-semibold">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-primary-800 mt-2 mb-2 font-serif">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </div>

      {/* Border Accent */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500 transition-colors duration-300 rounded-lg pointer-events-none" />
    </motion.div>
  );
}
