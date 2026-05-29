'use client';

import { useMemo, useRef, useState, useTransition, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  IndianRupee,
  Landmark,
  Loader2,
  Map,
  Phone,
  Scale,
  Search,
  ShieldCheck,
  User,
  X,
} from 'lucide-react';
import { sendStampDutyLead } from '@/app/actions/sendStampDutyLead';
import { STAMP_DUTY_RATES, calculateStampDuty } from '@/lib/stampDutyCalculator';

function FieldError({ message }) {
  if (!message) return null;

  return (
    <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-red-500">
      <AlertCircle size={12} />
      {message}
    </p>
  );
}

function formatAmountLabel(value) {
  const amount = Number(value);

  if (!Number.isFinite(amount) || amount <= 0) return '0.00 Lakhs';

  return amount >= 10000000
    ? `${(amount / 10000000).toFixed(2)} Cr`
    : `${(amount / 100000).toFixed(2)} Lakhs`;
}

export default function StampDutyHero() {
  const [propertyValue, setPropertyValue] = useState('');
  const [selectedState, setSelectedState] = useState(() => STAMP_DUTY_RATES.find((state) => state.name === 'Maharashtra') || STAMP_DUTY_RATES[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [submittedResult, setSubmittedResult] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef(null);

  const filteredStates = useMemo(
    () => STAMP_DUTY_RATES.filter((state) => state.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [searchTerm]
  );

  const previewCalculation = useMemo(
    () => calculateStampDuty(propertyValue, selectedState?.name),
    [propertyValue, selectedState]
  );

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setMessage('');

    startTransition(async () => {
      const result = await sendStampDutyLead({
        name: clientName,
        phone: clientPhone,
        state: selectedState?.name || '',
        propertyValue: String(propertyValue),
      });

      setFieldErrors(result.fieldErrors || {});
      setMessage(result.message || '');

      if (result.ok) {
        setSubmittedResult(result.calculation || previewCalculation);
      } else {
        setSubmittedResult(null);
      }
    });
  };

  return (
    <section className="relative min-h-screen pt-26 pb-10 bg-[#F8F5F2] text-[#2D2926] overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#2D2926_1px,transparent_1px),linear-gradient(to_bottom,#2D2926_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[#A67153] bg-white border border-gray-200/60 px-4 py-2 rounded-full shadow-sm">
                <Scale size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Stamp Duty Calculator</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.2]">
                Stamp Duty & <span className="font-light text-[#A67153]">Registry Fee</span> Calculator
              </h1>
              <p className="text-gray-500 text-sm md:text-lg max-w-xl leading-relaxed">
                Estimate statutory property purchase charges across Indian states and union territories using the uploaded stamp duty and registration fee schedule.
              </p>
            </div>

            <div className="lg:grid hidden grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Stamp Duty Fees</span>
                <p className="text-xl font-black text-[#A67153]">&#8377;{formatResult(submittedResult?.stampDuty)}</p>
                {/* <span className="text-[10px] text-gray-400 font-medium block">{submittedResult ? submittedResult.stampDutyLabel : 'Submit form to view'}</span> */}
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Registration Charges</span>
                <p className="text-xl font-black text-[#2D2926]">&#8377;{formatResult(submittedResult?.registrationFee)}</p>
                {/* <span className="text-[10px] text-gray-400 font-medium block">{submittedResult ? submittedResult.registrationLabel : 'Awaiting verification'}</span> */}
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Total Asset Outlay</span>
                <p className="text-xl font-black text-[#2D2926]">&#8377;{formatResult(submittedResult?.totalOutlay)}</p>
                {/* <span className="text-[10px] text-gray-400 font-medium block">{submittedResult ? 'Value + statutory costs' : 'After successful submit'}</span> */}
              </div>
            </div>

            {submittedResult?.note && (
              <p className="rounded-xl border border-[#A67153]/20 bg-white px-4 py-3 text-xs font-semibold leading-relaxed text-gray-500">
                {submittedResult.note}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-gray-400 border-t border-gray-200/60">
              <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#A67153]" /> <span>Server-validated submission</span></div>
              <div className="flex items-center gap-2"><Landmark size={16} className="text-[#A67153]" /> <span>Rates extracted from uploaded sheet</span></div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-xl border border-gray-100 shadow-2xl">
              <form className="space-y-5" onSubmit={handleFormSubmit} noValidate>
                <div className="space-y-1 mb-2">
                  <h3 className="text-lg font-bold text-[#2D2926]">Calculate Stamp Duty</h3>
                  <p className="text-xs text-gray-400">Submit your details to receive the calculated legal fee summary.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1"><User size={11} /> Name</label>
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
                      className={`w-full bg-[#F8F5F2] border focus:border-[#A67153]/30 focus:bg-white text-xs font-bold rounded-xl px-4 py-3 outline-none transition-all ${fieldErrors.name ? 'border-red-300' : 'border-transparent'}`}
                    />
                    <FieldError message={fieldErrors.name} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1"><Phone size={11} /> Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXX"
                      value={clientPhone}
                      onChange={(event) => {
                        setClientPhone(event.target.value);
                        clearFieldError('phone');
                        resetSubmittedResult();
                      }}
                      className={`w-full bg-[#F8F5F2] border focus:border-[#A67153]/30 focus:bg-white text-xs font-bold rounded-xl px-4 py-3 outline-none transition-all ${fieldErrors.phone ? 'border-red-300' : 'border-transparent'}`}
                    />
                    <FieldError message={fieldErrors.phone} />
                  </div>
                </div>

                <div className="space-y-1.5 relative" ref={dropdownRef}>
                  <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1"><Map size={11} /> Select State/UT</label>
                  <input type="hidden" required name="state" value={selectedState?.name || ''} />
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen((current) => !current)}
                    className={`w-full bg-[#F8F5F2] border text-left text-xs font-bold rounded-xl px-4 py-3 text-[#2D2926] flex items-center justify-between transition-all hover:bg-[#f0ece8] ${fieldErrors.state ? 'border-red-300' : 'border-transparent'}`}
                    aria-expanded={isDropdownOpen}
                  >
                    <span>{selectedState?.name || 'Select state'}</span>
                    <ChevronDown size={14} className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <FieldError message={fieldErrors.state} />

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="p-3 border-b border-gray-50 flex items-center gap-2 bg-[#F8F5F2]/50">
                          <Search size={14} className="text-gray-400" />
                          <input autoFocus placeholder="Search state..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} className="bg-transparent border-none outline-none text-xs font-medium w-full text-[#2D2926]" />
                          {searchTerm && <X size={14} className="text-gray-400 cursor-pointer" onClick={() => setSearchTerm('')} />}
                        </div>
                        <ul className="max-h-52 overflow-y-auto divide-y divide-gray-50">
                          {filteredStates.length > 0 ? filteredStates.map((state) => (
                            <li key={state.name}>
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedState(state);
                                  setIsDropdownOpen(false);
                                  setSearchTerm('');
                                  clearFieldError('state');
                                  resetSubmittedResult();
                                }}
                                className="w-full text-left font-bold px-5 py-3 hover:bg-[#F8F5F2] text-xs transition-colors"
                              >
                                <span className="block">{state.name}</span>
                                <span className="block pt-1 text-[10px] font-semibold text-gray-400">{state.stampDutyLabel} stamp duty</span>
                              </button>
                            </li>
                          )) : <li className="p-4 text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest">No matching state found</li>}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1"><IndianRupee size={11} /> Property Value</label>
                  <div className="relative flex items-center">
                    <input
                      type="number"
                      required
                      min="100000"
                      max="500000000"
                      value={propertyValue}
                      onChange={(event) => {
                        setPropertyValue(event.target.value);
                        clearFieldError('propertyValue');
                        resetSubmittedResult();
                      }}
                      className={`w-full bg-[#F8F5F2] border focus:border-[#A67153]/30 focus:bg-white text-xs font-black rounded-xl px-4 py-3.5 outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${fieldErrors.propertyValue ? 'border-red-300' : 'border-transparent'}`}
                    />
                    <span className="absolute right-4 text-[9px] font-black uppercase text-[#A67153] bg-white px-2 py-1 rounded shadow-sm border border-gray-50 pointer-events-none">
                      {formatAmountLabel(propertyValue)}
                    </span>
                  </div>
                  <FieldError message={fieldErrors.propertyValue} />
                </div>

                {message && (
                  <p className={`flex items-center gap-2 text-xs font-bold ${submittedResult ? 'text-green-600' : 'text-red-600'}`} aria-live="polite">
                    {submittedResult ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-[#2D2926] hover:bg-[#1A1817] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-wait disabled:opacity-70 disabled:hover:scale-100 mt-2"
                >
                  {isPending ? (
                    <>
                      Calculating <Loader2 size={14} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Generate Legal Fee Summary <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
            <div className="grid lg:hidden grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Stamp Duty Fees</span>
                <p className="text-xl font-black text-[#A67153]">&#8377;{formatResult(submittedResult?.stampDuty)}</p>
                {/* <span className="text-[10px] text-gray-400 font-medium block">{submittedResult ? submittedResult.stampDutyLabel : 'Submit form to view'}</span> */}
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Registration Charges</span>
                <p className="text-xl font-black text-[#2D2926]">&#8377;{formatResult(submittedResult?.registrationFee)}</p>
                {/* <span className="text-[10px] text-gray-400 font-medium block">{submittedResult ? submittedResult.registrationLabel : 'Awaiting verification'}</span> */}
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Total Asset Outlay</span>
                <p className="text-xl font-black text-[#2D2926]">&#8377;{formatResult(submittedResult?.totalOutlay)}</p>
                {/* <span className="text-[10px] text-gray-400 font-medium block">{submittedResult ? 'Value + statutory costs' : 'After successful submit'}</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
