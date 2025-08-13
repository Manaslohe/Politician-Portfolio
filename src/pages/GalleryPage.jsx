import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { X, Camera, Filter, Grid, Image as ImageIcon } from 'lucide-react';
import BackButton from '../components/BackButton';

const GALLERY_IMAGES = {
  events: [
    { src: '/gallery/events/1.jpg', title: 'Public Meeting', date: '2024-01-15' },
    { src: '/gallery/events/2.jpg', title: 'Community Gathering', date: '2024-01-20' },
    // Add more with similar structure
  ],
  rallies: [
    { src: '/gallery/rallies/1.jpg', title: 'Youth Rally' },
    // Add more rallies images
  ],
  work: [
    { src: '/gallery/work/1.jpg', title: 'Infrastructure Development' },
    // Add more work images
  ],
  personal: [
    { src: '/gallery/personal/1.jpg', title: 'Community Visit' },
    // Add more personal images
  ]
};

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [layoutType, setLayoutType] = useState('grid'); // 'grid' or 'masonry'
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simulate loading
  }, []);

  const categories = [
    { key: 'events', name: 'Events' },
    { key: 'rallies', name: 'Rallies' },
    { key: 'work', name: 'Work On-Ground' },
    { key: 'personal', name: 'Personal Moments' }
  ];

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
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 shadow-md">
                {categories.map((category) => (
                  <Tab
                    key={category.key}
                    className={({ selected }) =>
                      `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selected
                          ? 'bg-orange-500 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`
                    }
                  >
                    {category.name}
                    <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-gray-200 text-gray-600">
                      {GALLERY_IMAGES[category.key].length}
                    </span>
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setLayoutType(prev => prev === 'grid' ? 'masonry' : 'grid')}
                className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {layoutType === 'grid' ? <Grid size={20} /> : <ImageIcon size={20} />}
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
                  <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                </motion.div>
              ) : (
                categories.map((category) => (
                  <Tab.Panel
                    key={category.key}
                    className={`grid gap-6 ${
                      layoutType === 'grid'
                        ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                        : 'columns-1 sm:columns-2 md:columns-3 lg:columns-4'
                    }`}
                  >
                    {GALLERY_IMAGES[category.key].map((image, index) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        key={image.src}
                        className={`relative group ${
                          layoutType === 'masonry' ? 'mb-6 break-inside-avoid' : 'aspect-square'
                        }`}
                        onClick={() => setSelectedImage(image)}
                      >
                        <div className="relative overflow-hidden rounded-xl bg-gray-100">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className="text-white text-lg font-semibold">{image.title}</h3>
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
                  layoutId={`image-${selectedImage.src}`}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 text-white text-lg font-medium bg-black/50 px-4 py-2 rounded-lg"
                >
                  {selectedImage.title}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryPage;
