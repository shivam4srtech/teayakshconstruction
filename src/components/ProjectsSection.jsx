// components/ProjectsSection.jsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Azure Heights',
    category: 'Luxury Villa',
    location: 'Beverly Hills, CA',
    image: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A masterpiece of modern architecture featuring infinity pool, smart home integration, and panoramic ocean views.',
  },
  {
    id: 2,
    title: 'The Prism Tower',
    category: 'Commercial',
    location: 'Downtown, NYC',
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: '45-story sustainable commercial tower with sky gardens and LEED Platinum certification.',
  },
  {
    id: 3,
    title: 'Harbor Residences',
    category: 'Residential',
    location: 'Miami, FL',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Luxury waterfront community with private marina, rooftop infinity pool, and concierge services.',
  },
  {
    id: 4,
    title: 'Crystal Vista',
    category: 'Luxury Home',
    location: 'Aspen, CO',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Mountain retreat with floor-to-ceiling glass walls, geothermal heating, and breathtaking alpine views.',
  },
  {
    id: 5,
    title: 'Innovation Hub',
    category: 'Commercial',
    location: 'Austin, TX',
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Tech campus with collaborative spaces, green roofs, and cutting-edge sustainable design.',
  },
  {
    id: 6,
    title: 'Serenity Estates',
    category: 'Residential',
    location: 'Seattle, WA',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Eco-friendly residential community with community gardens, walking trails, and modern amenities.',
  },
];

const categories = ['All', 'Luxury Villa', 'Commercial', 'Residential', 'Luxury Home'];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary-500 text-sm uppercase tracking-[0.3em] font-semibold">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-gray-900">
            Featured <span className="text-primary-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 text-lg">
            Discover our finest creations that showcase innovation, quality, and architectural excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-200 text-sm mt-1">{project.location}</p>
                    <div className="flex items-center text-white/90 mt-3 gap-2">
                      <span className="text-sm">View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative h-96">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {selectedProject.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                <p className="text-primary-600 font-medium mb-4">{selectedProject.location}</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{selectedProject.description}</p>
                <div className="flex gap-4">
                  <button className="bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors">
                    Request Case Study
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-primary-600 hover:text-primary-600 transition-colors">
                    Share Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}