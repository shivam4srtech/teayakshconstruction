'use client';
import { useMemo, useState } from 'react';
import { FaCheck, FaBolt, FaLeaf, FaGem, FaChevronDown } from 'react-icons/fa6';
import { useModalStore } from '@/store/useModalStore';

const PACKAGE_ICONS = {
  basic: <FaBolt />,
  premium: <FaLeaf />,
  luxury: <FaGem />,
};

function normalizeCityKey(city, packageRates) {
  const cityKeys = Object.keys(packageRates || {});
  const normalizedCity = city.trim().toLowerCase();
  return cityKeys.find((key) => key.trim().toLowerCase() === normalizedCity) || city;
}

function findPackageKey(slug, cityData) {
  const normalizedSlug = slug.trim().toLowerCase();
  return Object.keys(cityData || {}).find((key) => key.trim().toLowerCase() === normalizedSlug);
}

function getCityOptions(cities, packageRates) {
  const apiCities = cities.map((city) => city.name).filter(Boolean);
  const rateCities = Object.keys(packageRates || {});
  return [...new Set([...apiCities, ...rateCities])];
}

function getPackageFeatures(packageData) {
  const featureGroups = Object.entries(packageData?.features || {});
  const features = featureGroups.flatMap(([groupName, group]) => {
    if (!group || typeof group !== 'object') return [groupName];
    return Object.entries(group).map(([key, value]) => `${key}: ${value}`);
  });

  return features.length > 0 ? features.slice(0, 4) : ['Specification review', 'Quality checks', 'Transparent estimate'];
}

function getPackageDescription(packageData, tier, city) {
  return packageData?.description || tier.description || `${tier.name} construction package for ${city}.`;
}

function buildPackages(activeCity, pricingTiers, packageRates) {
  const normalizedCity = normalizeCityKey(activeCity, packageRates);
  const cityData = packageRates?.[normalizedCity] || {};

  return pricingTiers
    .filter((tier) => tier.slug && findPackageKey(tier.slug, cityData))
    .map((tier, index) => {
      const packageKey = findPackageKey(tier.slug, cityData);
      const packageData = cityData[packageKey];
      const normalizedSlug = tier.slug.trim().toLowerCase();
      const hasPrice = packageData.price !== undefined && packageData.price !== null;

      return {
        slug: normalizedSlug,
        name: tier.name || tier.slug,
        price: hasPrice ? Number(packageData.price).toLocaleString('en-IN') : '--',
        currency: packageData.currency || 'Rs.',
        unit: packageData.unit || 'sqft',
        icon: PACKAGE_ICONS[tier.slug] || <FaGem />,
        desc: getPackageDescription(packageData, tier, activeCity),
        features: getPackageFeatures(packageData),
        popular: normalizedSlug === 'premium' || index === 1,
      };
    });
}

export default function MobilePricing({ cities = [], pricingTiers = [], packageRates = {} }) {
  const openModal = useModalStore((state) => state.openModal);
  const cityOptions = useMemo(() => getCityOptions(cities, packageRates), [cities, packageRates]);
  const [selectedCity, setSelectedCity] = useState('');
  const activeCity = selectedCity || cityOptions[0] || '';
  const [activeIndex, setActiveIndex] = useState(0);
  const currentPackages = buildPackages(activeCity, pricingTiers, packageRates);
  const currentPkg = currentPackages[Math.min(activeIndex, Math.max(currentPackages.length - 1, 0))];

  if (!activeCity || !currentPkg) {
    return null;
  }

  return (
    <section className="py-6 bg-gray-50 lg:hidden"> {/* Only visible on Mobile */}
      <div className="px-5">
        
        {/* Header & City Dropdown */}
        <div className="flex flex-col md:gap-6 gap-3 mb-5">
          <div className="space-y-1">
            
            <p className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4 mb-3">Estimator</p>
            <h2 className="md:text-3xl text-xl font-medium text-brand-dark">Package Details.</h2>
          </div>

          <div className="relative bg-white border border-gray-200 rounded-xl px-4 py-1 shadow-sm">
            <label className="text-[8px] uppercase font-bold text-brand-dark/40 absolute top-2 left-4">Location</label>
            <select 
              value={activeCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setActiveIndex(0);
              }}
              className="w-full bg-transparent pt-5 pb-2 text-sm font-bold uppercase tracking-widest outline-none appearance-none"
            >
              {cityOptions.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <FaChevronDown className="absolute right-4 bottom-4 text-brand" size={10} />
          </div>
        </div>

        {/* Segmented Toggle Buttons */}
        <div className="flex bg-gray-200/50 p-1 rounded-xl mb-4 overflow-x-auto no-scrollbar">
          {currentPackages.map((pkg, idx) => (
            <button
              key={pkg.slug}
              onClick={() => setActiveIndex(idx)}
              className={`relative flex-1 py-3 text-[10px] font-bold uppercase tracking-tighter rounded-lg transition-[background-color,color,box-shadow,transform] duration-300 whitespace-nowrap px-4 ${
                activeIndex === idx ? 'bg-brand-dark text-white shadow-md' : 'text-brand-dark/50'
              }`}
            >
              <span className="relative z-10">{pkg.name}</span>
            </button>
          ))}
        </div>

        {/* Animated Single Card Display */}
        <div
          key={`${activeCity}-${activeIndex}`}
          className="mobile-pricing-card bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
        >
          {/* Background Icon Decoration */}
          <div className="absolute -right-4 -top-4 text-gray-50 opacity-50 scale-[3]">
            {currentPkg.icon}
          </div>

          {currentPkg.popular && (
            <span className="inline-block bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Recommended Choice
            </span>
          )}

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-brand-dark text-white rounded-2xl flex items-center justify-center shadow-lg">
              {currentPkg.icon}
            </div>
            <div>
              <h3 className="text-2xl font-medium text-brand-dark tracking-tight">{currentPkg.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-brand font-bold">{currentPkg.currency}{currentPkg.price}</span>
                <span className="text-[10px] text-gray-400 uppercase">/{currentPkg.unit}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            {currentPkg.desc}
          </p>

          <div className="space-y-4 mb-10">
            <p className="text-[9px] font-bold uppercase tracking-widest text-brand">What&apos;s Included:</p>
            {currentPkg.features.map((feature, i) => (
              <div key={`${feature}-${i}`} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                  <FaCheck className="text-green-600" size={8} />
                </div>
                <span className="text-xs font-medium text-brand-dark/80">{feature}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={openModal}
            className="w-full bg-brand py-5 rounded-2xl text-white text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-brand/20 active:scale-95 transition-transform"
          >
            Choose Plan
          </button>
        </div>

        <p className="text-center mt-10 text-[9px] text-gray-400 uppercase tracking-widest leading-loose">
          *Rates applicable for {activeCity} area.<br/>
          Standard T&C Apply.
        </p>
      </div>
    </section>
  );
}
