'use client';
import { useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Calculator, Zap, ShieldCheck, Building2, Layers, CheckCircle2 } from 'lucide-react';
import CustomSelect  from '@/components/CustomSelect'
import { sendEstimateRequest } from '@/app/actions/sendEstimate';

function formatCurrency(value) {
  if (!Number.isFinite(value)) return "₹0";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function FieldError({ message }) {
  if (!message) return null;

  return (
    <p className="flex items-center gap-1.5 text-xs font-semibold text-red-600 ml-1">
      <AlertCircle size={13} />
      {message}
    </p>
  );
}

export default function EstimatorHero({
  cities = [],
  pricingTiers = [],
  selection,
  selectedPackage,
  estimatedValue,
  onSelectionChange,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState('');
  const [submittedEstimate, setSubmittedEstimate] = useState(selection.submittedEstimate);
  const [isPending, startTransition] = useTransition();

  // Common input styling to ensure 100% consistency
  const inputStyles = "w-full bg-[#F8F5F2] border-2 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-[#A67153]/20 transition-all outline-none text-[#2D2926] font-medium placeholder:text-gray-300";
  const errorInputStyles = "border-red-300 bg-red-50 focus:border-red-300";
  const cityOptions = cities.map((city) => city.name).filter(Boolean);
  const packageOptions = pricingTiers.map((tier) => ({
    value: tier.slug,
    label: tier.name,
  }));

  const updateSelection = (patch) => {
    onSelectionChange((current) => ({
      ...current,
      ...patch,
      submittedEstimate: null,
    }));
    setSubmittedEstimate(null);
    setFieldErrors((current) => {
      const next = { ...current };
      Object.keys(patch).forEach((key) => {
        delete next[key];
      });
      return next;
    });
  };

  const updateForm = (key, value) => {
    setFormData((current) => ({ ...current, [key]: value }));
    setFieldErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('');

    const packageName =
      pricingTiers.find((tier) => tier.slug === selection.packageSlug)?.name ||
      selection.packageSlug;

    startTransition(async () => {
      const result = await sendEstimateRequest({
        ...formData,
        city: selection.city,
        packageSlug: selection.packageSlug,
        packageName,
        builtUpArea: selection.builtUpArea,
        floors: selection.floors,
        parking: selection.parking,
        pricePerSqft: selectedPackage
          ? `${selectedPackage.currency || '₹'}${selectedPackage.price}/${selectedPackage.unit || 'sqft'}`
          : 'Rate card unavailable',
        estimatedCost: selectedPackage
          ? formatCurrency(estimatedValue)
          : 'Rate card unavailable',
      });

      setFieldErrors(result.fieldErrors || {});
      setMessage(result.message || '');

      if (result.ok) {
        const nextEstimate = {
          amount: estimatedValue,
          formatted: selectedPackage ? formatCurrency(estimatedValue) : 'Rate card unavailable',
          packageName,
          price: selectedPackage?.price,
          unit: selectedPackage?.unit || 'sqft',
          tax: selectedPackage?.tax,
        };

        setSubmittedEstimate(nextEstimate);
        onSelectionChange((current) => ({
          ...current,
          submittedEstimate: nextEstimate,
        }));
      }
    });
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 bg-[#F8F5F2] overflow-hidden flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A67153]/5 -skew-x-12 translate-x-32 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <Zap size={14} className="text-[#A67153] fill-[#A67153]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D2926]">Instant Quotes v3.0</span>
            </div>

            <h1 className="text-[2.8rem] md:text-[4.5rem] font-medium leading-[1.1] mb-6 text-[#2D2926] tracking-tighter">
              Planning your <br />
              <span className="text-[#A67153] italic font-light">Dream Home?</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-10 max-w-md leading-relaxed">
              Get a scientifically accurate construction estimate in seconds. No hidden costs, just honest numbers.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Calculator size={18} />, text: "Real-time Material Market Rates" },
                { icon: <ShieldCheck size={18} />, text: "Detailed Structural Breakdown" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-[#2D2926] font-semibold uppercase text-xs tracking-wider">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-[#A67153]">
                    {item.icon}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Unified Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(45,41,38,0.12)] border border-white">
              <h3 className="text-2xl font-bold text-[#2D2926] mb-8 flex items-center gap-3">
                Calculate Cost <span className="w-8 h-[2px] bg-[#A67153]/20" />
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                
                {/* Inputs Row 1 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      className={`${inputStyles} ${fieldErrors.name ? errorInputStyles : ''}`}
                      value={formData.name}
                      onChange={(e) => updateForm('name', e.target.value)}
                    />
                    <FieldError message={fieldErrors.name} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className={`${inputStyles} ${fieldErrors.email ? errorInputStyles : ''}`}
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                    />
                    <FieldError message={fieldErrors.email} />
                  </div>
                </div>

                {/* Inputs Row 2 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className={`${inputStyles} ${fieldErrors.phone ? errorInputStyles : ''}`}
                      value={formData.phone}
                      onChange={(e) => updateForm('phone', e.target.value)}
                    />
                    <FieldError message={fieldErrors.phone} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">City</label>
                    <div className="relative">
                       <CustomSelect
                        name="city"
                        placeholder="Select City"
                        options={cityOptions}
                        value={selection.city}
                        onChange={(value) => updateSelection({ city: value })}
                        className={`${inputStyles} ${fieldErrors.city ? errorInputStyles : ''} flex items-center justify-between cursor-pointer`}
                      />
                    </div>
                    <FieldError message={fieldErrors.city} />
                  </div>
                </div>

                {/* Inputs Row 3 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Package</label>
                    <CustomSelect
                      name="packageSlug"
                      placeholder="Select Package"
                      options={packageOptions}
                      value={selection.packageSlug}
                      onChange={(value) => updateSelection({ packageSlug: value })}
                      className={`${inputStyles} ${fieldErrors.packageSlug ? errorInputStyles : ''} flex items-center justify-between cursor-pointer`}
                    />
                    <FieldError message={fieldErrors.packageSlug} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Built-up Area (Sqft)*</label>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="e.g. 2500"
                        className={`${inputStyles} ${fieldErrors.builtUpArea ? errorInputStyles : ''}`}
                        value={selection.builtUpArea}
                        onChange={(e) => updateSelection({ builtUpArea: e.target.value })}
                      />
                      <Building2 size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
                    </div>
                    <FieldError message={fieldErrors.builtUpArea} />
                  </div>
                </div>

                {/* Inputs Row 4 */}
                <div className="grid md:grid-cols-2 gap-5">
                   <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">No. of Floors</label>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="e.g. 3"
                        className={`${inputStyles} ${fieldErrors.floors ? errorInputStyles : ''}`}
                        value={selection.floors}
                        onChange={(e) => updateSelection({ floors: e.target.value })}
                      />
                      <Layers size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
                    </div>
                    <FieldError message={fieldErrors.floors} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Stilt Parking?</label>
                    <div className={`flex bg-[#F8F5F2] rounded-2xl p-1.5 h-[58px] ${fieldErrors.parking ? 'border-2 border-red-300 bg-red-50' : ''}`}>
                       <button 
                        type="button" 
                        onClick={() => updateSelection({ parking: 'Yes' })}
                        className={`flex-1 rounded-xl text-sm font-bold transition-all ${selection.parking === 'Yes' ? 'bg-white shadow-md text-[#A67153]' : 'text-gray-400 hover:text-gray-600'}`}
                       >
                         Yes
                       </button>
                       <button 
                        type="button" 
                        onClick={() => updateSelection({ parking: 'No' })}
                        className={`flex-1 rounded-xl text-sm font-bold transition-all ${selection.parking === 'No' ? 'bg-white shadow-md text-[#A67153]' : 'text-gray-400 hover:text-gray-600'}`}
                       >
                         No
                       </button>
                    </div>
                    <FieldError message={fieldErrors.parking} />
                  </div>
                </div>

                {submittedEstimate && (
                  <div className="rounded-[2rem] bg-[#F8F5F2] border border-[#A67153]/15 p-6">
                    <div className="flex items-center gap-2 text-[#A67153] text-[10px] font-black uppercase tracking-[0.2em]">
                      <CheckCircle2 size={15} />
                      Estimate Submitted
                    </div>
                    <div className="mt-3 text-4xl font-black text-[#2D2926] tracking-tighter">
                      {submittedEstimate.formatted}
                    </div>
                    <p className="mt-2 text-xs font-semibold text-gray-500">
                      Based on {submittedEstimate.packageName} at ₹{submittedEstimate.price || '--'}/{submittedEstimate.unit}.
                    </p>
                  </div>
                )}

                {message && !submittedEstimate && (
                  <p className="flex items-center gap-2 text-sm font-bold text-red-600">
                    <AlertCircle size={16} />
                    {message}
                  </p>
                )}

                <button
                  disabled={isPending}
                  className="w-full bg-[#2D2926] text-white py-5 rounded-2xl font-bold uppercase text-[11px] tracking-[0.3em] mt-4 hover:bg-[#A67153] transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-wait"
                >
                  {isPending ? 'Sending Estimate' : 'Get My Estimate'} <Zap size={16} className="group-hover:fill-current transition-all" />
                </button>

                <p className="text-[9px] text-center text-gray-400 font-medium">
                  *Results are based on current market survey of materials in 2026.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
