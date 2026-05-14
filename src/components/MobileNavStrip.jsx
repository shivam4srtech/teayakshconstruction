'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  IoHomeOutline, 
  IoBusinessOutline, 
  IoCalculatorOutline, 
  IoLayersOutline, 
  IoCall 
} from 'react-icons/io5';

const navItems = [
  { name: 'Home', href: '/', icon: IoHomeOutline },
  { name: 'Projects', href: '/projects', icon: IoBusinessOutline },
  { name: 'Call', href: 'tel:+919876543210', isCenter: true },
  { name: 'Estimate', href: '/cost-estimator', icon: IoCalculatorOutline },
  { name: 'Plans', href: '/floor-plans', icon: IoLayersOutline },
];

export default function MobileNavStrip() {
  const pathname = usePathname();

  return (
    <div className="block sm:hidden fixed bottom-6 left-0 right-0 z-[2000] px-4 pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-md mx-auto h-16 bg-brand-dark/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex items-center justify-around px-2 pointer-events-auto relative"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          if (item.isCenter) {
            return (
              <div key={item.name} className="relative -top-6">
                {/* Outer Glow for Center Button */}
                <div className="absolute inset-0 bg-brand/30 rounded-full blur-xl animate-pulse" />
                
                <a 
                  href={item.href}
                  className="relative w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center shadow-lg border-4 border-gray-50 active:scale-90 transition-transform"
                >
                  <IoCall size={24} />
                </a>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-widest text-white">
                  {item.name}
                </span>
              </div>
            );
          }

          return (
            <Link key={item.name} href={item.href} className="flex flex-col items-center gap-1 group">
              <div className="relative">
                <item.icon 
                  size={20} 
                  className={`transition-colors duration-300 ${isActive ? 'text-brand' : 'text-white/60 group-hover:text-white'}`}
                />
                {isActive && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brand rounded-full"
                  />
                )}
              </div>
              <span className={`text-[10px] font-bold tracking-tight transition-colors ${isActive ? 'text-brand' : 'text-white/40'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}