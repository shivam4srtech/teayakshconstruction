'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  HardHat,
  Layers,
  Loader2,
  MapPin,
  Package,
  Phone,
  Ruler,
  ShieldCheck,
  User,
} from 'lucide-react';
import { sendMaterialEstimateLead } from '@/app/actions/sendMaterialEstimateLead';
import { CITIES_LIST, calculateMaterialEstimate } from '@/lib/materialEstimator';

function FieldError({ message }) {
  if (!message) return null;

  return (
    <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-red-500">
      <AlertCircle size={12} />
      {message}
    </p>
  );
}

export default function MaterialEstimatorHero() {
  const [slabArea, setSlabArea] = useState('');
  const [floors, setFloors] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [submittedResult, setSubmittedResult] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef(null);

  const builtUpPreview = calculateMaterialEstimate(slabArea, floors).totalBuiltUpArea;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCityDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const resetSubmittedResult = () => {
    setSubmittedResult(null);
    setMessage('');
  };

  const clearFieldError = (field) => {
    setFieldErrors((current) => ({ ...current, [field]: '' }));
  };

  const formatResult = (value) => {
    if (!submittedResult || !Number.isFinite(value)) return '--';

    return value.toLocaleString('en-IN');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setMessage('');

    startTransition(async () => {
      const result = await sendMaterialEstimateLead({
        name: clientName,
        phone: clientPhone,
        city: selectedCity,
        slabArea,
        floors,
      });

      setFieldErrors(result.fieldErrors || {});
      setMessage(result.message || '');

      if (result.ok) {
        setSubmittedResult(result.calculation);
      } else {
        setSubmittedResult(null);
      }
    });
  };

  return (
    <section className="relative min-h-screen pt-24 pb-20 bg-[#F8F5F2] text-[#2D2926] overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#2D2926_1px,transparent_1px),linear-gradient(to_bottom,#2D2926_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[#A67153] bg-white border border-gray-200/60 px-4 py-2 rounded-full shadow-sm">
                <Ruler size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Bill of Quantities (BOQ)</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#2D2926] leading-[1.2]">
                Real-Time <span className="font-light text-[#A67153]">Building Material</span> Quantity Estimator
              </h1>
              <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xl">
                Submit your project details to calculate steel and brick quantities using Trayaksh thumb rules for residential construction planning.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Built-Up Area</span>
                <p className="text-2xl font-black text-[#2D2926]">
                  {formatResult(submittedResult?.totalBuiltUpArea)} <span className="text-xs font-medium text-gray-400">Sq.Ft.</span>
                </p>
                <span className="text-[10px] text-gray-400 font-medium block">{submittedResult ? 'Slab area x floors' : 'Submit form to view'}</span>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Structural Steel</span>
                <p className="text-2xl font-black text-[#2D2926]">
                  {formatResult(submittedResult?.steel)} <span className="text-xs font-medium text-gray-400">Kg</span>
                </p>
                <span className="text-[10px] text-gray-400 font-medium block">4 kg per sq.ft.</span>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Bricks / Blocks</span>
                <p className="text-2xl font-black text-[#2D2926]">
                  {formatResult(submittedResult?.bricks)} <span className="text-xs font-medium text-gray-400">Pcs</span>
                </p>
                <span className="text-[10px] text-gray-400 font-medium block">32 bricks per sq.ft.</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-gray-400 border-t border-gray-200/60">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#A67153]" /> <span>Backend Validated Estimate</span>
              </div>
              <div className="flex items-center gap-2">
                <HardHat size={16} className="text-[#A67153]" /> <span>Procurement Planning Ready</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-2xl shadow-black/[0.015]"
            >
              <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
                <div className="space-y-1.5 mb-1">
                  <h3 className="text-lg font-bold tracking-tight text-[#2D2926]">Calculate Materials</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Enter your project details to receive a steel and brick quantity estimate.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <User size={11} /> Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Prince Mishra"
                      value={clientName}
                      onChange={(event) => {
                        setClientName(event.target.value);
                        clearFieldError('name');
                        resetSubmittedResult();
                      }}
                      className={`w-full bg-[#F8F5F2] border focus:border-[#A67153]/30 focus:bg-white text-xs font-bold rounded-xl px-4 py-3 text-[#2D2926] placeholder-gray-300 outline-none transition-all ${fieldErrors.name ? 'border-red-300' : 'border-transparent'}`}
                    />
                    <FieldError message={fieldErrors.name} />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <Phone size={11} /> Contact Number
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="9876543210"
                      value={clientPhone}
                      onChange={(event) => {
                        setClientPhone(event.target.value);
                        clearFieldError('phone');
                        resetSubmittedResult();
                      }}
                      className={`w-full bg-[#F8F5F2] border focus:border-[#A67153]/30 focus:bg-white text-xs font-bold rounded-xl px-4 py-3 text-[#2D2926] placeholder-gray-300 outline-none transition-all ${fieldErrors.phone ? 'border-red-300' : 'border-transparent'}`}
                    />
                    <FieldError message={fieldErrors.phone} />
                  </div>

                  <div className="space-y-1.5 relative" ref={dropdownRef}>
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <MapPin size={11} /> Location
                    </label>
                    <input type="hidden" required value={selectedCity} readOnly />
                    <button
                      type="button"
                      onClick={() => setIsCityDropdownOpen((isOpen) => !isOpen)}
                      className={`w-full bg-[#F8F5F2] border text-left text-xs font-bold rounded-xl px-4 py-3 text-[#2D2926] flex items-center justify-between outline-none transition-all hover:bg-[#f0ece8] ${fieldErrors.city ? 'border-red-300' : 'border-transparent'}`}
                    >
                      <span className={selectedCity ? '' : 'text-gray-400 font-normal'}>
                        {selectedCity || 'Select your city'}
                      </span>
                      <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isCityDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isCityDropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-xl max-h-48 overflow-y-auto overflow-x-hidden text-xs text-[#2D2926] divide-y divide-gray-50"
                        >
                          {CITIES_LIST.map((city) => (
                            <li key={city}>
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedCity(city);
                                  clearFieldError('city');
                                  resetSubmittedResult();
                                  setIsCityDropdownOpen(false);
                                }}
                                className="w-full text-left font-bold px-4 py-3 hover:bg-[#F8F5F2] transition-colors"
                              >
                                {city}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                    <FieldError message={fieldErrors.city} />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <Layers size={11} /> Slab Area (Sq.Ft.)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100000"
                      required
                      value={slabArea}
                      placeholder="eg. 1500"
                      onChange={(event) => {
                        setSlabArea(event.target.value);
                        clearFieldError('slabArea');
                        resetSubmittedResult();
                      }}
                      className={`w-full bg-[#F8F5F2] border focus:border-[#A67153]/30 focus:bg-white text-xs font-black rounded-xl px-4 py-3 text-[#2D2926] outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${fieldErrors.slabArea ? 'border-red-300' : 'border-transparent'}`}
                    />
                    <FieldError message={fieldErrors.slabArea} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <Layers size={11} /> No. of Floors
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      required
                      value={floors}
                      placeholder="eg. 1"
                      onChange={(event) => {
                        setFloors(event.target.value);
                        clearFieldError('floors');
                        resetSubmittedResult();
                      }}
                      className={`w-full bg-[#F8F5F2] border focus:border-[#A67153]/30 focus:bg-white text-xs font-black rounded-xl px-4 py-3 text-[#2D2926] outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${fieldErrors.floors ? 'border-red-300' : 'border-transparent'}`}
                    />
                    <FieldError message={fieldErrors.floors} />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <Package size={11} /> Built-Up Area (Sq.Ft.)
                    </label>
                    <input
                      type="text"
                      required
                      readOnly
                      value={builtUpPreview ? builtUpPreview.toLocaleString('en-IN') : ''}
                      placeholder="Auto calculated"
                      className="w-full bg-[#F8F5F2] border border-transparent text-xs font-black rounded-xl px-4 py-3 text-[#2D2926] outline-none transition-all"
                    />
                  </div>
                </div>

                {message && (
                  <p className={`flex items-center gap-2 text-xs font-bold ${submittedResult ? 'text-green-600' : 'text-red-600'}`}>
                    {submittedResult ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-[#2D2926] hover:bg-[#1A1817] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-wait disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isPending ? (
                    <>
                      Calculating <Loader2 size={14} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Generate Procurement Estimate <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
