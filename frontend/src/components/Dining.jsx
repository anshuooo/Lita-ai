import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Dining = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/dinning.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content Layer */}
      <div className="relative z-20 w-full h-full flex items-center px-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="max-w-xl"
        >
          <h2 className="text-6xl font-display font-bold mb-8">Culinary <br /> Excellence.</h2>
          <p className="text-white/60 text-lg mb-8">
            From Michelin-starred concepts to world-renowned casual dining, 
            Dubai Mall is the region's ultimate gastronomic destination.
          </p>
          <div className="space-y-4">
            {['200+ Dining Venues', 'Al Fresco Waterfront Seating', 'Global Cuisines'].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="text-sm uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dining;
