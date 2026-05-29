'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Cookie, Info, Lock, Eye, ArrowLeft, 
  RefreshCw, CheckCircle2, Sliders, Scale, FileText, ExternalLink 
} from 'lucide-react';
import Link from 'next/link';

const AUDIT_TABLE_DATA = [
  { name: "_trayaksh_session", type: "Essential", provider: "First Party", expiry: "Session", purpose: "Maintains secure dashboard form logic and retains active material calculator values." },
  { name: "_ga / _gid", type: "Analytics", provider: "Google Systems", expiry: "2 Years", purpose: "Compiles anonymous viewport telemetry logs to improve calculation runtimes." },
  { name: "fbp", type: "Marketing", provider: "Meta Systems", expiry: "3 Months", purpose: "Tailors relevant architectural alerts and bespoke custom villa design portfolio invitations." }
];

export default function CookiePolicyDetailedPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    functional: true,
    marketing: false
  });
  const [saveStatus, setSaveStatus] = useState(false);

  const handleSaveSettings = () => {
    setSaveStatus(true);
    localStorage.setItem('trayaksh_cookie_consent_detailed', JSON.stringify({
      ...preferences,
      updatedAt: new Date().toISOString()
    }));
    setTimeout(() => setSaveStatus(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F8F5F2] text-[#2D2926] font-sans antialiased selection:bg-[#A67153] selection:text-white pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-3 lg:px-16">
        

        {/* ================= HERO INTRO BANNER ================= */}
        <header className="max-w-4xl space-y-3 mb-4">
          <div className="inline-flex items-center gap-2 text-[#A67153] bg-white border border-gray-200/60 px-4 py-2 rounded-full shadow-sm">
            <ShieldCheck size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Global Compliance & Privacy Desk</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-[#2D2926] leading-[1.1]">
            Our Cookie Framework & <span className=" font-light text-[#A67153]">Privacy Manifest</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-lg font-normal leading-relaxed max-w-3xl">
            This tracking notice details how our digital architecture interfaces utilize storage cookies to maintain state integrity across our engineering calculators, protecting data metrics with transparent, user-controlled parameters.
          </p>
          <div className="text-[11px] text-gray-400 font-medium">
            <span>Document ID: T-COP-2026-V2</span> &bull; <span>Last Periodic Audit: May 2026</span>
          </div>
        </header>

        {/* ================= MAIN CONFIGURATION GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: DETAILED LEGAL CLAUSES & LIVE COMPLIANCE AUDIT (8 COLS) */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-black/[0.005] space-y-12">
            
            {/* Clause 1: Core Definitions */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2.5">
                <FileText size={18} className="text-[#A67153]" />
                1. Scope of Data Governance
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                When you input material specs or compute financial stamp matrices, our engine stores lightweight cookie strings directly inside your browser cache. These tokens exist exclusively to verify your inputs, ensuring you do not lose active data vectors when clicking between tool modules or changing tabs.
              </p>
            </section>

            {/* Clause 2: The Data Audit Table Matrix */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2.5">
                <Scale size={18} className="text-[#A67153]" />
                2. Complete Technical Cookie Audit
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Below is a comprehensive manifest of the specific diagnostic scripts deployed throughout our structural ecosystem:
              </p>

              {/* Responsive Table Core Container */}
              <div className="overflow-x-auto rounded-2xl border border-gray-200/60 shadow-sm mt-4">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#2D2926] text-white font-bold uppercase tracking-wider text-[9px]">
                      <th className="p-4">Key Token</th>
                      <th className="p-4">Classification</th>
                      <th className="p-4">Authority</th>
                      <th className="p-4">Longevity</th>
                      <th className="p-4">Functional Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600 font-medium bg-white">
                    {AUDIT_TABLE_DATA.map((cookie, i) => (
                      <tr key={i} className="hover:bg-[#F8F5F2]/40 transition-colors">
                        <td className="p-4 font-mono font-bold text-[#A67153] text-[11px]">{cookie.name}</td>
                        <td className="p-4 text-[#2D2926] font-bold text-[11px]">{cookie.type}</td>
                        <td className="p-4 text-gray-400">{cookie.provider}</td>
                        <td className="p-4 text-gray-400">{cookie.expiry}</td>
                        <td className="p-4 text-gray-500 leading-normal max-w-xs">{cookie.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Clause 3: Managing Cache Profiles */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2.5">
                <Info size={18} className="text-[#A67153]" />
                3. Individual Erasure Rights
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                You possess absolute operational governance over your local machine metadata. If you wish to wipe active calculator states or clear cached form data, you can purge your browser storage parameters at any point. To research custom instructions for your specific browser platform, follow the links below:
              </p>
              <div className="flex flex-wrap gap-4 pt-1 text-[11px] text-[#A67153] font-bold uppercase tracking-wider">
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#2D2926]">Google Chrome <ExternalLink size={11} /></a>
                <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#2D2926]">Apple Safari <ExternalLink size={11} /></a>
                <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#2D2926]">Mozilla Firefox <ExternalLink size={11} /></a>
              </div>
            </section>

          </div>

          {/* ================= RIGHT SIDE: INTERACTIVE CUSTOM PREFERENCES CONSOLE (4 COLS) ================= */}
          <aside className="lg:col-span-4 lg:sticky lg:top-36 space-y-6">
            
            <div className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/[0.005] space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D2926] border-b border-gray-50 pb-4">
                <Sliders size={16} className="text-[#A67153]" />
                <h3>Granular Consent Panel</h3>
              </div>

              <div className="space-y-4">
                {/* Switch Unit: Essential */}
                <div className="flex items-start justify-between gap-4 bg-[#F8F5F2]/40 p-3 rounded-xl border border-gray-100">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-[#2D2926] flex items-center gap-1.5"><Lock size={12} className="text-[#A67153]" /> Required Base</span>
                    <p className="text-[10px] text-gray-400 leading-snug">Maintains critical encryption loops and layout calculations.</p>
                  </div>
                  <span className="text-[9px] font-black uppercase text-gray-400 bg-white shadow-sm border border-gray-100 px-2 py-1 rounded">Locked</span>
                </div>

                {/* Switch Unit: Analytics */}
                <label className="flex items-start justify-between gap-4 p-3 rounded-xl border border-gray-100 hover:bg-[#F8F5F2]/30 transition-colors cursor-pointer select-none">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-[#2D2926] flex items-center gap-1.5"><Eye size={12} className="text-[#A67153]" /> Diagnostics</span>
                    <p className="text-[10px] text-gray-400 leading-snug">Helps our studio track and resolve mathematical bugs.</p>
                  </div>
                  <input 
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="w-4 h-4 text-[#A67153] rounded border-gray-200 focus:ring-0 accent-[#A67153] mt-1 shrink-0"
                  />
                </label>

                {/* Switch Unit: Functional */}
                <label className="flex items-start justify-between gap-4 p-3 rounded-xl border border-gray-100 hover:bg-[#F8F5F2]/30 transition-colors cursor-pointer select-none">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-[#2D2926] flex items-center gap-1.5"><Cookie size={12} className="text-[#A67153]" /> State Memory</span>
                    <p className="text-[10px] text-gray-400 leading-snug">Saves inputted plot calculations across browser sessions.</p>
                  </div>
                  <input 
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                    className="w-4 h-4 text-[#A67153] rounded border-gray-200 focus:ring-0 accent-[#A67153] mt-1 shrink-0"
                  />
                </label>

                {/* Switch Unit: Marketing */}
                <label className="flex items-start justify-between gap-4 p-3 rounded-xl border border-gray-100 hover:bg-[#F8F5F2]/30 transition-colors cursor-pointer select-none">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-[#2D2926] flex items-center gap-1.5"><RefreshCw size={12} className="text-[#A67153]" /> Tailored Ads</span>
                    <p className="text-[10px] text-gray-400 leading-snug">Allows custom portfolio mapping updates on social channels.</p>
                  </div>
                  <input 
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="w-4 h-4 text-[#A67153] rounded border-gray-200 focus:ring-0 accent-[#A67153] mt-1 shrink-0"
                  />
                </label>
              </div>

              {/* CTA Action Bar */}
              <button
                type="button"
                onClick={handleSaveSettings}
                disabled={saveStatus}
                className="w-full bg-[#2D2926] hover:bg-[#1A1817] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 relative disabled:bg-[#A67153]"
              >
                {saveStatus ? (
                  <>
                    <CheckCircle2 size={14} className="animate-pulse" /> Settings Locked Successfully
                  </>
                ) : (
                  <>Apply Custom Configuration</>
                )}
              </button>
            </div>

            {/* Zero Friction Privacy Guarantee Card */}
            <div className="bg-[#1A1817] text-white p-6 rounded-[2.5rem] border border-white/5 shadow-xl space-y-3">
              <span className="text-[9px] uppercase tracking-widest text-[#A67153] font-black block">Data Security Rule</span>
              <h4 className="text-xs font-bold text-gray-100">Zero Commercial Storage</h4>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                Trayaksh Studio does not sell personal identity logs or search histories. Your material measurements are processed within secure server instances and cleared automatically upon request.
              </p>
            </div>

          </aside>

        </div>

      </div>
    </main>
  );
}