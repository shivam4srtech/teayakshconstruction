// components/Navbar.jsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Building2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={handleLinkClick}>
            <div className="relative">
              <Building2 className="w-8 h-8 text-primary-600 group-hover:text-secondary-500 transition-colors duration-300" />
              <div className="absolute -inset-1 bg-secondary-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight text-gray-900">
                Blue<span className="text-secondary-500">Crest</span>
              </span>
              <p className="text-[10px] tracking-wider text-gray-500 -mt-1">
                CONSTRUCTION
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 hover:text-secondary-500 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
          style={{ top: '100%' }}
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-700 font-medium py-2 hover:text-secondary-500 transition-colors border-b border-gray-100"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="bg-primary-600 text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors mt-2"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}