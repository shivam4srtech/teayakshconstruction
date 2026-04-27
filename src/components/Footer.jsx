// components/Footer.jsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook , FaBuilding, FaInstagram , FaLinkedin , FaYoutube  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { 
 




  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  Send,
  ChevronRight,
  Award,
  Shield,
  Users,
  Globe
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-primary-600 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-secondary-500 rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Call-to-Section (CTS) - Newsletter & Consultation */}
        <div className="border-b border-gray-800">
          <div className="container-custom mx-auto py-16">
            <div className="bg-gradient-to-r from-primary-900/50 to-secondary-900/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-800">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-secondary-500/20 px-4 py-2 rounded-full mb-4">
                    <Award className="w-4 h-4 text-secondary-500" />
                    <span className="text-secondary-500 text-sm font-semibold">Limited Time Offer</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Build Your{' '}
                    <span className="text-secondary-500">Dream Project?</span>
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Get a free consultation with our expert architects and engineers. 
                    Limited slots available for this month.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="#contact"
                      className="group bg-secondary-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-secondary-600 transition-all duration-300 shadow-lg shadow-secondary-500/30"
                    >
                      <span>Start Your Journey</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="#projects"
                      className="border border-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:border-secondary-500 hover:text-secondary-500 transition-all duration-300"
                    >
                      View Portfolio
                    </Link>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Mail className="w-5 h-5 text-secondary-500" />
                    <h4 className="text-xl font-bold">Stay Updated</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Subscribe to get exclusive offers, project updates, and design inspiration.
                  </p>
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-secondary-500 transition-colors"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-secondary-500 text-white rounded-lg font-semibold hover:bg-secondary-600 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span>Subscribe</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                  {subscribed && (
                    <div className="mt-3 text-green-400 text-sm text-center">
                      ✓ Successfully subscribed! Check your inbox.
                    </div>
                  )}
                  <p className="text-gray-500 text-xs mt-3">
                    No spam, unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="container-custom mx-auto py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <FaBuilding  className="w-8 h-8 text-secondary-500" />
                  <div className="absolute -inset-1 bg-secondary-500 rounded-full blur opacity-30" />
                </div>
                <div>
                  <span className="font-display font-bold text-xl">
                    Blue<span className="text-secondary-500">Crest</span>
                  </span>
                  <p className="text-[10px] tracking-wider text-gray-400">CONSTRUCTION</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-md">
                Creating architectural masterpieces with precision, innovation, and timeless elegance. 
                Building dreams and shaping skylines since 1995.
              </p>
              <div className="flex gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-secondary-500" />
                  <span className="text-xs text-gray-400">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-secondary-500" />
                  <span className="text-xs text-gray-400">500+ Experts</span>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary-500 transition-all duration-300 hover:scale-110">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary-500 transition-all duration-300 hover:scale-110">
                  <FaXTwitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary-500 transition-all duration-300 hover:scale-110">
                  <FaLinkedin  className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary-500 transition-all duration-300 hover:scale-110">
                  <FaInstagram  className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary-500 transition-all duration-300 hover:scale-110">
                  <FaYoutube  className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4 relative inline-block">
                Quick Links
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-secondary-500 rounded-full" />
              </h3>
              <ul className="space-y-3">
                {['Home', 'Projects', 'Services', 'About Us', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`#${item.toLowerCase().replace(' ', '')}`}
                      className="text-gray-400 hover:text-secondary-500 transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4 relative inline-block">
                Our Services
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-secondary-500 rounded-full" />
              </h3>
              <ul className="space-y-3">
                {[
                  'Luxury Villas', 
                  'Commercial Towers', 
                  'Residential Complexes', 
                  'Interior Design', 
                  'Project Management'
                ].map((service) => (
                  <li key={service}>
                    <Link 
                      href="#services"
                      className="text-gray-400 hover:text-secondary-500 transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      <span>{service}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4 relative inline-block">
                Contact Info
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-secondary-500 rounded-full" />
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start group">
                  <MapPin className="w-4 h-4 text-secondary-500 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 text-sm">123 Construction Ave, New York, NY 10001</span>
                </div>
                <div className="flex gap-3 items-center group">
                  <Phone className="w-4 h-4 text-secondary-500 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 text-sm">+1 (888) 123-CREST</span>
                </div>
                <div className="flex gap-3 items-center group">
                  <Mail className="w-4 h-4 text-secondary-500 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 text-sm">hello@bluecrest.com</span>
                </div>
                <div className="flex gap-3 items-start group">
                  <Clock className="w-4 h-4 text-secondary-500 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-gray-400 text-sm">Mon-Fri: 9am - 7pm</span>
                    <br />
                    <span className="text-gray-400 text-sm">Sat: 10am - 4pm</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center group">
                  <Globe className="w-4 h-4 text-secondary-500 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 text-sm">www.bluecrest.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container-custom mx-auto py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} BlueCrest Construction. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}