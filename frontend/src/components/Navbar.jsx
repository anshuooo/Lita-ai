import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ sections, activeSection, setActiveSection, onInquiryClick }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-12 py-8 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-2xl font-bold tracking-tighter">
        DUBAI <span className="text-gold-500">MALL</span>
      </div>
      
      <div className="hidden md:flex gap-8 items-center">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(index)}
            className={`text-sm uppercase tracking-[0.2em] transition-all duration-300 ${
              activeSection === index ? 'text-gold-500' : 'text-white/60 hover:text-white'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      <button 
        onClick={onInquiryClick}
        className="px-6 py-2 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
      >
        Inquire
      </button>
    </motion.nav>
  );
};

export default Navbar;
