'use client';

import { motion } from 'framer-motion';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1902',
    title: 'Foundation',
    description:
      'Founded by Suppiah Chettiar in Singapore as a small trading business for Indian commodities.',
  },
  {
    year: '1974',
    title: 'Second Generation',
    description:
      'Expanded distribution network across Singapore with second-generation leadership.',
  },
  {
    year: '2008',
    title: 'Regional Expansion',
    description:
      'Third generation takes over, expanding operations across Southeast Asia with modern logistics.',
  },
  {
    year: 'Present',
    title: 'Fourth Generation',
    description:
      'Now serving 700+ partners with cutting-edge distribution and a vast product portfolio.',
  },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Our Heritage Timeline
          </h2>
          <p className="text-lg text-gold-400 max-w-2xl mx-auto">
            Four generations of excellence spanning over 120 years
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative mb-16 last:mb-0"
            >
              <div className="flex items-center gap-8">
                {/* Year Badge */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 w-32 h-32 bg-gold-500 rounded-full flex items-center justify-center shadow-xl"
                >
                  <span className="text-3xl font-bold text-white font-serif">
                    {event.year}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="flex-1 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-bold font-serif mb-2 text-gold-400">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < timelineEvents.length - 1 && (
                <div className="absolute left-16 top-32 w-0.5 h-16 bg-gold-500/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
