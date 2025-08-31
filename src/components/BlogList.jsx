import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, ArrowRight, Clock, Flag, Award } from 'lucide-react';
import blogData from '../data/blogData';
import bannerBlogData from '../data/bannerBlogData';
import BlogCard from './BlogCard';

const BlogList = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  
  // Fetch the banner blog from the separate array
  const bannerBlog = bannerBlogData[0];
  
  // Fetch the remaining blogs from the main blog data
  const displayedBlogs = blogData.slice(0, 3);
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Extract video ID from YouTube URL
  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <section id="blog-list-section" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
       
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
            <span className="text-[#0640AD]">News &</span>{' '}
            <span className="text-gray-900">Updates</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Keeping our citizens informed about initiatives and developments in Nagpur
          </p>
        </div>
        
        {/* Featured Latest Blog Banner */}
        <div className="mb-16">
          <div className="relative mx-auto w-full lg:w-[80%] border-b border-gray-200 pb-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              {/* Political Category Badge */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="bg-[#0640AD] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                  <Flag size={14} /> Latest Update
                </span>
              </div>
              
              <div className="flex flex-col lg:flex-row">
                {/* Image container */}
                <div className="relative lg:w-1/2 h-72 lg:h-[400px] cursor-pointer" onClick={() => setShowVideo(true)}>
                  {showVideo ? (
                    <div className="absolute inset-0 bg-black">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${getYoutubeId(bannerBlog.videoUrl)}?autoplay=1`}
                        title={bannerBlog.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <button 
                        className="absolute top-2 right-2 bg-white/80 p-2 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowVideo(false);
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={bannerBlog.coverImage} 
                        alt={bannerBlog.title}
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-[#0640AD] ml-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Content */}
                <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-gray-500 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <CalendarDays size={16} />
                      <span>{formatDate(bannerBlog.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{bannerBlog.readTime} min read</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif leading-tight">
                    {bannerBlog.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 text-lg">
                    {bannerBlog.excerpt}
                  </p>
                  
                  <button 
                    onClick={() => navigate(`/blog/${bannerBlog.id}`)}
                    className="inline-flex items-center gap-2 bg-[#0640AD] text-white px-6 py-3 rounded-full hover:bg-[#053289] transition-colors duration-300 w-fit"
                  >
                    Read Full Article <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section title for other blogs */}
        <div className="flex items-center gap-4 mb-12">
          <Award size={24} className="text-[#0640AD]" />
          <h3 className="text-2xl font-bold text-gray-900 font-serif">Recent Initiatives</h3>
          <div className="flex-grow h-px bg-gradient-to-r from-[#0640AD]/20 to-gray-200"></div>
        </div>
        
        {/* Cards Grid for other blogs */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            className="group bg-gradient-to-r from-[#0640AD] to-[#053289] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg flex items-center gap-2 mx-auto"
            onClick={() => navigate('/blog')}
          >
            View All Updates
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogList;