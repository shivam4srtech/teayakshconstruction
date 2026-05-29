'use client';
import { motion } from 'framer-motion';
import { MessageSquareText } from 'lucide-react';
import Link from 'next/link';

export default function VerticalFloatingButton() {
    const WHATSAPP_NUMBER = "918886060442"; // International country code added for direct API routing
  const PRE_FILLED_TEXT = "Hello Trayaksh Studio, I am exploring your design toolkits and want to discuss a custom construction project.";
  
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRE_FILLED_TEXT)}`;
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[999]"
    >
      <Link 
        href={whatsappUrl}
        target="_blank"
        className="group relative flex items-center"
      >
      

        {/* The Vertical Button Body */}
        <div className="bg-[#2D2926] hover:bg-[#A67153] text-white md:py-3 py-2 md:px-2 px-1 rounded-l-2xl border-l border-y border-[#A67153]/30 transition-all duration-500 flex flex-col items-center gap-3 shadow-[-10px_0_30px_rgba(0,0,0,0.1)]">
          
          {/* Icon at Top */}
          <div className="bg-white/10 md:p-2 p-1 rounded-full group-hover:scale-110 transition-transform duration-500">
            <MessageSquareText size={16} className="text-[#A67153] group-hover:text-white" />
          </div>

          {/* Vertical Text Logic */}
          <span 
            className="text-[11px] font-black uppercase tracking-[0.3em] whitespace-nowrap"
            style={{ writingMode: 'vertical-rl' }}
          >
           Free Consultation
          </span>

          {/* Bottom Indicator Dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#A67153] group-hover:bg-white animate-pulse" />
        </div>
      </Link>
    </motion.div>
  );
}