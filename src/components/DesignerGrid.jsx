'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Linkedin, Palette, Award } from 'lucide-react';
import { FaInstagram, FaLinkedin  } from "react-icons/fa";

const DESIGNERS = [
  {
    id: 1,
    name: "Aanya Sharma",
    role: "Lead Interior Architect",
    specialty: "Sustainable Minimalism",
    bio: "Specializing in blending organic textures with clean, modern structural lines.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
    signature: "Zen-Modern 2026"
  },
  {
    id: 2,
    name: "Vikram Malhotra",
    role: "Senior Spatial Designer",
    specialty: "Industrial Luxury",
    bio: "Focuses on bold metal accents and heritage wood restoration for a timeless feel.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
    signature: "Urban Loft Concept"
  },
  {
    id: 3,
    name: "Riya Iyer",
    role: "Concept & Lighting Expert",
    specialty: "Luminous Aesthetics",
    bio: "Architecting mood through advanced lighting automation and color psychology.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
    signature: "Celestial Penthouses"
  }
];

export default function DesignerGrid() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Palette size={18} className="text-[#A67153]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153]">The Minds</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-[#2D2926]">
              Our Creative <span className="italic font-light">Visionaries</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-[280px] leading-relaxed border-l border-gray-100 pl-6">
            Meet the award-winning designers who turn Trayaksh blueprints into living sanctuaries.
          </p>
        </div>

        {/* Designers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {DESIGNERS.map((member, i) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden mb-8">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[0.5]"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#A67153] flex items-center gap-2">
                    <Award size={12} /> {member.specialty}
                  </p>
                </div>

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-[#2D2926]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2D2926] hover:bg-[#A67153] hover:text-white transition-colors">
                      <FaInstagram  size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2D2926] hover:bg-[#A67153] hover:text-white transition-colors">
                      <FaLinkedin  size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-[#2D2926] group-hover:text-[#A67153] transition-colors">
                    {member.name}
                  </h4>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">
                    ID: 00{member.id}
                  </span>
                </div>
                <p className="text-[#A67153] text-[11px] font-bold uppercase tracking-[0.2em]">
                  {member.role}
                </p>
                <div className="h-[1px] w-full bg-gray-100 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <p className="text-gray-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {member.bio}
                </p>
                <p className="text-[10px] italic text-gray-300">
                  Signature Project: {member.signature}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 bg-[#2D2926] rounded-[3rem] text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-medium mb-6">Ready to collaborate with our lead designers?</h3>
            <button className="bg-[#A67153] hover:bg-white hover:text-[#2D2926] text-white px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] transition-all">
              Book a Design Session
            </button>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </motion.div>

      </div>
    </section>
  );
}