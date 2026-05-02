import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Events = ({ onOpenModule }) => {
  return (
    <Section>
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-crowd-at-a-concert-with-lights-14144-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-7xl md:text-9xl font-display font-bold mb-8 tracking-tighter"
        >
          THE EVENT <br /> HUB.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/70 mb-12"
        >
          From fashion shows and product launches to cultural festivals, 
          our spaces are designed to host the world's most spectacular events.
        </motion.p>
        <motion.button 
          onClick={() => onOpenModule('event')}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="px-16 py-6 bg-white text-black font-bold uppercase tracking-[0.3em] text-sm hover:bg-gold-500 hover:text-white transition-all duration-500"
        >
          Book Your Event
        </motion.button>
      </div>
    </Section>
  );
};

export default Events;
