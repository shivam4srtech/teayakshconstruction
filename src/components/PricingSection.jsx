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
      const isPopular = normalizedSlug === 'premium' || index === 1;
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
        popular: isPopular,
      };
    });
}

export default function PricingSection({ cities = [], pricingTiers = [], packageRates = {} }) {
  const openModal = useModalStore((state) => state.openModal);
  const cityOptions = useMemo(() => getCityOptions(cities, packageRates), [cities, packageRates]);
  const [selectedCity, setSelectedCity] = useState('');
  const activeCity = selectedCity || cityOptions[0] || '';
  const currentPackages = buildPackages(activeCity, pricingTiers, packageRates);

  if (!activeCity || currentPackages.length === 0) {
    return null;
  }

  return (
    <section className="hidden lg:block py-10 bg-[#FBFBFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-16">
        
        {/* Architecture Header & Selector */}
        <div className="flex justify-between items-center mb-10">
          <div className="space-y-4">
            <div
              className="pricing-fade-left flex items-center gap-3"
            >
              <span className="w-8 h-[2px] bg-brand" />
              <p className="text-[11px] uppercase tracking-[0.5em] font-bold text-brand">Construction Costs</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-dark leading-[1.1]">
              Our Construction <span className="font-light text-brand">Packages.</span>
            </h2>
          </div>

          {/* Luxury Dropdown Wrapper */}
          <div className="relative min-w-[240px]">
            <p className="text-[9px] uppercase tracking-widest font-black text-brand-dark/30 mb-3 ml-1">Choose Location</p>
            <div className="relative group">
              <select 
                value={activeCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-100 rounded py-5 px-6 text-xs font-bold uppercase tracking-widest outline-none cursor-pointer shadow-sm group-hover:shadow-md transition-all duration-300"
              >
                {cityOptions.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-brand group-hover:translate-y-[-20%] transition-transform" size={14} />
            </div>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-3 gap-6">
          {currentPackages.map((pkg, idx) => (
            <div
              key={`${activeCity}-${pkg.slug}`}
              style={{ animationDelay: `${idx * 80}ms` }}
              className={`pricing-card-enter pricing-card-hover group relative p-5 rounded-[1rem] flex flex-col h-full border ${
                pkg.popular
                ? 'bg-white border-brand shadow-[0_20px_50px_rgba(196,164,124,0.15)] z-10'
                : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 inset-x-0 flex justify-center">
                  <span className="bg-brand text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded-full shadow-lg">
                    Signature Choice
                  </span>
                </div>
              )}

              {/* Header Section */}
              <div className="mb-4 text-center">
                <div className={`w-14 h-14 mx-auto flex items-center justify-center rounded mb-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-6 motion-reduce:transition-none motion-reduce:group-hover:rotate-0 ${
                  pkg.popular ? 'bg-brand text-white shadow-brand/30 shadow-lg' : 'bg-gray-50 text-brand-dark/30 border border-gray-100'
                }`}>
                  {pkg.icon}
                </div>
                <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${pkg.popular ? 'text-brand' : 'text-brand-dark/40'}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-5xl font-medium text-brand-dark tracking-tighter">{pkg.currency}{pkg.price}</span>
                  <span className="text-[11px] uppercase font-black text-brand-dark/20 italic">/{pkg.unit}</span>
                </div>
              </div>

              {/* Feature Box */}
              <div className="flex-grow space-y-6 mb-5">
                <p className="text-[13px] text-brand-dark/60 leading-relaxed text-center px-2 mb-3">
                  {pkg.desc}
                </p>
                <div className="h-[1px] w-12 bg-brand/20 mx-auto" />
                <ul className="space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-brand-dark/80 mb-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/5 flex items-center justify-center">
                        <FaCheck size={9} className="text-brand" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={openModal}
                className={`w-full py-5 rounded text-[11px] font-bold uppercase tracking-[0.2em] transition-[background-color,color,border-color,transform] duration-300 active:scale-[0.98] ${
                  pkg.popular
                  ? 'bg-brand-dark text-white shadow-xl hover:bg-brand'
                  : 'bg-gray-50 text-brand-dark border border-gray-200 hover:border-brand hover:text-brand'
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Disclaimer */}
        <div className="mt-10 flex flex-col items-center gap-4">
           <div
            key={activeCity}
            className="pricing-fade flex items-center gap-2 px-6 py-2 rounded-full border border-gray-100 bg-white"
           >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">
                Rates Verified for {activeCity} - Live API Index
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
