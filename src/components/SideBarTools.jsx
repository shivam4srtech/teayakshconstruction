import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";

const SIDEBAR_TOOLS = [
  { name: "Home Loan EMI Calculator", desc: "Estimate", url: "home-loan-emi-calculator" },
  { name: "Cost Estimator", desc: "Get construction estimate", url: "cost-estimator" },
  { name: "Material Estimator", desc: "calculate steel and brick quantities", url: "building-material-estimator" },
  { name: "Brick Calculator", desc: "calculate  brick quantities", url: "building-material-estimator" },
  { name: "Stamp Duty Calculator", desc: "stamp duty and registration fee", url: "stamp-duty-cost-estimator" }
];
export default function SideBarTools(){
    return(
        <>
            {/* 4. More Tools Card */}
            <div className="bg-[#2D2926] p-8 rounded-[1rem] text-white">
                <div className="flex items-center gap-3 mb-6">
                    <Calculator size={20} className="text-[#A67153]" />
                    <h4 className="font-bold uppercase text-xs tracking-widest">Tools &amp; Calculator</h4>
                </div>
                <div className="space-y-4">
                    {SIDEBAR_TOOLS.map((tool, i) => (
                    <Link 
                        key={i} 
                        href={`https://trayakshconstruction.com/${tool.url}`}
                        className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#A67153]/30 transition-all cursor-pointer group block">
                        <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold">{tool.name}</span>
                        <ArrowRight size={14} className="text-[#A67153] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </div>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest">{tool.desc}</p>
                    </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
