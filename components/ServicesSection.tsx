'use client';

import { motion } from 'framer-motion';
import { Store, Globe, Truck, Award } from 'lucide-react';

export default function ServicesSection() {
  const stats = [
    {
      icon: Store,
      number: '700+',
      label: 'Retail Partners',
      description: 'Retailers, restaurants & wholesalers',
    },
    {
      icon: Globe,
      number: '120+',
      label: 'Years of Heritage',
      description: 'Four generations of trust',
    },
    {
      icon: Truck,
      number: 'Daily',
      label: 'Distribution',
      description: 'Across Singapore & SEA',
    },
    {
      icon: Award,
      number: '1000+',
      label: 'Product Lines',
      description: 'Authentic Indian products',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 font-serif mb-4">
            Our Reach & Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving the Indian diaspora across Southeast Asia with authentic
            products and reliable service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-6"
              >
                <stat.icon size={32} className="text-white" />
              </motion.div>
              <h3 className="text-4xl font-bold text-primary-800 font-serif mb-2">
                {stat.number}
              </h3>
              <h4 className="text-xl font-semibold text-gold-500 mb-2">
                {stat.label}
              </h4>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
