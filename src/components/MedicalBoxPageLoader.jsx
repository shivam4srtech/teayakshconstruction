'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, Layers, CheckCircle2 } from 'lucide-react';

export default function MedicalBoxPageLoader({ isStatic = false }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(15);
  const [statusText, setStatusText] = useState("Calibrating Dust-Repellent Polymer Matrix...");

  useEffect(() => {
    if (isStatic) return;

    // Fast, fluid progression to 100% over ~1.1 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 220);
          return 100;
        }
        const jump = Math.floor(Math.random() * 22) + 12;
        const next = Math.min(prev + jump, 100);

        if (next > 40 && next < 75) {
          setStatusText("Verifying Zero Dust Absorption Standard...");
        } else if (next >= 75) {
          setStatusText("Loading 6 Clinical Storage Capacities...");
        }

        return next;
      });
    }, 110);

    return () => clearInterval(interval);
  }, [isStatic]);

  // If used inside loading.js as a server suspense fallback, always render
  if (isStatic) {
    return (
      <div className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-slate-950 text-white select-none overflow-hidden">
        <LoaderContent progress={75} statusText="Preparing Divyamrit Medical Storage Showcase..." />
      </div>
    );
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="medical-box-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-slate-950 text-white select-none overflow-hidden"
        >
          <LoaderContent progress={progress} statusText={statusText} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LoaderContent({ progress, statusText }) {
  return (
    <>
      {/* BACKGROUND CLINICAL AMBIENCE */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sterile Cleanroom Matrix Grid */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(rgba(45, 212, 191, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient Teal & Cyan Glow Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-400/10 rounded-full blur-[90px] pointer-events-none" />
      </div>

      {/* CENTERPIECE CONTAINER */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm w-full">
        
        {/* ROTATING DUST-REPELLENT STERILIZATION CORE */}
        <div className="relative w-28 h-28 flex items-center justify-center mb-7">
          
          {/* Outer Pulsing Glow Ring */}
          <motion.div
            animate={{ 
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.7, 0.35]
            }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-teal-400/30 bg-teal-500/5 blur-xs"
          />

          {/* Dotted Precision Orbit Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            className="absolute -inset-2 rounded-full border border-dashed border-teal-400/40"
          />

          {/* Inner Counter-Rotating Hex Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            className="absolute inset-1 rounded-full border border-teal-300/20"
          />

          {/* Solid Core with Divyamrit Insignia */}
          <motion.div
            animate={{ 
              scale: [0.96, 1.04, 0.96]
            }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
            className="relative w-16 h-16 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-teal-500/50 shadow-xl shadow-teal-500/20 flex items-center justify-center p-2.5"
          >
            <Image
              src="/images/medical-boxes/divyamrit-symbol.png"
              alt="Divyamrit Industries"
              width={42}
              height={42}
              className="object-contain drop-shadow-md"
              priority
            />
          </motion.div>

          {/* Orbiting Cleanroom Particle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
            className="absolute -inset-2 pointer-events-none"
          >
            <div className="w-2 h-2 rounded-full bg-teal-300 shadow-md shadow-teal-300 transform translate-x-14" />
          </motion.div>
        </div>

        {/* TYPOGRAPHY BRACKET */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-300 text-[10px] font-black uppercase tracking-[0.25em]">
            <Sparkles size={11} className="text-teal-400" />
            <span>Dust-Repellent Certified</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-none">
            Divyamrit Industries
          </h1>

          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-400">
            100% Medical-Grade Storage
          </p>
        </div>

        {/* PROGRESS BAR WITH GLOW SHIMMER */}
        <div className="w-full max-w-[240px] space-y-2">
          <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/60 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-300 rounded-full relative"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.15 }}
            >
              {/* Shimmer Light Bar */}
              <motion.div
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
                className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white to-transparent opacity-70"
              />
            </motion.div>
          </div>

          {/* Progress Percent & Live Status */}
          <div className="flex items-center justify-between text-[10px] font-semibold text-gray-400">
            <span className="truncate pr-2">{statusText}</span>
            <span className="font-mono text-teal-300 font-bold shrink-0">{progress}%</span>
          </div>
        </div>

        {/* BOTTOM HYGIENE PILLARS */}
        <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-center gap-3 text-[9px] font-black uppercase tracking-widest text-gray-400">
          <span className="flex items-center gap-1 text-gray-300">
            <ShieldCheck size={11} className="text-teal-400" />
            Medical-Grade
          </span>
          <span className="text-slate-700">•</span>
          <span className="flex items-center gap-1 text-gray-300">
            <Sparkles size={11} className="text-teal-400" />
            Zero Dust
          </span>
          <span className="text-slate-700">•</span>
          <span className="flex items-center gap-1 text-gray-300">
            <Layers size={11} className="text-teal-400" />
            6 Sizes
          </span>
        </div>

      </div>
    </>
  );
}
