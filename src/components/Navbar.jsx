'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Interiors', href: '/interiors' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 px-5 lg:px-16 py-4 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border border-brand flex items-center justify-center transition-colors group-hover:bg-brand">
              <span className="text-brand group-hover:text-white font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-[0.2em] text-brand-dark uppercase">teayaksh</span>
              <span className="text-[8px] tracking-[0.3em] text-brand font-sans font-bold uppercase">Constructions & Interiors</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`text-[11px] font-sans font-bold uppercase tracking-widest transition-colors relative group ${
                    isActive ? 'text-brand' : 'text-brand-dark/70 hover:text-brand'
                  }`}
                >
                  {link.name}
                  {/* Underline for active and hover states */}
                  <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-brand transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden lg:block bg-brand hover:bg-brand-dark text-white px-8 py-3 text-[11px] font-sans font-bold uppercase tracking-widest transition-all cursor-pointer">
              Get A Quote
            </button>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden text-brand-dark p-1" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-[999] lg:hidden transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full p-8 pt-24">
            <div className="space-y-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-2xl font-medium tracking-tight ${
                      isActive ? 'text-brand' : 'text-brand-dark'
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      {link.name}
                      {isActive && <div className="w-2 h-2 rounded-full bg-brand" />}
                    </div>
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-auto pb-10">
              <button className="w-full bg-brand text-white py-5 font-sans font-bold uppercase tracking-widest">
                Request a Quote
              </button>
              <p className="text-center mt-6 text-brand-dark/40 text-[10px] uppercase tracking-widest">
                © 2024 Teayaksh Constructions
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}