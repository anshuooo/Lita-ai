import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Luxury = () => {
  return (
    <Section className="bg-[#0a0a0a]">
      <div className="flex flex-col md:flex-row h-full w-full">
        <div className="w-full md:w-1/2 relative h-1/2 md:h-full">
          <img 
            src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&q=80&w=1200" 
            alt="Luxury Fashion" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="w-full md:w-1/2 flex items-center px-12 md:px-24">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold-500 uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
            >
              Fashion Avenue
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              The Pinnacle <br /> of Luxury.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-lg mb-12 leading-relaxed"
            >
              Home to the most exclusive brands in the world, Fashion Avenue 
              offers a bespoke luxury experience with personal shoppers, 
              private lounges, and world-class hospitality.
            </motion.p>
            <div className="flex flex-wrap gap-12 border-t border-white/10 pt-12">
              <div>
                <div className="text-2xl font-bold mb-1">150+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Luxury Brands</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">20M</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Affluent Visitors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Luxury;
