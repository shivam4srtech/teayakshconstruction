'use client';
import { useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Calculator, Zap, ShieldCheck, Building2, Layers, CheckCircle2, Loader2 } from 'lucide-react';
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
  totalBuiltUpArea,
  singleFloorEstimate,
  billableFloors,
  estimatedValue,
  onSelectionChange,
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState('');
  const [submittedEstimate, setSubmittedEstimate] = useState(selection.submittedEstimate);
  const [isPending, startTransition] = useTransition();

  // Common input styling to ensure 100% consistency
  const inputStyles = "w-full bg-[#F8F5F2] border-2 border-transparent rounded p-3 text-[.8rem] focus:bg-white focus:border-[#A67153]/20 transition-all outline-none text-[#2D2926] font-medium placeholder:text-gray-300";
  const errorInputStyles = "border-red-300 bg-red-50 focus:border-red-300";
  const cityOptions = cities.map((city) => city.name).filter(Boolean);

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
      pricingTiers.find((tier) => tier.slug === 'basic')?.name || 'Basic';

    startTransition(async () => {
      const result = await sendEstimateRequest({
        ...formData,
        city: selection.city,
        packageSlug: 'basic',
        packageName,
        builtUpArea: selection.builtUpArea,
        totalBuiltUpArea: String(totalBuiltUpArea || ''),
        floors: selection.floors,
        pricePerSqft: selectedPackage
          ? `${selectedPackage.currency || '₹'}${selectedPackage.price}/${selectedPackage.unit || 'sqft'}`
          : 'Rate card unavailable',
        singleFloorEstimate: selectedPackage
          ? formatCurrency(singleFloorEstimate)
          : 'Rate card unavailable',
        billableFloors: String(billableFloors || ''),
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
          totalBuiltUpArea,
          singleFloorEstimate,
          billableFloors,
          floors: selection.floors,
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
    <section className="relative min-h-screen pt-24 md:pb-16 pb-6 bg-[#F8F5F2] overflow-hidden flex items-center">
      {/* Background Decorative  */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A67153]/5 -skew-x-12 translate-x-32 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 md:gap-16 gap-6 items-start">
          
          {/* LEFT SIDE: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-3">
              <Zap size={14} className="text-[#A67153] fill-[#A67153]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D2926]">Instant Quotes v3.0</span>
            </div>

            <h1 className="text-[2.4rem] md:text-[3.8rem] font-medium leading-[1.1] mb-3 text-[#2D2926] tracking-tighter">
              Planning your <br />
              <span className="text-[#A67153] font-light">Dream Home?</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-5 max-w-md leading-relaxed">
              Get a scientifically accurate construction estimate in seconds. No hidden costs, just honest numbers.
            </p>

            <div className="space-y-3">
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
            <div className="bg-white rounded-xl p-5 sm:p-8 md:p-6 md:py-8 shadow-[0_50px_100px_-20px_rgba(45,41,38,0.12)] border border-white">
              <h3 className="text-2xl font-bold text-[#2D2926] mb-4 flex items-center gap-3">
                Calculate  Cost <span className="w-8 h-[2px] bg-[#A67153]/20" />
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                
                {/* Inputs Row 1 */}
                <div className="grid md:grid-cols-2 gap-5 mb-3">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Prince Mishra"
                      className={`${inputStyles} ${fieldErrors.name ? errorInputStyles : ''}`}
                      value={formData.name}
                      onChange={(e) => updateForm('name', e.target.value)}
                    />
                    <FieldError message={fieldErrors.name} />
                  </div>
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
                </div>

                {/* Inputs Row 2 */}
                <div className="grid md:grid-cols-2 gap-5 mb-3">
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
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Slab Area (Sqft)*</label>
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

                {/* Inputs Row 3 */}
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
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Total Built-up Area (Sqft)*</label>
                    <div className="relative">
                      <input
                        type="text"
                        readOnly
                        value={totalBuiltUpArea ? totalBuiltUpArea.toLocaleString('en-IN') : ''}
                        placeholder="Auto calculated"
                        className={`${inputStyles} cursor-not-allowed text-gray-500 bg-[#EFEAE5]`}
                      />
                      <Building2 size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
                    </div>
                  </div>
                </div>

                

                {message && !submittedEstimate && (
                  <p className="flex items-center gap-2 text-sm font-bold text-red-600">
                    <AlertCircle size={16} />
                    {message}
                  </p>
                )}

                <button
                  disabled={isPending}
                  className="w-full bg-[#2D2926] text-white py-5 rounded font-bold uppercase text-[11px] tracking-[0.3em] mt-4 hover:bg-[#A67153] transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-wait mb-3"
                >
                  {isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Calculating Estimate
                    </>
                  ) : (
                    <>
                      Get My Estimate <Zap size={16} className="group-hover:fill-current transition-all" />
                    </>
                  )}
                </button>

                <p className="text-[9px] text-left text-gray-400 font-medium mb-3">
                  *Results are based on current market survey of materials in 2026.
                </p>
                {submittedEstimate && (
                  <div className="rounded bg-[#F8F5F2] border border-[#A67153]/15 md:p-4 p-3">
                    <div className="flex items-center gap-2 text-[#A67153] text-[10px] font-black uppercase tracking-[0.2em]">
                      <CheckCircle2 size={15} />
                      Thank you for using our calculator
                    </div>
                    <div className="mt-2 md:text-3xl text-2xl font-bold text-[#2D2926] tracking-tighter flex items-end">
                      <span>*{submittedEstimate.formatted}</span>
                      <span className='text-xs font-semibold text-gray-500'>
                          Approx
                      </span>
                    </div>
                  
                    
                  </div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
