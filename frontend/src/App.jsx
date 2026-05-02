import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Hero from './components/Hero';
import WhyProperty from './components/WhyProperty';
import Retail from './components/Retail';
import Luxury from './components/Luxury';
import Dining from './components/Dining';
import Entertainment from './components/Entertainment';
import Events from './components/Events';
import Contact from './components/Contact';
import ModuleOverlay from './components/ModuleOverlay';
import InquiryModal from './components/InquiryModal';

const App = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'hero', title: 'Home', component: Hero },
    { id: 'why', title: 'Why Dubai Mall', component: WhyProperty },
    { id: 'retail', title: 'Retail', component: Retail },
    { id: 'luxury', title: 'Luxury', component: Luxury },
    { id: 'dining', title: 'Dining', component: Dining },
    { id: 'entertainment', title: 'Entertainment', component: Entertainment },
    { id: 'events', title: 'Events', component: Events },
    { id: 'contact', title: 'Contact', component: Contact },
  ];

  // Update active section index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const index = Math.round(scrollPosition / windowHeight);
      
      if (index !== activeSection && index >= 0 && index < sections.length) {
        setActiveSection(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sections.length]);

  const scrollToSection = (index) => {
    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-black text-white min-h-screen">
      <Navbar 
        sections={sections} 
        activeSection={activeSection} 
        setActiveSection={scrollToSection} 
        onInquiryClick={() => setIsInquiryOpen(true)}
      />

      <main className="flex flex-col">
        {sections.map((section, index) => (
          <div key={section.id} id={section.id}>
            {React.createElement(section.component, {
              onOpenModule: (module) => setActiveModule(module)
            })}
          </div>
        ))}
      </main>

      <AnimatePresence>
        {activeModule && (
          <ModuleOverlay 
            type={activeModule} 
            onClose={() => setActiveModule(null)} 
          />
        )}
      </AnimatePresence>

      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
      />

      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === index ? 'bg-gold-500 h-8' : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
