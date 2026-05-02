import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, className = "" }) => {
  return (
    <div className={`h-screen w-screen flex items-center justify-center relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Section;
