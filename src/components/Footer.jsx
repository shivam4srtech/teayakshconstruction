'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useModalStore } from '@/store/useModalStore';
import { subscribeNewsletter } from '@/app/actions/subscribeNewsletter';
// Importing specific icon sets from react-icons
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter,
  FaArrowRight,
  FaSpinner,
  FaCheck
} from 'react-icons/fa';
import { 
  IoMailOutline, 
  IoCallOutline, 
  IoLocationOutline 
} from 'react-icons/io5';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const openModal = useModalStore((state) => state.openModal);
  const [email, setEmail] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const services = [
    { name: 'Luxury Villas', href: '#' },
    { name: 'Commercial Spaces', href: '#' },
    { name: 'Interior Design', href: '#' },
    { name: 'Renovation', href: '#' },
    { name: 'Architecture', href: '#' },
  ];
  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Testimonials', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blogs', href: '/blogs' },
  ];

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});
    setMessage('');

    const result = await subscribeNewsletter({ email });

    setIsSubmitting(false);
    setFieldErrors(result.fieldErrors || {});
    setMessage(result.message || '');

    if (result.ok) {
      setIsSuccess(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-dark text-white md:pt-20 pt-10 pb-10 px-5 lg:px-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: CTA & Newsletter */}
        <div className="grid lg:grid-cols-2 md:gap-12 gap-4 border-b border-white/10 pb-5">
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-5xl font-medium leading-tight md:mb-3 mb-0">
              Ready to build your <br />
              <span className=". text-brand">dream space?</span>
            </h2>
            <button 
              onClick={openModal}
              className="flex items-center gap-3 group text-brand font-bold uppercase tracking-widest text-xs cursor-pointer">
              Start a Conversation 
              <HiOutlineArrowLongRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
          
          <div className="flex flex-col justify-end">
            <p className="text-white/50 text-sm mb-4 uppercase tracking-widest">Subscribe to our newsletter</p>
            <form onSubmit={handleNewsletterSubmit} noValidate>
              <div className={`flex border-b pb-2 focus-within:border-brand transition-colors ${fieldErrors.email ? 'border-red-400' : 'border-white/20'}`}>
                <input 
                  type="email" 
                  placeholder="Your email address"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setFieldErrors({});
                    setMessage('');
                    setIsSuccess(false);
                  }}
                  className="bg-transparent w-full outline-none text-sm py-2 placeholder:text-white/20"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-brand hover:text-white transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitting ? <FaSpinner size={16} className="animate-spin" /> : isSuccess ? <FaCheck size={16} /> : <FaArrowRight size={16} />}
                </button>
              </div>
              {(fieldErrors.email || message) && (
                <p className={`mt-3 text-[10px] font-bold uppercase tracking-widest ${isSuccess ? 'text-green-400' : fieldErrors.email ? 'text-red-400' : 'text-white/40'}`}>
                  {fieldErrors.email || message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:py-16 py-8">
          {/* Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-brand flex items-center justify-center">
                <span className="text-brand font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold tracking-[0.2em] uppercase">TRAYAKSH</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Crafting masterfully designed luxury homes and commercial landmarks with precision and passion.
            </p>
            <div className="flex gap-5">
              <FaInstagram className="text-white/40 hover:text-brand cursor-pointer transition-colors text-lg" />
              <FaLinkedinIn className="text-white/40 hover:text-brand cursor-pointer transition-colors text-lg" />
              <FaFacebookF className="text-white/40 hover:text-brand cursor-pointer transition-colors text-lg" />
              <FaTwitter className="text-white/40 hover:text-brand cursor-pointer transition-colors text-lg" />
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand">Services</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-brand group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand">Company</h4>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-brand group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm text-white/60">
                <IoLocationOutline size={22} className="text-brand shrink-0" />
                <span className="leading-relaxed">123 Architectural Blvd, <br />Design District, Hyderabad</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60">
                <IoCallOutline size={20} className="text-brand shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60">
                <IoMailOutline size={20} className="text-brand shrink-0" />
                <span>info@trayakshconstruction.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/30 text-center md:text-left font-medium">
            © {currentYear} TRAYAKSH Constructions & Interiors.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
            <Link href="/privacy-policy" className="hover:text-brand transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-brand transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      {/* Ghost Watermark */}
      <div className="absolute md:-left-50 -left-30 bottom-0 translate-y-1/3 translate-x-1/4 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[4.5rem] lg:text-[14rem] font-bold leading-none tracking-tighter">TRAYAKSH</h2>
      </div>
    </footer>
  );
}
