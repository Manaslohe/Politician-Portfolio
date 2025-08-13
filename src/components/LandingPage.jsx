import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import BlogList from './BlogList';
import About from './About';
import VisionMission from './VisionMission';
import VideoGallery from './VideoGallery';
import PhotoGallery from './PhotoGallery';
import CallToAction from './CallToAction';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';
import '../styles/globals.css';

const LandingPage = () => {
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
    <div className="relative">
      <Header />
      <Hero />
      <BlogList />
      <About />
      <VisionMission />
      <VideoGallery />
      <PhotoGallery />
      <CallToAction />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default LandingPage;