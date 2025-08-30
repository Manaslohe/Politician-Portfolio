import React, { useState } from 'react';
import Story from './Story';
import { Play } from 'lucide-react';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);
  const [activeStory, setActiveStory] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoId = "IH3jvllzLSU"; // Updated with the provided YouTube video ID

  return (
    <div className="relative min-h-auto overflow-hidden">
      {/* Story Component */}
      <div className="relative z-10 w-full pt-24">
        <Story
          activeGroup={activeGroup}
          setActiveGroup={setActiveGroup}
          activeStory={activeStory}
          setActiveStory={setActiveStory}
          showDescription={showDescription}
          setShowDescription={setShowDescription}
          progress={progress}
          setProgress={setProgress}
        />
      </div>

      {/* YouTube Video Section */}
      {!activeGroup && (
        <div className="relative z-10 w-4/5 mx-auto my-12">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            {!showVideo ? (
              // Thumbnail Container
              <div 
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setShowVideo(true)}
              >
                {/* Thumbnail Image */}
                <img 
                  src="/thumbnail.png" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */} 
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300 flex-col items-center justify-start lg:flex hidden lg:pt-64">
                  {/* Play Button */}
                  <button className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-[#0640AD] ml-1" />
                  </button>
                </div>
              </div>
            ) : (
              // YouTube Embed
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{ border: 'none' }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;