import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleScrollToBlog = () => {
    const el = document.getElementById('blog-list-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
          filter: 'brightness(0.9)',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-1 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-0 text-left w-full lg:w-auto lg:absolute lg:left-0 lg:top-1/2 -translate-y-4/3 lg:-translate-y-4/3 lg:px-8">
              <div>
                <h1 className="font-space text-[2.5rem] lg:text-[5.5rem] leading-[0.9] font-bold text-white tracking-tight mb-2 lg:mb-4">
                  A People’s Leader
                </h1>
                <h1 className="font-space text-[2.2rem] lg:text-[4.5rem] leading-[1.1] font-bold text-white tracking-tight">
                  A Vision for Nagpur.
                </h1>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex justify-end text-left lg:text-right mt-8 lg:mt-0 w-full lg:w-auto lg:absolute lg:right-0 lg:top-1/2 lg:translate-y-12 lg:px-8">
              <div className="space-y-4 lg:space-y-6 inline-block">
                <h2 className="font-space text-[3.5rem] lg:text-[5.5rem] leading-[0.9] font-bold text-white tracking-tight">
                  Real<br />
                  Change
                </h2>
                <p className="text-base lg:text-lg text-blue-100 leading-relaxed tracking-wide">
                  From the grassroots to the Assembly <br />
                  – Building a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Website */}
      <div
        className="absolute bottom-12 left-4 lg:left-8 flex items-center space-x-3 text-white/90 group cursor-pointer z-30"
        onClick={handleScrollToBlog}
        style={{ zIndex: 30 }}
      >
        <ArrowDown className="w-4 h-4 lg:w-9 text-[#0640AD] lg:h-9 group-hover:translate-y-1 transition-transform duration-300" />
        <span
          className="text-xs lg:text-xl font-bold tracking-[0.02em] px-4 py-2 transition-colors duration-300 group-hover:text-[#0640AD]"
          style={{ color: 'white' }}
        >
          Scroll to website
        </span>
      </div>
    </div>
  );
};

export default Hero;