'use client';
import { 
  Info, HelpCircle, Sparkles, Sliders, CheckCircle2, 
  Percent, Lightbulb, ShieldCheck, ArrowRight, Table 
} from 'lucide-react';
import { useModalStore } from '@/store/useModalStore';

export default function LoanCalculatorContent() {
  const openModal = useModalStore((state) => state.openModal);  
  return (
    <article className="pb-10 pt-0 bg-[#F8F5F2] text-[#2D2926] font-sans antialiased selection:bg-[#A67153] selection:text-white">
      <div className="max-w-5xl mx-auto px-5 md:px-8 space-y-4">
        
        {/* ================= SECTION 1: ABOUT & CONCEPT BREAKDOWN ================= */}
        <section className="space-y-6">
          {/* Main Topic Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-[#A67153] bg-white border border-gray-200/60 px-3.5 py-1.5 rounded-xl shadow-sm">
              <Info size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Guide Book</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-medium tracking-tight">
              About the Housing Loan EMI Calculator
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Navigating home financing parameters requires absolute numerical clarity before laying a property foundation. The Trayaksh Construction Housing Loan Equated Monthly Installment (EMI) engine is a premium tool calibrated to eliminate guesswork, allowing prospective custom villa owners to forecast exact long-term cash flows instantly.
            </p>
          </div>

          {/* Sub Topic: What is Home Loan EMI */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-4">
            <div className="md:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-black/[0.005]">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#A67153] flex items-center gap-1.5">
                <HelpCircle size={15} /> Core Definition
              </h3>
              <p className="text-[1rem] font-bold tracking-tight mt-2 text-[#2D2926]">
                What is a Home Loan EMI?
              </p>
            </div>
            <div className="md:col-span-8 text-gray-500 text-xs md:text-sm leading-relaxed space-y-3">
              <p>
                An Equated Monthly Installment (EMI) represents a fixed, recurring payment paid by a borrower to a financial institution on a designated date each calendar month. 
              </p>
              <p>
                Every individual installment is structured into a dynamic, shifting matrix of two distinct components: the **Principal Amount** (repaying the direct initial money advanced) and the accrued **Interest Payload** charged by the lender. Over time, the balance shifts—early EMIs cover mostly interest charges, while later cycles reduce the core principal balance.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: TOOL FEATURES MATRIX ================= */}
        <section className="space-y-8 pt-10 border-t border-gray-200/60">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#A67153] block">Engineering Perks</span>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Features of Trayaksh Construction's Custom Calculator
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F8F5F2] text-[#A67153] flex items-center justify-center"><Sliders size={18} /></div>
              <h4 className="text-sm font-bold text-[#2D2926]">Adaptive Numeric Input Engine</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Type precise targets instead of fighting imprecise sliders. Supports massive multi-crore custom configurations seamlessly.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F8F5F2] text-[#A67153] flex items-center justify-center"><Sparkles size={18} /></div>
              <h4 className="text-sm font-bold text-[#2D2926]">High-Yield 30% Scale Scope</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Includes extended commercial benchmarks up to 30%, making it perfect for computing diverse plot acquisitions or structural build parameters.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F8F5F2] text-[#A67153] flex items-center justify-center"><CheckCircle2 size={18} /></div>
              <h4 className="text-sm font-bold text-[#2D2926]">Amortization Data Integrity</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Uses exact banking formulas to ensure calculated outcomes match real-world bank execution limits flawlessly.</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: STEP-BY-STEP USER WORKFLOW ================= */}
        <section className="space-y-8 pt-10 border-t border-gray-200/60">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              How to Use the Home Loan EMI Calculator
            </h2>
            <p className="text-gray-500 text-xs md:text-sm">Evaluating your future monthly payment cycles takes less than a minute via three easy steps:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <span className="text-2xl font-light text-[#A67153] tracking-tight">01.</span>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wide text-[#2D2926]">Input Target Capital</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Type your expected structural layout or land capital requirement directly into the numeric Loan Amount field.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl font-light text-[#A67153] tracking-tight">02.</span>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wide text-[#2D2926]">Calibrate Terms</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Adjust the Interest Rate range (up to 30%) and set the Loan Tenure length (5 to 30 years) to modify the calculation parameters.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl font-light text-[#A67153] tracking-tight">03.</span>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wide text-[#2D2926]">Analyze Breakdown</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Review the instant outputs card tracking your principal balances, interest overhead parameters, and secure real-time bank offers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: FORMULA & CONCRETE CASE STUDY ================= */}
        <section className="space-y-8 pt-10 border-t border-gray-200/60">
          <div className="space-y-4">
            <h2 className="text-xl md:text-3xl font-medium tracking-tight flex items-center gap-2.5">
              <Percent size={22} className="text-[#A67153]" /> Home Loan EMI Calculation Formula
            </h2>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              Every bank and automated calculator tracks repayment amortization data using the exact mathematical equation shown below:
            </p>
          </div>

          {/* Core Mathematical Layout Representation */}
          <div className="bg-[#2D2926] text-white p-8 rounded-[2rem] text-center space-y-3 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#A67153]/10 rounded-full blur-2xl pointer-events-none" />
            <span className="text-[9px] uppercase tracking-widest text-[#A67153] font-black block">Amortization Equation</span>
            <p className="text-xl md:text-2xl font-serif tracking-widest text-gray-100 py-2">
              EMI = [P x r x (1+r)^n] / [((1+r)^n) - 1]
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider pt-2 border-t border-white/5">
              <span><strong>P:</strong> Principal Loan Capital</span>
              <span><strong>r:</strong> Monthly Interest Rate (Annual Rate / 12 / 100)</span>
              <span><strong>n:</strong> Repayment Tenure in Months (Years x 12)</span>
            </div>
          </div>

          {/* Example Scenario Matrix */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
              <Table size={16} className="text-[#A67153]" /> Example of Home Loan EMI Calculation
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              Let’s look at a concrete case study. Suppose you secure a luxury villa development fund of **₹50 Lakhs** at an annual interest base of **8.5%** over a fixed tenure of **20 Years**:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-gray-200/60 shadow-sm bg-white">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#2D2926] text-white font-bold uppercase tracking-wider text-[9px]">
                    <th className="p-4">Input Variable Metric</th>
                    <th className="p-4 text-right">Assigned Value Reference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-500 font-medium md:text-sm text-xs">
                  <tr>
                    <td className="p-4 font-bold text-[#2D2926]">Principal Core Amount (P)</td>
                    <td className="p-4 text-right">₹ 50,000,000 (₹ 50 Lakhs)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2D2926]">Annual Interest Benchmark</td>
                    <td className="p-4 text-right">8.5% p.a.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2D2926]">Monthly Periodic Rate (r)</td>
                    <td className="p-4 text-right">0.007083 (8.5 / 12 / 100)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2D2926]">Tenure Multiplier in Months (n)</td>
                    <td className="p-4 text-right">240 Months (20 Years)</td>
                  </tr>
                  <tr className="bg-[#F8F5F2]/50 font-bold text-[#2D2926]">
                    <td className="p-4 flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#A67153]" /> Calculated Monthly EMI Output</td>
                    <td className="p-4 text-right text-base text-[#A67153]">₹ 43,391 / month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: PRUDENT RISK MANAGEMENT CRITERIA ================= */}
        <section className="space-y-6 pt-10 border-t border-gray-200/60">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Factors to Consider Before Taking a Home Loan
            </h2>
            <p className="text-gray-500 text-xs md:text-sm">Ensure your family asset plans stay safe by analyzing these key financial risk factors beforehand:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-1.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#2D2926] flex items-center gap-1.5">
                <Lightbulb size={13} className="text-[#A67153]" /> Debt-to-Income Ratio
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">Keep your total monthly EMI responsibilities under 40% of your net clean monthly take-home earnings to protect household cash reserves.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-1.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#2D2926] flex items-center gap-1.5">
                <Lightbulb size={13} className="text-[#A67153]" /> Fluctuating Interest Types
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">Analyze whether your bank uses a Fixed rate structure or a Floating rate (MCLR/RLLR link), which can shift your monthly payments when macro rates change.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-1.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#2D2926] flex items-center gap-1.5">
                <Lightbulb size={13} className="text-[#A67153]" /> Hidden Operational Add-ons
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">Always track auxiliary upfront operational charges like loan processing commissions, technical site verification fees, and legal registration expenses.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-1.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#2D2926] flex items-center gap-1.5">
                <Lightbulb size={13} className="text-[#A67153]" /> Tenure Impact on Total Interest
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">While longer tenures reduce your immediate monthly EMI, they significantly increase the total interest paid over the life of the loan.</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: CLOSING CONVERSION TRUST BANNER ================= */}
        <section className="bg-[#2D2926] text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#A67153]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl space-y-3">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#A67153] block">Structural Integrity Assurance</span>
            <h3 className="text-xl md:text-3xl font-medium tracking-tight text-gray-100 leading-tight">
              Simplify Your Home Loan EMI Calculation with Trayaksh Construction
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              We complement engineering integrity with pristine financial visibility. Once your layout parameters match our pre-vetted 40x50 blueprints, our dedicated liaison panel helps route your package to elite banking bodies to secure optimal custom rates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button 
              onClick={openModal}
              className="w-full sm:w-auto bg-[#A67153] hover:bg-[#8E5E41] text-white text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md">
              Connect With Finance Liaison <ArrowRight size={13} />
            </button>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              <ShieldCheck size={14} className="text-[#A67153]" /> <span>ISO 9001:2015 Structural System</span>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}