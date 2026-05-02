import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const WhyProperty = () => {
  const stats = [
    { label: 'Annual Visitors', value: '100M+' },
    { label: 'Retail Outlets', value: '1,200+' },
    { label: 'Total Area', value: '1.1M sqm' },
    { label: 'Global Ranking', value: '#1' },
  ];

  return (
    <Section className="bg-[#050505]">
      <div className="grid md:grid-cols-2 w-full h-full">
        <div className="flex flex-col justify-center px-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl font-display font-bold mb-8 leading-tight"
          >
            The Most Visited <br /> Destination on Earth.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-md mb-12 leading-relaxed"
          >
            Dubai Mall is not just a shopping center; it's a global landmark. 
            Located in the heart of Downtown Dubai, it offers unparalleled 
            exposure to a global audience.
          </motion.p>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="text-3xl font-bold text-gold-500 mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200" 
            alt="Dubai Mall Exterior" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
        </div>
      </div>
    </Section>
  );
};

export default WhyProperty;
