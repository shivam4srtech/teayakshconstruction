'use client';
import { useState } from 'react';
import { ShieldCheck, Calendar, Mail, FileText, Scale, Lock, Eye } from 'lucide-react';

const POLICY_SECTIONS = [
  { id: "introduction", label: "1. Introduction & Scope" },
  { id: "data-collection", label: "2. Information We Collect" },
  { id: "data-usage", label: "3. How We Use Your Data" },
  { id: "data-sharing", label: "4. Third-Party Sharing" },
  { id: "user-rights", label: "5. Your Legal Rights" },
  { id: "security", label: "6. Security Architecture" },
  { id: "contact", label: "7. Contact Legal Desk" }
];

export default function PrivacyPolicyView() {
  const [activeSection, setActiveSection] = useState("introduction");

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="py-24 bg-[#F8F5F2] text-[#2D2926] font-sans antialiased selection:bg-[#A67153] selection:text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-16 space-y-16">
        
        {/* ================= EDITORIAL HERO TITLE HEADER ================= */}
        <header className="max-w-3xl space-y-4 border-b border-gray-200/60 pb-10">
          <div className="inline-flex items-center gap-2 text-[#A67153] bg-white border border-gray-200/50 px-3.5 py-1.5 rounded-xl shadow-sm">
            <ShieldCheck size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Legal Desk</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
            Privacy Policy & <span className=" font-light text-[#A67153]">Data Operations</span>
          </h1>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
            <Calendar size={14} />
            <span>Last Updated / Reviewed: January 20, 2026</span>
          </div>
        </header>

        {/* ================= LEGAL MULTI-COLUMN INTERFACE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDEBAR: STICKY ANCHOR NAVIGATION (4 COLS) */}
          <nav className="lg:col-span-4 lg:sticky lg:top-32 bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/[0.005] space-y-2 hidden lg:block">
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 block px-3 mb-3">
              Policy Index Map
            </span>
            {POLICY_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`w-full text-left text-xs font-bold py-3 px-4 rounded-xl transition-all duration-300 block ${
                  activeSection === sec.id
                    ? 'bg-[#2D2926] text-white shadow-md'
                    : 'text-gray-400 hover:text-[#2D2926] hover:bg-[#F8F5F2]'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </nav>

          {/* RIGHT SIDEBAR: ROBUST COMPREHENSIVE LEGAL CONTENT (8 COLS) */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-black/[0.005] space-y-12">
            
            {/* SECTION 1 */}
            <section id="introduction" className="space-y-4 scroll-mt-32">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <FileText size={18} className="text-[#A67153]" /> 1. Introduction & Scope
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Welcome to Trayaksh Studio. We respect your digital privacy restrictions and are committed to protecting your personal information. This Privacy Policy outlines how our technical infrastructure collects, safely stores, uses, and discloses data whenever you interact with our digital workspace platforms, premium 3D modeling portals, customized site configurations, or download structural CAD blueprints.
              </p>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                By interacting with our platform parameters or initiating engineering layouts, you fully acknowledge and accept the systemic parameters described in this policy file.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="data-collection" className="space-y-4 scroll-mt-32">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <Eye size={18} className="text-[#A67153]" /> 2. Information We Collect
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                We collect specific pieces of data to run optimized design estimations and calibrate custom floor plans. This dataset is classified into two distinct categories:
              </p>
              
              {/* LEGAL SPECIFICATION TABLE */}
              <div className="overflow-x-auto rounded-xl border border-gray-200/60 bg-white mt-4">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#2D2926] text-white font-bold uppercase tracking-wider text-[9px]">
                      <th className="p-4">Data Class</th>
                      <th className="p-4">Collected Parameters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-500 font-medium">
                    <tr>
                      <td className="p-4 font-bold text-[#2D2926]">Identity & Contact</td>
                      <td className="p-4">Full name, official email address, mobile number, and unique account billing coordinates.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2D2926]">Project Site Parameters</td>
                      <td className="p-4">Plot dimensions (e.g., 40x50), structural orientation, facing data, and local municipal zone limits.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2D2926]">Technical Footprints</td>
                      <td className="p-4">IP logs, web analytics data, active device configurations, and navigation patterns across our 360 viewer meshes.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="data-usage" className="space-y-4 scroll-mt-32">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <Scale size={18} className="text-[#A67153]" /> 3. How We Use Your Data
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Your metrics are processed under legal guidelines strictly for structural execution performance. We use collected files to:
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-gray-500 list-disc list-inside pl-2">
                <li>Generate personalized architectural blueprints and calculate structural material logs.</li>
                <li>Process safe digital payments and trace specific bill-of-quantity logs.</li>
                <li>Optimize layout interactions inside our Three.js 360-degree pop-up windows.</li>
                <li>Fulfill local municipal clearance validation requests and setback adjustments.</li>
              </ul>
            </section>

            {/* SECTION 4 */}
            <section id="data-sharing" className="space-y-4 scroll-mt-32">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <Lock size={18} className="text-[#A67153]" /> 4. Third-Party Sharing Limits
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                <strong className="text-[#2D2926]">Trayaksh Studio does not sell, trade, or rent your identity files to third-party commercial marketing frameworks.</strong> We only distribute targeted architectural segments to trusted sub-contractors, such as authorized liaison structural engineering boards and payment gateways, exclusively to build your specific custom configuration.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="user-rights" className="space-y-4 scroll-mt-32">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#A67153]" /> 5. Your Legal Rights
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Depending on your local region and national structural blueprint guidelines, you maintain several core rights regarding your spatial calculations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#F8F5F2] p-4 rounded-xl border border-gray-100">
                  <h4 className="text-xs font-bold text-[#2D2926] mb-1">Right to Erasure & Rectification</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">You can modify your account info or ask us to completely delete your active site metrics at any point.</p>
                </div>
                <div className="bg-[#F8F5F2] p-4 rounded-xl border border-gray-100">
                  <h4 className="text-xs font-bold text-[#2D2926] mb-1">Data Portability Controls</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">Request full access to transfer your uploaded structural files and layout records safely.</p>
                </div>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="security" className="space-y-4 scroll-mt-32">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <Lock size={18} className="text-[#A67153]" /> 6. Security Architecture
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Our servers run 256-bit Secure Socket Layer (SSL) encryption setups to monitor digital payments and blueprint downloads. Access to client architectural assets remains locked underneath segmented multi-factor permissions, keeping structural maps completely safe from malicious intrusions.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="contact" className="space-y-4 scroll-mt-32 pt-6 border-t border-gray-100">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <Mail size={18} className="text-[#A67153]" /> 7. Contact Legal Desk
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                If you have questions about this privacy statement, cookie tracking settings, or data control adjustments, contact our operations desk directly:
              </p>
              
              <div className="bg-[#F8F5F2] p-5 rounded-2xl border border-gray-100/50 flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
                <div>
                  <h4 className="text-xs font-bold text-[#2D2926]">Trayaksh Studio Operations Board</h4>
                  <p className="text-[11px] text-gray-400">Response Window: Under 2 Business Days</p>
                </div>
                <a 
                  href="mailto:legal@trayaksh.com" 
                  className="bg-[#2D2926] hover:bg-[#1A1817] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all text-center"
                >
                  legal@trayaksh.com
                </a>
              </div>
            </section>

          </div>

        </div>

      </div>
    </main>
  );
}