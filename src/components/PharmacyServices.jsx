import { IoMedkitOutline, IoFlaskOutline, IoShieldCheckmarkOutline  } from "react-icons/io5";
const SERVICES = [
  { title: "Ergonomic Shelving", desc: "Fast-moving drug accessibility with modular sliding racks.", icon: <IoMedkitOutline /> },
  { title: "Cold Chain Integration", desc: "Built-in medical refrigeration zones with power backup.", icon: <IoFlaskOutline /> },
  { title: "Secure Vaults", desc: "Compliant storage for Schedule H1 & Narcotics.", icon: <IoShieldCheckmarkOutline /> },
  { title: "Branding & Lighting", desc: "Anti-glare clinical lighting & luxury retail frontage.", icon: <IoShieldCheckmarkOutline /> }
];

export function PharmacyServices() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-medium text-brand-dark tracking-tight">Setup Specialized.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className="aspect-square bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 flex flex-col justify-center items-center text-center group hover:bg-brand-dark transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-inner flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h4 className="text-lg font-bold text-brand-dark group-hover:text-white mb-2">{s.title}</h4>
              <p className="text-xs text-brand-dark/50 group-hover:text-white/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}