'use client';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  const WHATSAPP_NUMBER = "918885499322"; // International country code added for direct API routing
  const PRE_FILLED_TEXT = "Hello Trayaksh Studio, I am exploring your design toolkits and want to discuss a custom construction project.";
  
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRE_FILLED_TEXT)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-auto font-sans hidden sm:block">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 md:p-4 rounded-full md:rounded-2xl shadow-2xl group transition-colors duration-300 relative border border-white/10"
      >
        {/* Dynamic Pulsing Notification Indicator Dot */}
        <span className="absolute top-0 right-0 flex h-3 w-3 -mt-0.5 -mr-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2D2926]"></span>
        </span>

        {/* WhatsApp Vector Icon Asset */}
        <div className="text-white shrink-0">
          <MessageCircle size={20} className="fill-white/20 group-hover:rotate-12 transition-transform duration-300" />
        </div>

        {/* Desktop Slide-out Label Text */}
        <span className="max-w-0 overflow-hidden md:group-hover:max-w-xs font-bold text-[11px] uppercase tracking-widest whitespace-nowrap opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-in-out">
          CHAT WITH EXPERTS
        </span>
      </motion.a>
    </div>
  );
}