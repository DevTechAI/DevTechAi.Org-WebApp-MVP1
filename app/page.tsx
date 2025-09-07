"use client";

import { useState, useEffect, Suspense, lazy } from 'react';
import Navigation from '@/components/sections/Navigation';
import Animated3DHeaderV2 from '@/components/sections/Animated3DHeaderV2';

// Lazy load heavy components
const HeroSection = lazy(() => import('@/components/sections/HeroSection'));
const ServicesSection = lazy(() => import('@/components/sections/ServicesSection'));
const FeaturesSection = lazy(() => import('@/components/sections/FeaturesSection'));
const AboutSection = lazy(() => import('@/components/sections/AboutSection'));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection'));
const ContactSection = lazy(() => import('@/components/sections/ContactSection'));
const Footer = lazy(() => import('@/components/sections/Footer'));

// Loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        activeSection={activeSection} 
        onScrollToSection={scrollToSection} 
      />
      <Animated3DHeaderV2 />
      
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <FeaturesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}