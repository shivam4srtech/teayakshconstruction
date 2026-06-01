'use client';
import { useState } from 'react';
import Link from 'next/link'
import { FaChevronRight, FaChevronLeft, FaCheck } from 'react-icons/fa6';
import { FaExclamationTriangle } from "react-icons/fa";
import { IoMailOutline, IoCallOutline } from 'react-icons/io5';
import { ImSpinner2 } from 'react-icons/im'; 
import { sendConsultationRequest } from '@/app/actions/sendEmail'; // Path to your server action

import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa';
// 1. Maintainable Structural Social Matrix Data Array
const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/Trayakshconstruction",
    icon: FaFacebookF
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/trayakshconstruction",
    icon: FaInstagram
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Trayakshconstruction",
    icon: FaYoutube
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/trayaksh-construction/",
    icon: FaLinkedinIn
  }
];
const SERVICES = ["Luxury Villa", "Commercial Construction", "Residential Home", "Medical/Pharmacy Setup", "Interior Design"];
const BUDGET_RANGES = ["Under 50 Lakhs", "50 Lakhs - 2 Crores", "2 Crores - 10 Crores", "10 Crores+"];

export default function ContactConsultant() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    scope: '',
    name: '',
    email: '',
    phone: ''
  });

  const updateData = (fields) => setFormData(prev => ({ ...prev, ...fields }));

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    // Call the server action
    const result = await sendConsultationRequest(formData);

    if (result.success) {
      setSuccess(true);
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <section className="bg-[#F8F5F2] py-24 lg:py-28" id="contact">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <p className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4">
                Get Started
              </p>
              <h1 className="text-3xl lg:text-5xl font-medium text-brand-dark tracking-tight">
                Request a <span className=". font-light text-brand/80">Consultant.</span>
              </h1>
              <p className="text-brand-dark/50 text-lg leading-relaxed max-w-sm">
                Take the first step toward your masterpiece. Our experts will review your scope and schedule a private consultation.
              </p>
            </div>

            <div className="space-y-6 pt-0">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white flex items-center justify-center text-brand shadow-sm border border-gray-100 group-hover:bg-brand group-hover:text-white transition-all">
                  <IoCallOutline size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">Call our Office</p>
                  <p className="text-brand-dark font-medium">+91 88860 60442</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white flex items-center justify-center text-brand shadow-sm border border-gray-100 group-hover:bg-brand group-hover:text-white transition-all">
                  <IoMailOutline size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">Email Inquiries</p>
                  <p className="text-brand-dark font-medium">info@trayakshconstruction.com</p>
                </div>
                
              </div>
            </div>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon;
                
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Follow Trayaksh on ${social.name}`}
                    
                    className="w-10 h-10 rounded-full bg-[#A67153] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#A67153] hover:border-[#A67153]/40 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-105 shadow-lg shadow-black/[0.02]"
                  >
                    <IconComponent className="text-sm transition-transform duration-300 group-hover:rotate-6" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side: Multi-Step Form */}
          <div className="lg:col-span-7 bg-white shadow-2xl p-4 lg:p-6 relative overflow-hidden flex flex-col justify-center gap-0">
            
            {success ? (
              /* SUCCESS STATE VIEW */
              <div className="text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheck size={32} />
                </div>
                <h3 className="text-3xl font-medium text-brand-dark mb-4">Request Sent</h3>
                <p className="text-brand-dark/50 max-w-sm mx-auto .">
                  Thank you, {formData.name}. Our consultant will contact you shortly to discuss the {formData.service} project.
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-8 text-brand font-bold uppercase text-[10px] tracking-widest hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <>
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
                  <div 
                    className="h-full bg-brand transition-all duration-500" 
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>

                <div className="lg:mb-6 mb-3 flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">Step 0{step} / 03</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/20">
                    {step === 1 && "Project Type"}
                    {step === 2 && "Project Scope"}
                    {step === 3 && "Personal Details"}
                  </span>
                </div>

                {/* Step 1: Service Selection */}
                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                    <h3 className="md:text-2xl text-xl font-medium text-brand-dark mb-3 lg:mb-6">What are you looking to build?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {SERVICES.map((s) => (
                        <button
                          key={s}
                          onClick={() => updateData({ service: s })}
                          className={`p-4 text-left text-sm border transition-all ${
                            formData.service === s 
                            ? 'border-brand bg-brand/5 text-brand font-bold' 
                            : 'border-gray-100 hover:border-brand/40 text-brand-dark/60'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    <button 
                      disabled={!formData.service}
                      onClick={nextStep}
                      className="w-full bg-brand-dark text-white py-5 flex items-center justify-center gap-3 disabled:opacity-50 hover:bg-brand transition-all cursor-pointer"
                    >
                      Next Step <FaChevronRight size={12} />
                    </button>
                  </div>
                )}

                {/* Step 2: Project Scope & Budget */}
                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                    <h3 className="text-2xl font-medium text-brand-dark">Define the scale.</h3>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/60">Estimated Budget Range</label>
                      <div className="grid grid-cols-2 gap-3">
                        {BUDGET_RANGES.map((b) => (
                          <button
                            key={b}
                            onClick={() => updateData({ budget: b })}
                            className={`p-3 text-[11px] border transition-all ${
                              formData.budget === b ? 'border-brand bg-brand/5 text-brand font-bold' : 'border-gray-100 text-brand-dark/50'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/60">Project Brief (Optional)</label>
                      <textarea 
                        className="w-full border border-gray-100 p-2 outline-none focus:border-brand text-sm h-20 resize-none"
                        placeholder="Tell us about the location, size, or specific requirements..."
                        value={formData.scope}
                        onChange={(e) => updateData({ scope: e.target.value })}
                      />
                    </div>
                    <div className="flex gap-4">
                      <button onClick={prevStep} className="flex-1 border border-gray-100 py-5 text-brand-dark/60 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-xs uppercase font-bold tracking-widest">
                        <FaChevronLeft size={10} /> Back
                      </button>
                      <button 
                        disabled={!formData.budget}
                        onClick={nextStep} 
                        className="flex-[2] bg-brand-dark text-white py-5 hover:bg-brand transition-all flex items-center justify-center gap-2 text-xs uppercase font-bold tracking-widest"
                      >
                        Continue <FaChevronRight size={10} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                    <h3 className="text-2xl font-medium text-brand-dark">Final Details.</h3>
                    <div className="space-y-4">
                      <input 
                        type="text" placeholder="Full Name"
                        className="w-full border-b border-gray-100 py-4 outline-none focus:border-brand text-sm"
                        value={formData.name}
                        onChange={(e) => updateData({ name: e.target.value })}
                      />
                      <input 
                        type="email" placeholder="Email Address"
                        className="w-full border-b border-gray-100 py-4 outline-none focus:border-brand text-sm"
                        value={formData.email}
                        onChange={(e) => updateData({ email: e.target.value })}
                      />
                      <input 
                        type="tel" placeholder="Phone Number"
                        className="w-full border-b border-gray-100 py-4 outline-none focus:border-brand text-sm"
                        value={formData.phone}
                        onChange={(e) => updateData({ phone: e.target.value })}
                      />
                    </div>

                    {/* Backend Error Display */}
                    {error && (
                      <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 text-[11px] font-bold uppercase tracking-wider">
                        <FaExclamationTriangle /> {error}
                      </div>
                    )}

                    <div className="flex gap-4">
                      <button 
                        disabled={loading}
                        onClick={prevStep} 
                        className="flex-1 border border-gray-100 py-5 text-brand-dark/60 hover:bg-gray-50 transition-all text-xs uppercase font-bold tracking-widest disabled:opacity-50"
                      >
                        Back
                      </button>
                      <button 
                        disabled={loading || !formData.name || !formData.email || !formData.phone}
                        onClick={handleSubmit}
                        className="flex-[2] bg-brand text-white py-5 hover:bg-brand-dark transition-all flex items-center justify-center gap-2 text-xs uppercase font-bold tracking-widest disabled:opacity-70"
                      >
                        {loading ? (
                          <>Processing <ImSpinner2 className="animate-spin" size={16} /></>
                        ) : (
                          <>Submit Request <FaCheck size={12} /></>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}