'use client';
import { motion } from 'framer-motion';
import { Cpu, Users, Eye, Layers } from 'lucide-react';

const PILLARS = [
  {
    icon: <Cpu size={24} />,
    title: "Technological Precision",
    desc: "We deploy advanced building information modeling (BIM) and high-fidelity 3D virtual reality environments so you experience your spaces prior to breaking ground."
  },
  {
    icon: <Layers size={24} />,
    title: "Material Honesty",
    desc: "No replicas. No compromises. We source authentic Statuario marble direct from Italian quarries, alongside raw seasoned timber and eco-certified structural steel."
  },
  {
    icon: <Users size={24} />,
    title: "Client Co-Authorship",
    desc: "We don't impose blueprints. Our lead design visionaries collaborate with you dynamically to customize layouts based entirely on your everyday lifestyle DNA."
  }
];

export default function OurPhilosophy() {
  return (
    <section className="py-10 bg-[#F8F5F2] text-[#2D2926]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Header Block */}
        <div className="mb-10">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153] mb-3 block">Design Pillars</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">
            The Ideals That <span className=" font-light text-[#A67153]">Govern Trayaksh</span>
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/[0.01] flex flex-col justify-between group hover:border-[#A67153]/30 hover:shadow-2xl transition-all duration-500"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-[#F8F5F2] text-[#A67153] flex items-center justify-center group-hover:bg-[#A67153] group-hover:text-white transition-all duration-500">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}