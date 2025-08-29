import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { X, ChevronLeft, ChevronRight, Grid, Image as ImageIcon, Filter } from 'lucide-react';
import BackButton from '../components/BackButton';
import galleryData from '../data/galleryData';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [layoutType, setLayoutType] = useState('grid'); // 'grid' or 'masonry'
  const [isLoading, setIsLoading] = useState(true);
  
  // Use the categories from the shared data file
  const categories = galleryData.categories;
  
  // Use all images from the gallery data
  const allImages = galleryData.galleryImages;

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 600); // Simulate loading
  }, []);

  const nextImage = (category) => {
    if (!selectedImage) return;
    
    const filteredImages = category === 'all' 
      ? allImages 
      : allImages.filter(img => img.category === category);
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = (category) => {
    if (!selectedImage) return;
    
    const filteredImages = category === 'all' 
      ? allImages 
      : allImages.filter(img => img.category === category);
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <BackButton />

      {/* Hero Section */}
      <div className="relative bg-white text-gray-800 pt-16 pb-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              A Visual Journey of Progress
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Discover the moments that define our community's growth and transformation.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tab.Group>
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
              <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 shadow-md min-w-max">
                {categories.map((category) => (
                  <Tab
                    key={category.key}
                    className={({ selected }) =>
                      `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        selected
                          ? 'bg-[#0640AD] text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`
                    }
                  >
                    {category.name}
                    <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-gray-200 text-gray-600">
                      {category.key === 'all' 
                        ? allImages.length 
                        : allImages.filter(img => img.category === category.key).length}
                    </span>
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <div className="flex items-center gap-4 self-end sm:self-auto">
              <button
                onClick={() => setLayoutType(prev => prev === 'grid' ? 'masonry' : 'grid')}
                className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                {layoutType === 'grid' ? (
                  <>
                    <Grid size={18} />
                    <span className="hidden sm:inline text-sm">Grid</span>
                  </>
                ) : (
                  <>
                    <ImageIcon size={18} />
                    <span className="hidden sm:inline text-sm">Masonry</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <Tab.Panels>
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-center py-20"
                >
                  <div className="w-16 h-16 border-4 border-[#0640AD] border-t-transparent rounded-full animate-spin" />
                </motion.div>
              ) : (
                categories.map((category) => (
                  <Tab.Panel
                    key={category.key}
                    className={`${
                      layoutType === 'grid'
                        ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6'
                        : 'columns-2 sm:columns-3 md:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6'
                    }`}
                  >
                    {(category.key === 'all' 
                      ? allImages 
                      : allImages.filter(img => img.category === category.key)
                    ).map((image, index) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        key={image.id}
                        className={`relative group ${
                          layoutType === 'masonry' ? 'mb-4 sm:mb-6 break-inside-avoid' : ''
                        }`}
                        onClick={() => setSelectedImage(image)}
                      >
                        <div className={`relative overflow-hidden rounded-xl bg-gray-100 shadow-md ${
                          layoutType === 'grid' ? 'aspect-[4/3]' : ''
                        }`}>
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={e => { e.target.style.display = 'none'; }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className="text-white text-lg font-semibold truncate">{image.title}</h3>
                              <p className="text-white/80 text-sm">{image.date}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </Tab.Panel>
                ))
              )}
            </AnimatePresence>
          </Tab.Panels>
        </Tab.Group>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative max-w-5xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X size={24} />
                </button>
                <motion.img
                  layoutId={`image-${selectedImage.id}`}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
                >
                  <h3 className="text-white text-xl font-medium">{selectedImage.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{selectedImage.description}</p>
                  <p className="text-white/60 text-xs mt-2">{selectedImage.date}</p>
                </motion.div>
                
                {/* Navigation buttons */}
                <button
                  onClick={() => prevImage(Tab.selectedIndex)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => nextImage(Tab.selectedIndex)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                >
                  <ChevronRight size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryPage;
