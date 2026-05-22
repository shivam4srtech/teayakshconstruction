'use client';
import { useState, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
// IMPORT THE INSTANCE DIRECTLY TO FIXED THE REFERENCE ERROR
import * as THREE from 'three'; 
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture, Html, Environment } from '@react-three/drei';
import { Share2, ThumbsUp, Scale, ZoomIn, Info, Download, ArrowRight, UserCheck, X, Move } from 'lucide-react';

// SPECIFICATIONS DATA MATRIX (Ref: Image 4)
const PROJECT_SPECIFICATIONS = [
  { icon: <Scale size={18} />, label: "Area Parameters", value: "40x50 sq.ft." }, //
  { icon: <Scale size={18} />, label: "Execution Price Base", value: "₹40,45,501" }, //
  { icon: <Scale size={18} />, label: "Floors / Levels", value: "2" }, //
  { icon: <Scale size={18} />, label: "BHK Configuration", value: "3" }, //
  { icon: <Scale size={18} />, label: "Scientific Vastu Compliance", value: "False" }, //
  { icon: <Scale size={18} />, label: "Construction Sector", value: "RESIDENTIAL" } //
];

// CONTENT DETAILS (Ref: Image 2)
const PROJECT_DESCRIPTION = {
  title: "Explore A Stunning 3 Bedroom G+1 Residential House Plan Designed For A 40x50 West Facing Plot.", //
  category: "Residential Elite",
  mainImageUrl: "https://images.unsplash.com/photo-1678132446331-da900be50e27?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  tagline: "This functional, affordable, and luxury-spec blueprint prioritizes modern living through spatial mathematics and material honesty.",
};

