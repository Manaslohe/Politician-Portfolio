import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import galleryData from '../data/galleryData';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // Use only the first 6 images from the gallery data
  const photos = galleryData.galleryImages.slice(0, 6);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = photos.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedImage(photos[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = photos.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedImage(photos[prevIndex]);
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the moments that define our community's journey and progress.
          </p>
          <div className="w-24 h-1 bg-[#0640AD] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Gallery Grid - Responsive and similar to Gallery.jsx */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {/* First Row - 3 images on desktop, 2 on mobile */}
          <div className="col-span-1">
            <div 
              className="relative w-full h-48 md:h-80 rounded-lg overflow-hidden shadow-md cursor-pointer group bg-white"
              onClick={() => openModal(photos[0])}
            >
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 group-hover:bg-gray-900/30 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-sm md:text-base font-medium truncate">{photos[0].title}</h3>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div 
              className="relative w-full h-48 md:h-80 rounded-lg overflow-hidden shadow-md cursor-pointer group bg-white"
              onClick={() => openModal(photos[1])}
            >
              <img
                src={photos[1].src}
                alt={photos[1].alt}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 group-hover:bg-gray-900/30 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-sm md:text-base font-medium truncate">{photos[1].title}</h3>
              </div>
            </div>
          </div>

          {/* Third image (hidden on mobile) */}
          <div className="hidden md:block">
            <div 
              className="relative w-full h-80 rounded-lg overflow-hidden shadow-md cursor-pointer group bg-white"
              onClick={() => openModal(photos[2])}
            >
              <img
                src={photos[2].src}
                alt={photos[2].alt}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 group-hover:bg-gray-900/30 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-sm md:text-base font-medium truncate">{photos[2].title}</h3>
              </div>
            </div>
          </div>
          
          {/* Second Row - Reorganized for mobile */}
          <div className="col-span-2 md:hidden">
            <div 
              className="relative w-full h-48 rounded-lg overflow-hidden shadow-md cursor-pointer group bg-white"
              onClick={() => openModal(photos[2])}
            >
              <img
                src={photos[2].src}
                alt={photos[2].alt}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 group-hover:bg-gray-900/30 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-sm md:text-base font-medium truncate">{photos[2].title}</h3>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div 
              className="relative w-full h-48 md:h-80 rounded-lg overflow-hidden shadow-md cursor-pointer group bg-white"
              onClick={() => openModal(photos[3])}
            >
              <img
                src={photos[3].src}
                alt={photos[3].alt}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 group-hover:bg-gray-900/30 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-sm md:text-base font-medium truncate">{photos[3].title}</h3>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div 
              className="relative w-full h-48 md:h-80 rounded-lg overflow-hidden shadow-md cursor-pointer group bg-white"
              onClick={() => openModal(photos[4])}
            >
              <img
                src={photos[4].src}
                alt={photos[4].alt}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 group-hover:bg-gray-900/30 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-sm md:text-base font-medium truncate">{photos[4].title}</h3>
              </div>
            </div>
          </div>

          <div className="col-span-2 md:hidden">
            <div 
              className="relative w-full h-48 rounded-lg overflow-hidden shadow-md cursor-pointer group bg-white"
              onClick={() => openModal(photos[5])}
            >
              <img
                src={photos[5].src}
                alt={photos[5].alt}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 group-hover:bg-gray-900/30 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-sm md:text-base font-medium truncate">{photos[5].title}</h3>
              </div>
            </div>
          </div>

        </div>

        {/* View All Photos Button */}
        <div className="text-center mt-8">
          <a
            href="/gallery"
            className="inline-block bg-[#0640AD] hover:bg-[#053490] text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View Full Gallery
          </a>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl z-10 bg-gray-900/40 rounded-full p-2"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-800/80 to-transparent">
              <h3 className="text-white text-xl font-medium">{selectedImage.title}</h3>
              <p className="text-white/80 text-sm">{selectedImage.description}</p>
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/40 text-white p-2 rounded-full hover:bg-gray-900/60"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/40 text-white p-2 rounded-full hover:bg-gray-900/60"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;

