"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    services: '',
    message: ''
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
New Consultation Request:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Business Type: ${formData.businessType}
Services Interested In: ${formData.services}

Message:
${formData.message}

---
Sent from IN Accountancy website consultation form
    `.trim();

    // Create mailto link
    const subject = `Consultation Request from ${formData.name}`;
    const mailtoLink = `mailto:vismaysagex@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Close modal and reset form
    onClose();
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      businessType: '',
      services: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[var(--sage-forest)]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto z-[100000] border border-gray-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-[var(--sage-green)] to-[var(--sage-forest)] p-6 rounded-t-2xl">
            <div className="flex items-center justify-between relative z-10">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Book Free Consultation
                </h2>
                <p className="text-[var(--sage-green-light)] text-sm mt-1">
                  Get expert accounting advice tailored to your business
                </p>
              </div>
              <button
                onClick={onClose}
                type="button"
                className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 relative z-20 ml-4 flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white" />
              <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-white" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[var(--sage-forest)] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-[var(--sage-green)] transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[var(--sage-forest)] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-[var(--sage-green)] transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[var(--sage-forest)] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-[var(--sage-green)] transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-[var(--sage-forest)] mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-[var(--sage-green)] transition-all"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessType" className="block text-sm font-semibold text-[var(--sage-forest)] mb-2">
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-[var(--sage-green)] transition-all bg-white"
                >
                  <option value="">Select business type</option>
                  <option value="LLC">LLC</option>
                  <option value="S-Corp">S-Corporation</option>
                  <option value="C-Corp">C-Corporation</option>
                  <option value="Sole Proprietor">Sole Proprietor</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Individual">Individual</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="services" className="block text-sm font-semibold text-[var(--sage-forest)] mb-2">
                  Services Interested In
                </label>
                <select
                  id="services"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-[var(--sage-green)] transition-all bg-white"
                >
                  <option value="">Select services</option>
                  <option value="Business Accounting">Business Accounting</option>
                  <option value="Tax Filing">Tax Filing</option>
                  <option value="Bookkeeping">Bookkeeping</option>
                  <option value="Payroll">Payroll Services</option>
                  <option value="Sage Software">Sage Software Setup</option>
                  <option value="Sales Tax Returns">Sales Tax Returns</option>
                  <option value="Multiple Services">Multiple Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[var(--sage-forest)] mb-2">
                Tell us about your needs
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-[var(--sage-green)] transition-all resize-none"
                placeholder="Tell us about your accounting needs, challenges, or questions..."
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[var(--sage-green)] to-[var(--sage-forest)] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:from-[var(--sage-green-dark)] hover:to-[var(--sage-forest)] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] transform"
              >
                Send Consultation Request
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 leading-relaxed">
                🚀 <strong>Free consultation</strong> • ⚡ <strong>24-hour response</strong> • 🔒 <strong>Confidential</strong>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                We'll respond within 24 hours to schedule your free consultation.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}