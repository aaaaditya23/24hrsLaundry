import React from 'react';

export default function CTASection() {
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
    <section className="bg-primary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Ready to experience hassle-free laundry service?
            </h2>
            <p className="text-white/80 mt-2">
              Book now and get 15% off your first order!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#booking" 
              className="bg-white text-primary hover:bg-neutral-100 font-semibold px-6 py-3 rounded-lg transition-colors inline-block text-center"
              onClick={(e) => scrollToSection(e, '#booking')}
            >
              Book Now
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block text-center"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
