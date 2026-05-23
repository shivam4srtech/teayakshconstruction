'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  SlidersHorizontal, ChevronDown, Compass, Layers, 
  HardHat, DollarSign, ThumbsUp, Share2, Maximize2
} from 'lucide-react';

const NO_IMAGE = "/images/no-image.jpg";

const FILTER_DEFINITIONS = [
  { id: "plotSize", label: "Plot Dimensions (sq ft)", field: "plotSize" },
  { id: "budget", label: "House Budget", field: "budget" },
  { id: "direction", label: "Road Facing Direction", field: "facing" },
  { id: "floors", label: "Number of Floors", field: "floors" },
  { id: "type", label: "Type of Construction", field: "type" },
  { id: "bhk", label: "Number of Bedrooms", field: "bhk" },
  { id: "vastu", label: "Vastu Compliant", field: "vastuLabel" },
  { id: "specialRequirements", label: "Special Requirement", field: "specialRequirements" },
];

function getUniqueOptions(floorPlans, field) {
  return Array.from(
    new Set(
      floorPlans
        .flatMap((plan) => plan[field])
        .filter(Boolean)
    )
  );
}

function createFilterGroups(floorPlans) {
  return FILTER_DEFINITIONS
    .map((definition) => ({
      ...definition,
      options: getUniqueOptions(floorPlans, definition.field),
    }))
    .filter((group) => group.options.length > 0);
}

function createInitialFilters(filterGroups) {
  return filterGroups.reduce((filters, group) => {
    filters[group.id] = [];
    return filters;
  }, {});
}

function planMatchesFilters(plan, selectedFilters, filterGroups) {
  return filterGroups.every((group) => {
    const selectedOptions = selectedFilters[group.id] || [];
    if (selectedOptions.length === 0) return true;

    const planValues = Array.isArray(plan[group.field]) ? plan[group.field] : [plan[group.field]];

    return selectedOptions.some((option) => planValues.includes(option));
  });
}

async function shareFloorPlan(plan) {
  const shareUrl = `${window.location.origin}${plan.slug}`;
  const shareData = {
    title: plan.title,
    text: plan.excerpt || plan.title,
    url: shareUrl,
  };

  if (navigator.share && navigator.canShare?.(shareData) !== false) {
    await navigator.share(shareData);
    return;
  }

  await navigator.clipboard?.writeText(shareUrl);
}

