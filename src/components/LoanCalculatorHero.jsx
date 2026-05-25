'use client';

import { useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  Percent,
  Calendar,
  User,
  Phone,
  ArrowRight,
  ShieldCheck,
  Landmark,
  IndianRupee,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { sendLoanCalculatorLead } from '@/app/actions/sendLoanCalculatorLead';

function FieldError({ message }) {
  if (!message) return null;

  return (
    <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-red-500">
      <AlertCircle size={12} />
      {message}
    </p>
  );
}

function calculateLoanResult(loanAmount, interestRate, loanTenure) {
  const principal = Number(loanAmount);
  const monthlyRate = Number(interestRate) / 12 / 100;
  const numberOfMonths = Number(loanTenure) * 12;

  if (!Number.isFinite(principal) || principal <= 0 || !Number.isFinite(numberOfMonths) || numberOfMonths <= 0) {
    return { monthlyEmi: 0, totalInterest: 0, totalPayment: 0 };
  }

  if (monthlyRate === 0) {
    return {
      monthlyEmi: Math.round(principal / numberOfMonths),
      totalInterest: 0,
      totalPayment: principal,
    };
  }

  const ratePower = Math.pow(1 + monthlyRate, numberOfMonths);
  const monthlyEmi = Math.round((principal * monthlyRate * ratePower) / (ratePower - 1));
  const totalPayment = Math.round(monthlyEmi * numberOfMonths);

  return {
    monthlyEmi,
    totalInterest: Math.max(0, totalPayment - principal),
    totalPayment,
  };
}

function formatAmountLabel(value) {
  const amount = Number(value);

  if (!Number.isFinite(amount) || amount <= 0) return '0.00 Lakhs';

  return amount >= 10000000
    ? `${(amount / 10000000).toFixed(2)} Cr`
    : `${(amount / 100000).toFixed(2)} Lakhs`;
}

export default function LoanCalculatorHero() {
  // 1. Core Financial Calculation Inputs States
  const [loanAmount, setLoanAmount] = useState('5000000'); // Default 50 Lakhs
  const [interestRate, setInterestRate] = useState(8.5); // Default 8.5%
  const [loanTenure, setLoanTenure] = useState(20); // Default 20 Years

  // 2. High-Conversion Lead Verification Data States
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  // 3. Submission-gated Mathematical Outputs States
  const [submittedResult, setSubmittedResult] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

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

    const calculatedResult = calculateLoanResult(loanAmount, interestRate, loanTenure);

    startTransition(async () => {
      const result = await sendLoanCalculatorLead({
        name: clientName,
        phone: clientPhone,
        loanAmount: String(loanAmount),
        interestRate: String(interestRate),
        loanTenure: String(loanTenure),
      });

      setFieldErrors(result.fieldErrors || {});
      setMessage(result.message || '');

      if (result.ok) {
        setSubmittedResult(result.calculation || calculatedResult);
      } else {
        setSubmittedResult(null);
      }
    });
  };

  return (
    <section className="relative min-h-screen md:pt-32 pt-24 md:pb-20 pb-10 bg-[#F8F5F2] text-[#2D2926] overflow-hidden flex items-center">
      {/* Decorative Blueprint Background Grid Lines */}
      <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#2D2926_1px,transparent_1px),linear-gradient(to_bottom,#2D2926_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* ================= LEFT SIDE: RICH TEXT & REAL-TIME METRICS (7 COLS) ================= */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[#A67153] bg-white border border-gray-200/60 px-4 py-2 rounded-full shadow-sm">
                <Landmark size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Instant Pre-Approval Panel</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#2D2926] leading-[1.1]">
                Calculate Your <span className=" font-light text-[#A67153]">Home Loan EMI</span> In Real-Time
              </h1>
              <p className="text-gray-500 md:text-lg text-sm font-medium leading-relaxed max-w-xl">
                Plan your property investment budgets accurately. Shift range configurations to instantly gauge accurate monthly payloads and competitive interest projections.
              </p>
            </div>

            {/* DYNAMIC REAL-TIME OUTPUT CARDS DASHBOARD */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Monthly EMI</span>
                <p className="text-xl md:text-2xl font-bold text-[#A67153]">&#8377;{formatResult(submittedResult?.monthlyEmi)}</p>
                <span className="text-[10px] text-gray-400 font-medium block">{submittedResult ? 'Principal + Interest' : 'Submit form to view'}</span>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block">Total Interest </span>
                <p className="text-xl md:text-2xl font-black text-[#2D2926]">&#8377;{formatResult(submittedResult?.totalInterest)}</p>
                <span className="text-[10px] text-gray-400 font-medium block">{submittedResult ? 'Total Interest Payload' : 'Awaiting verification'}</span>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block">Total Payable </span>
                <p className="text-xl md:text-2xl font-black text-[#2D2926]">&#8377;{formatResult(submittedResult?.totalPayment)}</p>
                <span className="text-[10px] text-gray-400 font-medium block">{submittedResult ? 'Over Selected Tenure' : 'After form submission'}</span>
              </div>
            </div>

            {/* Core Trust Clearance Badging Ribbon */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-gray-400 border-t border-gray-200/60">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#A67153]" /> <span>Bank-Validated Calculations</span>
              </div>
              <div className="flex items-center gap-2">
                <Calculator size={16} className="text-[#A67153]" /> <span>Zero Hidden Processing Traps</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: FINANCIAL CONTROL LEAD GENERATION FORM (5 COLS) ================= */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-2xl shadow-black/[0.015]"
            >
              <form onSubmit={handleFormSubmit} className="space-y-6" noValidate>
                <div className="space-y-1.5 mb-2">
                  <h3 className="text-lg font-bold tracking-tight text-[#2D2926]">Configure & Secure Quotes</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Enter your parameters below to request targeted institutional interest offers.</p>
                </div>

                {/* 1. PERSONAL DETAILS IDENTIFICATION SUB-GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <User size={11} /> Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rahul Sharma"
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

                  {/* Phone Input */}
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
                </div>

                {/* 2. DYNAMIC CONTROLS SET */}
                {/* Loan Amount NUMERIC INPUT FIELD */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                    <IndianRupee size={11} /> Target Loan Amount (&#8377;)
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="number"
                      required
                      min="100000"
                      max="500000000"
                      value={loanAmount}
                      onChange={(event) => {
                        setLoanAmount(event.target.value);
                        clearFieldError('loanAmount');
                        resetSubmittedResult();
                      }}
                      className={`w-full bg-[#F8F5F2] border focus:border-[#A67153]/30 focus:bg-white text-xs font-black rounded-xl px-4 py-3.5 text-[#2D2926] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none transition-all ${fieldErrors.loanAmount ? 'border-red-300' : 'border-transparent'}`}
                    />
                    <span className="absolute right-4 text-[10px] font-black uppercase text-gray-400 bg-white shadow-sm border border-gray-100 px-2 py-1 rounded-md pointer-events-none">
                      {formatAmountLabel(loanAmount)}
                    </span>
                  </div>
                  <FieldError message={fieldErrors.loanAmount} />
                </div>

                {/* Interest Rate Control Block (Range Up To 30%) */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1"><Percent size={10} /> Interest Rate Base</label>
                    <span className="text-[#2D2926] font-black bg-[#F8F5F2] px-2.5 py-1 rounded-lg">{interestRate}% p.a.</span>
                  </div>
                  <input
                    type="range"
                    required
                    min="5"
                    max="30"
                    step="0.1"
                    value={interestRate}
                    onChange={(event) => {
                      setInterestRate(Number(event.target.value));
                      clearFieldError('interestRate');
                      resetSubmittedResult();
                    }}
                    className="w-full accent-[#A67153] h-1 bg-gray-100 rounded-lg cursor-pointer"
                  />
                  <FieldError message={fieldErrors.interestRate} />
                  <div className="flex justify-between text-[9px] font-bold text-gray-300 uppercase tracking-widest">
                    <span>5%</span>
                    <span>30%</span>
                  </div>
                </div>

                {/* Tenure Control Block */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1"><Calendar size={10} /> Loan Tenure Term</label>
                    <span className="text-[#2D2926] font-black bg-[#F8F5F2] px-2.5 py-1 rounded-lg">{loanTenure} Years</span>
                  </div>
                  <input
                    type="range"
                    required
                    min="5"
                    max="30"
                    step="1"
                    value={loanTenure}
                    onChange={(event) => {
                      setLoanTenure(Number(event.target.value));
                      clearFieldError('loanTenure');
                      resetSubmittedResult();
                    }}
                    className="w-full accent-[#A67153] h-1 bg-gray-100 rounded-lg cursor-pointer"
                  />
                  <FieldError message={fieldErrors.loanTenure} />
                  <div className="flex justify-between text-[9px] font-bold text-gray-300 uppercase tracking-widest">
                    <span>5 Yrs</span>
                    <span>30 Yrs</span>
                  </div>
                </div>

                {message && (
                  <p className={`flex items-center gap-2 text-xs font-bold ${submittedResult ? 'text-green-600' : 'text-red-600'}`}>
                    {submittedResult ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
                    {message}
                  </p>
                )}

                {/* 3. FINAL FORM ACTION CTA */}
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
                      Get Verified Calculation <ArrowRight size={14} />
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
