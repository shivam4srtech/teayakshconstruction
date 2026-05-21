'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ShieldCheck, Building2, Loader2, CheckCircle2 } from 'lucide-react';
import { useModalStore } from '@/store/useModalStore';
import CustomSelect from './CustomSelect';
import { sendConsultationLead } from '@/app/actions/sendConsultationLead';
import { useCityOptions } from '@/hooks/useCityOptions';

const INITIAL_FORM = {
  name: '',
  city: '',
  phone: '',
  email: '',
};

function FieldError({ message }) {
  if (!message) return null;
  return <p className="ml-2 text-[10px] font-bold uppercase tracking-wider text-red-500">{message}</p>;
}

export default function GlobalConsultationModal() {
  const { isOpen, closeModal } = useModalStore();
  const { cityOptions, isLoadingCities } = useCityOptions();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => ({ ...prev, [field]: '' }));
    setMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const result = await sendConsultationLead({
      ...formData,
      source: 'Global Consultation Modal',
    });

    setIsSubmitting(false);
    setFieldErrors(result.fieldErrors || {});
    setMessage(result.message || '');

    if (result.ok) {
      setIsSuccess(true);
      setFormData(INITIAL_FORM);
    }
  };

  const handleClose = () => {
    closeModal();
    setIsSuccess(false);
    setMessage('');
    setFieldErrors({});
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#2D2926]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-auto shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#2D2926] hover:bg-[#A67153] hover:text-white transition-all"
            >
              <X size={20} />
            </button>

            {/* LEFT COLUMN: Brand CTA */}
            <div className="w-full md:w-[40%] bg-[#2D2926] p-12 text-white md:flex hidden flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-8 h-[1px] bg-[#A67153]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153]">Consultation</span>
                </div>
                <h2 className="text-4xl font-medium tracking-tighter leading-tight mb-6">
                  Build your <span className="font-light text-[#A67153]">Legacy</span> with Trayaksh
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-3">
                  Ready to turn your vision into a structural masterpiece? Let&apos;s discuss your project parameters.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: <ShieldCheck size={18} />, txt: "470+ Quality Checks" },
                    { icon: <Building2 size={18} />, txt: "Transparent Pricing" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/80">
                      <div className="text-[#A67153]">{item.icon}</div>
                      {item.txt}
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#A67153]/10 rounded-full blur-3xl" />
            </div>

            {/* RIGHT COLUMN: The Form */}
            <div className="w-full md:w-[60%] p-6 lg:p-16 bg-white overflow-y-auto">
              <div className="mb-3 pr-12">
                <h3 className="md:text-2xl text-xl font-bold text-[#2D2926] mb-2">Consult with an Expert</h3>
                <p className="text-gray-400 text-sm">Fill in the information below to get started.</p>
              </div>

              {isSuccess ? (
                <div className="rounded-2xl border border-green-100 bg-green-50 p-6 text-center">
                  <CheckCircle2 className="mx-auto mb-3 text-green-600" size={34} />
                  <h4 className="text-xl font-bold text-[#2D2926]">Request Sent</h4>
                  <p className="mt-2 text-sm text-gray-500">{message}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setMessage('');
                    }}
                    className="mt-5 text-[10px] font-black uppercase tracking-widest text-[#A67153]"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="eg. Prince Mishra"
                      value={formData.name}
                      onChange={(event) => updateField('name', event.target.value)}
                      className={`font-medium text-[.8rem] w-full p-3 rounded bg-[#F8F5F2] focus:border-[#A67153] outline-none transition-all text-sm border ${fieldErrors.name ? 'border-red-300' : 'border-gray-200'}`}
                    />
                    <FieldError message={fieldErrors.name} />
                  </div>

                  {/* City Custom Select */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Select City</label>
                    <CustomSelect 
                      options={cityOptions} 
                      placeholder={isLoadingCities ? "Loading cities..." : "Select City"}
                      value={formData.city}
                      onChange={(value) => updateField('city', value)}
                      className={`w-full bg-[#F8F5F2] rounded p-3 flex justify-between items-center cursor-pointer border ${fieldErrors.city ? 'border-red-300' : 'border-transparent'}`}
                    />
                    <FieldError message={fieldErrors.city} />
                  </div>

                  {/* Phone & Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                      className={`font-medium text-[.8rem] w-full p-3 rounded bg-[#F8F5F2] focus:border-[#A67153] outline-none transition-all text-sm border ${fieldErrors.phone ? 'border-red-300' : 'border-gray-200'}`}
                    />
                    <FieldError message={fieldErrors.phone} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address <span className="text-gray-300">(Optional)</span></label>
                    <input 
                      type="email" 
                      placeholder="prince@example.com"
                      value={formData.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      className={`font-medium text-[.8rem] w-full p-3 bg-[#F8F5F2] focus:border-[#A67153] outline-none transition-all text-sm border ${fieldErrors.email ? 'border-red-300' : 'border-gray-200'}`}
                    />
                    <FieldError message={fieldErrors.email} />
                  </div>

                  {message && (
                    <p className="md:col-span-2 text-center text-xs font-bold text-red-500">{message}</p>
                  )}

                  {/* Submit Button */}
                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group bg-[#2D2926] text-white py-5 rounded-xl font-black uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#A67153] transition-all shadow-xl shadow-black/10 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          Sending
                          <Loader2 size={16} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          Request Call Back
                          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
