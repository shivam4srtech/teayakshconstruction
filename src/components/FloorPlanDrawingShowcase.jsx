'use client';

import Image from 'next/image';
import { Layers, Map, Sparkles } from 'lucide-react';

const NO_IMAGE = "/images/no-image.jpg";

export default function FloorPlanDrawingShowcase({ drawingImages = [], floorLayout = [] }) {
  if (!drawingImages.length && !floorLayout.length) return null;

  return (
    <section className="space-y-6 pt-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#A67153]">
            <Map size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.35em]">Blueprint Atlas</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#2D2926]">
            Floor Drawings & Spatial Program
          </h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-2xl">
            Review floor-wise drawing references and room zoning before discussing civil execution, interiors, and local approval refinements.
          </p>
        </div>

        <div className="shrink-0 rounded-full bg-[#F8F5F2] border border-gray-200 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
          {drawingImages.length} Drawings • {floorLayout.length} Levels
        </div>
      </div>

      {drawingImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {drawingImages.map((drawing, index) => (
            <article
              key={`${drawing.caption}-${index}`}
              className={`group bg-[#F8F5F2] rounded-[2rem] border border-gray-200/70 overflow-hidden shadow-inner ${
                index === 0 && drawingImages.length > 2 ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`relative bg-white overflow-hidden ${index === 0 && drawingImages.length > 2 ? 'h-[420px]' : 'h-[300px]'}`}>
                <Image
                  src={drawing.url || NO_IMAGE}
                  alt={drawing.caption || "Floor drawing"}
                  fill
                  sizes={index === 0 && drawingImages.length > 2 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-80" />
                <div className="absolute top-5 left-5 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#2D2926]">
                  Drawing {String(index + 1).padStart(2, '0')}
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                    {drawing.caption || "Floor Drawing"}
                  </h3>
                  <Sparkles size={18} className="text-white/80 shrink-0" />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {floorLayout.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {floorLayout.map((layout, index) => (
            <article
              key={`${layout.floor}-${index}`}
              className="bg-white rounded-[1.5rem] border border-gray-100 p-6 shadow-sm hover:border-[#A67153]/25 transition-colors"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F8F5F2] text-[#A67153] flex items-center justify-center">
                    <Layers size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">Level {String(index + 1).padStart(2, '0')}</p>
                    <h3 className="text-sm font-black text-[#2D2926]">{layout.floor}</h3>
                  </div>
                </div>
                <span className="rounded-full bg-[#2D2926] text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest">
                  {layout.rooms?.length || 0} Zones
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {(layout.rooms || []).map((room) => (
                  <span
                    key={room}
                    className="rounded-xl bg-[#F8F5F2] border border-gray-100 px-3 py-2 text-[11px] font-bold text-gray-500"
                  >
                    {room}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
