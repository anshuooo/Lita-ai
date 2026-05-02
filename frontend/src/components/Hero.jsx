import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onOpenModule }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* 
        FIXED: Background Video
        Path: /videos/mall.mp4 (Reference from public folder)
        Attributes: autoplay, muted, loop, playsInline (Required for autoplay)
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/mall.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Premium Dark Overlay - Ensures text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content Container - Centered using Flexbox */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="inline-block text-gold-500 uppercase text-xs md:text-sm font-bold mb-6 tracking-[0.5em]"
          >
            The Global Icon of Luxury
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-tight"
          >
            EXPERIENCE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
              DUBAI MALL
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Step into the world's most visited retail and entertainment destination. 
            A masterpiece of architecture, luxury, and global lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <button 
              onClick={() => onOpenModule('leasing')}
              className="group relative px-10 py-4 bg-white text-black text-sm uppercase tracking-[0.2em] font-bold overflow-hidden transition-all duration-500 hover:text-white"
            >
              <span className="relative z-10">Explore Property</span>
              <div className="absolute inset-0 bg-gold-500 translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
            </button>
            
            <button 
              onClick={() => onOpenModule('sponsorship')}
              className="px-10 py-4 border border-white/30 backdrop-blur-md text-white text-sm uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-500"
            >
              Book Opportunity
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Discover More</span>
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
