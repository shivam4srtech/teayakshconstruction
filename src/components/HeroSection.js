// components/HeroSection.jsx
'use client';
import { useState } from 'react';
import { CheckCircle, Send, Phone, Mail, MapPin, Clock, Award, Users, Building } from 'lucide-react';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ fullName: '', email: '', phone: '', projectType: '', budget: '', message: '' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-5" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-500 rounded-full blur-[120px] opacity-5" />

      <div className="container-custom mx-auto min-h-screen flex items-center py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Inspiring Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-blue-700 text-sm font-semibold">25+ Years of Excellence</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
              <span className="text-gray-900">Build Your</span>
              <br />
              <span className="text-blue-600">Dream Project</span>
              <br />
              <span className="text-gray-900">With Us</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              From concept to completion, we transform your vision into reality. 
              Experience luxury construction at its finest with our expert team of architects and engineers.
            </p>

            {/* Key Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">15+ Years of Industry Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">Luxury Homes & Commercial Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">100% Client Satisfaction Guaranteed</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-600" />
                  <span className="text-2xl font-bold text-blue-600">280+</span>
                </div>
                <div className="text-gray-500 text-sm">Projects</div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-2xl font-bold text-blue-600">150+</span>
                </div>
                <div className="text-gray-500 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-2xl font-bold text-blue-600">25+</span>
                </div>
                <div className="text-gray-500 text-sm">Awards</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-gray-600 text-sm">+1 (888) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-gray-600 text-sm">hello@bluecrest.com</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-blue-600 px-8 py-6">
                <h3 className="text-xl font-bold text-white mb-1">Get a free consultation from our experts</h3>
               
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Project Type *
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      required
                    >
                      <option value="">Select Project Type</option>
                      <option value="luxury-villa">Luxury Villa</option>
                      <option value="commercial">Commercial Space</option>
                      <option value="residential">Residential Complex</option>
                      <option value="renovation">Renovation</option>
                    </select>
                  </div>
                </div>

                

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Project Description
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30"
                >
                  <span>Request Free Consultation</span>
                  <Send className="w-4 h-4" />
                </button>

                {submitted && (
                  <div className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm text-center">
                    ✓ Thank you! Our team will contact you within 24 hours.
                  </div>
                )}

                <p className="text-gray-400 text-xs text-center mt-4">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-orange-500 rounded-lg shadow-lg p-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-semibold">24/7 Support</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-600 rounded-lg shadow-lg p-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-semibold">Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-orange-500 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}