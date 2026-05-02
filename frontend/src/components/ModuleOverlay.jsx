import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import api from '../utils/api';

const ModuleOverlay = ({ type, onClose }) => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let endpoint = '';
      if (type === 'leasing') endpoint = '/inquiry';
      if (type === 'sponsorship') endpoint = '/sponsorship';
      if (type === 'event') endpoint = '/events/book';

      await api.post(endpoint, {
        ...formData,
        inquiryType: type === 'leasing' ? 'leasing' : undefined
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderForm = () => {
    if (type === 'leasing') {
      return (
        <>
          <div className="grid grid-cols-2 gap-6">
            <input name="name" onChange={handleChange} placeholder="Full Name" required className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500" />
            <input name="email" type="email" onChange={handleChange} placeholder="Email" required className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500" />
          </div>
          <input name="company" onChange={handleChange} placeholder="Company / Brand Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500" />
          <textarea name="message" onChange={handleChange} placeholder="Brand Concept & Requirements" rows="4" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500" />
        </>
      );
    }

    if (type === 'sponsorship') {
      return (
        <>
          <input name="brandName" onChange={handleChange} placeholder="Brand Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500" />
          <select name="campaignType" onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500 text-white/40">
            <option value="">Campaign Type</option>
            <option value="digital">Digital Signage</option>
            <option value="activation">Brand Activation</option>
            <option value="pop-up">Pop-up Experience</option>
          </select>
          <input name="budget" onChange={handleChange} placeholder="Estimated Budget" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500" />
        </>
      );
    }

    if (type === 'event') {
      return (
        <>
          <div className="grid grid-cols-2 gap-6">
            <input name="companyName" onChange={handleChange} placeholder="Company Name" required className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500" />
            <input name="eventType" onChange={handleChange} placeholder="Event Type (e.g. Fashion Show)" required className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <input name="audienceSize" onChange={handleChange} placeholder="Expected Audience" required className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500" />
            <input name="dates" onChange={handleChange} placeholder="Preferred Dates" required className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500" />
          </div>
          <input name="budget" onChange={handleChange} placeholder="Event Budget" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-gold-500" />
        </>
      );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-20"
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={onClose} />
      
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="relative w-full max-w-4xl bg-[#111] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2 h-full min-h-[600px]">
          <div className="p-12 md:p-20 bg-gold-500 text-white flex flex-col justify-center">
            <span className="uppercase tracking-[0.4em] text-xs font-bold mb-4 opacity-80">Opportunity</span>
            <h2 className="text-5xl font-display font-bold mb-6 capitalize">{type}</h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Join the world's premier retail and lifestyle destination. 
              Our team will review your proposal and get back to you within 48 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                Global Brand Exposure
              </div>
              <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                Premium Demographics
              </div>
              <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                World-Class Support
              </div>
            </div>
          </div>

          <div className="p-12 md:p-20 flex flex-col justify-center">
            {submitted ? (
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Request Sent</h3>
                <p className="text-white/40 mb-8">Thank you for your interest. A representative will contact you shortly.</p>
                <button 
                  onClick={onClose}
                  className="px-10 py-4 border border-white/20 rounded-xl font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {renderForm()}
                <button 
                  disabled={loading}
                  className="w-full py-5 bg-gold-500 text-white font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-white hover:text-black transition-all duration-500 disabled:opacity-50"
                >
                  {loading ? 'Processing...' : `Submit ${type} Request`}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModuleOverlay;
