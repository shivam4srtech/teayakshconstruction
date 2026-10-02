'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Truck, 
  ArrowUpRight 
} from 'lucide-react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function MedicalBoxFooter() {
  const currentYear = new Date().getFullYear();

  const getWhatsAppUrl = () => {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://trayakshconstruction.com/medical-boxes';
    const text = `Hello Divyamrit Industries, I am inquiring about Medical Storage Boxes.\n\nPage Reference: ${pageUrl}\nPlease share wholesale pricing and dispatch terms.`;
    return `https://wa.me/918886060442?text=${encodeURIComponent(text)}`;
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      
      {/* TOP FACTORY DISPATCH & HIGHLIGHTS BANNER */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Dust-Repellent Surface</p>
              <p className="text-[11px] text-gray-400 mt-0.5">Proprietary resin never absorbs dust</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">100% Medical-Grade</p>
              <p className="text-[11px] text-gray-400 mt-0.5">Certified for clinical environments</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Modular Storage</p>
              <p className="text-[11px] text-gray-400 mt-0.5">Custom partition dividers & caps</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Direct Dispatch</p>
              <p className="text-[11px] text-gray-400 mt-0.5">Bulk delivery across all Indian states</p>
            </div>
          </div>

        </div>
      </div>

      {/* MAIN FOOTER COLUMNS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              
              <div>
                <span className="text-xl font-black tracking-tight text-white uppercase block leading-none">
                  Divyamrit Industries
                </span>
                <span className="text-xs text-teal-400 font-bold uppercase tracking-wider mt-1 block">
                  A quality product for a better choice
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
              We manufacture 100% Medical-Grade Plastic Storage Boxes engineered specifically for healthcare environments, pharmacies, cleanrooms, and clinical distribution centers.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-gray-300 space-y-1.5">
              <p className="font-bold text-white uppercase tracking-wider text-[11px] text-teal-300">
                Healthcare Setup Partner
              </p>
              <p className="text-[11px] leading-relaxed text-gray-400">
                Marketed & integrated across India by <strong className="text-white">Trayaksh Construction & Interiors</strong> for turnkey pharmacy interior storage rack designs.
              </p>
              <Link 
                href="/pharmacy-setup"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#A67153] hover:underline pt-1"
              >
                <span>Explore Turnkey Pharmacy Setup Solutions</span>
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>

          {/* BOX SIZES DIRECTORY */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-400">
              6 Standard Sizes
            </p>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span>Box No. 1 (8.5&quot; × 3&quot; × 2.5&quot;)</span>
                <span className="text-white font-bold">₹25/-</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span>Box No. 2 (10&quot; × 3&quot; × 2.5&quot;)</span>
                <span className="text-white font-bold">₹33/-</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span>Box No. 3 (9.5&quot; × 4&quot; × 3.5&quot;)</span>
                <span className="text-white font-bold">₹39/- </span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span>Box No. 4 (11&quot; × 5&quot; × 4&quot;)</span>
                <span className="text-white font-bold">₹69/-</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span>Box No. 5 (13&quot; × 6&quot; × 4.5&quot;)</span>
                <span className="text-white font-bold">₹95/-</span>
              </li>
              <li className="flex items-center justify-between pb-1">
                <span>Box No. 6 (15&quot; × 7&quot; × 5&quot;)</span>
                <span className="text-white font-bold">₹149/-</span>
              </li>
            </ul>
          </div>

          {/* CONTACT & SUPPLY TEAM */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-400">
              Direct Supply & Inquiries
            </p>

            <div className="space-y-3 text-xs text-gray-300">
              <a 
                href="tel:+918886060442"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 transition-colors"
              >
                <Phone size={14} className="text-teal-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Primary Order Desk</span>
                  <span className="font-bold text-white text-sm">+91 88860 60442</span>
                </div>
              </a>

              <a 
                href="tel:+919985199903"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 transition-colors"
              >
                <Phone size={14} className="text-teal-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Secondary Dispatch Desk</span>
                  <span className="font-bold text-white text-sm">+91 99851 99903</span>
                </div>
              </a>

              <a 
                href="mailto:divyamritindustries@gmail.com"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 transition-colors"
              >
                <Mail size={14} className="text-teal-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Official Email</span>
                  <span className="font-bold text-white text-xs">divyamritindustries@gmail.com</span>
                </div>
              </a>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <FaWhatsapp size={16} />
              <span>Connect On WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* COPYRIGHT & PARTNERSHIP NOTICE */}
      <div className="border-t border-slate-800/90 py-6 px-4 sm:px-6 lg:px-12 bg-slate-950 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>
            © {currentYear} <strong>Divyamrit Industries</strong>. All Rights Reserved. A quality product for a better choice.
          </p>
          <p className="text-[11px] text-gray-400">
            Promoted by <strong>Trayaksh Construction &amp; Interiors</strong>
          </p>
        </div>
      </div>

    </footer>
  );
}
