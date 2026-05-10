export function PharmacyROI() {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="bg-brand/10 rounded-[3rem] p-8 lg:p-16 border border-brand/20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight">Turnkey Handover in <span className="text-brand">45 Days.</span></h2>
            <p className="text-white/60 text-sm lg:text-lg">
              We handle everything from civil work and custom furniture to glasswork 
              and electricals, so you can focus on your inventory and licensing.
            </p>
            <ul className="space-y-4">
              {["Modular Counter Systems", "Digital Signage Ready", "Fire Safety Compliance"].map(item => (
                <li key={item} className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-widest">
                  <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-shrink-0">
             <button className="bg-brand text-white px-12 py-6 rounded-2xl font-bold uppercase text-xs tracking-[0.3em] shadow-2xl shadow-brand/20 hover:scale-105 transition-transform">
                Download Brochure
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}