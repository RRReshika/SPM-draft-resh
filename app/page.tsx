'use client';

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProductCard from '@/components/ProductCard';
import BrandLogoGrid from '@/components/BrandLogoGrid';
import { products } from '@/lib/products';
import { motion } from 'framer-motion';

export default function Home() {
  const featuredProducts = products.filter((p) => p.isOwnBrand);

  return (
    <>
      <HeroSection />
      <ServicesSection />

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 font-serif mb-4">
              Our Premium Brands
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proudly manufactured and distributed by SP Muthiah & Sons
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <BrandLogoGrid />
    </>
  );
}
