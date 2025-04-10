import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary to-blue-400 text-white">
      <div className="container mx-auto py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Professional Laundry Services for Your Busy Life
            </h1>
            <p className="text-lg mb-8 opacity-90">
              We take care of your laundry so you can focus on what matters most. Fast, reliable, and eco-friendly services.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#booking" 
                className="bg-white text-primary hover:bg-neutral-100 font-semibold px-6 py-3 rounded-lg transition-colors inline-block text-center"
                onClick={(e) => scrollToSection(e, '#booking')}
              >
                Book Now
              </a>
              <a 
                href="#services" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block text-center"
                onClick={(e) => scrollToSection(e, '#services')}
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=600&h=400" 
                alt="Neat folded laundry" 
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 p-4 rounded-lg shadow-lg">
              <p className="font-bold text-lg">100% Satisfaction</p>
              <p className="text-sm">Guaranteed clean & fresh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
