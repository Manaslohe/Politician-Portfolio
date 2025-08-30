import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import BlogList from './BlogList';
import SocialMediaPosts from './SocialMediaPosts';
import About from './About';
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

  return (
    <div className="relative">
      <Header />
      <Hero />
      <About />
      <BlogList />
      <SocialMediaPosts />
      <VideoGallery />
      <PhotoGallery />
      <CallToAction />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default LandingPage;