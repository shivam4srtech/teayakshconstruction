'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, Percent, Calendar, User, Phone, 
  ArrowRight, ShieldCheck, Landmark, IndianRupee 
} from 'lucide-react';

export default function LoanCalculatorHero() {
  // 1. Core Financial Calculation Inputs States
  const [loanAmount, setLoanAmount] = useState(5000000); // Default 50 Lakhs
  const [interestRate, setInterestRate] = useState(8.5);  // Default 8.5%
  const [loanTenure, setLoanTenure] = useState(20);      // Default 20 Years

  // 2. High-Conversion Lead Verification Data States
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  // 3. Mathematical Outputs States
  const [monthlyEmi, setMonthlyEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  // Trigger mathematical recalibration automatically when variables shift
  useEffect(() => {
    const principal = loanAmount;
    // Monthly interest rate = Annual rate / 12 months / 100 percentage conversion
    const monthlyRate = interestRate / 12 / 100;
    const numberOfMonths = loanTenure * 12;

    if (principal > 0 && numberOfMonths > 0) {
      if (monthlyRate === 0) {
        // Simple fallback edge case for 0% interest rate configuration
        setMonthlyEmi(Math.round(principal / numberOfMonths));
        setTotalPayment(principal);
        setTotalInterest(0);
        return;
      }

      // Standard EMI Amortization Formula: [P x R x (1+R)^N] / [((1+R)^N)-1]
      const ratePower = Math.pow(1 + monthlyRate, numberOfMonths);
      const emiValue = (principal * monthlyRate * ratePower) / (ratePower - 1);
      
      const totalPayableValue = emiValue * numberOfMonths;
      const totalInterestValue = totalPayableValue - principal;

      setMonthlyEmi(Math.round(emiValue));
      setTotalInterest(Math.round(totalInterestValue));
      setTotalPayment(Math.round(totalPayableValue));
    } else {
      setMonthlyEmi(0);
      setTotalInterest(0);
      setTotalPayment(0);
    }
  }, [loanAmount, interestRate, loanTenure]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Lead secured for ${clientName} (${clientPhone}). EMI Tracked: ₹${monthlyEmi.toLocaleString('en-IN')}/mo`);
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
                <p className="text-xl md:text-2xl font-black text-[#A67153]">₹{monthlyEmi.toLocaleString('en-IN')}</p>
                <span className="text-[10px] text-gray-400 font-medium block">Principal + Interest</span>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Total Interest Payback</span>
                <p className="text-xl md:text-2xl font-black text-[#2D2926]">₹{totalInterest.toLocaleString('en-IN')}</p>
                <span className="text-[10px] text-gray-400 font-medium block">Total Interest Payload</span>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Total尊Payable Matrix</span>
                <p className="text-xl md:text-2xl font-black text-[#2D2926]">₹{totalPayment.toLocaleString('en-IN')}</p>
                <span className="text-[10px] text-gray-400 font-medium block">Over Selected Tenure</span>
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
              <form onSubmit={handleFormSubmit} className="space-y-6">
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
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#F8F5F2] border border-transparent focus:border-[#A67153]/30 focus:bg-white text-xs font-bold rounded-xl px-4 py-3 text-[#2D2926] placeholder-gray-300 outline-none transition-all"
                    />
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
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-[#F8F5F2] border border-transparent focus:border-[#A67153]/30 focus:bg-white text-xs font-bold rounded-xl px-4 py-3 text-[#2D2926] placeholder-gray-300 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 2. DYNAMIC CONTROLS SET */}
                {/* Loan Amount NUMERIC INPUT FIELD */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                    <IndianRupee size={11} /> Target Loan Amount (₹)
                  </label>
                  <div className="relative flex items-center">
                    <input 
                      type="number" 
                      min="100000"
                      max="500000000"
                      value={loanAmount} 
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full bg-[#F8F5F2] border border-transparent focus:border-[#A67153]/30 focus:bg-white text-xs font-black rounded-xl px-4 py-3.5 text-[#2D2926] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none transition-all"
                    />
                    <span className="absolute right-4 text-[10px] font-black uppercase text-gray-400 bg-white shadow-sm border border-gray-100 px-2 py-1 rounded-md pointer-events-none">
                      {loanAmount >= 10000000 ? `${(loanAmount / 10000000).toFixed(2)} Cr` : `${(loanAmount / 100000).toFixed(2)} Lakhs`}
                    </span>
                  </div>
                </div>

                {/* Interest Rate Control Block (Range Up To 30%) */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1"><Percent size={10} /> Interest Rate Base</label>
                    <span className="text-[#2D2926] font-black bg-[#F8F5F2] px-2.5 py-1 rounded-lg">{interestRate}% p.a.</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="30" 
                    step="0.1"
                    value={interestRate} 
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-[#A67153] h-1 bg-gray-100 rounded-lg cursor-pointer"
                  />
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
                    min="5" 
                    max="30" 
                    step="1"
                    value={loanTenure} 
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full accent-[#A67153] h-1 bg-gray-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-bold text-gray-300 uppercase tracking-widest">
                    <span>5 Yrs</span>
                    <span>30 Yrs</span>
                  </div>
                </div>

                {/* 3. FINAL FORM ACTION CTA */}
                <button 
                  type="submit" 
                  className="w-full bg-[#2D2926] hover:bg-[#1A1817] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  Get Verified Bank Offers <ArrowRight size={14} />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}