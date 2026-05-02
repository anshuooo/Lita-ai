import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Retail = () => {
  return (
    <Section>
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=2000" 
          alt="Retail" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 px-20 w-full">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-500 uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
          >
            Commercial Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-bold mb-8"
          >
            The World's <br /> Retail Stage.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mb-12"
          >
            From flagship stores to emerging brands, we provide the platform 
            for the world's most successful retail experiences. Join over 1,200 
            brands currently thriving in our ecosystem.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="px-12 py-5 bg-gold-500 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
          >
            View Available Units
          </motion.button>
        </div>
      </div>
    </Section>
  );
};

export default Retail;
