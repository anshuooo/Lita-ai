import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Entertainment = () => {
  return (
    <Section className="bg-[#050505]">
      <div className="grid md:grid-cols-2 gap-12 px-20 items-center">
        <div className="relative aspect-video overflow-hidden rounded-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
            alt="Entertainment" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-all">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
        </div>

        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-display font-bold mb-6"
          >
            Immersive <br /> Attractions.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-lg mb-8"
          >
            Beyond shopping, we offer the world's most iconic attractions, 
            including the Dubai Aquarium & Underwater Zoo, VR Park, and 
            KidZania, driving footfall from every demographic.
          </motion.p>
          <button className="px-8 py-4 border border-gold-500 text-gold-500 text-xs font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-all duration-500">
            Explore All Attractions
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Entertainment;
