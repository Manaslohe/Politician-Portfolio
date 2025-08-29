import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ChevronDown, ChevronUp } from 'lucide-react';
import storyData from '../data/storyData';

const Story = ({ activeGroup, setActiveGroup, activeStory, setActiveStory, showDescription, setShowDescription, progress, setProgress }) => {
  const progressTimer = useRef(null);

  const handleStoryOpen = (groupId) => {
    setActiveGroup(groupId);
    setActiveStory(0);
    setProgress(0);
    setShowDescription(false);
    document.body.classList.add('overflow-hidden'); // Disable scrolling
    document.body.classList.add('hide-content'); // Hide header and hero content
  };

  const handleClose = () => {
    setActiveGroup(null);
    setActiveStory(0);
    setShowDescription(false);
    if (progressTimer.current) clearInterval(progressTimer.current);
    document.body.classList.remove('overflow-hidden'); // Re-enable scrolling
    document.body.classList.remove('hide-content'); // Show header and hero content
  };

  const handleNext = () => {
    const currentGroup = storyData.find(g => g.id === activeGroup);
    if (activeStory < currentGroup.stories.length - 1) {
      setActiveStory(prev => prev + 1);
      setShowDescription(false);
      setProgress(0);
    } else if (activeGroup < storyData.length) {
      const nextGroupIndex = storyData.findIndex(g => g.id === activeGroup) + 1;
      if (nextGroupIndex < storyData.length) {
        setActiveGroup(storyData[nextGroupIndex].id);
        setActiveStory(0);
        setShowDescription(false);
        setProgress(0);
      } else {
        handleClose(); // Close when the last story is complete
      }
    } else {
      handleClose(); // Close when the last story is complete
    }
  };

  const handlePrevious = () => {
    if (activeStory > 0) {
      setActiveStory(prev => prev - 1);
      setShowDescription(false);
      setProgress(0);
    } else {
      const prevGroupIndex = storyData.findIndex(g => g.id === activeGroup) - 1;
      if (prevGroupIndex >= 0) {
        setActiveGroup(storyData[prevGroupIndex].id);
        setActiveStory(storyData[prevGroupIndex].stories.length - 1);
        setShowDescription(false);
        setProgress(0);
      }
    }
  };

  useEffect(() => {
    if (activeGroup !== null) {
      if (progressTimer.current) clearInterval(progressTimer.current);
      progressTimer.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 0.5;
        });
      }, 30);
    }
    return () => {
      if (progressTimer.current) {
        clearInterval(progressTimer.current);
      }
    };
  }, [activeGroup, activeStory]);

  return (
    <div className="w-full px-4 pt-8 pb-0 lg:pb-0 bg-white">
      {/* Story Previews */}
      {!activeGroup && (
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {storyData.map((group) => (
              <div
                key={group.id}
                onClick={() => handleStoryOpen(group.id)}
                className="flex flex-col items-center cursor-pointer min-w-[80px] md:min-w-[100px]"
              >
                <div className="w-12 h-12 md:w-20 md:h-20 rounded-full p-1 bg-blue-500">
                  <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={group.stories[0].image}
                      alt={group.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-[2.5vw] md:text-sm mt-2 text-gray-700">{group.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Story Viewer */}
      {activeGroup && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="relative w-full h-full md:w-[400px] md:h-[700px]">
            {/* Progress Bars */}
            <div className="absolute top-0 left-0 right-0 flex gap-1 p-2 z-20">
              {storyData.find(g => g.id === activeGroup).stories.map((_, index) => (
                <div key={index} className="h-1 flex-1 bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white"
                    style={{
                      width: `${index === activeStory ? progress : index < activeStory ? 100 : 0}%`,
                      transition: 'width 0.3s linear'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Story Content */}
            <div className="w-full h-full relative">
              <img
                src={storyData.find(g => g.id === activeGroup).stories[activeStory].image}
                alt="Story"
                className="w-full h-full object-cover"
              />

              {/* Description Toggle */}
              <button
                onClick={() => setShowDescription(!showDescription)}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 text-white bg-black/50 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-black/70 transition"
              >
                {showDescription ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                Read {showDescription ? 'less' : 'more'}
              </button>

              {/* Description Panel */}
              <div
                className={`absolute left-0 right-0 bg-black/75 text-white p-6 transition-transform duration-300 ${
                  showDescription ? 'top-2/3 transform -translate-y-2/3' : 'bottom-0 translate-y-full'
                }`}
              >
                <p className="text-sm leading-relaxed">
                  {storyData.find(g => g.id === activeGroup).stories[activeStory].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Story;
