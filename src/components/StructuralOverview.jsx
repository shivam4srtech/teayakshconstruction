'use client';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Info, Minus, Plus } from 'lucide-react';
import CustomSelect from './CustomSelect';

function normalizeCityKey(city, packageRates) {
  const cityKeys = Object.keys(packageRates || {});
  return cityKeys.find((key) => key.toLowerCase() === city.toLowerCase()) || city;
}

function summarizeFeatureGroup(group) {
  if (!group) return 'Specification will be confirmed by our project team.';

  return Object.entries(group)
    .slice(0, 4)
    .map(([key, value]) => `${key.trim()}: ${value}`)
    .join(' | ');
}

export default function CityDynamicComparison({
  cities = [],
  pricingTiers = [],
  packageRates = {},
  selection,
  onSelectionChange,
}) {
  const selectedCity = selection.city;
  const normalizedCity = normalizeCityKey(selectedCity, packageRates);
  const cityData = packageRates?.[normalizedCity] || {};
  const cityOptions = cities.map((city) => city.name).filter(Boolean);
  const selectedPackageIndex = Math.max(
    pricingTiers.findIndex((tier) => tier.slug === selection.packageSlug),
    0
  );
  const comparisonPackage =
    pricingTiers[selectedPackageIndex + 1]?.slug ||
    pricingTiers[selectedPackageIndex - 1]?.slug ||
    pricingTiers[0]?.slug ||
    selection.packageSlug;
  const [rightPkg, setRightPkg] = useState(comparisonPackage);
  const activeRightPkg = rightPkg === selection.packageSlug ? comparisonPackage : rightPkg;

  return (
    <section className="py-24 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2D2926] tracking-tighter">
              Structural <span className="italic font-light text-[#A67153]">Comparison</span>
            </h2>
          </div>
          <div className="w-full md:w-72 bg-white p-3 rounded-[2rem] shadow-xl border border-white">
            <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-4 mb-1 block">Pricing Region</label>
            <CustomSelect
              options={cityOptions}
              placeholder="Select City"
              name="city"
              value={selectedCity}
              onChange={(val) =>
                onSelectionChange((current) => ({
                  ...current,
                  city: val,
                  submittedEstimate: null,
                }))
              }
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-gray-200 rounded-[3.5rem] overflow-hidden border-2 border-gray-200 shadow-2xl">
          <ComparisonColumn
            cityData={cityData}
            pricingTiers={pricingTiers}
            currentPkg={selection.packageSlug}
            setPkg={(pkg) =>
              onSelectionChange((current) => ({
                ...current,
                packageSlug: pkg,
                submittedEstimate: null,
              }))
            }
            side="A"
          />
          <ComparisonColumn
            cityData={cityData}
            pricingTiers={pricingTiers}
            currentPkg={activeRightPkg}
            setPkg={setRightPkg}
            side="B"
          />
        </div>

        <div className="mt-12 p-10 bg-white/50 rounded-[2.5rem] border border-white flex items-start gap-6">
          <Info className="text-[#A67153] shrink-0" />
          <p className="text-xs text-gray-500 leading-relaxed">
            Prices shown for <strong>{selectedCity}</strong> are fetched from the live Laravel rate card.
            The form and structural comparison are mapped to the same city/package selection.
            Final estimated value appears only after successful form submission.
          </p>
        </div>
      </div>
    </section>
  );
}

function ComparisonColumn({ cityData, pricingTiers, currentPkg, setPkg, side }) {
  const [openIdx, setOpenIdx] = useState(0);
  const [isPkgOpen, setIsPkgOpen] = useState(false);
  const dropdownRef = useRef(null);
  const packageData = cityData?.[currentPkg] || null;
  const displayPrice = packageData?.price ? packageData.price.toLocaleString('en-IN') : '--';
  const currentPackageName =
    pricingTiers.find((tier) => tier.slug === currentPkg)?.name || currentPkg;
  const featureSpecs = Object.entries(packageData?.features || {}).map(([title, group]) => ({
    title,
    detail: summarizeFeatureGroup(group),
  }));

  return (
    <div className="bg-white flex flex-col min-h-[700px]">
      <div className={`p-10 transition-colors duration-700 ${currentPkg === 'premium' ? 'bg-[#2D2926] text-white' : 'bg-white text-[#2D2926]'}`}>
        <div className="flex justify-between items-center mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Side {side}</span>
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsPkgOpen(!isPkgOpen)} className={`px-5 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${currentPkg === 'premium' ? 'border-white/20 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
              {currentPackageName} Package <ChevronDown size={14} className="ml-2 inline" />
            </button>
            {isPkgOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-2xl rounded-xl overflow-hidden z-50">
                {pricingTiers.map((tier) => (
                  <button key={tier.slug} onClick={() => { setPkg(tier.slug); setIsPkgOpen(false); }} className="w-full text-left px-5 py-3 text-[10px] font-bold uppercase text-black hover:bg-gray-100">{tier.name} Package</button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="text-5xl font-black italic tracking-tighter">₹{displayPrice} <span className="text-sm font-light not-italic opacity-40">/sq.ft</span></div>
      </div>

      <div className="p-6 space-y-4 flex-1">
        {featureSpecs.length > 0 ? featureSpecs.map((spec, i) => (
          <div key={spec.title} className={`rounded-[2rem] border transition-all ${openIdx === i ? 'bg-[#F8F5F2] border-[#A67153]/20' : 'border-transparent'}`}>
            <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between p-6">
              <span className={`text-[10px] font-black uppercase tracking-widest ${openIdx === i ? 'text-[#2D2926]' : 'text-gray-400'}`}>{spec.title}</span>
              {openIdx === i ? <Minus size={14} /> : <Plus size={14} />}
            </button>
            <AnimatePresence>
              {openIdx === i && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm font-medium text-gray-600 pl-10 leading-relaxed">
                    {spec.detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )) : (
          <div className="rounded-[2rem] border border-dashed border-gray-200 bg-[#F8F5F2] p-8 text-center">
            <p className="text-sm font-semibold text-gray-500">
              Rate card is not published for this city/package yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
