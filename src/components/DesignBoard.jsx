'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const BOARD_MEMBERS = [
  {
    name: "Mr. Vinay kumar Mishra",
    role: "Chief Adviser & Founder",
    credentials: "M.Tech, Civil Engineering",
    bio: "With over 20 years of experience in executing luxury residential projects, Vinay oversees master-planning, parametric framing, and spatial layouts for our ultra-luxury portfolio",
    image: "/images/vinay_mishra.webp", 
    linkedin: "#",
  },
  {
    name: "Mr. Prince Mishra",
    role: "Chief Design Visionary & Founder",
    credentials: "M.Tech, Architectural Association",
    bio: "With over 14+ years of luxury residential execution, Prince handles master-planning, parametric framing, and spatial layouts for our ultra-luxury portfolio.",
    image: "/images/founder_img.webp",
    linkedin: "https://www.linkedin.com/in/prince-kumar-mishra-a2bba2259/",
  },
];

export default function DesignBoard() {
  return (
    <section className="py-28 bg-white text-[#2D2926] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Editorial Header Section */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#A67153] mb-3 block">
              Leadership & Vision
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter leading-[1.2]">
              The Brains Behind <span className="font-light text-[#A67153]"> The Blueprints</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Our executive board brings together an elite convergence of avant-garde space planning, mathematical engineering, and meticulous material curation. We don't manage projects; we steward legacies.
            </p>
          </div>
        </div>

        {/* Profiles Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 justify-center">
          {BOARD_MEMBERS.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col h-full group"
            >
              {/* Profile Portrait Image Frame */}
              <div className="relative h-[420px] md:h-[500px] w-full rounded-[3rem] overflow-hidden bg-[#F8F5F2] mb-8 shadow-xl shadow-black/[0.01]">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill 
                 
                  className="object-cover object-top transition-transform duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-103"
                  sizes="(max-w-7xl) 50vw, 100vw"
                  priority={idx === 0}
                />
                
                {/* Micro Connect Buttons Box Overlaid on Image Hover */}
                <div className="absolute bottom-6 right-6 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <Link
                    href={member.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white text-[#2D2926] border border-gray-100 flex items-center justify-center hover:bg-[#A67153] hover:text-white transition-colors"
                    title="LinkedIn Profile"
                  >
                    <FaLinkedin size={16} />
                  </Link>
                </div>

                {/* Permanent Gradient Base Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent pointer-events-none" />
              </div>

              {/* Profile Identity Details Area */}
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-[#2D2926]">
                        {member.name}
                      </h3>
                      <p className="text-xs font-black text-[#A67153] uppercase tracking-wider mt-1">
                        {member.role}
                      </p>
                    </div>
                    <ArrowUpRight size={18} className="text-gray-300 group-hover:text-[#A67153] transition-colors mt-1" />
                  </div>
                  
                  {/* Executive Credentials Badge */}
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3 bg-[#F8F5F2] inline-block px-3 py-1 rounded-md">
                    {member.credentials}
                  </p>

                  <p className="text-gray-500 text-sm leading-relaxed mt-3">
                    {member.bio}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}