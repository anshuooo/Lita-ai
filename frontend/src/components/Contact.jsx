import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import api from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/inquiry', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', company: '', inquiryType: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send inquiry. Please check if the server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section className="bg-[#050505]">
      <div className="grid md:grid-cols-2 w-full h-full">
        {/* ... existing info column ... */}
        <div className="flex flex-col justify-center px-20">
          <h2 className="text-6xl font-display font-bold mb-8">Ready to <br /> Begin?</h2>
          <p className="text-white/40 text-lg mb-12">
            Our specialized teams are here to help you find the perfect 
            opportunity at Dubai Mall.
          </p>
          
          <div className="space-y-8">
            <div>
              <div className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-2">Leasing Inquiries</div>
              <div className="text-xl">leasing@thedubaimall.com</div>
            </div>
            <div>
              <div className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-2">Sponsorships</div>
              <div className="text-xl">partnerships@thedubaimall.com</div>
            </div>
            <div>
              <div className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-2">General Office</div>
              <div className="text-xl">+971 4 362 7500</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-12">
          <div className="glass-morphism p-12 rounded-3xl w-full max-w-lg">
            {success ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-500/20 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
                <p className="text-white/40 mb-8">We'll get back to you shortly.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="px-8 py-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name" 
                      required
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold-500 outline-none transition-all"
                    />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address" 
                      required
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold-500 outline-none transition-all"
                    />
                  </div>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold-500 outline-none transition-all"
                  />
                  <select 
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold-500 outline-none transition-all text-white"
                  >
                    <option value="" className="bg-black">Inquiry Type</option>
                    <option value="leasing" className="bg-black">Leasing</option>
                    <option value="sponsorship" className="bg-black">Sponsorship</option>
                    <option value="event" className="bg-black">Event Space</option>
                  </select>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" 
                    rows="4" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold-500 outline-none transition-all"
                  />
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gold-500 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-black transition-all duration-500 disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
