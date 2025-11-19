'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Heritage', href: '/about' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Products',
      links: [
        { name: 'Cooking Oils', href: '/products' },
        { name: 'Pickles', href: '/products' },
        { name: 'Appalam', href: '/products' },
        { name: 'All Products', href: '/products' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Become a Partner', href: '#' },
        { name: 'Distribution Info', href: '#' },
        { name: 'Product Catalog', href: '#' },
        { name: 'FAQs', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold font-serif mb-2">
                SP Muthiah & Sons
              </h3>
              <p className="text-gold-500 mb-4">Since 1902</p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Four generations of trust, quality, and authentic Indian food
                distribution across Singapore and Southeast Asia.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <a
                  href="tel:+6567482828"
                  className="flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors"
                >
                  <Phone size={16} />
                  +65 6748 2828
                </a>
                <a
                  href="mailto:info@spmuthiah.com.sg"
                  className="flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors"
                >
                  <Mail size={16} />
                  info@spmuthiah.com.sg
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="p-2 bg-white/10 rounded-full hover:bg-gold-500 transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h4 className="font-bold text-lg mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-gold-500 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SP Muthiah & Sons Pte Ltd. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
