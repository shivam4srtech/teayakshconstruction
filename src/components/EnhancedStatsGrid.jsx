'use client';
import { motion } from 'framer-motion';
import { IoHomeOutline, IoHammerOutline, IoCalendarOutline, IoPeopleOutline } from 'react-icons/io5';

const stats = [
  { label: 'Completed', value: '150+', suffix: 'Handovers', icon: <IoHomeOutline /> },
  { label: 'Live Sites', value: '45', suffix: 'Ongoing', icon: <IoHammerOutline /> },
  { label: 'Experience', value: '12', suffix: 'Years', icon: <IoCalendarOutline /> },
  { label: 'Happy Families', value: '2k+', suffix: 'Trust', icon: <IoPeopleOutline /> },
];

export default function SymmetricalStatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          // aspect-square ensures width === height
          className="group relative  overflow-hidden rounded-[2rem] bg-white p-3 lg:p-4 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand/30 transition-all duration-500 flex flex-col items-center justify-center text-center"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity duration-500" 
            style={{ backgroundImage: `radial-gradient(circle, #c4a47c 1px, transparent 1px)`, backgroundSize: '15px 15px' }} 
          />

          {/* Icon with Ring Effect */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-brand/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-brand group-hover:bg-brand-dark group-hover:text-white transition-colors duration-500 shadow-inner">
              {stat.icon}
            </div>
          </div>

          {/* Stats Content */}
          <div className="relative z-10">
            <h4 className="text-3xl lg:text-5xl font-medium text-brand-dark tracking-tighter mb-1">
              {stat.value}
            </h4>
            
            <p className="text-[9px] lg:text-[10px] uppercase font-black tracking-[0.2em] text-brand-dark/30">
              {stat.label}
            </p>

            {/* Suffix revealed on hover */}
            <div className="mt-2 overflow-hidden h-0 group-hover:h-5 transition-all duration-500">
                <p className="text-[10px] text-brand font-bold italic tracking-wider uppercase">
                  {stat.suffix}
                </p>
            </div>
          </div>

          {/* Architectural Corner Markings (Stunning Detail) */}
          <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-brand/20 group-hover:border-brand transition-colors" />
          <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-brand/20 group-hover:border-brand transition-colors" />
          <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-brand/20 group-hover:border-brand transition-colors" />
          <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-brand/20 group-hover:border-brand transition-colors" />
        </motion.div>
      ))}
    </div>
  );
}