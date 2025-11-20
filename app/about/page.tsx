'use client';

import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';
import { Users, Award, Target, Heart, TrendingUp, Globe, Package, Shield } from 'lucide-react';

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

  const stats = [
    { icon: TrendingUp, number: '120+', label: 'Years of Excellence' },
    { icon: Globe, number: '700+', label: 'Business Partners' },
    { icon: Package, number: '1000+', label: 'Product Lines' },
    { icon: Shield, number: '4', label: 'Generations' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-64 h-64 bg-gold-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-gold-400 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <img 
                  src="/spm-logo.png" 
                  alt="SPM Logo" 
                  className="h-16 md:h-20 w-auto mx-auto object-contain"
                />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6"
            >
              Our Story
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gold-400 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              From humble beginnings in 1902 to becoming Singapore's leading
              distributor of Indian food products — a legacy spanning four
              generations.
            </motion.p>

            {/* Animated Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-gold-500 rounded-full mb-3"
                  >
                    <stat.icon size={24} className="text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm text-gold-300">{stat.label}</div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 border-4 border-gold-500/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-40 h-40 border-4 border-primary-700/10 rounded-full"
        />

        <div className="container-custom max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-primary-800 font-serif mb-6"
            >
              Our Mission
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg text-gray-700 leading-relaxed mb-8"
            >
              To preserve and share the authentic flavors of India by
              distributing premium quality food products across Southeast Asia.
              We bridge cultures through taste, connecting the Indian diaspora
              with the foods they love and introducing new communities to
              India's rich culinary heritage.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-3 border-2 border-gold-500 rounded-full bg-gradient-to-r from-gold-500/10 to-transparent"
            >
              <span className="text-gold-600 font-serif text-xl font-semibold">
                Since 1902 • Four Generations • 700+ Partners
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Timeline />

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-primary-800 font-serif mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              The principles that have guided us for over 120 years
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center group relative overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-primary-700/10"
                />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-6 shadow-lg"
                >
                  <value.icon size={36} className="text-white" />
                </motion.div>
                
                <h3 className="relative text-xl font-bold text-primary-800 mb-3 group-hover:text-primary-700 transition-colors">
                  {value.title}
                </h3>
                <p className="relative text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Decorative Circles */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-primary-700/5 rounded-full blur-3xl"
        />

        <div className="container-custom max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-2 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full">
                <span className="text-white font-semibold">Leadership</span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-primary-800 font-serif mb-6"
            >
              Fourth Generation Leadership
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-2xl shadow-xl"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Today, SP Muthiah & Sons is proudly led by the fourth generation
                of the Suppiah Chettiar family. Combining traditional values with
                modern business practices, we continue to expand our reach while
                maintaining the trust and quality that our name has represented
                for over a century. Our commitment to excellence ensures that
                every product we distribute meets the highest standards of
                authenticity and freshness.
              </motion.p>

              {/* Animated Quote Marks */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute top-4 left-4 text-gold-500 text-6xl font-serif"
              >
                "
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute bottom-4 right-4 text-gold-500 text-6xl font-serif"
              >
                "
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
