'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Compass, ArrowLeft, Home, Grid, 
  Calculator, ChevronRight, HelpCircle 
} from 'lucide-react';
export default function NotFoundPage(){
    return(
        <>
            <main className="relative min-h-screen bg-[#F8F5F2] text-[#2D2926] font-sans antialiased flex items-center justify-center overflow-hidden py-16 pt-28">
      
                {/* BACKGROUND DECORATIVE ARCHITECTURAL BLUEPRINT GRID */}
                <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#2D2926_1px,transparent_1px),linear-gradient(to_bottom,#2D2926_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
                
                {/* RADIAL LIGHT FLARES FOR ATMOSPHERIC DEPTH */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A67153]/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2D2926]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-5xl w-full mx-auto px-5 md:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* ================= LEFT SIDE: ABSTRACT GEOMETRIC ARTWORK (5 COLS) ================= */}
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                        
                        {/* Outer Dashed Rotating Scale Layout Ring */}
                        <motion.div 
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                            className="absolute inset-0 rounded-[3rem] border border-dashed border-[#A67153]/30"
                        />

                        {/* Middle Floating Structural Frame Boundary */}
                        <motion.div 
                            animate={{ 
                            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
                            rotate: 360
                            }}
                            transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
                            className="absolute w-[85%] h-[85%] border-2 border-[#2D2926]/10 bg-white/40 backdrop-blur-sm"
                        />

                        {/* Core Error Typography Mask */}
                        <div className="relative z-10 flex flex-col items-center justify-center">
                            <motion.h1 
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                            className="text-7xl md:text-8xl font-black tracking-tighter text-[#2D2926] select-none"
                            >
                            404
                            </motion.h1>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#A67153] pl-[0.3em] -mt-2">
                            Structural Void
                            </span>
                        </div>

                        </div>
                    </div>

                    {/* ================= RIGHT SIDE: ESCAPE MATRIX & ROUTING LIKS (7 COLS) ================= */}
                    <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                        
                        <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 text-[#A67153] bg-white border border-gray-200/60 px-3.5 py-1.5 rounded-xl shadow-sm justify-center lg:justify-start">
                            <Compass size={13} className="animate-spin-slow" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Navigation Alert</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#2D2926]">
                            This Plot is <span className="font-light text-[#A67153]">Unmapped</span>
                        </h2>
                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
                            The layout or schematic page parameters you are attempting to trace do not exist within our synchronized architectural directory. Let’s re-route your session.
                        </p>
                        </div>

                        {/* HIGH-CONVERSION PORTAL LINK CHANNELS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0 mb-0">
                        
                        <Link href="/" className="group bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm hover:border-[#A67153]/30 transition-all duration-300 flex items-center justify-between text-left">
                            <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#F8F5F2] text-[#A67153] flex items-center justify-center shrink-0">
                                <Home size={16} />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-[#2D2926]">Main Showroom</h4>
                                <p className="text-[10px] text-gray-400">Return to landing dashboard.</p>
                            </div>
                            </div>
                            <ChevronRight size={14} className="text-gray-300 group-hover:text-[#A67153] transform group-hover:translate-x-0.5 transition-all" />
                        </Link>

                        <Link href="/floor-plans" className="group bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm hover:border-[#A67153]/30 transition-all duration-300 flex items-center justify-between text-left">
                            <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#F8F5F2] text-[#A67153] flex items-center justify-center shrink-0">
                                <Grid size={16} />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-[#2D2926]">Popular Blueprints</h4>
                                <p className="text-[10px] text-gray-400">Explore pre-vetted house plans.</p>
                            </div>
                            </div>
                            <ChevronRight size={14} className="text-gray-300 group-hover:text-[#A67153] transform group-hover:translate-x-0.5 transition-all" />
                        </Link>

                        <Link href="/home-loan-emi-calculator" className="group bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm hover:border-[#A67153]/30 transition-all duration-300 flex items-center justify-between text-left">
                            <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#F8F5F2] text-[#A67153] flex items-center justify-center shrink-0">
                                <Calculator size={16} />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-[#2D2926]">Home Loan Calculator</h4>
                                <p className="text-[10px] text-gray-400">Re-verify capital amortization maps.</p>
                            </div>
                            </div>
                            <ChevronRight size={14} className="text-gray-300 group-hover:text-[#A67153] transform group-hover:translate-x-0.5 transition-all" />
                        </Link>

                        <Link href="/contact" className="group bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm hover:border-[#A67153]/30 transition-all duration-300 flex items-center justify-between text-left">
                            <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#F8F5F2] text-[#A67153] flex items-center justify-center shrink-0">
                                <HelpCircle size={16} />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-[#2D2926]">Support Desk</h4>
                                <p className="text-[10px] text-gray-400">Connect with studio liaisons.</p>
                            </div>
                            </div>
                            <ChevronRight size={14} className="text-gray-300 group-hover:text-[#A67153] transform group-hover:translate-x-0.5 transition-all" />
                        </Link>

                        </div>

                        {/* PRIMARY IMMEDIATE BACK ESCAPE TRIGGER LINK */}
                        <div className="pt-4 flex justify-center lg:justify-start">
                        <button 
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-2 bg-[#2D2926] hover:bg-[#1A1817] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md group active:scale-95"
                        >
                            <ArrowLeft size={13} className="transform group-hover:-translate-x-0.5 transition-transform" /> 
                            Go Back Previous Plot
                        </button>
                        </div>

                    </div>

                    </div>
                </div>
            </main>
        </>
    )
}