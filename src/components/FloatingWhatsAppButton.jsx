'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  const WHATSAPP_NUMBER = "918885499322"; 
  const [whatsappUrl, setWhatsappUrl] = useState('#');

  useEffect(() => {
    // Dynamically safely captures the precise page path on client execution mount
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      const baseText = "Hello Trayaksh Construction & Interiors, I am exploring your design toolkits and want to discuss a custom construction project.";
      const completeMessage = `${baseText}\n\nRedirected From: ${currentUrl}`;
      
      setWhatsappUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(completeMessage)}`);
    }
  }, []);

  return (
    <div className="fixed md:bottom-18 bottom-36 md:right-3 right-4 z-[999] pointer-events-auto font-sans">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      
        className="flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white md:w-14 md:h-14 w-[40px] h-[40px] rounded-full shadow-2xl group transition-colors duration-300 relative border border-white/10"
        title="Chat with our Architecture Experts"
      >
        

        {/* WhatsApp Vector Icon Asset */}
        <MessageCircle 
          size={24} 
          className="fill-white/20 transform group-hover:rotate-12 transition-transform duration-300" 
        />
      </motion.a>
    </div>
  );
}