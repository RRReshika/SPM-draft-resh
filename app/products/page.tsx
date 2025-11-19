'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { products, productCategories } from '@/lib/products';
import BrandLogoGrid from '@/components/BrandLogoGrid';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-navy-900 font-serif mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Authentic Indian food products from trusted brands and our own
            premium label
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-gold-500 text-white shadow-lg'
                : 'bg-white text-navy-900 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            All Products
          </motion.button>
          {productCategories.map((category) => (
            <motion.button
              key={category.slug}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.slug)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category.slug
                  ? 'bg-gold-500 text-white shadow-lg'
                  : 'bg-white text-navy-900 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Partner Brands Section */}
      <BrandLogoGrid />
    </div>
  );
}
