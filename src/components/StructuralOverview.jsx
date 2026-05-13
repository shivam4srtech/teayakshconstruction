'use client';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Info, Minus, Plus } from 'lucide-react';
import { MdLocationPin } from 'react-icons/md';
import CustomSelect from './CustomSelect';

function normalizeCityKey(city, packageRates) {
  const cityKeys = Object.keys(packageRates || {});
  return cityKeys.find((key) => key.toLowerCase() === city.toLowerCase()) || city;
}

function getFeatureRows(group) {
  if (!group) {
    return [
      {
        key: 'Specification',
        value: 'Specification will be confirmed by our project team.',
      },
    ];
  }

  return Object.entries(group).map(([key, value]) => ({
    key: key.trim(),
    value,
  }));
}

function getPackageData(cityData, slug) {
  return cityData?.[slug] || null;
}

function getPackageName(pricingTiers, slug) {
  return pricingTiers.find((tier) => tier.slug === slug)?.name || slug;
}

function getFeatureSpecs(packageData) {
  return Object.entries(packageData?.features || {}).map(([title, group]) => ({
    title,
    rows: getFeatureRows(group),
  }));
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
  const defaultPackage =
    pricingTiers.find((tier) => tier.slug === 'basic')?.slug ||
    pricingTiers[0]?.slug ||
    'basic';
  const [leftPkg, setLeftPkg] = useState(defaultPackage);
  const selectedPackageIndex = Math.max(
    pricingTiers.findIndex((tier) => tier.slug === leftPkg),
    0
  );
  const comparisonPackage =
    pricingTiers[selectedPackageIndex + 1]?.slug ||
    pricingTiers[selectedPackageIndex - 1]?.slug ||
    pricingTiers[0]?.slug ||
    leftPkg;
  const [rightPkg, setRightPkg] = useState(comparisonPackage);
  const [openIndexes, setOpenIndexes] = useState([0]);
  const activeRightPkg = rightPkg === leftPkg ? comparisonPackage : rightPkg;
  const leftPackageData = getPackageData(cityData, leftPkg);
  const rightPackageData = getPackageData(cityData, activeRightPkg);
  const leftSpecs = getFeatureSpecs(leftPackageData);
  const rightSpecs = getFeatureSpecs(rightPackageData);
  const featureCount = Math.max(leftSpecs.length, rightSpecs.length);
  const pairedSpecs = Array.from({ length: featureCount }, (_, index) => ({
    title: leftSpecs[index]?.title || rightSpecs[index]?.title || `Feature ${index + 1}`,
    left: leftSpecs[index] || null,
    right: rightSpecs[index] || null,
  }));

  return (
    <section className="py-10 pt-5 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:10 gap-6 md:gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2D2926] tracking-tighter">
              Structural <span className="font-light text-[#A67153]">Comparison</span>
            </h2>
          </div>
          <div className="w-full md:w-72 bg-white p-3 rounded shadow-xl border border-white">
            <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-4 mb-1 flex items-center gap-2">
              <MdLocationPin size={14} /> Pricing Region
            </label>
            <CustomSelect
              options={cityOptions}
              placeholder="Select City"
              name="city"
              className={"w-full bg-[#F8F5F2] border-2 border-transparent rounded p-3 flex justify-between items-center cursor-pointer transition-all"}
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

        <div className="bg-gray-200 rounded-[1.5rem] md:rounded-[3.5rem] overflow-hidden border-2 border-gray-200 shadow-2xl">
          <div className="grid grid-cols-2 gap-px">
            <PackageHeader
              packageData={leftPackageData}
              pricingTiers={pricingTiers}
              currentPkg={leftPkg}
              setPkg={(pkg) => {
                setLeftPkg(pkg);
                setOpenIndexes([0]);
              }}
              side="A"
            />
            <PackageHeader
              packageData={rightPackageData}
              pricingTiers={pricingTiers}
              currentPkg={activeRightPkg}
              setPkg={(pkg) => {
                setRightPkg(pkg);
                setOpenIndexes([0]);
              }}
              side="B"
            />
          </div>

          <div className="bg-white p-2 sm:p-4 md:p-6 space-y-2 md:space-y-4">
            {pairedSpecs.length > 0 ? pairedSpecs.map((spec, index) => (
              <SharedFeatureAccordion
                key={`${spec.title}-${index}`}
                spec={spec}
                leftName={getPackageName(pricingTiers, leftPkg)}
                rightName={getPackageName(pricingTiers, activeRightPkg)}
                isOpen={openIndexes.includes(index)}
                onToggle={() =>
                  setOpenIndexes((current) =>
                    current.includes(index)
                      ? current.filter((item) => item !== index)
                      : [...current, index]
                  )
                }
              />
            )) : (
              <div className="rounded-[1rem] md:rounded-[2rem] border border-dashed border-gray-200 bg-[#F8F5F2] p-4 md:p-8 text-center">
                <p className="text-xs sm:text-sm font-semibold text-gray-500">
                  Rate card is not published for this city/package yet.
                </p>
              </div>
            )}
          </div>
        </div>


        <div className="mt-8 md:mt-10 p-5 md:p-8 bg-white/50 rounded-[1.5rem] border border-white flex items-start gap-4 md:gap-6">
          <Info className="text-[#A67153] shrink-0" />
          <p className="text-xs text-gray-500 leading-relaxed">
            Prices shown for <strong>{selectedCity}</strong> are fetched from the live Laravel rate card.
            The calculator uses Basic as the default package, while this section lets visitors compare package specifications side by side.
            Final estimated value appears only after successful form submission.
          </p>
        </div>
      </div>
    </section>
  );
}

