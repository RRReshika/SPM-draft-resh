'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gold-400 max-w-3xl mx-auto leading-relaxed">
              Get in touch with Singapore's trusted distributor of authentic
              Indian food products
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Business Hours & Additional Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-navy-900 to-navy-800 text-white p-8 rounded-lg shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock size={32} className="text-gold-500" />
                <h3 className="text-2xl font-bold font-serif">Business Hours</h3>
              </div>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex justify-between items-center border-b border-gold-500/30 pb-3"
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-gold-400">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold font-serif text-navy-900 mb-6">
                Quick Contact
              </h3>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg"
              >
                <div className="p-3 bg-gold-500 rounded-lg flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">
                    Our Location
                  </h4>
                  <p className="text-gray-600">
                    9 Kaki Bukit Road 1 #03-06
                    <br />
                    Eunos Technolink
                    <br />
                    Singapore 415938
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg"
              >
                <div className="p-3 bg-gold-500 rounded-lg flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">
                    Call or WhatsApp
                  </h4>
                  <a
                    href="tel:+6567482828"
                    className="text-gray-600 hover:text-gold-500 transition-colors"
                  >
                    +65 6748 2828
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg"
              >
                <div className="p-3 bg-gold-500 rounded-lg flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">
                    Email Us
                  </h4>
                  <a
                    href="mailto:info@spmuthiah.com.sg"
                    className="text-gray-600 hover:text-gold-500 transition-colors"
                  >
                    info@spmuthiah.com.sg
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gold-500 to-gold-400 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              Become a Partner
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our network of 700+ trusted retail partners across Singapore
              and Southeast Asia
            </p>
            <motion.a
              href="mailto:info@spmuthiah.com.sg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-navy-900 text-white rounded-lg font-semibold shadow-lg hover:bg-navy-800 transition-colors"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