export default function FloorPlanHeroClient({ floorPlans = [] }) {
  const filterGroups = useMemo(() => createFilterGroups(floorPlans), [floorPlans]);
  const [openSection, setOpenSection] = useState(filterGroups[0]?.id || null);
  const [selectedFilters, setSelectedFilters] = useState(() => createInitialFilters(filterGroups));

  const normalizedSelectedFilters = useMemo(() => {
    const nextFilters = createInitialFilters(filterGroups);
    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (key in nextFilters) nextFilters[key] = value;
    });
    return nextFilters;
  }, [filterGroups, selectedFilters]);

  const filteredFloorPlans = useMemo(
    () => floorPlans.filter((plan) => planMatchesFilters(plan, normalizedSelectedFilters, filterGroups)),
    [floorPlans, normalizedSelectedFilters, filterGroups]
  );

  const toggleAccordion = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const handleCheckboxChange = (groupId, option) => {
    setSelectedFilters((prev) => {
      const currentTags = prev[groupId] || [];
      const updatedTags = currentTags.includes(option)
        ? currentTags.filter((item) => item !== option)
        : [...currentTags, option];
      return { ...prev, [groupId]: updatedTags };
    });
  };

  const resetAllFilters = () => {
    setSelectedFilters(createInitialFilters(filterGroups));
  };

  const totalActiveCount = Object.values(normalizedSelectedFilters).flat().length;

  return (
    <div className="bg-[#F8F5F2] text-[#2D2926] min-h-screen">
      
      {/* ================= SECTION 1: LIGHT BLUEPRINT BANNER HERO (Ref: Image 1 Style) ================= */}
      <div className="relative py-20 mt-20 bg-[#F0ECE7] border-b border-gray-200 overflow-hidden">
        {/* Crisp light grid & architectural drawing mask overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-multiply pointer-events-none">
          <Image 
            src="/images/floor-plan.jpg" 
            alt="floor-plan"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d292603_1px,transparent_1px),linear-gradient(to_bottom,#2d292603_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#A67153] block">
            Trayaksh Engineering Lab
          </span>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-[#2D2926]">
            House Designs and <span className="font-light text-[#A67153]">Floor Plans</span>
          </h1>
          <p className="text-gray-500 text-xs md:text-sm font-medium max-w-xl leading-relaxed">
            Find the curated floor plans optimized mathematically for luxury load balancing, space efficiency, and modern aesthetic forms.
          </p>
        </div>
      </div>

      {/* ================= SECTION 2: EXPERT GRID HUB INTERFACE ================= */}
      <div className="max-w-7xl mx-auto px-5 lg:px-16 pt-10 pb-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-start">
          
          {/* LEFT SUB-COLUMN: INTERACTIVE CHECKBOX ACCORDION SIDEBAR (Ref: Image 2 Custom Rules) */}
          <div className="xl:col-span-3 bg-white md:rounded-[2rem] rounded-xl p-6 border border-gray-200/60 shadow-xl shadow-black/[0.005] space-y-3">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-2">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                <SlidersHorizontal size={14} className="text-[#A67153]" />
                <h3>Filters ({totalActiveCount})</h3>
              </div>
              {totalActiveCount > 0 && (
                <button 
                  onClick={resetAllFilters}
                  className="text-[11px] font-bold text-[#A67153] hover:underline transition-all"
                >
                  Reset
                </button>
              )}
            </div>

            {filterGroups.length > 0 ? (
              filterGroups.map((group) => {
                const isOpen = openSection === group.id;
                return (
                  <div key={group.id} className="border-b border-gray-100 last:border-none pb-2 last:pb-0">
                    <button
                      onClick={() => toggleAccordion(group.id)}
                      className="w-full flex items-center justify-between py-3 px-2 rounded-xl hover:bg-[#F8F5F2] transition-colors group"
                    >
                      <span className={`text-xs font-bold transition-colors ${isOpen ? 'text-[#A67153]' : 'text-gray-600 group-hover:text-[#2D2926]'}`}>
                        {group.label}
                      </span>
                      <ChevronDown 
                        size={14} 
                        className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#A67153]' : ''}`} 
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="max-h-52 overflow-y-auto pl-3 pr-1 py-3 space-y-2.5 scrollbar-thin scrollbar-thumb-gray-200">
                            {group.options.map((option) => {
                              const isChecked = normalizedSelectedFilters[group.id]?.includes(option);
                              return (
                                <label 
                                  key={option} 
                                  className="flex items-center gap-3 cursor-pointer select-none group text-xs text-gray-500 hover:text-[#2D2926] transition-colors"
                                >
                                  <div className="relative flex items-center justify-center">
                                    <input
                                      type="checkbox"
                                      checked={isChecked}
                                      onChange={() => handleCheckboxChange(group.id, option)}
                                      className="peer appearance-none w-4 h-4 rounded border border-gray-300 checked:bg-[#A67153] checked:border-[#A67153] outline-none transition-all cursor-pointer"
                                    />
                                    {isChecked && (
                                      <div className="absolute text-white pointer-events-none font-bold text-[9px]">✓</div>
                                    )}
                                  </div>
                                  <span className={isChecked ? "font-bold text-[#2D2926]" : "font-medium"}>
                                    {option}
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <p className="text-xs text-gray-400 leading-relaxed">No filter options are available right now.</p>
            )}
          </div>

          {/* MIDDLE SUB-COLUMN: THE PRODUCT CARD TILES INDEX */}
          <div className="xl:col-span-9 space-y-6">
            <div className="flex items-center justify-between mb-2 px-2">
              <p className="text-xs font-black uppercase tracking-wider text-gray-400">
                Total Layouts: <span className="text-[#2D2926]">{filteredFloorPlans.length} Designs</span>
              </p>
            </div>

            {filteredFloorPlans.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {filteredFloorPlans.map((design) => (
                  <Link
                    key={design.id}
                    href={design.slug}
                    className="bg-white md:rounded-[2.5rem] rounded-xl overflow-hidden border border-gray-100 shadow-xl shadow-black/[0.005] flex flex-col group hover:shadow-2xl hover:border-gray-200 transition-all duration-300"
                  >
                    
                    {/* Isometric / Asset Window View */}
                    <div className="relative h-[250px] w-full bg-[#FAFAFA] flex items-center justify-center md:p-8 p-4 border-b border-gray-50 overflow-hidden">
                      <Image 
                        src={design.featuredImage || NO_IMAGE} 
                        alt={design.imageAlt || design.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-103 transition-transform duration-500" 
                      />
                      
                      <button
                        type="button"
                        aria-label={`Share ${design.title}`}
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          shareFloorPlan(design).catch(() => {});
                        }}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-gray-400 border border-gray-100 flex items-center justify-center hover:text-[#A67153] transition-colors shadow-sm"
                      >
                        <Share2 size={12} />
                      </button>

                      <div className="absolute bottom-4 left-4 bg-white border border-gray-100 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm text-[10px] font-bold text-gray-500">
                        <ThumbsUp size={10} className="text-[#A67153]" /> {design.likes}
                      </div>
                    </div>

                    {/* Details Copy Box */}
                    <div className="p-6 pt-0 space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[9px] font-black tracking-widest uppercase text-gray-400 block">{design.type}</span>
                        <h4 className="text-xs font-bold text-gray-600 leading-relaxed line-clamp-3 group-hover:text-[#A67153] transition-colors">
                          {design.title}
                        </h4>
                        {design.excerpt && (
                          <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">
                            {design.excerpt}
                          </p>
                        )}
                      </div>

                      {/* Metadata Parameter Badges */}
                      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100 text-[10px] font-bold text-gray-500">
                        {design.dimensions && <div className="flex items-center gap-1.5"><Compass size={12} className="text-[#A67153]" /> {design.dimensions}</div>}
                        {design.budget && <div className="flex items-center gap-1.5"><DollarSign size={12} className="text-[#A67153]" /> {design.budget}</div>}
                        {!design.budget && design.facing && <div className="flex items-center gap-1.5"><Maximize2 size={12} className="text-[#A67153]" /> {design.facing}</div>}
                        {design.floors && <div className="flex items-center gap-1.5"><Layers size={12} className="text-[#A67153]" /> {design.floors}</div>}
                        {design.bhk && <div className="flex items-center gap-1.5"><HardHat size={12} className="text-[#A67153]" /> {design.bhk}</div>}
                      </div>
                    </div>

                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-100 p-8 text-sm text-gray-400">
                No floor plans match the selected filters.
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
