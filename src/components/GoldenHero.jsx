// components/HeroSection.jsx
'use client';
import { useState } from 'react';
import { ArrowRight, Send, Building2, Heart, Clock, Award } from 'lucide-react';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', projectType: '' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Simple Working Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #8B7355 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Warm Earthy Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-amber-50/30 via-white to-white" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-amber-600/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-stone-800/5 rounded-full blur-[100px]" />

      <div className="container-custom mx-auto min-h-screen flex items-center py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Inspiring Text */}
          <div className="space-y-8">
            {/* Logo/Brand Badge */}
            <div className="inline-flex items-center gap-2">
              <Building2 className="w-6 h-6 text-amber-700" />
              <span className="text-stone-600 text-sm tracking-wider font-semibold">TERRAE CONSTRUCTIONS</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-amber-700 text-sm uppercase tracking-[0.3em] font-semibold">DESIGNING SPACES. BUILDING TRUST.</p>
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.1] text-stone-800">
                Crafting Spaces. Building
                <span className="text-amber-700 relative inline-block">
                  Dreams.
                  <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4">
                    <path d="M0 2 Q 50 4, 100 2 T 200 2" fill="none" stroke="#b45309" strokeWidth="2"/>
                  </svg>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-stone-600 text-lg leading-relaxed">
              We are a full-service construction and interior design firm delivering exceptional quality, 
              on time and within budget.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group bg-amber-700 text-white px-8 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-amber-800 transition-all duration-300 shadow-lg shadow-amber-700/30">
                <span>OUR PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-stone-300 text-stone-700 px-8 py-3 rounded-md font-semibold hover:border-amber-700 hover:text-amber-700 transition-all duration-300">
                OUR SERVICES
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-200">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-amber-700" />
                  <span className="text-2xl font-bold text-stone-800">10+</span>
                </div>
                <div className="text-stone-500 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="w-5 h-5 text-amber-700" />
                  <span className="text-2xl font-bold text-stone-800">250+</span>
                </div>
                <div className="text-stone-500 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-5 h-5 text-amber-700" />
                  <span className="text-2xl font-bold text-stone-800">100%</span>
                </div>
                <div className="text-stone-500 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden">
              <div className="bg-stone-800 px-8 py-6">
                <h3 className="text-2xl font-bold text-amber-50 mb-1">Get a Free Quote</h3>
                <p className="text-stone-300 text-sm">Tell us about your project</p>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-stone-700 text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-stone-700 text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-stone-700 text-sm font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-stone-700 text-sm font-semibold mb-2">
                      Project Type *
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 outline-none transition-all bg-white"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      required
                    >
                      <option value="">Select Project Type</option>
                      <option value="architecture">Architecture</option>
                      <option value="construction">Construction</option>
                      <option value="interior">Interior Design</option>
                      <option value="turnkey">Turnkey Project</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-amber-800 transition-all duration-300 shadow-lg shadow-amber-700/30"
                >
                  <span>GET A QUOTE</span>
                  <Send className="w-4 h-4" />
                </button>

                {submitted && (
                  <div className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm text-center">
                    ✓ Thank you! We'll contact you within 24 hours.
                  </div>
                )}

                <p className="text-stone-400 text-xs text-center mt-4">
                  Free consultation • No obligation
                </p>
              </form>
            </div>

            {/* Trust Badge */}
            <div className="absolute -bottom-4 -left-4 bg-amber-50 rounded-lg shadow-lg p-3 hidden lg:block border border-amber-200">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-700" />
                <span className="text-stone-700 text-sm font-semibold">Trusted Since 2014</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400">
        <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-stone-300 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-amber-700 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}