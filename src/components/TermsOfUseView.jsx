'use client';
import { useState } from 'react';
import { Scale, Calendar, HelpCircle, FileText, AlertTriangle, ShieldCheck, HelpCircleIcon } from 'lucide-react';

const TERMS_SECTIONS = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "intellectual-property", label: "2. Intellectual Property & Licenses" },
  { id: "customizations", label: "3. Plan Customization Limits" },
  { id: "payment-billing", label: "4. Payments, CAD Fees & Refunds" },
  { id: "liability-disclaimer", label: "5. Engineering Liability Exclusion" },
  { id: "termination", label: "6. Service Suspension Parameters" },
  { id: "jurisdiction", label: "7. Governing Law & Jurisdiction" }
];

export default function TermsOfUseView() {
  const [activeSection, setActiveSection] = useState("acceptance");

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
            <Scale size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Legal Agreement</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
            Terms of Use & <span className=" font-light text-[#A67153]">Service Guidelines</span>
          </h1>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
            <Calendar size={14} />
            <span>Last Reviewed & Effective: May 23, 2026</span>
          </div>
        </header>

        {/* ================= TERMS MATRIX SPLIT SYSTEM ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDEBAR: STICKY ANCHOR TRACKER (4 COLS) */}
          <nav className="lg:col-span-4 lg:sticky lg:top-32 bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/[0.005] space-y-2 hidden lg:block">
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 block px-3 mb-3">
              Agreement Index Map
            </span>
            {TERMS_SECTIONS.map((sec) => (
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

          {/* RIGHT COLUMN: REFINED LEGAL ARGUMENTATION (8 COLS) */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-black/[0.005] space-y-12">
            
            {/* SECTION 1 */}
            <section id="acceptance" className="space-y-4 scroll-mt-32">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <FileText size={18} className="text-[#A67153]" /> 1. Acceptance of Terms
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                By accessing, browsing, evaluating, or interacting with the digital parameters of Trayaksh Studio, purchasing pre-engineered architectural floor plans, or commissioning personalized layout updates, you express your binding legal acceptance of these Terms of Use. 
              </p>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                If you do not agree with any structural clause, policy baseline, or boundary parameters outlined within this document, you must discontinue your access to our web models and blueprint delivery assets immediately.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="intellectual-property" className="space-y-4 scroll-mt-32">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#A67153]" /> 2. Intellectual Property & Licenses
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                All digital architectural visual templates, 3D interactive layout board elements, schematic configurations, and text assets featured on this platform are protected under national copyright frameworks.
              </p>
              <div className="bg-[#F8F5F2] border-l-4 border-[#2D2926] p-5 rounded-r-xl space-y-2">
                <h4 className="text-xs font-bold text-[#2D2926]">Single Structural Construction License</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  When you purchase a catalog blueprint, Trayaksh Studio grants you a non-exclusive, non-transferable right to build <strong className="text-[#2D2926]">one (1) individual residential property</strong> using the download files. Selling, copying, or sharing these CAD files with third-party networks for multiple builds without a developer permit is strictly prohibited.
                </p>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="customizations" className="space-y-4 scroll-mt-32">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <Scale size={18} className="text-[#A67153]" /> 3. Plan Customization Limits
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Any modifications made to our pre-engineered catalogs (e.g., matching a layout to an alternate 30x40 or 40x60 plot size) are handled through scheduled design appointments. While our engineering board aims to match your spatial adjustments perfectly, we reserve the right to decline column adjustments that threaten the structural integrity of the home.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="payment-billing" className="space-y-4 scroll-mt-32">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <FileText size={18} className="text-[#A67153]" /> 4. Payments, CAD Fees & Refunds
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                All prices for blueprint items, bill-of-quantities data, or liaison adjustments must be settled in full before we release high-resolution CAD data sheets. 
              </p>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                <strong className="text-[#2D2926]">Refund Limitation Policy:</strong> Due to the instantly accessible nature of downloadable digital assets and working blueprints, <span className="text-[#A67153] font-bold">all architectural product sales are completely final and non-refundable</span> once the CAD or PDF download link is issued.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="liability-disclaimer" className="space-y-4 scroll-mt-32">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <AlertTriangle size={18} className="text-[#A67153]" /> 5. Engineering Liability Exclusion
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Our blueprints are engineered to align with general National Building Codes (NBC). However, because individual plot conditions, soil profiles, and regional seismic variables change dramatically based on geographic location:
              </p>
              <div className="bg-red-50/50 border border-red-100 p-5 rounded-2xl text-xs text-gray-500 leading-relaxed space-y-2">
                <p className="font-bold text-red-900 uppercase tracking-wide text-[10px]">Mandatory Ground-Level Verification:</p>
                <p>
                  Trayaksh Studio does not provide local structural site oversight. The buyer is legally required to hire a licensed local civil contractor or structural engineer to review all steel schedules, load bearings, and foundation calculations before pouring concrete on site.
                </p>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="termination" className="space-y-4 scroll-mt-32">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <AlertTriangle size={18} className="text-[#A67153]" /> 6. Service Suspension Parameters
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                We reserve the right to immediately terminate or block your portal access, deactivate account dashboards, and cancel pending layout services without notice if we detect fraudulent activity, payment failures, or any attempt to reverse-engineer our 3D model meshes.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="jurisdiction" className="space-y-4 scroll-mt-32 pt-6 border-t border-gray-100">
              <h2 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <HelpCircleIcon size={18} className="text-[#A67153]" /> 7. Governing Law & Jurisdiction
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                These terms, transaction pipelines, and blueprint disputes are governed strictly by national legal frameworks. Any claims or disagreements involving our architectural assets fall under the exclusive jurisdiction of the regional courts located where Trayaksh Studio has its primary corporate office.
              </p>

              {/* HELP ASSIST ACTION FOOTER ROW */}
              <div className="bg-[#F8F5F2] p-5 rounded-2xl border border-gray-100/50 flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
                <div>
                  <h4 className="text-xs font-bold text-[#2D2926]">Unclear on these legal provisions?</h4>
                  <p className="text-[11px] text-gray-400">Our support desk can clarify copyright and usage rules anytime.</p>
                </div>
                <button className="bg-[#2D2926] hover:bg-[#1A1817] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all">
                  Contact Support Desk
                </button>
              </div>
            </section>

          </div>

        </div>

      </div>
    </main>
  );
}