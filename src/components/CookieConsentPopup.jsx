'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Cookie, ArrowRight, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentToken = localStorage.getItem('trayaksh_cookie_consent');
    if (!consentToken) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('trayaksh_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md w-auto z-[9999] font-sans antialiased"
        >
          <div className="bg-[#2D2926] text-white md:rounded-[2.5rem]  rounded-xl border border-white/5 p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#A67153]/10 rounded-full blur-2xl pointer-events-none" />
            
            <button 
              onClick={() => setIsVisible(false)}
              aria-label='close banner'
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A67153]">
                  <Cookie size={18} />
                </div>
                <div className="text-sm font-bold tracking-tight text-gray-100">Cookie Notice</div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                This website uses cookies to improve user experience. You can choose to accept them or read our settings to learn more.
              </p>

              <div className="flex items-center justify-between gap-4 pt-2">
                <Link 
                  href="/cookie-policy" 
                  aria-label="Learn more about our cookie policy"
                  onClick={() => setIsVisible(false)}
                  className="text-[11px] font-bold uppercase tracking-wider text-gray-400 hover:text-[#A67153] underline underline-offset-4 transition-colors"
                >
                  Learn More
                </Link>
                
                <button
                  type="button"
                  onClick={handleAccept}
                  className="flex items-center justify-center gap-1.5 bg-[#A67153] hover:bg-[#8E5E41] text-white text-[10px] font-bold uppercase tracking-wider py-3 px-5 rounded-xl shadow-md transition-all"
                >
                  Accept <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}