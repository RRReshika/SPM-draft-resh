'use client';

import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';
import { Users, Award, Target, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Users,
      title: 'Heritage & Trust',
      description:
        'Four generations of family-owned business built on integrity and reliability.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description:
        'Only the finest authentic Indian products from trusted manufacturers.',
    },
    {
      icon: Target,
      title: 'Wide Distribution',
      description:
        'Extensive network serving 700+ partners across Singapore & SEA.',
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description:
        'Dedicated to serving the Indian diaspora with products that feel like home.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-gold-400 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings in 1902 to becoming Singapore's leading
              distributor of Indian food products — a legacy spanning four
              generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-navy-900 font-serif mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              To preserve and share the authentic flavors of India by
              distributing premium quality food products across Southeast Asia.
              We bridge cultures through taste, connecting the Indian diaspora
              with the foods they love and introducing new communities to
              India's rich culinary heritage.
            </p>
            <div className="inline-block px-8 py-3 border-2 border-gold-500 rounded-full">
              <span className="text-gold-500 font-serif text-xl">
                Since 1902 • Four Generations • 700+ Partners
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Timeline />

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 font-serif mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that have guided us for over 120 years
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
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
                  <value.icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-navy-900 font-serif mb-6">
              Fourth Generation Leadership
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, SP Muthiah & Sons is proudly led by the fourth generation
              of the Suppiah Chettiar family. Combining traditional values with
              modern business practices, we continue to expand our reach while
              maintaining the trust and quality that our name has represented
              for over a century. Our commitment to excellence ensures that
              every product we distribute meets the highest standards of
              authenticity and freshness.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
