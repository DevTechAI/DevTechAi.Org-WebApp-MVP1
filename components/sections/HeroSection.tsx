"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ArrowRight, BarChart3, Zap, Shield } from 'lucide-react';
import Image from "next/image";   // ✅ Added for logo

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ onScrollToSection }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-xl transform-gpu transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
          }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-200/30 to-purple-200/30 rounded-full blur-lg transform-gpu transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px) rotateX(${mousePosition.y * -0.1}deg) rotateY(${mousePosition.x * -0.1}deg)`,
          }}
        />
        <div 
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full blur-lg transform-gpu transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 transform hover:scale-105 transition-all duration-300">
                <Sparkles className="w-4 h-4 mr-1" />
                AI-Powered Solutions
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Intelligent
                </span>{' '}
                Solutions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                DevTechAi.Org develops cutting-edge software that streamlines operations, enhances decision-making, 
                and drives innovation across industries. From machine learning to automation, 
                we make AI accessible and impactful.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                onClick={() => onScrollToSection('contact')}
              >
                Business Enquiry
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                onClick={() => onScrollToSection('services')}
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-600">GenAI & AgenticAI Projects Completed</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* ✅ Mock card with logo instead of Brain */}
          <div className="relative">
            <div 
              className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl p-8 transform rotate-3 shadow-2xl hover:rotate-6 transition-transform duration-500 hover:shadow-3xl"
              style={{
                transform: `rotate(3deg) translateX(${mousePosition.x * 0.01}px) translateY(${mousePosition.y * 0.01}px)`,
              }}
            >
              <div className="bg-white rounded-2xl p-6 transform -rotate-3 hover:-rotate-6 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Image 
                      src="/devtechai-logo.png" 
                      alt="DevTechAi Logo" 
                      width={32} 
                      height={32} 
                      className="h-8 w-8"
                    />
                    <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gradient-to-r from-purple-200 to-blue-200 rounded w-full animate-pulse"></div>
                    <div className="h-3 bg-gradient-to-r from-green-200 to-purple-200 rounded w-4/5 animate-pulse"></div>
                    <div className="h-3 bg-gradient-to-r from-blue-200 to-green-200 rounded w-3/4 animate-pulse"></div>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-300">
                      <BarChart3 className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-300">
                      <Zap className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-300">
                      <Shield className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ✅ End of mock card */}
        </div>
      </div>
    </section>
  );
}