export default function CoutureShowroomPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 pb-10 bg-[#F8F5F2] text-[#2D2926]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Core Layout Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ================= LEFT COLUMN: STUNNING 3D SHOWROOM VIEW (Ref: Image 2 Style) ================= */}
          <div className="lg:col-span-7 bg-white p-4 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-black/[0.005] group">
            <div 
              className="relative h-[480px] md:h-[380px] rounded-[3rem] overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100 cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <Image 
                src={PROJECT_DESCRIPTION.mainImageUrl} 
                alt="Trayaksh 3D House Layout"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                priority
              />

              {/* Functional Interaction Badge Ribbons */}
              <div className="absolute top-6 left-6 z-10 flex gap-2.5">
                <div className="flex items-center gap-1.5 bg-white border border-gray-100/50 text-[10px] text-gray-500 font-black px-3.5 py-1.5 rounded-xl shadow-sm uppercase tracking-wider">
                  <ThumbsUp size={11} className="text-[#A67153]" /> <span>22</span> {/* */}
                </div>
                <div className="flex items-center gap-1.5 bg-white border border-gray-100/50 text-[10px] text-gray-500 font-black px-3.5 py-1.5 rounded-xl shadow-sm uppercase tracking-wider">
                  <UserCheck size={11} className="text-[#A67153]" /> <span>14k+ Viewers</span>
                </div>
              </div>

              {/* Floating Zoom Indicator Overlay on Hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-md text-[#2D2926] rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                <ZoomIn size={18} />
              </div>
            </div>

            {/* Quick-Action Bar Below Image */}
            <div className="flex items-center justify-between mt-6 px-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Layout Index ID: <span className="text-[#2D2926]">TRAYAKSH_4050</span></span>
              <div className="flex items-center gap-2">
                <button className="p-2.5 rounded-xl bg-[#F8F5F2] text-gray-400 hover:text-[#A67153] hover:bg-white transition-colors border border-transparent hover:border-gray-100">
                  <Share2 size={15} /> {/* */}
                </button>
                <button className="px-5 py-2.5 rounded-xl bg-[#A67153] hover:bg-[#8E5E41] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-300">
                  <Download size={14} /> Download CAD Blueprints
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: STUNNING PROJECT DETAILS (Ref: Image 4 Data) ================= */}
          <aside className="lg:col-span-5 space-y-10">
           
            {/* Specifications Matrix Dashboard */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2.5 mb-2 text-xs font-semibold uppercase tracking-wider text-[#2D2926]">
                <Info size={16} className="text-[#A67153]" />
                <h4>Configuration Parameters </h4> {/* */}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {PROJECT_SPECIFICATIONS.map((spec, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100/50 space-y-1 hover:border-[#A67153]/20 transition-all duration-300">
                    <div className="flex items-center gap-2 text-[#A67153]">
                      {spec.icon} <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">{spec.label}</span>
                    </div>
                    <p className="text-sm font-black text-[#2D2926] truncate">{spec.value}</p> {/* */}
                  </div>
                ))}
              </div>
            </div>

            {/* CALL TO ACTION PROMPT */}
            <button className="w-full bg-[#2D2926] hover:bg-[#1A1817] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2">
              Book A Custom Layout Consultation <ArrowRight size={14} />
            </button>
          </aside>

        </div>

      </div>

      {/* ================= FIXED MODAL: STUNNING 360 DEGREE INTERACTIVE SURFACE INTERFACE ================= */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#141211]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 z-[99999]"
            onClick={() => setModalOpen(false)}
          >
            
            {/* ESCAPE EXIT ACTION BUTTON - SECURED OUTSIDE LAYER FOR MAXIMUM VISIBILITY */}
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-8 z-[60] w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-2xl hover:bg-red-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 group"
              aria-label="Close Modal"
            >
              <X size={20} className="transition-transform group-hover:rotate-90" />
            </button>

            {/* 3D WORKSPACE STAGE CANVAS BOX */}
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full h-full max-w-6xl max-h-[80vh] bg-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              
              <Canvas 
                camera={{ position: [0, 0, 3.2], fov: 50 }} 
                className="w-full h-full cursor-grab active:cursor-grabbing"
              >
                <Suspense fallback={<Loader />}>
                  
                  {/* Smooth orbital parameters for real 360 spin & panning */}
                  <OrbitControls 
                    enableZoom={true} 
                    enablePan={true}
                    maxPolarAngle={Math.PI / 1.5} // Stops camera from going under table floor
                    minPolarAngle={Math.PI / 3}   
                  />
                  
                  <ambientLight intensity={0.7} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <Environment preset="studio" />

                  {/* Renders the interactive 3D model plane board */}
                  <PlanBoardMesh textureUrl={PROJECT_DESCRIPTION.mainImageUrl} />
                  
                </Suspense>
              </Canvas>

              {/* Interactive Assist Hint Ribbon */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-md text-white/90 border border-white/10 px-5 py-2.5 rounded-full text-[11px] font-medium uppercase tracking-wider opacity-90 select-none pointer-events-none shadow-xl">
                <Move size={12} className="text-[#A67153] animate-pulse" /> 
                <span>Drag to rotate layout • Scroll to inspect details</span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// 3D MODEL MESH CORE ASSEMBLY
function PlanBoardMesh({ textureUrl }) {
  const texture = useTexture(textureUrl);
  
  return (
    <mesh castShadow receiveShadow>
      {/* Creates a premium studio architectural presentation board */}
      <boxGeometry args={[2.4, 1.6, 0.04]} />
      {/* Side parameter fixed: mapped directly using standard three instance syntax. 
        Applying texture smoothly across all sides of the model board.
      */}
      <meshStandardMaterial 
        map={texture} 
        roughness={0.2}
        metalness={0.1}
        side={THREE.DoubleSide} 
      />
    </mesh>
  );
}

// INTERSTITIAL ASYNC LOADING SCREEN
function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 whitespace-nowrap bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/5">
        <div className="w-8 h-8 border-2 border-t-[#A67153] border-white/10 rounded-full animate-spin"></div>
        <p className="text-xs font-bold tracking-widest text-white/80 uppercase">Loading 3D Showroom Matrix...</p>
      </div>
    </Html>
  );
}