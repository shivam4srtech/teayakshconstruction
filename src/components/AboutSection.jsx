// components/AboutSection.jsx
'use client';
import Image from 'next/image';
import { CheckCircle, Trophy, Users, Clock } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-primary-900">
                <Image
                  src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Construction team at work"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-xl max-w-[220px] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Industry Recognition</p>
                  <p className="font-bold text-gray-800 text-lg">25+ Awards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <span className="text-secondary-500 text-sm uppercase tracking-[0.3em] font-semibold">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-gray-900">
              Crafting Excellence Since{' '}
              <span className="text-primary-600">1995</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6" />
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              BlueCrest Construction has been at the forefront of luxury construction, delivering 
              exceptional projects that blend innovation with timeless design. Our commitment to 
              quality and client satisfaction has made us a trusted name in the industry.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe that great architecture transforms lives. Every project we undertake is 
              approached with passion, precision, and an unwavering dedication to exceeding expectations.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-500" />
                <span className="text-gray-700">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-500" />
                <span className="text-gray-700">LEED Certified Experts</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-500" />
                <span className="text-gray-700">On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-500" />
                <span className="text-gray-700">24/7 Project Support</span>
              </div>
            </div>

            <div className="flex gap-8 pt-4 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-primary-600">280+</div>
                <div className="text-gray-500 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">150+</div>
                <div className="text-gray-500 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">25+</div>
                <div className="text-gray-500 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}