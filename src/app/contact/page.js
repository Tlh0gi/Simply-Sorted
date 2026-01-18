'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    purpose: '',
    message: ''
  });
  const [status, setStatus] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Determine the subject based on purpose
    const subject = formData.purpose === 'other' 
      ? 'Other Consultation' 
      : formData.purpose.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

    // Create email template parameters
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      purpose: subject,
      message: formData.message,
      to_email: process.env.NEXT_PUBLIC_ADMIN_EMAIL 
    };

    // Send email using EmailJS
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        purpose: '',
        message: ''
      });
      // Clear success message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('error');
      // Clear error message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    });
  };

  return (
    <div>
      {/* Hero Section with Quote */}
      <section className="relative bg-beige-light py-20 md:py-32">
        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute left-0 top-0 h-full w-1/2" viewBox="0 0 400 800" fill="none">
            <line x1="400" y1="0" x2="0" y2="400" stroke="black" strokeWidth="1" opacity="0.1" />
            <line x1="300" y1="0" x2="0" y2="300" stroke="black" strokeWidth="1" opacity="0.1" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">
            Let's Create Your Calm Space
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-700 italic mb-6">
              "An organized home is more than just tidy shelves and labelled bins – it is about creating calm, clarity, and breathing room in your life."
            </p>
            <p className="text-lg text-gray-600">
              Ready to transform your space? Get in touch and let's discuss how Simply Sorted can help you create a home that works for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you soon.
            </p>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="bg-beige-light rounded-lg p-8 md:p-12 shadow-lg">
            {/* Status Messages */}
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="font-semibold">Thank you for your message!</p>
                <p>We'll get back to you shortly.</p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <p className="font-semibold">Oops! Something went wrong.</p>
                <p>Please try again or email us directly at info@simplysorted.co.za</p>
              </div>
            )}

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone Field */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="+27 12 345 6789"
              />
            </div>

            {/* Purpose Dropdown */}
            <div className="mb-6">
              <label htmlFor="purpose" className="block text-sm font-semibold text-gray-700 mb-2">
                Purpose of Contact *
              </label>
              <select
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="" disabled>Select a purpose</option>
                <option value="package-plan">Package Plan Inquiry</option>
                <option value="general">General Inquiry</option>
                <option value="about-us">About Us</option>
                <option value="consultation">Free Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                disabled={status === 'sending'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Tell us about your space and what you'd like to achieve..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              * Required fields
            </p>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Other Ways to Reach Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Location */}
            <div className="text-center">
              <div className="w-16 h-16 bg-beige rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Location</h3>
              <p className="text-gray-700">Randburg, Gauteng</p>
              <p className="text-gray-700">South Africa</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-beige rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Email</h3>
              <p className="text-gray-700">Funeka.Kgala@SimplySorted.com</p>
              
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-beige rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Phone</h3>
              <p className="text-gray-700">079 892 7486</p>
             
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}