
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import ProjectSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
     <>
        <HeroSection />
        <ProjectSection/>
        <PhilosophySection/>
        <TestimonialSection/>
        <ServicesSection/>
        <FAQSection/>
     </>
  );
}