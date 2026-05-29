'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { IoMdMenu } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { useModalStore } from '@/store/useModalStore';

const navLinks = [
  // { name: 'Projects', href: '/projects' },
  { name: 'Interior', href: '/interior' },
  { name: 'Pharmacy Setup', href: '/pharmacy-setup' },
  // { name: 'Floor Plans', href: '/floor-plan' },
  { name: 'Cost Estimator', href: '/cost-estimator' },
  { name: 'Tools', href: '/tools' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);
  const openModal = useModalStore((state) => state.openModal);
  return (
    <>
      {/* Pulse Animation CSS */}
      <style jsx global>{`
        @keyframes custom-pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #c4a47c; /* Your Brand Color */
          border-radius: 50%;
          animation: custom-pulse 2s infinite;
        }
      `}</style>

      <nav 
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 px-4 lg:px-16 py-4 ${
          scrolled || isOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className='flex gap-2'>
            <div className="lg:hidden flex-1">
                <button 
                  className="flex items-center justify-center transition-transform active:scale-90 z-[1001] relative" 
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <IoCloseOutline size={32} /> : <IoMdMenu size={32} fill='#000'/>}
                </button>
            </div>

         
            <Link href="/" className="flex items-center gap-3 z-[1001]">
              {/* <div className="w-10 h-10 border border-brand flex items-center justify-center bg-white">
                <span className="text-brand font-bold text-xl">T</span>
              </div> */}
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold tracking-[0.2em] text-brand-dark uppercase">TRAYAKSH</span>
                <span className="text-[8px] tracking-[0.3em] text-brand font-sans font-bold uppercase ">Construction & Interiors</span>
              </div>
            </Link>
          </div>
        
          <div className="hidden lg:flex items-center gap-8 px-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} 
                className={`text-[11px] font-bold uppercase tracking-widest relative group ${pathname === link.href ? 'text-brand' : 'text-brand-dark/70 hover:text-brand'}`}>
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-brand transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>

          {/* RIGHT: Action Buttons */}
          <div className="flex justify-end items-center gap-4 z-[1001]">
            {/* Desktop Quote Button */}
            <Link 
              href={'/contact'}
              className="hidden lg:block rounded-lg bg-brand hover:bg-brand-dark text-white px-4 py-3 text-[11px] font-bold uppercase tracking-widest transition-all">
              Connect Expert
            </Link>

            {/* Mobile Calling Button with Pulse Animation */}
            <a 
              href="tel:+918886060442"
              className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-full bg-brand text-white shadow-lg"
            >
              <div className="pulse-ring" style={{ animationDelay: '0s' }}></div>
              <div className="pulse-ring" style={{ animationDelay: '0.5s' }}></div>
              <IoIosCall size={20} className="relative z-10" /> 
            </a>
          </div>
        </div>

        {/* --- LEFT-SIDE MOBILE MENU OVERLAY --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ x: '-100%' }} // Opens from Left
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="fixed inset-0 bg-white z-[999] lg:hidden flex flex-col w-[100%]  shadow-2xl"
            >
              <div className="flex flex-col h-full px-7 pt-16 pb-12 overflow-y-auto">
                <div className="space-y-0">

                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between py-1 border-b border-gray-50"
                      >
                        <span className={`text-lg font-medium tracking-tight ${pathname === link.href ? 'text-brand ' : 'text-brand-dark'}`}>
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-[9px] uppercase tracking-widest text-brand-dark/40 font-bold mb-4">Contact Specialist</p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-brand-dark/70">
                      <IoCallOutline className="text-brand" size={18} />
                      <span className="text-sm font-bold">+91 88860 60442</span>
                    </div>
                  </div>
                  <a
                    href={'/contact'}
                    className="w-full bg-brand-dark rounded-lg text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg block text-center">
                    Book Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}