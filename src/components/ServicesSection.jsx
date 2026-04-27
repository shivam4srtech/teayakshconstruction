// components/ServicesSection.jsx
'use client';
import { Home, Building2, Briefcase, Trees, Ruler, HardHat } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Luxury Villas',
    description: 'Custom-designed villas with premium finishes, smart home technology, and breathtaking architectural details.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Building2,
    title: 'Commercial Towers',
    description: 'Iconic commercial spaces that combine functionality with striking design for maximum business impact.',
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    icon: Briefcase,
    title: 'Residential Complexes',
    description: 'Master-planned communities offering luxury amenities, green spaces, and modern living experiences.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Trees,
    title: 'Sustainable Design',
    description: 'Eco-friendly construction with energy-efficient solutions and sustainable materials.',
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    icon: Ruler,
    title: 'Interior Design',
    description: 'Bespoke interior solutions that reflect your style with premium materials and expert craftsmanship.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: HardHat,
    title: 'Project Management',
    description: 'End-to-end project coordination ensuring timely delivery, quality control, and budget adherence.',
    color: 'from-secondary-500 to-secondary-600',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-500 text-sm uppercase tracking-[0.3em] font-semibold">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-gray-900">
            Comprehensive <span className="text-primary-600">Construction</span> Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 text-lg">
            From concept to completion, we provide end-to-end construction solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-600 group-hover:text-secondary-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-primary-600 font-medium gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}