function PackageHeader({ packageData, pricingTiers, currentPkg, setPkg, side }) {
  const [isPkgOpen, setIsPkgOpen] = useState(false);
  const dropdownRef = useRef(null);
  const displayPrice = packageData?.price ? packageData.price.toLocaleString('en-IN') : '--';
  const currentPackageName = getPackageName(pricingTiers, currentPkg);

  return (
    <div className={`min-w-0 p-3 sm:p-4 md:p-6 transition-colors duration-700 ${currentPkg === 'premium' ? 'bg-[#2D2926] text-white' : 'bg-white text-[#2D2926]'}`}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 md:mb-5">
        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-40">Side {side}</span>
        <div className="relative min-w-0" ref={dropdownRef}>
          <button onClick={() => setIsPkgOpen(!isPkgOpen)} className={`w-full max-w-full px-3 md:px-5 py-2 md:py-2.5 rounded-full border text-[9px] md:text-[10px] font-black uppercase tracking-wide md:tracking-widest flex items-center justify-between gap-1 ${currentPkg === 'premium' ? 'border-white/20 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
            <span className="truncate">{currentPackageName} Package</span>
            <ChevronDown size={14} className="shrink-0" />
          </button>
          {isPkgOpen && (
            <div className="absolute left-0 md:right-0 md:left-auto mt-2 w-36 md:w-40 bg-white shadow-2xl rounded-xl overflow-hidden z-50">
              {pricingTiers.map((tier) => (
                <button key={tier.slug} onClick={() => { setPkg(tier.slug); setIsPkgOpen(false); }} className="w-full text-left px-4 md:px-5 py-3 text-[10px] font-bold uppercase text-black hover:bg-gray-100">{tier.name} Package</button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="text-[1.55rem] sm:text-4xl md:text-5xl font-bold tracking-tighter leading-none truncate flex items-end">₹{displayPrice}<div className="text-xs sm:text-sm font-semibold  opacity-40 leading-[30px]">/ s q f t</div></div>
    </div>
  );
}

function SharedFeatureAccordion({ spec, leftName, rightName, isOpen, onToggle }) {
  return (
    <div className={`rounded border overflow-hidden transition-all ${isOpen ? 'bg-[#F8F5F2] border-[#A67153]/25' : 'border-gray-100 bg-white'}`}>
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-3 p-4 ">
        <span className={`text-[10px] md:text-xs font-black uppercase tracking-wide md:tracking-widest text-left ${isOpen ? 'text-[#2D2926]' : 'text-gray-400'}`}>{spec.title}</span>
        {isOpen ? <Minus size={16} className="shrink-0" /> : <Plus size={16} className="shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
            <div className="grid grid-cols-2 gap-px bg-gray-200 border-y border-[#A67153]/20">
              <FeatureDetailColumn name={leftName} rows={spec.left?.rows} />
              <FeatureDetailColumn name={rightName} rows={spec.right?.rows} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FeatureDetailColumn({ name, rows }) {
  return (
    <div className="min-w-0 bg-white p-3 sm:p-5 md:p-6 space-y-3">
      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 truncate">{name} Package</p>
      {(rows?.length ? rows : getFeatureRows(null)).map((row) => (
        <p key={row.key} className="text-[.7rem] sm:text-sm font-medium text-gray-600 leading-relaxed">
          <span className="font-black text-[#A67153] uppercase tracking-wide">{row.key}:</span> {row.value}
        </p>
      ))}
    </div>
  );
}
