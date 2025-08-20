import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    { id: 1, url: '/gallery/1.jpg', title: 'Community Rally 2024' },
    { id: 2, url: '/gallery/2.jpg', title: 'Youth Conference' },
    { id: 3, url: '/gallery/3.webp', title: 'Town Hall Meeting' },
    // Add more photos
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the moments that define our community's journey and progress.
          </p>
          <div className="w-24 h-1 bg-[#0640AD] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Gallery Slider */}
        <div className="relative group">
          <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-2xl shadow-lg">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
                  index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-2xl font-semibold">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#0640AD]' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
