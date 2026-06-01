'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';
import { useModalStore } from '@/store/useModalStore';
import BlogSidebar from './BlogSidebar';

const SIDEBAR_ARTICLES = [
  { title: "Top 10 Vastu Tips for Modern Homes", readTime: "5 min read" },
  { title: "Understanding Foundation Types: Pile vs. Raft", readTime: "8 min read" },
  { title: "How to choose the right flooring for 2026", readTime: "4 min read" }
];

const SIDEBAR_TOOLS = [
  { name: "Brick Calculator", desc: "Estimate exact brick count" },
  { name: "Paint Area Estimator", desc: "Wall coverage calculator" },
  { name: "Steel Weight Chart", desc: "Structural steel reference" }
];

export default function EstimatorContent() {
  const openModal = useModalStore((state) => state.openModal);  
  return (
    <section className="pb-0 py-8 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="flex flex-col lg:flex-row md:gap-12 gap-4">
          
          {/* MAIN CONTENT AREA (Left) */}
          <div className="flex-1 space-y-12">
            
            {/* Section 1 */}
            <article className="prose prose-stone max-w-none mb-4">
              <h2 className="md:text-3xl text-xl font-bold text-[#2D2926] md:mb-6 mb-3 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#A67153] rounded-full" />
                About House Construction Cost Calculator
              </h2>
              <p className="text-gray-600 leading-relaxed md:text-lg text-sm">
                Building a home is likely the most significant investment of your life. Our **House Construction Cost Calculator** is engineered to strip away the ambiguity of "approximate quotes." It serves as a financial blueprint, utilizing real-time market data across India to provide a granular breakdown of your potential expenses. Whether you are planning a cozy 1200 sq.ft. villa or a sprawling luxury estate, this tool aligns your vision with current economic realities.
              </p>
            </article>

            {/* Section 2 */}
            <article className="prose prose-stone max-w-none mb-4">
              <h2 className="md:text-3xl text-xl font-bold text-[#2D2926] md:mb-6 mb-3 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#A67153] rounded-full" />
                Why Choose Trayaksh Construction Cost Estimator?
              </h2>
              <p className="md:text-lg text-sm text-gray-600 leading-relaxed md:mb-6 mb-3">
                Most online estimators use flat-rate averages that lead to "budget creep" halfway through the project. **Trayaksh Construction** takes a different approach:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "City-Specific Intelligence: Adjusted for labor rates in Bengaluru, Hyderabad, and more.",
                  "Zero Hidden Margins: Transparent material-to-labor ratios.",
                  "Live Market Updates: Reflects 2026 inflation and material indices.",
                  "Architectural Depth: Considers balconies, utilities, and parking specifically."
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-[#F8F5F2] rounded-xl border-l-2 border-[#A67153]">
                    <CheckCircle2 className="text-[#A67153] shrink-0" size={18} />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Section 3 */}
            <article className="prose prose-stone max-w-none mb-4">
              <h2 className="md:text-3xl text-xl font-bold text-[#2D2926] md:mb-6 mb-3 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#A67153] rounded-full" />
                About Our Packages: Basic, Premium & Luxury
              </h2>
              <p className="md:text-lg text-sm text-gray-600 leading-relaxed md:mb-6 mb-3">
                We’ve categorized our construction standards into three distinct tiers, ensuring that quality is accessible at every budget level.
              </p>
              <div className="space-y-6">
                <PackageCard 
                  title="Basic Package" 
                  desc="Focuses on structural integrity and durability. Ideal for first-time homeowners looking for a solid foundation with standard, high-quality local materials."
                />
                <PackageCard 
                  title="Premium Package" 
                  desc="The Trayaksh sweet spot. Features superior finishes, branded plumbing, and advanced electrical layouts designed for modern lifestyle needs."
                />
                <PackageCard 
                  title="Luxury Package" 
                  desc="The ultimate architectural expression. Includes imported marble, smart-home automation readiness, and customized structural aesthetics."
                />
              </div>
            </article>

            {/* Section 4 */}
            <article className="prose prose-stone max-w-none mb-4 bg-[#2D2926] md:p-8 p-3 md:rounded-[2.5rem] rounded-xl text-white">
                <h2 className="md:text-3xl text-xl font-bold md:mb-6 mb-3 text-[#A67153]">
                    How to Use the Calculator
                </h2>
                <ol className="space-y-6 text-white/70">
                    <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-[#A67153] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">1</span>
                    <span className='md:text-lg text-sm'>
                        <strong>Identify Your Location:</strong> Select your <strong>City</strong> from the dropdown. This is crucial as material prices and labor wages fluctuate significantly between cities like Bengaluru, Hyderabad, and Chennai.
                    </span>
                    </li>
                    <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-[#A67153] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">2</span>
                    <span className='md:text-lg text-sm'>
                        <strong>Define Your Floor Plan:</strong> Enter your <strong>Slab Area</strong> and the <strong>Number of Floors</strong> you plan to build. Our system will automatically calculate the <strong>Total Built-up Area</strong>, saving you the manual math.
                    </span>
                    </li>
                    
                    <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-[#A67153] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">3</span>
                    <span className='md:text-lg text-sm'>
                        <strong>Compare Packages:</strong> Once you hit "Get My Estimate," you can toggle between <strong>Basic and Premium packages</strong>. This allows you to see the exact price-per-square-foot difference based on varied material specifications for the kitchen, bathroom, and flooring.
                    </span>
                    </li>
                </ol>
            </article>
          </div>

          {/* SIDEBAR (Right) */}
          <aside className="w-full lg:w-[350px] space-y-8">
            
            <BlogSidebar/>

           

          </aside>

        </div>
      </div>
    </section>
  );
}

function PackageCard({ title, desc }) {
  return (
    <div className="group border-b border-gray-100  hover:border-[#A67153]/30 transition-all pb-3 mb-0">
      <h4 className="text-lg font-bold text-[#2D2926] mb-2 group-hover:text-[#A67153] transition-colors">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}