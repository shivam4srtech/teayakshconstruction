// components/Navbar.jsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Building2, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'INTERIORS', href: '#interiors' },
  { name: 'BLOG', href: '#blog' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={handleLinkClick}>
            <div className="relative">
              <Building2 className="w-7 h-7 text-amber-700 group-hover:text-amber-800 transition-colors duration-300" />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight text-stone-800">
                TERRAE<span className="text-amber-700">.</span>
              </span>
              <p className="text-[9px] tracking-wider text-stone-500 -mt-0.5">
                CONSTRUCTIONS & INTERIORS
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-stone-700 text-sm font-semibold tracking-wide hover:text-amber-700 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="#quote"
              className="bg-amber-700 text-white px-6 py-2.5 rounded-md font-semibold text-sm tracking-wide hover:bg-amber-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
          style={{ top: '100%' }}
        >
          <div className="flex flex-col p-6 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-stone-700 font-semibold py-2 hover:text-amber-700 transition-colors border-b border-stone-100"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#quote"
              onClick={handleLinkClick}
              className="bg-amber-700 text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-amber-800 transition-colors mt-3"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}