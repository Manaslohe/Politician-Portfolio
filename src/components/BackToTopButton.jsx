import React, { useState, useEffect } from 'react';
import { ArrowUp, ChevronUp } from 'lucide-react';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setShowButton(scrollTop > 300);
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-sky-200 border border-gray-200 text-gray-700 hover:text-orange-500 hover:border-orange-200 hover:bg-orange-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
        showButton
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to Top"
    >
      <ChevronUp size={20} className="transform hover:scale-110 hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
};
  
// Alternative Minimal Version
export const MinimalBackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-sky-300 border border-gray-200 text-gray-700 hover:text-orange-500 hover:border-orange-200 hover:bg-orange-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
        showButton
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to Top"
    >
      <ChevronUp size={20} className="transform hover:scale-110 hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
};




export default BackToTopButton;